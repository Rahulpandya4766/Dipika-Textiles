import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailsModal from './components/ProductDetailsModal';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Heritage from './pages/Heritage';
import InquiryDesk from './pages/InquiryDesk';
import Contact from './pages/Contact';

// Types and Data
import { PageId, CartItem, Product } from './types';

export default function App() {
  // Page state routing
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  
  // Fabric filter bridge (Home -> Shop transition)
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  // Interactive UI triggers
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Persistent Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dt_inquiry_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save cart to local storage dynamically
  useEffect(() => {
    localStorage.setItem('dt_inquiry_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Cart Handlers
  const handleAddToCart = (
    product: Product,
    quantity: number,
    selectedColor: string,
    orderType: 'retail' | 'wholesale'
  ) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        item => 
          item.product.id === product.id && 
          item.selectedColor === selectedColor && 
          item.orderType === orderType
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor, orderType }];
      }
    });

    // Auto-open drawer for instant checkout confirmation
    setCartDrawerOpen(true);
  };

  // Quick Card Add Handler (adds default color + min wholesale qty or 1 retail)
  const handleAddToCartQuick = (product: Product, orderType: 'retail' | 'wholesale') => {
    const defaultColor = product.colors[0] || 'Default';
    const quantity = orderType === 'wholesale' ? product.wholesaleMinQty : 1;
    handleAddToCart(product, quantity, defaultColor, orderType);
  };

  const handleUpdateQty = (idx: number, newQty: number) => {
    setCartItems(prev => {
      const updated = [...prev];
      if (idx >= 0 && idx < updated.length) {
        updated[idx].quantity = newQty;
      }
      return updated;
    });
  };

  const handleRemoveItem = (idx: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== idx));
  };

  const handleUpdateOrderType = (idx: number, type: 'retail' | 'wholesale') => {
    setCartItems(prev => {
      const updated = [...prev];
      if (idx >= 0 && idx < updated.length) {
        updated[idx].orderType = type;
        // Adjust quantity to min boundary if toggling to wholesale
        if (type === 'wholesale') {
          updated[idx].quantity = Math.max(updated[idx].product.wholesaleMinQty, updated[idx].quantity);
        }
      }
      return updated;
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('dt_inquiry_cart');
  };

  const handleProceedToInquiry = () => {
    setCartDrawerOpen(false);
    setCurrentPage('cart');
  };

  // Scroll to top on page switches to mimic native page transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Total cart badge quantity count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-editorial-cream font-sans text-editorial-charcoal" id="app-root-container">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
      />

      {/* Dynamic Multi-page Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home
            setCurrentPage={setCurrentPage}
            onOpenDetails={setSelectedProduct}
            onAddToCart={handleAddToCartQuick}
            setSelectedCategoryFilter={setSelectedCategoryFilter}
          />
        )}

        {currentPage === 'shop' && (
          <Shop
            onOpenDetails={setSelectedProduct}
            onAddToCart={handleAddToCartQuick}
            selectedCategoryFilter={selectedCategoryFilter}
            setSelectedCategoryFilter={setSelectedCategoryFilter}
          />
        )}

        {currentPage === 'heritage' && <Heritage />}

        {currentPage === 'cart' && (
          <InquiryDesk
            cartItems={cartItems}
            setCurrentPage={setCurrentPage}
            onClearCart={handleClearCart}
          />
        )}

        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Unified Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Interactive Global Slide Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onUpdateOrderType={handleUpdateOrderType}
        onProceedToInquiry={handleProceedToInquiry}
      />

      {/* Quick View Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

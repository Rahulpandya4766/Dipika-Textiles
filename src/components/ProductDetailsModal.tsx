import { useState } from 'react';
import { Product } from '../types';
import { X, Check, ShoppingBag, PhoneCall, ShieldCheck, Truck, ListCollapse } from 'lucide-react';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedColor: string, orderType: 'retail' | 'wholesale') => void;
}

export default function ProductDetailsModal({ product, onClose, onAddToCart }: ProductDetailsModalProps) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || 'Default');
  const [orderType, setOrderType] = useState<'retail' | 'wholesale'>('wholesale');
  const [quantity, setQuantity] = useState(product.wholesaleMinQty);

  // Sync quantity boundaries when order type changes
  const handleOrderTypeChange = (type: 'retail' | 'wholesale') => {
    setOrderType(type);
    if (type === 'wholesale') {
      setQuantity(Math.max(product.wholesaleMinQty, quantity));
    } else {
      setQuantity(1);
    }
  };

  const handleQuantityChange = (val: number) => {
    if (orderType === 'wholesale') {
      setQuantity(Math.max(product.wholesaleMinQty, val));
    } else {
      setQuantity(Math.max(1, val));
    }
  };

  const handleAddAndClose = () => {
    onAddToCart(product, quantity, selectedColor, orderType);
    onClose();
  };

  const savingsAmount = (product.price - product.wholesalePrice) * quantity;
  const isWholesaleQualifying = orderType === 'wholesale' && quantity >= product.wholesaleMinQty;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="product-detail-modal">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Dark Overlay */}
        <div 
          className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity" 
          aria-hidden="true" 
          onClick={onClose}
        ></div>

        {/* Trick to center modal content on desktop */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full animate-scale-in">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
            id="close-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Image Gallery */}
            <div className="p-6 sm:p-8 bg-stone-50 border-b md:border-b-0 md:border-r border-stone-100">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white border border-stone-200">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Thumbnails if multiple images exist */}
              {product.images.length > 1 && (
                <div className="flex gap-2.5 mt-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 rounded-md overflow-hidden border-2 bg-white transition-all cursor-pointer ${
                        activeImage === img ? 'border-amber-700 scale-95 shadow-xs' : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <img src={img} alt={`view-${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Indicators */}
              <div className="mt-8 space-y-3.5 pt-6 border-t border-stone-200/60">
                <div className="flex items-center gap-2.5 text-xs text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span><strong>100% Quality Assurance:</strong> In-house manufactured premium fabrics.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-600">
                  <Truck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span><strong>PAN India Bulk Dispatch:</strong> Fully insured transit with fast delivery.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Add to Cart Forms */}
            <div className="p-6 sm:p-8 flex flex-col h-full max-h-[85vh] overflow-y-auto">
              {/* Product Core Metadata */}
              <div className="mb-4">
                <span className="text-[10px] tracking-wider uppercase font-mono font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded">
                  {product.fabric} Saree
                </span>
                <span className="ml-3 text-xs text-stone-500 font-mono font-bold">Code: {product.code}</span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                {product.name}
              </h2>

              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {/* Specification Accordion Section */}
              <div className="bg-stone-50 border border-stone-200/60 rounded-xl p-4.5 mb-6 text-xs text-stone-700 space-y-2.5">
                <h4 className="font-semibold text-stone-900 uppercase font-mono tracking-wider flex items-center gap-1.5 pb-2 border-b border-stone-200/80 mb-2">
                  <ListCollapse className="w-4 h-4 text-amber-700" />
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-medium">
                  <div><span className="text-stone-400 font-normal">Saree Length:</span> {product.specifications.length}</div>
                  <div><span className="text-stone-400 font-normal">Blouse Piece:</span> {product.specifications.blouse}</div>
                  <div className="col-span-2"><span className="text-stone-400 font-normal">Weaving Work:</span> {product.specifications.work}</div>
                  <div><span className="text-stone-400 font-normal">Fabric Purity:</span> {product.specifications.purity}</div>
                  <div><span className="text-stone-400 font-normal">Wash Care:</span> {product.specifications.washCare}</div>
                </div>
              </div>

              {/* Order Type Toggle Selector (Retail vs Wholesale) */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-2.5">
                  Order Mode (Wholesale Pricing Active)
                </label>
                <div className="grid grid-cols-2 gap-2 bg-stone-100 p-1.5 rounded-lg border border-stone-200">
                  <button
                    onClick={() => handleOrderTypeChange('wholesale')}
                    className={`py-2 px-3 text-xs font-bold rounded-md tracking-wider transition-all cursor-pointer ${
                      orderType === 'wholesale' 
                        ? 'bg-amber-700 text-white shadow-xs' 
                        : 'text-stone-600 hover:bg-stone-200/50'
                    }`}
                  >
                    Wholesale (Min {product.wholesaleMinQty} Qty)
                  </button>
                  <button
                    onClick={() => handleOrderTypeChange('retail')}
                    className={`py-2 px-3 text-xs font-bold rounded-md tracking-wider transition-all cursor-pointer ${
                      orderType === 'retail' 
                        ? 'bg-stone-900 text-white shadow-xs' 
                        : 'text-stone-600 hover:bg-stone-200/50'
                    }`}
                  >
                    Retail (Single Piece)
                  </button>
                </div>
              </div>

              {/* Pricing Display depending on selected order type */}
              <div className="mb-6 p-4 rounded-xl border border-stone-200/80 bg-stone-50/70 flex justify-between items-center">
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-stone-500">Unit Price Rate</span>
                  <span className="text-stone-900 font-serif text-xl sm:text-2xl font-bold">
                    ₹{orderType === 'wholesale' ? product.wholesalePrice.toLocaleString('en-IN') : product.price.toLocaleString('en-IN')}
                  </span>
                </div>
                {orderType === 'wholesale' && (
                  <div className="text-right">
                    <span className="inline-block bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded mb-1">
                      Save ₹{(product.price - product.wholesalePrice).toLocaleString('en-IN')} per piece
                    </span>
                    <span className="block text-[10px] text-stone-400 font-mono">Wholesale Discount Applied</span>
                  </div>
                )}
              </div>

              {/* Color Swatch Selector */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-2">
                  Select Shade Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 rounded-md border text-xs font-medium tracking-wide transition-all cursor-pointer flex items-center gap-1 ${
                        selectedColor === color
                          ? 'border-amber-700 bg-amber-50 text-amber-900 font-bold ring-2 ring-amber-700/10'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      {selectedColor === color && <Check className="w-3.5 h-3.5 text-amber-700" />}
                      <span>{color}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Add To Inquiry Cart Container */}
              <div className="mt-auto pt-6 border-t border-stone-100 flex flex-wrap gap-4 items-center">
                <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden shrink-0">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3.5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm cursor-pointer transition-colors"
                  >
                    -
                  </button>
                  <span className="px-5 py-2 text-sm font-bold text-stone-900 font-mono w-14 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3.5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm cursor-pointer transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddAndClose}
                  className="flex-1 min-w-[180px] py-3.5 px-6 rounded-lg bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-900/10"
                >
                  <ShoppingBag className="w-4.5 h-4.5" />
                  <span>Add {quantity} to Inquiry Cart</span>
                </button>
              </div>

              {orderType === 'wholesale' && quantity < product.wholesaleMinQty && (
                <p className="mt-2.5 text-xs text-red-600 font-medium">
                  * Minimum wholesale volume is {product.wholesaleMinQty} pieces. Switch to retail mode for individual purchases.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

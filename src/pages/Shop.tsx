import { useState, useMemo } from 'react';
import { Product } from '../types';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw, X } from 'lucide-react';

interface ShopProps {
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, orderType: 'retail' | 'wholesale') => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;
}

export default function Shop({ 
  onOpenDetails, 
  onAddToCart,
  selectedCategoryFilter,
  setSelectedCategoryFilter 
}: ShopProps) {
  
  // Local filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductType, setSelectedProductType] = useState<string>('all');
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(20000);
  const [sortBy, setSortBy] = useState<string>('default');

  // Available Fabrics list
  const fabricsList = ['all', 'Banarasi Silk', 'Kanjeevaram Silk', 'Organza', 'Georgette', 'Chiffon', 'Cotton', 'Silk Crepe'];
  
  // Available Product Types
  const productTypes = [
    { value: 'all', label: 'All Garments' },
    { value: 'saree', label: 'Premium Sarees' },
    { value: 'dress_material', label: 'Dress Materials' },
    { value: 'lehenga', label: 'Designer Lehengas' }
  ];

  // Reset all filters helper
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategoryFilter('all');
    setSelectedProductType('all');
    setMaxPriceFilter(20000);
    setSortBy('default');
  };

  // Filter and sort products dynamically using useMemo
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search query filter (by name or code)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.code.toLowerCase().includes(query) ||
        p.fabric.toLowerCase().includes(query)
      );
    }

    // Fabric filter
    if (selectedCategoryFilter !== 'all' && selectedCategoryFilter !== '') {
      result = result.filter(p => p.fabric === selectedCategoryFilter);
    }

    // Product type filter
    if (selectedProductType !== 'all') {
      result = result.filter(p => p.category === selectedProductType);
    }

    // Price ceiling filter
    result = result.filter(p => p.price <= maxPriceFilter);

    // Sorting algorithm
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'code-alpha') {
      result.sort((a, b) => a.code.localeCompare(b.code));
    }

    return result;
  }, [searchQuery, selectedCategoryFilter, selectedProductType, maxPriceFilter, sortBy]);

  return (
    <div className="bg-editorial-cream py-12 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 animate-fade-in" id="shop-catalog-page">
      
      {/* Header Titles */}
      <div className="border-b border-editorial-charcoal/10 pb-8 mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">Manufacturers Catalog</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-editorial-charcoal mt-1">Our Premium Saree Collection</h1>
          <p className="text-editorial-gray text-xs sm:text-sm mt-2 max-w-xl font-sans font-light">
            Filter by fabric, type, or budget. Wholesale prices automatically apply to min qty packs. All designs are in-stock and ready for PAN India transport.
          </p>
        </div>
        
        {/* Dynamic Items Counter */}
        <div className="bg-editorial-charcoal/5 text-editorial-charcoal font-sans text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-none border border-editorial-charcoal/10 shrink-0 self-start md:self-end font-bold">
          Showing <strong>{filteredProducts.length}</strong> of {products.length} Designs
        </div>
      </div>

      {/* Control Panel Grid: Filters and Search */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10" id="shop-filters-grid">
        
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6 bg-white p-6 rounded-none border border-editorial-charcoal/10">
          <div className="flex items-center justify-between pb-4 border-b border-editorial-charcoal/10">
            <h3 className="font-bold text-editorial-charcoal text-xs tracking-[0.15em] uppercase font-sans flex items-center gap-1.5">
              <SlidersHorizontal className="w-4 h-4 text-editorial-red" />
              Filter Tools
            </h3>
            <button 
              onClick={handleResetFilters}
              className="text-[10px] text-editorial-red hover:text-editorial-charcoal font-bold font-sans uppercase flex items-center gap-1 cursor-pointer transition-colors"
              title="Reset all search options"
            >
              <RefreshCw className="w-3 h-3" />
              Clear
            </button>
          </div>

          {/* Product Category Filter */}
          <div>
            <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold mb-2.5">
              Product Category
            </label>
            <div className="space-y-1">
              {productTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedProductType(type.value)}
                  className={`w-full text-left text-xs font-semibold py-2 px-3 rounded-none transition-all cursor-pointer flex items-center justify-between ${
                    selectedProductType === type.value 
                      ? 'bg-editorial-charcoal text-white font-bold' 
                      : 'text-editorial-charcoal/80 hover:bg-editorial-cream'
                  }`}
                >
                  <span className="font-sans uppercase tracking-wider text-[11px]">{type.label}</span>
                  {selectedProductType === type.value && <X className="w-3 h-3 text-editorial-red" />}
                </button>
              ))}
            </div>
          </div>

          {/* Fabric Material Selection */}
          <div>
            <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold mb-2.5">
              Fabric Weave
            </label>
            <div className="flex flex-wrap gap-1">
              {fabricsList.map((fab) => (
                <button
                  key={fab}
                  onClick={() => setSelectedCategoryFilter(fab === 'all' ? 'all' : fab)}
                  className={`text-[9px] font-bold px-2.5 py-1.5 rounded-none border tracking-wider uppercase transition-all cursor-pointer ${
                    (selectedCategoryFilter === fab || (fab === 'all' && selectedCategoryFilter === ''))
                      ? 'bg-editorial-charcoal text-white border-editorial-charcoal font-bold'
                      : 'bg-white border-editorial-charcoal/10 text-editorial-charcoal/70 hover:border-editorial-charcoal'
                  }`}
                >
                  {fab === 'all' ? 'All Fabrics' : fab}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-2 font-sans text-xs">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold">
                Max Budget Rate
              </label>
              <span className="font-bold text-editorial-charcoal">
                ₹{maxPriceFilter.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="20000"
              step="500"
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
              className="w-full accent-editorial-charcoal cursor-pointer h-1 bg-editorial-charcoal/10 rounded-none appearance-none"
            />
            <div className="flex justify-between text-[9px] text-editorial-charcoal/40 font-sans tracking-widest mt-1">
              <span>₹2,000</span>
              <span>₹20,000</span>
            </div>
          </div>
        </div>

        {/* Catalog List / Grid Area */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Top Search bar & Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 rounded-none border border-editorial-charcoal/10 w-full font-sans">
            
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-editorial-charcoal/40" />
              <input
                type="text"
                placeholder="Search premium designs by name or item code (e.g. DT-BAN)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-none border border-editorial-charcoal/10 text-editorial-charcoal text-xs sm:text-sm focus:outline-none focus:border-editorial-charcoal"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-editorial-red hover:text-editorial-charcoal text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <ArrowUpDown className="w-3.5 h-3.5 text-editorial-charcoal/40" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto text-xs bg-white border border-editorial-charcoal/10 rounded-none p-2.5 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal font-sans"
              >
                <option value="default">Relevance / Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="code-alpha">Model Code: A-Z</option>
              </select>
            </div>
          </div>

          {/* Active Filter Indicators */}
          {(searchQuery || selectedCategoryFilter !== 'all' || selectedProductType !== 'all' || maxPriceFilter < 20000) && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-sans">
              <span className="text-editorial-charcoal/50 uppercase text-[9px] tracking-wider font-bold">Active Filters:</span>
              
              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 bg-editorial-charcoal/5 text-editorial-charcoal py-1 px-3 border border-editorial-charcoal/10 rounded-none text-[11px]">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-editorial-red font-bold font-sans">×</button>
                </span>
              )}
              {selectedCategoryFilter !== 'all' && selectedCategoryFilter !== '' && (
                <span className="inline-flex items-center gap-1.5 bg-editorial-charcoal/5 text-editorial-charcoal py-1 px-3 border border-editorial-charcoal/10 rounded-none text-[11px]">
                  Fabric: {selectedCategoryFilter}
                  <button onClick={() => setSelectedCategoryFilter('all')} className="hover:text-editorial-red font-bold font-sans">×</button>
                </span>
              )}
              {selectedProductType !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-editorial-charcoal/5 text-editorial-charcoal py-1 px-3 border border-editorial-charcoal/10 rounded-none text-[11px]">
                  Type: {productTypes.find(t => t.value === selectedProductType)?.label}
                  <button onClick={() => setSelectedProductType('all')} className="hover:text-editorial-red font-bold font-sans">×</button>
                </span>
              )}
              {maxPriceFilter < 20000 && (
                <span className="inline-flex items-center gap-1.5 bg-editorial-charcoal/5 text-editorial-charcoal py-1 px-3 border border-editorial-charcoal/10 rounded-none text-[11px]">
                  Max Price: ₹{maxPriceFilter.toLocaleString('en-IN')}
                  <button onClick={() => setMaxPriceFilter(20000)} className="hover:text-editorial-red font-bold font-sans">×</button>
                </span>
              )}
            </div>
          )}

          {/* Main Grid List */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-editorial-charcoal/10 rounded-none p-16 text-center">
              <div className="w-16 h-16 rounded-none bg-editorial-cream border border-editorial-charcoal/10 flex items-center justify-center text-editorial-charcoal mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-editorial-charcoal">No Matching Designs Found</h3>
              <p className="text-editorial-gray text-xs mt-2 max-w-sm mx-auto font-sans font-light">
                We couldn't find any products matching your specific selection. Try resetting filters or shortening your search query.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-6 px-6 py-3 rounded-none bg-editorial-charcoal hover:bg-editorial-red text-white font-bold text-xs tracking-widest uppercase cursor-pointer transition-colors"
              >
                Show All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onOpenDetails={onOpenDetails}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

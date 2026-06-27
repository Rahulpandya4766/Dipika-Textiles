import { Product } from '../types';
import { Eye, Plus, ShoppingCart, Tag, Percent } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, orderType: 'retail' | 'wholesale') => void;
  key?: string | number;
}

export default function ProductCard({ product, onOpenDetails, onAddToCart }: ProductCardProps) {
  // Calculate potential wholesale savings percentage
  const savingsPct = Math.round(((product.price - product.wholesalePrice) / product.price) * 100);

  return (
    <div 
      className="bg-white rounded-none border border-editorial-charcoal/10 hover:border-editorial-charcoal transition-all duration-300 flex flex-col overflow-hidden group"
      id={`product-card-${product.id}`}
    >
      {/* Product Image Area with Badges & Hover Controls */}
      <div className="relative aspect-[4/3] bg-editorial-sand/40 overflow-hidden shrink-0 border-b border-editorial-charcoal/5">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Dynamic Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {product.isLatest && (
            <span className="text-[8px] font-sans font-bold tracking-widest uppercase bg-editorial-charcoal text-white px-2 py-1 rounded-none shadow-none">
              Latest Arrival
            </span>
          )}
          {product.isBestSeller && (
            <span className="text-[8px] font-sans font-bold tracking-widest uppercase bg-editorial-red text-white px-2 py-1 rounded-none shadow-none">
              Bestseller
            </span>
          )}
        </div>

        {/* Wholesale Discount Flag */}
        <div className="absolute top-2 right-2 bg-editorial-red text-white text-[8px] font-sans font-bold tracking-widest uppercase py-1 px-2 rounded-none flex items-center gap-1 shadow-none z-10">
          <Percent className="w-3 h-3" />
          <span>Save {savingsPct}%</span>
        </div>

        {/* Hover Quick Actions Mask */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
          <button
            onClick={() => onOpenDetails(product)}
            className="p-3 bg-white text-editorial-charcoal hover:bg-editorial-charcoal hover:text-white transition-colors cursor-pointer transform translate-y-2 group-hover:translate-y-0 duration-300 rounded-none border border-editorial-charcoal/20 shadow-md"
            title="Quick View Saree Details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Fabric & Code */}
        <div className="flex justify-between items-center text-[10px] text-editorial-charcoal/60 font-sans uppercase mb-2 font-semibold">
          <span className="bg-editorial-charcoal/5 text-editorial-charcoal px-2 py-0.5 rounded-none text-[9px] tracking-widest font-bold">
            {product.fabric}
          </span>
          <span className="font-bold tracking-wider">{product.code}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-sm sm:text-base font-bold text-editorial-charcoal leading-snug hover:text-editorial-red transition-colors line-clamp-1">
          <button onClick={() => onOpenDetails(product)} className="text-left focus:outline-none cursor-pointer">
            {product.name}
          </button>
        </h3>

        {/* Short Description */}
        <p className="text-editorial-gray text-xs mt-1.5 leading-relaxed line-clamp-2 font-sans font-light">
          {product.description}
        </p>

        {/* Pricing Matrix */}
        <div className="mt-4 pt-3 border-t border-editorial-charcoal/5 grid grid-cols-2 gap-2 bg-editorial-sand/15 p-2.5 rounded-none font-sans">
          <div>
            <span className="block text-[9px] text-editorial-charcoal/50 uppercase tracking-widest font-bold">Retail / Single</span>
            <span className="text-editorial-charcoal font-bold text-xs sm:text-sm">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="border-l border-editorial-charcoal/10 pl-3">
            <span className="block text-[9px] text-editorial-red uppercase tracking-widest flex items-center gap-0.5 font-bold">
              <Tag className="w-2.5 h-2.5" />
              Wholesale Rate
            </span>
            <span className="text-editorial-red font-bold text-xs sm:text-sm">
              ₹{product.wholesalePrice.toLocaleString('en-IN')}
            </span>
            <span className="block text-[8px] text-editorial-charcoal/40 font-bold tracking-wider leading-tight uppercase mt-0.5">
              Min Qty: {product.wholesaleMinQty}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2 font-sans uppercase">
          <button
            onClick={() => onAddToCart(product, 'wholesale')}
            className="py-2.5 px-3 rounded-none bg-editorial-cream hover:bg-editorial-charcoal hover:text-white text-editorial-charcoal font-bold text-[9px] tracking-widest border border-editorial-charcoal/20 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <Plus className="w-3 h-3 text-editorial-red" />
            <span>Bulk Order</span>
          </button>

          <button
            onClick={() => onAddToCart(product, 'retail')}
            className="py-2.5 px-3 rounded-none bg-editorial-charcoal hover:bg-editorial-red text-white font-bold text-[9px] tracking-widest transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <ShoppingCart className="w-3 h-3" />
            <span>Add Single</span>
          </button>
        </div>
      </div>
    </div>
  );
}

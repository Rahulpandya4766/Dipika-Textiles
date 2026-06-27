import { CartItem, PageId } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Info, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (idx: number, qty: number) => void;
  onRemoveItem: (idx: number) => void;
  onUpdateOrderType: (idx: number, type: 'retail' | 'wholesale') => void;
  onProceedToInquiry: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onUpdateOrderType,
  onProceedToInquiry
}: CartDrawerProps) {
  if (!isOpen) return null;

  // Compute cart summary statistics
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  const totalVal = cartItems.reduce((acc, item) => {
    const rate = item.orderType === 'wholesale' ? item.product.wholesalePrice : item.product.price;
    return acc + rate * item.quantity;
  }, 0);

  const potentialRetailCost = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const wholesaleSavings = potentialRetailCost - totalVal;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-container">
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5.5 h-5.5 text-amber-800" />
              <h2 className="text-lg font-bold font-serif text-stone-900">Your Inquiry Cart</h2>
              <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2 py-0.5 rounded-full font-mono">
                {totalItems} Items
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              <X className="w-5.5 h-5.5" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-stone-900 font-bold text-base">Your cart is empty</h3>
                <p className="text-stone-500 text-xs mt-1.5 max-w-xs">
                  Browse our premium heritage sarees and add them here to compile a direct WhatsApp quote inquiry.
                </p>
                <button
                  onClick={() => { onClose(); onProceedToInquiry(); }}
                  className="mt-6 px-5 py-2.5 bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs rounded-lg cursor-pointer"
                >
                  Shop Saree Catalog
                </button>
              </div>
            ) : (
              cartItems.map((item, idx) => {
                const itemPrice = item.orderType === 'wholesale' ? item.product.wholesalePrice : item.product.price;
                const minQty = item.product.wholesaleMinQty;
                const isUnderWholesaleMin = item.orderType === 'wholesale' && item.quantity < minQty;

                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-stone-200 shadow-2xs relative bg-white group">
                    {/* Thumbnail */}
                    <div className="w-18 h-22 rounded-md overflow-hidden bg-stone-50 border border-stone-100 shrink-0">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>

                    {/* Meta & Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-xs font-bold text-stone-900 leading-tight line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-[10px] text-stone-400 font-mono font-bold">Code: {item.product.code} | Shade: {item.selectedColor}</span>
                      </div>

                      {/* Order Type Toggle in Cart */}
                      <div className="flex items-center gap-1.5 my-1.5">
                        <button
                          onClick={() => onUpdateOrderType(idx, 'wholesale')}
                          className={`text-[9px] font-bold px-2 py-0.5 rounded border transition-all cursor-pointer ${
                            item.orderType === 'wholesale'
                              ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                              : 'bg-stone-50 border-stone-200 text-stone-500 hover:border-stone-300'
                          }`}
                        >
                          Wholesale (Min {minQty})
                        </button>
                        <button
                          onClick={() => onUpdateOrderType(idx, 'retail')}
                          className={`text-[9px] font-bold px-2 py-0.5 rounded border transition-all cursor-pointer ${
                            item.orderType === 'retail'
                              ? 'bg-stone-900 border-stone-800 text-white font-bold'
                              : 'bg-stone-50 border-stone-200 text-stone-500 hover:border-stone-300'
                          }`}
                        >
                          Single Retail
                        </button>
                      </div>

                      {/* Qty and Price Actions */}
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center border border-stone-200 rounded-md overflow-hidden bg-stone-50">
                          <button
                            onClick={() => onUpdateQty(idx, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 hover:bg-stone-200 text-stone-800 font-bold text-xs cursor-pointer transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3.5 text-xs font-bold text-stone-900 font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(idx, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-stone-200 text-stone-800 font-bold text-xs cursor-pointer transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="block text-xs font-bold text-stone-900">
                            ₹{(itemPrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                          <span className="text-[9px] text-stone-400 font-mono">
                            (₹{itemPrice.toLocaleString('en-IN')} x {item.quantity})
                          </span>
                        </div>
                      </div>

                      {/* Warning for Wholesale Min Threshold */}
                      {isUnderWholesaleMin && (
                        <div className="mt-2.5 p-1.5 rounded bg-red-50 border border-red-100 flex items-center justify-between gap-1 text-[10px] text-red-700">
                          <span>Below min {minQty} wholesale qty!</span>
                          <button
                            onClick={() => onUpdateQty(idx, minQty)}
                            className="underline font-bold text-red-800 cursor-pointer"
                          >
                            Set to {minQty}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Billing Breakdown */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-200 p-6 bg-stone-50 space-y-4">
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between text-stone-500 text-xs">
                  <span>Subtotal Cost</span>
                  <span className="font-mono text-stone-800 font-semibold">₹{potentialRetailCost.toLocaleString('en-IN')}</span>
                </div>
                {wholesaleSavings > 0 && (
                  <div className="flex justify-between text-emerald-700 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      Bulk Wholesale Discount
                    </span>
                    <span className="font-mono font-bold">-₹{wholesaleSavings.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="border-t border-stone-200 my-2 pt-2 flex justify-between items-center text-stone-950 font-bold">
                  <span className="text-sm">Estimated Inquiry Value</span>
                  <span className="text-lg font-serif text-amber-900">₹{totalVal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {wholesaleSavings > 0 && (
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center gap-2.5 text-xs text-emerald-800">
                  <Sparkles className="w-4.5 h-4.5 shrink-0 text-emerald-600" />
                  <span>Excellent! You save <strong>₹{wholesaleSavings.toLocaleString('en-IN')}</strong> utilizing our wholesale pricing.</span>
                </div>
              )}

              {/* Inquiry Action */}
              <button
                onClick={onProceedToInquiry}
                className="w-full py-4 px-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-900/10 cursor-pointer text-sm"
              >
                <span>Proceed to Inquiry Desk</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              
              <div className="text-center">
                <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider flex items-center justify-center gap-1">
                  <Info className="w-3 h-3" />
                  Next step compiles message for direct WhatsApp sending
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

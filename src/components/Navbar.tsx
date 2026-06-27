import { useState } from 'react';
import { Menu, X, ShoppingBag, PhoneCall, ShieldCheck, Truck, Instagram, Globe } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, cartCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Explore Catalog' },
    { id: 'heritage', label: 'Our Heritage' },
    { id: 'contact', label: 'Wholesale Inquiry' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full" id="main-header">
      {/* Top Banner with Key Store Promises */}
      <div className="bg-editorial-charcoal text-white/90 text-[10px] sm:text-xs py-2 px-6 flex flex-wrap justify-between items-center gap-2 border-b border-white/5 font-sans tracking-widest uppercase">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-editorial-red"></span>
          <span>ESTD. 1990 • Manufacturers & Wholesalers</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-1.5 opacity-80">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Trusted Premium Quality</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-80">
            <Truck className="w-3.5 h-3.5" />
            <span>PAN India Delivery</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-80">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Support: +91 94250 12345</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-editorial-cream text-editorial-charcoal border-b border-editorial-charcoal/10 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Branding - Dipika Textiles */}
            <div className="flex items-center">
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} 
                className="flex flex-col items-start focus:outline-none cursor-pointer text-left"
                id="brand-logo"
              >
                <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tighter text-editorial-charcoal uppercase">
                  दीपिका TEXTILES
                </span>
                <span className="text-[9px] tracking-[0.25em] font-sans uppercase text-editorial-charcoal/60 -mt-0.5 font-bold">
                  Saree Manufacturers & Wholesalers • Surat
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase font-sans font-semibold" id="desktop-nav-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`py-2 transition-all cursor-pointer border-b ${
                    currentPage === item.id 
                      ? 'text-editorial-charcoal border-editorial-charcoal font-bold' 
                      : 'text-editorial-charcoal/60 border-transparent hover:text-editorial-charcoal hover:border-editorial-charcoal/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Actions: Social Media, Cart Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              {/* Social Media Links */}
              <div className="hidden md:flex items-center gap-2">
                <a 
                  href="https://www.instagram.com/dipikatextiles557/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-editorial-charcoal/10 hover:border-editorial-red hover:bg-editorial-red/5 text-editorial-charcoal hover:text-editorial-red transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a 
                  href="https://www.indiamart.com/dipika-textilessurat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-editorial-charcoal/10 hover:border-editorial-red hover:bg-editorial-red/5 text-editorial-charcoal hover:text-editorial-red transition-all"
                  aria-label="IndiaMART"
                >
                  <Globe className="w-4.5 h-4.5" />
                </a>
              </div>

              {/* Dynamic Inquiry Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full border border-editorial-charcoal/10 hover:border-editorial-charcoal hover:bg-editorial-charcoal/5 text-editorial-charcoal transition-all cursor-pointer group"
                aria-label="Inquiry Cart"
                id="cart-trigger"
              >
                <ShoppingBag className="w-5.5 h-5.5 group-hover:scale-105 transition-transform" />
                {cartCount > 0 ? (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-editorial-red text-[10px] font-bold text-white ring-2 ring-editorial-cream animate-scale-in">
                    {cartCount}
                  </span>
                ) : (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-editorial-red"></span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-editorial-charcoal/80 hover:text-editorial-charcoal hover:bg-editorial-charcoal/5 focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
                id="mobile-menu-trigger"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-editorial-cream border-b border-editorial-charcoal/10 animate-fade-in" id="mobile-nav-panel">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-xs tracking-widest uppercase font-sans font-semibold">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left block px-4 py-3 rounded-none transition-all ${
                    currentPage === item.id
                      ? 'bg-editorial-charcoal/5 text-editorial-charcoal border-l-4 border-editorial-charcoal font-bold pl-3'
                      : 'text-editorial-charcoal/60 hover:bg-editorial-charcoal/5 hover:text-editorial-charcoal'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-editorial-charcoal/5 px-4 space-y-3">
                <div className="flex items-center gap-2 text-[10px] text-editorial-charcoal/60">
                  <ShieldCheck className="w-4 h-4 text-editorial-red" />
                  <span>Trusted Quality Saree Suppliers</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-editorial-charcoal/60">
                  <Truck className="w-4 h-4 text-editorial-red" />
                  <span>PAN India Bulk & Retail Delivery</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

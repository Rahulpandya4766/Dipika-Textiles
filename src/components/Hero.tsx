import { PageId } from '../types';
import { ArrowRight, ShieldCheck, Truck, PhoneCall } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section className="bg-editorial-cream border-b border-editorial-charcoal/10" id="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[640px]">
        {/* Left Image Column */}
        <div className="lg:col-span-7 bg-editorial-sand relative flex items-center justify-center p-8 sm:p-12 lg:p-16 border-r border-editorial-charcoal/10 overflow-hidden min-h-[420px] lg:min-h-[580px]">
          {/* Background image overlay to give it authentic richness */}
          <div className="absolute inset-0 z-0">
            <img
              src="/dipika_hero_banner_1782584818093.jpg"
              alt="दीपिका Textiles Luxury Saree Showcase"
              className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute top-6 left-6 sm:top-12 sm:left-12 z-10">
            <h1 className="text-5xl sm:text-7xl lg:text-[80px] xl:text-[100px] leading-[0.8] font-serif font-extrabold tracking-tighter text-editorial-charcoal mb-4">
              PREMIUM<br/>SAREES
            </h1>
            <p className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-editorial-charcoal/70 font-bold">
              Manufacturers & Wholesale Suppliers
            </p>
          </div>

          {/* Saree Card visual */}
          <div className="w-[85%] h-[80%] lg:w-[75%] lg:h-[85%] bg-editorial-beige/60 backdrop-blur-xs border border-white/25 flex items-end p-6 sm:p-8 shadow-2xl relative z-10 mt-20 sm:mt-28 lg:mt-24">
            <img
              src="/dipika_hero_banner_1782584818093.jpg"
              alt="दीपिका Textiles Heritage Collection"
              className="absolute inset-0 w-full h-full object-cover opacity-85"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="relative z-10 w-full text-white text-left">
              <span className="text-[9px] tracking-widest uppercase bg-editorial-red text-white py-0.5 px-2 font-semibold inline-block mb-2 font-sans">
                Signature Masterpiece
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold italic text-white/95">Heritage Collection</h3>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 text-right z-10">
            <p className="text-3xl sm:text-5xl lg:text-6xl font-serif italic text-editorial-charcoal">Pure Banarasi</p>
            <p className="text-[9px] sm:text-xs font-sans tracking-[0.2em] uppercase text-editorial-charcoal/70 font-bold mt-2">Silk Collection 2026</p>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-editorial-cream">
          <div className="p-8 sm:p-12 lg:p-16 flex-1 flex flex-col justify-center">
            <div className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-3 font-bold">
              Est. 1990 • Surat, India
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-6 leading-tight italic font-serif text-editorial-charcoal">
              Hand-woven elegance with <span className="font-sans not-italic font-extrabold text-editorial-red">Trusted Quality.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-editorial-gray mb-10 max-w-sm font-sans font-light">
              From the heart of artisanal heritage to your doorstep. Providing exquisite craftsmanship and pure fabrics to boutique owners and wholesalers PAN India since 1990.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => setCurrentPage('shop')}
                className="w-full bg-editorial-charcoal hover:bg-editorial-red text-white py-5 flex items-center justify-between px-8 group transition-all duration-300 cursor-pointer"
              >
                <span className="uppercase font-sans tracking-[0.25em] text-xs font-semibold">Explore Wholesale Catalog</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] font-sans uppercase tracking-widest text-center opacity-60 font-bold">
                Direct Mill Rates & Custom Manufacturing
              </p>
            </div>
          </div>

          {/* Bottom Sidebar Items */}
          <div className="border-t border-editorial-charcoal/10 grid grid-cols-2 bg-editorial-sand/10">
            <div className="p-6 sm:p-8 border-r border-editorial-charcoal/10 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[9px] font-bold uppercase font-sans tracking-widest text-editorial-charcoal/60">Trending</span>
                <span className="text-editorial-red text-[10px] font-sans uppercase font-bold tracking-wider">● Hot Demand</span>
              </div>
              <p className="text-xs font-serif italic text-editorial-charcoal leading-tight">
                Authentic Bridal Kanjeevarams
              </p>
              <button 
                onClick={() => setCurrentPage('shop')} 
                className="text-[9px] underline uppercase tracking-widest font-bold text-editorial-charcoal mt-4 hover:text-editorial-red transition-colors text-left"
              >
                View Series
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div className="text-[9px] font-bold uppercase font-sans tracking-widest text-editorial-charcoal/60 mb-2">Services</div>
              <ul className="text-[10px] space-y-1.5 font-sans tracking-wider text-editorial-charcoal/80 uppercase font-medium">
                <li className="flex items-center">• PAN India Delivery</li>
                <li className="flex items-center">• Custom Dye Unit</li>
                <li className="flex items-center">• Export Packaging</li>
              </ul>
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="text-[9px] underline uppercase tracking-widest font-bold text-editorial-charcoal mt-4 hover:text-editorial-red transition-colors text-left"
              >
                Send Desk Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

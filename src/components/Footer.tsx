import { PageId } from '../types';
import { Mail, Phone, MapPin, Landmark, Award, ShieldAlert, CheckCircle, Flame, Instagram, Globe } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-editorial-charcoal text-stone-300" id="main-footer font-sans">
      {/* Upper Promise / Value Proposition Strip */}
      <div className="border-b border-white/5 bg-black/25 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-none bg-white/5 border border-white/10 text-editorial-red shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans">Manufacturer Since 1990</h4>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">We maintain in-house weaving and dye units ensuring unmatched design control and pure fabrics.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-none bg-white/5 border border-white/10 text-editorial-red shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans">Trusted Premium Quality</h4>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">Rigorous multi-point quality check. Every piece arrives with our guarantee label.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-none bg-white/5 border border-white/10 text-editorial-red shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans">Wholesale Advantage</h4>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">Save up to 35% with bulk tiers. We are wholesale suppliers to 500+ boutiques across India.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-none bg-white/5 border border-white/10 text-editorial-red shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans">PAN India Delivery</h4>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">Insured, fully tracked logistics across India. Safe transit guaranteed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & About */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Description */}
        <div className="space-y-4">
          <span className="font-serif text-xl sm:text-2xl font-extrabold tracking-tighter text-white block uppercase">
            दीपिका TEXTILES
          </span>
          <p className="text-stone-400 text-xs leading-relaxed font-sans">
            Legacy in weave. Manufacturers and wholesale suppliers of premium Banarasi, Kanjeevaram, Organza sarees and designer dress materials. Trusted by retailers globally since 1990.
          </p>
          <div className="flex gap-2">
            <span className="text-[9px] tracking-widest bg-white/5 text-editorial-red font-sans py-1 px-2.5 border border-white/10 uppercase font-bold">
              ESTD. 1990
            </span>
            <span className="text-[9px] tracking-widest bg-white/5 text-stone-400 font-sans py-1 px-2.5 border border-white/10 uppercase font-bold">
              ISO 9001:2015 CERTIFIED
            </span>
          </div>
        </div>

        {/* Navigation Categories */}
        <div>
          <h3 className="text-editorial-red font-sans text-xs uppercase tracking-[0.2em] font-bold mb-6">EXPLORE STORE</h3>
          <ul className="space-y-3 text-xs tracking-wider uppercase font-sans">
            <li>
              <button onClick={() => setCurrentPage('home')} className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left">
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('shop')} className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left">
                Premium Saree Collection
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('heritage')} className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left">
                Our Weaving Heritage
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('contact')} className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left">
                Wholesale Order Desk
              </button>
            </li>
          </ul>
        </div>

        {/* Product Fabrics */}
        <div>
          <h3 className="text-editorial-red font-sans text-xs uppercase tracking-[0.2em] font-bold mb-6">HERITAGE WEAVES</h3>
          <ul className="space-y-3 text-xs tracking-wider font-sans text-stone-400 uppercase font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-red"></span>
              <span>Pure Katan Banarasi Silk</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-red"></span>
              <span>Authentic Korvai Kanjeevaram</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-red"></span>
              <span>Hand-Painted Sheer Organza</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-red"></span>
              <span>Designer Georgette & Linen</span>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-editorial-red font-sans text-xs uppercase tracking-[0.2em] font-bold mb-6">HEAD OFFICE & WEAVING UNIT</h3>
          <ul className="space-y-4 text-xs text-stone-400 font-sans leading-relaxed uppercase">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-editorial-red shrink-0 mt-0.5" />
              <a href="https://maps.app.goo.gl/8JqjmTdwHRONSveJY" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <strong className="text-white block mb-1">Store Location:</strong> 577, Millenium 2 Textile Market, Surat, Gujarat, India
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-editorial-red shrink-0 mt-0.5" />
              <span>+91 87584 83208 / +91 98246 86202</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-editorial-red shrink-0 mt-0.5" />
              <span className="lowercase">sarthaknandwani10@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/dipikatextiles557/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 hover:bg-editorial-red hover:border-editorial-red transition-all group">
                <Instagram className="w-4 h-4 text-stone-400 group-hover:text-white" />
              </a>
              <a href="https://www.indiamart.com/dipika-textilessurat/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 hover:bg-editorial-red hover:border-editorial-red transition-all group">
                <Globe className="w-4 h-4 text-stone-400 group-hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Copyright Area */}
      <div className="border-t border-white/5 bg-black/10 py-6 px-4 font-sans uppercase">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-stone-500 text-center sm:text-left tracking-widest">
          <div>
            © {currentYear} दीपिका Textiles. Woven with trusted quality since 1990.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-stone-400 transition-colors">Wholesale Policy</span>
            <span>•</span>
            <span className="hover:text-stone-400 transition-colors">Term & Conditions</span>
            <span>•</span>
            <span className="hover:text-stone-400 transition-colors">WhatsApp Order Helpline</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

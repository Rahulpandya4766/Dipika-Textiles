import { useState } from 'react';
import { Product, PageId } from '../types';
import { products } from '../data/products';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { 
  Building, 
  Sparkles, 
  Truck, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Star, 
  MessageSquare,
  BadgeCheck,
  Globe2
} from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, orderType: 'retail' | 'wholesale') => void;
  setSelectedCategoryFilter: (cat: string) => void;
}

export default function Home({ 
  setCurrentPage, 
  onOpenDetails, 
  onAddToCart,
  setSelectedCategoryFilter 
}: HomeProps) {
  
  // FAQs state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is your minimum order quantity (MOQ) for wholesale prices?",
      a: "Our wholesale pricing starts automatically when ordering the specified minimum volume per item (typically 4-10 pieces depending on the fabric). You can easily see the MOQ requirement on each product detail card."
    },
    {
      q: "Do you supply customized designs and colors for bridal boutiques?",
      a: "Yes! As direct manufacturers since 1990, we can customize fabrics, handloom motifs, and colors for bulk orders of 15 sarees or more. Contact our wholesale order desk on WhatsApp to discuss custom manufacturing."
    },
    {
      q: "How long does PAN India shipping take?",
      a: "All wholesale orders are dispatched via fully insured priority express cargo. Shipping takes 3-5 business days to major metros and 5-7 business days to regional locations."
    },
    {
      q: "Is there an option to buy single pieces for self-use?",
      a: "Absolutely! We support our retail buyers by offering single pieces at standard retail pricing. You can toggle between Retail (Single) and Wholesale (Bulk) mode directly in your shopping cart."
    },
    {
      q: "How does the WhatsApp Inquiry Checkout work?",
      a: "We prioritize direct merchant communication over automated, cold checkouts. Once you compile your selected sarees in the cart, click 'Send WhatsApp Inquiry'. It automatically compiles a professional purchase request containing item codes, quantities, and chosen shades. Click send, and we’ll reply within minutes with customized shipping quotes and bank details."
    }
  ];

  // Best sellers & Latest
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  const fabrics = [
    { name: 'Banarasi Silk', count: '12+ Designs', image: '/saree_banarasi_red_1782584837929.jpg', filter: 'Banarasi Silk' },
    { name: 'Kanjeevaram Silk', count: '8+ Designs', image: '/saree_kanjeevaram_gold_1782584851471.jpg', filter: 'Soft Silk' },
    { name: 'Organza & Chiffon', count: '15+ Designs', image: '/saree_organza_pastel_1782584867830.jpg', filter: 'Organza' },
    { name: 'Designer Wear', count: '20+ Designs', image: '/dress_salwar_material_1782584880376.jpg', filter: 'Ladies Saree' },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFabricClick = (filter: string) => {
    setSelectedCategoryFilter(filter);
    setCurrentPage('shop');
  };

  return (
    <div className="bg-editorial-cream animate-fade-in" id="home-page">
      {/* Hero Header */}
      <Hero setCurrentPage={setCurrentPage} />

      {/* Trust Badges & Achievements Bento */}
      <section className="py-12 bg-editorial-cream border-b border-editorial-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-editorial-charcoal/10 last:border-0">
              <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-editorial-red">1990</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-sans text-editorial-charcoal/60 font-bold mt-2">Established Heritage</span>
            </div>
            <div className="p-4 border-r border-editorial-charcoal/10 last:border-0">
              <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-editorial-red">500+</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-sans text-editorial-charcoal/60 font-bold mt-2">Boutique Networks</span>
            </div>
            <div className="p-4 border-r border-editorial-charcoal/10 last:border-0">
              <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-editorial-red">100%</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-sans text-editorial-charcoal/60 font-bold mt-2">Pure Fabric Checked</span>
            </div>
            <div className="p-4 last:border-0">
              <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-editorial-red">PAN India</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-sans text-editorial-charcoal/60 font-bold mt-2">Fast Secured Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Category Spotlights */}
      <section className="py-20 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 border-b border-editorial-charcoal/5" id="fabrics-collection">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">Woven Masterpieces</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-editorial-charcoal mt-2">Explore Our Signature Weaves</h2>
          <p className="text-editorial-gray text-xs sm:text-sm mt-3 leading-relaxed font-sans">
            From majestic wedding brocades to lightweight sheer casuals, explore our direct factory fabrics tailored for high retail profit margins and elite taste.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fabrics.map((fab, idx) => (
            <div 
              key={idx}
              onClick={() => handleFabricClick(fab.filter)}
              className="bg-white rounded-none overflow-hidden border border-editorial-charcoal/10 hover:border-editorial-charcoal transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-[4/3] bg-editorial-sand overflow-hidden relative">
                <img 
                  src={fab.image} 
                  alt={fab.name} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white border-t border-editorial-charcoal/5">
                <div>
                  <h3 className="font-serif font-bold text-editorial-charcoal group-hover:text-editorial-red transition-colors text-sm">
                    {fab.name}
                  </h3>
                  <span className="text-editorial-charcoal/50 text-[10px] uppercase tracking-widest font-sans font-bold">{fab.count}</span>
                </div>
                <div className="w-8 h-8 rounded-none border border-editorial-charcoal/10 group-hover:bg-editorial-charcoal text-editorial-charcoal group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Bestsellers Section */}
      <section className="py-20 bg-editorial-sand/15 border-y border-editorial-charcoal/10" id="bestsellers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-14">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">Trusted Store Choice</span>
              <h2 className="text-3xl font-serif font-bold text-editorial-charcoal mt-2">Our Bestselling Wholesale Sarees</h2>
              <p className="text-editorial-gray text-xs sm:text-sm mt-3 leading-relaxed max-w-xl font-sans">
                Highly demanded catalog products. Retail shops across Gujarat, Maharashtra, and South India report instant stock outs for these specific pieces.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage('shop')} 
              className="px-6 py-3 border border-editorial-charcoal text-editorial-charcoal hover:bg-editorial-charcoal hover:text-white text-[10px] tracking-widest font-bold rounded-none uppercase transition-all cursor-pointer whitespace-nowrap"
            >
              See Full Collection
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenDetails={onOpenDetails}
                onAddToCart={(p, type) => onAddToCart(p, type)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Heritage Highlights Story Banner */}
      <section className="py-24 bg-editorial-cream relative overflow-hidden border-b border-editorial-charcoal/10" id="heritage-highlights">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-editorial-sand/10 hidden lg:block border-l border-editorial-charcoal/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-editorial-charcoal/5 border border-editorial-charcoal/10 rounded-none text-[10px] uppercase tracking-widest font-sans font-bold text-editorial-charcoal">
              <BadgeCheck className="w-4 h-4 text-editorial-red" />
              <span>Direct-to-Retailer Weaving Mill</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-editorial-charcoal">
              Why 500+ Showrooms Trust दीपिका Textiles Saree Quality
            </h2>
            <p className="text-editorial-gray text-xs sm:text-sm leading-relaxed font-sans font-light">
              Established in Surat, Gujarat in 1990, दीपिका Textiles was founded with a single mission: to preserve ancestral weaving traditions while offering wholesalers competitive margins. We manufacture each saree with 100% verified pure silk threads and heavy metallic gold zari.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-editorial-charcoal/5 text-editorial-red shrink-0 mt-0.5 rounded-none border border-editorial-charcoal/10">
                  <Building className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-editorial-charcoal text-sm font-serif">Direct Factory Sourcing</h4>
                  <p className="text-xs text-editorial-gray mt-1 font-sans">No middle agents. By buying directly from our looms, boutiques save up to 35% compared to local agents.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-editorial-charcoal/5 text-editorial-red shrink-0 mt-0.5 rounded-none border border-editorial-charcoal/10">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-editorial-charcoal text-sm font-serif">Rapid Custom Restocks</h4>
                  <p className="text-xs text-editorial-gray mt-1 font-sans">We maintain massive raw-stock fabric backings. Bulk orders can be dyed and dispatched in record times.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => setCurrentPage('heritage')}
                className="px-8 py-4 bg-editorial-charcoal hover:bg-editorial-red text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Read Our Craftsmanship Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Block - Styled Collaged Images */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-none overflow-hidden border-4 border-white shadow-xl relative bg-editorial-sand transform rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800" 
                alt="Weaving artisan" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-sans tracking-widest text-editorial-red font-bold">Authentic Handloom</span>
                <p className="text-xs font-serif italic mt-0.5 text-stone-200">3-Ply Pure Mulberry Silk thread hand-braiding</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-editorial-sand/10 border-t border-editorial-charcoal/10" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">Merchant Testimonials</span>
            <h2 className="text-3xl font-serif font-bold text-editorial-charcoal mt-2">What Our Wholesale Buyers Say</h2>
            <p className="text-editorial-gray text-xs mt-2.5 font-sans">Supporting boutiques, bridal showrooms, and exporters worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-editorial-charcoal/10 rounded-none space-y-4">
              <div className="flex gap-1 text-editorial-red">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-editorial-gray text-xs italic leading-relaxed font-sans">
                "We have been sourcing Banarasi sarees from दीपिका Textiles since 2012 for our bridal store in Bangalore. The gold zari luster does not fade and our customers immediately fall in love with the pure Katan silk draping. Highly recommended for premium boutique retailers!"
              </p>
              <div className="border-t border-editorial-charcoal/5 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-editorial-charcoal/5 text-editorial-charcoal font-bold text-xs flex items-center justify-center font-sans border border-editorial-charcoal/10">
                  PV
                </div>
                <div>
                  <h4 className="font-bold text-editorial-charcoal text-xs font-sans">Priya Vasudevan</h4>
                  <span className="text-editorial-charcoal/50 text-[9px] block font-sans uppercase tracking-widest font-bold">Boutique Owner, Bangalore</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-editorial-charcoal/10 rounded-none space-y-4">
              <div className="flex gap-1 text-editorial-red">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-editorial-gray text-xs italic leading-relaxed font-sans">
                "Finding high-quality sheer Organza and Georgette sarees with modern pastel colors was difficult until we discovered दीपिका Textiles. Buying directly at wholesale prices saves us nearly 30% on agents commissions, allowing us to offer beautiful prices to our end buyers."
              </p>
              <div className="border-t border-editorial-charcoal/5 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-editorial-charcoal/5 text-editorial-charcoal font-bold text-xs flex items-center justify-center font-sans border border-editorial-charcoal/10">
                  KS
                </div>
                <div>
                  <h4 className="font-bold text-editorial-charcoal text-xs font-sans">Karan Shah</h4>
                  <span className="text-editorial-charcoal/50 text-[9px] block font-sans uppercase tracking-widest font-bold">Wholesale Supplier, Mumbai</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-editorial-charcoal/10 rounded-none space-y-4">
              <div className="flex gap-1 text-editorial-red">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-editorial-gray text-xs italic leading-relaxed font-sans">
                "दीपिका Textiles' WhatsApp inquiry checkout system is brilliantly fast. We upload our selected designs, get estimated freight quotes for Chennai in minutes, and receive deliveries on time, perfectly packed. The trusted quality label has won us great loyalty."
              </p>
              <div className="border-t border-editorial-charcoal/5 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-editorial-charcoal/5 text-editorial-charcoal font-bold text-xs flex items-center justify-center font-sans border border-editorial-charcoal/10">
                  RM
                </div>
                <div>
                  <h4 className="font-bold text-editorial-charcoal text-xs font-sans">Rajeswari Mani</h4>
                  <span className="text-editorial-charcoal/50 text-[9px] block font-sans uppercase tracking-widest font-bold">Bridal Studio, Chennai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-editorial-cream border-t border-editorial-charcoal/10" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">Got Questions?</span>
            <h2 className="text-3xl font-serif font-bold text-editorial-charcoal mt-2">Frequently Asked Inquiries</h2>
            <p className="text-editorial-gray text-xs sm:text-sm mt-3 leading-relaxed font-sans">
              We operate transparently. Here is all you need to know about our wholesale operations, custom manufacturing, and deliveries.
            </p>
          </div>

          <div className="space-y-3.5" id="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-editorial-charcoal/10 rounded-none overflow-hidden bg-white/50 hover:bg-white transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4.5 flex justify-between items-center focus:outline-none cursor-pointer"
                >
                  <span className="font-serif font-bold text-editorial-charcoal text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-editorial-red shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-editorial-charcoal/50 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-editorial-gray leading-relaxed border-t border-editorial-charcoal/5 bg-white font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Wholesale Inquiry CTA Strip */}
      <section className="bg-editorial-charcoal text-white py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-editorial-red uppercase">
            Start Your Boutique Journey
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter uppercase text-white">
            Ready to stock India’s premium heritage sarees?
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            Get instant catalog prices, custom color sets, and fast priority air-cargo supply schedules. Work directly with certified manufacturers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <button
              onClick={() => setCurrentPage('shop')}
              className="px-8 py-4 bg-editorial-cream hover:bg-editorial-red text-editorial-charcoal hover:text-white font-bold rounded-none text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              Browse Products
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold rounded-none text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              Contact Head Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

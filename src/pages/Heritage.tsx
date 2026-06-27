import { Award, Landmark, Eye, HeartHandshake, ShieldCheck, Truck, Quote } from 'lucide-react';

export default function Heritage() {
  return (
    <div className="bg-editorial-cream py-16 animate-fade-in font-sans" id="heritage-page">
      
      {/* Banner Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto mb-16">
        <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">ESTABLISHED 1990</span>
        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-editorial-charcoal mt-2">A Legacy In Every Weave</h1>
        <p className="text-editorial-gray text-xs sm:text-sm mt-4 leading-relaxed font-sans font-light">
          Over three decades of manufacturing and wholesaling traditional Indian sarees. Combining ancestral handloom wisdom with modern bulk production.
        </p>
      </div>

      {/* Narrative Section - The Story */}
      <section className="bg-white border-y border-editorial-charcoal/10 py-20 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative aspect-video sm:aspect-square lg:aspect-[4/5] rounded-none overflow-hidden border border-editorial-charcoal/10 bg-editorial-sand">
            <img 
              src="/dipika_hero_banner_1782584818093.jpg" 
              alt="Artisanal looms" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-editorial-charcoal leading-tight">
              Our Journey: From Three Looms to PAN-India Supply
            </h2>
            <p className="text-editorial-gray text-xs sm:text-sm leading-relaxed font-sans font-light">
              In 1990, दीपिका Textiles started with just three handlooms in Surat, Gujarat, weaving bespoke silk sarees for local family weddings. Our founder set out with a simple principle: <strong className="font-bold text-editorial-charcoal">never compromise on fabric weight and zari purity</strong>.
            </p>
            <p className="text-editorial-gray text-xs sm:text-sm leading-relaxed font-sans font-light">
              As regional retail networks recognized the trusted longevity of our weaves, our capacity expanded. Today, we operate a network of over 120 skilled weavers, integrating both traditional Banarasi wooden handlooms and semi-automated high-fidelity jacquard machines.
            </p>
            
            {/* Quote pullout */}
            <div className="p-6 bg-editorial-cream rounded-none border-l-4 border-editorial-red flex gap-4">
              <Quote className="w-8 h-8 text-editorial-red shrink-0 opacity-40" />
              <p className="text-editorial-charcoal font-serif italic text-sm">
                "A saree is not merely an outfit; it is 6 yards of heritage, an investment of emotion, and a showcase of craftsmanship. We weave that responsibility into every single thread since 1990."
                <span className="block text-[10px] font-sans uppercase font-bold text-editorial-charcoal/60 mt-2.5 not-italic tracking-wider">— Founder, दीपिका Textiles</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Technical Quality Standards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">Uncompromising Quality</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-editorial-charcoal mt-1">Our Manufacturing Standards</h2>
          <p className="text-editorial-gray text-xs mt-2.5 font-sans">What makes a saree a "दीपिका Textiles" original.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-none border border-editorial-charcoal/10 text-center space-y-4">
            <div className="w-12 h-12 bg-editorial-charcoal/5 rounded-none flex items-center justify-center text-editorial-red mx-auto border border-editorial-charcoal/10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-editorial-charcoal text-base">3-Ply Pure Mulberry Silk</h3>
            <p className="text-editorial-gray text-xs leading-relaxed font-sans font-light">
              We exclusively use high-tension 3-ply Mulberry Silk (typically 16-18 denier). This gives our sarees their signature rich drape, dense fabric thickness, and superior wrinkle resistance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-none border border-editorial-charcoal/10 text-center space-y-4">
            <div className="w-12 h-12 bg-editorial-charcoal/5 rounded-none flex items-center justify-center text-editorial-red mx-auto border border-editorial-charcoal/10">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-editorial-charcoal text-base">Pure Gold & Silver Zari</h3>
            <p className="text-editorial-gray text-xs leading-relaxed font-sans font-light">
              Our zari embroidery is woven with genuine silver-electroplated thread coated in micro-gold leaf, ensuring a warm natural metallic glow that doesn't blacken over decades of storage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-none border border-editorial-charcoal/10 text-center space-y-4">
            <div className="w-12 h-12 bg-editorial-charcoal/5 rounded-none flex items-center justify-center text-editorial-red mx-auto border border-editorial-charcoal/10">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-editorial-charcoal text-base">Multi-Step Quality Clearance</h3>
            <p className="text-editorial-gray text-xs leading-relaxed font-sans font-light">
              Every single piece goes through manual thread-trimming, starch curing, visual blemish verification, and strict length checks. Only flawless drapes earn our gold-embossed seal.
            </p>
          </div>

        </div>
      </section>

      {/* Wholesaler Partnership Benefits */}
      <section className="bg-editorial-charcoal text-white py-20 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">Wholesale Suppliers Platform</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white mt-2 mb-8 uppercase tracking-tight">
            Partnering With Boutiques Nationwide
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-12 border-b border-white/5 pb-12 mb-12 font-sans">
            <div>
              <h4 className="font-bold text-editorial-red text-xs uppercase tracking-widest">Custom Coloring</h4>
              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">Provide us your wedding palette hex/pantone colors and we will custom-dye fabric sheets for bulk bridal requests.</p>
            </div>
            <div>
              <h4 className="font-bold text-editorial-red text-xs uppercase tracking-widest">High Profit Margins</h4>
              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">Eliminating regional distributors yields massive wholesale discounts of up to 35% on factory-fresh stock.</p>
            </div>
            <div>
              <h4 className="font-bold text-editorial-red text-xs uppercase tracking-widest">Guaranteed Restock</h4>
              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">We keep all master jacquard patterns on file. If a particular model sells out, we can re-weave it on demand in 14 days.</p>
            </div>
            <div>
              <h4 className="font-bold text-editorial-red text-xs uppercase tracking-widest">Digital Asset Kits</h4>
              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">Boutiques can access our digital catalog assets and high-res imagery for pre-orders and social promotion prior to stock arrival.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-sans tracking-widest uppercase font-bold text-stone-400">
            <span className="flex items-center gap-1.5 text-white">
              <Truck className="w-4 h-4 text-editorial-red" />
              PAN India Insured Road Cargo
            </span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="flex items-center gap-1.5 text-white">
              <HeartHandshake className="w-4 h-4 text-editorial-red" />
              Direct Support with Sales Directors
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}

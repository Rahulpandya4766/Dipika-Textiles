import { useState, ChangeEvent, FormEvent } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Info, 
  Clock, 
  Building 
} from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    boutiqueName: '',
    approxVolume: '50-100 pieces',
    query: ''
  });

  const [validationError, setValidationError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.query) {
      setValidationError('Please fill out Name, Phone, and your Wholesale Requirement.');
      return;
    }
    setSubmitted(true);
  };

  const getWhatsAppDirectLink = () => {
    const text = `Hello दीपिका Textiles! I am interested in custom wholesale procurement.\n\nName: ${form.name}\nCity: ${form.city}\nBoutique: ${form.boutiqueName}\nVolume: ${form.approxVolume}\nRequirement: "${form.query}"`;
    return `https://wa.me/918758483208?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-editorial-cream py-16 animate-fade-in font-sans" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-editorial-red font-bold">Wholesale Support Desk</span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-editorial-charcoal mt-2">Connect With दीपिका Textiles</h1>
          <p className="text-editorial-gray text-xs sm:text-sm mt-4 leading-relaxed font-light">
            Interested in customized saree weaving, bridal group sets, or setting up a regular supply franchise? Our corporate directors are available 24/7.
          </p>
        </div>

        {/* Contact Page Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates & Addresses */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info cards */}
            <div className="bg-white p-6 rounded-none border border-editorial-charcoal/10 space-y-5">
              <h3 className="font-serif font-bold text-editorial-charcoal text-lg border-b border-editorial-charcoal/5 pb-3">Corporate Helpline</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-none bg-editorial-charcoal/5 text-editorial-red shrink-0 mt-0.5 border border-editorial-charcoal/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-sans uppercase tracking-[0.15em] text-editorial-charcoal/50 font-bold">Immediate Assistance</h4>
                    <p className="text-sm font-bold text-editorial-charcoal mt-0.5">+91 87584 83208</p>
                    <p className="text-[10px] text-editorial-charcoal/60 font-sans mt-0.5">Calls accepted 9:00 AM – 9:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-none bg-editorial-charcoal/5 text-editorial-red shrink-0 mt-0.5 border border-editorial-charcoal/10">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-sans uppercase tracking-[0.15em] text-editorial-charcoal/50 font-bold">WhatsApp 24/7 Chat</h4>
                    <p className="text-sm font-bold text-editorial-charcoal mt-0.5">+91 87584 83208</p>
                    <p className="text-[10px] text-editorial-charcoal/60 font-sans mt-0.5">Click-to-chat active for immediate quotes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-none bg-editorial-charcoal/5 text-editorial-red shrink-0 mt-0.5 border border-editorial-charcoal/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-sans uppercase tracking-[0.15em] text-editorial-charcoal/50 font-bold">Email Correspondence</h4>
                    <p className="text-sm font-bold text-editorial-charcoal mt-0.5 font-sans">sarthaknandwani10@gmail.com</p>
                    <p className="text-[10px] text-editorial-charcoal/60 font-sans mt-0.5">Official quotes & contract drafts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Geographical Presence Address list */}
            <div className="bg-white p-6 rounded-none border border-editorial-charcoal/10 space-y-6">
              <h3 className="font-serif font-bold text-editorial-charcoal text-lg border-b border-editorial-charcoal/5 pb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-editorial-red" />
                Our Indian Offices
              </h3>
              
              <div className="space-y-5 font-sans">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-editorial-red shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-editorial-charcoal block font-serif font-bold">Store Location</strong>
                    <a href="https://maps.app.goo.gl/8JqjmTdwHRONSveJY" target="_blank" rel="noopener noreferrer" className="text-editorial-gray mt-1 leading-relaxed font-light hover:text-editorial-red transition-colors block">
                      577, Millenium 2 Textile Market, Surat, Gujarat, India
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours badge */}
              <div className="p-3.5 bg-editorial-cream border border-editorial-charcoal/10 rounded-none flex items-center gap-2 text-xs text-editorial-charcoal font-sans font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-editorial-red" />
                <span>Monday to Saturday: 9:30 AM to 7:00 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-none border border-editorial-charcoal/10">
            
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-scale-in">
                <div className="w-14 h-14 bg-editorial-charcoal/5 text-editorial-red rounded-none flex items-center justify-center mx-auto border border-editorial-charcoal/10">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-editorial-charcoal uppercase tracking-tight">Inquiry Sheet Compiled</h3>
                  <p className="text-editorial-gray text-xs sm:text-sm mt-2 max-w-sm mx-auto leading-relaxed font-sans">
                    We have successfully compiled your specific wholesale requirements. Click below to submit this immediately on WhatsApp, or reset the sheet.
                  </p>
                </div>
                <div className="pt-4 max-w-sm mx-auto space-y-3">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-none bg-editorial-charcoal hover:bg-editorial-red text-white font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <span className="font-sans uppercase tracking-widest">Submit on WhatsApp</span>
                    <MessageCircle className="w-4.5 h-4.5 fill-current" />
                  </a>
                  <button
                    onClick={() => { setForm({ name:'', phone:'', email:'', city:'', boutiqueName:'', approxVolume:'50-100 pieces', query:'' }); setSubmitted(false); }}
                    className="text-editorial-red hover:text-editorial-charcoal text-xs font-bold tracking-wider uppercase underline cursor-pointer font-sans"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-editorial-charcoal text-lg sm:text-xl">Submit Custom Bulk Requirement</h3>
                  <p className="text-editorial-gray text-xs sm:text-sm mt-1 font-sans font-light">
                    Have a detailed wholesale question, export query, or need custom coloring sets for wedding showrooms? Complete this brief query form.
                  </p>
                </div>

                {validationError && (
                  <div className="p-3 bg-editorial-red/10 border border-editorial-red/30 text-editorial-red text-xs font-bold">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Harish Kumar"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold">WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., +91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold">Boutique / Showroom</label>
                    <input
                      type="text"
                      name="boutiqueName"
                      value={form.boutiqueName}
                      onChange={handleInputChange}
                      placeholder="e.g., Silk & Saree Palace (Optional)"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold">City & State</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      placeholder="e.g., Mumbai, MH"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal font-sans"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold">Expected Order Volume (Sarees)</label>
                    <select
                      name="approxVolume"
                      value={form.approxVolume}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 bg-white text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal font-sans"
                    >
                      <option value="Single piece / Retail">Single piece / Retail</option>
                      <option value="10-25 pieces (Trial wholesale)">10-25 pieces (Trial wholesale)</option>
                      <option value="50-100 pieces (Standard wholesale packet)">50-100 pieces (Standard wholesale packet)</option>
                      <option value="100-500 pieces (Bulk showroom franchise)">100-500 pieces (Bulk showroom franchise)</option>
                      <option value="500+ pieces (Export / Distributor tier)">500+ pieces (Export / Distributor tier)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold">Detail Wholesale Requirement *</label>
                    <textarea
                      name="query"
                      required
                      rows={5}
                      value={form.query}
                      onChange={handleInputChange}
                      placeholder="Please share what designs, fabrics, or customization services you are looking for so we can send matching sample images."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal font-sans font-light"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-editorial-charcoal hover:bg-editorial-red text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-none transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Compile Inquiry Request</span>
                </button>
              </form>
            )}

            {/* Inquiry notice card */}
            <div className="mt-6 p-4 bg-editorial-cream border border-editorial-charcoal/10 rounded-none flex items-start gap-2.5 text-xs text-editorial-charcoal font-sans leading-relaxed">
              <Info className="w-5 h-5 text-editorial-red shrink-0 mt-0.5" />
              <span>
                <strong>Wholesale note:</strong> दीपिका Textiles supports custom catalog design packs for boutiques. If you want us to manufacture a brand new pattern from a drawing or high-resolution sample photo, let our directors know on WhatsApp.
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

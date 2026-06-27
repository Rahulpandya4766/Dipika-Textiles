import { useState, ChangeEvent, FormEvent } from 'react';
import { CartItem, InquiryFormState, PageId } from '../types';
import { 
  Send, 
  User, 
  Building2, 
  Phone, 
  MapPin, 
  Mail, 
  Info, 
  ArrowLeft, 
  CheckCircle, 
  ShoppingBag,
  MessageCircle,
  FileSpreadsheet,
  BadgePercent
} from 'lucide-react';

interface InquiryDeskProps {
  cartItems: CartItem[];
  setCurrentPage: (page: PageId) => void;
  onClearCart: () => void;
}

export default function InquiryDesk({ cartItems, setCurrentPage, onClearCart }: InquiryDeskProps) {
  // Store default WhatsApp recipient number
  const STORE_WHATSAPP_NUMBER = '918758483208'; // +91 87584 83208

  // Form states
  const [form, setForm] = useState<InquiryFormState>({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    city: '',
    customMessage: 'Please provide the best wholesale price quotation and availability for the items in my list.',
    includeCartItems: true
  });

  const [validationError, setValidationError] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  // Math totals
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  const totalVal = cartItems.reduce((acc, item) => {
    const rate = item.orderType === 'wholesale' ? item.product.wholesalePrice : item.product.price;
    return acc + rate * item.quantity;
  }, 0);

  const totalRetailValue = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const totalWholesaleSavings = totalRetailValue - totalVal;

  // Compile the WhatsApp message string beautifully
  const compiledMessage = () => {
    let msg = `✨ *दीपिका TEXTILES - WHOLESALE INQUIRY* ✨\n`;
    msg += `===================================\n`;
    msg += `👤 *Client Name:* ${form.name || 'Not Specified'}\n`;
    if (form.businessName) {
      msg += `🏢 *Business Name:* ${form.businessName}\n`;
    }
    msg += `📍 *City / Hub:* ${form.city || 'Not Specified'}\n`;
    msg += `📞 *Contact Phone:* ${form.phone || 'Not Specified'}\n`;
    msg += `📧 *Email Address:* ${form.email || 'Not Specified'}\n\n`;

    msg += `📋 *INQUIRY SAMPLES LIST:*\n`;
    msg += `-----------------------------------\n`;
    
    cartItems.forEach((item, index) => {
      const rate = item.orderType === 'wholesale' ? item.product.wholesalePrice : item.product.price;
      const sub = rate * item.quantity;
      msg += `${index + 1}. *[${item.product.code}]* ${item.product.name}\n`;
      msg += `   • Fabric: ${item.product.fabric} Saree\n`;
      msg += `   • Shade Selected: ${item.selectedColor}\n`;
      msg += `   • Quantity Requested: ${item.quantity} pieces\n`;
      msg += `   • Order Tier: ${item.orderType.toUpperCase()}\n`;
      msg += `   • Estimated Rate: ₹${rate.toLocaleString('en-IN')}/pc\n`;
      msg += `   • Total Subtotal: ₹${sub.toLocaleString('en-IN')}\n`;
      msg += `   • Product Image: ${window.location.origin}${item.product.images[0]}\n\n`;
    });

    msg += `-----------------------------------\n`;
    msg += `📦 *Total Item Volume:* ${totalItems} pieces\n`;
    msg += `💰 *Est. Order Valuation:* ₹${totalVal.toLocaleString('en-IN')}\n`;
    if (totalWholesaleSavings > 0) {
      msg += `🔥 *Bulk Wholesale Savings:* ₹${totalWholesaleSavings.toLocaleString('en-IN')}\n`;
    }
    msg += `===================================\n\n`;
    msg += `💬 *Custom Message:* "${form.customMessage}"\n\n`;
    msg += `_Sent via दीपिका Textiles Online Store Catalog._`;
    return msg;
  };

  // Build the click-to-chat API URL
  const getWhatsAppLink = () => {
    const encodedText = encodeURIComponent(compiledMessage());
    return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodedText}`;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmitInquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) {
      setValidationError('Please fill out Name, Phone, and City so we can process your dispatch query.');
      return;
    }
    setInquirySent(true);
  };

  const handleResetInquiryFlow = () => {
    onClearCart();
    setInquirySent(false);
    setCurrentPage('home');
  };

  if (cartItems.length === 0 && !inquirySent) {
    return (
      <div className="max-w-xl mx-auto py-24 px-4 text-center font-sans" id="empty-cart-state">
        <div className="w-16 h-16 rounded-none bg-white border border-editorial-charcoal/10 flex items-center justify-center text-editorial-charcoal/40 mx-auto mb-6">
          <ShoppingBag className="w-7 h-7" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-editorial-charcoal uppercase tracking-tight">Inquiry Cart is Empty</h2>
        <p className="text-editorial-gray text-xs sm:text-sm mt-3 leading-relaxed font-light">
          Please add premium silk sarees, cotton linens, or organzas from our dynamic catalog before checking out.
        </p>
        <button
          onClick={() => setCurrentPage('shop')}
          className="mt-6 px-8 py-4 bg-editorial-charcoal hover:bg-editorial-red text-white font-bold text-xs tracking-widest uppercase rounded-none transition-all duration-300 cursor-pointer"
        >
          Explore Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-editorial-cream py-16" id="inquiry-desk-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic State: Post-checkout Success screens */}
        {inquirySent ? (
          <div className="max-w-2xl mx-auto bg-white rounded-none border border-editorial-charcoal/10 p-8 sm:p-12 text-center space-y-6 animate-scale-in" id="success-visual-box">
            <div className="w-20 h-20 bg-editorial-charcoal/5 text-editorial-red flex items-center justify-center mx-auto border border-editorial-charcoal/10">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-editorial-red uppercase bg-editorial-cream border border-editorial-charcoal/10 px-3 py-1">
                Inquiry Slip Compiled Successfully
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-editorial-charcoal">
                Your Inquiry is Ready to Send!
              </h2>
              <p className="text-editorial-gray text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-sans font-light">
                We have generated a secure digital receipt with your selected sarees, colors, and quantities. Click below to launch WhatsApp and directly submit it to our Sales Desk.
              </p>
            </div>

            {/* Crucial Action WhatsApp Link */}
            <div className="p-6 bg-editorial-cream rounded-none border border-editorial-charcoal/10 space-y-4">
              <p className="text-xs text-editorial-gray text-left leading-relaxed font-sans">
                <strong>Next steps:</strong> When you click the button, WhatsApp will open with the pre-filled inquiry. Press **Send** in the chat window to submit it. Our wholesale managers will respond with customized shipping quotes.
              </p>
              
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-none bg-editorial-charcoal hover:bg-editorial-red text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-between gap-2"
                id="whatsapp-direct-submit"
              >
                <span className="font-sans">Transmit Inquiry on WhatsApp</span>
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
            </div>

            {/* Secondary Option: Clear Cart and start fresh */}
            <div className="pt-4 border-t border-editorial-charcoal/10 flex justify-between items-center flex-wrap gap-4 font-sans uppercase text-[10px] tracking-wider font-bold">
              <button
                onClick={() => setInquirySent(false)}
                className="text-editorial-gray hover:text-editorial-charcoal flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Edit Details
              </button>
              <button
                onClick={handleResetInquiryFlow}
                className="px-5 py-3 bg-editorial-charcoal hover:bg-editorial-red text-white rounded-none cursor-pointer transition-all duration-300"
              >
                Clear Cart & Return Home
              </button>
            </div>
          </div>
        ) : (
          
          /* Form Entry Page state */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Form Details Form */}
            <form onSubmit={handleSubmitInquiry} className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-none border border-editorial-charcoal/10 space-y-6">
              
              <div className="border-b border-editorial-charcoal/10 pb-5">
                <button
                  type="button"
                  onClick={() => setCurrentPage('shop')}
                  className="text-editorial-gray hover:text-editorial-charcoal text-xs font-semibold flex items-center gap-1 mb-2.5 focus:outline-none cursor-pointer transition-colors uppercase tracking-widest font-sans"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Return to Saree Catalog
                </button>
                <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-editorial-charcoal">Compile WhatsApp Inquiry</h1>
                <p className="text-editorial-gray text-xs sm:text-sm mt-1.5 leading-relaxed font-sans font-light">
                  We process order quotes directly over WhatsApp chat. Fill in your business location details to receive tailored shipping quotes and special bulk rates.
                </p>
              </div>

              {validationError && (
                <div className="p-3 bg-editorial-red/10 border border-editorial-red/30 text-editorial-red text-xs font-bold font-sans">
                  {validationError}
                </div>
              )}

              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold flex items-center gap-1">
                    <User className="w-3 h-3 text-editorial-red" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Harish Kumar"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal"
                  />
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-editorial-red" />
                    Boutique / Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={form.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g., Ananya Bridal Studio (Optional)"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold flex items-center gap-1">
                    <Phone className="w-3 h-3 text-editorial-red" />
                    Contact WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal"
                  />
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-editorial-red" />
                    City & State *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={form.city}
                    onChange={handleInputChange}
                    placeholder="e.g., Surat, Gujarat"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold flex items-center gap-1">
                    <Mail className="w-3 h-3 text-editorial-red" />
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="e.g., Harish@yourboutique.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal"
                  />
                </div>

                {/* Custom Message */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-[9px] font-sans uppercase tracking-[0.2em] text-editorial-charcoal/50 font-bold">
                    Custom Inquiry Message Notes
                  </label>
                  <textarea
                    name="customMessage"
                    rows={4}
                    value={form.customMessage}
                    onChange={handleInputChange}
                    placeholder="Any specific instructions (e.g., custom fabric dye requests, GST details, export inquiries)..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-editorial-charcoal/10 text-editorial-charcoal focus:outline-none focus:border-editorial-charcoal font-light"
                  ></textarea>
                </div>
              </div>

              {/* Submit Compiler Trigger */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-editorial-charcoal hover:bg-editorial-red text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="generate-whatsapp-msg-btn"
              >
                <Send className="w-4 h-4" />
                <span>Compile & Preview WhatsApp Inquiry</span>
              </button>
            </form>

            {/* Right Column: Digital Receipt Slip Preview */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Receipt Wrapper */}
              <div className="bg-white rounded-none border border-dashed border-editorial-charcoal/30 overflow-hidden p-6 relative">
                
                {/* Top border decoration */}
                <div className="absolute top-0 inset-x-0 h-1 bg-editorial-charcoal"></div>

                <div className="text-center pb-5 border-b border-editorial-charcoal/10 mb-5">
                  <span className="font-serif text-lg font-extrabold tracking-tight text-editorial-charcoal block uppercase">
                    दीपिका TEXTILES
                  </span>
                  <span className="text-[8px] font-sans tracking-[0.25em] text-editorial-red uppercase font-bold block mt-1">
                    Est. 1990 • Manufacturer & Wholesale Supplier
                  </span>
                  <span className="text-[10px] text-editorial-charcoal/40 font-sans uppercase tracking-widest font-bold mt-1.5 block">Digital Saree Inquiry Slip</span>
                </div>

                {/* Scrolled Items list */}
                <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
                  {cartItems.map((item, idx) => {
                    const rate = item.orderType === 'wholesale' ? item.product.wholesalePrice : item.product.price;
                    return (
                      <div key={idx} className="flex justify-between items-start text-xs border-b border-editorial-charcoal/5 pb-3 last:border-0 last:pb-0">
                        <div>
                          <h4 className="font-bold text-editorial-charcoal font-serif leading-tight text-sm">{item.product.name}</h4>
                          <span className="text-[10px] text-editorial-charcoal/50 font-sans block mt-0.5 font-medium">
                            Code: {item.product.code} | Shade: {item.selectedColor}
                          </span>
                          <span className="text-[8px] bg-editorial-charcoal/5 text-editorial-charcoal px-2 py-0.5 rounded-none font-bold mt-1.5 inline-block uppercase font-sans tracking-widest border border-editorial-charcoal/5">
                            {item.orderType} ({item.quantity} pcs)
                          </span>
                        </div>
                        <span className="font-sans text-editorial-charcoal font-bold shrink-0 text-xs sm:text-sm">
                          ₹{(rate * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotals & Savings */}
                <div className="mt-6 pt-5 border-t border-editorial-charcoal/10 space-y-2 text-xs font-sans">
                  <div className="flex justify-between text-editorial-charcoal/50 font-medium">
                    <span>Retail Gross Cost</span>
                    <span className="font-bold text-editorial-charcoal">₹{totalRetailValue.toLocaleString('en-IN')}</span>
                  </div>
                  
                  {totalWholesaleSavings > 0 && (
                    <div className="flex justify-between text-editorial-red font-medium">
                      <span className="flex items-center gap-1 font-bold text-[9px] uppercase tracking-widest">
                        <BadgePercent className="w-3.5 h-3.5" />
                        Wholesale Discount
                      </span>
                      <span className="font-bold">-₹{totalWholesaleSavings.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="border-t border-editorial-charcoal/10 pt-3 flex justify-between items-center text-editorial-charcoal font-bold text-sm">
                    <span className="font-serif uppercase tracking-wider text-xs">Estimated Net Price</span>
                    <span className="text-base text-editorial-red font-serif font-extrabold">₹{totalVal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Trust info foot of receipt */}
                <div className="mt-6 p-4 bg-editorial-cream border border-editorial-charcoal/10 rounded-none flex items-start gap-2.5 text-[10px] text-editorial-charcoal font-sans leading-relaxed">
                  <Info className="w-4 h-4 text-editorial-red shrink-0 mt-0.5" />
                  <span>
                    Note: Prices displayed are estimates based on standard stock catalogs. Transferred inquiries will be finalized on WhatsApp including state taxes and transport charges.
                  </span>
                </div>
              </div>

              {/* Live Preview Message template box */}
              <div className="bg-editorial-charcoal text-stone-200 rounded-none p-5 border border-white/5 space-y-3">
                <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                  <h4 className="text-[10px] font-sans tracking-[0.2em] text-editorial-red font-bold uppercase flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4" />
                    Live WhatsApp Text Preview
                  </h4>
                  <span className="text-[9px] text-stone-500 font-sans tracking-widest uppercase font-bold">Dynamic Compile</span>
                </div>
                
                {/* Scrollable message box mimicking phone preview */}
                <div className="max-h-[160px] overflow-y-auto text-[11px] font-mono bg-black/40 text-stone-300 p-3.5 rounded-none border border-white/5 leading-relaxed whitespace-pre-line">
                  {compiledMessage()}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

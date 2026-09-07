import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  CreditCard,
  MessageCircle,
  FileText,
  BadgePercent,
  Receipt
} from 'lucide-react';

interface FooterProps {
  onSelectCategory: (slug: string) => void;
  onOpenQuote: () => void;
  variant?: 'default' | 'version2';
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenQuote, variant = 'default' }) => {
  // VERSION 2: CLEAN, BOX-FREE WHITE FOOTER (5 Columns, unboxed, matching reference)
  if (variant === 'version2') {
    return (
      <footer className="bg-white text-[#171717] pt-12 pb-8 text-xs font-manrope border-t border-[#E8E1D9]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-[#E8E1D9]">
            
            {/* 1. Company */}
            <div className="space-y-2.5">
              <div className="mb-2">
                <img
                  src="/canvas-india-logo.png"
                  alt="Canvas India"
                  className="h-8 w-auto object-contain block"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/canvas-india-logo.jpeg';
                  }}
                />
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#171717]">Company</h4>
              <ul className="space-y-1.5 text-[#736D66]">
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* 2. Customer Support */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#171717]">Customer Support</h4>
              <ul className="space-y-1.5 text-[#736D66]">
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* 3. Shop */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#171717]">Shop</h4>
              <ul className="space-y-1.5 text-[#736D66]">
                <li><button onClick={() => onSelectCategory('canvas-prints')} className="hover:text-[#C94F32] transition-colors">Canvas Prints</button></li>
                <li><button onClick={() => onSelectCategory('acrylic-prints')} className="hover:text-[#C94F32] transition-colors">Acrylic Prints</button></li>
                <li><button onClick={() => onSelectCategory('cork-prints')} className="hover:text-[#C94F32] transition-colors">Cork Prints</button></li>
                <li><button onClick={() => onSelectCategory('custom-prints')} className="hover:text-[#C94F32] transition-colors">Custom Prints</button></li>
                <li><button onClick={() => onSelectCategory('gifts')} className="hover:text-[#C94F32] transition-colors">Gifts &amp; Occasions</button></li>
                <li><button onClick={onOpenQuote} className="hover:text-[#C94F32] transition-colors">Corporate</button></li>
              </ul>
            </div>

            {/* 4. Policies */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#171717]">Policies</h4>
              <ul className="space-y-1.5 text-[#736D66]">
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-[#C94F32] transition-colors">Shipping Policy</a></li>
              </ul>
            </div>

            {/* 5. Stay Connected */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#171717]">Stay Connected</h4>
              <p className="text-[#736D66] text-xs leading-relaxed">
                Connect with us for custom artwork, gifting advice, and orders:
              </p>
              <div className="space-y-1.5 text-[#736D66]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C94F32]" />
                  <a href="tel:+919076543510" className="hover:text-[#C94F32] transition-colors">+91 90765 43510</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <a href="https://wa.me/919076543510" target="_blank" rel="noopener noreferrer" className="hover:text-[#C94F32] transition-colors">WhatsApp: +91 90765 43510</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#736D66]" />
                  <a href="mailto:support@canvasindia.in" className="hover:text-[#C94F32] transition-colors">support@canvasindia.in</a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Clean & Unboxed */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#736D66] text-[11px]">
            <div>
              © {new Date().getFullYear()} Canvas India Inc. Handcrafted in India. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[#736D66]">
              <span>UPI (GPay / PhonePe / Paytm)</span>
              <span>•</span>
              <span>RuPay</span>
              <span>•</span>
              <span>Visa / Mastercard</span>
              <span>•</span>
              <span>NetBanking</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  return (
    <footer className="bg-[#0B1727] text-stone-300 pt-12 pb-8 text-xs font-manrope">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        
        {/* Top Trust & Value Proposition Strip (Unboxed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 mb-8 border-b border-stone-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm">Free Delivery on ₹999+</div>
              <div className="text-[11px] text-stone-400">Insured shipping across 19,000+ pin codes</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm">GST Invoicing Available</div>
              <div className="text-[11px] text-stone-400">Claim 18% input tax credit on business orders</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm">100% Safe Payments</div>
              <div className="text-[11px] text-stone-400">Encrypted UPI, Cards, NetBanking &amp; EMI</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm">Instant WhatsApp Support</div>
              <div className="text-[11px] text-stone-400">+91 90765 43510 (Mon-Sat 9am - 8pm)</div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3.5">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-sm">
              <img
                src="/canvas-india-logo.png"
                alt="Canvas India"
                className="h-8 sm:h-9 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/canvas-india-logo.jpeg';
                }}
              />
            </div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              India's preferred direct-to-consumer personalized printing platform for custom canvas, 
              high-gloss acrylic prints, sustainable cork boards, and wall decor.
            </p>
            
            <div className="pt-1 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2 text-white font-medium">
                <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
                <a href="tel:+919076543510" className="hover:text-[var(--accent)] transition-colors">
                  +91 90765 43510
                </a>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <a 
                  href="https://wa.me/919076543510" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +91 90765 43510
                </a>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <a href="mailto:support@canvasindia.in" className="hover:text-white transition-colors">
                  support@canvasindia.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 1: Shop Categories */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Shop Products</h4>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li>
                <button onClick={() => onSelectCategory('canvas-prints')} className="hover:text-white transition-colors">
                  Canvas Prints
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('acrylic-prints')} className="hover:text-white transition-colors">
                  Acrylic Photo Prints
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('cork-prints')} className="hover:text-white transition-colors">
                  Custom Cork Boards
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('photo-frames')} className="hover:text-white transition-colors">
                  Solid Wood Photo Frames
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('wall-decor')} className="hover:text-white transition-colors">
                  Living Room Wall Decor
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('custom-prints')} className="hover:text-white transition-colors">
                  Photo Collages &amp; Posters
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('deals')} className="hover:text-white text-rose-400 font-medium transition-colors">
                  ⚡ Deals of the Day (Up to 40% Off)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Occasions & Gifting */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Gifts &amp; Occasions</h4>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li><button onClick={() => onSelectCategory('gifts')} className="hover:text-white transition-colors">Birthday Gifts</button></li>
              <li><button onClick={() => onSelectCategory('gifts')} className="hover:text-white transition-colors">Anniversary Frames</button></li>
              <li><button onClick={() => onSelectCategory('gifts')} className="hover:text-white transition-colors">Wedding Keepsakes</button></li>
              <li><button onClick={() => onSelectCategory('gifts')} className="hover:text-white transition-colors">Couple Photo Displays</button></li>
              <li><button onClick={() => onSelectCategory('gifts')} className="hover:text-white transition-colors">Diwali &amp; Festive Specials</button></li>
              <li><button onClick={() => onSelectCategory('gifts')} className="hover:text-white transition-colors">Housewarming Art</button></li>
              <li><button onClick={() => onSelectCategory('gifts')} className="hover:text-white transition-colors">Kids &amp; Family Portraits</button></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Customer Care</h4>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping &amp; Delivery Timelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns &amp; Replacement Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Image Quality &amp; Upload Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Frequently Asked Questions (FAQ)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy &amp; Data Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate & Business */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Business &amp; Bulk</h4>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  Corporate Gifting Solutions
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  Bulk Order Discounts (50+ units)
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="text-[var(--accent)] font-bold hover:underline transition-colors text-left">
                  Request Instant Quote
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Office Wall Murals &amp; Signage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GST Invoicing Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Artist &amp; Photographer Partner Program
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Payments + Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Canvas India Inc. Handcrafted in India. All rights reserved.
          </div>

          {/* Payment Badges Strip */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-stone-400 text-[10px] font-semibold mr-1">Accepted Payment Methods:</span>
            <span className="px-2 py-0.5 bg-stone-800 text-white rounded text-[10px] font-bold border border-stone-700">UPI (GPay / PhonePe / Paytm)</span>
            <span className="px-2 py-0.5 bg-stone-800 text-white rounded text-[10px] font-bold border border-stone-700">RuPay</span>
            <span className="px-2 py-0.5 bg-stone-800 text-white rounded text-[10px] font-bold border border-stone-700">Visa / Mastercard</span>
            <span className="px-2 py-0.5 bg-stone-800 text-white rounded text-[10px] font-bold border border-stone-700">NetBanking</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

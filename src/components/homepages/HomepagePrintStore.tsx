import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  SlidersHorizontal, 
  MapPin, 
  Award, 
  Check 
} from 'lucide-react';
import { HomepageProps } from './HomepageMarketplace';
import { ProductCard } from '../ProductCard';
import { PRIMARY_CATEGORIES } from '../../data/storeData';
import { CreateSomethingNew } from '../CreateSomethingNew';

export const HomepagePrintStore: React.FC<HomepageProps> = ({
  onSelectCategory,
  onAddToCart,
  onCustomize,
  onOpenQuote,
  wishlistIds,
  onToggleWishlist,
  allProducts,
}) => {
  // 6 Bestsellers for 6-col desktop layout
  const bestsellers = allProducts.slice(0, 6);

  // 7 Circular Categories from shared single source of truth
  const categories = PRIMARY_CATEGORIES;

  // 6 Compact Occasions
  const occasions = [
    { name: 'Birthday', slug: 'gifts', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&auto=format&fit=crop&q=80' },
    { name: 'Anniversary', slug: 'gifts', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&auto=format&fit=crop&q=80' },
    { name: 'Wedding', slug: 'gifts', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&auto=format&fit=crop&q=80' },
    { name: 'Housewarming', slug: 'gifts', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop&q=80' },
    { name: 'Diwali', slug: 'gifts', image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&auto=format&fit=crop&q=80' },
    { name: 'Corporate Gifts', slug: 'corporate', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="w-full bg-white text-[#171717] font-sans selection:bg-orange-100 selection:text-[#C94F32]">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Georgia Italic Headline, Warm cream #F8F0E6, Unboxed)    */}
      {/* ========================================================================= */}
      <section className="bg-[#F8F0E6] py-10 sm:py-14 lg:py-16 border-b border-[#E8E1D9]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 50-55% (Typography, CTAs, Process) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C94F32] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Wall Art &amp; Custom Gifting</span>
              </div>

              {/* Large Editorial Georgia Italic Headline (Desktop 56px-68px) */}
              <h1 
                className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-bold italic text-[#171717] leading-[0.98] sm:leading-[1.02] tracking-tight font-serif"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Turn Your Memories<br />
                <span className="text-[#C94F32] italic">Into Beautiful Wall Art</span>
              </h1>

              {/* Subtext */}
              <div className="space-y-1 pt-1">
                <p className="text-sm sm:text-base font-medium text-[#171717]">
                  Premium Canvas Prints Starting at ₹499
                </p>
                <p className="text-xs sm:text-sm text-[#736D66] font-medium">
                  Upload your photo → Customize → Order
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <button
                  type="button"
                  onClick={() => onCustomize()}
                  className="px-6 py-3 bg-[#C94F32] hover:bg-[#B34329] text-white text-xs sm:text-sm font-bold rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Create Your Canvas →</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('bestsellers-unboxed');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm font-semibold text-[#171717] hover:text-[#C94F32] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Shop Best Sellers →</span>
                </button>
              </div>
            </div>

            {/* Right Column: 45-50% (Integrated Lifestyle Scene, Unboxed) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[16/12] rounded-xl overflow-hidden shadow-md bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80"
                  alt="Personalized Canvas Wall Art"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. "CREATE SOMETHING NEW" (Positioned IMMEDIATELY after the Hero)         */}
      {/* ========================================================================= */}
      <CreateSomethingNew
        variant="print-store"
        onStartCreating={() => onCustomize()}
        onSelectCategory={onSelectCategory}
      />

      {/* ========================================================================= */}
      {/* 3. USP STRIP (Immediately below Create Something New)                     */}
      {/* ========================================================================= */}
      <section className="bg-white py-4 sm:py-5 border-b border-[#E8E1D9]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="flex items-center justify-center sm:justify-start gap-3 md:border-r md:border-[#E8E1D9] md:pr-4">
              <Truck className="w-5 h-5 text-[#C94F32] shrink-0" strokeWidth={1.8} />
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-[#171717]">Free Shipping</div>
                <div className="text-[11px] text-[#736D66]">Above ₹999</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 md:border-r md:border-[#E8E1D9] md:pr-4">
              <SlidersHorizontal className="w-5 h-5 text-[#C94F32] shrink-0" strokeWidth={1.8} />
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-[#171717]">Easy Customization</div>
                <div className="text-[11px] text-[#736D66]">In 3 simple steps</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 md:border-r md:border-[#E8E1D9] md:pr-4">
              <ShieldCheck className="w-5 h-5 text-[#C94F32] shrink-0" strokeWidth={1.8} />
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-[#171717]">Secure Payments</div>
                <div className="text-[11px] text-[#736D66]">UPI, Cards &amp; NetBanking</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <MapPin className="w-5 h-5 text-[#C94F32] shrink-0" strokeWidth={1.8} />
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-[#171717]">Pan-India Delivery</div>
                <div className="text-[11px] text-[#736D66]">19,000+ pin codes</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SHOP BY CATEGORY (Circular image thumbnails, 7 primary categories)      */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-12 bg-white border-b border-[#E8E1D9]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          
          <div className="flex items-end justify-between gap-4 mb-6">
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                Shop by Category
              </h2>
              <p className="text-xs sm:text-sm text-[#736D66] mt-0.5">
                Explore custom formats crafted for Indian home walls and desk decor
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSelectCategory('canvas-prints')}
              className="text-xs sm:text-sm font-semibold text-[#C94F32] hover:underline cursor-pointer whitespace-nowrap"
            >
              View All →
            </button>
          </div>

          {/* 7 Circular Category Thumbnails */}
          <div className="flex items-start justify-between gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => onSelectCategory(cat.slug)}
                className="group flex flex-col items-center text-center shrink-0 w-24 sm:w-28 cursor-pointer focus:outline-none"
              >
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-stone-100 border border-[#E8E1D9] group-hover:border-[#C94F32] transition-all group-hover:scale-105">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 text-xs font-semibold text-[#171717] group-hover:text-[#C94F32] transition-colors line-clamp-1">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BESTSELLING PRODUCTS                                                   */}
      {/* ========================================================================= */}
      <section id="bestsellers-unboxed" className="py-10 sm:py-12 bg-white border-b border-[#E8E1D9]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          
          <div className="flex items-end justify-between gap-4 mb-6">
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                Bestselling Products
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onSelectCategory('canvas-prints')}
              className="text-xs sm:text-sm font-semibold text-[#C94F32] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6-Column Clean Product Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
            {bestsellers.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                isWishlisted={wishlistIds.includes(prod.id)}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
                onCustomize={onCustomize}
                variant="version2"
              />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SHOP BY OCCASION                                                       */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-12 bg-white border-b border-[#E8E1D9]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          
          <div className="mb-6 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
              Shop by Occasion
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {occasions.map((occ) => (
              <div
                key={occ.name}
                onClick={() => onSelectCategory(occ.slug)}
                className="group cursor-pointer text-left"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 mb-2">
                  <img
                    src={occ.image}
                    alt={occ.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="font-semibold text-xs sm:text-sm text-[#171717] group-hover:text-[#C94F32] transition-colors">
                  {occ.name}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHY CUSTOMERS CHOOSE CANVAS INDIA                                      */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-14 bg-white border-b border-[#E8E1D9]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
              Why Customers Choose Canvas India
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-6 h-6 text-[#C94F32] mb-2.5" strokeWidth={1.8} />
              <h3 className="font-bold text-sm text-[#171717]">Premium Quality</h3>
              <p className="text-xs text-[#736D66] mt-1 leading-relaxed max-w-xs">
                Long-lasting prints on museum-grade 380 GSM cotton canvas and optical acrylic.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <SlidersHorizontal className="w-6 h-6 text-[#C94F32] mb-2.5" strokeWidth={1.8} />
              <h3 className="font-bold text-sm text-[#171717]">Easy Customization</h3>
              <p className="text-xs text-[#736D66] mt-1 leading-relaxed max-w-xs">
                In minutes directly from your phone with instant 3D proof preview.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Truck className="w-6 h-6 text-[#C94F32] mb-2.5" strokeWidth={1.8} />
              <h3 className="font-bold text-sm text-[#171717]">Pan-India Delivery</h3>
              <p className="text-xs text-[#736D66] mt-1 leading-relaxed max-w-xs">
                Across 28,000+ pincodes with 48-hour dispatch and safe transit protection.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-[#C94F32] mb-2.5" strokeWidth={1.8} />
              <h3 className="font-bold text-sm text-[#171717]">Secure Payments</h3>
              <p className="text-xs text-[#736D66] mt-1 leading-relaxed max-w-xs">
                100% safe &amp; reliable UPI, cards, NetBanking and GST invoice checkout.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BULK & CORPORATE ORDERS                                                */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8F0E6]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Corporate Imagery */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full max-w-md rounded-xl overflow-hidden shadow-md bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80"
                  alt="Office Wall Art & Bulk Corporate Gifts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Headline, supporting points, quote actions */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
                Bulk &amp; Corporate Orders
              </h2>
              <p className="text-xs sm:text-sm text-[#736D66] max-w-xl leading-relaxed">
                Perfect for employee gifts, events, offices, hotels and more.
              </p>

              {/* Supporting Points */}
              <div className="flex flex-wrap items-center gap-6 pt-1 text-xs font-semibold text-[#171717]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C94F32]" />
                  <span>Custom Branding</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C94F32]" />
                  <span>Bulk Pricing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C94F32]" />
                  <span>Pan-India Delivery</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-6 py-2.5 bg-[#C94F32] hover:bg-[#B34329] text-white text-xs sm:text-sm font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Get a Bulk Quote
                </button>
                <button
                  type="button"
                  onClick={() => {
                    window.open('https://wa.me/919076543510?text=Hi%20Canvas%20India%2C%20I%20would%20like%20to%20talk%20about%20a%20corporate%20order', '_blank');
                  }}
                  className="px-6 py-2.5 border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

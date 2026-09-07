import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Gift, 
  CheckCircle2
} from 'lucide-react';
import { HomepageProps } from './HomepageMarketplace';
import { CreateSomethingNew } from '../CreateSomethingNew';
import { CategoryGrid } from '../CategoryGrid';
import { BestsellersSection } from '../BestsellersSection';
import { OccasionSection } from '../OccasionSection';
import { CorporateSection } from '../CorporateSection';
import { TrustSection } from '../TrustSection';
import { Testimonials } from '../Testimonials';

export const HomepageModernIndian: React.FC<HomepageProps> = ({
  onSelectCategory,
  onAddToCart,
  onCustomize,
  onOpenQuote,
  wishlistIds,
  onToggleWishlist,
  allProducts,
}) => {
  return (
    <div className="w-full bg-[#FFFDF9] text-stone-900 font-manrope">
      
      {/* 1. CONTEMPORARY INDIAN LIFESTYLE HERO (Chumbak / DailyObjects / Warm Living Inspired - Completely Unboxed) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EE] via-[#FFFDF9] to-[#FFFDF9] py-10 lg:py-16 border-b border-[#EFE9DF]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100/70 text-amber-900 border border-amber-300/60">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Modern Indian Wall Decor &amp; Gifting</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[1.15]">
                Turn Every Memory Into Warm <span className="text-[var(--accent)] font-serif italic">Wall Stories</span>
              </h1>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
                From festive Diwali celebrations to milestone family portraits, we craft gallery canvas prints, crystal acrylic blocks, and eco-cork memories tailored for contemporary Indian homes.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onCustomize()}
                  className="px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-extrabold rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <span>Start Customizing Your Art</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('shop-occasions');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 font-bold rounded-2xl border border-stone-200/90 shadow-xs transition-colors flex items-center gap-2 cursor-pointer text-sm"
                >
                  <Gift className="w-4 h-4 text-[var(--accent)]" />
                  <span>Explore Festive Gifting</span>
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-600">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Cotton Museum Canvas
                </span>
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Shipping Above ₹999
                </span>
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Safe Pan-India Delivery
                </span>
              </div>
            </div>

            {/* Right Visual Collage - Unboxed Natural Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] relative group">
                    <img
                      src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80"
                      alt="Canvas Wall Art"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      Gallery Canvas
                    </div>
                  </div>
                  <div className="text-left px-1">
                    <div className="text-base font-bold text-stone-900">Starting ₹499</div>
                    <div className="text-[11px] text-stone-500">Custom prints &amp; wall decor</div>
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <div className="text-left px-1 pb-1">
                    <div className="text-base font-bold text-amber-800">4.8 / 5.0 ⭐</div>
                    <div className="text-[11px] text-stone-500">1,50,000+ Happy Indian Homes</div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] relative group">
                    <img
                      src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80"
                      alt="Glossy Acrylic Photo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      Acrylic Glass
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "CREATE SOMETHING NEW" (Positioned IMMEDIATELY after Hero) */}
      <CreateSomethingNew
        variant="modern"
        onStartCreating={() => onCustomize()}
        onSelectCategory={onSelectCategory}
      />

      {/* 3. CIRCULAR CATEGORY EXPLORER */}
      <CategoryGrid onSelectCategory={onSelectCategory} />

      {/* 4. BESTSELLING PRODUCTS (6-Product Grid - Compact & Unboxed with modern styling) */}
      <BestsellersSection
        products={allProducts}
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
        onAddToCart={onAddToCart}
        onCustomize={onCustomize}
        onViewAll={() => onSelectCategory('canvas-prints')}
        variant="modern"
      />

      {/* 5. SHOP BY OCCASION (10 Indian Occasions & Festivals) */}
      <OccasionSection onSelectOccasion={onSelectCategory} />

      {/* 6. CORPORATE & BULK ORDERS (Unboxed) */}
      <CorporateSection onOpenQuote={onOpenQuote} />

      {/* 7. WHY CANVAS INDIA (5 Trust Pillars) */}
      <TrustSection />

      {/* 8. CUSTOMER REVIEWS (Editorial 3-Column Reviews) */}
      <Testimonials />
    </div>
  );
};

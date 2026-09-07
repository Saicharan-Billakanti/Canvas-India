import React from 'react';
import { 
  Truck, 
  Clock, 
  ShieldCheck, 
  CreditCard 
} from 'lucide-react';
import { Product } from '../../types';
import { Hero } from '../Hero';
import { CreateSomethingNew } from '../CreateSomethingNew';
import { CategoryGrid } from '../CategoryGrid';
import { DealsSection } from '../DealsSection';
import { BestsellersSection } from '../BestsellersSection';
import { OccasionSection } from '../OccasionSection';
import { CorporateSection } from '../CorporateSection';
import { TrustSection } from '../TrustSection';
import { Testimonials } from '../Testimonials';

export interface HomepageProps {
  onSelectCategory: (slug: string) => void;
  onAddToCart: (product: Product) => void;
  onCustomize: (product?: Product) => void;
  onOpenQuote: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCartCustom: (item: {
    name: string;
    material: string;
    size: string;
    finish: string;
    text: string;
    price: number;
    image: string;
  }) => void;
  allProducts: Product[];
}

export const HomepageMarketplace: React.FC<HomepageProps> = ({
  onSelectCategory,
  onAddToCart,
  onCustomize,
  onOpenQuote,
  wishlistIds,
  onToggleWishlist,
  allProducts,
}) => {
  return (
    <div className="w-full bg-[#F8F9FA] text-stone-900">
      {/* 1. COMMERCIAL HERO BANNER (Great Indian Print Festival / Starting ₹499 - Unboxed) */}
      <Hero
        onStartCreating={() => onCustomize()}
        onExploreProducts={() => {
          const el = document.getElementById('shop-categories');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectCategory={onSelectCategory}
      />

      {/* 2. "CREATE SOMETHING NEW" (Positioned IMMEDIATELY after Hero) */}
      <CreateSomethingNew
        variant="marketplace"
        onStartCreating={() => onCustomize()}
        onSelectCategory={onSelectCategory}
      />

      {/* 3. USP TRUST STRIP (Flipkart / Amazon India Style - Clean & Unboxed) */}
      <section className="bg-white border-b border-stone-200 py-3.5 shadow-2xs">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center sm:text-left">
            
            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-orange-100 text-[var(--accent)] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-stone-900">Free Delivery ₹999+</div>
                <div className="text-[11px] text-stone-500">Pan-India insured shipping</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-stone-900">Dispatched in 48 Hrs</div>
                <div className="text-[11px] text-stone-500">Rapid local manufacturing</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-stone-900">⭐ 4.8 / 5.0 Rating</div>
                <div className="text-[11px] text-stone-500">1,50,000+ happy customers</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-stone-900">Pay via UPI &amp; Cards</div>
                <div className="text-[11px] text-stone-500">Zero surcharge checkout</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CIRCULAR CATEGORY EXPLORER (Flipkart style - Unboxed circular thumbnails) */}
      <CategoryGrid onSelectCategory={onSelectCategory} />

      {/* 5. FLASH DEALS OF THE DAY (With Countdown Clock - Unboxed 4-column deals) */}
      <DealsSection
        onAddToCart={onAddToCart}
        onCustomize={onCustomize}
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
      />

      {/* 6. BESTSELLING PRODUCTS (6-Product Grid - Compact & Unboxed with marketplace badges) */}
      <BestsellersSection
        products={allProducts}
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
        onAddToCart={onAddToCart}
        onCustomize={onCustomize}
        onViewAll={() => onSelectCategory('canvas-prints')}
        variant="marketplace"
      />

      {/* 7. SHOP BY OCCASION (10 Indian Occasions - Unboxed Rounded Shortcuts) */}
      <OccasionSection onSelectOccasion={onSelectCategory} />

      {/* 8. CORPORATE & BULK PRINTING (Full-width clean unboxed corporate showcase) */}
      <CorporateSection onOpenQuote={onOpenQuote} />

      {/* 9. WHY CANVAS INDIA (5 Trust Pillars - Clean Horizontal 5-Column Grid) */}
      <TrustSection />

      {/* 10. VERIFIED CUSTOMER REVIEWS (Editorial 3-Column Reviews) */}
      <Testimonials />
    </div>
  );
};

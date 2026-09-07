import React from 'react';
import { Star, Heart, ShoppingCart, SlidersHorizontal, Truck, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onCustomize: (product: Product) => void;
  variant?: 'default' | 'version2' | 'unboxed' | 'marketplace' | 'print-store' | 'modern';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onCustomize,
  variant = 'default',
}) => {
  const isV2 = variant === 'version2' || variant === 'print-store' || variant === 'unboxed';
  const isModern = variant === 'modern';
  const isMarketplace = variant === 'marketplace' || variant === 'default';

  // Accent color variables per variant
  const accentText = isV2 ? 'text-[#C94F32]' : isModern ? 'text-amber-800' : 'text-[var(--accent)]';
  const accentHoverText = isV2 ? 'group-hover:text-[#C94F32]' : isModern ? 'group-hover:text-amber-800' : 'group-hover:text-[var(--accent)]';
  const discountBg = isV2 ? 'bg-[#C94F32]' : isModern ? 'bg-amber-800' : 'bg-rose-600';

  return (
    <div className="group flex flex-col justify-between text-left select-none">
      <div>
        {/* Compact Product Image (approx 120-160px visual height, unboxed, floating) */}
        <div 
          className="relative aspect-square max-h-[160px] w-full rounded-lg overflow-hidden bg-stone-100 cursor-pointer"
          onClick={() => onCustomize(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Subtle Discount Pill */}
          {product.discountPercent > 0 && (
            <div className={`absolute top-2 left-2 ${discountBg} text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded shadow-2xs tracking-wide`}>
              {product.discountPercent}% OFF
            </div>
          )}

          {/* Subtle Wishlist Heart on Top Right */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-stone-600 hover:text-rose-600 flex items-center justify-center transition-all shadow-xs"
            aria-label="Wishlist"
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h4 
          onClick={() => onCustomize(product)}
          className={`font-semibold text-xs sm:text-[13px] text-stone-900 line-clamp-1 ${accentHoverText} transition-colors mt-2 cursor-pointer`}
          title={product.name}
        >
          {product.name}
        </h4>

        {/* Pricing Row */}
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-sm sm:text-base font-extrabold text-stone-900">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span className="text-[11px] text-stone-400 line-through">
            ₹{product.originalPrice.toLocaleString('en-IN')}
          </span>
          {isMarketplace && product.discountPercent > 0 && (
            <span className="text-[10px] font-bold text-emerald-700 hidden sm:inline">
              {product.discountPercent}% off
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-stone-500">
          {isMarketplace ? (
            <span className="inline-flex items-center gap-0.5 bg-emerald-700 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded leading-none">
              <span>{product.rating}</span>
              <Star className="w-2.5 h-2.5 fill-white text-white" />
            </span>
          ) : (
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          )}
          {!isMarketplace && <span className="font-bold text-stone-800">{product.rating}</span>}
          <span className="text-stone-400">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Small Clean Action CTA */}
      <div className="mt-2 pt-1 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onCustomize(product)}
          className={`text-[11px] font-bold ${accentText} hover:text-stone-950 flex items-center gap-1 transition-colors cursor-pointer`}
        >
          <span>Customize</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <span className="text-stone-300">•</span>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="text-[11px] font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Check, 
  Truck, 
  ShieldCheck, 
  Award, 
  MapPin, 
  ChevronRight, 
  Share2, 
  Sparkles, 
  ArrowRight,
  Sliders,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { CUSTOMER_REVIEWS, CATEGORIES } from '../data/storeData';
import { Product } from '../types';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { 
    allProducts, 
    wishlistIds, 
    onToggleWishlist, 
    onAddToCart, 
    onOpenCustomize 
  } = useShop();

  // Find product by id
  const product = useMemo(() => {
    return allProducts.find((p) => p.id === productId) || allProducts[0];
  }, [allProducts, productId]);

  const isWishlisted = wishlistIds.includes(product.id);

  // Variant state
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Delivery check state
  const [pincode, setPincode] = useState<string>('500001');
  const [pincodeChecked, setPincodeChecked] = useState<boolean>(false);
  const [checkingPincode, setCheckingPincode] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Sync variants when product changes
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || '12x18 inch');
      setSelectedFinish(product.finishes?.[0] || 'Standard');
      setQuantity(1);
      setActiveImageIndex(0);
      document.title = `${product.name} | Canvas India`;
      window.scrollTo(0, 0);

      // Save to recently viewed
      try {
        const raw = localStorage.getItem('ci_recently_viewed');
        const existing: string[] = raw ? JSON.parse(raw) : [];
        const updated = [product.id, ...existing.filter(id => id !== product.id)].slice(0, 6);
        localStorage.setItem('ci_recently_viewed', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
  }, [product]);

  // Gallery images (product primary + realistic contextual perspectives)
  const galleryImages = useMemo(() => {
    if (!product) return [];
    const images = [product.image];
    
    // Add realistic lifestyle/detail views based on category
    if (product.categorySlug === 'canvas') {
      images.push(
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?w=900&auto=format&fit=crop&q=80'
      );
    } else if (product.categorySlug === 'acrylic') {
      images.push(
        'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=900&auto=format&fit=crop&q=80'
      );
    } else if (product.categorySlug === 'cork') {
      images.push(
        'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=80'
      );
    } else {
      images.push(
        'https://images.unsplash.com/photo-1544816155-12df9643f363?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=900&auto=format&fit=crop&q=80'
      );
    }
    return images;
  }, [product]);

  // Related products from same category or catalog
  const relatedProducts = useMemo(() => {
    return allProducts
      .filter((p) => p.id !== product.id)
      .slice(0, 6);
  }, [allProducts, product.id]);

  // Recently viewed products
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('ci_recently_viewed');
      if (raw) {
        const ids: string[] = JSON.parse(raw);
        const filtered = ids
          .filter(id => id !== product.id)
          .map(id => allProducts.find(p => p.id === id))
          .filter((p): p is Product => Boolean(p))
          .slice(0, 4);
        setRecentlyViewed(filtered);
      }
    } catch {
      // ignore
    }
  }, [product.id, allProducts]);

  // Handlers
  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.trim().length < 6) return;
    setCheckingPincode(true);
    setTimeout(() => {
      setCheckingPincode(false);
      setPincodeChecked(true);
    }, 400);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} on Canvas India`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const categoryName = product.category || 'Prints';

  return (
    <div className="w-full bg-[#FFFDF9] py-6 sm:py-10 text-stone-900 font-manrope">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        
        {/* ========================================================================= */}
        {/* 1. BREADCRUMBS                                                            */}
        {/* ========================================================================= */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 mb-6 sm:mb-8">
          <Link to="/" className="hover:text-[#0E4A93] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/" className="hover:text-[#0E4A93] transition-colors">{categoryName}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-900 font-medium truncate max-w-[200px] sm:max-w-md">{product.name}</span>
        </nav>

        {/* ========================================================================= */}
        {/* 2. MAIN 2-COLUMN PRODUCT DISPLAY                                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-start">
          
          {/* LEFT: GALLERY (Sticky on desktop, 6 columns) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4 sticky top-24">
            
            {/* Main Primary Image */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 shadow-sm group">
              <img
                src={galleryImages[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Discount Tag */}
              {product.discountPercent > 0 && (
                <div className="absolute top-4 left-4 bg-[#E8752A] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md shadow-sm tracking-wider">
                  {product.discountPercent}% OFF
                </div>
              )}

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-stone-700 hover:text-rose-600 shadow-md flex items-center justify-center transition-all cursor-pointer"
                title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
              </button>
            </div>

            {/* Gallery Thumbnails */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-[#0E4A93] shadow-md ring-2 ring-[#0E4A93]/20' 
                        : 'border-stone-200 hover:border-stone-400 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Badges Strip (Box-Free, underneath gallery) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-200/80 text-left">
              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-[#E8752A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-stone-900">Museum Grade</div>
                  <div className="text-[11px] text-stone-500">12-color archival ink</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Truck className="w-5 h-5 text-[#0E4A93] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-stone-900">Free Delivery</div>
                  <div className="text-[11px] text-stone-500">On orders ₹999+</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-stone-900">Secure Payments</div>
                  <div className="text-[11px] text-stone-500">UPI, NetBanking & Cards</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-stone-900">Pan-India Ship</div>
                  <div className="text-[11px] text-stone-500">19,000+ PIN codes</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: PRODUCT INFO & PURCHASE CONTROLS (6 columns) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Header: Title + Share */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#0E4A93]">
                  {categoryName}
                </span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-stone-100"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2.5 text-xs text-stone-600">
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-800 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <span>•</span>
                <span className="underline decoration-stone-300">{product.reviewsCount} Customer Reviews</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  In Stock &amp; Handcrafted
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="pb-4 border-b border-stone-200">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-stone-950">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-base sm:text-lg text-stone-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} ({product.discountPercent}%)
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1">Inclusive of all GST taxes. Free shipping on orders above ₹999.</p>
            </div>

            {/* Variant 1: Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-800">Select Size:</span>
                  <span className="text-stone-500 font-medium">{selectedSize}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'border-[#0E4A93] bg-blue-50/60 text-[#0E4A93] shadow-xs'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Variant 2: Finish Selector */}
            {product.finishes && product.finishes.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-800">Select Finish &amp; Style:</span>
                  <span className="text-stone-500 font-medium">{selectedFinish}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.finishes.map((finish) => (
                    <button
                      key={finish}
                      type="button"
                      onClick={() => setSelectedFinish(finish)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        selectedFinish === finish
                          ? 'border-[#0E4A93] bg-blue-50/60 text-[#0E4A93] shadow-xs'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-1">
              <span className="font-bold text-xs text-stone-800">Quantity:</span>
              <div className="inline-flex items-center border border-stone-200 rounded-lg bg-white overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-10 text-center text-xs font-extrabold text-stone-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action CTAs: "Customize Now" & "Add to Cart" */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenCustomize(product)}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#0E4A93] hover:bg-[#09356A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Customize Now &rarr;</span>
              </button>

              <button
                type="button"
                onClick={() => onAddToCart(product, selectedSize, selectedFinish, quantity)}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#E8752A] hover:bg-[#D3631A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Indian Delivery Section */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                <Truck className="w-4 h-4 text-[#0E4A93]" />
                <span>Delivery Options &amp; Timelines</span>
              </div>
              
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value.replace(/\D/g, ''));
                    setPincodeChecked(false);
                  }}
                  placeholder="Enter 6-digit Pincode"
                  className="flex-1 px-3 py-1.5 text-xs bg-white rounded-lg border border-stone-300 focus:outline-none focus:border-[#0E4A93]"
                />
                <button
                  type="submit"
                  disabled={checkingPincode}
                  className="px-4 py-1.5 text-xs font-bold bg-stone-800 hover:bg-stone-950 text-white rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                >
                  {checkingPincode ? 'Checking...' : 'Check'}
                </button>
              </form>

              {pincodeChecked && (
                <div className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-200">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Delivery available to PIN {pincode} in 3–5 business days</span>
                  </div>
                  <div className="text-[11px] text-stone-500">
                    • Free doorstep delivery eligible (Order ₹999+)
                    <br />
                    • Multi-layer insured packaging with protective corner guards
                  </div>
                </div>
              )}
            </div>

            {/* Quick Description Snippet */}
            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed pt-1">
              {product.description}
            </p>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. PRODUCT SPECIFICATIONS & CARE INSTRUCTIONS                             */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-stone-200 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Product Description & Craftsmanship */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                Product Description &amp; Craftsmanship
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed">
                Handcrafted at Canvas India&apos;s dedicated print studio, each personalized piece undergoes meticulous color grading, museum-grade pigment printing, and professional artisan assembly. Whether displayed in your living room, gifted for an anniversary, or installed in modern corporate spaces, our prints are built to retain vibrancy and depth for over 50 years.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-sm text-stone-900">Care &amp; Handling Instructions:</h3>
                <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-5 leading-relaxed">
                  <li>Dust gently with a clean, dry microfiber cloth. Avoid abrasive cleaning pads.</li>
                  <li>For acrylic glass surfaces, use a soft cotton cloth lightly dampened with water or mild lens cleaner.</li>
                  <li>Keep out of continuous direct rainfall and excessive humidity.</li>
                  <li>Pre-installed hanging hardware makes mounting effortless on standard wall hooks or screws.</li>
                </ul>
              </div>
            </div>

            {/* Right: Specifications Table */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                Product Specifications
              </h2>

              <div className="rounded-xl border border-stone-200 overflow-hidden text-xs bg-white divide-y divide-stone-100">
                <div className="flex py-2.5 px-4 bg-stone-50">
                  <span className="w-1/3 font-bold text-stone-800">Category</span>
                  <span className="w-2/3 text-stone-700">{categoryName}</span>
                </div>
                <div className="flex py-2.5 px-4">
                  <span className="w-1/3 font-bold text-stone-800">Material</span>
                  <span className="w-2/3 text-stone-700">
                    {product.categorySlug === 'canvas' ? '380 GSM Pure Cotton Canvas & Kiln-Dried Pine' :
                     product.categorySlug === 'acrylic' ? '5mm Ultra-Clear Cast Acrylic Glass with Polished Edges' :
                     product.categorySlug === 'cork' ? '8mm High-Density Compressed Natural Cork' :
                     'Solid Engineered Wood Molding with Mat Border'}
                  </span>
                </div>
                <div className="flex py-2.5 px-4 bg-stone-50">
                  <span className="w-1/3 font-bold text-stone-800">Print Quality</span>
                  <span className="w-2/3 text-stone-700">12-Color Archival UV-Resistant Inks (2400 DPI)</span>
                </div>
                <div className="flex py-2.5 px-4">
                  <span className="w-1/3 font-bold text-stone-800">Available Sizes</span>
                  <span className="w-2/3 text-stone-700">{product.sizes?.join(', ') || 'Custom Dimensions Available'}</span>
                </div>
                <div className="flex py-2.5 px-4 bg-stone-50">
                  <span className="w-1/3 font-bold text-stone-800">Available Finishes</span>
                  <span className="w-2/3 text-stone-700">{product.finishes?.join(', ') || 'Standard Finish'}</span>
                </div>
                <div className="flex py-2.5 px-4">
                  <span className="w-1/3 font-bold text-stone-800">Mounting Hardware</span>
                  <span className="w-2/3 text-stone-700">Pre-attached hangers &amp; stainless wall standoffs included</span>
                </div>
                <div className="flex py-2.5 px-4 bg-stone-50">
                  <span className="w-1/3 font-bold text-stone-800">Origin</span>
                  <span className="w-2/3 text-stone-700">Proudly Designed &amp; Handcrafted in India</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. CUSTOMER REVIEWS (Authentic Verified Indian Customer Reviews)           */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-stone-200 text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                Customer Reviews
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">Real verified experiences from homes &amp; workplaces across India</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-sm text-stone-900">4.8 out of 5</span>
              <span className="text-xs text-stone-400">({product.reviewsCount} total ratings)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.slice(0, 3).map((review) => (
              <div key={review.id} className="p-5 rounded-xl border border-stone-200 bg-white space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{review.date}</span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed italic">
                  &ldquo;{review.review}&rdquo;
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-stone-900">{review.name}</div>
                    <div className="text-[11px] text-stone-400">{review.city}</div>
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <Check className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. YOU MAY ALSO LIKE (Related Products, Box-Free)                         */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-stone-200 text-left">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                You May Also Like
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">Popular complementary formats and bestselling custom wall decor</p>
            </div>
            <Link to="/" className="text-xs font-bold text-[#0E4A93] hover:text-[#E8752A] flex items-center gap-1 transition-colors">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8">
            {relatedProducts.map((relProd) => (
              <ProductCard
                key={relProd.id}
                product={relProd}
                isWishlisted={wishlistIds.includes(relProd.id)}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
                onCustomize={onOpenCustomize}
              />
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. RECENTLY VIEWED (LocalStorage driven, box-free)                        */}
        {/* ========================================================================= */}
        {recentlyViewed.length > 0 && (
          <div className="mt-16 pt-12 border-t border-stone-200 text-left">
            <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-6">
              Recently Viewed
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6">
              {recentlyViewed.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  isWishlisted={wishlistIds.includes(item.id)}
                  onToggleWishlist={onToggleWishlist}
                  onAddToCart={onAddToCart}
                  onCustomize={onOpenCustomize}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetailPage;

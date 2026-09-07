import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Menu, 
  X, 
  ArrowRight,
  Palette,
  Layers,
  CircleDot,
  Printer,
  Gift,
  Package,
  Building2,
  ChevronDown,
  Sparkles,
  Sliders,
  Flame,
  Truck
} from 'lucide-react';
import { Product } from '../types';
import { 
  MEGA_MENUS_DATA, 
  SEARCH_SUGGESTIONS, 
  PRIMARY_CATEGORIES, 
  PrimaryCategoryItem 
} from '../data/storeData';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenQuote: () => void;
  onSelectCategory: (slug: string) => void;
  onSearch: (query: string) => void;
  allProducts: Product[];
  onOpenCustomize: (product?: Product) => void;
  variant?: 'default' | 'marketplace' | 'version2' | 'modern';
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenQuote,
  onSelectCategory,
  onSearch,
  allProducts,
  onOpenCustomize,
  variant = 'marketplace',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('canvas-prints');
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Helper to resolve icon from primary category data
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return Palette;
      case 'Layers': return Layers;
      case 'CircleDot': return CircleDot;
      case 'Printer': return Printer;
      case 'Gift': return Gift;
      case 'Package': return Package;
      case 'Building2': return Building2;
      default: return Sliders;
    }
  };

  // Close mega-menu or search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('header')) {
        setActiveMegaMenu(null);
      }
      if (searchRef.current && !searchRef.current.contains(target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : allProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    onSearch(suggestion);
    setSearchOpen(false);
  };

  const handleNavClick = (slug: string) => {
    setActiveNav(slug);
    onSelectCategory(slug);
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const handleItemClick = (slug: string, actionType?: 'category' | 'quote' | 'customize') => {
    if (actionType === 'quote') {
      onOpenQuote();
    } else if (actionType === 'customize') {
      onOpenCustomize();
      onSelectCategory(slug);
    } else {
      handleNavClick(slug);
    }
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const renderGroupIcon = (iconType: string) => {
    switch (iconType) {
      case 'heart': return <Heart className="w-3.5 h-3.5 text-[#102A43]" />;
      case 'sparkles': return <Sparkles className="w-3.5 h-3.5 text-amber-600" />;
      case 'palette': return <Palette className="w-3.5 h-3.5 text-[#102A43]" />;
      case 'layers': return <Layers className="w-3.5 h-3.5 text-[#102A43]" />;
      case 'circleDot': return <CircleDot className="w-3.5 h-3.5 text-[#102A43]" />;
      case 'printer': return <Printer className="w-3.5 h-3.5 text-[#102A43]" />;
      case 'package': return <Package className="w-3.5 h-3.5 text-[#102A43]" />;
      case 'building': return <Building2 className="w-3.5 h-3.5 text-[#102A43]" />;
      default:
        return <Sliders className="w-3.5 h-3.5 text-[#102A43]" />;
    }
  };

  // Position mega-menu dropdown appropriately based on index
  const getDropdownPositionClass = (slug: string) => {
    switch (slug) {
      case 'canvas-prints':
      case 'canvas':
        return 'left-0';
      case 'acrylic-prints':
      case 'acrylic':
        return 'left-0 xl:left-[-10px]';
      case 'cork-prints':
      case 'cork':
        return 'left-[-20px] xl:left-[0px]';
      case 'custom-prints':
        return 'left-1/2 -translate-x-1/2';
      case 'gifts':
        return 'right-[-60px] xl:right-[-20px]';
      case 'corporate':
      case 'corporate-orders':
      case 'bulk-orders':
      case 'bulk-order':
        return 'right-0';
      default:
        return 'left-0';
    }
  };

  const isVersion2 = variant === 'version2';
  const isVersion3 = variant === 'modern';

  return (
    <header className="relative z-40 w-full max-w-none font-manrope">
      
      {/* ========================================================================= */}
      {/* LAYER 1: TOP PROMOTIONAL BAR                                              */}
      {/* ========================================================================= */}
      {isVersion2 ? (
        <div className="w-full bg-[#F8F0E6] text-[#171717] text-xs py-1 border-b border-[#E8E1D9] font-medium tracking-wide">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-14 flex items-center justify-between h-7">
            <div className="flex items-center gap-2 text-[11px] text-[#171717] font-medium">
              <span>India's Trusted Custom Printing Store</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-[#736D66]">
              <button 
                type="button"
                onClick={() => alert('Order Tracker: Enter your Order ID & Phone number.')}
                className="hover:text-[#171717] transition-colors cursor-pointer"
              >
                Track Order
              </button>
              <span className="text-[#E8E1D9]">|</span>
              <a 
                href="https://wa.me/919076543510" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#171717] transition-colors"
              >
                Help
              </a>
              <span className="text-[#E8E1D9]">|</span>
              <button 
                type="button"
                onClick={onOpenQuote}
                className="hover:text-[#171717] transition-colors cursor-pointer"
              >
                Bulk Orders
              </button>
              <span className="text-[#E8E1D9]">|</span>
              <button 
                type="button"
                onClick={onOpenQuote}
                className="hover:text-[#171717] transition-colors cursor-pointer"
              >
                Corporate
              </button>
              <span className="text-[#E8E1D9]">|</span>
              <button 
                type="button"
                onClick={() => alert('Customer portal: Sign In with mobile OTP or Email')}
                className="hover:text-[#171717] font-semibold transition-colors cursor-pointer text-[#171717]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Version 1 & 3: Dark Navy Promotional Bar (Version 1 uses 24px left padding, Version 3 retains default) */
        <div className="w-full bg-[#102A43] text-stone-200 text-xs py-1.5 font-medium tracking-wide border-b border-[#0B1E36]">
          <div className={`w-full ${isVersion3 ? 'px-4 sm:px-8 lg:px-12 xl:px-14' : 'px-4 sm:px-6 lg:px-6'} flex items-center justify-between`}>
            {/* Left: Free delivery + Coupon code */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1 text-stone-100">
                <span>🚚</span>
                <span>Free Delivery on orders above ₹999 across India</span>
              </span>
              <span className="text-blue-300/40 hidden md:inline">|</span>
              <span className="hidden md:inline text-stone-300">
                Use Code: <strong className="text-amber-300 font-bold">CANVAS10</strong> for 10% OFF
              </span>
            </div>

            {/* Right: Phone support + Track order + Login */}
            <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-stone-200">
              <a 
                href="tel:+919076543510" 
                className="hidden lg:flex items-center gap-1 text-stone-200 hover:text-white transition-colors"
              >
                <span>📞 Customer Support:</span>
                <span className="font-bold text-white">+91 90765 43510</span>
              </a>
              <span className="text-blue-300/40 hidden lg:inline">|</span>
              
              <button 
                type="button"
                onClick={() => alert('Order Tracker: Enter your Order ID & Mobile Number.')}
                className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>📦</span>
                <span>Track Order</span>
              </button>
              <span className="text-blue-300/40">|</span>

              <button 
                type="button"
                onClick={() => alert('Customer portal: Login or Sign Up with mobile OTP.')}
                className="hover:text-white flex items-center gap-1 font-semibold text-white transition-colors cursor-pointer"
              >
                <span>👤</span>
                <span>Login / Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VERSION 1 TWO-COLUMN DESKTOP HEADER (MANDATORY STRUCTURE)                 */}
      {/* Left: LOGO (Anchored 48-60px left) | Right Row 1: SEARCH + USER ACTIONS  */}
      {/*                                     Right Row 2: CATEGORY NAV (48-54px)   */}
      {/* ========================================================================= */}
      {!isVersion2 ? (
        <div className="w-full bg-white border-b border-stone-200/80 py-2.5 lg:py-3 shadow-2xs">
          {/* Version 1 logo positioned 24px from left viewport edge (px-6 is exactly 24px), Version 3 retains default */}
          <div className={`w-full ${isVersion3 ? 'px-4 sm:px-8 lg:px-12 xl:px-14' : 'px-4 sm:px-6 lg:px-6'}`}>
            
            {/* DESKTOP TWO-COLUMN STRUCTURE */}
            <div className="hidden lg:flex items-center gap-4 lg:gap-5 xl:gap-6 w-full">
              
              {/* LEFT COLUMN: ORIGINAL CANVAS INDIA LOGO ASSET (Approx 200px–225px, Vertically Centered) */}
              <div className="w-[200px] lg:w-[215px] xl:w-[225px] shrink-0 flex items-center justify-start">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('canvas-prints'); }}
                  className="block transition-opacity hover:opacity-95 cursor-pointer py-1"
                  title="Canvas India - Personalized Canvas, Acrylic & Cork Prints"
                >
                  <img
                    src="/canvas-india-logo.png"
                    alt="Canvas India"
                    className="w-[190px] lg:w-[205px] xl:w-[215px] h-auto max-h-[85px] object-contain block select-none"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/canvas-india-logo.jpeg';
                    }}
                  />
                </a>
              </div>

              {/* RIGHT COLUMN: ROW 1 (Search + User Actions) & ROW 2 (Category Navigation) */}
              <div className="flex-1 min-w-0 flex flex-col justify-center gap-2 xl:gap-2.5">
                
                {/* ROW 1: Search Bar + Account / Wishlist / Cart */}
                <div className="flex items-center justify-between gap-4 w-full">
                  
                  {/* Search Bar - Starts close to logo, expands naturally across available right column */}
                  <div ref={searchRef} className="flex-1 min-w-0 relative">
                    <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setSearchOpen(true);
                        }}
                        onFocus={() => setSearchOpen(true)}
                        placeholder="Search for products, gifts, artists & more..."
                        className="w-full pl-4 pr-24 py-2 bg-white text-stone-900 placeholder-stone-400 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-[#102A43] transition-all"
                      />
                      <button
                        type="submit"
                        className="absolute right-1 top-1 bottom-1 px-5 bg-[#102A43] hover:bg-[#0B1E36] text-white rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Search className="w-3.5 h-3.5 text-white" />
                        <span>Search</span>
                      </button>
                    </form>

                    {/* Suggestions & Search Results Popover */}
                    {searchOpen && (
                      <div className="absolute left-0 right-0 top-full mt-1.5 bg-white text-stone-800 rounded-xl shadow-2xl border border-stone-200 overflow-hidden z-50 divide-y divide-stone-100">
                        {searchQuery.trim() === '' && (
                          <div className="p-3 bg-stone-50/70">
                            <div className="text-[11px] font-bold tracking-wider uppercase text-stone-500 mb-2 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-amber-500" />
                              <span>Popular Searches in India</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {SEARCH_SUGGESTIONS.map((item) => (
                                <button
                                  key={item}
                                  type="button"
                                  onClick={() => handleSuggestionClick(item)}
                                  className="px-2.5 py-1 bg-white hover:bg-stone-100 text-stone-700 text-xs font-medium rounded-lg border border-stone-200 transition-colors cursor-pointer"
                                >
                                  {item}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {searchResults.length > 0 && (
                          <div className="p-2">
                            <div className="p-1.5 text-[11px] font-bold tracking-wider uppercase text-stone-400">
                              Matching Products ({searchResults.length})
                            </div>
                            {searchResults.map((product) => (
                              <div
                                key={product.id}
                                onClick={() => {
                                  onOpenCustomize(product);
                                  setSearchOpen(false);
                                }}
                                className="p-2 flex items-center gap-3 hover:bg-stone-50 rounded-lg cursor-pointer transition-colors"
                              >
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-10 h-10 object-cover rounded-lg border border-stone-200"
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-xs sm:text-sm text-stone-900 truncate">
                                    {product.name}
                                  </div>
                                  <div className="text-[11px] text-stone-500">
                                    {product.category} • <span className="font-bold text-[#102A43]">₹{product.price}</span>
                                  </div>
                                </div>
                                <span className="text-xs text-[#102A43] font-semibold">Customize →</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Clean Line Icons for Account, Wishlist, Cart */}
                  <div className="flex items-center gap-5 xl:gap-6 shrink-0 text-xs sm:text-sm font-semibold text-stone-700">
                    <button 
                      type="button"
                      onClick={() => alert('Customer portal: Login or Sign Up')}
                      className="flex items-center gap-1.5 hover:text-[#102A43] transition-colors cursor-pointer"
                    >
                      <User className="w-4 h-4 text-stone-600" strokeWidth={2} />
                      <span>Account</span>
                    </button>

                    <button
                      type="button"
                      onClick={onOpenWishlist}
                      className="relative flex items-center gap-1.5 hover:text-[#102A43] transition-colors cursor-pointer"
                    >
                      <Heart className="w-4 h-4 text-stone-600" strokeWidth={2} />
                      <span>Wishlist</span>
                      {wishlistCount > 0 && (
                        <span className="bg-[#102A43] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                          {wishlistCount}
                        </span>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={onOpenCart}
                      className="relative flex items-center gap-1.5 hover:text-[#102A43] transition-colors cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4 text-stone-600" strokeWidth={2} />
                      <span>Cart</span>
                      {cartCount > 0 && (
                        <span className="bg-[#102A43] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                          {cartCount}
                        </span>
                      )}
                    </button>
                  </div>

                </div>

                {/* ROW 2: Category Navigation (Left-aligned with search bar, stretches naturally across right column width) */}
                <nav className="bg-white rounded-xl border border-stone-200/90 shadow-xs px-2.5 py-1 flex items-center justify-between relative h-[48px] sm:h-[50px] w-full">
                  {PRIMARY_CATEGORIES.map((cat, idx) => {
                    const Icon = getCategoryIcon(cat.iconName);
                    const isActive = activeNav === cat.slug;
                    const isMenuOpen = activeMegaMenu === cat.slug;
                    const menuData = MEGA_MENUS_DATA[cat.slug];

                    return (
                      <React.Fragment key={cat.slug}>
                        {/* Thin vertical separator between items */}
                        {idx > 0 && (
                          <div className="hidden xl:block h-4 w-[1px] bg-stone-200 shrink-0" />
                        )}

                        <div
                          className="relative"
                          onMouseEnter={() => setActiveMegaMenu(cat.slug)}
                          onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              if (activeMegaMenu === cat.slug) {
                                handleItemClick(cat.slug, 'category');
                              } else {
                                setActiveMegaMenu(cat.slug);
                              }
                            }}
                            className={`px-2.5 xl:px-3.5 py-1.5 rounded-lg text-xs xl:text-[13px] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                              isActive || (idx === 0 && !activeMegaMenu)
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold shadow-2xs'
                                : isMenuOpen
                                  ? 'bg-stone-100 text-[#102A43] font-bold'
                                  : 'text-[#102A43] hover:text-[#102A43] hover:bg-stone-50 font-semibold'
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${
                              isActive || (idx === 0 && !activeMegaMenu)
                                ? 'text-emerald-700'
                                : 'text-[#102A43]'
                            }`} strokeWidth={1.9} />
                            <span>{cat.name}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                              isActive || (idx === 0 && !activeMegaMenu)
                                ? 'text-emerald-600'
                                : isMenuOpen ? 'rotate-180 text-[#102A43]' : 'text-stone-400'
                            }`} />
                          </button>

                          {/* Mega-Menu Dropdown Panel */}
                          {isMenuOpen && menuData && (
                            <div 
                              className={`absolute top-full ${getDropdownPositionClass(cat.slug)} mt-1.5 w-[850px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-stone-200 z-50 p-5 lg:p-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2 text-left select-none whitespace-normal`}
                              onMouseEnter={() => setActiveMegaMenu(cat.slug)}
                              onMouseLeave={() => setActiveMegaMenu(null)}
                            >
                              <div className="grid grid-cols-12 gap-5 items-start">
                                {/* Column 1: Group 1 (4 cols) */}
                                {menuData.groups[0] && (
                                  <div className="col-span-4 border-r border-stone-100 pr-4">
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2.5 pb-1.5 border-b border-stone-100">
                                      {renderGroupIcon(menuData.groups[0].iconType)}
                                      <span>{menuData.groups[0].title}</span>
                                    </div>
                                    <ul className="space-y-0.5">
                                      {menuData.groups[0].items.map((item) => (
                                        <li key={item.name}>
                                          <button
                                            type="button"
                                            onClick={() => handleItemClick(item.slug, item.actionType)}
                                            className="w-full text-left px-2.5 py-1.5 text-xs text-stone-700 hover:text-[#102A43] hover:bg-stone-50 rounded-md transition-colors font-medium flex items-center justify-between group cursor-pointer"
                                          >
                                            <div>
                                              <span className="block font-semibold text-stone-900 group-hover:text-[#102A43]">{item.name}</span>
                                              {item.description && (
                                                <span className="block text-[10px] text-stone-500 font-normal leading-tight mt-0.5">{item.description}</span>
                                              )}
                                            </div>
                                            <ArrowRight className="w-3 h-3 text-stone-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Column 2: Group 2 (4 cols) */}
                                {menuData.groups[1] && (
                                  <div className="col-span-4 border-r border-stone-100 pr-4">
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2.5 pb-1.5 border-b border-stone-100">
                                      {renderGroupIcon(menuData.groups[1].iconType)}
                                      <span>{menuData.groups[1].title}</span>
                                    </div>
                                    <ul className={`space-y-0.5 ${menuData.groups[1].items.length > 8 ? 'max-h-[350px] overflow-y-auto pr-1 scrollbar-none' : ''}`}>
                                      {menuData.groups[1].items.map((item) => (
                                        <li key={item.name}>
                                          <button
                                            type="button"
                                            onClick={() => handleItemClick(item.slug, item.actionType)}
                                            className="w-full text-left px-2.5 py-1.5 text-xs text-stone-700 hover:text-[#102A43] hover:bg-stone-50 rounded-md transition-colors font-medium flex items-center justify-between group cursor-pointer"
                                          >
                                            <div>
                                              <span className="block font-semibold text-stone-900 group-hover:text-[#102A43]">{item.name}</span>
                                              {item.description && (
                                                <span className="block text-[10px] text-stone-500 font-normal leading-tight mt-0.5">{item.description}</span>
                                              )}
                                            </div>
                                            <ArrowRight className="w-3 h-3 text-stone-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Column 3: Promotional Panel (4 cols) */}
                                <div className="col-span-4 flex flex-col justify-between h-full bg-stone-50 rounded-xl p-3.5 border border-stone-200/80">
                                  <div>
                                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-stone-200 mb-2.5 shadow-xs">
                                      <img
                                        src={menuData.promo.image}
                                        alt={menuData.promo.title}
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute top-2 left-2 bg-[#102A43] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">
                                        {menuData.promo.badge}
                                      </div>
                                    </div>
                                    <h4 className="font-bold text-sm text-[#102A43] mb-1">
                                      {menuData.promo.title}
                                    </h4>
                                    <p className="text-[11px] text-stone-500 leading-snug mb-3">
                                      {menuData.promo.tagline}
                                    </p>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => handleItemClick(menuData.promo.slug, menuData.promo.actionType)}
                                    className="w-full py-2 bg-[#102A43] hover:bg-[#0B1E36] text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                                  >
                                    <span>{menuData.promo.buttonText}</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </nav>

              </div>

            </div>

            {/* MOBILE HEADER ROW */}
            <div className="flex lg:hidden flex-col gap-2 w-full">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="p-1.5 text-stone-800 hover:bg-stone-100 rounded-lg cursor-pointer"
                    aria-label="Open menu"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('canvas-prints'); }}
                    className="flex items-center shrink-0"
                  >
                    <img
                      src="/canvas-india-logo.png"
                      alt="Canvas India"
                      className="w-[130px] sm:w-[155px] h-[40px] sm:h-[48px] object-contain block"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/canvas-india-logo.jpeg';
                      }}
                    />
                  </a>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="p-2 text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={onOpenWishlist}
                    className="p-2 text-stone-700 hover:bg-stone-100 rounded-lg relative cursor-pointer"
                    aria-label="Wishlist"
                  >
                    <Heart className="w-5 h-5" />
                    {wishlistCount > 0 && (
                      <span className="absolute top-1 right-1 bg-[#102A43] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                        {wishlistCount}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onOpenCart}
                    className="relative p-2 text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
                    aria-label="Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                      <span className="absolute top-1 right-1 bg-[#102A43] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Expandable Search */}
              {searchOpen && (
                <form onSubmit={handleSearchSubmit} className="relative w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products, gifts, artists & more..."
                    className="w-full pl-3.5 pr-20 py-2 bg-white text-stone-900 placeholder-stone-400 text-xs rounded-lg border border-stone-300 shadow-xs focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3.5 bg-[#102A43] text-white rounded-md text-xs font-semibold flex items-center justify-center gap-1"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Search</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* VERSION 2 HEADER (Warm Cream + Terracotta + Ultra-Compact 38-40px Bar)    */
        /* ========================================================================= */
        <div className="w-full bg-white border-b border-[#E8E1D9]">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-14">
            
            {/* Version 2 Desktop Main Row (Comfortable 82–92px height, target ~86px) */}
            <div className="hidden lg:flex items-center justify-between gap-6 w-full h-[86px]">
              {/* Left Logo + Elegant CANVAS INDIA Serif Lockup (Version 2 Only) */}
              <div className="shrink-0 flex items-center">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('canvas-prints'); }}
                  className="flex items-center gap-[14px] transition-opacity hover:opacity-95 cursor-pointer py-1"
                  title="Canvas India - Personalized Canvas, Acrylic & Cork Prints"
                >
                  <img
                    src="/canvas-india-logo.png"
                    alt="Canvas India"
                    className="w-[95px] lg:w-[105px] h-auto max-h-[52px] object-contain block select-none"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/canvas-india-logo.jpeg';
                    }}
                  />
                  <span 
                    className="text-[23px] lg:text-[25px] font-semibold tracking-[1.2px] text-[#14213D] leading-none whitespace-nowrap select-none font-serif"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 600 }}
                  >
                    CANVAS INDIA
                  </span>
                </a>
              </div>

              {/* Center Search Bar (Comfortable 44px-46px height) */}
              <div ref={searchRef} className="flex-1 min-w-0 max-w-xl 2xl:max-w-2xl relative">
                <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchOpen(true);
                    }}
                    onFocus={() => setSearchOpen(true)}
                    placeholder="Search for canvas prints, acrylic prints, cork prints, photo frames, gifts..."
                    className="w-full pl-4 pr-24 h-[44px] sm:h-[46px] bg-[#FAF8F5] text-[#171717] placeholder-[#736D66] text-xs sm:text-sm rounded-lg border border-[#E8E1D9] focus:outline-none focus:border-[#C94F32] transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4.5 bg-[#C94F32] hover:bg-[#B34329] text-white rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5 text-white" />
                    <span>Search</span>
                  </button>
                </form>
              </div>

              {/* Right: Account, Wishlist, Cart */}
              <div className="flex items-center gap-5 shrink-0 text-xs font-semibold text-[#171717]">
                <button 
                  type="button"
                  onClick={() => alert('Customer portal: Login or Sign Up')}
                  className="flex items-center gap-1.5 hover:text-[#C94F32] transition-colors cursor-pointer"
                >
                  <User className="w-4 h-4 text-[#171717]" />
                  <span>Account</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenWishlist}
                  className="relative flex items-center gap-1.5 hover:text-[#C94F32] transition-colors cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-[#171717]" />
                  <span>Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="bg-[#C94F32] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center leading-none">
                      {wishlistCount}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onOpenCart}
                  className="relative flex items-center gap-1.5 hover:text-[#C94F32] transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 text-[#171717]" />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="bg-[#C94F32] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center leading-none">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Header for Version 2 */}
            <div className="flex lg:hidden items-center justify-between gap-2 py-3 min-h-[64px]">
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setMobileMenuOpen(true)} className="p-1.5 text-[#171717]">
                  <Menu className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2.5">
                  <img src="/canvas-india-logo.png" alt="Canvas India" className="w-[85px] sm:w-[95px] h-auto max-h-[38px] object-contain" />
                  <span 
                    className="hidden sm:inline text-[18px] font-semibold tracking-[1px] text-[#14213D] whitespace-nowrap select-none font-serif"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 600 }}
                  >
                    CANVAS INDIA
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button type="button" onClick={onOpenWishlist} className="p-2 text-[#171717] relative">
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && <span className="absolute top-1 right-1 bg-[#C94F32] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">{wishlistCount}</span>}
                </button>
                <button type="button" onClick={onOpenCart} className="p-2 text-[#171717] relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && <span className="absolute top-1 right-1 bg-[#C94F32] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">{cartCount}</span>}
                </button>
              </div>
            </div>

          </div>

          {/* Version 2 Compact Category Bar (Strict ~38px height from border to border) */}
          <div className="hidden lg:block border-t border-[#E8E1D9]/70 bg-white">
            <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-14">
              <nav className="flex items-center justify-between h-[38px] py-0 my-0">
                {PRIMARY_CATEGORIES.map((cat) => {
                  const Icon = getCategoryIcon(cat.iconName);
                  const isActive = activeNav === cat.slug;
                  const isMenuOpen = activeMegaMenu === cat.slug;
                  const menuData = MEGA_MENUS_DATA[cat.slug];

                  return (
                    <div
                      key={cat.slug}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setActiveMegaMenu(cat.slug)}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (activeMegaMenu === cat.slug) {
                            handleItemClick(cat.slug, 'category');
                          } else {
                            setActiveMegaMenu(cat.slug);
                          }
                        }}
                        className={`h-[32px] px-2 text-xs transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap leading-none ${
                          isActive || isMenuOpen
                            ? 'text-[#C94F32] font-bold'
                            : 'text-[#171717] hover:text-[#C94F32] font-medium'
                        }`}
                      >
                        <Icon className={`w-3 h-3 ${isActive || isMenuOpen ? 'text-[#C94F32]' : 'text-stone-500'}`} strokeWidth={1.8} />
                        <span>{cat.name}</span>
                        <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${
                          isMenuOpen ? 'rotate-180 text-[#C94F32]' : 'text-stone-400'
                        }`} />
                      </button>

                      {/* Version 2 Mega Menu */}
                      {isMenuOpen && menuData && (
                        <div 
                          className={`absolute top-full ${getDropdownPositionClass(cat.slug)} mt-0 w-[850px] max-w-[90vw] bg-white rounded-xl shadow-xl border border-[#E8E1D9] z-50 p-5 text-left select-none whitespace-normal`}
                          onMouseEnter={() => setActiveMegaMenu(cat.slug)}
                          onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                          <div className="grid grid-cols-12 gap-5 items-start">
                            {menuData.groups[0] && (
                              <div className="col-span-4 border-r border-[#E8E1D9]/70 pr-4">
                                <div className="text-xs font-bold text-[#171717] uppercase tracking-wider mb-2 pb-1 border-b border-[#E8E1D9]/60">
                                  {menuData.groups[0].title}
                                </div>
                                <ul className="space-y-0.5">
                                  {menuData.groups[0].items.map((item) => (
                                    <li key={item.name}>
                                      <button
                                        type="button"
                                        onClick={() => handleItemClick(item.slug, item.actionType)}
                                        className="w-full text-left px-2 py-1 text-xs text-stone-700 hover:text-[#C94F32] hover:bg-[#F8F0E6] rounded transition-colors font-medium flex items-center justify-between group cursor-pointer"
                                      >
                                        <span className="font-semibold text-stone-900 group-hover:text-[#C94F32]">{item.name}</span>
                                        <ArrowRight className="w-3 h-3 text-stone-300 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {menuData.groups[1] && (
                              <div className="col-span-4 border-r border-[#E8E1D9]/70 pr-4">
                                <div className="text-xs font-bold text-[#171717] uppercase tracking-wider mb-2 pb-1 border-b border-[#E8E1D9]/60">
                                  {menuData.groups[1].title}
                                </div>
                                <ul className="space-y-0.5">
                                  {menuData.groups[1].items.map((item) => (
                                    <li key={item.name}>
                                      <button
                                        type="button"
                                        onClick={() => handleItemClick(item.slug, item.actionType)}
                                        className="w-full text-left px-2 py-1 text-xs text-stone-700 hover:text-[#C94F32] hover:bg-[#F8F0E6] rounded transition-colors font-medium flex items-center justify-between group cursor-pointer"
                                      >
                                        <span className="font-semibold text-stone-900 group-hover:text-[#C94F32]">{item.name}</span>
                                        <ArrowRight className="w-3 h-3 text-stone-300 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="col-span-4 flex flex-col justify-between h-full bg-[#FAF8F5] rounded-lg p-3 border border-[#E8E1D9]">
                              <div>
                                <div className="relative aspect-[16/10] rounded overflow-hidden bg-stone-200 mb-2">
                                  <img src={menuData.promo.image} alt={menuData.promo.title} className="w-full h-full object-cover" />
                                  <div className="absolute top-1.5 left-1.5 bg-[#C94F32] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                    {menuData.promo.badge}
                                  </div>
                                </div>
                                <h4 className="font-bold text-xs text-[#171717] mb-0.5">{menuData.promo.title}</h4>
                                <p className="text-[10px] text-stone-500 leading-snug">{menuData.promo.tagline}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleItemClick(menuData.promo.slug, menuData.promo.actionType)}
                                className="w-full py-1.5 bg-[#C94F32] hover:bg-[#B34329] text-white text-xs font-bold rounded mt-2 cursor-pointer transition-colors"
                              >
                                {menuData.promo.buttonText} →
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MOBILE HORIZONTAL CATEGORY BAR (All 3 versions)                           */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full bg-white border-b border-stone-200 px-3 py-1.5 overflow-x-auto scrollbar-none flex items-center gap-1.5 whitespace-nowrap">
        {PRIMARY_CATEGORIES.map((cat) => {
          const Icon = getCategoryIcon(cat.iconName);
          const isActive = activeNav === cat.slug;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => handleNavClick(cat.slug)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 shrink-0 ${
                isActive 
                  ? isVersion2
                    ? 'text-[#C94F32] bg-[#F8F0E6] font-bold border border-[#C94F32]/30'
                    : 'text-emerald-800 bg-emerald-50 font-bold border border-emerald-300' 
                  : 'text-stone-700 bg-stone-100/80'
              }`}
            >
              <Icon className={`w-3 h-3 ${isActive ? (isVersion2 ? 'text-[#C94F32]' : 'text-emerald-700') : 'text-stone-500'}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* MOBILE DRAWER MENU                                                        */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 flex">
          <div className="w-80 bg-white h-full shadow-2xl flex flex-col">
            <div className="p-4 bg-[#102A43] text-white flex items-center justify-between">
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center">
                <img src="/canvas-india-logo.png" alt="Canvas India" className="h-8 w-auto object-contain" />
              </div>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="p-1 text-white hover:text-stone-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-3 border-b border-stone-100">
              <button
                type="button"
                onClick={() => { onOpenQuote(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 bg-[#102A43] text-white font-bold rounded-xl text-xs text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request Bulk / Corporate Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              <div className="text-[11px] uppercase tracking-wider font-bold text-stone-400 mb-2 px-1">
                Explore Categories &amp; Products
              </div>
              {PRIMARY_CATEGORIES.map((cat) => {
                const Icon = getCategoryIcon(cat.iconName);
                const isActive = activeNav === cat.slug;
                const isExpanded = expandedMobileCategory === cat.slug;
                const menuData = MEGA_MENUS_DATA[cat.slug];

                return (
                  <div key={cat.slug} className="rounded-xl overflow-hidden border border-stone-200/60 bg-stone-50/50 my-1">
                    <button
                      type="button"
                      onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.slug)}
                      className={`w-full text-left py-2 px-3 text-xs font-semibold rounded-xl flex items-center justify-between transition-colors ${
                        isActive || isExpanded
                          ? 'text-[#102A43] font-bold bg-stone-200/60' 
                          : 'text-[#102A43] hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-[#102A43]" strokeWidth={1.8} />
                        <span>{cat.name}</span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#102A43]' : ''}`} />
                    </button>

                    {isExpanded && menuData && (
                      <div className="p-3 bg-white space-y-3 border-t border-stone-100 text-xs">
                        {menuData.groups.map((group, gIdx) => (
                          <div key={group.title} className={gIdx > 0 ? 'pt-2 border-t border-stone-100' : ''}>
                            <div className="font-bold text-[11px] text-[#102A43] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                              {renderGroupIcon(group.iconType)}
                              <span>{group.title}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-1 pl-1">
                              {group.items.map((item) => (
                                <button
                                  key={item.name}
                                  type="button"
                                  onClick={() => handleItemClick(item.slug, item.actionType)}
                                  className="text-left py-1 text-xs text-stone-600 hover:text-[#102A43] font-medium flex items-center justify-between"
                                >
                                  <span>{item.name}</span>
                                  <ArrowRight className="w-3 h-3 text-stone-300" />
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div className="pt-2 border-t border-stone-100">
                          <button
                            type="button"
                            onClick={() => handleItemClick(menuData.promo.slug, menuData.promo.actionType)}
                            className="w-full py-2 bg-[#102A43] hover:bg-[#0B1E36] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                          >
                            <span>{menuData.promo.buttonText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 space-y-1">
              <div className="font-semibold text-stone-900">Need Help?</div>
              <div>WhatsApp: +91 90765 43510</div>
              <div className="text-[11px] text-stone-500">Pan-India delivery with live tracking</div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

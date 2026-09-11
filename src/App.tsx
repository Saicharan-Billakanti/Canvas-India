import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';

// Modals and Drawers
import { CartDrawer } from './components/CartDrawer';
import { CustomizeModal } from './components/CustomizeModal';
import { QuoteModal } from './components/QuoteModal';
import { AccentColorPicker } from './components/AccentColorPicker';

// Data and Types
import { TRENDING_PRODUCTS } from './data/storeData';
import { Product, CartItem } from './types';

// Mobile Bottom Nav Icons
import { Home, Layers, Sparkles, Heart, ShoppingBag } from 'lucide-react';

export function App() {
  // State management
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [customizeModalOpen, setCustomizeModalOpen] = useState(false);
  const [selectedProductForCustomize, setSelectedProductForCustomize] = useState<Product | null>(null);

  const [wishlistIds, setWishlistIds] = useState<string[]>([
    'trending-1', // Custom Canvas Print
    'trending-2', // Glossy Acrylic Photo
  ]);

  // Initial cart with a popular custom canvas print
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: TRENDING_PRODUCTS[0],
      quantity: 1,
      size: '12x18 inch',
      finish: 'Matte Gallery Wrap',
    },
  ]);

  // Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          size: product.sizes?.[0] || '12x18 inch',
          finish: product.finishes?.[0] || 'Standard Finish',
        },
      ];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, newQty: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleOpenCustomize = (product?: Product) => {
    setSelectedProductForCustomize(product || TRENDING_PRODUCTS[0]);
    setCustomizeModalOpen(true);
  };

  const handleAddToCartCustomized = (item: {
    product: Product;
    quantity: number;
    size: string;
    finish: string;
    customText: string;
    photoUrl: string;
    calculatedPrice: number;
  }) => {
    setCartItems((prev) => [
      ...prev,
      {
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        finish: item.finish,
        customText: item.customText,
        photoUrl: item.photoUrl,
      },
    ]);
    setCartDrawerOpen(true);
  };

  const handleAddToCartFromWorkbench = (customItem: {
    name: string;
    material: string;
    size: string;
    finish: string;
    text: string;
    price: number;
    image: string;
  }) => {
    const virtualProduct: Product = {
      id: `custom-${Date.now()}`,
      name: customItem.name,
      category: customItem.material.toUpperCase(),
      categorySlug: customItem.material,
      price: customItem.price,
      originalPrice: Math.round(customItem.price * 1.3),
      discountPercent: 25,
      rating: 5.0,
      reviewsCount: 1,
      image: customItem.image,
      sizes: [customItem.size],
      finishes: [customItem.finish],
      badge: 'Custom',
      description: 'Custom personalized print with customized dimensions, finish and text.',
    };

    setCartItems((prev) => [
      ...prev,
      {
        product: virtualProduct,
        quantity: 1,
        size: customItem.size,
        finish: customItem.finish,
        customText: customItem.text,
        photoUrl: customItem.image,
      },
    ]);
    setCartDrawerOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (slug: string) => {
    if (slug === 'corporate' || slug === 'corporate-printing' || slug === 'bulk-order' || slug === 'corporate-orders' || slug === 'bulk-orders') {
      scrollToSection('corporate-section');
    } else if (slug === 'deals' || slug === 'sale') {
      scrollToSection('deals-section');
    } else if (slug === 'custom-prints') {
      scrollToSection('create-something-new');
    } else if (slug === 'gifts' || slug === 'occasions' || slug === 'festivals') {
      scrollToSection('shop-occasions');
    } else {
      scrollToSection('shop-categories');
    }
  };

  const sharedHomepageProps = {
    onSelectCategory: handleSelectCategory,
    onAddToCart: handleAddToCart,
    onCustomize: handleOpenCustomize,
    onOpenQuote: () => setQuoteModalOpen(true),
    wishlistIds,
    onToggleWishlist: handleToggleWishlist,
    onAddToCartCustom: handleAddToCartFromWorkbench,
    allProducts: TRENDING_PRODUCTS,
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-900 flex flex-col font-manrope selection:bg-[var(--accent-bg)] selection:text-[var(--accent)] pb-14 sm:pb-0">
      
      {/* Royal Blue Header + White Category Nav */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenWishlist={() => setCartDrawerOpen(true)}
        onOpenQuote={() => setQuoteModalOpen(true)}
        onSelectCategory={handleSelectCategory}
        onSearch={(_query) => scrollToSection('shop-categories')}
        allProducts={TRENDING_PRODUCTS}
        onOpenCustomize={handleOpenCustomize}
      />

      {/* Single Consolidated Canvas India Homepage */}
      <main className="flex-1">
        <Homepage {...sharedHomepageProps} />
      </main>

      {/* Indian E-Commerce Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav aria-label="Mobile Navigation" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-lg px-2 py-1.5 flex items-center justify-around">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center gap-0.5 text-stone-600 hover:text-[#0E4A93] text-[10px] font-semibold py-1 px-2 cursor-pointer"
        >
          <Home className="w-5 h-5 text-stone-700" />
          <span>Home</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('shop-categories')}
          className="flex flex-col items-center gap-0.5 text-stone-600 hover:text-[#0E4A93] text-[10px] font-semibold py-1 px-2 cursor-pointer"
        >
          <Layers className="w-5 h-5 text-stone-700" />
          <span>Categories</span>
        </button>

        {/* Center Customizer Highlight Button */}
        <button
          type="button"
          onClick={() => handleOpenCustomize()}
          className="flex flex-col items-center -mt-4 text-[10px] font-bold text-stone-900 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-[#E8752A] text-white flex items-center justify-center shadow-md shadow-[#E8752A]/30 border-2 border-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="mt-0.5 text-[10px] font-extrabold text-[#E8752A]">Customize</span>
        </button>

        <button
          type="button"
          onClick={() => setCartDrawerOpen(true)}
          className="flex flex-col items-center gap-0.5 text-stone-600 hover:text-[#0E4A93] text-[10px] font-semibold py-1 px-2 relative cursor-pointer"
        >
          <Heart className="w-5 h-5 text-stone-700" />
          <span>Wishlist</span>
          {wishlistIds.length > 0 && (
            <span className="absolute top-0.5 right-2 bg-[#E8752A] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {wishlistIds.length}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setCartDrawerOpen(true)}
          className="flex flex-col items-center gap-0.5 text-stone-600 hover:text-[#0E4A93] text-[10px] font-semibold py-1 px-2 relative cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5 text-stone-700" />
          <span>Cart</span>
          {totalCartCount > 0 && (
            <span className="absolute top-0.5 right-2 bg-[#E8752A] text-white text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          )}
        </button>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          alert('Thank you for shopping with Canvas India! Checkout gateway initiated.');
          setCartDrawerOpen(false);
        }}
      />

      {/* Customize Product Modal */}
      <CustomizeModal
        isOpen={customizeModalOpen}
        onClose={() => setCustomizeModalOpen(false)}
        product={selectedProductForCustomize}
        onAddToCartCustomized={handleAddToCartCustomized}
      />

      {/* Corporate & Bulk Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      {/* Live Accent Color Picker (client demo tool) */}
      <AccentColorPicker />
    </div>
  );
}

export default App;

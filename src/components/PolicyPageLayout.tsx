import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CanvasIndiaLogo } from './CanvasIndiaLogo';
import { Footer } from './Footer';

interface PolicyPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Shared chrome for standalone legal/info pages (Privacy Policy, Terms, Shipping,
 * Cancellation, Refund, About Us). Uses a lightweight static header instead of the
 * full homepage Header, since these pages don't need cart/search/mega-menu state.
 */
export const PolicyPageLayout: React.FC<PolicyPageLayoutProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | Canvas India`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-900 flex flex-col font-manrope">
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <Link to="/" aria-label="Canvas India home">
            <CanvasIndiaLogo className="h-9 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8 text-wrap-balance">{title}</h1>
        <div className="policy-content space-y-6 text-[15px] leading-relaxed text-stone-700">
          {children}
        </div>
      </main>

      <Footer
        onSelectCategory={() => {
          window.location.href = '/';
        }}
        onOpenQuote={() => {
          window.location.href = '/';
        }}
      />
    </div>
  );
};

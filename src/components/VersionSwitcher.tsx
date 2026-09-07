import React, { useState } from 'react';
import { Sparkles, Layers, Info, Check, ArrowRight, X, Store, Printer, Home } from 'lucide-react';

export type VersionType = 'marketplace' | 'print-store' | 'modern-indian';

interface VersionSwitcherProps {
  currentVersion: VersionType;
  onSelectVersion: (version: VersionType) => void;
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({
  currentVersion,
  onSelectVersion,
}) => {
  const [showRationaleModal, setShowRationaleModal] = useState(false);

  const versions = [
    {
      id: 'marketplace' as VersionType,
      number: '01',
      title: 'Marketplace',
      badge: 'High Conversion (Flipkart Style)',
      icon: Store,
      tagline: 'Great Indian Print Festival • High Density Flash Deals & Offers',
      palette: 'White • Light Grey (#F8F9FA) • Navy (#0F243E) • Saffron (#E85D04)',
      typography: 'Manrope Sans • High-impact pricing & discount badges',
      archetype: 'Commercial retail powerhouse designed for maximum sales conversion and speed.',
    },
    {
      id: 'print-store' as VersionType,
      number: '02',
      title: 'Clean & Box-Free',
      badge: 'Editorial E-Commerce',
      icon: Printer,
      tagline: 'Clean, Box-Free & Spacious • 5-6 Compact Products Per Row',
      palette: 'White • Warm Cream (#FAF8F5) • Charcoal • Terracotta Accent',
      typography: 'Clean Sans • Unboxed product items with floating imagery',
      archetype: 'Clean, box-free Indian e-commerce layout without heavy card borders or rectangular containers.',
    },
    {
      id: 'modern-indian' as VersionType,
      number: '03',
      title: 'Modern Indian',
      badge: 'Curated Gifting (DailyObjects / Chumbak)',
      icon: Home,
      tagline: 'Contemporary Living Spaces • Curated Gifting & Festive Collections',
      palette: 'Warm Ivory (#FFFDF9) • Terracotta • Saffron Ochre • Warm Stone',
      typography: 'Warm Contemporary Typography • Editorial accents for Indian homes',
      archetype: 'Warm, aesthetically pleasing contemporary lifestyle store celebrating Indian festivals and home memories.',
    },
  ];

  const handleVersionClick = (id: VersionType) => {
    onSelectVersion(id);
    try {
      localStorage.setItem('ci_homepage_version', id);
    } catch {
      // ignore localStorage errors in sandboxed environments
    }
  };

  return (
    <>
      {/* Floating Switcher Bar */}
      <aside aria-label="Design Edition Switcher" className="fixed bottom-16 sm:bottom-4 right-3 sm:right-4 z-40 max-w-4xl w-auto">
        <div className="bg-stone-900/95 backdrop-blur-xl border border-stone-700/80 rounded-2xl p-1.5 shadow-2xl shadow-black/40 flex items-center gap-1 sm:gap-2">
          
          {/* Brand badge */}
          <div className="hidden lg:flex items-center gap-2 pl-3 pr-2 border-r border-stone-800 text-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">3 Homepage Editions</span>
          </div>

          {/* 3 Version Switch Tabs */}
          <div className="flex items-center gap-1 flex-1 sm:flex-initial overflow-x-auto no-scrollbar">
            {versions.map((v) => {
              const isActive = currentVersion === v.id;
              const Icon = v.icon;
              return (
                <button
                  key={v.id}
                  onClick={() => handleVersionClick(v.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[var(--accent)] to-amber-600 text-white shadow-md shadow-[var(--accent)]/25 ring-1 ring-white/20'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{v.title}</span>
                </button>
              );
            })}
          </div>

          {/* Info / Rationale button */}
          <button
            onClick={() => setShowRationaleModal(true)}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-xl transition-colors ml-1"
            title="Homepage Concept Details"
            aria-label="View Design Rationale"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Rationale Modal */}
      {showRationaleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setShowRationaleModal(false)}
          />

          <div className="relative bg-stone-900 border border-stone-700 text-stone-100 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 space-y-6 my-auto">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center font-bold text-xs">
                  CI
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Canvas India Homepage Variants</h3>
                  <p className="text-xs text-stone-400">Switch freely — cart, customizer, wishlist &amp; data stay 100% synchronized</p>
                </div>
              </div>
              <button
                onClick={() => setShowRationaleModal(false)}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5">
              {versions.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.id}
                    onClick={() => {
                      handleVersionClick(v.id);
                      setShowRationaleModal(false);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      currentVersion === v.id
                        ? 'bg-[var(--accent)]/20 border-[var(--accent)] ring-1 ring-[var(--accent)]/40'
                        : 'bg-stone-800/50 border-stone-700/60 hover:bg-stone-800 hover:border-stone-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[var(--accent)]">{v.number}</span>
                        <div className="flex items-center gap-1.5">
                          <Icon className="w-4 h-4 text-white" />
                          <h4 className="font-bold text-white text-sm">{v.title} Edition</h4>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-700 text-stone-300">
                          {v.badge}
                        </span>
                      </div>
                      {currentVersion === v.id && (
                        <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-300 mb-2">{v.tagline}</p>
                    <div className="text-[11px] text-stone-400">
                      <strong className="text-stone-300">Strategy:</strong> {v.archetype}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 text-xs text-stone-300 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Your chosen edition is remembered in <strong>localStorage</strong>. All variants share the exact same cart, wishlist, products, and customizer engine.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

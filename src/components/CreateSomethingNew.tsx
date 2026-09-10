import React from 'react';
import { Sparkles, ArrowRight, Palette, Layers, CircleDot, Sliders } from 'lucide-react';

interface CreateSomethingNewProps {
  onStartCreating: () => void;
  onSelectCategory: (slug: string) => void;
  variant?: 'marketplace' | 'print-store' | 'modern';
}

export const CreateSomethingNew: React.FC<CreateSomethingNewProps> = ({
  onStartCreating,
  onSelectCategory,
  variant = 'marketplace',
}) => {
  const isVersion2 = variant === 'print-store';
  const isVersion3 = variant === 'modern';

  return (
    <section 
      id="customizer-section" 
      className={`py-12 sm:py-16 border-b transition-colors ${
        isVersion2 
          ? 'bg-white border-[#E8E1D9]' 
          : isVersion3 
            ? 'bg-[#FAF6F0] border-[#EFE9DF]' 
            : 'bg-[#FAF8F5] border-stone-200/70'
      }`}
    >
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Narrative, Headline, Features, CTAs */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${
              isVersion2 
                ? 'text-[#C94F32]' 
                : isVersion3 
                  ? 'text-amber-800' 
                  : 'text-[#102A43]'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Printing &amp; Custom Art</span>
            </div>

            {/* Heading: "Create Something New" */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] ${
              isVersion2 
                ? 'font-serif italic text-[#171717]' 
                : 'text-stone-900'
            }`}
            style={isVersion2 ? { fontFamily: 'Georgia, "Times New Roman", serif' } : undefined}
            >
              Create Something New
            </h2>

            {/* Supporting text */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
              Turn your favorite memories and ideas into personalized products. 
              Museum-grade cotton canvas, optical crystal acrylic, and natural cork wall art handcrafted in India.
            </p>

            {/* Flat format highlights (No rectangular cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <button
                type="button"
                onClick={() => onSelectCategory('canvas-prints')}
                className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                  isVersion2 ? 'bg-[#C94F32]/10 text-[#C94F32]' : 'bg-stone-200 text-stone-800'
                }`}>
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 group-hover:text-amber-700 transition-colors">Canvas Prints</div>
                  <div className="text-[11px] text-stone-500">From ₹499</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onSelectCategory('acrylic-prints')}
                className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                  isVersion2 ? 'bg-[#C94F32]/10 text-[#C94F32]' : 'bg-stone-200 text-stone-800'
                }`}>
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 group-hover:text-amber-700 transition-colors">Acrylic Glass</div>
                  <div className="text-[11px] text-stone-500">From ₹399</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onSelectCategory('cork-prints')}
                className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                  isVersion2 ? 'bg-[#C94F32]/10 text-[#C94F32]' : 'bg-stone-200 text-stone-800'
                }`}>
                  <CircleDot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 group-hover:text-amber-700 transition-colors">Cork Boards</div>
                  <div className="text-[11px] text-stone-500">From ₹449</div>
                </div>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onStartCreating}
                className={`px-7 py-3.5 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer ${
                  isVersion2
                    ? 'bg-[#C94F32] hover:bg-[#B34329]'
                    : isVersion3
                      ? 'bg-amber-800 hover:bg-amber-900'
                      : 'bg-[#102A43] hover:bg-[#0B1E36]'
                }`}
              >
                <span>Start Creating</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelectCategory('canvas-prints')}
                className="text-xs sm:text-sm font-semibold text-stone-800 hover:text-stone-950 transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Explore All Formats →</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Natural visual composition (No Card Grid, flowing imagery) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-xl mx-auto">
              
              {/* Primary Canvas Art Piece */}
              <div 
                onClick={onStartCreating}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl cursor-pointer group bg-stone-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80"
                  alt="Custom Canvas Wall Art"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5">
                    <span>Customize this format</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  Museum Canvas
                </div>
              </div>

              {/* Offset Visual 1: Glossy Acrylic Glass (Overlapping top-right) */}
              <div 
                onClick={() => onSelectCategory('acrylic-prints')}
                className="hidden sm:block absolute -top-5 -right-5 w-44 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group bg-stone-100 transition-transform hover:scale-105"
              >
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80"
                  alt="Glossy Acrylic Photo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-stone-900/80 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                  Acrylic Glass
                </div>
              </div>

              {/* Offset Visual 2: Natural Cork Print (Overlapping bottom-left) */}
              <div 
                onClick={() => onSelectCategory('cork-prints')}
                className="hidden sm:block absolute -bottom-5 -left-5 w-40 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group bg-stone-100 transition-transform hover:scale-105"
              >
                <img
                  src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=80"
                  alt="Natural Cork Pinboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-stone-900/80 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                  Eco Cork
                </div>
              </div>

              {/* Clean Floating Trust Badge */}
              <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-xs text-stone-900 px-3.5 py-1.5 rounded-full shadow-md border border-stone-200/80 text-[11px] font-bold flex items-center gap-1.5">
                <span className="text-amber-500">★ 4.8</span>
                <span className="text-stone-400">•</span>
                <span className="text-stone-600">1,50,000+ Happy Customers</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

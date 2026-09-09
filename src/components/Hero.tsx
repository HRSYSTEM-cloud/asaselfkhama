import React from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  ShieldCheck, 
  Car, 
  Truck, 
  Clock, 
  MapPin, 
  Award,
  ChevronDown
} from 'lucide-react';
import { emblemImage, heroImage } from '../data/rugsData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenVisualizer: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreClick, 
  onOpenVisualizer,
  onOpenBooking 
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#080E1B] pt-8 pb-16">
      {/* Ambient background glow and luxury carpet pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img 
          src={heroImage} 
          alt="خلفية معرض سجاد فاخر" 
          className="w-full h-full object-cover filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E1B] via-[#080E1B]/90 to-[#080E1B]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,transparent_70%)]"></div>
      </div>

      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-6 right-6 w-24 h-24 border-t-2 border-r-2 border-amber-500/20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-6 left-6 w-24 h-24 border-b-2 border-l-2 border-amber-500/20 pointer-events-none hidden md:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Content & Calligraphy Intro */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Royal Branches Ribbon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B283A] border border-[#C58F72]/40 text-[#E4BEAA] text-xs font-semibold shadow-[0_0_20px_rgba(197,143,114,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#C58F72] animate-ping"></span>
              <Award className="w-3.5 h-3.5 text-[#C58F72]" />
              <span>معارض السجاد والموكيت التركي الفاخر • فروع الرياض وجدة</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.25] font-['Alexandria']">
                أصالة النسيج العثماني
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-[#E4BEAA] to-[#C58F72]">
                  وفخامة المجالس والقصور
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                نأتيكم بأنفس قطع السجاد التركي الأصيل والموكيت الفاخر من أنوال هيريكي الحريرية، وقونية الصوفية، وقيصري الإسليمية، وموكيت الفنادق والقصور عالي الكثافة. خدمة متكاملة تشمل الرفع المساحي والتركيب الاحترافي في الرياض وجدة.
              </p>
            </div>

            {/* Guarantees & Features Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="bg-[#121A26] border border-[#26374D] p-3 rounded-xl flex items-center gap-2.5 shadow-sm">
                <div className="p-2 rounded-lg bg-[#C58F72]/15 text-[#C58F72] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">أصالة موثقة 100%</h2>
                  <p className="text-[11px] text-slate-400">حرير بورصة وصوف طبيعي</p>
                </div>
              </div>

              <div className="bg-[#121A26] border border-[#26374D] p-3 rounded-xl flex items-center gap-2.5 shadow-sm">
                <div className="p-2 rounded-lg bg-[#3A5C85]/20 text-[#6BA0DC] shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">تسليم موثق بالتوقيع</h2>
                  <p className="text-[11px] text-slate-400">فحص شخصي وسند رسمي</p>
                </div>
              </div>

              <div className="bg-[#121A26] border border-[#26374D] p-3 rounded-xl flex items-center gap-2.5 shadow-sm">
                <div className="p-2 rounded-lg bg-[#C58F72]/15 text-[#D9A083] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">سجاد & موكيت فاخر</h2>
                  <p className="text-[11px] text-slate-400">تفصيل للمجالس والمساحات</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#C58F72] via-[#B87B5B] to-[#9E6347] active:brightness-95 text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl shadow-[0_8px_25px_rgba(197,143,114,0.35)] transition-all min-h-[48px]"
              >
                <span>استكشف التشكيلات والموكيت</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                id="hero-visualizer-btn"
                onClick={onOpenVisualizer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#141E2C] active:bg-[#1A2739] text-[#E4BEAA] text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl border border-[#344863] transition-all shadow-[0_4px_15px_rgba(0,0,0,0.5)] group min-h-[48px]"
              >
                <Sparkles className="w-5 h-5 text-[#C58F72] group-hover:rotate-12 transition-transform" />
                <span>استوديو محاكاة المجالس 3D</span>
              </button>
            </div>

            {/* Live Location & Hours Snippet */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C58F72]" />
                <span>الرياض: شارع أسد السنة • جدة: حي البغدادية الغربية</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5 text-[#E4BEAA]">
                <Clock className="w-4 h-4 text-[#C58F72]" />
                <span>نستقبلكم يومياً بالفروع حتى ١٠:٠٠ م</span>
              </div>
            </div>

          </div>

          {/* Left Column: 3D Metallic Plaque Mockup Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Outer Golden Glow & Rim */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-amber-500/30 via-amber-700/20 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* The 3D Emblem Plaque */}
              <div className="relative bg-[#111823] rounded-2xl p-4 sm:p-5 border border-[#C58F72]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Decorative header of the plaque */}
                <div className="flex items-center justify-between pb-3 border-b border-[#243346] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C58F72] shadow-[0_0_8px_#c58f72]"></span>
                    <span className="font-['Alexandria'] text-[#E4BEAA] font-semibold tracking-wider">
                      الهوية الرسمية المعتمدة
                    </span>
                  </div>
                  <span className="text-[10px] text-[#C58F72] font-mono tracking-widest uppercase">
                    RIYADH & JEDDAH
                  </span>
                </div>

                {/* The 3D Metallic Emblem Image */}
                <div className="relative mt-3 rounded-xl overflow-hidden aspect-square bg-[#0C121D] border border-[#243346] flex items-center justify-center">
                  <img 
                    src={emblemImage} 
                    alt="شعار شركة أساس الفخامة للسجاد والموكيت الرسمي" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlays for cinematic depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Interactive Badge on top of image */}
                  <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-[#0B1017]/90 backdrop-blur-md border border-[#C58F72]/30 text-right">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        معتمد بالرياض وجدة
                      </span>
                      <span className="text-xs font-bold text-[#E4BEAA] font-['Alexandria']">
                        شركة أساس الفخامة للسجاد والموكيت
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">
                      سجاد تركي فاخر • موكيت مجالس وقصور • توريد وتركيب معتمد
                    </p>
                  </div>
                </div>

                {/* Bottom interactive actions inside the card */}
                <div className="mt-4 pt-3 border-t border-[#243346] flex items-center justify-between gap-3 text-xs">
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#C58F72]/15 hover:bg-[#C58F72]/25 border border-[#C58F72]/40 text-[#E4BEAA] font-semibold text-center transition-colors"
                  >
                    حجز موعد لزيارة المعرض
                  </button>
                  <a
                    href="#location-schedule"
                    className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-center transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#C58F72]" />
                    <span>فروعنا</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={onExploreClick}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-amber-400 transition-colors animate-bounce text-xs"
          >
            <span>استكشف السجاد</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useRef } from 'react';
import { 
  X, 
  Search, 
  ShieldCheck, 
  ZoomIn, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Award,
  MessageSquare
} from 'lucide-react';
import { RugItem } from '../types';

interface RugInspectorModalProps {
  rug: RugItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const RugInspectorModal: React.FC<RugInspectorModalProps> = ({ 
  rug, 
  onClose,
  onOpenBooking 
}) => {
  if (!rug) return null;

  const [inspectMode, setInspectMode] = useState<'front' | 'back' | 'density'>('front');
  const [zoomLevel, setZoomLevel] = useState<number>(2.5);
  const [lensPos, setLensPos] = useState<{ x: number; y: number; show: boolean }>({ x: 50, y: 50, show: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)), show: true });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)), show: true });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center py-6 px-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0D1420] border border-[#C58F72]/35 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden text-right text-white my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#223145] bg-[#090F18]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#C58F72]/15 text-[#C58F72] border border-[#C58F72]/25">
              <ZoomIn className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-['Alexandria'] text-white">
                عدسة الفحص المجهري وتفاصيل النسيج
              </h3>
              <p className="text-xs text-[#E4BEAA]">
                {rug.arabicName} • توثيق أصالة العقدة وجودة الخامة
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-[#152131] hover:bg-[#1E2E44] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center: Interactive Microscope View (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Inspector Lens Instructions */}
            <div className="flex items-center justify-between text-xs text-slate-300 px-1">
              <div className="flex items-center gap-1 text-[#C58F72]">
                <Search className="w-3.5 h-3.5" />
                <span>حرك المؤشر أو إصبعك فوق السجادة للمعاينة المكبرة</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                تكبير {zoomLevel}x
              </span>
            </div>

            {/* Interactive Image Frame */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setLensPos(p => ({ ...p, show: true }))}
              onMouseLeave={() => setLensPos(p => ({ ...p, show: false }))}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setLensPos(p => ({ ...p, show: true }))}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-750 cursor-crosshair select-none shadow-2xl"
            >
              {/* Primary Image View */}
              <img 
                src={rug.image} 
                alt={rug.arabicName}
                className={`w-full h-full object-cover transition-all ${
                  inspectMode === 'back' ? 'brightness-75 contrast-125 sepia-[0.3]' : ''
                }`}
              />

              {/* Knot Density Grid Overlay (if in density mode) */}
              {inspectMode === 'density' && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3725_1px,transparent_1px),linear-gradient(to_bottom,#d4af3725_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none flex items-center justify-center">
                  <div className="bg-black/80 px-4 py-2 rounded-xl border border-amber-400 text-center backdrop-blur-md">
                    <span className="text-amber-300 font-bold text-sm block font-mono">
                      {rug.knotDensity}
                    </span>
                    <span className="text-[10px] text-slate-300">
                      عقدة متراصة ومحكمة يدعمان النعومة واللمعان
                    </span>
                  </div>
                </div>
              )}

              {/* Magnifier Loupe Lens */}
              {lensPos.show && (
                <div 
                  className="absolute w-44 h-44 rounded-full border-2 border-amber-400 shadow-[0_0_25px_rgba(212,175,55,0.6)] pointer-events-none overflow-hidden bg-black/90 hidden sm:block"
                  style={{
                    left: `calc(${lensPos.x}% - 88px)`,
                    top: `calc(${lensPos.y}% - 88px)`,
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${rug.image})`,
                      backgroundPosition: `${lensPos.x}% ${lensPos.y}%`,
                      backgroundSize: `${zoomLevel * 100}%`,
                      backgroundRepeat: 'no-repeat',
                      filter: inspectMode === 'back' ? 'brightness(0.8) contrast(1.4) sepia(0.4)' : 'contrast(1.1) brightness(1.05)'
                    }}
                  />
                  {/* Loupe crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-4 h-4 border border-amber-400/50 rounded-full"></div>
                  </div>
                </div>
              )}

              {/* Badge on corner */}
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-amber-500/40 text-[11px] px-2.5 py-1 rounded-lg text-amber-200">
                {inspectMode === 'front' && 'معاينة الوجه والوبر'}
                {inspectMode === 'back' && 'معاينة قاع النسيج (العقدة التركية)'}
                {inspectMode === 'density' && 'شبكة قياس الكثافة'}
              </div>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => setInspectMode('front')}
                className={`py-2 px-3 rounded-lg border font-medium transition-all ${
                  inspectMode === 'front'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                الوجه والوبر الحريري
              </button>
              <button
                onClick={() => setInspectMode('back')}
                className={`py-2 px-3 rounded-lg border font-medium transition-all ${
                  inspectMode === 'back'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                اختبار ظهر السجادة
              </button>
              <button
                onClick={() => setInspectMode('density')}
                className={`py-2 px-3 rounded-lg border font-medium transition-all ${
                  inspectMode === 'density'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                فحص كثافة العقد
              </button>
            </div>

          </div>

          {/* Right: Technical Specs & Craft Analysis (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Origin & Verification Box */}
            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>شهادة الفحص والتأصيل</span>
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                  أصلي مضمون 100%
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {rug.description}
              </p>
            </div>

            {/* Technical Verification Highlights */}
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>سر العقدة التركية المزدوجة (Gördes Düğümü):</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pr-6">
                  يتم لف الخيط مرتين حول خيطي السدى، مما يجعل السجادة محصنة ضد التنسل أو تفكك العقد حتى بعد نصف قرن من الاستخدام اليومي في المجالس.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>خامة النسيج والصبغات:</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pr-6">
                  {rug.materialArabic}. ألوان مستخرجة من الطبيعة (عروق الفوة، النيلة، الجوز) لا تبهت ولا تفرز روائح كيميائية مع حرارة الرياض.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>سماكة القطعة وملمسها:</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pr-6">
                  {rug.thickness} • {rug.idealFor}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2.5">
              <a
                href={`https://wa.me/966500000000?text=${encodeURIComponent(`السلام عليكم، اطلعت على فحص سجادة: ${rug.arabicName} بكثافة ${rug.knotDensity}، وأرغب بحجزها للمعاينة المباشرة.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>طلب حجز هذه القطعة عبر واتساب</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                حجز موعد لمعاينتها شخصياً في المعرض
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

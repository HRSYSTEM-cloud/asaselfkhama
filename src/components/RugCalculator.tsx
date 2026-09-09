import React, { useState } from 'react';
import { 
  Calculator, 
  Ruler, 
  Sparkles, 
  Check, 
  ArrowLeft, 
  Info, 
  MapPin, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface RugCalculatorProps {
  onOpenBooking: () => void;
}

export const RugCalculator: React.FC<RugCalculatorProps> = ({ onOpenBooking }) => {
  const [roomType, setRoomType] = useState<'majlis' | 'salon' | 'dining' | 'corridor' | 'hotel'>('majlis');
  const [length, setLength] = useState<number>(7); // in meters
  const [width, setWidth] = useState<number>(5);   // in meters
  const [preference, setPreference] = useState<'silk' | 'wool' | 'moquette'>('moquette');

  // Calculation logic based on interior architecture rules
  const roomArea = (length * width).toFixed(1);

  // Golden margin rule for Saudi majlis: leave 40-50cm from each side to show marble/flooring
  const recommendedLength = Math.max(2, (length - 0.9)).toFixed(1);
  const recommendedWidth = Math.max(1.5, (width - 0.9)).toFixed(1);
  const rugArea = (parseFloat(recommendedLength) * parseFloat(recommendedWidth)).toFixed(1);

  const getRecommendationText = () => {
    switch (roomType) {
      case 'majlis':
        return 'للمجلس السعودي: يُنصح بترك مسافة 40 إلى 50 سم بين حافة السجادة وحواف الكنب لإظهار جمال الرخام وتثبيت أرجل الكنب الأمامية فقط فوق حاشية السجادة.';
      case 'salon':
        return 'صالات المعيشة المفتوحة: السجادة تجمع منطقة الجلوس كوحدة متكاملة. نسيج الصوف المقاوم أو الحرير المخملي يمنح دفئاً وفخامة استثنائية.';
      case 'dining':
        return 'لغرف الطعام: يجب أن تمتد السجادة 60 سم على الأقل خارج حدود الطاولة من كل جهة لتستقر كراسي الطعام براحة تامة أثناء سحبها للجلوس.';
      case 'corridor':
        return 'للمداخل والممرات: سجاد قونية الصوفي أو رنر هيريكي الطويل يحمي ممرات القصر ويعطي هيبة فورية عند دخول الضيوف.';
      case 'hotel':
        return 'للقاعات والمساحات الكبرى: موكيت القصور والفنادق عالي الكثافة (Custom Tufted) يغطي كامل المساحة بعزل صوتي وحراري ممتاز.';
    }
  };

  const generateWhatsAppEstimate = () => {
    const text = `السلام عليكم شركة أساس الفخامة للسجاد والموكيت،
قمت بحساب أبعاد مساحتي في موقعكم:
- نوع المساحة: ${roomType === 'majlis' ? 'مجلس رجال' : roomType === 'salon' ? 'صالة معيشة' : roomType === 'dining' ? 'غرفة طعام' : roomType === 'hotel' ? 'قاعة / صالة كبرى' : 'ممر ومدخل'}
- أبعاد الغرفة: ${length} م × ${width} م (المساحة: ${roomArea} م²)
- المقاس المقترح للسجاد: ${recommendedLength} م × ${recommendedWidth} م
- نوع النسيج: ${preference === 'silk' ? 'حرير هيريكي طبيعي' : preference === 'wool' ? 'صوف قونية جبلي' : 'موكيت قصور فاخر عالي الكثافة'}
أود التنسيق مع فريقكم لزيارة الفرع أو الرفع المساحي.`;
    return `https://wa.me/966500000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rug-calculator" className="py-20 bg-[#090E17] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182435] border border-[#C58F72]/30 text-[#E4BEAA] text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-[#C58F72]" />
            <span>حاسبة المقاسات والتوزيع المعتمد</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Alexandria'] text-white">
            حاسبة مقاس السجاد والموكيت للمجالس والمساحات
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            حدد أبعاد غرفتك لاكتشاف التوزيع الهندسي الأمثل للسجاد أو الموكيت وفق المعايير المعمارية لمجالس وقصور الرياض وجدة.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#111824] p-6 sm:p-8 rounded-2xl border border-[#233346] space-y-6 text-right shadow-xl">
            
            {/* Step 1: Room Type */}
            <div>
              <label className="text-sm font-bold text-white block mb-2 font-['Alexandria']">
                1. اختر نوع الغرفة أو المساحة:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'majlis', label: 'مجلس رجال ملكي' },
                  { id: 'salon', label: 'صالة معيشة فاخرة' },
                  { id: 'dining', label: 'غرفة طعام كبرى' },
                  { id: 'corridor', label: 'مدخل وممر' },
                  { id: 'hotel', label: 'قاعة / صالة كبرى' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRoomType(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      roomType === item.id
                        ? 'bg-gradient-to-r from-[#C58F72] to-[#B87B5B] text-white font-bold border-[#C58F72] shadow-md'
                        : 'bg-[#0B1017] border-[#223143] text-slate-300 hover:bg-[#162130]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions */}
            <div className="space-y-4 pt-2 border-t border-[#233346]">
              <span className="text-sm font-bold text-white block font-['Alexandria']">
                2. حدد أبعاد الغرفة (بالمتر):
              </span>

              {/* Length Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#E4BEAA] font-bold font-mono text-sm">{length} أمتار</span>
                  <span className="text-slate-300">طول الغرفة:</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="16"
                  step="0.5"
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#0B1017] rounded-lg appearance-none cursor-pointer accent-[#C58F72]"
                />
              </div>

              {/* Width Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#E4BEAA] font-bold font-mono text-sm">{width} أمتار</span>
                  <span className="text-slate-300">عرض الغرفة:</span>
                </div>
                <input
                  type="range"
                  min="2.5"
                  max="12"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#0B1017] rounded-lg appearance-none cursor-pointer accent-[#C58F72]"
                />
              </div>

              <div className="flex justify-between items-center text-xs bg-[#0B1017] p-3 rounded-xl border border-[#233346] text-slate-400">
                <span>المساحة الإجمالية للمكان:</span>
                <span className="text-white font-bold font-mono text-sm">{roomArea} م²</span>
              </div>
            </div>

            {/* Step 3: Preferred Material */}
            <div className="pt-2 border-t border-[#233346]">
              <label className="text-sm font-bold text-white block mb-2 font-['Alexandria']">
                3. نوع التغطية المفضلة:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'moquette', label: 'موكيت قصور متصل', badge: 'عالي الكثافة للمساحات الكبيرة' },
                  { id: 'silk', label: 'سجاد حرير طبيعي', badge: 'هيريكي أو قيصري فخم' },
                  { id: 'wool', label: 'صوف قونية الأناضولي', badge: 'تحمل عالي ومظهر كلاسيكي' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPreference(item.id as any)}
                    className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      preference === item.id
                        ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA]'
                        : 'bg-[#0B1017] border-[#223143] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-bold text-xs text-white">{item.label}</span>
                    <span className="text-[10px] text-[#C58F72] mt-1">{item.badge}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#111824] p-6 sm:p-8 rounded-2xl border border-[#C58F72]/30 space-y-6 text-right shadow-2xl">
            
            <div className="border-b border-[#233346] pb-4">
              <span className="text-xs text-[#C58F72] font-semibold uppercase tracking-wider block">
                التوزيع المعماري المعتمد
              </span>
              <h3 className="text-xl font-bold text-white mt-1 font-['Alexandria']">
                مقاس السجادة الأمثل للمساحة
              </h3>
            </div>

            {/* Ideal Dimension Card */}
            <div className="bg-[#0B1017] p-4 rounded-xl border border-[#233346] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">المقاس المقترح (مع هامش الرخام):</span>
                <span className="text-lg font-extrabold text-[#E4BEAA] font-mono">
                  {recommendedLength} م × {recommendedWidth} م
                </span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-[#1C293A] pt-2 text-slate-300">
                <span className="text-slate-400">مساحة السجاد الصافية:</span>
                <span className="font-bold text-slate-200 font-mono">{rugArea} م²</span>
              </div>
            </div>

            {/* Interior Designer Tip */}
            <div className="p-3.5 rounded-xl bg-[#182435] border border-[#2F445F] text-xs text-slate-200 leading-relaxed flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#C58F72] shrink-0 mt-0.5" />
              <p>{getRecommendationText()}</p>
            </div>

            {/* Quality & Specifications */}
            <div className="bg-[#0B1017] p-4 rounded-xl border border-[#233346] space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">الرفع المساحي والتوريد:</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>متاح بالرياض وجدة</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                نوفر المعاينة الهندسية ورفع المقاسات بدقة للمشاريع والفلل والمجالس.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-2">
              <a
                href={generateWhatsAppEstimate()}
                target="_blank"
                rel="noreferrer"
                className="w-full min-h-[46px] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>مشاركة المقاسات مع المعرض عبر واتساب</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full min-h-[46px] py-2.5 px-4 rounded-xl bg-[#C58F72]/15 hover:bg-[#C58F72]/25 active:bg-[#C58F72]/30 border border-[#C58F72]/40 text-[#E4BEAA] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-[#C58F72]" />
                <span>حجز موعد لزيارة المعرض أو طلب رفع المقاسات</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

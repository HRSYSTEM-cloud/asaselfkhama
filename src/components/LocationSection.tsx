import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Truck, 
  Navigation, 
  ExternalLink, 
  Phone, 
  CheckCircle2, 
  Compass, 
  Share2,
  Calendar,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { BRANCHES_DATA, STORE_HOURS_DATA } from '../data/rugsData';

export const LocationSection: React.FC = () => {
  const [activeBranchKey, setActiveBranchKey] = useState<'riyadh' | 'jeddah'>('riyadh');
  const [copiedPlusCode, setCopiedPlusCode] = useState<string | null>(null);
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  const activeBranch = BRANCHES_DATA[activeBranchKey];

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const ksaTime = new Date(utc + (3600000 * 3));
      const hours = ksaTime.getHours();
      setIsStoreOpen(hours >= 8 && hours < 22);
    };
    checkOpen();
  }, []);

  const handleCopyPlusCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedPlusCode(code);
    setTimeout(() => setCopiedPlusCode(null), 3000);
  };

  return (
    <section id="location-schedule" className="py-20 bg-[#070D18] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182538] border border-[#C58F72]/35 text-[#E4BEAA] text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-[#C58F72]" />
            <span>معارض شركة أساس الفخامة للسجاد والموكيت</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Alexandria'] text-white">
            فروعنا في الرياض وجدة وساعات العمل
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            نسعد باستقبالكم في صالات عرضنا بالرياض وجدة للاطلاع المباشر على خامات السجاد والموكيت ونماذج المجالس الفاخرة.
          </p>

          {/* Branch Switcher Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 pt-4 w-full max-w-md mx-auto">
            <button
              onClick={() => setActiveBranchKey('riyadh')}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[46px] ${
                activeBranchKey === 'riyadh'
                  ? 'bg-gradient-to-r from-[#C58F72] to-[#B87B5B] text-white shadow-[0_4px_15px_rgba(197,143,114,0.3)]'
                  : 'bg-[#121A26] text-slate-300 border border-[#233346] hover:bg-[#182333]'
              }`}
            >
              <MapPin className="w-4 h-4 text-amber-200" />
              <span>فرع الرياض (الفيصلية)</span>
            </button>

            <button
              onClick={() => setActiveBranchKey('jeddah')}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[46px] ${
                activeBranchKey === 'jeddah'
                  ? 'bg-gradient-to-r from-[#C58F72] to-[#B87B5B] text-white shadow-[0_4px_15px_rgba(197,143,114,0.3)]'
                  : 'bg-[#121A26] text-slate-300 border border-[#233346] hover:bg-[#182333]'
              }`}
            >
              <MapPin className="w-4 h-4 text-sky-300" />
              <span>فرع جدة (البغدادية الغربية)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Address, Status, Navigation (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-right">
            
            {/* Live Status & Branch Card */}
            <div className="bg-[#101824] rounded-2xl p-6 border border-[#27394E] space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#202E40] pb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${isStoreOpen ? 'bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]' : 'bg-rose-400'}`}></span>
                  <span className="font-bold text-sm text-white font-['Alexandria']">
                    {isStoreOpen ? 'المعرض يستقبلكم الآن' : 'المعرض مغلق حالياً'}
                  </span>
                </div>
                <span className="text-xs text-[#E4BEAA] font-medium">
                  {activeBranch.openHours.split('(')[0]}
                </span>
              </div>

              {/* Exact Location Text */}
              <div className="p-4 rounded-xl bg-[#090F17] border border-[#202E40] space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#C58F72]/15 text-[#C58F72] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">{activeBranch.city}</span>
                      <h4 className="text-sm sm:text-base font-bold text-white font-['Alexandria']">
                        {activeBranch.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeBranch.address}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono bg-[#141F2D] text-[#E4BEAA] px-2.5 py-1 rounded border border-[#27394E]">
                        {activeBranch.plusCode}
                      </span>
                      <button
                        onClick={() => handleCopyPlusCode(activeBranch.plusCode)}
                        className="text-[11px] text-[#C58F72] hover:underline"
                      >
                        {copiedPlusCode === activeBranch.plusCode ? 'تم النسخ!' : 'نسخ رمز بلس'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href={activeBranch.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[46px] flex items-center justify-center gap-2 bg-gradient-to-r from-[#C58F72] to-[#B87B5B] active:brightness-95 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>فتح في خرائط Google</span>
                </a>

                <a
                  href={activeBranch.wazeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[46px] flex items-center justify-center gap-2 bg-[#192434] active:bg-[#202E42] text-slate-200 font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm border border-[#2D3E54] transition-colors"
                >
                  <Compass className="w-4 h-4 text-sky-400" />
                  <span>الملاحة عبر Waze</span>
                </a>
              </div>

              {/* Services Badges (NO curbside pickup) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-[#202E40] text-xs">
                <div className="flex items-center gap-2.5 text-slate-300 bg-[#090F17] p-3 rounded-xl border border-[#202E40]">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold block text-white">خدمة التوصيل والتركيب</span>
                    <span className="text-[10px] text-slate-400">للفلل والقصور والمشاريع</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-300 bg-[#090F17] p-3 rounded-xl border border-[#202E40]">
                  <ShieldCheck className="w-4 h-4 text-[#C58F72] shrink-0" />
                  <div>
                    <span className="font-bold block text-white">رفع مساحي متخصص</span>
                    <span className="text-[10px] text-slate-400">مهندسون لمعاينة المجالس</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Peak Hours Breakdown */}
            <div className="bg-[#101824] rounded-2xl p-6 border border-[#202E40] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-['Alexandria']">
                  <Clock className="w-4 h-4 text-[#C58F72]" />
                  <span>أوقات الزحمة والإقبال اليومي</span>
                </div>
                <span className="text-[11px] text-[#E4BEAA] bg-[#182538] px-2.5 py-0.5 rounded border border-[#2D3E54]">
                  سجل حركة المعرض
                </span>
              </div>
              <p className="text-xs text-slate-400">
                الفترة الصباحية (٩:٠٠ ص إلى ١٢:٠٠ م) هادئة ومثالية لمطابقة ألوان الأقمشة وتفصيل السجاد والموكيت.
              </p>

              {/* Busy Hours Chart */}
              <div className="grid grid-cols-6 gap-2 pt-2 items-end h-28 bg-[#090F17] p-3 rounded-xl border border-[#202E40]">
                {STORE_HOURS_DATA.busyHours.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-end h-full gap-1.5 group">
                    <span className="text-[9px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </span>
                    <div 
                      className={`w-full rounded-t-md transition-all ${
                        item.level > 70 
                          ? 'bg-[#C58F72] shadow-[0_0_8px_#c58f72]' 
                          : item.level > 40 
                          ? 'bg-[#A87358]' 
                          : 'bg-[#223143]'
                      }`}
                      style={{ height: `${item.level}%` }}
                    ></div>
                    <span className="text-[10px] font-bold text-slate-300 font-mono">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Left Column: Visual Map Representation & Schedule (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Custom Interactive Branch Location Plate */}
            <div className="relative rounded-2xl overflow-hidden bg-[#101824] border border-[#C58F72]/30 p-6 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#202E40] pb-3">
                <span className="text-xs text-[#E4BEAA] font-semibold flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#C58F72]" />
                  <span>موقع {activeBranch.name}</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">
                  {activeBranch.coordinates.lat}° N, {activeBranch.coordinates.lng}° E
                </span>
              </div>

              {/* Stylized Vector Map Graphic */}
              <div className="relative aspect-[16/10] w-full rounded-xl bg-[#080E17] border border-[#202E40] overflow-hidden flex items-center justify-center p-4">
                
                {/* Roads and Grid Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#c58f7215_1px,transparent_1px),linear-gradient(to_bottom,#c58f7215_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                
                {/* Stylized Street Arteries */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 400 250">
                  <path d="M 320 0 L 300 250" stroke="#334155" strokeWidth="4" fill="none" />
                  <path d="M 0 100 L 400 90" stroke="#334155" strokeWidth="4" fill="none" />
                  <path d="M 100 30 L 270 220" stroke="#C58F72" strokeWidth="3" strokeDasharray="6 3" fill="none" />
                </svg>

                {/* Pinpoint Target for Active Branch */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#C58F72]/20 animate-ping absolute inset-0"></div>
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#9E6347] to-[#C58F72] border-2 border-white flex items-center justify-center shadow-[0_0_20px_#c58f72]">
                      <MapPin className="w-6 h-6 text-white stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="mt-3 bg-[#0B1017]/95 border border-[#C58F72]/50 px-3 py-1.5 rounded-xl text-center backdrop-blur-md shadow-xl">
                    <span className="text-xs font-bold text-[#E4BEAA] font-['Alexandria'] block">
                      {activeBranch.name}
                    </span>
                    <span className="text-[10px] text-slate-300">
                      {activeBranch.district}
                    </span>
                  </div>
                </div>

                {/* Districts Distances Snippet */}
                <div className="absolute top-3 right-3 bg-[#0B1017]/90 backdrop-blur-sm border border-[#202E40] p-2.5 rounded-lg text-[10px] text-slate-300 space-y-1 text-right">
                  {activeBranchKey === 'riyadh' ? (
                    <>
                      <div>• من حي الملز: <strong>٧ دقائق</strong></div>
                      <div>• من السليمانية: <strong>١٢ دقيقة</strong></div>
                      <div>• من العليا: <strong>١٥ دقيقة</strong></div>
                    </>
                  ) : (
                    <>
                      <div>• من طريق الملك عبدالعزيز: <strong>٥ دقائق</strong></div>
                      <div>• من الكورنيش: <strong>٨ دقائق</strong></div>
                      <div>• من حي الروضة: <strong>١٢ دقيقة</strong></div>
                    </>
                  )}
                </div>

                {/* Direct Google Maps launcher */}
                <div className="absolute bottom-3 left-3">
                  <a
                    href={activeBranch.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-gradient-to-r from-[#C58F72] to-[#B87B5B] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-md hover:brightness-110 transition-all"
                  >
                    <span>فتح في الخريطة</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Weekly Schedule Table */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">توقيت الفروع المعتمد</span>
                  <span className="text-xs font-bold text-white block text-right font-['Alexandria']">
                    جدول أوقات العمل الأسبوعي:
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                  {STORE_HOURS_DATA.schedule.map((sch, idx) => (
                    <div 
                      key={idx}
                      className={`flex justify-between items-center p-2 rounded-lg border ${
                        sch.isToday 
                          ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA] font-bold' 
                          : 'bg-[#090F17] border-[#202E40] text-slate-300'
                      }`}
                    >
                      <span className="text-slate-400 font-mono text-[11px]">{sch.hours}</span>
                      <div className="flex items-center gap-1">
                        <span>{sch.day}</span>
                        {sch.isToday && (
                          <span className="text-[9px] bg-[#C58F72] text-white px-1.5 py-0.5 rounded font-bold">
                            اليوم
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

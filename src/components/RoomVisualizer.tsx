import React, { useState } from 'react';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  RotateCw, 
  Maximize2, 
  Eye, 
  Check, 
  MessageSquare, 
  Info,
  Sliders,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { RUGS_COLLECTION, ROOM_PRESETS } from '../data/rugsData';
import { RugItem, RoomScene } from '../types';

interface RoomVisualizerProps {
  onInspectRug: (rug: RugItem) => void;
  onOpenBooking: () => void;
}

export const RoomVisualizer: React.FC<RoomVisualizerProps> = ({ 
  onInspectRug,
  onOpenBooking 
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<RoomScene>('majlis');
  const [selectedRug, setSelectedRug] = useState<RugItem>(RUGS_COLLECTION[0]);
  const [lightingMode, setLightingMode] = useState<'day' | 'warm' | 'evening'>('warm');
  const [rotation, setRotation] = useState<number>(0);
  const [rugScale, setRugScale] = useState<number>(1);
  const [selectedDimension, setSelectedDimension] = useState<string>(RUGS_COLLECTION[0].dimensions[0]);

  const currentRoom = ROOM_PRESETS.find(r => r.id === selectedRoomId) || ROOM_PRESETS[0];

  // Lighting overlay styling
  const getLightingStyle = () => {
    switch (lightingMode) {
      case 'day':
        return 'from-sky-500/10 via-amber-100/5 to-transparent';
      case 'warm':
        return 'from-amber-500/20 via-amber-700/10 to-amber-900/30';
      case 'evening':
        return 'from-indigo-950/40 via-amber-900/20 to-black/60';
    }
  };

  const generateWhatsAppInquiry = () => {
    const text = `السلام عليكم شركة أساس الفخامة للسجاد والموكيت،
أنا مهتم بسجادة: ${selectedRug.arabicName}
المقاس المفضل: ${selectedDimension}
نوع المساحة: ${currentRoom.arabicTitle}
أرغب بالاستفسار عن التوفر والمعاينة في معرضكم (الرياض/جدة).`;
    return `https://wa.me/966500000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="room-visualizer" className="py-20 bg-gradient-to-b from-[#080E18] via-[#0E1724] to-[#080E18] text-white relative overflow-hidden">
      
      {/* Decorative background grid & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,143,114,0.08)_0,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182538] border border-[#C58F72]/30 text-[#E4BEAA] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C58F72]" />
            <span>محاكاة السجاد والموكيت التفاعلية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Alexandria'] text-white">
            استوديو محاكاة السجاد التفاعلي 3D
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            شاهد كيف تضفي السجادة رونقها على مجلسك أو صالتك قبل أن تطلبها، مع تحكم كامل بزوايا النور، ومقاسات الغرفة وتأثير الإضاءة على خيوط الحرير والصوف.
          </p>
        </div>

        {/* Visualizer Studio Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center Area: 3D Stage Visualizer (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Visualizer Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {/* Simulated Room Environment Floor & Walls */}
              <div className={`absolute inset-0 bg-gradient-to-b ${currentRoom.bgGradient}`}>
                {/* Wall Baseboards & Luxury Molding */}
                <div className="absolute top-0 inset-x-0 h-2/5 border-b border-amber-500/20 bg-gradient-to-b from-black/60 to-black/30 flex items-start justify-between p-6">
                  <div>
                    <span className="text-xs font-semibold text-amber-300/80 font-['Alexandria']">
                      {currentRoom.arabicTitle}
                    </span>
                    <p className="text-[11px] text-slate-400 max-w-xs">{currentRoom.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/40 border border-slate-750 text-[11px] text-slate-300">
                    <span>{currentRoom.furnitureType}</span>
                  </div>
                </div>

                {/* Perspective Floor (Marble / Hardwood Simulation) */}
                <div className="absolute bottom-0 inset-x-0 h-3/5 bg-gradient-to-t from-black via-slate-950/80 to-transparent">
                  {/* Marble Grid Lines */}
                  <div className="w-full h-full opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"></div>
                </div>
              </div>

              {/* Ambient Lighting Filter Layer */}
              <div className={`absolute inset-0 bg-gradient-to-t ${getLightingStyle()} pointer-events-none transition-all duration-700`}></div>

              {/* The 3D Projected Carpet on the Floor */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-16 sm:pt-20">
                <div 
                  className="relative transition-all duration-500 origin-center shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                  style={{
                    transform: `perspective(600px) rotateX(48deg) rotateZ(${rotation}deg) scale(${rugScale})`,
                    maxWidth: '68%',
                    maxHeight: '65%'
                  }}
                >
                  {/* The actual rug image */}
                  <img 
                    src={selectedRug.image} 
                    alt={selectedRug.arabicName}
                    className="w-full h-full object-contain rounded-sm border-2 border-amber-500/40 transition-transform duration-300"
                  />
                  
                  {/* Silk Shimmer Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-200/15 to-transparent pointer-events-none"></div>

                  {/* Dimension tag overlay */}
                  <div className="absolute -bottom-7 inset-x-0 flex justify-center pointer-events-auto">
                    <span className="bg-black/85 text-amber-300 text-[11px] px-2.5 py-0.5 rounded-full border border-amber-500/30 backdrop-blur-sm">
                      {selectedDimension} • {selectedRug.knotDensity}
                    </span>
                  </div>
                </div>
              </div>

              {/* On-Stage Quick Controls Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                <button 
                  onClick={() => setRotation(r => (r + 90) % 360)}
                  className="p-2 rounded-xl bg-slate-900/85 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-md backdrop-blur-sm transition-all"
                  title="تدوير السجادة"
                >
                  <RotateCw className="w-4 h-4 text-amber-400" />
                </button>
                <button 
                  onClick={() => setRugScale(s => s === 1 ? 1.15 : s === 1.15 ? 0.85 : 1)}
                  className="p-2 rounded-xl bg-slate-900/85 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-md backdrop-blur-sm transition-all"
                  title="تغيير نسبة المقاس"
                >
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </button>
              </div>

              {/* Stage Bottom Bar: Lighting Mode Selector */}
              <div className="absolute bottom-2 sm:bottom-3 inset-x-2 sm:inset-x-3 flex items-center justify-between gap-1.5 p-1.5 sm:p-2 rounded-xl bg-[#090F18]/90 backdrop-blur-md border border-[#243447] text-xs">
                <div className="flex items-center gap-1 text-slate-300 shrink-0">
                  <Sun className="w-3.5 h-3.5 text-[#C58F72]" />
                  <span className="hidden sm:inline text-[11px]">الإضاءة:</span>
                </div>
                
                <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
                  <button
                    onClick={() => setLightingMode('day')}
                    className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all whitespace-nowrap ${
                      lightingMode === 'day' 
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    نهارية (5000K)
                  </button>
                  <button
                    onClick={() => setLightingMode('warm')}
                    className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all whitespace-nowrap ${
                      lightingMode === 'warm' 
                        ? 'bg-[#C58F72]/25 text-[#E4BEAA] border border-[#C58F72]/50' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    ثريات دافئة
                  </button>
                  <button
                    onClick={() => setLightingMode('evening')}
                    className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all whitespace-nowrap ${
                      lightingMode === 'evening' 
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    سهرة هادئة
                  </button>
                </div>

                <button
                  onClick={() => onInspectRug(selectedRug)}
                  className="flex items-center gap-1 text-[#E4BEAA] hover:text-white px-2 py-1 rounded-lg bg-[#182538] border border-[#C58F72]/40 text-[10px] sm:text-[11px] shrink-0"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C58F72]" />
                  <span className="hidden xs:inline">فحص</span>
                </button>
              </div>

            </div>

            {/* Room Presets Switcher Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {ROOM_PRESETS.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoomId(room.id)}
                  className={`min-h-[50px] p-2.5 rounded-xl text-right border transition-all text-xs flex flex-col justify-between ${
                    selectedRoomId === room.id
                      ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA] shadow-[0_0_12px_rgba(197,143,114,0.2)]'
                      : 'bg-[#0E1522] border-[#223143] text-slate-400 hover:bg-[#162130] hover:text-slate-200'
                  }`}
                >
                  <span className="font-bold font-['Alexandria']">{room.arabicTitle}</span>
                  <span className="text-[10px] text-slate-400 truncate mt-0.5">{room.furnitureType}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Right Area: Selected Rug Customizer & Order Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#101724] rounded-2xl p-4 sm:p-5 border border-[#C58F72]/30 shadow-xl space-y-4 sm:space-y-5">
            
            {/* Rug Mini Selector Header */}
            <div>
              <span className="text-xs text-[#E4BEAA] font-semibold tracking-wider flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#C58F72]" />
                <span>اختر السجادة أو الموكيت لتجربتها:</span>
              </span>

              {/* Responsive 3-col on mobile, 6-col on desktop */}
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2 mt-2.5">
                {RUGS_COLLECTION.map((rug) => (
                  <button
                    key={rug.id}
                    onClick={() => {
                      setSelectedRug(rug);
                      setSelectedDimension(rug.dimensions[0]);
                    }}
                    className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all group ${
                      selectedRug.id === rug.id 
                        ? 'border-[#C58F72] shadow-[0_0_10px_rgba(197,143,114,0.5)] ring-1 ring-[#C58F72]' 
                        : 'border-[#223145] opacity-70 hover:opacity-100 hover:border-slate-500'
                    }`}
                    title={rug.arabicName}
                  >
                    <img 
                      src={rug.image} 
                      alt={rug.arabicName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                    <span className="absolute bottom-1 inset-x-1 text-[9px] text-white font-semibold truncate text-center">
                      {rug.arabicName.split(' ')[0]} {rug.arabicName.split(' ')[1] || ''}
                    </span>
                    {selectedRug.id === rug.id && (
                      <div className="absolute top-1 right-1 bg-[#C58F72] text-white rounded-full p-0.5 shadow">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Selected Rug Details */}
            <div className="pt-3 border-t border-slate-800 space-y-3">
              <div>
                <h3 className="text-base font-bold text-white font-['Alexandria']">
                  {selectedRug.arabicName}
                </h3>
                <p className="text-xs text-amber-400/90 mt-0.5">{selectedRug.originArabic}</p>
              </div>

              {/* Specs Table */}
              <div className="space-y-2 text-xs bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">الخامة:</span>
                  <span className="font-semibold text-right text-slate-200 max-w-[65%] truncate">
                    {selectedRug.materialArabic}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">كثافة العقد:</span>
                  <span className="font-bold text-amber-300">{selectedRug.knotDensity}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">سماكة الوبر:</span>
                  <span className="text-slate-200">{selectedRug.thickness}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">الضمان والتوثيق:</span>
                  <span className="font-semibold text-[#E4BEAA]">{selectedRug.warranty}</span>
                </div>
              </div>

              {/* Dimensions Selector */}
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1.5">
                  المقاس المتاح:
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {selectedRug.dimensions.map((dim) => (
                    <button
                      key={dim}
                      onClick={() => setSelectedDimension(dim)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                        selectedDimension === dim
                          ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA]'
                          : 'bg-[#0A1018] border-[#223143] text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {dim}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Booking and Inquiries */}
              <div className="pt-2 space-y-2">
                <a
                  href={generateWhatsAppInquiry()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full min-h-[46px] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>طلب معاينة ورفع مقاسات عبر واتساب</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full min-h-[46px] flex items-center justify-center gap-2 bg-[#182538] hover:bg-[#203046] active:bg-[#203046] border border-[#C58F72]/40 text-[#E4BEAA] font-semibold py-2.5 rounded-xl text-xs transition-colors"
                >
                  <span>حجز موعد لرؤيتها في المعرض (الرياض أو جدة)</span>
                </button>
              </div>

              {/* Guarantee Note */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-[#0A1018] p-2.5 rounded-lg border border-[#202F42]">
                <ShieldCheck className="w-4 h-4 text-[#C58F72] shrink-0" />
                <span>نوفر خدمة المعاينة الفعلية في موقعك بالرياض وجدة قبل الاعتماد.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

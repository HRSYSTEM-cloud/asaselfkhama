import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  Eye, 
  Maximize2, 
  MessageSquare, 
  ShieldCheck, 
  MapPin, 
  Check,
  Award
} from 'lucide-react';
import { RUGS_COLLECTION } from '../data/rugsData';
import { RugItem, RugCategory } from '../types';

interface RugCatalogProps {
  onSelectRugForVisualizer: (rug: RugItem) => void;
  onInspectRug: (rug: RugItem) => void;
  onOpenBooking: () => void;
}

export const RugCatalog: React.FC<RugCatalogProps> = ({ 
  onSelectRugForVisualizer, 
  onInspectRug,
  onOpenBooking 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<RugCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: RugCategory; label: string }[] = [
    { id: 'all', label: 'كافة المجموعات والموكيت' },
    { id: 'hereke', label: 'حرير هيريكي الإمبراطوري' },
    { id: 'konya', label: 'صوف قونية الأناضولي' },
    { id: 'kayseri', label: 'قيصري حرير وصوف' },
    { id: 'ushak', label: 'أوشاك القصور نيوكلاسيك' },
    { id: 'moquette', label: 'موكيت المجالس والقصور الفاخر' },
  ];

  const filteredRugs = RUGS_COLLECTION.filter((rug) => {
    const matchesCategory = selectedCategory === 'all' || rug.category === selectedCategory;
    const matchesSearch = 
      rug.arabicName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rug.originArabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rug.materialArabic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collections" className="py-20 bg-[#0A0F17] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2638] border border-[#C58F72]/40 text-[#E4BEAA] text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-[#C58F72]" />
              <span>مقتنيات شركة أساس الفخامة (معارض الرياض وجدة)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Alexandria'] text-white">
              روائع السجاد التركي والموكيت الملكي
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              قطع متحفية نادرة وموكيت عالي الكثافة منتقاة بعناية فائقة للمجالس والقصور، منسوجة بأنفس خيوط الحرير الطبيعي والصوف والوبر المقاوم للهبوط.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن خامة، هيريكي، موكيت، صوف..."
              className="w-full bg-[#121924] border border-[#27374D] focus:border-[#C58F72] rounded-xl py-2.5 pr-10 pl-4 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 min-h-[42px] flex items-center justify-center ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#C58F72] to-[#B87B5B] text-white font-bold shadow-[0_0_15px_rgba(197,143,114,0.3)]'
                  : 'bg-[#121A26] hover:bg-[#1A2536] text-slate-300 border border-[#25364B] hover:border-[#374D68]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Rugs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRugs.map((rug) => (
            <div
              key={rug.id}
              className="group bg-gradient-to-b from-[#111927] via-[#0E1522] to-[#0A0E17] border border-[#223145] hover:border-[#C58F72]/60 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image & Badges Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <img
                  src={rug.image}
                  alt={rug.arabicName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1522] via-transparent to-transparent opacity-80"></div>

                {/* Knot Density Badge */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-[#C58F72]/50 px-3 py-1 rounded-full text-[11px] font-bold text-[#E4BEAA] shadow-md">
                  {rug.knotDensity}
                </div>

                {/* Origin Pill */}
                <div className="absolute top-3 left-3 bg-[#0B1017]/80 backdrop-blur-md border border-slate-700 px-2.5 py-1 rounded-lg text-[10px] text-slate-300">
                  {rug.originArabic.split('(')[0]}
                </div>

                {/* Quick Inspect Button on Hover */}
                <button
                  onClick={() => onInspectRug(rug)}
                  className="absolute bottom-3 left-3 bg-[#0B1017]/90 hover:bg-[#C58F72] hover:text-white text-[#E4BEAA] text-xs px-3 py-1.5 rounded-lg border border-[#C58F72]/40 flex items-center gap-1.5 transition-all shadow-md backdrop-blur-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>عدسة فحص النسيج</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-right">
                
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E4BEAA] transition-colors font-['Alexandria']">
                    {rug.arabicName}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {rug.description}
                  </p>
                </div>

                {/* Specs Snippet (No Price) */}
                <div className="bg-[#0B1017]/80 p-3 rounded-xl border border-[#223145] text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">الخامة والنسيج:</span>
                    <span className="font-semibold text-slate-200 text-right truncate max-w-[65%]">
                      {rug.materialArabic}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">المقاسات المتاحة:</span>
                    <span className="text-[#E4BEAA] text-[11px] font-medium">
                      {rug.dimensions.join(' | ')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-[#1F2C3D]">
                    <span className="text-slate-400">الضمان والاعتماد:</span>
                    <span className="font-bold text-xs text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{rug.warranty}</span>
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    onClick={() => onSelectRugForVisualizer(rug)}
                    className="min-h-[44px] py-2.5 px-3 rounded-xl bg-[#1B2738] hover:bg-[#23334A] active:bg-[#23334A] border border-[#354B68] text-[#E4BEAA] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-[#C58F72]" />
                    <span>محاكاة في المجلس</span>
                  </button>

                  <a
                    href={`https://wa.me/966500000000?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار وطلب تفاصيل ومقاسات ${rug.arabicName} من شركة أساس الفخامة للسجاد والموكيت.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[44px] py-2.5 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>طلب استفسار واتساب</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Sizing */}
        <div className="mt-14 bg-[#111824] rounded-2xl p-5 sm:p-8 border border-[#C58F72]/30 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 text-right">
          <div className="space-y-2">
            <h3 className="text-base sm:text-xl font-bold font-['Alexandria'] text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C58F72] shrink-0" />
              <span>هل تبحث عن مقاسات خاصة أو موكيت متصل لقصرك أو مجلسك؟</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              نوفر خدمة التفصيل اليدوي وتوريد موكيت القصور والفلل مع فريق متخصص للرفع المساحي الدقيق والتركيب المعتمد في الرياض وجدة.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full md:w-auto min-h-[46px] whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-[#C58F72] to-[#B87B5B] active:brightness-95 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_4px_15px_rgba(197,143,114,0.3)] flex items-center justify-center"
          >
            طلب استشارة وتفصيل
          </button>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  BookOpen, 
  Flame, 
  Sparkles, 
  Layers, 
  HelpCircle, 
  CheckCircle, 
  AlertTriangle, 
  Compass,
  Award
} from 'lucide-react';

export const RugHeritageGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'regions' | 'authenticity' | 'density'>('regions');

  return (
    <section id="heritage-guide" className="py-20 bg-[#070D18] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182538] border border-[#C58F72]/30 text-[#E4BEAA] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-[#C58F72]" />
            <span>موسوعة الخبراء المعتمدة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Alexandria'] text-white">
            دليل الأصالة وعراقة النسيج التركي
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            معلومات تاريخية وفنية دقيقة تفصل بين التحف الملكية والسجاد التجاري، لتمتلك قطعة تزيد قيمتها رونقاً مع الزمن.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#111A27] p-1.5 rounded-2xl border border-[#233346] flex items-center gap-2 max-w-lg w-full">
            <button
              onClick={() => setActiveTab('regions')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'regions'
                  ? 'bg-gradient-to-r from-[#C58F72] to-[#B87B5B] text-white shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              أقاليم السجاد
            </button>
            <button
              onClick={() => setActiveTab('authenticity')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'authenticity'
                  ? 'bg-gradient-to-r from-[#C58F72] to-[#B87B5B] text-white shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              كشف السجاد الأصلي
            </button>
            <button
              onClick={() => setActiveTab('density')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'density'
                  ? 'bg-gradient-to-r from-[#C58F72] to-[#B87B5B] text-white shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              الكثافة والجودة
            </button>
          </div>
        </div>

        {/* Tab 1: Regions Breakdown */}
        {activeTab === 'regions' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Hereke */}
            <div className="bg-slate-900/70 border border-amber-500/30 rounded-2xl p-6 space-y-4 hover:border-amber-400 transition-all text-right shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-mono font-bold">1,000,000+ عقدة/م²</span>
                <span className="bg-amber-500/10 text-amber-300 text-xs px-2.5 py-1 rounded-lg border border-amber-500/20 font-bold">
                  سجاد القصور الملكية
                </span>
              </div>
              <h3 className="text-xl font-bold font-['Alexandria'] text-white">
                هيريكي (Hereke) - حرير السلاطين
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                تأسست ورش هيريكي الملكية عام 1843 بفرمان سلطاني لتجهيز قصر دولمة بهجة والقصور الأوروبية. يُنسج حصرياً من حرير بورصة الطبيعي 100% الممزوج أحياناً بخيوط الذهب والفضة.
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs space-y-1.5 text-slate-400">
                <div>• <strong>الميزة:</strong> لمعان حريري ساحر يتغير مع زاوية النظر.</div>
                <div>• <strong>الختم:</strong> تحمل حاشية السجادة ختم نسج Hereke الرسمي.</div>
                <div>• <strong>المكان الأمثل:</strong> مجالس استقبال كبار الشخصيات والقصور.</div>
              </div>
            </div>

            {/* Konya */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-400/40 transition-all text-right shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-mono font-bold">280,000 عقدة/م²</span>
                <span className="bg-rose-500/10 text-rose-300 text-xs px-2.5 py-1 rounded-lg border border-rose-500/20 font-bold">
                  تراث سلجوقي عتيق
                </span>
              </div>
              <h3 className="text-xl font-bold font-['Alexandria'] text-white">
                قونية (Konya) - صوف الأناضول الجبلي
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                مهد أقدم سجاد نسجي في التاريخ الإسلامي. يعتمد على صوف الغنم الجبلي العالي المتانة، ومصبوغ بجذور نبات الفُوّة البري وقشور الجوز وأوراق النيلة الطبيعية التي تدوم لمئات السنين.
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs space-y-1.5 text-slate-400">
                <div>• <strong>الميزة:</strong> مقاومة خارقة لحركة الأقدام والفرك اليومي.</div>
                <div>• <strong>النقش:</strong> موتيفات هندسية تمائمية لحفظ البيت وبركته.</div>
                <div>• <strong>المكان الأمثل:</strong> المجالس الحيوية والممرات والبيوت التراثية.</div>
              </div>
            </div>

            {/* Kayseri */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-400/40 transition-all text-right shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-mono font-bold">650,000 عقدة/م²</span>
                <span className="bg-blue-500/10 text-blue-300 text-xs px-2.5 py-1 rounded-lg border border-blue-500/20 font-bold">
                  التناغم الإسليمي
                </span>
              </div>
              <h3 className="text-xl font-bold font-['Alexandria'] text-white">
                قيصري (Kayseri) - توازن الحرير والصوف
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                تقع عند سفح جبل أرجييس البركاني؛ تشتهر بتطعيم الزهور الإسليمية بخيوط حرير بارزة فوق أرضية صوفية غير لامعة، ما يعطي تأثيراً نافراً ثلاثي الأبعاد تحت أضواء الثريات.
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs space-y-1.5 text-slate-400">
                <div>• <strong>الميزة:</strong> الجمع بين فخامة الحرير وقوة احتمال الصوف وسهولة التنظيف.</div>
                <div>• <strong>النقش:</strong> محاريب مساجد، ورود اللوتس، وأشجار السرو التراثية.</div>
                <div>• <strong>المكان الأمثل:</strong> صالات المعيشة الفخمة وغرف الطعام الكبرى.</div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Authenticity Tests */}
        {activeTab === 'authenticity' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 text-right">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">1. اختبار احتراق طرف الخيط (Burn Test)</h4>
                  <p className="text-xs text-slate-400">التفريق القاطع بين الحرير الطبيعي والبوليستر</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                عند حرق خيط دقيق من الحرير الطبيعي الخالص، تخرج منه رائحة تشبه احتراق الشعر أو الريش، ويتحول إلى رماد ناعم أسود يتفتت فوراً بالأصابع. أما الحرير الصناعي (البوليستر أو الفسكوز الرخيص) فيذوب كالبلاستيك وتخرج منه كتلة صلبة ورائحة كيميائية نفاذة.
              </p>
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>جميع سجاد أساس الفخامة يخضع لاختبار نقاوة الحرير وشهادة المنشأ.</span>
              </div>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 text-right">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">2. اختبار ظهر السجادة (Backside Weave Test)</h4>
                  <p className="text-xs text-slate-400">وضوح النقوش وتماسك العقدة المزدوجة</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                في السجاد اليدوي التركي الأصيل، تكون النقشة على ظهر السجادة واضحة ومطابقة تماماً للوجه الأمامي كأنها مرآة له! لا توجد طبقة قماشية ملصقة بالغراء أو اللاتكس (كما في السجاد التجاري الآلي). كل عقدة ملفوفة يدوياً حول خيوط السدى القطنية أو الحريرية.
              </p>
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/40 text-xs text-amber-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>العقدة التركية المزدوجة Gördes تتحمل الغسيل والفرك دون انحلال لعقود.</span>
              </div>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 text-right">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">3. انكسار الضوء وتغير الدرجات (Luster & Sheen)</h4>
                  <p className="text-xs text-slate-400">خاصية تميز حرير بورصة الطبيعي</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                خيوط الحرير الطبيعي لها مقطع مثلثي مجهري يعكس الضوء بزوايا متعددة كالموشور (Prism). عند الدوران حول السجادة 180 درجة، ترى لونها يتحول من درجة عميقة داكنة إلى لمعان فضي أو ذهبي باهر، وهي خاصية يستحيل تزييفها بالخيوط الصناعية.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 text-right">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">4. ثبات الأصباغ النباتية الطبيعية (Natural Dyes)</h4>
                  <p className="text-xs text-slate-400">مقاومة بهتان الشمس وحرارة الصيف</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                الأصباغ النباتية الطبيعية كعروق الفوة والنيلة لا تنتقل بالماء ولا تفرز روائح كيميائية مع دفء التدفئة أو تكييف الصيف. بل إن تعرضها للضوء بمرور السنين يكسبها نبل العتق (Patina) مما يزيد من سعرها في مزادات التحف.
              </p>
            </div>

          </div>
        )}

        {/* Tab 3: Knot Density & Price Equation */}
        {activeTab === 'density' && (
          <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 text-right">
            <div>
              <h3 className="text-xl font-bold font-['Alexandria'] text-white">
                لماذا كثافة العقدة والخامة هي التي تحدد المتانة والسعر؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                حقيقة علمية وواقعية يوضحها خبراء أساس الفخامة لعملائنا الكرام بالرياض:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold text-base font-mono">1. وقت النساج اليدوي</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  سجادة هيريكي حرير بمقاس 2×3 متر وبكثافة مليون عقدة/م² تحتوي على أكثر من <strong>6 ملايين عقدة يدوية</strong>. تستغرق نساجتها ما بين 18 إلى 24 شهراً من العمل المجهري المتواصل لنساجين محترفين.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold text-base font-mono">2. نقاوة الخامة المصدرية</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  الحرير الطبيعي المستخرج من شرانق دودة القز في بورصة يزن أقل بكثير ولكنه أقوى من خيوط الفولاذ بنفس القطر، ويوفر نعومة حريرية لا تتأثر بضغط أرجل الكنب أو الطاولات الثقيلة.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold text-base font-mono">3. القيمة الاستثمارية والوراثية</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  على عكس السجاد الصناعي الذي يستهلك خلال سنوات قليلة، فإن السجاد التركي اليدوي عالي الكثافة يعتبر أصلاً ثميناً يُورث عبر الأجيال وتزيد قيمته في أسواق الانتيك والمزادات الملكية.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Ruler, 
  PackageCheck, 
  Award,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

interface GoldenCharterProps {
  onOpenBooking: () => void;
}

export const GoldenCharter: React.FC<GoldenCharterProps> = ({ onOpenBooking }) => {
  const commitments = [
    {
      icon: Clock,
      title: 'الالتزام الصارم بمواعيد فتح المعارض بالدقيقة',
      description: 'أبواب معارضنا في الرياض وجدة تفتح يومياً في المواعيد المحددة دون تأخير. احترام وقت العميل وتقدير زيارته هو أساس تعاملنا الراقي.',
      badge: 'انضباط تام'
    },
    {
      icon: UserCheck,
      title: 'حضور مستشار سجاد وموكيت متخصص',
      description: 'نضع بين يديكم نخبة من المستشارين ذوي الخبرة في أصول النسيج اليدوي وكثافة الموكيت، مع تواجد إداري لمساعدتكم في اختيار الأنسب لطابع مجلسكم.',
      badge: 'استشارة متخصصة'
    },
    {
      icon: Ruler,
      title: 'رفع المقاسات ومعاينة هندسية للمجالس',
      description: 'فريق متخصص لزيارة الموقع ورفع الأبعاد بدقة للمجالس والصالات والفلل لضمان تناسق أطراف السجاد والموكيت مع الجدران والأثاث.',
      badge: 'دقة هندسية'
    },
    {
      icon: PackageCheck,
      title: 'توريد وتركيب احترافي معتمد',
      description: 'جميع القطع والموكيت تورد وتثبت بأيدي فنيين محترفين مع توثيق رسمي وشهادات منشأ معتمدة لضمان بقاء النسيج بأعلى رونق.',
      badge: 'تركيب معتمد'
    },
  ];

  return (
    <section id="golden-charter" className="py-20 bg-[#070D18] text-white relative overflow-hidden">
      
      {/* Decorative Bronze Ambient Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C58F72]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182538] border border-[#C58F72]/30 text-[#E4BEAA] text-xs font-semibold shadow-[0_0_15px_rgba(197,143,114,0.15)]">
            <Award className="w-3.5 h-3.5 text-[#C58F72]" />
            <span>ميثاق الجودة والاحترافية في معارض الرياض وجدة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Alexandria'] text-white">
            ميثاق التميز والالتزام لعملائنا
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            لأن السجاد والموكيت الفاخر يتطلب دقة واحترافية؛ وضعنا أعلى معايير الخدمة والانضباط لنضمن لكم تجربة اقتناء ترتقي لذائقتكم الرفيعة.
          </p>
        </div>

        {/* The 4 Core Pledges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#101824] p-6 sm:p-7 rounded-2xl border border-[#233346] hover:border-[#C58F72]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-right space-y-3.5 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#1A2638] text-[#C58F72] border border-[#2B3D55] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#E4BEAA] bg-[#182538] px-2.5 py-1 rounded-full border border-[#2A3B50]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-['Alexandria'] group-hover:text-[#E4BEAA] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>معتمد في فروع الرياض (الفيصلية) وجدة (البغدادية)</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#141E2C] via-[#101824] to-[#141E2C] p-6 sm:p-8 rounded-2xl border border-[#C58F72]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white font-['Alexandria']">
              هل ترغب بحجز موعد استشارة أو معاينة لمجلسك؟
            </h4>
            <p className="text-xs text-slate-300">
              اختر الوقت المناسب وسيكون مستشار السجاد والموكيت بانتظاركم في فرع الرياض أو جدة.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-[#C58F72] to-[#B87B5B] hover:brightness-110 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-[0_4px_15px_rgba(197,143,114,0.35)] transition-all"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>حجز موعد زيارة الآن</span>
          </button>
        </div>

      </div>
    </section>
  );
};

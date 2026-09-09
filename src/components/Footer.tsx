import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Car, 
  Truck, 
  ExternalLink,
  Award
} from 'lucide-react';
import { emblemImage } from '../data/rugsData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050912] border-t border-[#C58F72]/20 text-slate-400 text-right pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A2638]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#9E6347] via-[#E4BEAA] to-[#C58F72] shadow-md">
                <img 
                  src={emblemImage} 
                  alt="شعار شركة أساس الفخامة للسجاد والموكيت" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold font-['Alexandria'] text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-[#E4BEAA] to-[#C58F72] block">
                  شركة أساس الفخامة للسجاد والموكيت
                </span>
                <span className="text-xs text-slate-400">
                  سجاد تركي وموكيت فاخر • الرياض & جدة
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              وجهتكم الأولى في المملكة لاقتناء أنفس قطع السجاد التركي واليدوي الأصيل وموكيت القصور والمجالس عالي الكثافة. نوفر تحف هيريكي، وقونية، وقيصري، مع الرفع المساحي والتركيب الاحترافي في الرياض وجدة.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#E4BEAA]">
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>توريد وتركيب معتمد</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#C58F72]" />
                <span>أصالة 100% موثقة</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>فروع الرياض وجدة</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Alexandria']">
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-[#E4BEAA] transition-colors">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('collections')} className="hover:text-[#E4BEAA] transition-colors">
                  السجاد والموكيت
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('room-visualizer')} className="hover:text-[#E4BEAA] transition-colors">
                  استوديو المجالس 3D
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('heritage-guide')} className="hover:text-[#E4BEAA] transition-colors">
                  دليل النسيج التركي
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('rug-calculator')} className="hover:text-[#E4BEAA] transition-colors">
                  حاسبة المقاسات
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('location-schedule')} className="hover:text-[#E4BEAA] transition-colors">
                  فروعنا وساعات العمل
                </button>
              </li>
            </ul>
          </div>

          {/* Carpet Styles (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Alexandria']">
              المجموعات المتوفرة
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58F72]"></span>
                <span>سجاد هيريكي حرير طبيعي (مليون عقدة/م²)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58F72]"></span>
                <span>سجاد قونية صوف جبلي بأصباغ نباتية</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58F72]"></span>
                <span>سجاد قيصري مزيج الحرير والصوف</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58F72]"></span>
                <span>موكيت القصور والمجالس عالي الكثافة</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58F72]"></span>
                <span>تفصيل مقاسات خاصة للمشاريع والفلل</span>
              </li>
            </ul>
          </div>

          {/* Direct Address & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Alexandria']">
              معارضنا الرسمية
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <div className="flex items-start gap-1.5 text-slate-200 font-bold">
                  <MapPin className="w-4 h-4 text-[#C58F72] shrink-0 mt-0.5" />
                  <span>فرع الرياض (الفيصلية):</span>
                </div>
                <p className="text-[11px] text-slate-400 pr-5">
                  شارع أسد السنة، حي الفيصلية، الرياض 12882
                </p>
                <div className="pr-5">
                  <span className="text-[10px] font-mono text-[#E4BEAA] bg-[#111A27] px-2 py-0.5 rounded border border-[#233346]">
                    JQJF+F6 الفيصلية، الرياض
                  </span>
                </div>
              </div>

              <div className="space-y-1 pt-1 border-t border-[#1C293A]">
                <div className="flex items-start gap-1.5 text-slate-200 font-bold">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>فرع جدة (البغدادية الغربية):</span>
                </div>
                <p className="text-[11px] text-slate-400 pr-5">
                  حي البغدادية الغربية، جدة 22231
                </p>
                <div className="pr-5">
                  <span className="text-[10px] font-mono text-[#E4BEAA] bg-[#111A27] px-2 py-0.5 rounded border border-[#233346]">
                    F5WF+R75 البغدادية، جدة
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/966500000000?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A3%D8%B3%D8%A7%D8%B3%20%D8%A7%D9%84%D9%81%D8%AE%D8%A7%D9%85%D8%A9%20%D9%84%D9%84%D8%B3%D8%AC%D8%A7%D8%AF%20%D9%88%D8%A7%D9%84%D9%85%D9%88%D9%83%D9%8A%D8%AA"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors"
                >
                  <span>محادثة الإدارة المباشرة واتساب</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} شركة أساس الفخامة للسجاد والموكيت. جميع الحقوق محفوظة • الرياض & جدة، المملكة العربية السعودية.
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>سجل تجاري معتمد</span>
            <span>•</span>
            <span>معارض الرياض وجدة</span>
            <span>•</span>
            <span>ضمان الجودة والالتزام</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

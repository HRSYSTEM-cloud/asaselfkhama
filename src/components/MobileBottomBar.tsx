import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  CalendarCheck, 
  MapPin, 
  Sparkles 
} from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      aria-label="شريط الوصول السريع للجوال"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#0A101A]/95 backdrop-blur-lg border-t border-[#C58F72]/30 shadow-[0_-8px_25px_rgba(0,0,0,0.85)] px-2 py-2 safe-area-pb"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 gap-1 items-center text-center">
        
        {/* Call Showroom */}
        <a
          href="tel:+966500000000"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white active:bg-[#182333] transition-colors group min-h-[52px]"
        >
          <div className="w-8 h-8 rounded-full bg-[#141F2D] flex items-center justify-center border border-[#233346] text-[#C58F72] group-hover:scale-110 transition-transform">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-slate-300 group-hover:text-white">
            اتصال
          </span>
        </a>

        {/* WhatsApp Customer Care */}
        <a
          href="https://wa.me/966500000000?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B3%D8%AC%D8%A7%D8%AF%20%D9%88%D9%85%D9%88%D9%83%D9%8A%D8%AA%20%D8%A3%D8%B3%D8%A7%D8%B3%20%D8%A7%D9%84%D9%81%D8%AE%D8%A7%D9%85%D8%A9"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white active:bg-[#182333] transition-colors group min-h-[52px]"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-950/80 flex items-center justify-center border border-emerald-500/40 text-emerald-400 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-emerald-400 group-hover:text-emerald-300">
            واتساب
          </span>
        </a>

        {/* Book Appointment (Center Golden Hero Button) */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center -mt-4 group min-h-[58px]"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#9E6347] via-[#C58F72] to-[#E4BEAA] p-0.5 shadow-[0_4px_20px_rgba(197,143,114,0.5)] group-active:scale-95 transition-transform flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#0E1522] flex items-center justify-center text-[#E4BEAA]">
              <CalendarCheck className="w-5 h-5 text-[#C58F72]" />
            </div>
          </div>
          <span className="text-[10px] font-extrabold mt-1 text-[#E4BEAA]">
            حجز موعد
          </span>
        </button>

        {/* 3D Visualizer */}
        <button
          onClick={() => scrollTo('room-visualizer')}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white active:bg-[#182333] transition-colors group min-h-[52px]"
        >
          <div className="w-8 h-8 rounded-full bg-[#141F2D] flex items-center justify-center border border-[#233346] text-[#C58F72] group-hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-slate-300 group-hover:text-white">
            معاينة 3D
          </span>
        </button>

        {/* Branches & Locations */}
        <button
          onClick={() => scrollTo('location-schedule')}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white active:bg-[#182333] transition-colors group min-h-[52px]"
        >
          <div className="w-8 h-8 rounded-full bg-[#141F2D] flex items-center justify-center border border-[#233346] text-sky-400 group-hover:scale-110 transition-transform">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-slate-300 group-hover:text-white">
            فروعنا
          </span>
        </button>

      </div>
    </aside>
  );
};

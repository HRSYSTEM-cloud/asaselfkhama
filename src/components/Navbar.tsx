import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Sparkles, 
  Clock, 
  Menu, 
  X, 
  Car, 
  ShieldCheck, 
  CalendarCheck
} from 'lucide-react';
import { emblemImage, STORE_HOURS_DATA } from '../data/rugsData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenVisualizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenVisualizer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check current Riyadh time (UTC+3)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // UTC + 3 hours for Riyadh
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const riyadhTime = new Date(utc + (3600000 * 3));
      const hours = riyadhTime.getHours();
      // Open between 8 AM (8) and 10 PM (22)
      setIsStoreOpen(hours >= 8 && hours < 22);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner with Store Status & Branches */}
      <div id="top-announcement-bar" className="bg-[#0B1017] border-b border-[#2A3B50] text-xs py-1.5 px-3 sm:px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${isStoreOpen ? 'bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]' : 'bg-rose-400'}`}></span>
            <span className="text-[#D9A083] font-semibold text-[11px] sm:text-xs truncate">
              {isStoreOpen ? 'معارضنا مفتوحة الآن' : 'المعارض مغلقة حالياً'}
            </span>
            <span className="text-slate-400 text-[11px] hidden md:inline">
              (الرياض: شارع أسد السنة • جدة: حي البغدادية الغربية)
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-[11px] shrink-0">
            <a 
              href="https://wa.me/966500000000?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B3%D8%AC%D8%A7%D8%AF%20%D9%88%D9%85%D9%88%D9%83%D9%8A%D8%AA%20%D8%A3%D8%B3%D8%A7%D8%B3%20%D8%A7%D9%84%D9%81%D8%AE%D8%A7%D9%85%D8%A9" 
              target="_blank" 
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <span>خدمة العملاء</span>
            </a>
            <span className="text-slate-600 hidden xs:inline">|</span>
            <button 
              onClick={() => scrollToSection('location-schedule')}
              className="text-[#C58F72] hover:text-[#E2AB8F] transition-colors hidden xs:inline"
            >
              فروعنا
            </button>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0E1522]/95 backdrop-blur-md border-b border-[#2A3B50] shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3' 
          : 'bg-[#0E1522]/85 backdrop-blur-sm border-b border-slate-800/80 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#1E2E44] via-[#C58F72] to-[#344E6F] shadow-[0_0_15px_rgba(197,143,114,0.3)] transition-transform duration-300 group-hover:scale-105">
              <img 
                src={emblemImage} 
                alt="شعار أساس الفخامة للسجاد والموكيت" 
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full border border-[#C58F72]/40 pointer-events-none"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-['Alexandria'] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-[#E4BEAA] to-[#C58F72]">
                أساس الفخامة
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 tracking-wider flex items-center gap-1 font-medium">
                <span>للسجاد والموكيت الفاخر</span>
                <span className="w-1 h-1 rounded-full bg-[#C58F72]"></span>
                <span className="text-[#C58F72]">الرياض • جدة</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button 
              onClick={() => scrollToSection('collections')} 
              className="hover:text-[#E4BEAA] transition-colors relative py-1"
            >
              مجموعات السجاد والموكيت
            </button>
            <button 
              onClick={() => scrollToSection('room-visualizer')} 
              className="hover:text-[#E4BEAA] transition-colors flex items-center gap-1.5 text-[#D9A083] bg-[#1B2738]/80 px-3 py-1.5 rounded-full border border-[#374C68]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C58F72]" />
              <span>استوديو المجالس 3D</span>
            </button>
            <button 
              onClick={() => scrollToSection('heritage-guide')} 
              className="hover:text-[#E4BEAA] transition-colors"
            >
              دليل النسيج والأصالة
            </button>
            <button 
              onClick={() => scrollToSection('rug-calculator')} 
              className="hover:text-[#E4BEAA] transition-colors"
            >
              حاسبة المقاسات والتوزيع
            </button>
            <button 
              onClick={() => scrollToSection('golden-charter')} 
              className="hover:text-[#E4BEAA] transition-colors text-slate-300 flex items-center gap-1"
            >
              <ShieldCheck className="w-4 h-4 text-[#C58F72]" />
              <span>ميثاق الالتزام والضمان</span>
            </button>
            <button 
              onClick={() => scrollToSection('location-schedule')} 
              className="hover:text-[#E4BEAA] transition-colors"
            >
              فروعنا (الرياض & جدة)
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              id="nav-visualizer-btn"
              onClick={onOpenVisualizer}
              className="hidden sm:inline-flex items-center gap-2 bg-[#172335] hover:bg-[#1E2E44] text-[#E4BEAA] text-xs px-3.5 py-2 rounded-xl border border-[#3A5170] transition-all shadow-[0_0_12px_rgba(197,143,114,0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C58F72]" />
              <span>معاينة في مجلسك</span>
            </button>

            <button
              id="nav-booking-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C58F72] via-[#B87B5B] to-[#9E6347] hover:brightness-110 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-[0_4px_15px_rgba(197,143,114,0.3)] transition-all hover:shadow-[0_6px_20px_rgba(197,143,114,0.45)] transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>حجز موعد</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] text-slate-300 hover:text-white rounded-xl bg-[#141E2D] border border-[#233346] flex items-center justify-center transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E4BEAA]" /> : <Menu className="w-5 h-5 text-[#E4BEAA]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Backdrop */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 top-[108px] bg-black/60 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative z-40 lg:hidden bg-[#0C121D] border-b border-[#C58F72]/30 px-4 pt-3 pb-6 mt-2 space-y-2 shadow-2xl animate-fadeIn">
              <button
                onClick={() => scrollToSection('collections')}
                className="w-full min-h-[44px] text-right py-2.5 px-3 text-slate-200 hover:bg-[#162233] active:bg-[#162233] rounded-xl flex items-center justify-between text-sm transition-colors"
              >
                <span>مجموعات السجاد والموكيت</span>
                <span className="text-[#C58F72] text-xs">عرض الكل</span>
              </button>
              
              <button
                onClick={() => scrollToSection('room-visualizer')}
                className="w-full min-h-[44px] text-right py-2.5 px-3 text-[#E4BEAA] bg-[#162233]/80 rounded-xl border border-[#344862] flex items-center justify-between text-sm font-semibold"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C58F72]" />
                  <span>استوديو محاكاة المجالس 3D</span>
                </div>
                <span className="text-[10px] bg-[#C58F72]/20 text-[#E4BEAA] px-2 py-0.5 rounded-md font-normal">تفاعلي</span>
              </button>

              <button
                onClick={() => scrollToSection('heritage-guide')}
                className="w-full min-h-[44px] text-right py-2.5 px-3 text-slate-200 hover:bg-[#162233] active:bg-[#162233] rounded-xl flex items-center justify-between text-sm transition-colors"
              >
                <span>دليل النسيج التركي والأصالة</span>
              </button>

              <button
                onClick={() => scrollToSection('rug-calculator')}
                className="w-full min-h-[44px] text-right py-2.5 px-3 text-slate-200 hover:bg-[#162233] active:bg-[#162233] rounded-xl flex items-center justify-between text-sm transition-colors"
              >
                <span>حاسبة المقاسات والتوزيع المعتمد</span>
              </button>

              <button
                onClick={() => scrollToSection('golden-charter')}
                className="w-full min-h-[44px] text-right py-2.5 px-3 text-slate-200 hover:bg-[#162233] active:bg-[#162233] rounded-xl flex items-center justify-between text-sm transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C58F72]" />
                  <span>ميثاق الالتزام والضمان</span>
                </div>
              </button>

              <button
                onClick={() => scrollToSection('location-schedule')}
                className="w-full min-h-[44px] text-right py-2.5 px-3 text-slate-200 hover:bg-[#162233] active:bg-[#162233] rounded-xl flex items-center justify-between text-sm transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>فروعنا (الرياض & جدة)</span>
                </div>
              </button>

              <div className="pt-3 border-t border-[#1F2E40] flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex-1 min-h-[46px] bg-gradient-to-r from-[#C58F72] to-[#B87B5B] active:brightness-90 text-white font-bold text-center py-2.5 rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>حجز موعد</span>
                </button>
                <a
                  href="tel:+966500000000"
                  className="min-h-[46px] px-4 bg-[#162233] active:bg-[#1D2C42] text-slate-200 rounded-xl flex items-center justify-center border border-[#2A3C52]"
                  aria-label="اتصال هاتفي"
                >
                  <Phone className="w-5 h-5 text-[#C58F72]" />
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

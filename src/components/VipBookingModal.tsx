import React, { useState } from 'react';
import { 
  X, 
  CalendarCheck, 
  Building2, 
  Home, 
  Phone, 
  Clock, 
  User, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { BookingForm } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipBookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState<BookingForm>({
    fullName: '',
    phone: '',
    date: '',
    timeSlot: '10:00 AM',
    interestedCategories: ['hereke'],
    roomType: 'مجلس رجال',
    specialRequests: '',
    serviceType: 'showroom_visit',
    preferredBranch: 'riyadh'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const serviceName = 
      form.serviceType === 'showroom_visit' ? 'زيارة المعرض واستشارة متخصصة' :
      form.serviceType === 'home_preview' ? 'معاينة ورفع مقاسات بالموقع' : 'استشارة مشاريع وفلل';

    const branchName = form.preferredBranch === 'riyadh' ? 'فرع الرياض (الفيصلية)' : 'فرع جدة (البغدادية الغربية)';

    const text = `السلام عليكم شركة أساس الفخامة للسجاد والموكيت،
أود تأكيد حجز موعد:
- الفرع المختار: ${branchName}
- نوع الخدمة: ${serviceName}
- الاسم الكريم: ${form.fullName || 'عميل كريم'}
- رقم الجوال: ${form.phone || 'غير محدد'}
- اليوم والتاريخ: ${form.date || 'اليوم/غداً'}
- الوقت المفضل: ${form.timeSlot}
- نوع المساحة: ${form.roomType}
- ملاحظات: ${form.specialRequests || 'لا توجد'}`;

    return `https://wa.me/966500000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center py-6 px-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#0D1420] border border-[#C58F72]/35 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden text-right text-white my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#223145] bg-[#090F18]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-[#C58F72]/15 text-[#C58F72] border border-[#C58F72]/25 shrink-0">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-['Alexandria'] text-white">
                حجز موعد زيارة أو استشارة
              </h3>
              <p className="text-[11px] sm:text-xs text-[#E4BEAA]">
                شركة أساس الفخامة للسجاد والموكيت • الرياض & جدة
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 text-slate-400 hover:text-white rounded-xl bg-[#152131] active:bg-[#1E2E44] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold font-['Alexandria'] text-white">
                تم تسجيل طلب موعدكم بنجاح!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                سيتواصل معكم فريق خدمة العملاء لتأكيد تفاصيل الزيارة والتنسيق مع مهندس المعرض بالفرع المحدد.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>إرسال تفاصيل الموعد عبر واتساب</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#1A2638] hover:bg-[#22324A] text-slate-200 text-sm font-semibold transition-colors"
                >
                  إغلاق
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Branch Selector */}
              <div>
                <label className="text-xs font-bold text-white block mb-2 font-['Alexandria']">
                  اختر الفرع الأقرب لك:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, preferredBranch: 'riyadh' })}
                    className={`p-3 rounded-xl border text-right transition-all flex items-center gap-2.5 ${
                      form.preferredBranch === 'riyadh'
                        ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA]'
                        : 'bg-[#0B1017] border-[#223143] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#C58F72] shrink-0" />
                    <div>
                      <span className="text-xs font-bold block text-white">الرياض</span>
                      <span className="text-[10px] text-slate-400">حي الفيصلية، شارع أسد السنة</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm({ ...form, preferredBranch: 'jeddah' })}
                    className={`p-3 rounded-xl border text-right transition-all flex items-center gap-2.5 ${
                      form.preferredBranch === 'jeddah'
                        ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA]'
                        : 'bg-[#0B1017] border-[#223143] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <span className="text-xs font-bold block text-white">جدة</span>
                      <span className="text-[10px] text-slate-400">حي البغدادية الغربية</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Service Type Selector */}
              <div>
                <label className="text-xs font-bold text-white block mb-2 font-['Alexandria']">
                  نوع الخدمة المطلوبة:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, serviceType: 'showroom_visit' })}
                    className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      form.serviceType === 'showroom_visit'
                        ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA]'
                        : 'bg-[#0B1017] border-[#223143] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#C58F72]" />
                    <span className="text-[11px] font-bold">زيارة المعرض</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm({ ...form, serviceType: 'home_preview' })}
                    className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      form.serviceType === 'home_preview'
                        ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA]'
                        : 'bg-[#0B1017] border-[#223143] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Home className="w-4 h-4 text-sky-400" />
                    <span className="text-[11px] font-bold">معاينة ورفع مقاسات</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm({ ...form, serviceType: 'custom_order' })}
                    className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      form.serviceType === 'custom_order'
                        ? 'bg-[#C58F72]/20 border-[#C58F72] text-[#E4BEAA]'
                        : 'bg-[#0B1017] border-[#223143] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px] font-bold">تفصيل خاص ومشاريع</span>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-medium">الاسم الكريم:</label>
                  <input
                    type="text"
                    required
                    placeholder="الاسم الثلاثي"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full bg-[#0B1017] border border-[#223143] focus:border-[#C58F72] rounded-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-medium">رقم الجوال:</label>
                  <input
                    type="tel"
                    required
                    placeholder="05XXXXXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#0B1017] border border-[#223143] focus:border-[#C58F72] rounded-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Date and Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-medium">التاريخ المفضل:</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-[#0B1017] border border-[#223143] focus:border-[#C58F72] rounded-xl py-2 px-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-medium">الوقت التقريبي:</label>
                  <select
                    value={form.timeSlot}
                    onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                    className="w-full bg-[#0B1017] border border-[#223143] focus:border-[#C58F72] rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none"
                  >
                    <option value="9:00 AM">صباحاً: ٩:٠٠ ص - ١١:٠٠ ص</option>
                    <option value="12:00 PM">ظهراً: ١٢:٠٠ م - ٢:٠٠ م</option>
                    <option value="5:00 PM">مساءً: ٥:٠٠ م - ٧:٠٠ م</option>
                    <option value="8:00 PM">مساءً: ٨:٠٠ م - ١٠:٠٠ م</option>
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-medium">نوع المساحة والملاحظات:</label>
                <textarea
                  rows={2}
                  placeholder="أبعاد المجلس، موكيت أو سجاد، تفضيل ألوان معينة..."
                  value={form.specialRequests}
                  onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                  className="w-full bg-[#0B1017] border border-[#223143] focus:border-[#C58F72] rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C58F72] to-[#B87B5B] hover:brightness-110 text-white font-bold text-sm shadow-[0_4px_15px_rgba(197,143,114,0.35)] transition-all"
                >
                  تأكيد حجز الموعد
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>تأكيد فوري وتنسيق مباشر مع إدارة الفرع.</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

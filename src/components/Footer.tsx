import React from 'react';
import {
  Droplets,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  Heart,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#143345] text-white pt-16 pb-12 border-t border-[#278BCB]/20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#58C9AD] to-[#278BCB] flex items-center justify-center text-white shadow-soft-1">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white">بیبی‌نوز</span>
                <span className="text-xs font-bold text-[#69C5E8] mr-2 font-en-display">
                  BabyNose
                </span>
                <div className="text-[11px] text-slate-400">
                  سامانه جامع مراقبت تنفسی و پاکسازی بینی نوزاد
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              بیبی‌نوز با هدف ارتقای سلامت نوزادان و کاهش استرس والدین، نسل جدید تجهیزات
              مراقبت تنفسی و سرم سالین ایزوتونیک را با رعایت بالاترین استانداردهای پزشکی
              اروپا و نظارت متخصصین اطفال ارائه می‌دهد.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#58C9AD] font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>دارای تاییدیه CE پزشکی</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#69C5E8] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>۱۰۰٪ مدیکال گرید</span>
              </div>
            </div>
          </div>

          {/* Col 2: Clinical Tools Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white mb-4 border-b border-white/10 pb-2">
              ابزارهای بالینی و تشخیصی
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="#mucus-guide"
                  className="hover:text-[#58C9AD] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58C9AD]" />
                  <span>راهنمای تشخیصی رنگ و بافت مخاط</span>
                </a>
              </li>
              <li>
                <a
                  href="#dosage-calculator"
                  className="hover:text-[#58C9AD] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58C9AD]" />
                  <span>محاسبه‌گر دوز سرم سالین بر اساس سن</span>
                </a>
              </li>
              <li>
                <a
                  href="#suction-guide"
                  className="hover:text-[#58C9AD] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58C9AD]" />
                  <span>راهنمای انتخاب قدرت مکش و سری‌ها</span>
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  className="hover:text-[#58C9AD] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58C9AD]" />
                  <span>جدول مقایسه روش‌های سنتی و نوین</span>
                </a>
              </li>
              <li>
                <a
                  href="#step-guide"
                  className="hover:text-[#58C9AD] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58C9AD]" />
                  <span>روش ۴ مرحله‌ای شستشوی بدون درد</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Products & Support */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white mb-4 border-b border-white/10 pb-2">
              محصولات و سفارش
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#products" className="hover:text-[#58C9AD] transition-colors">
                  فین‌گیر برقی بیبی‌نوز پرو
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#58C9AD] transition-colors">
                  پوار دستی ارگونومیک
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#58C9AD] transition-colors">
                  قطره سالین استریل ۳۰ عددی
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#58C9AD] transition-colors">
                  کیت جامع سیسمونی تنفسی
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#58C9AD] transition-colors">
                  سوالات متداول والدین
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Helpline & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white mb-4 border-b border-white/10 pb-2">
              پشتیبانی و خط بالینی نوزاد
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#58C9AD] shrink-0" />
                <span>خط پاسخگویی شبانه‌روزی: ۰۲۱-۸۸۲۴۵۰۹۰</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#69C5E8] shrink-0" />
                <span dir="ltr">support@babynose.ir</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>تهران، خیابان ولیعصر، برج سلامت کودکان، طبقه ۴</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#58C9AD] text-[#002019] hover:bg-[#46be9f] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-mint-glow"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>درخواست مشاوره فوری با پزشک</span>
              </button>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-slate-400 space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[11px] text-slate-300 leading-relaxed text-right">
            <strong>سلب مسئولیت پزشکی:</strong> اطلاعات و ابزارهای ارائه شده در وب‌سایت
            بیبی‌نوز صرفاً جهت ارتقای آگاهی والدین و بر اساس پروتکل‌های معتبر طب اطفال تدوین
            گردیده است. در صورت بروز علائم حاد تنفسی، تب مداوم بالای ۳۸ درجه یا تنگی نفس شدید،
            مراجعه فوری به متخصص اطفال یا اورژانس بیمارستان الزامی می‌باشد.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
            <div>
              تمامی حقوق مادی و معنوی این سامانه متعلق به برند تجاری بیبی‌نوز (BabyNose) می‌باشد. © ۱۴۰۳ - ۲۰۲۶
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span>طراحی‌شده برای سلامتی و تنفس پاک نوزادان ایران</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import {
  Droplets,
  Clock,
  Wind,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

export const StepGuide: React.FC = () => {
  const steps = [
    {
      step: '۱',
      title: 'چکاندن قطره سالین استریل (سدیم کلرید ۰.۹٪)',
      time: 'زمان: ۱۰ ثانیه',
      desc: 'سر نوزاد را به آرامی کمی به عقب متمایل کنید. در هر سوراخ بینی ۱ الی ۲ قطره سالین بدون سوزش بیبی‌نوز بچکانید.',
      tip: 'هرگز سر نوزاد را بیش از حد به عقب نبرید تا مایع وارد حلق نشود.',
      icon: Droplets,
      color: '#278BCB',
      bg: '#EAF7FC',
    },
    {
      step: '۲',
      title: 'صبر ۳۰ تا ۶۰ ثانیه‌ای برای نرم‌شدن ترشحات',
      time: 'زمان: ۳۰ الی ۶۰ ثانیه',
      desc: 'محلول سالین دیواره‌های سخت موکوس و ترشحات چسبناک را شل و حل می‌کند تا تخلیه بدون کمترین کشیدگی انجام شود.',
      tip: 'اگر صدای تنفس سبک‌تر شد یا ترشحات روان شدند، آماده مرحله بعد هستید.',
      icon: Clock,
      color: '#006781',
      bg: '#def0ff',
    },
    {
      step: '۳',
      title: 'تخلیه ملایم با فین‌گیر در زاویه استاندارد',
      time: 'زمان: ۵ الی ۱۰ ثانیه',
      desc: 'نوک سیلیکونی را به آرامی و مایل در ورودی بینی قرار دهید. سوراخ دیگر را با انگشت مسدود نکنید. مکش را روی سطح ۱ یا ۲ شروع کنید.',
      tip: 'حرکات ملایم چرخشی در دهانه مجرا برای هدایت آسان ترشحات کفایت می‌کند.',
      icon: Wind,
      color: '#58C9AD',
      bg: '#DDF5EC',
    },
    {
      step: '۴',
      title: 'شستشو و استریل‌سازی بهداشتی سری سیلیکونی',
      time: 'زمان: ۲۰ ثانیه',
      desc: 'مخزن ترشحات و سری سیلیکونی را با یک چرخش باز کرده و با آب گرم و صابون بشویید. قطعات در برابر آب جوش کاملاً مقاوم هستند.',
      tip: 'شیر ضدبرگشت مانع ورود مخاط به موتور می‌شود، بدنه اصلی را درون آب نیندازید.',
      icon: RotateCcw,
      color: '#006b58',
      bg: '#DDF5EC',
    },
  ];

  return (
    <section id="step-guide" className="py-16 sm:py-24 bg-[#F5F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF5EC] text-[#006b58] text-xs font-bold mb-3 border border-[#58C9AD]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>پروتکل طلایی پزشکان اطفال</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#19384A]">
            روش ۴ مرحله‌ای شستشو و پاکسازی ایمن بینی نوزاد
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
            دستورالعمل گام‌به‌گام برای پاکسازی بدون اشک، بدون مقاومت نوزاد و بدون آسیب به بافت ظریف تنفسی.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-6 sm:p-7 border border-slate-200/80 shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 flex flex-col justify-between text-right relative"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#19384A] text-white flex items-center justify-center text-sm font-black">
                      {item.step}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#278BCB] bg-[#EAF7FC] px-2.5 py-1 rounded-full">
                    {item.time}
                  </span>

                  <h3 className="text-base font-bold text-[#19384A] mt-3 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Golden Tip */}
                <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-[11px] text-[#006b58] bg-[#DDF5EC]/50 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006b58] shrink-0 mt-0.5" />
                  <span className="leading-tight">{item.tip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video / Demonstration Banner Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#19384A] via-[#143345] to-[#004e63] rounded-3xl p-6 sm:p-8 text-white shadow-soft-3 flex flex-col md:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#58C9AD] text-[#002019]">
              آموزش ویدیویی رایگان
            </span>
            <h4 className="text-lg sm:text-xl font-bold">
              مشاهده فیلم عملی پاکسازی بینی نوزاد ۳ هفته‌ای توسط سرپرستار بخش اطفال
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              مشاهده نحوه صحیح در آغوش گرفتن نوزاد، زاویه جای‌گذاری سری سیلیکونی و تکنیک آرام‌سازی در ۳ دقیقه.
            </p>
          </div>

          <a
            href="#dosage-calculator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-[#19384A] hover:bg-[#EAF7FC] transition-colors shrink-0 shadow-soft-2"
          >
            <span>محاسبه دوز برای نوزاد من</span>
          </a>
        </div>
      </div>
    </section>
  );
};

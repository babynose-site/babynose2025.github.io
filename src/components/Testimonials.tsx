import React from 'react';
import { Star, ShieldCheck, Heart, Quote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const doctors = [
    {
      name: 'دکتر مریم سلیمانی',
      role: 'فوق‌تخصص ریه و آلرژی کودکان و نوزادان',
      hospital: 'مرکز طبی کودکان، دانشیار دانشگاه علوم پزشکی',
      quote:
        'گرفتگی بینی در نوزادان زیر یک سال منجر به بدخلقی، قطع تغذیه شیر مادر و در موارد حاد عفونت گوش میانی (اوتیت) می‌شود. سیستم بیبی‌نوز به دلیل استاندارد مکش زیر ۶۵ کیلوپاسکال و سری سیلیکونی بدون زاویه تیز، تنها ابزاری است که من با اطمینان کامل به والدین تجویز می‌کنم.',
    },
    {
      name: 'دکتر علیرضا رادمنش',
      role: 'متخصص نوزادان و طب کودک (Pediatrician)',
      hospital: 'بخش مراقبت‌های ویژه نوزادان (NICU)',
      quote:
        'بزرگ‌ترین اشتباه والدین استفاده از گوش‌پاک‌کن یا پوارهای کهنه پلاستیکی است که فشار ناگهانی به بافت عروقی وارد می‌کند. ترکیب قطره سالین ایزوتونیک با فین‌گیر سایلنت بیبی‌نوز استرس مادر و نوزاد را به صفر رسانده است.',
    },
  ];

  const parentReviews = [
    {
      name: 'سارا معتمدی',
      baby: 'مادر رادین (نوزاد ۲ ماهه)',
      text: 'پسرم به خاطر سرماخوردگی شب‌ها اصلاً نمی‌تونست سینه رو بگیره و گریه می‌کرد. شب اول با ۲ قطره سالین و سطح ۱ بیبی‌نوز بینیش کاملاً باز شد و تا صبح راحت خوابید. صدای دستگاه واقعاً کمه و بیدارش نمی‌کنه.',
      rating: 5,
    },
    {
      name: 'مهدی کشاورز',
      baby: 'پدر آوا (شیرخوار ۷ ماهه)',
      text: 'سری‌های سیلیکونیش خیلی باکیفیت و نرم هستن. با آب جوش چند بار شستیم و هیچ بویی نگرفته. کیت کامل رو خریدیم که پوار دستی هم داره و برای مسافرت عالیه.',
      rating: 5,
    },
    {
      name: 'نیلوفر فتاحی',
      baby: 'مادر دوقلوها (۴ ماهه)',
      text: 'بهترین خریدی که تو سیسمونی داشتم همین بیبی‌نوز پرو بود. پوار دستی قبلیمون داخلش جرم می‌گرفت ولی این کاملاً قطعاتش باز میشه و شسته میشه.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF7FC] text-[#278BCB] text-xs font-bold mb-3 border border-[#278BCB]/30">
            <Heart className="w-3.5 h-3.5 text-[#278BCB]" />
            <span>اعتماد جامعه پزشکی و آرامش بیش از ۱۵,۰۰۰ خانواده</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#19384A]">
            دیدگاه پزشکان اطفال و تجربه واقعی مادران
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
            گواهی بالینی متخصصان برجسته کودکان در کنار رضایت والدینی که تنفس آسوده را به فرزندشان هدیه داده‌اند.
          </p>
        </div>

        {/* Doctor Endorsements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#F5F8FA] to-[#EAF7FC]/60 rounded-3xl p-7 border border-[#278BCB]/20 shadow-soft-1 text-right relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#278BCB]/30 mb-3" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-6">
                  {doc.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#DDF5EC] text-[#006b58] font-black text-sm flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#19384A]">{doc.name}</div>
                  <div className="text-xs text-[#006b58] font-semibold">{doc.role}</div>
                  <div className="text-[11px] text-slate-400">{doc.hospital}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Reviews Carousel/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parentReviews.map((rev, index) => (
            <div
              key={index}
              className="bg-[#F5F8FA] rounded-2xl p-6 border border-slate-200/70 shadow-soft-1 text-right flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#006b58] bg-[#DDF5EC] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    خریدار تاییدشده
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60">
                <div className="text-xs font-bold text-[#19384A]">{rev.name}</div>
                <div className="text-[11px] text-slate-400">{rev.baby}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

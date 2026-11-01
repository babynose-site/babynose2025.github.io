import React from 'react';
import {
  ShieldCheck,
  Droplets,
  RotateCcw,
  Sparkles,
  HeartHandshake,
  Check,
} from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'مکش کالیبره‌شده بالینی',
      subtitle: 'حفاظت قطعی از بافت مویرگی',
      desc: 'محدوده فشار تنظیم‌شده بین ۲۵ تا ۶۵ کیلوپاسکال مانع از تحریک مخاط ظریف نوزاد و خون‌دماغ می‌شود.',
      color: '#58C9AD',
      bg: '#DDF5EC',
    },
    {
      icon: Droplets,
      title: '۱۰۰٪ سیلیکون مدیکال‌گرید',
      subtitle: 'نرم‌ترین بافت تماس با بینی',
      desc: 'فاقد BPA، لاتکس و مواد نفتی حساسیت‌زا؛ سازگار با پوست فوق‌العاده حساس نوزادان نارس و تازه متولدشده.',
      color: '#278BCB',
      bg: '#EAF7FC',
    },
    {
      icon: RotateCcw,
      title: 'محفظه ضداستفراغ و برگشت',
      subtitle: 'بهداشت کامل و شستشوی سریع',
      desc: 'جداسازی ۳ ثانیه‌ای تمام قطعات در تماس با ترشحات و قابلیت استریل کامل با آب جوش یا بخار.',
      color: '#006781',
      bg: '#def0ff',
    },
    {
      icon: Sparkles,
      title: 'موتور بی‌صدا و بدون لرزش',
      subtitle: 'بدون ترساندن یا بیدار کردن نوزاد',
      desc: 'صدای زمزمه‌مانند زیر ۴۲ دسی‌بل همراه با نور ملایم شبانه برای تخلیه آرام در طول خواب شب.',
      color: '#006b58',
      bg: '#DDF5EC',
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-[#278BCB]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF7FC] text-[#278BCB] text-xs font-bold mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>چهار اصل طلایی در مراقبت تنفسی نوزاد</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#19384A]">
            چرا متخصصین اطفال بیبی‌نوز را تجویز می‌کنند؟
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            ترکیب استانداردهای بیمارستانی با راحتی و امنیت کامل برای استفاده خانگی توسط والدین
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F8FA] rounded-2xl p-6 border border-slate-200/70 hover:border-[#58C9AD]/50 transition-all duration-300 hover:shadow-soft-2 group text-right flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: item.bg, color: item.color }}
                  >
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base font-bold text-[#19384A] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#278BCB] mb-2.5">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-[#006b58]">
                  <Check className="w-3.5 h-3.5" />
                  <span>استاندارد مدیکال اروپایی</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

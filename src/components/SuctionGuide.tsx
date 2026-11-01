import React, { useState } from 'react';
import { Wind, Shield, Baby, Check, Sparkles, Layers } from 'lucide-react';

interface SuctionLevel {
  id: number;
  name: string;
  age: string;
  kpa: string;
  pressurePercent: number;
  tipName: string;
  tipShape: string;
  description: string;
  idealFor: string;
}

export const SuctionGuide: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);

  const levels: SuctionLevel[] = [
    {
      id: 1,
      name: 'سطح ۱: فوق‌العاده ملایم (Soft Care)',
      age: 'نوزادان از بدو تولد تا ۳ ماهگی',
      kpa: '۲۵ الی ۳۵ کیلوپاسکال',
      pressurePercent: 38,
      tipName: 'سری کدوحلوایی نوزادی (Gourd Tip)',
      tipShape: 'سری پیازی با دهانه بسیار باریک که مانع ورود عمیق به مجرا می‌شود.',
      description:
        'مکش با حداقل فشار برای نوزادان نارس یا روزهای اول تولد؛ تخلیه آرام ترشحات بدون احساس ناخوشایند فشار منفی.',
      idealFor: 'ترشحات آبکی، گرفتگی خفیف بدو تولد، نوزاد خوابیده',
    },
    {
      id: 2,
      name: 'سطح ۲: متعادل و پیوسته (Standard Flow)',
      age: 'شیرخواران ۳ تا ۱۲ ماهگی',
      kpa: '۴۰ الی ۵۰ کیلوپاسکال',
      pressurePercent: 68,
      tipName: 'سری قیفی استاندارد (Funnel Tip)',
      tipShape: 'قطر متوسط منطبق بر اندازه دهانه سوراخ بینی شیرخوار.',
      description:
        'جریان مکش یکدست برای ترشحات چسبنده و موکوس غلیظ حاصل از سرماخوردگی فصلی.',
      idealFor: 'پیش از تغذیه با شیر مادر یا شیشه، قبل از خواب نیمروزی',
    },
    {
      id: 3,
      name: 'سطح ۳: عمیق و پرقدرت (Deep Clean)',
      age: 'کودکان بالای ۱ سال و نوپایان',
      kpa: '۵۵ الی ۶۵ کیلوپاسکال',
      pressurePercent: 100,
      tipName: 'سری مخروطی زاویه‌دار (Conical Tip)',
      tipShape: 'سری زاویه‌دار بلندتر جهت جمع‌آوری ترشحات غلیظ بخش پشتی سینوس نوزاد.',
      description:
        'حداکثر قدرت ایمن مطابق گواهی استاندارد EN ISO 10079-1 برای تخلیه کامل بدون ریسک آسیب مویرگی.',
      idealFor: 'ترشحات بسیار متراکم سبز/زرد، آلودگی‌های بعد از بازی در فضای باز',
    },
  ];

  const current = levels.find((l) => l.id === activeLevel) || levels[0];

  return (
    <section id="suction-guide" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF5EC] text-[#006b58] text-xs font-bold mb-3 border border-[#58C9AD]/40">
            <Wind className="w-3.5 h-3.5" />
            <span>تنظیمات فشار کالیبره‌شده بالینی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#19384A]">
            راهنمای تنظیم قدرت مکش و انتخاب سری سیلیکونی
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
            موتور بیبی‌نوز پرو برای محافظت از عروق ظریف بینی به حداکثر ۶۵ کیلوپاسکال محدود شده است.
            سطح مکش مناسب سن کودک خود را انتخاب نمایید.
          </p>
        </div>

        {/* Radio Pills Connected Capsule Container */}
        <div className="max-w-2xl mx-auto bg-[#F5F8FA] p-1.5 rounded-full border border-slate-200 shadow-inner flex items-center mb-10">
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id)}
              className={`flex-1 py-3 px-2 sm:px-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer text-center ${
                activeLevel === lvl.id
                  ? 'bg-[#278BCB] text-white shadow-soft-2 ring-2 ring-[#278BCB]/25'
                  : 'text-slate-600 hover:text-[#19384A]'
              }`}
            >
              <span>سطح {lvl.id}</span>
              <span className="hidden sm:inline text-xs font-normal opacity-90 mr-1.5">
                ({lvl.kpa})
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Visual Display Card */}
        <div className="bg-[#F5F8FA] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft-1 text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Gauge on the Right (in RTL) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#278BCB] bg-[#EAF7FC] px-3 py-1 rounded-full border border-[#278BCB]/20">
                    {current.age}
                  </span>
                  <h3 className="text-xl font-black text-[#19384A] mt-2">
                    {current.name}
                  </h3>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-[#006b58] font-en-display">
                    {current.kpa}
                  </div>
                  <div className="text-[11px] text-slate-400">قدرت مکش کالیبره</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {current.description}
              </p>

              {/* Animated Progress Bar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-soft-1 space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#19384A]">
                  <span>شاخص فشار منفی مجاز (Negative Pressure Index):</span>
                  <span className="text-[#278BCB]">{current.pressurePercent}% ایمنی بالینی</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-l from-[#58C9AD] to-[#278BCB] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${current.pressurePercent}%` }}
                  />
                  {/* Safety Max Indicator Line */}
                  <div
                    className="absolute top-0 bottom-0 right-[100%] border-r-2 border-[#EB5757] z-10"
                    title="حداکثر سقف استاندارد ایمنی: ۶۵ کیلوپاسکال"
                  />
                </div>

                <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                  <span>حداقل ملایم (۲۰ kPa)</span>
                  <span>متوسط استاندارد (۴۵ kPa)</span>
                  <span className="text-[#006b58] font-bold">سقف مجاز پزشکی (۶۵ kPa)</span>
                </div>
              </div>

              {/* Ideal Use Case */}
              <div className="flex items-center gap-2 text-xs text-slate-700 bg-[#EAF7FC] p-3 rounded-xl border border-[#278BCB]/20">
                <Sparkles className="w-4 h-4 text-[#278BCB] shrink-0" />
                <div>
                  <span className="font-bold text-[#19384A]">بهترین زمان استفاده: </span>
                  <span>{current.idealFor}</span>
                </div>
              </div>
            </div>

            {/* Silicone Tip Showcase Visual Card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-soft-2 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#DDF5EC] to-[#EAF7FC] flex items-center justify-center mb-4 relative shadow-inner">
                {/* Visual SVG Tip Icon according to Level */}
                <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
                  {activeLevel === 1 ? (
                    // Bulbous Gourd tip
                    <path
                      d="M40 10 C32 10 26 24 26 38 C26 50 32 58 40 58 C48 58 54 50 54 38 C54 24 48 10 40 10Z"
                      fill="#58C9AD"
                      opacity="0.85"
                    />
                  ) : activeLevel === 2 ? (
                    // Funnel tip
                    <path
                      d="M40 8 L24 46 C24 54 32 60 40 60 C48 60 56 54 56 46 Z"
                      fill="#278BCB"
                      opacity="0.85"
                    />
                  ) : (
                    // Long Conical tip
                    <path
                      d="M40 6 L28 54 C28 62 34 64 40 64 C46 64 52 62 52 54 Z"
                      fill="#006781"
                      opacity="0.85"
                    />
                  )}
                  <circle cx="40" cy="18" r="3" fill="#FFFFFF" />
                </svg>
                <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#19384A] text-white">
                  سری توصیه شده
                </span>
              </div>

              <h4 className="text-base font-bold text-[#19384A] mb-1">
                {current.tipName}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                {current.tipShape}
              </p>

              <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-bold text-[#006b58]">
                <Check className="w-4 h-4" />
                <span>۱۰۰٪ سیلیکون بهداشتی فودگرید قابل جوشاندن</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  Droplets,
  Clock,
  Wind,
  Info,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Baby,
} from 'lucide-react';
import { DOSAGE_CHART } from '../data/mockData';

type AgeKey = '0-3m' | '3-12m' | '1-3y' | '3y+';
type ConditionKey = 'routine' | 'congestion' | 'cold' | 'dryness';

export const DosageCalculator: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<AgeKey>('0-3m');
  const [selectedCondition, setSelectedCondition] = useState<ConditionKey>('congestion');

  const ageData = DOSAGE_CHART[selectedAge];

  const conditionAdjustments: Record<
    ConditionKey,
    { title: string; multiplierNote: string; badge: string; alertLevel: 'normal' | 'caution' | 'alert' }
  > = {
    routine: {
      title: 'شستشوی روتین روزانه',
      multiplierNote: '۱ بار در روز پیش از خواب شبانه جهت پاکسازی گردوغبار و آلاینده‌ها',
      badge: 'روتین بهداشتی',
      alertLevel: 'normal',
    },
    congestion: {
      title: 'احتقان و گرفتگی قبل از شیردهی و خواب',
      multiplierNote: '۲ تا ۳ بار در روز؛ ۱۰ الی ۱۵ دقیقه پیش از هر نوبت شیردهی برای تنفس راحت نوزاد',
      badge: 'توصیه تغذیه سالم',
      alertLevel: 'caution',
    },
    cold: {
      title: 'سرماخوردگی و ترشحات متراکم',
      multiplierNote: '۳ تا ۴ بار در شبانه‌روز؛ با فاصله ۴ تا ۶ ساعت همراه با تخلیه فین‌گیر بیبی‌نوز',
      badge: 'پروتکل درمانی سرماخوردگی',
      alertLevel: 'alert',
    },
    dryness: {
      title: 'خشکی مخاط ناشی از شوفاژ یا آلودگی هوا',
      multiplierNote: '۲ بار در روز؛ بدون نیاز به مکش، فقط مرطوب‌سازی با قطره و استفاده از بخور سرد',
      badge: 'رطوبت‌رسانی مخاطی',
      alertLevel: 'normal',
    },
  };

  const conditionInfo = conditionAdjustments[selectedCondition];

  // Visual Droplet Bar steps
  const steps = [
    { label: 'آماده‌سازی سالین', active: true },
    { label: 'چکاندن در هر مجرا', active: true },
    { label: 'صبر ۳۰ تا ۶۰ ثانیه', active: true },
    { label: 'تخلیه با فین‌گیر', active: selectedCondition !== 'dryness' },
    { label: 'ضدعفونی سری', active: true },
  ];

  return (
    <section id="dosage-calculator" className="py-14 sm:py-20 bg-[#F5F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF5EC] text-[#006b58] text-xs font-bold mb-3 border border-[#58C9AD]/40">
            <Droplets className="w-3.5 h-3.5" />
            <span>ابزار اختصاصی بالینی بیبی‌نوز</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#19384A]">
            محاسبه‌گر هوشمند دوز قطره فیزیولوژیک و دفعات مصرف
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
            بر اساس سن نوزاد و وضعیت تنفسی فعلی، دوز دقیق سرم سالین ایزوتونیک و شدت مکش ایمن را دریافت کنید.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft-2 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls (Age & Condition Selector) */}
            <div className="lg:col-span-6 space-y-6 text-right">
              {/* Step 1: Age Selector */}
              <div>
                <label className="block text-xs font-bold text-[#19384A] uppercase tracking-wider mb-2.5">
                  ۱. سن نوزاد یا کودک را انتخاب کنید:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(
                    [
                      { id: '0-3m', label: '۰ تا ۳ ماه', sub: 'نوزاد بدو تولد' },
                      { id: '3-12m', label: '۳ تا ۱۲ ماه', sub: 'شیرخوار' },
                      { id: '1-3y', label: '۱ تا ۳ سال', sub: 'کودک نوپا' },
                      { id: '3y+', label: 'بالای ۳ سال', sub: 'کودک خردسال' },
                    ] as const
                  ).map((age) => (
                    <button
                      key={age.id}
                      onClick={() => setSelectedAge(age.id)}
                      className={`p-3 rounded-2xl text-right transition-all cursor-pointer border text-xs sm:text-sm ${
                        selectedAge === age.id
                          ? 'bg-[#EAF7FC] border-[#278BCB] text-[#004971] shadow-soft-1 ring-2 ring-[#278BCB]/20 font-bold'
                          : 'bg-[#F5F8FA] border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold">{age.label}</span>
                        {selectedAge === age.id && (
                          <span className="w-2 h-2 rounded-full bg-[#278BCB]" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {age.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Current Condition Selector */}
              <div>
                <label className="block text-xs font-bold text-[#19384A] uppercase tracking-wider mb-2.5">
                  ۲. وضعیت تنفسی فعلی نوزاد چیست؟
                </label>
                <div className="space-y-2">
                  {(
                    [
                      { id: 'congestion', label: 'احتقان و خِس‌خِس پیش از شیردهی یا خواب' },
                      { id: 'cold', label: 'سرماخوردگی، آبریزش متراکم و گرفتگی مداوم' },
                      { id: 'dryness', label: 'خشکی بینی و پوسته شدن مخاط به علت هوای اتاق' },
                      { id: 'routine', label: 'پاکسازی معمولی روزانه و بهداشت محیط' },
                    ] as const
                  ).map((cond) => (
                    <button
                      key={cond.id}
                      onClick={() => setSelectedCondition(cond.id)}
                      className={`w-full p-3 rounded-xl text-right transition-all cursor-pointer border text-xs sm:text-sm flex items-center justify-between ${
                        selectedCondition === cond.id
                          ? 'bg-[#DDF5EC] border-[#58C9AD] text-[#005242] shadow-soft-1 font-bold ring-2 ring-[#58C9AD]/20'
                          : 'bg-[#F5F8FA] border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{cond.label}</span>
                      <CheckCircle
                        className={`w-4 h-4 shrink-0 mr-2 ${
                          selectedCondition === cond.id
                            ? 'text-[#006b58]'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Segmented Saline Dosage Meter Bar */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#19384A] mb-2">
                  <span>مراحل استاندارد پروتکل سالین:</span>
                  <span className="text-[#006b58]">{conditionInfo.badge}</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        step.active ? 'bg-[#58C9AD]' : 'bg-slate-200'
                      }`}
                      title={step.label}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-medium">
                  <span>قطره سالین</span>
                  <span>انتظار</span>
                  <span>تخلیه</span>
                  <span>استریل</span>
                </div>
              </div>
            </div>

            {/* Results Display Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#EAF7FC] via-white to-[#DDF5EC]/50 rounded-2xl p-6 sm:p-7 border border-[#278BCB]/20 text-right space-y-5 shadow-soft-2">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#58C9AD] text-white flex items-center justify-center font-bold">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#19384A]">
                      نسخه راهنمای بالینی نوزاد شما
                    </h3>
                    <p className="text-xs text-slate-500">
                      رده: {ageData.title}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#278BCB] border border-[#278BCB]/20 shadow-soft-1">
                  سدیم کلرید ۰.۹٪ ایزوتونیک
                </span>
              </div>

              {/* Key Dosage Numbers */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-soft-1 text-right">
                  <div className="text-xs text-slate-500 mb-1">دوز پیشنهادی در هر سوراخ:</div>
                  <div className="text-lg font-black text-[#006b58]">
                    {ageData.routineDrops}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-soft-1 text-right">
                  <div className="text-xs text-slate-500 mb-1">دفعات مجاز در شبانه‌روز:</div>
                  <div className="text-lg font-black text-[#278BCB]">
                    {ageData.frequency}
                  </div>
                </div>
              </div>

              {/* Timing & Recommendation */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-700 bg-white/80 p-3 rounded-xl border border-slate-200/60">
                  <Clock className="w-4 h-4 text-[#278BCB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#19384A]">بهترین زمان مصرف: </span>
                    <span>{ageData.bestTime}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-700 bg-white/80 p-3 rounded-xl border border-slate-200/60">
                  <Wind className="w-4 h-4 text-[#006b58] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#19384A]">قدرت مکش و سری مجاز: </span>
                    <span>{ageData.suctionLevel} با {ageData.tipType}</span>
                  </div>
                </div>
              </div>

              {/* Clinical Warning / Pediatric Note */}
              <div className="p-3.5 rounded-xl bg-[#FFF9E6] border border-[#FF9F43]/40 text-xs text-[#995d00] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#FF9F43] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>نکته تخصصی پزشک اطفال:</strong> {ageData.clinicalAdvice}{' '}
                  {conditionInfo.multiplierNote}
                </p>
              </div>

              {/* Safety Tag */}
              <div className="text-center pt-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-[#58C9AD]" />
                  بر اساس گایدلاین رسمی انجمن طب کودکان (Pediatric ENT Guidelines)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

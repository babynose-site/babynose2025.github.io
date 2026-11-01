import React from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Check,
  X,
  AlertTriangle,
  HelpCircle,
  Award,
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/mockData';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF7FC] text-[#278BCB] text-xs font-bold mb-3 border border-[#278BCB]/30">
            <Award className="w-3.5 h-3.5" />
            <span>مقایسه ایمنی و کارایی بالینی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#19384A]">
            چرا روش‌های سنتی پاکسازی برای نوزاد خطرناک هستند؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
            بررسی علمی تفاوت سیستم بهداشت تنفسی بیبی‌نوز با پوارهای قدیمی گلابی‌شکل و گوش‌پاک‌کن.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-soft-2">
          <table className="w-full text-right text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#19384A] text-white">
                <th className="p-4 sm:p-5 font-bold w-1/4 rounded-tr-3xl">
                  شاخص بالینی و بهداشتی
                </th>
                <th className="p-4 sm:p-5 font-bold w-1/3 bg-[#006b58] text-white border-x border-[#58C9AD]/30">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#58C9AD] animate-pulse" />
                    <span>فین‌گیر تخصصی بیبی‌نوز (BabyNose)</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-bold w-1/4 text-slate-300">
                  پوارهای پلاستیکی سنتی (گلابی‌شکل)
                </th>
                <th className="p-4 sm:p-5 font-bold w-1/6 text-slate-300 rounded-tl-3xl">
                  گوش‌پاک‌کن / روش‌های دستی
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 bg-white">
              {COMPARISON_DATA.map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-slate-50/70 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F5F8FA]/60'
                  }`}
                >
                  {/* Feature Label */}
                  <td className="p-4 sm:p-5 font-bold text-[#19384A] border-l border-slate-200/60">
                    {row.feature}
                  </td>

                  {/* BabyNose Column (Highlighted with Mint/Green) */}
                  <td className="p-4 sm:p-5 font-semibold text-[#005242] bg-[#DDF5EC]/35 border-x border-[#58C9AD]/20">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#006b58] shrink-0 mt-0.5" />
                      <span>{row.babynose}</span>
                    </div>
                  </td>

                  {/* Traditional Bulb */}
                  <td className="p-4 sm:p-5 text-slate-600 border-l border-slate-200/60">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#FF9F43] shrink-0 mt-0.5" />
                      <span>{row.traditionalBulb}</span>
                    </div>
                  </td>

                  {/* Cotton Swab */}
                  <td className="p-4 sm:p-5 text-rose-700 bg-rose-50/20">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-[#EB5757] shrink-0 mt-0.5" />
                      <span>{row.cottonSwab}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Bottom Advisory */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#EAF7FC] border border-[#278BCB]/25 text-xs text-[#004971]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#278BCB] shrink-0" />
            <span>
              بر اساس توصیه رسمی آکادمی اطفال آمریکا (AAP) و راهنمای بهداشت نوزادان بیمارستان‌های کشور
            </span>
          </div>
          <span className="font-bold text-[#006b58] bg-white px-3 py-1 rounded-full shadow-soft-1">
            ایمن برای نوزادان نارس (+0 ماه)
          </span>
        </div>
      </div>
    </section>
  );
};

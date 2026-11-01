import React, { useState } from 'react';
import {
  Droplets,
  AlertCircle,
  HelpCircle,
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { MUCUS_CONDITIONS } from '../data/mockData';

export const MucusGuide: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('yellow');

  const currentCondition =
    MUCUS_CONDITIONS.find((c) => c.id === selectedId) || MUCUS_CONDITIONS[0];

  return (
    <section id="mucus-guide" className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF7FC] text-[#278BCB] text-xs font-bold mb-3 border border-[#278BCB]/30">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>راهنمای تشخیصی بالینی والدین</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#19384A]">
            سنجش رنگ و بافت مخاط بینی نوزاد (Mucus Health Guide)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
            تغییر رنگ ترشحات بینی واکنش طبیعی سیستم ایمنی کودک است. رنگ ترشحات را لمس
            کنید تا پروتکل ایمن تخلیه و هشدارهای پزشک را مشاهده فرمایید.
          </p>
        </div>

        {/* Color Palette Selector Bar (Interactive Soft Touch Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {MUCUS_CONDITIONS.map((cond) => {
            const isSelected = selectedId === cond.id;
            return (
              <button
                key={cond.id}
                onClick={() => setSelectedId(cond.id)}
                className={`p-4 rounded-2xl transition-all duration-300 text-right border cursor-pointer flex flex-col justify-between h-36 ${
                  isSelected
                    ? 'border-[#278BCB] bg-gradient-to-b from-[#EAF7FC] to-white shadow-soft-2 ring-2 ring-[#278BCB]/30'
                    : 'border-slate-200/80 bg-[#F5F8FA] hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className="w-7 h-7 rounded-full shadow-inner border-2 border-white flex items-center justify-center"
                    style={{ backgroundColor: cond.colorCode }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#278BCB]" />
                  )}
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#19384A] line-clamp-1">
                    {cond.colorName}
                  </div>
                  <div className="text-[10px] text-slate-400 font-en-body mt-0.5">
                    {cond.latinColor}
                  </div>
                </div>

                <div
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-md inline-block self-start truncate max-w-full"
                  style={{
                    backgroundColor: `${cond.urgencyColor}18`,
                    color: cond.urgencyColor,
                  }}
                >
                  {cond.statusType === 'normal'
                    ? 'وضعیت طبیعی'
                    : cond.statusType === 'critical'
                    ? 'هشدار احتیاط'
                    : 'نیاز به پاکسازی'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Feedback Detail Container */}
        <div className="bg-[#F5F8FA] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft-1 text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Swatch Preview Box */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-soft-1 text-center">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-soft-2 border-4 border-white mb-4 relative"
                style={{ backgroundColor: currentCondition.colorCode }}
              >
                <Droplets className="w-10 h-10 text-white/80" />
                <span
                  className="absolute -bottom-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow"
                  style={{ backgroundColor: currentCondition.urgencyColor }}
                >
                  {currentCondition.urgency}
                </span>
              </div>

              <h4 className="text-lg font-black text-[#19384A]">
                ترشحات {currentCondition.colorName}
              </h4>
              <span className="text-xs text-slate-400 font-en-body">
                {currentCondition.latinColor}
              </span>

              <div className="mt-4 pt-3 border-t border-slate-100 w-full text-xs text-slate-600">
                <span className="font-bold text-[#19384A]">ارزیابی بالینی: </span>
                {currentCondition.status}
              </div>
            </div>

            {/* Diagnostic Details & Doctor Directives */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-soft-1">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#278BCB]" />
                  <span>دلیل فیزیولوژیک در نوزاد:</span>
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {currentCondition.description}
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-soft-1">
                <h5 className="text-xs font-bold text-[#006b58] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#58C9AD]" />
                  <span>پروتکل توصیه شده پاکسازی با بیبی‌نوز:</span>
                </h5>
                <p className="text-sm text-[#005242] leading-relaxed font-medium">
                  {currentCondition.recommendation}
                </p>
              </div>

              {/* Triage Alarm / Warning Box */}
              <div className="bg-[#FFF4F2] p-4 rounded-2xl border border-[#EB5757]/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#EB5757] shrink-0 mt-0.5" />
                <div className="text-xs text-[#93000a] leading-relaxed">
                  <strong>هشدار قرمز بالینی برای مراجعه به پزشک اطفال:</strong> اگر
                  ترشحات با تب بالاتر از ۳۸ درجه سانتی‌گراد، بی‌حالی، کاهش دفع ادرار نوزاد،
                  تنفس صدادار بیش از ۶۰ بار در دقیقه، یا امتناع کامل از شیردهی همراه شد، فوراً
                  به متخصص اطفال مراجعه فرمایید.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

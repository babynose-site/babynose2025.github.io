import React from 'react';
import {
  ShieldCheck,
  Droplets,
  Wind,
  CheckCircle2,
  VolumeX,
  Sparkles,
  ArrowDown,
  Layers,
  Heart,
  Baby,
} from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenDosageCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenDosageCalculator,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24">
      {/* Background Decorative Respiratory Mist Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#DDF5EC]/70 via-[#EAF7FC]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-gradient-to-tr from-[#69C5E8]/20 via-[#def0ff]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Right Column (Text in RTL): Headline, Medical Validation, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Clinical Pediatrist Verification Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5EC]/90 border border-[#58C9AD] text-[#005242] shadow-soft-1">
              <ShieldCheck className="w-4 h-4 text-[#006b58]" />
              <span className="text-xs font-bold tracking-tight">
                تاییدشده توسط انجمن علمی متخصصین اطفال و نوزادان
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#006b58]" />
              <span className="text-[11px] font-medium text-[#19384A]">
                استاندارد کلاس یک پزشکی اروپا
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-tight sm:leading-[1.25] text-[#19384A] tracking-tight">
              تنفس آزاد و خواب آرام{' '}
              <span className="relative inline-block text-[#006b58]">
                برای نوزاد دلبند شما
                <svg
                  className="absolute -bottom-2 right-0 w-full h-3 text-[#58C9AD]/40 -z-10"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
              سامانه تخصصی مراقبت تنفسی و پاکسازی ایمن بینی نوزاد؛ طراحی‌شده مطابق با
              آناتومی فوق‌العاده حساس مخاط نوزاد از بدو تولد (+0 ماهگی). تخلیه ملایم
              و بدون درد مخاط بینی، پیشگیری از عفونت گوش میانی و بهبود تغذیه با شیر مادر.
            </p>

            {/* Key Assurance Bullet Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="glass-badge px-3 py-1.5 rounded-full text-xs font-semibold text-[#19384A] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#58C9AD]" />
                <span>۱۰۰٪ سیلیکون مدیکال گرید بدون BPA</span>
              </div>
              <div className="glass-badge px-3 py-1.5 rounded-full text-xs font-semibold text-[#19384A] flex items-center gap-1.5">
                <VolumeX className="w-3.5 h-3.5 text-[#278BCB]" />
                <span>موتور سایلنت زیر ۴۲ دسی‌بل</span>
              </div>
              <div className="glass-badge px-3 py-1.5 rounded-full text-xs font-semibold text-[#19384A] flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#69C5E8]" />
                <span>همراه با سرم سالین ایزوتونیک استریل</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold bg-[#58C9AD] text-white hover:bg-[#46be9f] shadow-soft-2 hover:shadow-mint-glow transition-all duration-300 cursor-pointer active:scale-98"
              >
                <span>مشاهده محصولات و کیت جامع</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onOpenDosageCalculator}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-[#EAF7FC] text-[#278BCB] hover:bg-[#d8effa] border border-[#278BCB]/25 transition-all shadow-soft-1 cursor-pointer"
              >
                <Droplets className="w-4 h-4 text-[#278BCB]" />
                <span>محاسبه‌گر دوز سالین و قدرت مکش</span>
              </button>
            </div>

            {/* Pediatrician Quote Footnote */}
            <div className="pt-2 flex items-center gap-3 border-t border-slate-200/60 max-w-xl">
              <div className="w-9 h-9 rounded-full bg-[#DDF5EC] flex items-center justify-center text-[#006b58] font-bold text-xs shrink-0">
                MD
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                «نوزادان زیر ۶ ماه تنها از طریق بینی نفس می‌کشند. گرفتگی حتی ۱ میلی‌متر از مجرا،
                شیرخوردن و خواب شبانه را مختل می‌کند.» — <strong>دکتر مریم سلیمانی</strong>، متخصص اطفال
              </p>
            </div>
          </div>

          {/* Left Column (Visual Showcase in RTL): Asymmetrical Droplet Card with Product Mockup & Ambient Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Droplet Background Frame with stitch design curve: 3rem 3rem 1rem 3rem */}
            <div className="relative w-full max-w-[430px] bg-gradient-to-b from-[#ffffff] via-[#f7fbfe] to-[#def0ff] rounded-droplet p-6 sm:p-8 shadow-soft-3 border border-white/80">
              {/* Header inside showcase card */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EAF7FC] text-[#278BCB] border border-[#278BCB]/20">
                  کیت برتر تنفسی سال
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <span>★ ۴.۹</span>
                  <span className="text-slate-400 font-normal">(۳۸۴ نظر والدین)</span>
                </div>
              </div>

              {/* Central Illustrative Device & Respiratory Droplet Visual */}
              <div className="relative py-6 flex items-center justify-center">
                {/* Concentric Breathing Glow Rings */}
                <div className="absolute w-56 h-56 rounded-full bg-[#58C9AD]/15 animate-pulse" />
                <div className="absolute w-44 h-44 rounded-full bg-[#69C5E8]/20" />

                {/* Device SVG Graphic */}
                <div className="relative z-10 w-44 h-72 flex flex-col items-center justify-center filter drop-shadow-xl">
                  <svg
                    viewBox="0 0 160 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Soft Silicone Tip (Translucent droplet contour) */}
                    <path
                      d="M80 15 C72 15 66 28 66 42 C66 52 70 58 80 58 C90 58 94 52 94 42 C94 28 88 15 80 15Z"
                      fill="url(#tipGradient)"
                      stroke="#58C9AD"
                      strokeWidth="1.5"
                    />
                    <circle cx="80" cy="22" r="3.5" fill="#FFFFFF" opacity="0.8" />

                    {/* Anti-Reflux Clear Chamber */}
                    <rect
                      x="58"
                      y="58"
                      width="44"
                      height="38"
                      rx="8"
                      fill="url(#chamberGradient)"
                      stroke="#278BCB"
                      strokeWidth="1.5"
                    />
                    {/* Measurement marks on chamber */}
                    <line x1="62" y1="68" x2="68" y2="68" stroke="#278BCB" strokeWidth="1" strokeLinecap="round" />
                    <line x1="62" y1="76" x2="72" y2="76" stroke="#278BCB" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="62" y1="84" x2="68" y2="84" stroke="#278BCB" strokeWidth="1" strokeLinecap="round" />

                    {/* Main Ergonomic Body */}
                    <path
                      d="M52 96 C52 96 46 140 48 180 C50 220 62 245 80 245 C98 245 110 220 112 180 C114 140 108 96 108 96 Z"
                      fill="url(#bodyGradient)"
                      stroke="#BAC7D0"
                      strokeWidth="1.2"
                    />

                    {/* Soft Grip Accent Pad */}
                    <path
                      d="M60 120 C58 150 58 180 62 205 C70 208 90 208 98 205 C102 180 102 150 100 120 Z"
                      fill="#FFFFFF"
                      opacity="0.9"
                    />

                    {/* Digital Suction Indicator LED Lights */}
                    <circle cx="80" cy="138" r="4.5" fill="#58C9AD" />
                    <circle cx="80" cy="150" r="3.5" fill="#58C9AD" opacity="0.6" />
                    <circle cx="80" cy="162" r="3.5" fill="#BAC7D0" opacity="0.5" />

                    {/* Power / Level Control Button */}
                    <circle
                      cx="80"
                      cy="184"
                      r="9"
                      fill="#EAF7FC"
                      stroke="#278BCB"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M80 179 L80 185 M77 182 A3.5 3.5 0 1 0 83 182"
                      stroke="#278BCB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="tipGradient" x1="66" y1="15" x2="94" y2="58" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="1" stopColor="#DDF5EC" stopOpacity="0.85" />
                      </linearGradient>
                      <linearGradient id="chamberGradient" x1="58" y1="58" x2="102" y2="96" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EAF7FC" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#def0ff" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id="bodyGradient" x1="48" y1="96" x2="112" y2="245" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" />
                        <stop offset="0.7" stopColor="#F5F8FA" />
                        <stop offset="1" stopColor="#E2E8F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Saline Ampoule Floating Graphic */}
                <div className="absolute -bottom-2 -left-2 z-20 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-soft-2 border border-sky-100 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#EAF7FC] flex items-center justify-center text-[#278BCB]">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-bold text-[#19384A]">سرم سدیم کلرید ۰.۹٪</div>
                    <div className="text-[10px] text-slate-500">استریل، بدون ماده نگهدارنده</div>
                  </div>
                </div>

                {/* Floating Suction Level Badge */}
                <div className="absolute top-8 -right-3 z-20 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-soft-2 border border-emerald-100 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#DDF5EC] flex items-center justify-center text-[#006b58]">
                    <Wind className="w-4 h-4" />
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-bold text-[#005242]">مکش هوشمند ۳ حالته</div>
                    <div className="text-[10px] text-slate-500">۲۵ الی ۶۵ کیلوپاسکال</div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-4 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                <span className="text-slate-500">ویژه نوزادان از بدو تولد</span>
                <span className="font-bold text-[#006b58] bg-[#DDF5EC] px-2.5 py-1 rounded-full">
                  گارانتی طلایی ۱۸ ماهه
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

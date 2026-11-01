import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle, ShieldCheck, Clock } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [babyAge, setBabyAge] = useState('0-3m');
  const [issueType, setIssueType] = useState('congestion');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setParentName('');
    setPhoneNumber('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-right">
        <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80">
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#DDF5EC] text-[#006b58] rounded-full flex items-center justify-center mx-auto shadow-mint-glow">
                <CheckCircle className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-black text-[#19384A]">
                درخواست مشاوره بالینی ثبت شد
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                کارشناس پرستاری و مشاوره بالینی نوزادان بیبی‌نوز ظرف حداکثر ۱۵ دقیقه آینده با شماره <strong>{phoneNumber}</strong> تماس خواهند گرفت.
              </p>
              <div className="p-3 bg-[#EAF7FC] rounded-2xl text-xs text-[#278BCB] font-semibold flex items-center justify-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>ساعات پاسخگویی فوری: ۲۴ ساعته در ۷ روز هفته</span>
              </div>
              <button
                onClick={handleResetAndClose}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold bg-[#58C9AD] text-white hover:bg-[#46be9f]"
              >
                متشکرم، بستن پنجره
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF7FC] text-[#278BCB] flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#19384A]">
                    درخواست تماس مشاوره رایگان تنفسی نوزاد
                  </h3>
                  <p className="text-xs text-slate-500">
                    پاسخگویی توسط کارشناسان پرستاری و مامایی
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    نام و نام خانوادگی والد:
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="مثال: مریم کریمی"
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#58C9AD]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    شماره موبایل جهت تماس کارشناس:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="۰۹۱۲XXXXXXX"
                    dir="ltr"
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#58C9AD] text-right font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      سن نوزاد:
                    </label>
                    <select
                      value={babyAge}
                      onChange={(e) => setBabyAge(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#58C9AD] bg-white"
                    >
                      <option value="0-1m">زیر یک ماه (نوزاد تازه متولد)</option>
                      <option value="1-3m">۱ تا ۳ ماهگی</option>
                      <option value="3-6m">۳ تا ۶ ماهگی</option>
                      <option value="6-12m">۶ تا ۱۲ ماهگی</option>
                      <option value="1y+">بالای یک سال</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      علت تماس:
                    </label>
                    <select
                      value={issueType}
                      onChange={(e) => setIssueType(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#58C9AD] bg-white"
                    >
                      <option value="congestion">خس‌خس سینه و سختی در شیرخوردن</option>
                      <option value="cold">سرماخوردگی و ترشحات سبز/زرد</option>
                      <option value="dryness">خشکی و پوسته شدن مخاط بینی</option>
                      <option value="device">راهنمایی در انتخاب دستگاه بیبی‌نوز</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    توضیحات تکمیلی (اختیاری):
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثال: نوزادم شب‌ها موقع خواب صدای خرخر می‌دهد..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#58C9AD]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs font-bold bg-[#58C9AD] text-white hover:bg-[#46be9f] shadow-soft-2 hover:shadow-mint-glow transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>ثبت درخواست و تماس فوری مشاور</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center leading-normal">
                  اطلاعات شما محرمانه تلقی شده و صرفاً جهت راهنمایی بالینی سلامت نوزاد استفاده می‌گردد.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

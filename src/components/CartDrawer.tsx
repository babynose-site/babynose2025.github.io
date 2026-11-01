import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
  Sparkles,
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 700000;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = isFreeShipping || subtotal === 0 ? 0 : 49000;
  const finalTotal = subtotal - discountAmount + shippingFee;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'BABYNOSE') {
      setDiscountPercent(10);
      setPromoMessage('کد تخفیف ۱۰٪ ویژه والدین گرامی با موفقیت اعمال شد.');
    } else if (promoCode.trim().length > 0) {
      setDiscountPercent(0);
      setPromoMessage('کد وارد شده معتبر نیست. از کد BABYNOSE استفاده فرمایید.');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 pr-0 sm:pr-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between text-right">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#F5F8FA]">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#58C9AD] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#19384A]">سبد خرید شما</h3>
                <span className="text-xs text-slate-500">
                  {cart.length > 0
                    ? `${cart.reduce((s, i) => s + i.quantity, 0)} کالا در انتظار تایید`
                    : 'سبد خالی است'}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          {subtotal > 0 && (
            <div className="px-5 py-3 bg-[#EAF7FC] border-b border-[#278BCB]/20 text-xs text-[#004971]">
              <div className="flex justify-between font-semibold mb-1">
                <span>
                  {isFreeShipping
                    ? 'تبریک! ارسال سفارش شما کاملاً رایگان است.'
                    : `فقط ${formatPrice(
                        FREE_SHIPPING_THRESHOLD - subtotal
                      )} تومان تا ارسال رایگان`}
                </span>
                <span>{isFreeShipping ? '۱۰۰٪' : `${Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))}%`}</span>
              </div>
              <div className="w-full h-2 bg-white/70 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#58C9AD] rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      100,
                      (subtotal / FREE_SHIPPING_THRESHOLD) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderComplete ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#DDF5EC] text-[#006b58] rounded-full flex items-center justify-center mx-auto shadow-mint-glow">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-lg font-black text-[#19384A]">
                  سفارش شما با موفقیت ثبت گردید!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  پیامک تایید ارسال و کد رهگیری پست پیشتاز تا دقایقی دیگر برای شما ارسال خواهد شد.
                  همکاران واحد پشتیبانی بیبی‌نوز آماده پاسخگویی هستند.
                </p>
                <button
                  onClick={() => {
                    setOrderComplete(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#58C9AD] text-white hover:bg-[#46be9f]"
                >
                  بازگشت به سایت
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div className="text-sm font-bold text-slate-700">
                  سبد خرید شما در حال حاضر خالی است
                </div>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  می‌توانید از بخش محصولات تخصصی، فین‌گیر برقی یا سرم سالین را انتخاب نمایید.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full text-xs font-bold bg-[#EAF7FC] text-[#278BCB] border border-[#278BCB]/30 cursor-pointer"
                >
                  مشاهده کاتالوگ محصولات
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-2xl bg-[#F5F8FA] border border-slate-200/80 flex items-center gap-3"
                    >
                      {/* Product Thumbnail Bed */}
                      <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-[#278BCB]">
                          {item.product.name.split(' ')[0]}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[#19384A] truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {formatPrice(item.product.price)} تومان
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-white">
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="p-1 text-slate-500 hover:text-slate-800 cursor-pointer"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2 text-xs font-bold text-[#19384A]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="p-1 text-slate-500 hover:text-slate-800 cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer mr-auto"
                            title="حذف کالا"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form
                  onSubmit={handleApplyPromo}
                  className="p-3 bg-white rounded-2xl border border-slate-200/80 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="کد تخفیف (مثال: BABYNOSE)"
                      className="flex-1 text-xs py-2 px-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#58C9AD] uppercase tracking-wider"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#EAF7FC] text-[#278BCB] hover:bg-[#d5eef9] border border-[#278BCB]/20 cursor-pointer shrink-0"
                    >
                      اعمال کد
                    </button>
                  </div>
                  {promoMessage && (
                    <div
                      className={`text-[11px] ${
                        discountPercent > 0
                          ? 'text-[#006b58] font-bold'
                          : 'text-rose-600'
                      }`}
                    >
                      {promoMessage}
                    </div>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {!orderComplete && cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-white space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>مجموع اقلام:</span>
                  <span className="font-bold text-[#19384A]">
                    {formatPrice(subtotal)} تومان
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#006b58] font-bold">
                    <span>تخفیف ویژه ({discountPercent}٪):</span>
                    <span>- {formatPrice(discountAmount)} تومان</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>هزینه بسته‌بندی و ارسال پیشتاز:</span>
                  <span className="font-bold text-[#19384A]">
                    {isFreeShipping ? (
                      <span className="text-[#006b58]">رایگان</span>
                    ) : (
                      `${formatPrice(shippingFee)} تومان`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-black text-[#19384A] pt-2 border-t border-slate-100">
                  <span>مبلغ قابل پرداخت:</span>
                  <span className="text-base text-[#006b58]">
                    {formatPrice(finalTotal)} تومان
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#58C9AD] text-white hover:bg-[#46be9f] shadow-soft-2 hover:shadow-mint-glow transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 disabled:opacity-60"
              >
                {isCheckingOut ? (
                  <span>در حال اتصال به درگاه امن...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>تکمیل و ثبت نهایی سفارش</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <span>ضمانت اصالت و سلامت فیزیکی</span>
                <span>•</span>
                <span>۱۸ ماه گارانتی تعویض طلایی</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

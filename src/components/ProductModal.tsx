import React from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Star, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-right">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80">
          <button
            onClick={onClose}
            className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            {/* Left: Product Info in RTL */}
            <div className="sm:col-span-12 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DDF5EC] text-[#006b58]">
                  {product.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EAF7FC] text-[#278BCB]">
                  {product.age}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#19384A]">
                {product.name}
              </h3>
              <div className="text-xs text-slate-400 font-en-display">
                {product.latinName}
              </div>

              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold">
                <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                <span>{product.rating} از ۵</span>
                <span className="text-slate-400 font-normal">
                  ({product.reviewsCount} نظر والدین تاییدشده)
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {product.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-[#19384A] uppercase tracking-wider">
                  ویژگی‌های برجسته محصول:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-700 bg-[#F5F8FA] p-2.5 rounded-xl border border-slate-100"
                    >
                      <Check className="w-4 h-4 text-[#006b58] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-[#19384A] uppercase tracking-wider mb-2">
                  مشخصات فنی و استانداردها:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <div className="text-slate-400 text-[11px]">{spec.label}</div>
                      <div className="font-bold text-[#19384A] mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Add to Cart Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  {product.oldPrice && (
                    <div className="text-xs text-slate-400 line-through">
                      {formatPrice(product.oldPrice)} تومان
                    </div>
                  )}
                  <div className="text-xl font-black text-[#006b58]">
                    {formatPrice(product.price)}{' '}
                    <span className="text-xs font-normal text-slate-500">تومان</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#58C9AD] text-white hover:bg-[#46be9f] shadow-soft-2 hover:shadow-mint-glow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>افزودن به سبد خرید</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

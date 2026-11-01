import React, { useState } from 'react';
import {
  ShoppingBag,
  Star,
  Check,
  Eye,
  ShieldCheck,
  Sparkles,
  Layers,
  Heart,
  Droplets,
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
  onOpenProductModal: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onAddToCart,
  onOpenProductModal,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#F5F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF5EC] text-[#006b58] text-xs font-bold mb-3 border border-[#58C9AD]/40">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>محصولات استاندارد پزشکی بیبی‌نوز</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#19384A]">
            تجهیزات تخصصی بهداشت و پاکسازی مجاری تنفسی نوزاد
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
            تولیدشده از بالاترین رده سیلیکون پزشکی، بدون مواد شیمیایی مضر، دارای گواهینامه ایمنی اروپا و سازگار با پوست فوق‌العاده حساس نوزادان.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => {
            const isJustAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="bg-white rounded-[2rem] p-6 border border-slate-200/80 shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 flex flex-col justify-between group text-right relative overflow-hidden"
              >
                {/* Upper Droplet Badge for Medical Certification */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="glass-badge px-2.5 py-1 rounded-full text-[11px] font-bold text-[#006b58] border border-[#58C9AD]/40 truncate">
                    {product.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-[#278BCB] bg-[#EAF7FC] px-2 py-0.5 rounded-full shrink-0">
                    {product.age}
                  </span>
                </div>

                {/* Product Photography / Circular Bed Bed Visual */}
                <div className="relative w-full aspect-square bg-[#F5F8FA] rounded-2xl flex items-center justify-center p-6 mb-5 overflow-hidden group-hover:bg-[#EAF7FC]/50 transition-colors">
                  {/* Decorative background circle */}
                  <div className="w-36 h-36 rounded-full bg-white shadow-inner flex items-center justify-center">
                    {/* Stylized SVG Representation based on product type */}
                    {product.id === 'babynose-pro-electric' ? (
                      <svg viewBox="0 0 100 140" className="w-20 h-28" fill="none">
                        <path
                          d="M50 10 C45 10 42 18 42 28 C42 34 45 38 50 38 C55 38 58 34 58 28 C58 18 55 10 50 10Z"
                          fill="#58C9AD"
                          opacity="0.9"
                        />
                        <rect x="38" y="38" width="24" height="20" rx="4" fill="#EAF7FC" stroke="#278BCB" strokeWidth="1" />
                        <path
                          d="M34 60 C34 60 30 85 32 108 C34 126 40 134 50 134 C60 134 66 126 68 108 C70 85 66 60 66 60 Z"
                          fill="#FFFFFF"
                          stroke="#BAC7D0"
                          strokeWidth="1.2"
                        />
                        <circle cx="50" cy="85" r="3" fill="#58C9AD" />
                        <circle cx="50" cy="95" r="2.5" fill="#58C9AD" opacity="0.6" />
                        <circle cx="50" cy="112" r="5" fill="#EAF7FC" stroke="#278BCB" strokeWidth="1" />
                      </svg>
                    ) : product.id === 'babynose-manual-aspirator' ? (
                      <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
                        <circle cx="60" cy="60" r="38" fill="#EAF7FC" stroke="#278BCB" strokeWidth="1.5" strokeDasharray="3 3" />
                        {/* Silicone suction bulb & tube */}
                        <path
                          d="M35 45 C35 30 50 25 60 25 C70 25 85 30 85 45 C85 65 65 75 60 85"
                          stroke="#278BCB"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <circle cx="60" cy="88" r="8" fill="#58C9AD" />
                        <path d="M35 45 L25 55" stroke="#278BCB" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    ) : product.id === 'babynose-isotonic-saline' ? (
                      <svg viewBox="0 0 100 120" className="w-20 h-24" fill="none">
                        {/* Saline ampoules pack */}
                        <rect x="25" y="30" width="12" height="60" rx="3" fill="#EAF7FC" stroke="#69C5E8" strokeWidth="1.5" />
                        <rect x="44" y="24" width="12" height="66" rx="3" fill="#def0ff" stroke="#278BCB" strokeWidth="1.5" />
                        <rect x="63" y="30" width="12" height="60" rx="3" fill="#EAF7FC" stroke="#69C5E8" strokeWidth="1.5" />
                        <circle cx="50" cy="15" r="5" fill="#58C9AD" />
                        <path d="M50 12 L50 18 M47 15 L53 15" stroke="#FFFFFF" strokeWidth="1.2" />
                      </svg>
                    ) : (
                      // Master Kit
                      <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
                        <rect x="20" y="35" width="80" height="65" rx="8" fill="#EAF7FC" stroke="#006b58" strokeWidth="2" />
                        <path d="M40 35 V26 C40 22 46 20 60 20 C74 20 80 22 80 26 V35" stroke="#006b58" strokeWidth="2" />
                        <circle cx="60" cy="68" r="14" fill="#58C9AD" />
                        <path d="M60 60 L60 76 M52 68 L68 68" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>

                  {/* Quick View Overlay Button */}
                  <button
                    onClick={() => onOpenProductModal(product)}
                    className="absolute inset-0 bg-[#19384A]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold rounded-2xl cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>مشاهده جزئیات فنی</span>
                  </button>
                </div>

                {/* Rating & Tag */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
                  </div>
                  <span className="text-[11px] text-slate-500">{product.tag}</span>
                </div>

                {/* Product Title */}
                <h3 className="text-base font-bold text-[#19384A] leading-snug mb-1 group-hover:text-[#006b58] transition-colors">
                  {product.name}
                </h3>
                <div className="text-[11px] text-slate-400 font-en-display mb-3">
                  {product.latinName}
                </div>

                {/* Price & Action */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-right">
                    {product.oldPrice && (
                      <div className="text-[11px] text-slate-400 line-through">
                        {formatPrice(product.oldPrice)} تومان
                      </div>
                    )}
                    <div className="text-base font-black text-[#19384A]">
                      {formatPrice(product.price)}{' '}
                      <span className="text-xs font-normal text-slate-500">تومان</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAdd(product)}
                    className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isJustAdded
                        ? 'bg-[#006b58] text-white shadow-mint-glow scale-95'
                        : 'bg-[#58C9AD] text-white hover:bg-[#46be9f] shadow-soft-1 hover:shadow-mint-glow active:scale-95'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>افزوده شد</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>افزودن</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

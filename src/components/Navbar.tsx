import React, { useState } from 'react';
import {
  Droplets,
  ShoppingBag,
  PhoneCall,
  Menu,
  X,
  ShieldCheck,
  Heart,
} from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: 'محصولات تخصصی', href: '#products' },
    { label: 'سنجش رنگ مخاط', href: '#mucus-guide' },
    { label: 'محاسبه‌گر دوز سالین', href: '#dosage-calculator' },
    { label: 'راهنمای قدرت مکش', href: '#suction-guide' },
    { label: 'جدول مقایسه بالینی', href: '#comparison' },
    { label: 'روش ۴ مرحله‌ای', href: '#step-guide' },
    { label: 'سوالات متداول', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Advisory Bar */}
      <div className="bg-[#19384A] text-white text-xs py-2 px-4 border-b border-[#278BCB]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-right">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#58C9AD] text-[#002019]">
              استاندارد CE اروپا
            </span>
            <span className="text-slate-200">
              ارسال فوری و رایگان سفارش‌های بالای ۷۰۰ هزار تومان به سراسر کشور
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-300">
            <button
              onClick={onOpenConsultation}
              className="hover:text-[#58C9AD] transition-colors flex items-center gap-1.5 cursor-pointer text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#58C9AD]" />
              <span>مشاوره بالینی والدین: ۰۲۱-۸۸۲۴۵۰۹۰ (۲۴/۷)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav className="glass-nav py-3 px-4 sm:px-8 transition-all duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#58C9AD] to-[#278BCB] flex items-center justify-center text-white shadow-soft-1 group-hover:shadow-mint-glow transition-all duration-300">
              <Droplets className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-[#19384A] tracking-tight">
                  بیبی‌نوز
                </span>
                <span className="text-xs font-bold text-[#278BCB] bg-[#EAF7FC] px-1.5 py-0.5 rounded-md font-en-display">
                  BabyNose
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500">
                مراقبت تخصصی تنفس و پاکسازی بینی نوزاد
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#19384A]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#006b58] transition-colors relative py-1 text-[13px] hover:font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Consultation Trigger */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#EAF7FC] text-[#278BCB] hover:bg-[#d6f0fb] border border-[#278BCB]/25 transition-all shadow-soft-1 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>درخواست مشاوره فوری</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold bg-[#58C9AD] text-white hover:bg-[#4bb39a] shadow-soft-2 hover:shadow-mint-glow transition-all cursor-pointer active:scale-95"
              aria-label="سبد خرید"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">سبد خرید</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 bg-[#19384A] text-white text-[11px] rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#19384A] hover:bg-[#def0ff] transition-colors"
              aria-label="باز کردن منو"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#def0ff] space-y-2 pb-2 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#19384A] hover:bg-[#EAF7FC] hover:text-[#006b58] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#EAF7FC] text-[#278BCB] border border-[#278BCB]/30"
              >
                <PhoneCall className="w-4 h-4" />
                <span>تماس با مشاور اطفال (رایگان)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { DosageCalculator } from './components/DosageCalculator';
import { MucusGuide } from './components/MucusGuide';
import { SuctionGuide } from './components/SuctionGuide';
import { ProductsSection } from './components/ProductsSection';
import { ComparisonTable } from './components/ComparisonTable';
import { StepGuide } from './components/StepGuide';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProductModal } from './components/ProductModal';
import { CartItem, Product } from './types';
import { PRODUCTS } from './data/mockData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#19384A] font-body selection:bg-[#58C9AD]/20 selection:text-[#005242]">
      {/* Navigation Bar */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('products')}
          onOpenDosageCalculator={() => scrollToSection('dosage-calculator')}
        />

        {/* 4 Clinical Pillars Trust Bar */}
        <TrustBadges />

        {/* Mucus Color & Health Guide Selector */}
        <MucusGuide />

        {/* Saline Dosage & Spray Frequency Meter */}
        <DosageCalculator />

        {/* Suction Strength & Silicone Tip Guide */}
        <SuctionGuide />

        {/* E-Commerce Products Showcase */}
        <ProductsSection
          onAddToCart={handleAddToCart}
          onOpenProductModal={(p) => setSelectedProduct(p)}
        />

        {/* Clinical Comparison Table */}
        <ComparisonTable />

        {/* 4-Step Educational Care Guide */}
        <StepGuide />

        {/* Testimonials & Doctor Endorsements */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Pediatric Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Product Quick-View Technical Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

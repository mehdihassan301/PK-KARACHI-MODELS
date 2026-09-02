/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesBanner from './components/FeaturesBanner';
import AboutServiceSection from './components/AboutServiceSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesPhotoGrid from './components/ServicesPhotoGrid';
import PricingSection from './components/PricingSection';
import AreasServedSection from './components/AreasServedSection';
import HowBookingWorks from './components/HowBookingWorks';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1f2937] flex flex-col selection:bg-[#b91c1c] selection:text-white">
      {/* Replicated Navbar with Header Logo & WhatsApp */}
      <Navbar />

      <main className="flex-1">
        {/* Replicated Hero Header Banner */}
        <HeroSection />

        {/* 3 Quick Features Highlights */}
        <FeaturesBanner />

        {/* Karachi Escorts Service & Layered Photos */}
        <AboutServiceSection />

        {/* Why Customers in Karachi Choose Us */}
        <WhyChooseUs />

        {/* What We Offer / 6 Photo Cards & Grids */}
        <ServicesPhotoGrid />

        {/* Transparent Pricing Ranges Table */}
        <PricingSection />

        {/* Areas We Serve in Karachi Cards */}
        <AreasServedSection />

        {/* How Booking Works 5-Step Guide */}
        <HowBookingWorks />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Call to Action Booking Banner */}
        <CtaBanner />
      </main>

      {/* Replicated 4-Column Footer */}
      <Footer />

      {/* 24/7 Floating WhatsApp Instant Support Button */}
      <FloatingWhatsApp />
    </div>
  );
}

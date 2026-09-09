import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomVisualizer } from './components/RoomVisualizer';
import { RugCatalog } from './components/RugCatalog';
import { RugHeritageGuide } from './components/RugHeritageGuide';
import { RugCalculator } from './components/RugCalculator';
import { GoldenCharter } from './components/GoldenCharter';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { RugInspectorModal } from './components/RugInspectorModal';
import { VipBookingModal } from './components/VipBookingModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { RugItem } from './types';

export default function App() {
  const [inspectingRug, setInspectingRug] = useState<RugItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSelectRugForVisualizer = (rug: RugItem) => {
    const el = document.getElementById('room-visualizer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVisualizer = () => {
    const el = document.getElementById('room-visualizer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 font-['Cairo',sans-serif] selection:bg-[#C58F72]/30 selection:text-[#E4BEAA] pb-20 lg:pb-0">
      
      {/* Navbar with Riyadh live status */}
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenVisualizer={handleOpenVisualizer}
      />

      {/* Hero with 3D metallic seal and royal headline */}
      <Hero
        onExploreClick={handleExploreClick}
        onOpenVisualizer={handleOpenVisualizer}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* 3D Interactive Room Visualizer Studio */}
      <RoomVisualizer
        onInspectRug={(rug) => setInspectingRug(rug)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Catalog with authentic Turkish & oriental rugs */}
      <RugCatalog
        onSelectRugForVisualizer={handleSelectRugForVisualizer}
        onInspectRug={(rug) => setInspectingRug(rug)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Authenticity & Turkish Rug Heritage Encyclopedia */}
      <RugHeritageGuide />

      {/* Smart Majlis & Room Size Calculator */}
      <RugCalculator
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* The Golden Charter (Punctuality, VIP Manager, Live Tracking) */}
      <GoldenCharter
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Riyadh Al-Faisaliyah Location & Operating Hours */}
      <LocationSection />

      {/* Luxury Footer */}
      <Footer />

      {/* Microscopic Knot & Texture Inspector Modal */}
      <RugInspectorModal
        rug={inspectingRug}
        onClose={() => setInspectingRug(null)}
        onOpenBooking={() => {
          setInspectingRug(null);
          setIsBookingOpen(true);
        }}
      />

      {/* VIP Showroom Tour & In-Home Consultation Booking Modal */}
      <VipBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar
        onOpenBooking={() => setIsBookingOpen(true)}
      />

    </div>
  );
}

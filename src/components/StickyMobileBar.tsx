'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-lg border-t border-border p-3 flex gap-3 md:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.1)]">
      {/* Call Button */}
      <a
        href="tel:07742831011"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(255,217,0,0.25)] active:scale-[0.98] animate-pulse-slow"
      >
        <Phone className="h-4 w-4 fill-current" />
        Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/447742831011?text=Hello%2C%20I%20need%20a%20locksmith"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25d366] text-white font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(37,211,102,0.25)] active:scale-[0.98]"
      >
        <MessageSquare className="h-4 w-4 fill-current" />
        WhatsApp
      </a>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, X, MessageCircle } from 'lucide-react';

export default function FloatingCTABubble() {
  const [isOpen, setIsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer state updates to avoid synchronous setState in effect warning and prevent hydration mismatches
    const timer = setTimeout(() => {
      const savedState = sessionStorage.getItem('cta-bubble-open');
      if (savedState !== null) {
        setIsOpen(savedState === 'true');
      }
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = (state: boolean) => {
    setIsOpen(state);
    sessionStorage.setItem('cta-bubble-open', String(state));
  };

  if (!mounted) return null;

  return (
    <>
      {isOpen ? (
        /* Expanded Floating Card */
        <div 
          className="fixed right-4 sm:right-6 bottom-[88px] md:bottom-6 z-40 w-[280px] bg-card/95 backdrop-blur-xl border border-border p-5 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          role="dialog"
          aria-label="Contact Quick Access Widget"
        >
          {/* Close Button */}
          <button
            onClick={() => handleToggle(false)}
            className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary transition-premium"
            aria-label="Hide contact widget"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Heading */}
          <div className="mb-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-primary">Local Dispatch</h4>
            <h3 className="text-sm font-bold uppercase text-foreground leading-tight">Need a Locksmith?</h3>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            {/* Call Action */}
            <a
              href="tel:07742831011"
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(255,217,0,0.25)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-3.5 w-3.5 fill-current animate-pulse-slow" />
              Tap to Call
            </a>

            {/* WhatsApp Action */}
            <a
              href="https://wa.me/447742831011?text=Hello%2C%20I%20need%20a%20locksmith"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#25d366] text-white font-black text-xs uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(37,211,102,0.2)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-current" />
              WhatsApp Us
            </a>
          </div>

          {/* Sub-label */}
          <div className="mt-3.5 text-center border-t border-border pt-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              ⚡ Open 24/7 &bull; No call-out fee
            </p>
          </div>
        </div>
      ) : (
        /* Collapsed Pulse Button */
        <button
          onClick={() => handleToggle(true)}
          className="fixed right-4 sm:right-6 bottom-[88px] md:bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_6px_24px_rgba(255,217,0,0.35)] transition-premium hover:scale-110 active:scale-90 animate-[pulse_2.8s_ease-in-out_infinite]"
          aria-label="Show contact options"
        >
          <MessageCircle className="h-6 w-6 stroke-[2.5]" />
          {/* Text Badge for visibility */}
          <span className="absolute right-16 px-2.5 py-1 rounded-lg bg-[#0a1029]/90 backdrop-blur-md text-white border border-[#2e364d] text-[10px] font-black uppercase tracking-wider whitespace-nowrap opacity-0 md:opacity-100 hover:opacity-100 transition-opacity pointer-events-none">
            24/7 Locksmiths
          </span>
        </button>
      )}
    </>
  );
}

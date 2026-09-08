'use client';

import { useEffect } from 'react';
import { trackCallConversion, trackWhatsAppConversion } from '@/utils/analytics';

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
    gtag_report_whatsapp_conversion?: (url?: string) => boolean;
  }
}

/**
 * Automatically captures clicks on telephone links (`tel:`) and WhatsApp links (`wa.me`)
 * across the site and reports the conversion actions to Google Ads.
 */
export default function CallConversionTracker() {
  useEffect(() => {
    // Expose the standard Google Ads function names on window
    window.gtag_report_conversion = (url?: string) => {
      return trackCallConversion(url);
    };

    window.gtag_report_whatsapp_conversion = (url?: string) => {
      return trackWhatsAppConversion(url);
    };

    // Global event delegation for phone call and WhatsApp links
    const handleDocumentClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      if (href.startsWith('tel:')) {
        trackCallConversion();
      } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackWhatsAppConversion();
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, []);

  return null;
}

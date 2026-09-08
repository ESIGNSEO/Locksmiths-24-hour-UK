'use client';

import { useEffect } from 'react';
import { trackCallConversion } from '@/utils/analytics';

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/**
 * Automatically captures clicks on any telephone link (`tel:`) across the site
 * and reports the conversion action to Google Ads.
 */
export default function CallConversionTracker() {
  useEffect(() => {
    // Expose the standard Google Ads function name on window
    window.gtag_report_conversion = (url?: string) => {
      return trackCallConversion(url);
    };

    // Global event delegation for all phone call links
    const handleDocumentClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('tel:')) {
        trackCallConversion();
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, []);

  return null;
}

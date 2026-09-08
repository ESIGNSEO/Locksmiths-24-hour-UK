/**
 * Utility functions for Google Ads and analytics conversion tracking.
 */

export function trackCallConversion(url?: string): boolean {
  if (typeof window === 'undefined') return false;

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18413871642';
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION_LABEL || '0BKiCPmr1fAcEJrEtcxE';
  const sendTo = `${adsId}/${label}`;

  const callback = () => {
    if (url && typeof url === 'string') {
      window.location.href = url;
    }
  };

  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: sendTo,
      value: 1.0,
      currency: 'GBP',
      event_callback: callback,
    });
  } else {
    // Development or fallback logging when gtag is not active
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Google Ads Conversion] Event triggered for: ${sendTo}`);
    }
    if (url) {
      callback();
    }
  }

  return false;
}

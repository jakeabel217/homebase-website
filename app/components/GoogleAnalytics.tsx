'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Google Analytics tracking component
// Docs: https://nextjs.org/docs/app/building-your-application/optimizing/analytics

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = 'G-GB1EZWG7PG';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Load gtag.js script
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    // Initialize dataLayer and gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    // Track pageviews on route change
    if (typeof window.gtag !== 'undefined') {
      const url = pathname + searchParams.toString();
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

// Helper function to track custom events
// Usage: trackEvent('book_tour_click', { method: 'header_button' })
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};

'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Google Analytics tracking component
// Docs: https://nextjs.org/docs/app/building-your-application/optimizing/analytics

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Track pageviews on route change
    const url = pathname + searchParams.toString();
    
    // @ts-expect-error - gtag is loaded by Script component
    if (typeof window.gtag !== 'undefined') {
      // @ts-expect-error
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  // Don't render if no measurement ID
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Helper function to track custom events
// Usage: trackEvent('book_tour_click', { method: 'header_button' })
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // @ts-expect-error - gtag is loaded by Script component
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    // @ts-expect-error
    window.gtag('event', eventName, eventParams);
  }
};

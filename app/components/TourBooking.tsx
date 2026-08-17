'use client';

import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

export default function TourBooking() {
  useCalendlyEventListener({
    onEventScheduled: () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'tour_booked');
      }
    },
  });

  return (
    <InlineWidget
      url="https://calendly.com/homebasebaltimore/30min"
      styles={{ height: '700px', minWidth: '320px' }}
    />
  );
}

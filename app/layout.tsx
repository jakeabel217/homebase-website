import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeBase - Coworking & Private Office Rental in Baltimore",
  description: "Coworking and private office rental in downtown Baltimore. Single and double private offices, hot desks, and dedicated desks near Camden Yards — month-to-month from $500/month.",
  keywords: "private office rental baltimore, single office rental baltimore, double office rental baltimore, private office baltimore, office space rental baltimore, coworking baltimore, office space baltimore, hot desk baltimore, flexible workspace baltimore",
  authors: [{ name: "HomeBase" }],
  openGraph: {
    title: "HomeBase - Coworking & Private Office Rental in Baltimore",
    description: "Coworking and private office rental in downtown Baltimore. Single and double private offices, hot desks, and dedicated desks near Camden Yards — month-to-month from $500/month.",
    url: "https://homebase-website.vercel.app",
    siteName: "HomeBase",
    images: [
      {
        url: "/og-image.png", // Add this image later
        width: 1200,
        height: 630,
        alt: "HomeBase Coworking Space",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeBase - Coworking & Private Office Rental in Baltimore",
    description: "Coworking and private office rental in downtown Baltimore. Single and double private offices, hot desks, and dedicated desks near Camden Yards — month-to-month from $500/month.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="N7cAQeXjZLCYH7cykkph7GfZzJimNk_9VF1ToqWBEuk" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GB1EZWG7PG"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GB1EZWG7PG', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "HomeBase - Co-Working Space in Baltimore",
  description: "Flexible workspace in downtown Baltimore. Hot desks, dedicated desks, and private offices near Camden Yards.",
  keywords: "coworking baltimore, office space baltimore, hot desk baltimore, private office camden yards, flexible workspace baltimore",
  authors: [{ name: "HomeBase" }],
  openGraph: {
    title: "HomeBase - Co-Working Space in Baltimore",
    description: "Flexible workspace in downtown Baltimore. Hot desks, dedicated desks, and private offices near Camden Yards.",
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
    title: "HomeBase - Co-Working Space in Baltimore",
    description: "Flexible workspace in downtown Baltimore. Hot desks, dedicated desks, and private offices near Camden Yards.",
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
        {/* Google Search Console Verification - Replace with your verification code */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

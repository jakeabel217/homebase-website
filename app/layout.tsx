import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeBase - Co-Working Space in Baltimore",
  description: "Flexible workspace in downtown Baltimore. Hot desks, dedicated desks, and private offices near Camden Yards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

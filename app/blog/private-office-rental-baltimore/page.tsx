import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Office Rental in Baltimore: Single & Double Offices | HomeBase",
  description: "Private office rental in downtown Baltimore. HomeBase offers fully furnished single and double private offices near Camden Yards, month-to-month from $500/month.",
  keywords: "private office rental baltimore, single office rental baltimore, double office rental baltimore, private office baltimore, office space rental baltimore, downtown baltimore office",
  openGraph: {
    title: "Private Office Rental in Baltimore: Single & Double Offices | HomeBase",
    description: "Private office rental in downtown Baltimore. HomeBase offers fully furnished single and double private offices near Camden Yards, month-to-month from $500/month.",
    url: "https://homebase-website.vercel.app/blog/private-office-rental-baltimore",
    type: "article",
  },
};

export default function PrivateOfficeRentalBaltimore() {
  return (
    <div className="bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="HOMEBASE"
                width={190}
                height={25}
                className="object-contain"
              />
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-[#FF5722] transition text-sm font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#FF5722] transition text-sm font-medium">
                Blog
              </Link>
              <a
                href="https://calendly.com/jakeabel217/30min"
                target="_blank"
                className="text-[#FF5722] font-semibold hover:text-[#E64A19] transition text-sm whitespace-nowrap"
                style={{
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#f9fafb',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  borderRadius: '0.25rem'
                }}
              >
                Book Tour
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="pt-24 pb-20 bg-white">
        <div className="mx-auto px-8 sm:px-16 lg:px-32 max-w-4xl">
          <div className="max-w-lg mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="text-sm font-semibold text-[#FF5722] uppercase tracking-wide mb-4">
                Published June 19, 2026
              </div>
              <div className="text-sm text-gray-600 mb-6">
                By HomeBase Baltimore
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Private Office Rental in Baltimore: Single & Double Offices at HomeBase
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed font-normal">
                Looking for private office rental in Baltimore? HomeBase at 300 W Pratt Street offers fully furnished single and double private offices in the heart of downtown — flexible, affordable, and ready to move into today.
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-8 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Renting a private office in Baltimore shouldn&apos;t mean signing a multi-year lease, furnishing an empty room, or setting up your own internet and utilities. At HomeBase, your private office is move-in ready from day one — desks, fast wifi, conference rooms, coffee, and a professional downtown address all included, on simple month-to-month terms.
              </p>

              <p className="text-lg">
                Whether you&apos;re a solo professional who needs a quiet, lockable space or a two-person team ready to grow, HomeBase offers private office rental options to match — starting at just $500/month.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">Why Rent a Private Office in Downtown Baltimore?</h2>

              <p className="text-lg">
                A private office gives you the focus and professionalism of your own space without the cost and commitment of a traditional commercial lease. For freelancers, consultants, remote workers, and small businesses, it&apos;s the best of both worlds: a dedicated, lockable office plus shared amenities like meeting rooms, gigabit internet, and a stocked kitchen.
              </p>

              <p className="text-lg">
                Located at 300 W Pratt Street, HomeBase puts you steps from Camden Yards, the Baltimore Convention Center, and the Inner Harbor, with easy access to major highways and public transit. On-site dining like Chipotle and Dunkin&apos;, plus Starbucks and Jimmy John&apos;s nearby, means convenience is built into your workday — and Little Italy and Harbor East are a short walk away for client lunches and after-work plans.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">Single Private Offices</h2>

              <p className="text-lg">
                Our single private offices are perfect for solo professionals who want a dedicated, distraction-free space to call their own. You get a fully furnished, lockable office with 24/7 keycode access, so you can work on your schedule — early mornings, late nights, or weekends.
              </p>

              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Fully private, lockable office for one</li>
                <li>24/7 secure keycode access</li>
                <li>Gigabit fiber internet included</li>
                <li>Priority access to meeting and conference rooms</li>
                <li>Professional business mailing address</li>
                <li>Month-to-month — no long-term lease</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">Double Private Offices for Small Teams</h2>

              <p className="text-lg">
                Need room for two? Our double private offices comfortably fit a two-person team or a professional who wants extra space to spread out. They&apos;re ideal for growing startups, partnerships, and small businesses that want privacy for calls and client meetings while still being part of a vibrant coworking community.
              </p>

              <p className="text-lg">
                As your team grows, it&apos;s easy to scale up — move from a single to a double office, or to a larger team suite, without the headache of breaking a lease. Pricing for double and team offices is available on request, so the best next step is to tour the space and see what fits.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">What&apos;s Included with Every Private Office</h2>

              <p className="text-lg">
                Unlike a traditional office lease, a HomeBase private office rental is all-inclusive. There are no surprise bills for utilities, internet, furniture, or cleaning — it&apos;s all handled.
              </p>

              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Fully furnished, move-in-ready office</li>
                <li>High-speed gigabit fiber internet</li>
                <li>24/7 secure keycode access</li>
                <li>Conference and meeting room access</li>
                <li>Professional mailing address and mail handling</li>
                <li>Premium coffee, tea, and a stocked kitchen</li>
                <li>Utilities, cleaning, and maintenance</li>
                <li>A built-in community of Baltimore professionals</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">Flexible, Affordable Pricing</h2>

              <p className="text-lg">
                Private office rental at HomeBase starts at <strong className="text-gray-900">$500/month</strong>, with month-to-month flexibility and yearly discounts available. Compared to a traditional downtown Baltimore office lease — where rent, furniture, internet, and utilities can easily exceed $1,500/month before you even open the door — a HomeBase private office is a simpler, more affordable way to get a professional space of your own.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">Tour a Private Office in Baltimore Today</h2>

              <p className="text-lg">
                The best way to find the right private office is to see it in person. Walk the space, picture your workday, and pick the office that fits — single or double.
              </p>

              <p className="text-lg">
                <a
                  href="https://calendly.com/jakeabel217/30min"
                  target="_blank"
                  className="text-[#FF5722] font-bold hover:text-[#E64A19] transition"
                >
                  Schedule your free HomeBase tour today →
                </a>
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="text-[#FF5722] font-semibold hover:text-[#E64A19] transition"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-[#FF5722] transition">Home</Link></li>
                <li><Link href="/blog" className="hover:text-[#FF5722] transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://twitter.com/homebaseworks" target="_blank" className="hover:text-[#FF5722] transition">Twitter</a></li>
                <li><a href="https://www.facebook.com/homebasecoworks" target="_blank" className="hover:text-[#FF5722] transition">Facebook</a></li>
                <li><a href="https://www.instagram.com/homebaseworks/" target="_blank" className="hover:text-[#FF5722] transition">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm">
                <a href="tel:+1-410-826-0086" className="hover:text-[#FF5722] transition">
                  410-826-0086
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 HomeBase / HBworks, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Private Office Rental in Baltimore: Single & Double Offices at HomeBase",
          "description": "Private office rental in downtown Baltimore. HomeBase offers fully furnished single and double private offices near Camden Yards, month-to-month from $500/month.",
          "author": {
            "@type": "Organization",
            "name": "HomeBase Baltimore"
          },
          "publisher": {
            "@type": "Organization",
            "name": "HomeBase Baltimore"
          },
          "datePublished": "2026-06-19",
          "dateModified": "2026-06-19"
        })
      }} />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/hbworks-logo.png"
              alt="HomeBase"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-2xl font-black tracking-tight">HOMEBASE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-sm font-medium hover:text-[#FF5722] transition-colors">
              PRICING
            </a>
            <a href="#amenities" className="text-sm font-medium hover:text-[#FF5722] transition-colors">
              AMENITIES
            </a>
            <a href="#location" className="text-sm font-medium hover:text-[#FF5722] transition-colors">
              LOCATION
            </a>
            <a
              href="https://calendly.com/jakeabel217/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF5722] text-white px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-[#E64A19] transition-all hover:scale-105"
            >
              SCHEDULE TOUR
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#2D2D2D] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="HomeBase Workspace"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
            YOUR HOME BASE<br />IN DOWNTOWN<br />BALTIMORE
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Flexible workspace near Camden Yards. No long-term commitment required.
          </p>
          <a
            href="https://calendly.com/jakeabel217/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF5722] text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-[#E64A19] transition-all hover:scale-105"
          >
            SCHEDULE A TOUR
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
            FLEXIBLE PRICING
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Month-to-month memberships. Cancel anytime. Yearly discounts available.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hot Desk */}
            <div className="border-2 border-gray-200 rounded-sm p-8 hover:border-[#FF5722] transition-all hover:shadow-xl">
              <h3 className="text-2xl font-black mb-2 tracking-tight">HOT DESK</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-[#FF5722]">$200</span>
                <span className="text-gray-600 text-lg">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Flexible seating in shared workspace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>24/7 access with keycode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Meeting room access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Coffee & amenities</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/jakeabel217/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-sm font-bold hover:bg-[#FF5722] transition-all"
              >
                GET STARTED
              </a>
            </div>

            {/* Dedicated Desk - Featured */}
            <div className="border-2 border-[#FF5722] rounded-sm p-8 relative shadow-xl transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF5722] text-white px-6 py-1 rounded-sm text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-black mb-2 tracking-tight">DEDICATED DESK</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-[#FF5722]">$300</span>
                <span className="text-gray-600 text-lg">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Your own assigned desk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Lockable storage cabinet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>24/7 access with keycode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>All hot desk amenities</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/jakeabel217/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#FF5722] text-white px-6 py-3 rounded-sm font-bold hover:bg-[#E64A19] transition-all"
              >
                GET STARTED
              </a>
            </div>

            {/* Private Office */}
            <div className="border-2 border-gray-200 rounded-sm p-8 hover:border-[#FF5722] transition-all hover:shadow-xl">
              <h3 className="text-2xl font-black mb-2 tracking-tight">PRIVATE OFFICE</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-[#FF5722]">$600</span>
                <span className="text-gray-600 text-lg">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Fully private office space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Lock on door for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>24/7 access with keycode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">✓</span>
                  <span>Priority meeting room access</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/jakeabel217/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-sm font-bold hover:bg-[#FF5722] transition-all"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
            WHAT'S INCLUDED
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Everything you need to work productively in downtown Baltimore.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FF5722] transition-all">
              <div className="text-4xl mb-4">🔑</div>
              <h3 className="text-xl font-black mb-2 tracking-tight">24/7 ACCESS</h3>
              <p className="text-gray-600">
                Work on your schedule with custom keycode entry anytime, day or night.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FF5722] transition-all">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-black mb-2 tracking-tight">PARKING AVAILABLE</h3>
              <p className="text-gray-600">
                Monthly parking passes available for an additional fee.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FF5722] transition-all">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-black mb-2 tracking-tight">FREE COFFEE</h3>
              <p className="text-gray-600">
                Coffee machines and fridge space for your refreshments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FF5722] transition-all">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-black mb-2 tracking-tight">MEETING ROOMS</h3>
              <p className="text-gray-600">
                First-come, first-serve meeting rooms for client calls and team meetings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FF5722] transition-all">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-black mb-2 tracking-tight">PRIME LOCATION</h3>
              <p className="text-gray-600">
                300 W Pratt Street — central downtown near Camden Yards and Inner Harbor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FF5722] transition-all">
              <div className="text-4xl mb-4">📶</div>
              <h3 className="text-xl font-black mb-2 tracking-tight">HIGH-SPEED WIFI</h3>
              <p className="text-gray-600">
                Fast, reliable internet connection for all your work needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FF5722] transition-all">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-black mb-2 tracking-tight">FLEXIBLE TERMS</h3>
              <p className="text-gray-600">
                Month-to-month memberships. Cancel anytime. Yearly discounts available.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FF5722] transition-all">
              <div className="text-4xl mb-4">⚾</div>
              <h3 className="text-xl font-black mb-2 tracking-tight">NEAR THE YARD</h3>
              <p className="text-gray-600">
                Walking distance to Orioles Park at Camden Yards and Inner Harbor attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
            FIND US
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Right in the heart of downtown Baltimore.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-96 rounded-sm overflow-hidden mb-8 border-2 border-gray-200">
                <Image
                  src="/images/location.jpg"
                  alt="300 W Pratt Street Location"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-black mb-2 tracking-tight">ADDRESS</h3>
                  <p className="text-gray-700 text-lg">
                    300 W Pratt Street<br />
                    Baltimore, MD 21201
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black mb-2 tracking-tight">CONTACT</h3>
                  <a
                    href="mailto:jakeabel217@gmail.com"
                    className="text-[#FF5722] hover:underline text-lg"
                  >
                    jakeabel217@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-black mb-2 tracking-tight">HOURS</h3>
                  <p className="text-gray-700 text-lg">
                    24/7 access for members
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-12 rounded-sm border border-gray-200">
              <h3 className="text-3xl font-black mb-6 tracking-tight">
                READY TO GET STARTED?
              </h3>
              <p className="text-gray-700 mb-8 text-lg">
                Schedule a tour to see the space and meet the community. No commitment required.
              </p>
              <a
                href="https://calendly.com/jakeabel217/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF5722] text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-[#E64A19] transition-all hover:scale-105 mb-8"
              >
                SCHEDULE YOUR TOUR
              </a>

              <div className="border-t border-gray-300 pt-8">
                <h4 className="text-xl font-black mb-4 tracking-tight">WHY HOMEBASE?</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5722] font-bold">✓</span>
                    <span>Prime downtown location near Camden Yards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5722] font-bold">✓</span>
                    <span>Seamless 24/7 access with keycode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5722] font-bold">✓</span>
                    <span>Flexible month-to-month memberships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5722] font-bold">✓</span>
                    <span>Professional community of freelancers & entrepreneurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-16 rounded-sm overflow-hidden border-2 border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.8441901234567!2d-76.6189!3d39.2866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8046f3a1b3c8b%3A0x5c6f1a1f1a1f1a1f!2s300%20W%20Pratt%20St%2C%20Baltimore%2C%20MD%2021201!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HomeBase Location Map"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/hbworks-logo.png"
                alt="HomeBase"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-black tracking-tight">HOMEBASE</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                300 W Pratt Street, Baltimore, MD 21201
              </p>
              <a
                href="mailto:jakeabel217@gmail.com"
                className="text-[#FF5722] hover:underline text-sm"
              >
                jakeabel217@gmail.com
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} HomeBase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

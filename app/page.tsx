import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/hbworks-logo.png" alt="HomeBase" width={32} height={32} className="w-8 h-8" quality={100} />
            <span className="text-lg font-semibold tracking-tight text-gray-900">HOMEBASE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#space" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">The Space</a>
            <a href="#location" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Location</a>
            <a 
              href="https://calendly.com/jakeabel217/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-900 text-white px-6 py-2.5 text-base font-medium hover:bg-gray-800 transition-all"
            >
              Schedule Tour
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.jpg" 
            alt="HomeBase Workspace" 
            fill 
            className="object-cover opacity-50" 
            priority 
          />
        </div>
        <div className="relative z-10 text-center text-white px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight">
            Your workspace<br />in downtown Baltimore
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Flexible, professional office space near Camden Yards. Month-to-month. No commitment.
          </p>
          <a 
            href="https://calendly.com/jakeabel217/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-gray-900 px-10 py-3.5 text-lg font-medium hover:bg-gray-100 transition-all"
          >
            Schedule a Tour
          </a>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight text-gray-900">Membership Options</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Month-to-month flexibility. Cancel anytime. Yearly discounts available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Hot Desk */}
            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-all group">
              <h3 className="text-xl font-medium mb-2 text-gray-900">Hot Desk</h3>
              <div className="mb-6">
                <span className="text-4xl font-light text-gray-900">$200</span>
                <span className="text-gray-500 text-base font-light">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Flexible seating in shared workspace</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Meeting room access</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Premium coffee & amenities</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-gray-100 text-gray-900 px-6 py-3 text-base font-medium hover:bg-gray-900 hover:text-white transition-all"
              >
                Get Started
              </a>
            </div>

            {/* Dedicated Desk */}
            <div className="border-2 border-gray-900 p-8 relative group bg-gray-50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-1 text-xs font-medium tracking-wide">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">Dedicated Desk</h3>
              <div className="mb-6">
                <span className="text-4xl font-light text-gray-900">$300</span>
                <span className="text-gray-500 text-base font-light">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Your own assigned desk</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Lockable storage cabinet</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">All hot desk amenities</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-gray-900 text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-all"
              >
                Get Started
              </a>
            </div>

            {/* Private Office */}
            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-all group">
              <h3 className="text-xl font-medium mb-2 text-gray-900">Private Office</h3>
              <div className="mb-6">
                <span className="text-4xl font-light text-gray-900">$600</span>
                <span className="text-gray-500 text-base font-light">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Fully private office space</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Lockable door for security</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Priority meeting room access</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-gray-100 text-gray-900 px-6 py-3 text-base font-medium hover:bg-gray-900 hover:text-white transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Space Section */}
      <section id="space" className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight text-gray-900">The Space</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Everything you need to work productively in downtown Baltimore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96">
              <Image src="/images/workspace.jpg" alt="Workspace" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-900">24/7 Access</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Work on your schedule with custom keycode entry. Full access anytime, day or night, weekends and holidays.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-900">Prime Downtown Location</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  300 W Pratt Street — steps from Camden Yards and the Inner Harbor. Central to everything Baltimore offers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-900">Professional Amenities</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Premium coffee service, meeting rooms, high-speed internet, and all the essentials for a productive workday.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <svg className="w-7 h-7 text-gray-900 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-base font-medium mb-1.5 text-gray-900">Secure Access</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Custom keycodes for seamless 24/7 entry</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <svg className="w-7 h-7 text-gray-900 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <h3 className="text-base font-medium mb-1.5 text-gray-900">Meeting Rooms</h3>
              <p className="text-sm text-gray-600 leading-relaxed">First-come access to professional meeting spaces</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <svg className="w-7 h-7 text-gray-900 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <h3 className="text-base font-medium mb-1.5 text-gray-900">High-Speed WiFi</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Fast, reliable internet for all your needs</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <svg className="w-7 h-7 text-gray-900 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-base font-medium mb-1.5 text-gray-900">Flexible Terms</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Month-to-month with no long-term commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight text-gray-900">Visit Us</h2>
            <p className="text-lg text-gray-600">
              Downtown Baltimore. Walking distance to Camden Yards.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-96 mb-8 border border-gray-200">
                <Image 
                  src="/images/entrance.jpg" 
                  alt="300 W Pratt Street" 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Address</h3>
                  <p className="text-base text-gray-600">
                    300 W Pratt Street<br />
                    Baltimore, MD 21201
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Contact</h3>
                  <a href="mailto:jakeabel217@gmail.com" className="text-base text-gray-900 hover:text-gray-600">
                    jakeabel217@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Parking</h3>
                  <p className="text-base text-gray-600">
                    Monthly parking passes available for an additional fee
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 border border-gray-200">
              <h3 className="text-2xl font-light mb-4 text-gray-900">Schedule a Tour</h3>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                See the space in person and experience what makes HomeBase the perfect place for your work.
              </p>
              
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gray-900 text-white px-8 py-3.5 text-base font-medium hover:bg-gray-800 transition-all mb-10"
              >
                Book Your Tour
              </a>

              <div className="border-t border-gray-300 pt-8">
                <h4 className="text-base font-medium mb-4 text-gray-900">Why Choose HomeBase</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Prime downtown location near Camden Yards</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Seamless 24/7 access with custom keycodes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Flexible month-to-month memberships</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Professional community atmosphere</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 border border-gray-200 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.8441901234567!2d-76.6189!3d39.2866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8046f3a1b3c8b%3A0x5c6f1a1f1a1f1a1f!2s300%20W%20Pratt%20St%2C%20Baltimore%2C%20MD%2021201!5e0!3m2!1sen!2sus!4v1234567890" 
              width="100%" 
              height="500" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="HomeBase Location Map"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Image src="/hbworks-logo.png" alt="HomeBase" width={28} height={28} className="w-7 h-7 opacity-90" quality={100} />
              <span className="text-base font-medium tracking-tight">HOMEBASE</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">300 W Pratt Street, Baltimore, MD 21201</p>
              <a href="mailto:jakeabel217@gmail.com" className="text-gray-300 hover:text-white text-sm">
                jakeabel217@gmail.com
              </a>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} HomeBase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

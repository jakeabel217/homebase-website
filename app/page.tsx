import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/hbworks-logo.png" alt="HomeBase" width={32} height={32} className="w-8 h-8" quality={100} />
            <span className="text-lg font-semibold tracking-tight text-[#2D2D2D]">HOMEBASE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-[#FF5722] transition-colors">Pricing</a>
            <a href="#space" className="text-base font-medium text-gray-700 hover:text-[#FF5722] transition-colors">The Space</a>
            <a href="#location" className="text-base font-medium text-gray-700 hover:text-[#FF5722] transition-colors">Location</a>
            <a 
              href="https://calendly.com/jakeabel217/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#FF5722] text-white px-6 py-2.5 text-base font-medium hover:bg-[#E64A19] transition-all rounded-sm"
            >
              Schedule Tour
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Large hero.jpg */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2D2D2D]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.jpg" 
            alt="HomeBase Workspace" 
            fill 
            className="object-cover opacity-60" 
            priority 
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight">
            Your workspace<br />in downtown Baltimore
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Flexible, professional office space near Camden Yards. Month-to-month. No commitment.
          </p>
          <a 
            href="https://calendly.com/jakeabel217/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#FF5722] text-white px-10 py-4 text-lg font-medium hover:bg-[#E64A19] transition-all rounded-sm shadow-lg hover:shadow-xl"
          >
            Schedule a Tour
          </a>
        </div>
      </section>

      {/* Photo Gallery Grid - Showcasing 4 office images */}
      <section className="py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          <div className="relative h-64 lg:h-80 overflow-hidden group">
            <Image 
              src="/images/workspace.jpg" 
              alt="Workspace" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="relative h-64 lg:h-80 overflow-hidden group">
            <Image 
              src="/images/desk.jpg" 
              alt="Dedicated Desk" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="relative h-64 lg:h-80 overflow-hidden group">
            <Image 
              src="/images/building.jpg" 
              alt="Building" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="relative h-64 lg:h-80 overflow-hidden group">
            <Image 
              src="/images/entrance.jpg" 
              alt="Entrance" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

      {/* Pricing Section - Elegant cards with brand colors */}
      <section id="pricing" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-tight text-[#2D2D2D]">Membership Options</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Month-to-month flexibility. Cancel anytime. Yearly discounts available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Hot Desk */}
            <div className="border-2 border-gray-200 p-8 hover:border-[#FF5722] transition-all group bg-white rounded-sm shadow-sm hover:shadow-xl">
              <h3 className="text-2xl font-medium mb-2 text-[#2D2D2D]">Hot Desk</h3>
              <div className="mb-6">
                <span className="text-5xl font-light text-[#2D2D2D]">$200</span>
                <span className="text-gray-500 text-lg font-light">/month</span>
              </div>
              <ul className="space-y-4 mb-10 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Flexible seating in shared workspace</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Meeting room access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Premium coffee & amenities</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-gray-100 text-[#2D2D2D] px-6 py-3.5 text-base font-medium hover:bg-[#FF5722] hover:text-white transition-all rounded-sm"
              >
                Get Started
              </a>
            </div>

            {/* Dedicated Desk - Featured */}
            <div className="border-2 border-[#FF5722] p-8 relative group bg-gradient-to-b from-white to-orange-50/30 rounded-sm shadow-lg hover:shadow-2xl transform lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF5722] text-white px-6 py-1.5 text-sm font-medium tracking-wide rounded-sm">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-medium mb-2 text-[#2D2D2D]">Dedicated Desk</h3>
              <div className="mb-6">
                <span className="text-5xl font-light text-[#2D2D2D]">$300</span>
                <span className="text-gray-500 text-lg font-light">/month</span>
              </div>
              <ul className="space-y-4 mb-10 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Your own assigned desk</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Lockable storage cabinet</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">All hot desk amenities</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-[#FF5722] text-white px-6 py-3.5 text-base font-medium hover:bg-[#E64A19] transition-all rounded-sm shadow-md"
              >
                Get Started
              </a>
            </div>

            {/* Private Office */}
            <div className="border-2 border-gray-200 p-8 hover:border-[#FF5722] transition-all group bg-white rounded-sm shadow-sm hover:shadow-xl">
              <h3 className="text-2xl font-medium mb-2 text-[#2D2D2D]">Private Office</h3>
              <div className="mb-6">
                <span className="text-5xl font-light text-[#2D2D2D]">$600</span>
                <span className="text-gray-500 text-lg font-light">/month</span>
              </div>
              <ul className="space-y-4 mb-10 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Fully private office space</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Lockable door for security</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Priority meeting room access</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-gray-100 text-[#2D2D2D] px-6 py-3.5 text-base font-medium hover:bg-[#FF5722] hover:text-white transition-all rounded-sm"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Space Section with Amenities - workspace.jpg featured */}
      <section id="space" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-tight text-[#2D2D2D]">The Space</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Everything you need to work productively in downtown Baltimore.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-sm overflow-hidden shadow-xl">
              <Image src="/images/workspace.jpg" alt="Modern Workspace" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF5722]/10 rounded-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2D2D2D]">24/7 Access</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Work on your schedule with custom keycode entry. Full access anytime, day or night, weekends and holidays.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF5722]/10 rounded-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2D2D2D]">Prime Downtown Location</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    300 W Pratt Street — steps from Camden Yards and the Inner Harbor. Central to everything Baltimore offers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF5722]/10 rounded-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2D2D2D]">Premium Amenities</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Premium coffee service, meeting rooms, high-speed internet, and all the essentials for a productive workday.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Grid with properly-sized icons */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 border border-gray-200 rounded-sm hover:border-[#FF5722] transition-all hover:shadow-lg">
              <div className="w-10 h-10 mb-4">
                <svg className="w-full h-full text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">Secure Access</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Custom keycodes for seamless 24/7 entry</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-sm hover:border-[#FF5722] transition-all hover:shadow-lg">
              <div className="w-10 h-10 mb-4">
                <svg className="w-full h-full text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">Meeting Rooms</h3>
              <p className="text-sm text-gray-600 leading-relaxed">First-come access to professional meeting spaces</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-sm hover:border-[#FF5722] transition-all hover:shadow-lg">
              <div className="w-10 h-10 mb-4">
                <svg className="w-full h-full text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">High-Speed WiFi</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Fast, reliable internet for all your needs</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-sm hover:border-[#FF5722] transition-all hover:shadow-lg">
              <div className="w-10 h-10 mb-4">
                <svg className="w-full h-full text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">Flexible Terms</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Month-to-month with no long-term commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section with aerial.jpg and location.jpg */}
      <section id="location" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-tight text-[#2D2D2D]">Visit Us</h2>
            <p className="text-lg text-gray-600 font-light">
              Downtown Baltimore. Walking distance to Camden Yards.
            </p>
          </div>

          {/* Hero Location Image - aerial.jpg */}
          <div className="relative h-96 mb-12 rounded-sm overflow-hidden shadow-2xl">
            <Image 
              src="/images/aerial.jpg" 
              alt="Aerial View of Downtown Baltimore" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-light mb-2">300 W Pratt Street</h3>
                <p className="text-lg">Heart of downtown Baltimore</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="relative h-96 mb-8 rounded-sm overflow-hidden shadow-lg">
                <Image 
                  src="/images/location.jpg" 
                  alt="Location View" 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="space-y-6 bg-gray-50 p-8 rounded-sm">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">Address</h3>
                    <p className="text-base text-gray-600">
                      300 W Pratt Street<br />
                      Baltimore, MD 21201
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">Contact</h3>
                    <a href="mailto:jakeabel217@gmail.com" className="text-base text-[#FF5722] hover:text-[#E64A19] transition-colors">
                      jakeabel217@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">Parking</h3>
                    <p className="text-base text-gray-600">
                      Monthly parking passes available for an additional fee
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF5722]/5 to-orange-50 p-10 rounded-sm border-2 border-[#FF5722]/20">
              <h3 className="text-3xl font-light mb-4 text-[#2D2D2D]">Schedule a Tour</h3>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                See the space in person and experience what makes HomeBase the perfect place for your work.
              </p>
              
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-[#FF5722] text-white px-10 py-4 text-lg font-medium hover:bg-[#E64A19] transition-all mb-10 rounded-sm shadow-lg hover:shadow-xl"
              >
                Book Your Tour
              </a>

              <div className="border-t-2 border-[#FF5722]/20 pt-8">
                <h4 className="text-lg font-semibold mb-6 text-[#2D2D2D]">Why Choose HomeBase</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Prime downtown location near Camden Yards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Seamless 24/7 access with custom keycodes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Flexible month-to-month memberships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">Professional community atmosphere</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-sm overflow-hidden shadow-lg border border-gray-200">
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
      <footer className="bg-[#2D2D2D] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Image src="/hbworks-logo.png" alt="HomeBase" width={28} height={28} className="w-7 h-7 opacity-90" quality={100} />
              <span className="text-base font-semibold tracking-tight">HOMEBASE</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">300 W Pratt Street, Baltimore, MD 21201</p>
              <a href="mailto:jakeabel217@gmail.com" className="text-[#FF5722] hover:text-[#E64A19] text-sm transition-colors">
                jakeabel217@gmail.com
              </a>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} HomeBase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

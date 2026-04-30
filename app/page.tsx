'use client';

import Image from 'next/image';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF5722] rounded flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">HOMEBASE</span>
            </div>
            
            {/* Horizontal Nav - Always Visible */}
            <div className="flex items-center gap-6">
              <button onClick={() => scrollToSection('membership')} className="text-gray-700 hover:text-[#FF5722] transition text-sm font-medium">
                Membership
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-[#FF5722] transition text-sm font-medium">
                Amenities
              </button>
              <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-[#FF5722] transition text-sm font-medium">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#FF5722] transition text-sm font-medium">
                Contact
              </button>
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

      {/* Hero Section */}
      <section className="relative h-screen pt-16">
        <Image 
          src="/images/hero.jpg" 
          alt="HomeBase Workspace" 
          fill 
          className="object-cover"
          priority
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div 
            className="max-w-3xl"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '0.75rem',
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              paddingTop: '2rem',
              paddingBottom: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Your Downtown Baltimore Workspace
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Flexible co-working space near Camden Yards. Professional. Accessible 24/7. No long-term commitment.
            </p>
            <a 
              href="https://calendly.com/jakeabel217/30min" 
              target="_blank"
              className="inline-block text-[#FF5722] text-lg font-bold hover:text-[#E64A19] transition underline"
            >
              Schedule Your Tour →
            </a>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section id="membership" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Membership Options</h2>
            <p className="text-lg text-gray-600 mb-4">Month-to-month flexibility. Cancel anytime. Yearly discounts available.</p>
            <a 
              href="https://calendly.com/jakeabel217/30min" 
              target="_blank"
              className="inline-block text-[#FF5722] text-lg font-bold hover:text-[#E64A19] transition underline"
            >
              Schedule a Tour →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hot Desk */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hot Desk</h3>
              <div className="text-4xl font-bold text-[#FF5722] mb-6">$200<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible seating in shared workspace</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Meeting room access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Premium coffee & amenities</span>
                </li>
              </ul>
            </div>

            {/* Dedicated Desk - Featured */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition border-2 border-[#FF5722] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#FF5722] text-white px-6 py-2 rounded-md text-xs font-bold tracking-wide shadow-md">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-3">Dedicated Desk</h3>
              <div className="text-4xl font-bold text-[#FF5722] mb-6">$300<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Your own assigned desk</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lockable storage cabinet</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">All hot desk amenities</span>
                </li>
              </ul>
            </div>

            {/* Private Office */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Private Office</h3>
              <div className="text-4xl font-bold text-[#FF5722] mb-6">$600<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fully private office space</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lockable door for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority meeting room access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">The Space</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="/images/workspace.jpg" alt="Workspace" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="/images/desk.jpg" alt="Desk" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="/images/building.jpg" alt="Building" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="/images/entrance.jpg" alt="Entrance" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="/images/aerial.jpg" alt="Aerial View" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="/images/location.jpg" alt="Location" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Amenities</h2>
            <p className="text-lg text-gray-600">Everything you need to work productively</p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" className="text-[#FF5722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900">24/7 Secure Access</h3>
                <p className="text-sm text-gray-600">Custom keycodes anytime</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg width="24" height="24" className="text-[#FF5722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900">Meeting Rooms</h3>
                <p className="text-sm text-gray-600">Professional spaces</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg width="24" height="24" className="text-[#FF5722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900">High-Speed WiFi</h3>
                <p className="text-sm text-gray-600">Fast, reliable internet</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg width="24" height="24" className="text-[#FF5722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900">Flexible Terms</h3>
                <p className="text-sm text-gray-600">Month-to-month</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg width="24" height="24" className="text-[#FF5722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900">Premium Coffee</h3>
                <p className="text-sm text-gray-600">Complimentary beverages</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg width="24" height="24" className="text-[#FF5722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900">Kitchen & Fridge</h3>
                <p className="text-sm text-gray-600">Shared facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Prime Downtown Location</h2>
            <p className="text-xl text-gray-600 mb-8">300 W Pratt Street — steps from Camden Yards and the Inner Harbor</p>
          </div>

          {/* Map First */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg mb-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.5879474489676!2d-76.62094!3d39.28556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803b4a0b88cf1%3A0x9e8e4e4e8e4e8e4e!2s300%20W%20Pratt%20St%2C%20Baltimore%2C%20MD%2021201!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Details Below */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-700">300 W Pratt Street<br/>Baltimore, MD 21201</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-gray-900 mb-2">Parking</h3>
              <p className="text-gray-700">Monthly parking available for additional fee</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-gray-900 mb-2">Nearby</h3>
              <p className="text-gray-700">Walking distance to restaurants, entertainment, and transit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-4">Ready to see the space? Let's schedule a tour.</p>
          
          <a 
            href="https://calendly.com/jakeabel217/30min" 
            target="_blank"
            className="inline-block text-[#FF5722] text-lg font-bold hover:text-[#E64A19] transition underline mb-12"
          >
            Schedule a Tour →
          </a>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:jakeabel217@gmail.com" className="text-[#FF5722] hover:underline">jakeabel217@gmail.com</a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:443-376-8512" className="text-[#FF5722] hover:underline">443-376-8512</a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-700">Jake Abel</p>
            </div>
          </div>

          <a 
            href="https://calendly.com/jakeabel217/30min" 
            target="_blank"
            className="inline-block text-[#FF5722] text-xl font-bold hover:text-[#E64A19] transition underline"
          >
            Schedule Your Tour Now →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-2xl font-bold mb-4 block">HOMEBASE</span>
          <p className="text-gray-400 mb-2">300 W Pratt Street, Baltimore, MD 21201</p>
          <p className="text-gray-400 mb-6">
            <a href="mailto:jakeabel217@gmail.com" className="text-[#FF5722] hover:underline">jakeabel217@gmail.com</a>
            {' '} | {' '}
            <a href="tel:443-376-8512" className="text-[#FF5722] hover:underline">443-376-8512</a>
          </p>
          <p className="text-gray-500 text-sm">© 2026 HomeBase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

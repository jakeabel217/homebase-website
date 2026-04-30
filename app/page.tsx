'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image src="/hbworks-logo.png" alt="HomeBase" width={28} height={28} quality={100} />
              <span className="text-xl font-bold text-gray-900">HOMEBASE</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('membership')} className="text-gray-700 hover:text-[#FF5722] transition">
                Membership
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-[#FF5722] transition">
                Amenities
              </button>
              <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-[#FF5722] transition">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#FF5722] transition">
                Contact
              </button>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank"
                className="bg-[#FF5722] text-white px-6 py-2 rounded hover:bg-[#E64A19] transition"
              >
                Book Tour
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('membership')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
                Membership
              </button>
              <button onClick={() => scrollToSection('amenities')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
                Amenities
              </button>
              <button onClick={() => scrollToSection('location')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
                Contact
              </button>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank"
                className="block px-4 py-2 bg-[#FF5722] text-white rounded hover:bg-[#E64A19] transition text-center"
              >
                Book Tour
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen pt-16">
        <Image 
          src="/images/hero.jpg" 
          alt="HomeBase Workspace" 
          fill 
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Your Downtown Baltimore Workspace
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Flexible co-working space near Camden Yards. Professional. Accessible 24/7. No long-term commitment.
            </p>
            <a 
              href="https://calendly.com/jakeabel217/30min" 
              target="_blank"
              className="inline-block bg-[#FF5722] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E64A19] transition shadow-lg"
            >
              Schedule Your Tour
            </a>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section id="membership" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Membership Options</h2>
            <p className="text-lg text-gray-600">Month-to-month flexibility. Cancel anytime. Yearly discounts available.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hot Desk */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hot Desk</h3>
              <div className="text-4xl font-bold text-[#FF5722] mb-6">$200<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible seating in shared workspace</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Meeting room access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Premium coffee & amenities</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank"
                className="block text-center bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Get Started
              </a>
            </div>

            {/* Dedicated Desk - Featured */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition border-2 border-[#FF5722] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF5722] text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dedicated Desk</h3>
              <div className="text-4xl font-bold text-[#FF5722] mb-6">$300<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Your own assigned desk</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lockable storage cabinet</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">All hot desk amenities</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank"
                className="block text-center bg-[#FF5722] text-white px-6 py-3 rounded hover:bg-[#E64A19] transition"
              >
                Get Started
              </a>
            </div>

            {/* Private Office */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Private Office</h3>
              <div className="text-4xl font-bold text-[#FF5722] mb-6">$600<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fully private office space</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lockable door for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#FF5722] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority meeting room access</span>
                </li>
              </ul>
              <a 
                href="https://calendly.com/jakeabel217/30min" 
                target="_blank"
                className="block text-center bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">The Space</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Secure Access</h3>
              <p className="text-gray-600">Custom keycodes for seamless entry anytime, day or night</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Meeting Rooms</h3>
              <p className="text-gray-600">First-come access to professional meeting spaces</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-Speed WiFi</h3>
              <p className="text-gray-600">Fast, reliable internet for all your needs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Month-to-month with no long-term commitment</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Coffee</h3>
              <p className="text-gray-600">Complimentary coffee and beverage service</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kitchen & Fridge</h3>
              <p className="text-gray-600">Shared kitchen facilities and refrigerator space</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="relative py-20 px-4">
        <div className="absolute inset-0">
          <Image src="/images/aerial.jpg" alt="Location" fill className="object-cover brightness-50" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prime Downtown Location</h2>
          <p className="text-xl mb-8">300 W Pratt Street — steps from Camden Yards and the Inner Harbor</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 inline-block">
            <p className="text-lg mb-2">Monthly parking available for additional fee</p>
            <p className="text-lg">Walking distance to restaurants, entertainment, and transit</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">Ready to see the space? Let's schedule a tour.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:jakeabel217@gmail.com" className="text-[#FF5722] hover:underline">jakeabel217@gmail.com</a>
            </div>

            <div>
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:443-376-8512" className="text-[#FF5722] hover:underline">443-376-8512</a>
            </div>

            <div>
              <div className="w-12 h-12 bg-[#FF5722]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-700">Jake Abel</p>
            </div>
          </div>

          <a 
            href="https://calendly.com/jakeabel217/30min" 
            target="_blank"
            className="inline-block bg-[#FF5722] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#E64A19] transition shadow-lg"
          >
            Schedule Your Tour Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/hbworks-logo.png" alt="HomeBase" width={32} height={32} quality={100} />
            <span className="text-2xl font-bold">HOMEBASE</span>
          </div>
          <p className="text-gray-400 mb-2">300 W Pratt Street, Baltimore, MD 21201</p>
          <p className="text-gray-400 mb-6">
            <a href="mailto:jakeabel217@gmail.com" className="hover:text-[#FF5722]">jakeabel217@gmail.com</a>
            {' '} | {' '}
            <a href="tel:443-376-8512" className="hover:text-[#FF5722]">443-376-8512</a>
          </p>
          <p className="text-gray-500 text-sm">© 2026 HomeBase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

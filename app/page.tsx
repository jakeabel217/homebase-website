'use client';

// ─── Formspree endpoint ────────────────────────────────────────────────────────
const FORMSPREE_URL = 'https://formspree.io/f/xoeakrda';
// ──────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // State for the pricing-adjacent email capture
  const [pricingName, setPricingName] = useState('');
  const [pricingEmail, setPricingEmail] = useState('');
  const [pricingSubmitting, setPricingSubmitting] = useState(false);
  const [pricingSubmitted, setPricingSubmitted] = useState(false);

  const photos = [
    { src: '/images/building.jpg', alt: 'Building' },
    { src: '/images/aerial.jpg', alt: 'Aerial View' },
    { src: '/images/entrance.jpg', alt: 'Entrance' },
    { src: '/images/office1.jpg', alt: 'Private Office' },
    { src: '/images/office2.jpg', alt: 'Reception Area' },
    { src: '/images/floorplan.png', alt: 'Floor Plan' },
    { src: '/images/gallery-01.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-02.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-03.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-04.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-05.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-06.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-07.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-08.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-09.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-10.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-11.jpg', alt: 'HomeBase Baltimore workspace' },
    { src: '/images/gallery-12.jpg', alt: 'HomeBase Baltimore workspace' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNextPhoto = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  // Clamp desktop starting index so we always show 3 photos
  const desktopStartIndex = Math.min(currentPhotoIndex, photos.length - 3);

  return (
    <div className="bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {!isScrolled && (
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/icon.png" 
                  alt="HomeBase Icon" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
                <Image 
                  src="/images/logo.png" 
                  alt="HOMEBASE" 
                  width={190} 
                  height={25}
                  className="object-contain"
                />
              </div>
            )}
            
            {/* Desktop Nav — hidden on mobile */}
            <div className={`hidden md:flex items-center gap-6 ${isScrolled ? 'ml-0' : 'ml-auto'}`}>
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
              <Link href="/blog" className="text-gray-700 hover:text-[#FF5722] transition text-sm font-medium">
                Blog
              </Link>
              <a 
                href="https://calendly.com/homebasebaltimore/30min" 
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

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden ml-auto p-2 text-gray-700 hover:text-[#FF5722] transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-4">
              <button onClick={() => scrollToSection('membership')} className="text-left text-gray-700 hover:text-[#FF5722] transition text-sm font-medium py-1">
                Membership
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-left text-gray-700 hover:text-[#FF5722] transition text-sm font-medium py-1">
                Amenities
              </button>
              <button onClick={() => scrollToSection('location')} className="text-left text-gray-700 hover:text-[#FF5722] transition text-sm font-medium py-1">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-[#FF5722] transition text-sm font-medium py-1">
                Contact
              </button>
              <Link href="/blog" className="text-gray-700 hover:text-[#FF5722] transition text-sm font-medium py-1" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
              <a 
                href="https://calendly.com/homebasebaltimore/30min" 
                target="_blank"
                className="inline-block w-fit text-[#FF5722] font-semibold hover:text-[#E64A19] transition text-sm whitespace-nowrap"
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
          )}
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
            className="max-w-3xl px-4 py-6 md:px-10 md:py-8"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Your Downtown Baltimore Workspace
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Flexible co-working and office space near Camden Yards. Professional. Accessible 24/7. No long-term commitment.
            </p>
            <a 
              href="https://calendly.com/homebasebaltimore/30min" 
              target="_blank"
              className="inline-block text-[#FF5722] text-lg font-bold hover:text-[#E64A19] transition underline"
            >
              Schedule Your Tour →
            </a>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Not ready to book a tour yet?</h2>
          <p className="text-gray-600 mb-8">Drop your info and we&apos;ll reach out with availability and pricing.</p>
          {leadSubmitted ? (
            <p className="text-green-600 font-semibold text-lg">Thanks! We&apos;ll be in touch soon.</p>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!leadName.trim() || !leadEmail.trim() || !leadEmail.includes('@')) return;
                setLeadSubmitting(true);
                try {
                  await fetch('https://formspree.io/f/xwkgwjkl', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ name: leadName, email: leadEmail }),
                  });
                  setLeadSubmitted(true);
                } catch {
                  // silent fail — still show success to avoid confusing the visitor
                  setLeadSubmitted(true);
                } finally {
                  setLeadSubmitting(false);
                }
              }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="text"
                required
                placeholder="Your name"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                className="px-4 py-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF5722] sm:w-48"
              />
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                className="px-4 py-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF5722] sm:w-56"
              />
              <button
                type="submit"
                disabled={leadSubmitting}
                className="bg-[#FF5722] text-white font-semibold px-6 py-3 rounded hover:bg-[#E64A19] transition disabled:opacity-60"
              >
                {leadSubmitting ? 'Sending…' : 'Get Availability'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Membership Options */}
      <section id="membership" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Membership Options</h2>
            <p className="text-lg text-gray-600 mb-4">Month-to-month flexibility. Cancel anytime. Yearly discounts available.</p>
            <a 
              href="https://calendly.com/homebasebaltimore/30min" 
              target="_blank"
              className="inline-block text-[#FF5722] text-lg font-bold hover:text-[#E64A19] transition underline"
            >
              Schedule a Tour →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Hot Desk */}
            <div className="bg-gray-100 p-6 md:p-16 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hot Desk</h3>
              <div className="text-3xl font-bold text-[#FF5722] mb-4">$200<span className="text-base text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible seating in shared workspace</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Meeting room access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Premium coffee & amenities</span>
                </li>
              </ul>
              <a href="https://calendly.com/homebasebaltimore/30min" target="_blank" className="block text-center w-full mt-4 bg-gray-900 text-white py-3 px-4 rounded hover:bg-gray-800 transition text-sm font-medium">
                Schedule a Tour →
              </a>
            </div>

            {/* Dedicated Desk - Featured */}
            <div className="bg-gray-100 p-6 md:p-16 rounded-lg shadow-xl hover:shadow-2xl transition border-2 border-[#FF5722] relative mt-4 sm:mt-0">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#FF5722] text-white px-4 py-1 rounded-md text-xs font-bold tracking-wide shadow-md whitespace-nowrap">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">Dedicated Desk</h3>
              <div className="text-3xl font-bold text-[#FF5722] mb-4">$300<span className="text-base text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Your own assigned desk</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lockable storage cabinet</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">All hot desk amenities</span>
                </li>
              </ul>
              <a href="https://calendly.com/homebasebaltimore/30min" target="_blank" className="block text-center w-full mt-4 bg-gray-900 text-white py-3 px-4 rounded hover:bg-gray-800 transition text-sm font-medium">
                Schedule a Tour →
              </a>
            </div>

            {/* Private Office */}
            <div className="bg-gray-100 p-6 md:p-16 rounded-lg shadow-md hover:shadow-xl transition sm:col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Private Office</h3>
              <div className="text-3xl font-bold text-[#FF5722] mb-4">from $500<span className="text-base text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Single &amp; double private offices</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lockable door for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 keycode access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" className="w-4 h-4 text-[#FF5722] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority meeting room access</span>
                </li>
              </ul>
              <a href="https://calendly.com/homebasebaltimore/30min" target="_blank" className="block text-center w-full mt-4 bg-gray-900 text-white py-3 px-4 rounded hover:bg-gray-800 transition text-sm font-medium">
                Schedule a Tour →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Email Capture — lower-commitment entry point near membership cards */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5722] mb-2">No commitment required</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Curious about availability?
          </h2>
          <p className="text-gray-500 mb-8 text-sm md:text-base">
            Share your name and email and we&apos;ll reach out with current openings — no sales pressure.
          </p>
          {pricingSubmitted ? (
            <div className="inline-flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-6 py-3 rounded-lg font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Got it! We&apos;ll be in touch soon.
            </div>
          ) : (
            <form
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                if (!pricingName.trim() || !pricingEmail.trim() || !pricingEmail.includes('@')) return;
                setPricingSubmitting(true);
                try {
                  await fetch(FORMSPREE_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ name: pricingName, email: pricingEmail, source: 'pricing-section' }),
                  });
                  setPricingSubmitted(true);
                } catch {
                  // Silent fail — show success to avoid confusing the visitor
                  setPricingSubmitted(true);
                } finally {
                  setPricingSubmitting(false);
                }
              }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="text"
                required
                placeholder="First name"
                value={pricingName}
                onChange={(e) => setPricingName(e.target.value)}
                className="px-4 py-3 rounded border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5722] sm:w-44"
              />
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={pricingEmail}
                onChange={(e) => setPricingEmail(e.target.value)}
                className="px-4 py-3 rounded border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5722] sm:w-60"
              />
              <button
                type="submit"
                disabled={pricingSubmitting}
                className="bg-[#FF5722] text-white font-semibold px-6 py-3 rounded hover:bg-[#E64A19] transition disabled:opacity-60 whitespace-nowrap"
              >
                {pricingSubmitting ? 'Sending…' : 'Get Availability'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 px-4 bg-[#2D2D2D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Amenities</h2>
            <p className="text-lg text-gray-300">Everything you need to work productively</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-[#3A3A3A] p-6 md:p-16 rounded-lg hover:bg-[#404040] transition text-center">
              <svg width="24" height="24" className="text-[#FF5722] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="font-bold text-white mb-2">24/7 Secure Access</h3>
              <p className="text-sm text-gray-300">Custom keycodes anytime</p>
            </div>

            <div className="bg-[#3A3A3A] p-6 md:p-16 rounded-lg hover:bg-[#404040] transition text-center">
              <svg width="24" height="24" className="text-[#FF5722] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="font-bold text-white mb-2">Meeting Rooms</h3>
              <p className="text-sm text-gray-300">Professional spaces</p>
            </div>

            <div className="bg-[#3A3A3A] p-6 md:p-16 rounded-lg hover:bg-[#404040] transition text-center">
              <svg width="24" height="24" className="text-[#FF5722] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <h3 className="font-bold text-white mb-2">High-Speed WiFi</h3>
              <p className="text-sm text-gray-300">Fast, reliable internet</p>
            </div>

            <div className="bg-[#3A3A3A] p-6 md:p-16 rounded-lg hover:bg-[#404040] transition text-center">
              <svg width="24" height="24" className="text-[#FF5722] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-bold text-white mb-2">Mailing Address</h3>
              <p className="text-sm text-gray-300">Receive packages and business mail</p>
            </div>

            <div className="bg-[#3A3A3A] p-6 md:p-16 rounded-lg hover:bg-[#404040] transition text-center">
              <svg width="24" height="24" className="text-[#FF5722] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="font-bold text-white mb-2">Premium Coffee</h3>
              <p className="text-sm text-gray-300">Complimentary beverages</p>
            </div>

            <div className="bg-[#3A3A3A] p-6 md:p-16 rounded-lg hover:bg-[#404040] transition text-center">
              <svg width="24" height="24" className="text-[#FF5722] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <h3 className="font-bold text-white mb-2">Kitchen & Fridge</h3>
              <p className="text-sm text-gray-300">Shared facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Prime Downtown Location</h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 md:p-16 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <h3 className="font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-700">300 W Pratt Street<br/>Baltimore, MD 21201</p>
            </div>
            <div className="bg-white p-6 md:p-16 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <h3 className="font-bold text-gray-900 mb-2">Parking</h3>
              <p className="text-gray-700">Monthly parking available for additional fee</p>
            </div>
            <div className="bg-white p-6 md:p-16 rounded-lg shadow-md hover:shadow-xl transition text-center sm:col-span-2 md:col-span-1">
              <h3 className="font-bold text-gray-900 mb-2">Nearby</h3>
              <p className="text-gray-700">Walking distance to restaurants, entertainment, and transit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-12">Photo Gallery</h2>
          <div className="relative">
            {/* Mobile gallery — single photo */}
            <div className="block md:hidden">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={photos[currentPhotoIndex].src} 
                  alt={photos[currentPhotoIndex].alt} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handlePrevPhoto}
                  disabled={currentPhotoIndex === 0}
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous photo"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm text-gray-500">{currentPhotoIndex + 1} / {photos.length}</span>
                <button
                  onClick={handleNextPhoto}
                  disabled={currentPhotoIndex === photos.length - 1}
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next photo"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop gallery — 3 photos */}
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-4">
                {photos.slice(desktopStartIndex, desktopStartIndex + 3).map((photo, index) => (
                  <div key={desktopStartIndex + index} className="overflow-hidden rounded-lg">
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="w-full h-64 object-cover hover:scale-110 transition duration-300" 
                    />
                  </div>
                ))}
              </div>
              
              {/* Desktop Navigation Arrows */}
              {desktopStartIndex > 0 && (
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
                  aria-label="Previous photos"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {desktopStartIndex < photos.length - 3 && (
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
                  aria-label="Next photos"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 px-4 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12">Details</h2>
          <div className="space-y-6 text-white text-lg leading-relaxed">
            <p>
              Home Base at 300 W Pratt offers flexible, affordable private offices and coworking in downtown Baltimore. Near Camden Yards, the Convention Center, and major highways, it’s perfect for small businesses, freelancers, and remote workers. With on-site spots like Chipotle and Dunkin’, plus Starbucks and Jimmy John’s nearby, convenience is built-in. Explore Little Italy and Harbor East for local restaurants and shops. If you’re seeking a productive, straightforward workspace, this is a great place to lock in!
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-4">Ready to see the space? Let's schedule a tour.</p>
            <a 
              href="https://calendly.com/homebasebaltimore/30min" 
              target="_blank"
              className="inline-block text-[#FF5722] text-lg font-bold hover:text-[#E64A19] transition underline"
            >
              Schedule a Tour →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-2xl font-bold mb-6 block">HOMEBASE</span>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 mb-6">
            <div>
              <span style={{ color: '#ffffff' }}>Email: </span>
              <a href="mailto:jakeabel217@gmail.com" style={{ color: '#FF5722' }} className="hover:underline">jakeabel217@gmail.com</a>
            </div>
            <div>
              <span style={{ color: '#ffffff' }}>Phone: </span>
              <a href="tel:443-376-8512" style={{ color: '#FF5722' }} className="hover:underline">443-376-8512</a>
            </div>
          </div>
          <p className="text-gray-400 mb-6">300 W Pratt Street, Baltimore, MD 21201</p>
          <p className="text-gray-500 text-sm">© 2026 HomeBase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

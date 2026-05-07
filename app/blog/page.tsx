import { blogPosts } from './blog-posts';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HomeBase Blog - Coworking Tips & Industry News",
  description: "Read articles about coworking spaces, workspace productivity, and Baltimore's business community.",
  openGraph: {
    title: "HomeBase Blog - Coworking Tips & Industry News",
    description: "Read articles about coworking spaces, workspace productivity, and Baltimore's business community.",
    url: "https://homebase-website.vercel.app/blog",
    type: "website",
  },
};

export default function BlogIndex() {
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
              <Link href="/blog" className="text-[#FF5722] font-semibold text-sm">
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="relative flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              HomeBase Blog
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Tips, insights, and stories about coworking, workspace, and building community in Baltimore
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="h-48 bg-gradient-to-br from-[#FF5722] to-[#E64A19] relative overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-xs font-semibold text-[#FF5722] uppercase tracking-wide mb-3">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-gray-500 mb-4 font-medium">
                    By {post.author}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-[#FF5722] font-semibold hover:text-[#E64A19] transition text-sm"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to find your perfect workspace?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Tour HomeBase Baltimore and discover why hundreds of professionals have made it their workspace home.
          </p>
          <a
            href="https://calendly.com/jakeabel217/30min"
            target="_blank"
            className="inline-block px-8 py-3 bg-[#FF5722] text-white font-semibold rounded-lg hover:bg-[#E64A19] transition"
          >
            Book Your Free Tour
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
    </div>
  );
}

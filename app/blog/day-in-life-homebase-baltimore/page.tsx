import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "A Day in the Life: Working from HomeBase Baltimore",
  description: "A first-person narrative from a HomeBase member showcasing a typical day at Baltimore's premier coworking space.",
  openGraph: {
    title: "A Day in the Life: Working from HomeBase Baltimore",
    description: "A first-person narrative from a HomeBase member showcasing a typical day at Baltimore's premier coworking space.",
    url: "https://homebase-website.vercel.app/blog/day-in-life-homebase-baltimore",
    type: "article",
  },
};

export default function DayInLifePost() {
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
        <div className="mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="text-sm font-semibold text-[#FF5722] uppercase tracking-wide mb-4">
                Published January 25, 2026
              </div>
              <div className="text-sm text-gray-600 mb-6">
                By Sarah Mitchell, Marketing Consultant & HomeBase Member
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                A Day in the Life: Working from HomeBase Baltimore
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed font-normal italic">
                Sarah Mitchell is a marketing consultant and digital strategist who's been a HomeBase member for nearly two years. We asked her to share what a typical workday looks like at HomeBase Baltimore. Here's her story.
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-8 text-gray-700 leading-relaxed">
              <hr className="my-8 border-gray-200" />

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">7:45 AM – The Commute That Doesn't Suck</h2>

              <p className="text-lg">
                I'll admit it: before HomeBase, I dreaded mornings. Working from home meant rolling out of bed ten minutes before my first call, still in pajamas, scrambling to look presentable from the shoulders up. It was convenient but soul-crushing.
              </p>

              <p className="text-lg">
                Now? I actually enjoy my commute. I catch the Light Rail from my neighborhood in Federal Hill, and fifteen minutes later I'm stepping off at the Convention Center stop, right across from the building. Some mornings I grab coffee from the shop on the ground floor, but honestly, HomeBase keeps the good stuff stocked, so I usually wait.
              </p>

              <p className="text-lg">
                There's something powerful about the ritual of going to work. It creates boundaries that working from home never did. When I walk into HomeBase, I'm in work mode. When I leave, I'm done. That separation has been a game-changer for my work-life balance.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">8:00 AM – Settling In</h2>

              <p className="text-lg">
                I swipe my key card at the entrance – having 24/7 access as a dedicated desk member is clutch for the occasional early morning or late evening when I need to power through a project. The space is already buzzing with the early birds. Some faces I recognize, others are new. That's one of the things I love about HomeBase; there's a steady core community but fresh energy from new members and day pass visitors.
              </p>

              <p className="text-lg">
                My dedicated desk is near the windows overlooking Pratt Street. When I first joined, I started with a hot desk membership to test the waters, but within a month I upgraded to a dedicated desk. Having my own space – somewhere I can leave my monitor, ergonomic keyboard, and that weird lumbar pillow I swear by – makes a huge difference.
              </p>

              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src="/images/workspace.jpg"
                  alt="HomeBase Baltimore workspace"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
                <Image
                  src="/images/desk.jpg"
                  alt="HomeBase member working"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>

              <p className="text-lg">
                I drop my bag, fire up my laptop, and head to the kitchen for that aforementioned excellent coffee. HomeBase isn't messing around with the coffee situation – we're talking real beans, good equipment, and unlimited refills. There's also tea, sparkling water, and usually some fruit or snacks available. Small thing, but it adds up when you're not spending $6 a day at Starbucks.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">8:30 AM – Deep Work Block</h2>

              <p className="text-lg">
                I've learned to protect my mornings for focused work. Before HomeBase, I'd start the day reactive – emails, Slack messages, putting out fires. Now I block 8:30-11:30 AM for deep work on client projects.
              </p>

              <p className="text-lg">
                The environment helps. Yes, there are other people around, but everyone's respectful. There's a shared understanding that we're all here to work. If someone needs to take a call, they step into one of the phone booths or grab a conference room. The space has this productive energy that's hard to replicate anywhere else.
              </p>

              <p className="text-lg">
                The internet speed is incredible too. I work with large design files and video content, and I've never once had to worry about bandwidth. It just works, every time. Coming from my home internet that would randomly die mid-client call, this alone was worth the membership.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">11:30 AM – Coffee Break & Unexpected Networking</h2>

              <p className="text-lg">
                I head back to the kitchen for a refill and run into Marcus, who runs a small app development studio from one of the private offices. We end up chatting about a client project I'm working on that might benefit from a custom tool. Five minutes later, we've scheduled a proper meeting for next week.
              </p>

              <p className="text-lg">
                This happens all the time at HomeBase. Not in a forced, networking-event kind of way, but organically. You're getting coffee, someone's microwaving lunch, you start talking. Turns out the graphic designer two desks over does exactly the type of illustration work your client needs. The nonprofit director you met at last month's happy hour connects you to a potential client. The developer struggling with their marketing strategy picks your brain, and you end up with a new client.
              </p>

              <p className="text-lg">
                I've gotten three clients directly from HomeBase connections, and countless referrals. The ROI on my membership from networking alone would justify it, never mind the actual workspace.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">12:00 PM – Client Call in the Conference Room</h2>

              <p className="text-lg">
                I have a video call with a client in San Francisco at noon. I booked the small conference room through HomeBase's reservation system (super easy, just takes a few taps on my phone). The room is professional, quiet, and equipped with a big screen if I need to share presentations.
              </p>

              <p className="text-lg">
                Here's the thing: I could take this call at my desk, but having a dedicated meeting space makes a difference. The client sees a professional environment. I'm not worried about background noise or someone walking behind me. It's just more polished.
              </p>

              <p className="text-lg">
                When I was working from home, I'd stress about what was visible in the background of video calls. Now? I book a conference room and look like I have my act together. Perception matters in business.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">1:00 PM – Lunch Break Done Right</h2>

              <p className="text-lg">
                One of the underrated benefits of HomeBase's location: you're in the heart of downtown Baltimore with dozens of lunch options within a five-minute walk. The Inner Harbor, the Gallery, food trucks on Pratt Street – variety for days.
              </p>

              <p className="text-lg">
                Today I'm meeting a friend at Chipotle around the corner. Some days I bring lunch and eat in the HomeBase kitchen while chatting with other members. The kitchen area is surprisingly social during lunch hours. There's usually a good mix of people, and conversations range from work talk to weekend plans to arguing about which Baltimore restaurant makes the best crab cakes (there are strong opinions).
              </p>

              <p className="text-lg">
                But here's what I really appreciate: I can actually take a lunch break. When I worked from home, I'd eat at my desk while scrolling through emails, never fully disconnecting. At HomeBase, leaving the space for lunch creates a mental reset. I come back refreshed and ready to tackle the afternoon.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">2:00 PM – Afternoon Productivity</h2>

              <p className="text-lg">
                Afternoons are usually for communication-heavy work – emails, client calls, project coordination. The energy at HomeBase shifts a bit in the afternoon; more people are around, there's a subtle buzz of activity.
              </p>

              <p className="text-lg">
                I knock out a proposal for a new client, respond to a backlog of emails, and hop on a quick Zoom call with a client's web developer to coordinate on a project. For the call, I grab one of the phone booths – small private spaces perfect for quick calls where you don't need a whole conference room.
              </p>

              <p className="text-lg">
                Around 3 PM, I notice the energy flagging a bit (the post-lunch slump is real), so I take advantage of one of my favorite HomeBase features: flexibility to move around. I grab my laptop and relocate to one of the high-top tables near the window. Change of scenery, still working, but the standing desk helps me power through.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">3:30 PM – Community & Collaboration</h2>

              <p className="text-lg">
                One of the designers, Jessica, stops by my desk. She's working on a brand identity project and wants a second opinion on two logo directions. We spend fifteen minutes going back and forth, and I end up giving her some strategic positioning advice that helps her see which direction aligns better with the client's goals.
              </p>

              <p className="text-lg">
                This is the kind of collaboration that just doesn't happen when you're isolated at home. Having experienced professionals around you creates this informal support network. Someone's good at something you struggle with. You're good at something they struggle with. Everybody wins.
              </p>

              <p className="text-lg">
                The HomeBase community isn't competitive; it's collaborative. We're all building our own things, but we genuinely want to help each other succeed.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">4:30 PM – Last Push</h2>

              <p className="text-lg">
                I have about an hour of solid work left – finalizing a social media content calendar for a client and scheduling out posts. I pop in my AirPods, put on some focus music, and knock it out. By 5:30 PM, I'm wrapping up, responding to last-minute emails, and making a to-do list for tomorrow.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">6:00 PM – Shutdown Ritual</h2>

              <p className="text-lg">
                I close my laptop, pack up my things, and chat with a few community members while I'm heading out. Someone mentions there's a happy hour next Friday – networking with purpose, but also genuine friendship and community.
              </p>

              <p className="text-lg">
                I leave HomeBase feeling accomplished, energized, and genuinely excited to come back tomorrow. That's not how I felt working from home. And that's not an accident – that's the power of great workspace design combined with intentional community building.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 pt-4 mb-6">Why This Matters</h2>

              <p className="text-lg">
                People sometimes ask me if coworking is worth the cost. My answer: compared to what? Coffee shop WiFi that's spotty at best? Your kitchen table where you eat lunch at your desk? A home office that blurs the lines between work and life?
              </p>

              <p className="text-lg">
                HomeBase costs me $350/month. That's $11.70 per workday. For that, I get:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Professional workspace with reliable gigabit internet</li>
                <li>Included conference rooms for client calls</li>
                <li>Professional business address</li>
                <li>Access to an incredible community that's already brought me three clients</li>
                <li>A boundary between work and home that protects my mental health</li>
                <li>An environment that makes me more productive</li>
                <li>The serendipitous encounters that lead to collaborations and friendships</li>
              </ul>

              <p className="text-lg">
                That's a bargain. That's not a cost – that's an investment.
              </p>

              <p className="text-lg">
                If you're thinking about whether coworking is right for you, my advice is simple: come visit HomeBase and see for yourself. See if the space, the community, and the energy resonate with you. Chat with members like me who've been here long enough to know it's the real deal.
              </p>

              <p className="text-lg">
                I can tell you that my day at HomeBase is productive, social, and genuinely enjoyable. And that combination? That's rare. That's worth protecting.
              </p>

              <p className="text-lg">
                Ready to experience HomeBase for yourself?{' '}
                <a 
                  href="https://calendly.com/jakeabel217/30min" 
                  target="_blank"
                  className="text-[#FF5722] font-bold hover:text-[#E64A19] transition"
                >
                  Book a free tour today.
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
          "headline": "A Day in the Life: Working from HomeBase Baltimore",
          "description": "A first-person narrative from a HomeBase member showcasing a typical day at Baltimore's premier coworking space.",
          "author": {
            "@type": "Person",
            "name": "Sarah Mitchell"
          },
          "publisher": {
            "@type": "Organization",
            "name": "HomeBase Baltimore"
          },
          "datePublished": "2026-01-25",
          "dateModified": "2026-01-25"
        })
      }} />
    </div>
  );
}

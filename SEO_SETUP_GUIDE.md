# SEO Setup Guide for HomeBase

## ✅ What's Already Done

### 1. Technical SEO Foundation
- ✅ **Sitemap.xml** - Auto-generated at `/sitemap.xml`
- ✅ **Robots.txt** - Auto-generated at `/robots.txt`
- ✅ **Meta Tags** - Title, description, keywords in layout.tsx
- ✅ **Open Graph Tags** - Facebook/LinkedIn sharing cards
- ✅ **Twitter Cards** - Twitter sharing previews
- ✅ **Mobile-Friendly** - Responsive design

### 2. Structured Data (Schema.org)
Next step: Add LocalBusiness schema to homepage for:
- Business name, address, phone
- Hours of operation
- Price range
- Reviews (when you get them)
- Images

### 3. Google Analytics 4
- ✅ Tracking component created
- ⏳ Needs GA4 measurement ID (see GOOGLE_ANALYTICS_SETUP.md)

---

## 🎯 Next Steps for SEO

### Step 1: Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with **jakeabel217@gmail.com**
3. Add property: `https://homebase-website.vercel.app`
4. Choose **URL prefix** method
5. Verify via HTML meta tag:
   - GSC will give you a meta tag like: `<meta name="google-site-verification" content="abc123..." />`
   - Uncomment the line in `app/layout.tsx` and paste your code
   - Deploy to Vercel
   - Click "Verify" in GSC

6. Once verified, submit sitemap:
   - In GSC sidebar, go to **Sitemaps**
   - Add new sitemap: `https://homebase-website.vercel.app/sitemap.xml`
   - Click **Submit**

### Step 2: Google Business Profile

**CRITICAL FOR LOCAL SEO** - This is your #1 priority.

1. Go to [Google Business Profile](https://business.google.com/)
2. Sign in with **jakeabel217@gmail.com**
3. Click **Add Business**
4. Fill in:
   - **Business name**: HomeBase
   - **Category**: Coworking Space
   - **Address**: 300 W Pratt Street, Baltimore, MD 21201
   - **Phone**: 443-376-8512
   - **Website**: https://homebase-website.vercel.app
   - **Hours**: (Your actual hours - say 24/7 if true)

5. **Verification**: Google will mail a postcard to 300 W Pratt St with a code. Enter it to verify.

6. **Complete your profile**:
   - Upload 10+ photos (office space, desks, meeting rooms, exterior)
   - Write business description (use keywords naturally)
   - Add attributes: "Wheelchair accessible", "Free Wi-Fi", "Coffee", etc.
   - Set up messaging (customers can text you directly)
   - Add services: Hot Desk, Dedicated Desk, Private Office

7. **Ask for reviews** - Target 10+ reviews to appear in map pack
   - Send review link to first customers: `https://g.page/r/YOUR_PLACE_ID/review`

### Step 3: Keyword Optimization

**Target Keywords** (from previous analysis):
- Primary: "coworking baltimore"
- Secondary: "office space baltimore", "coworking space baltimore"
- Long-tail: "coworking near camden yards", "flexible office space baltimore"

**On-Page Optimization**:
- ✅ Title tag includes "Coworking Baltimore"
- ✅ H1 includes location and service
- ⏳ Add H2/H3 with keyword variations
- ⏳ Add location mentions throughout content
- ⏳ Internal linking between pages (when you add more pages)

### Step 4: Content Strategy

**Pages to Create** (in priority order):

1. **About Page** (`/about`)
   - Story of HomeBase
   - Team/owner info
   - Why Baltimore, why Camden Yards location
   - Target keyword: "coworking space near camden yards"

2. **Pricing Page** (`/pricing`)
   - Detailed breakdown of each tier
   - What's included comparison table
   - FAQ section
   - Target keyword: "coworking baltimore pricing"

3. **Amenities Page** (`/amenities`)
   - Detailed amenities with photos
   - Meeting room booking process
   - Parking details
   - Target keyword: "coworking amenities baltimore"

4. **Contact Page** (`/contact`)
   - Contact form (use Formspree or similar)
   - Google Maps embed
   - Directions (from downtown, from highway)
   - Target keyword: "coworking baltimore contact"

5. **Blog** (`/blog`)
   - "Best Coworking Spaces in Baltimore 2026"
   - "Remote Work Tips for Freelancers"
   - "Why Camden Yards is the Perfect Business Location"
   - Target: long-tail keywords, share on social media

### Step 5: Technical Optimizations

1. **Add Schema Markup to Homepage**
   - LocalBusiness schema with address, phone, hours
   - Breadcrumb schema for navigation
   - FAQPage schema when you add FAQ section

2. **Image Optimization**
   - Add descriptive alt text to all images
   - Use Next.js Image component for lazy loading
   - Compress images (use TinyPNG or similar)
   - Create WebP versions for faster loading

3. **Page Speed**
   - Currently good (Next.js is fast)
   - Run [PageSpeed Insights](https://pagespeed.web.dev/)
   - Fix any red/orange issues
   - Aim for 90+ score on mobile

4. **Mobile Optimization**
   - Test on real devices
   - Check tap target sizes
   - Verify text is readable without zooming
   - Use [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Step 6: Link Building

**Local Citations** (submit to these directories):
- Yelp for Business
- Yellow Pages
- Foursquare
- Bing Places
- Apple Maps Connect
- Facebook Business Page

**Coworking Directories**:
- Coworker.com (paid listing ~$50/mo)
- DeskPass (marketplace for day passes)
- LiquidSpace (book-by-hour platform)

**Local Partnerships**:
- Baltimore Chamber of Commerce
- Downtown Partnership
- Camden Yards business associations
- Cross-promotion with nearby restaurants/cafes

**Content Marketing**:
- Guest post on Baltimore business blogs
- Get featured in local news (new coworking space opening)
- Sponsor local tech/business meetups

### Step 7: Social Media Setup

1. **Facebook Business Page**
   - Link to website
   - Post 2-3x/week (member spotlights, space photos, tips)
   - Run local ads targeting "interests: coworking, entrepreneurship"

2. **Instagram**
   - Professional space photos
   - Behind-the-scenes stories
   - Member testimonials
   - Use hashtags: #coworking, #baltimore, #camdenyard, #remotework

3. **LinkedIn Company Page**
   - Professional tone
   - Share industry insights
   - Target: freelancers, remote workers, small businesses
   - Post job openings from members (community value)

4. **Google Posts** (in Google Business Profile)
   - Weekly updates about space, events, offers
   - Appear directly in Google search results

---

## 📊 SEO Metrics to Track

### Week 1-4: Foundation
- [ ] Google Search Console verified
- [ ] Google Business Profile claimed
- [ ] 5+ photos uploaded to GBP
- [ ] First 3 customer reviews
- [ ] All meta tags confirmed working

### Month 2-3: Growth
- Target: 100 organic visitors/month
- Ranking #10-20 for "coworking baltimore"
- 10+ reviews on Google
- 5+ local citations completed

### Month 4-6: Traction
- Target: 500+ organic visitors/month
- Ranking #5-10 for "coworking baltimore"
- 25+ reviews on Google
- 2-3 blog posts published

### Month 6-12: Dominance
- Target: 1,000+ organic visitors/month
- Ranking #1-3 for "coworking baltimore"
- 50+ reviews on Google
- Appearing in local 3-pack for coworking searches
- 10+ blog posts driving long-tail traffic

---

## 🚨 Common SEO Mistakes to Avoid

1. **Duplicate Content** - Don't copy competitor websites word-for-word
2. **Keyword Stuffing** - Use keywords naturally, not every sentence
3. **Ignoring Mobile** - 60%+ of searches are mobile
4. **No Google Business Profile** - You'll be invisible in local search
5. **Not Asking for Reviews** - Reviews = trust = rankings
6. **Slow Site Speed** - Next.js handles this, but watch image sizes
7. **Missing Alt Text** - Screen readers + SEO need image descriptions
8. **No Internal Linking** - Link pages together with descriptive anchor text

---

## 🎯 Quick Wins (Do These First)

1. ✅ Deploy GA4 (follow GOOGLE_ANALYTICS_SETUP.md)
2. ⏳ Set up Google Business Profile (HIGHEST PRIORITY)
3. ⏳ Get first 5 reviews from friends/family
4. ⏳ Verify Google Search Console
5. ⏳ Upload 10 photos to Google Business Profile
6. ⏳ Create Facebook/Instagram pages
7. ⏳ Submit to Yelp, Yellow Pages, Bing Places

**Time estimate**: 3-4 hours total for all quick wins.

---

## 📞 Need Help?

- **Google Search Console issues**: [GSC Help](https://support.google.com/webmasters)
- **Google Business Profile**: [GBP Help](https://support.google.com/business)
- **SEO questions**: DM me with specifics
- **Technical issues**: Check Next.js docs or ping me

---

## 🔗 Useful Tools

- [Google Search Console](https://search.google.com/search-console)
- [Google Business Profile](https://business.google.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) - Free backlink checker
- [Ubersuggest](https://neilpatel.com/ubersuggest/) - Free keyword research
- [AnswerThePublic](https://answerthepublic.com/) - Content ideas from real searches

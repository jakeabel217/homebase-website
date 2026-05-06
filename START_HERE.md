# HomeBase Analytics & SEO - Quick Start Checklist

## ✅ What I Just Did

1. **Added Google Analytics 4 tracking**
   - Created GA4 component for Next.js App Router
   - Tracks pageviews, clicks, and user behavior
   - Auto-tracks Calendly link clicks as events

2. **Added SEO fundamentals**
   - Sitemap.xml (auto-generated at `/sitemap.xml`)
   - Robots.txt (auto-generated at `/robots.txt`)
   - Enhanced metadata (OpenGraph, Twitter Cards)
   - Added keywords to homepage

3. **Created setup guides**
   - `GOOGLE_ANALYTICS_SETUP.md` - Step-by-step GA4 setup
   - `SEO_SETUP_GUIDE.md` - Complete SEO roadmap

4. **Pushed to GitHub** - Changes are ready to deploy

---

## 🎯 What YOU Need to Do (30 minutes)

### Step 1: Create GA4 Property (5 min)

1. Go to https://analytics.google.com/
2. Sign in with **jakeabel217@gmail.com**
3. Click **Admin** → **Create Property**
4. Name: **HomeBase Baltimore**
5. Click through setup wizard
6. Choose **Web** platform
7. Website URL: `https://homebase-website.vercel.app`
8. **COPY the Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 2: Add Measurement ID to Vercel (3 min)

**Option A: Via Vercel Dashboard** (easiest)
1. Go to https://vercel.com/dashboard
2. Find **homebase-website** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
6. Value: Paste your `G-XXXXXXXXXX` from Step 1
7. Check all environments (Production, Preview, Development)
8. Click **Save**
9. Go to **Deployments** → **Redeploy** latest

**Option B: Via Terminal** (if you have Vercel CLI)
```bash
cd /Users/ericabel/Projects/Home\ Base/website-new
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
# Paste your G-XXXXXXXXXX when prompted
vercel --prod
```

### Step 3: Test Analytics (2 min)

1. Wait 2-3 minutes for Vercel deployment to finish
2. Visit https://homebase-website.vercel.app/
3. In GA4, go to **Reports** → **Realtime**
4. You should see yourself as an active user
5. Click the "Book Tour" button - you should see a `book_tour_click` event

### Step 4: Set Up Google Search Console (10 min)

1. Go to https://search.google.com/search-console
2. Sign in with **jakeabel217@gmail.com**
3. Click **Add Property**
4. Enter: `https://homebase-website.vercel.app`
5. Choose **URL prefix** method
6. **Verification**: Use "HTML tag" method
   - Copy the meta tag Google gives you
   - Send it to me and I'll add it to the site
   - OR use "Google Analytics" method (auto-verifies after GA4 is working)
7. Once verified, submit sitemap:
   - Go to **Sitemaps** in left sidebar
   - Add: `https://homebase-website.vercel.app/sitemap.xml`
   - Click **Submit**

### Step 5: Google Business Profile (10 min setup + mail verification)

**THIS IS YOUR #1 SEO PRIORITY** - Local search visibility

1. Go to https://business.google.com/
2. Sign in with **jakeabel217@gmail.com**
3. Click **Add Business** or **Manage Now**
4. Fill in:
   - Business name: **HomeBase**
   - Category: **Coworking Space**
   - Address: **300 W Pratt Street, Baltimore, MD 21201**
   - Phone: **443-376-8512**
   - Website: **https://homebase-website.vercel.app**
   - Hours: (Your actual hours - 24/7 if true)

5. **Verification**: Google will mail a postcard to 300 W Pratt St
   - Takes 5-7 days
   - Enter the code when it arrives

6. **While waiting for postcard**:
   - Upload 10+ photos of the space
   - Write a business description (100-750 chars)
   - Add attributes: WiFi, Coffee, Accessible, etc.
   - Turn on messaging (customers can text you)

---

## 📊 What's Tracking Now

Once GA4 is deployed, you'll automatically track:

- **Pageviews** - Every page visit
- **Sessions** - Unique visitor sessions
- **Traffic sources** - Where visitors come from (Google, social, direct)
- **Devices** - Mobile vs Desktop
- **Location** - City/State of visitors
- **Events**:
  - `book_tour_click` - Calendly link clicks
  - `email_click` - Email link clicks
  - `phone_click` - Phone link clicks

---

## 🚀 Quick Wins (Do This Week)

Priority order:

1. ✅ **Deploy GA4** (Step 1-3 above) - 10 min
2. ⏳ **Set up Google Search Console** (Step 4) - 10 min
3. ⏳ **Claim Google Business Profile** (Step 5) - 10 min
4. ⏳ **Get 5 reviews on Google** - Ask friends/family to leave honest reviews
5. ⏳ **Upload 10 photos** to Google Business Profile
6. ⏳ **Create Facebook Business Page** - Link to website
7. ⏳ **Submit to Yelp** - Free business listing

**Total time**: 1-2 hours spread over a week

---

## 📖 Full Documentation

- **GOOGLE_ANALYTICS_SETUP.md** - Detailed GA4 guide with troubleshooting
- **SEO_SETUP_GUIDE.md** - Complete SEO roadmap (6-12 month plan)

---

## 🆘 If You Get Stuck

**Analytics not working?**
- Check Vercel env vars are saved
- Verify deployment finished
- Try in incognito mode (ad blockers can interfere)
- DM me with screenshot

**Search Console verification failing?**
- Try "Google Analytics" method (easiest once GA4 is live)
- Or send me the HTML meta tag and I'll add it

**Google Business Profile issues?**
- Make sure you're the owner/can receive mail at 300 W Pratt St
- Verification postcard takes 5-7 days

---

## 🎯 Expected Results

**Week 1**: 
- Analytics tracking
- Search Console showing site data
- Google Business Profile claimed (pending verification)

**Month 1**:
- 50-100 organic visitors
- Site appearing in Google for "HomeBase Baltimore"
- 5+ Google reviews

**Month 3**:
- 200-500 organic visitors
- Ranking page 2-3 for "coworking baltimore"
- 15+ Google reviews
- Appearing in Google Maps results

**Month 6**:
- 500-1,000 organic visitors
- Ranking page 1 for "coworking baltimore"
- 25+ Google reviews
- In local 3-pack for coworking searches

---

Need help? DM me anytime. These are all straightforward setups but I'm here if you hit any snags.

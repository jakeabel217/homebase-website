# Google Analytics 4 Setup Guide for HomeBase

## Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with **jakeabel217@gmail.com**
3. Click **Admin** (bottom left gear icon)
4. Click **Create Property**
5. Fill in:
   - **Property name**: HomeBase Baltimore
   - **Time zone**: United States, Eastern Time
   - **Currency**: USD
6. Click **Next**
7. Business details:
   - **Industry**: Real Estate
   - **Business size**: Small (1-10 employees)
8. Click **Next**
9. Business objectives: Select **Generate leads**
10. Click **Create**
11. Accept Terms of Service

## Step 2: Set Up Data Stream

1. Click **Web** platform
2. Fill in:
   - **Website URL**: `https://homebase-website.vercel.app`
   - **Stream name**: HomeBase Production
3. Click **Create stream**
4. **COPY YOUR MEASUREMENT ID** - looks like `G-XXXXXXXXXX`

## Step 3: Add Measurement ID to Next.js

The code is already in your repo (I'm adding it now). You just need to:

1. Create `.env.local` file in project root
2. Add this line:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace with your actual Measurement ID from Step 2)

3. **NEVER commit `.env.local` to git** - it's already in `.gitignore`

## Step 4: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your **homebase-website** project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Key**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Your G-XXXXXXXXXX measurement ID
   - **Environments**: Check all (Production, Preview, Development)
5. Click **Save**
6. Go to **Deployments** tab
7. Click **Redeploy** on latest deployment

### Option B: Via Vercel CLI
```bash
cd /Users/ericabel/Projects/Home\ Base/website-new
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
# Paste your G-XXXXXXXXXX when prompted
# Select all environments
vercel --prod
```

## Step 5: Test Analytics

1. Visit your site: https://homebase-website.vercel.app/
2. In GA4, go to **Reports** → **Realtime**
3. You should see yourself as an active user within 30 seconds
4. Click around the site to generate pageview events

## Step 6: Set Up Conversions (Goals)

In GA4 Admin → Events:

1. Mark these as **Conversions**:
   - `book_tour_click` (already tracking Calendly clicks)
   - `email_click` (email link clicks)
   - `phone_click` (phone number clicks)

2. Create custom event for form submissions (when you add contact form later)

## Step 7: Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Enter: `https://homebase-website.vercel.app`
4. Choose **URL prefix** method
5. Verification options:
   - **HTML tag** (easiest) - I've added the meta tag to your site
   - **HTML file** - Download file and put in `/public/` folder
   - **Google Analytics** - If GA is already working, auto-verifies

6. Once verified, submit sitemap: `https://homebase-website.vercel.app/sitemap.xml`

## Step 8: Link GA4 to Search Console

1. In GA4 Admin → Product Links
2. Click **Search Console Links**
3. Click **Link**
4. Select your Search Console property
5. Click **Confirm**

This gives you search query data in GA4.

## What's Tracking Now?

✅ **Pageviews** - Every page visit
✅ **Sessions** - User visits with 30min timeout
✅ **User engagement** - Time on site, scroll depth
✅ **Events**:
  - `book_tour_click` - Calendly link clicks
  - `email_click` - Email clicks
  - `phone_click` - Phone clicks
  - `outbound_click` - External links

✅ **Traffic sources** - Where visitors come from
✅ **Device types** - Mobile/Desktop/Tablet breakdown
✅ **Location** - City/State/Country data

## Next Steps (Optional)

- [ ] Set up **Google Ads** conversion tracking
- [ ] Add **LinkedIn Insight Tag** for B2B tracking
- [ ] Enable **Enhanced Measurement** (scroll tracking, video plays, file downloads)
- [ ] Create custom **Dashboards** for key metrics
- [ ] Set up **Data Studio reports** for monthly analytics summaries

## Troubleshooting

**Not seeing data?**
1. Check browser console for errors (F12)
2. Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in Vercel
3. Make sure ad blockers are disabled when testing
4. Check GA4 Realtime view (data can take 24-48hrs for full reports)

**Tracking not working?**
1. Verify the measurement ID starts with `G-` not `UA-` (UA is old Universal Analytics)
2. Check Network tab for `google-analytics.com/g/collect` requests
3. Use [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension

## Support

If you get stuck:
- DM me with screenshots
- Check [GA4 Help Center](https://support.google.com/analytics/answer/9304153)

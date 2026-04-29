# HomeBase Website - Deployment Instructions

## ✅ Site Status
- **Built:** ✓ Complete
- **Running locally:** http://localhost:3002
- **Git repo:** ✓ Initialized

## 🚀 Deploy to Vercel (5 minutes)

### Option 1: Via Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   cd "/Users/ericabel/Projects/Home Base/website-new"
   gh auth login  # Follow prompts
   gh repo create homebase-website --public --source=. --push
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import `homebase-website` repo
   - Click "Deploy" (auto-detects Next.js, no config needed)
   - Get live URL: `https://homebase-website-xxxxx.vercel.app`

### Option 2: Via CLI

```bash
cd "/Users/ericabel/Projects/Home Base/website-new"
vercel login  # Opens browser
vercel --prod
```

## 🎯 What's Built

- ✅ Single-page responsive Next.js site
- ✅ Hero, Pricing, Amenities, Location sections
- ✅ Orange accent color (#FF5722 - Orioles theme)
- ✅ All CTAs linked to Jake's Calendly
- ✅ Logo, fonts, photos integrated
- ✅ Build tested and working

## 📍 Once Deployed

1. **Custom domain** (optional): In Vercel dashboard → Settings → Domains → Add `homebase.works` or similar
2. **Test the site:** Click through all CTAs to verify Calendly links work
3. **Share URL with Jake**

## 🔧 Making Changes

```bash
cd "/Users/ericabel/Projects/Home Base/website-new"
npm run dev  # Starts on localhost:3002
# Make edits, test locally
git add -A && git commit -m "your changes"
git push
# Vercel auto-deploys on push
```

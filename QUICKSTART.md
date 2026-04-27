# 🚀 DEPLOY HOMEBASE WEBSITE - QUICK START

## ✅ Project Status: READY TO DEPLOY

Your HomeBase co-working space website is complete and tested!

- ✅ Next.js build successful
- ✅ All images and assets loaded
- ✅ Custom fonts configured  
- ✅ Responsive design implemented
- ✅ All CTAs linked to Calendly
- ✅ Git repository initialized

---

## OPTION 1: Deploy via Vercel Dashboard (EASIEST - 3 minutes)

### Step 1: Push to GitHub (choose one)

**A. With GitHub CLI (if authenticated):**
```bash
cd "/Users/ericabel/Projects/Home Base/website-new"
gh auth login
gh repo create homebase-website --public --source=. --push
```

**B. Manual GitHub:**
1. Go to https://github.com/new
2. Name: `homebase-website`
3. Make it Public
4. Don't initialize with README
5. Create repository
6. Run these commands:
```bash
cd "/Users/ericabel/Projects/Home Base/website-new"
git remote add origin https://github.com/YOUR_USERNAME/homebase-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com (sign up/in with GitHub)
2. Click "Add New Project"  
3. Import your `homebase-website` repo
4. Click "Deploy" (no configuration needed!)
5. **DONE!** Copy your live URL: `https://homebase-website-xxxxx.vercel.app`

---

## OPTION 2: Deploy via Vercel CLI (2 minutes)

```bash
cd "/Users/ericabel/Projects/Home Base/website-new"

# Login to Vercel (opens browser for auth)
vercel login

# Deploy to production
vercel --prod
```

Your live URL will be displayed immediately!

---

## OPTION 3: Use the Deploy Script

```bash
cd "/Users/ericabel/Projects/Home Base/website-new"
./deploy.sh
```

---

## ⚙️ Custom Domain Setup (After Deployment)

1. In Vercel Dashboard → Project → Settings → Domains
2. Add your domain (e.g., `homebasebaltimore.com`)
3. Update DNS records as shown (usually add A/CNAME records)
4. Wait 5-10 minutes for propagation

---

## 📋 What's Included

**Pages:**
- Single-page site with smooth scrolling navigation

**Sections:**
- Hero with office photo and CTA
- Pricing (Hot Desk $200, Dedicated $300, Private Office $600)
- Amenities (8 key features)
- Location & Contact with map

**Features:**
- Orioles orange (#FF5722) accent color
- RohnRounded custom font
- Responsive design (desktop-first)
- All CTAs → https://calendly.com/jakeabel217/30min
- Contact: jakeabel217@gmail.com
- Location: 300 W Pratt St, Baltimore MD

---

## 🔧 Local Development

```bash
# Run dev server
npm run dev

# Open http://localhost:3000

# Build for production
npm run build

# Test production build
npm start
```

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Issue?** Check that `npm run build` succeeds locally first

---

## 🎯 NEXT STEP: Choose Option 1 or 2 above and deploy!

Your website will be live in under 5 minutes. 🚀

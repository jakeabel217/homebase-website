# Quick Deployment Guide

## Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub

```bash
# If you don't have a GitHub repo yet:
gh auth login
gh repo create homebase-website --public --source=. --remote=origin --push

# Or manually:
# 1. Create a new repo at https://github.com/new
# 2. Run these commands:
git remote add origin https://github.com/YOUR_USERNAME/homebase-website.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com/signup (use GitHub login for fastest setup)
2. Click "Add New Project"
3. Select "Import Git Repository"
4. Choose your `homebase-website` repository
5. Click "Deploy" (Vercel auto-detects Next.js - no config needed!)

Your site will be live at: `https://homebase-website-XXXX.vercel.app`

### Step 3: Custom Domain (Optional)

In Vercel dashboard:
1. Go to your project → Settings → Domains
2. Add your custom domain (e.g., `homebasebaltimore.com`)
3. Follow DNS configuration instructions

## Alternative: Deploy via CLI

```bash
# One-time setup
npm install -g vercel
vercel login

# Deploy
vercel --prod

# Your live URL will be displayed!
```

## Environment Variables

No environment variables needed - everything is pre-configured!

## Troubleshooting

**Build fails?**
- Make sure all images are in `public/` folder
- Check that fonts are in `public/fonts/webfonts/`
- Verify `npm run build` works locally

**Images not loading?**
- Images must be in `public/` directory
- Reference them as `/images/filename.jpg` (no 'public' in path)

## Current Status

✅ Next.js project built successfully
✅ All assets copied and configured
✅ Custom fonts loaded
✅ Responsive design implemented
✅ All CTAs linked to Calendly
✅ Git repository initialized

🚀 Ready to deploy! Just follow Step 1 & 2 above.

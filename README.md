# HomeBase Co-Working Space Website

A modern, minimalist Next.js website for HomeBase co-working space in Baltimore, MD.

## Features

- **Single-page design** with smooth scrolling navigation
- **Four main sections**: Hero, Pricing, Amenities, Location/Contact
- **Responsive design** (desktop-first approach)
- **Custom branding** with RohnRounded font and Orioles orange accent color (#FF5722)
- **Direct CTAs** linking to Calendly booking system

## Pricing Plans

- **Hot Desk**: $200/month - Flexible seating in shared workspace
- **Dedicated Desk**: $300/month - Your own assigned desk with storage
- **Private Office**: $600/month - Fully private office space

All plans include:
- 24/7 access with custom keycode
- Meeting room access (first-come, first-serve)
- Free coffee and fridge space
- High-speed WiFi
- Prime downtown location near Camden Yards

## Tech Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS
- **Font**: Custom RohnRounded webfonts
- **Deployment**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Option 2: Via Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Contact

- **Location**: 300 W Pratt Street, Baltimore, MD 21201
- **Email**: jakeabel217@gmail.com
- **Book a Tour**: [Schedule via Calendly](https://calendly.com/jakeabel217/30min)

## Project Structure

```
website-new/
├── app/
│   ├── fonts.css          # Custom RohnRounded font definitions
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page component
├── public/
│   ├── fonts/             # Custom webfont files
│   ├── images/            # Building and location photos
│   └── hbworks-logo.png   # HomeBase logo
├── tailwind.config.ts     # Tailwind configuration
└── vercel.json            # Vercel deployment configuration
```

## Design Philosophy

- **Minimalist**: Clean, flat design with ample white space
- **Bold Typography**: All caps headers with strong geometric font
- **Orange Accent**: Orioles-inspired #FF5722 for CTAs and highlights
- **Professional**: Targeting freelancers, small businesses, remote workers
- **Baseball Subtle**: Location near Camden Yards, subtle home plate shield reference

## License

© 2024 HomeBase. All rights reserved.

#!/bin/bash
# HomeBase Website - Automated Deployment Script

echo "🏠 HomeBase Website Deployment"
echo "================================"
echo ""

# Check if logged in to Vercel
if ! vercel whoami > /dev/null 2>&1; then
    echo "⚠️  Not logged in to Vercel. Please run:"
    echo "   vercel login"
    echo ""
    echo "Visit the URL that appears and complete authentication."
    echo "Then run this script again."
    exit 1
fi

echo "✅ Vercel authentication confirmed"
echo ""

# Build the project
echo "📦 Building Next.js project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful"
echo ""

# Deploy to production
echo "🚀 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "Your website is now live!"
    echo "Check the URL printed above to access your site."
else
    echo "❌ Deployment failed. Check the errors above."
    exit 1
fi

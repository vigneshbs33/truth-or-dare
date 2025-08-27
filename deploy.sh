#!/bin/bash

# 🔥💀 Truth or Dare Game Deployment Script 💀🔥

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update: Truth or Dare game with maximum chaos $(date)"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/not-vignesh-right/truth-or-dare.git
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment to GitHub complete!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Import your repository: not-vignesh-right/truth-or-dare"
echo "3. Add environment variables:"
echo "   - SUPABASE_URL: https://aoyepcazkooyvnxdzczg.supabase.co"
echo "   - SUPABASE_ANON_KEY: [your-key]"
echo "4. Click Deploy!"
echo ""
echo "🔥 CHAOS MODE: READY FOR DEPLOYMENT! 💀"

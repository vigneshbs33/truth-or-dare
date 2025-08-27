@echo off
REM 🔥💀 Truth or Dare Game Deployment Script for Windows 💀🔥

echo 🚀 Starting deployment process...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
)

REM Add all files
echo 📝 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Update: Truth or Dare game with maximum chaos %date% %time%"

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 Adding GitHub remote...
    git remote add origin https://github.com/not-vignesh-right/truth-or-dare.git
)

REM Push to GitHub
echo ⬆️ Pushing to GitHub...
git push -u origin main

echo ✅ Deployment to GitHub complete!
echo.
echo 🌐 Next steps:
echo 1. Go to https://vercel.com
echo 2. Import your repository: not-vignesh-right/truth-or-dare
echo 3. Add environment variables:
echo    - SUPABASE_URL: https://aoyepcazkooyvnxdzczg.supabase.co
echo    - SUPABASE_ANON_KEY: [your-key]
echo 4. Click Deploy!
echo.
echo 🔥 CHAOS MODE: READY FOR DEPLOYMENT! 💀
pause

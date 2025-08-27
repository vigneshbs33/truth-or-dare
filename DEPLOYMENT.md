# 🚀 Deployment Guide for Truth or Dare Game

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Supabase project (already configured)

## 🔗 Your Repository
**Repository URL**: `https://github.com/not-vignesh-right/truth-or-dare`

## 📝 Step-by-Step Deployment

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Truth or Dare game with maximum chaos"
   ```

2. **Add your GitHub repository as remote**:
   ```bash
   git remote add origin https://github.com/not-vignesh-right/truth-or-dare.git
   ```

3. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)** and sign in with GitHub

2. **Click "New Project"**

3. **Import your repository**:
   - Select `not-vignesh-right/truth-or-dare`
   - Click "Import"

4. **Configure project**:
   - **Project Name**: `truth-or-dare` (or any name you prefer)
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty (not needed for static site)
   - **Output Directory**: Leave empty (not needed for static site)

5. **Environment Variables**:
   - Click "Environment Variables"
   - Add these variables:
     ```
     Name: SUPABASE_URL
     Value: https://aoyepcazkooyvnxdzczg.supabase.co
     Environment: Production, Preview, Development
     ```
     ```
     Name: SUPABASE_ANON_KEY
     Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFveWVwY2F6a29veXZueGR6Y3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMTQxMDAsImV4cCI6MjA3MTg5MDEwMH0.YZWIHovP5tClutBZInXmpVbF6Acglpx3bdOJK7J1yyM
     Environment: Production, Preview, Development
     ```

6. **Click "Deploy"**

### Step 3: Verify Deployment

1. **Wait for deployment** (usually takes 1-2 minutes)

2. **Test your game**:
   - Click the deployment URL
   - Test truth questions
   - Test dare challenges
   - Verify file uploads work
   - Check that chaos effects are working

3. **Check console** for any errors (F12 → Console)

### Step 4: Custom Domain (Optional)

1. **In Vercel dashboard**, go to your project
2. **Click "Settings" → "Domains"**
3. **Add your custom domain** (if you have one)

## 🔧 Post-Deployment Setup

### 1. Supabase Database Setup

1. **Go to your Supabase dashboard**
2. **Navigate to SQL Editor**
3. **Run the setup script** from `database/setup.sql`:
   ```sql
   -- Copy and paste the entire contents of database/setup.sql
   -- This creates the tables and storage bucket
   ```

### 2. Test Database Connection

1. **Open your deployed game**
2. **Try submitting a truth answer**
3. **Check Supabase dashboard** → Table Editor → `truths` table
4. **Verify the data is being stored**

### 3. Test File Uploads

1. **Try completing a dare**
2. **Upload a test image**
3. **Check Supabase dashboard** → Storage → `dares` bucket
4. **Verify the image is uploaded**

## 🐛 Troubleshooting

### Common Issues

1. **"Loading challenges" never loads**
   - Check browser console (F12)
   - Verify environment variables in Vercel
   - Ensure Supabase is accessible

2. **Database errors**
   - Run the SQL setup script
   - Check Supabase RLS policies
   - Verify table structure

3. **File upload fails**
   - Check Supabase storage bucket exists
   - Verify storage policies
   - Check file size limits

4. **Environment variables not working**
   - Redeploy after adding variables
   - Check variable names match exactly
   - Ensure variables are set for all environments

### Debug Steps

1. **Open browser console** (F12)
2. **Look for error messages**
3. **Check network tab** for failed requests
4. **Verify Supabase connection** in console logs

## 🔄 Updating Your Game

### 1. Make Changes Locally

1. **Edit your files** (HTML, CSS, JS)
2. **Test locally** by opening `index.html`

### 2. Push to GitHub

```bash
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

### 3. Vercel Auto-Deploys

- Vercel automatically detects changes
- New deployment starts automatically
- Usually takes 1-2 minutes

## 📱 Mobile Testing

1. **Test on your phone** using the Vercel URL
2. **Check responsive design**
3. **Test file uploads** on mobile
4. **Verify touch interactions** work properly

## 🎯 Final Checklist

- [ ] Game loads without "Loading..." messages
- [ ] Truth questions display randomly
- [ ] Dare challenges display randomly
- [ ] Truth answers save to database
- [ ] Dare images upload successfully
- [ ] Club promotion links work
- [ ] Chaos effects are working
- [ ] Mobile responsive design
- [ ] No console errors

## 🎉 Success!

Your Truth or Dare game is now:
- ✅ **Deployed on Vercel**
- ✅ **Connected to Supabase**
- ✅ **Accessible worldwide**
- ✅ **Ready for maximum chaos!** 🔥💀

## 📞 Need Help?

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Supabase Support**: [supabase.com/support](https://supabase.com/support)
- **GitHub Issues**: Create an issue in your repository

---

**🔥 CHAOS DEPLOYMENT: COMPLETE! 💀**

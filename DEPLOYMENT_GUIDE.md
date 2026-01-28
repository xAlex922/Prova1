# 🚀 Deployment Guide - Vercel & GitHub

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Git installed locally

---

## 📋 Step-by-Step Deployment

### 1️⃣ Prepare the Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Complete optical store application"
```

### 2️⃣ Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New Repository"
3. Name it: `ottica-demo` (or your choice)
4. Don't initialize with README (we already have one)
5. Create repository

### 3️⃣ Push to GitHub

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/ottica-demo.git

# Push code
git branch -M main
git push -u origin main
```

### 4️⃣ Deploy to Vercel

#### Option A: Via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

Done! ✅ Your app will be live in ~2 minutes.

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts
```

---

## 🔧 Environment Variables

If you want to add Supabase or Stripe later:

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_secret
```

4. Redeploy

---

## 🌐 Custom Domain (Optional)

1. Vercel Dashboard → Your Project
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 🔄 Automatic Deployments

Every push to `main` branch automatically deploys to production!

```bash
# Make changes
git add .
git commit -m "Update feature X"
git push

# Vercel automatically deploys
```

---

## 📊 Monitoring

Vercel provides:
- Real-time logs
- Analytics
- Performance metrics
- Error tracking

Access via: Vercel Dashboard → Your Project → Analytics

---

## 🐛 Troubleshooting

### Build Fails

Check build logs in Vercel dashboard. Common issues:

1. **Missing dependencies**: Run `npm install` locally first
2. **TypeScript errors**: Run `npm run build` locally to check
3. **Environment variables**: Ensure they're set in Vercel

### 404 Errors

- Verify all files are committed and pushed
- Check `.gitignore` doesn't exclude necessary files

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Repository is public or Vercel has access
- [ ] No build errors locally (`npm run build`)
- [ ] Environment variables set (if needed)
- [ ] Custom domain configured (optional)

---

## 🎉 Success!

Your app should now be live at:
`https://your-project.vercel.app`

Share the link and start collecting feedback!

---

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

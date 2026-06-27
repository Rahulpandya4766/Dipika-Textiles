# 🚀 Deployment Guide - Vercel

## Quick Deploy to Vercel

### Option 1: One-Click Deploy (Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rahulpandya4766/Dipika-Textiles)

Click the button above and follow Vercel's prompts!

---

### Option 2: Manual Deploy (Recommended for Control)

#### Step 1: Push to GitHub ✅ (Already Done!)

Your code is now at: **https://github.com/Rahulpandya4766/Dipika-Textiles**

#### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import **"Dipika-Textiles"** repository
5. Vercel will auto-detect settings:
   - ✅ **Framework Preset:** Vite
   - ✅ **Build Command:** `npm run build`
   - ✅ **Output Directory:** `dist`
   - ✅ **Install Command:** `npm install`
6. Click **"Deploy"**

⏱️ **Deployment takes 1-2 minutes**

---

## 🎉 After Deployment

### Your Live Site

Vercel will give you a URL like:
```
https://dipika-textiles.vercel.app
```

Or you can use a custom domain!

### Update README

Add your live site URL to `README.md`:
```markdown
🌐 **Live Site:** https://your-site.vercel.app
```

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. Make changes locally
2. Commit: `git add . && git commit -m "Update"`
3. Push: `git push`
4. Vercel automatically redeploys! ⚡

---

## 📝 Adding New Products (Post-Deployment)

1. **Add product locally** (see README.md)
2. Run: `npm run generate-products`
3. Commit & push to GitHub
4. Vercel auto-deploys with new products!

---

## 🔧 Vercel Settings (If Needed)

**Build & Development Settings:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Node.js Version: `18.x` (or latest LTS)

**Environment Variables:**
- None required for this project!

---

## 🌐 Custom Domain (Optional)

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `dipikatextiles.com`)
4. Follow Vercel's DNS configuration steps

---

## 📊 Performance

Your site will be:
- ⚡ **Lightning fast** (served from global CDN)
- 📱 **Mobile optimized**
- 🔒 **HTTPS enabled** (automatic SSL)
- 🌍 **Global edge network**

---

## 🆘 Troubleshooting

### Build Fails?

Check Vercel build logs:
1. Go to Deployments
2. Click failed deployment
3. Read error logs
4. Fix locally, commit, push

### Images Not Loading?

Make sure images are in `public/` folder (already done!)

### Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Support:** Contact via WhatsApp: +91 87584 83208

---

## ✅ Deployment Checklist

- [x] Code pushed to GitHub
- [x] Repository cleaned (removed temp files)
- [x] Images in `public/` folder
- [x] README updated
- [x] .gitignore configured
- [ ] Deploy on Vercel (follow steps above)
- [ ] Add live URL to README
- [ ] Test all pages on live site
- [ ] Share with team!

---

**Ready to deploy? Go to [vercel.com](https://vercel.com) now!** 🚀

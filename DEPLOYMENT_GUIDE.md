# 🚀 Deployment Guide - Argha Sarkar Portfolio

## Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free - sign up at https://vercel.com)

---

## Step 1: Push to GitHub

```bash
cd /app
git init
git add .
git commit -m "Initial commit - Modern portfolio with particle animations"
```

Then:
1. Create a new repository on GitHub: https://github.com/new
2. Name it: `portfolio` or `argha-sarkar-portfolio`
3. Run:
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Website (Easiest)

1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`

6. **Environment Variables** (Add these):
   ```
   REACT_APP_BACKEND_URL = (leave empty for now - static site only)
   ```

7. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
cd /app/frontend
vercel
```

Follow the prompts.

---

## Step 3: Your Deployed URL

After deployment, you'll get a URL like:
- `https://your-portfolio-xyz.vercel.app`
- Or custom domain: `https://arghasarkar.dev`

**Save this URL!** You'll need it for:
1. Web3Forms contact form setup
2. Sanity.io CORS configuration

---

## Step 4: Configure Web3Forms (After Deployment)

Now that you have a domain:

1. Go to: https://web3forms.com
2. Create account with: argha2.sarkar@gmail.com
3. Click "Create New Form"
4. Enter your Vercel domain: `your-portfolio-xyz.vercel.app`
5. Copy the **Access Key**
6. Update `/app/frontend/src/components/ContactForm.jsx` line 31:
   ```javascript
   access_key: 'YOUR_ACCESS_KEY_HERE'
   ```
7. Commit and push:
   ```bash
   git add .
   git commit -m "Add Web3Forms access key"
   git push
   ```
   Vercel will auto-deploy!

---

## Step 5: Setup Custom Domain (Optional)

### If you have a domain (like arghasarkar.com):

1. In Vercel dashboard → Your Project → Settings → Domains
2. Add your domain
3. Update DNS records with your domain provider:
   - Add A record or CNAME as Vercel instructs

### Get a Free Domain:

- Use `.vercel.app` subdomain (already provided)
- Or get free domain from: https://www.freenom.com

---

## Post-Deployment Checklist

After deployment:

✅ Visit your live site  
✅ Test navigation (Home, Projects, Blog)  
✅ Test dark/light mode toggle  
✅ Check particle animations  
✅ Test mobile responsiveness  
✅ Setup Web3Forms contact form  
✅ Upload resume PDF to `/public/resume/`  
✅ Configure Sanity.io blog  

---

## Troubleshooting

### Build Fails?
- Check frontend logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify no TypeScript errors

### Contact Form Not Working?
- Check Web3Forms access key is correct
- Verify domain matches in Web3Forms dashboard
- Check browser console for errors

### Dark Mode Not Working?
- Clear browser cache
- Check if localStorage is enabled

---

## Performance Optimization (After Launch)

1. **Images**: Use WebP format for better compression
2. **Fonts**: Subset fonts if needed
3. **Analytics**: Add Google Analytics measurement ID in `/app/frontend/src/data/mock.js`

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Contact: argha2.sarkar@gmail.com

**Your portfolio is ready to impress! 🎉**

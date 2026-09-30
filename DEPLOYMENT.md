# Deployment Guide

This guide covers multiple ways to deploy your portfolio website for free.

## 📋 Table of Contents
1. [GitHub Pages](#github-pages)
2. [Netlify](#netlify)
3. [Vercel](#vercel)
4. [GitHub Actions (Automated)](#github-actions)

---

## 🌐 GitHub Pages

### Method 1: Settings Deployment (Easiest)

1. **Push your code to GitHub:**
```bash
git remote add origin https://github.com/yourusername/personal-portfolio-website.git
git branch -M main
git push -u origin main
```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Source", select `main` branch
   - Click **Save**

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/personal-portfolio-website/`
   - Wait 2-5 minutes for the first deployment

### Method 2: Custom Domain

1. **Add a CNAME file:**
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "docs: add custom domain"
git push
```

2. **Configure DNS:**
   - Add these A records to your domain's DNS:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   
3. **Update GitHub Settings:**
   - Go to Settings > Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

---

## 🚀 Netlify

### Drag and Drop Method

1. **Build your project locally** (if needed):
```bash
# Your project is already ready - no build needed!
```

2. **Deploy:**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/Login
   - Drag your project folder onto the deploy area
   - Your site is live!

### Git Integration Method

1. **Connect repository:**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   
2. **Configure build settings:**
   - Build command: (leave empty)
   - Publish directory: `.` (current directory)
   - Click "Deploy site"

3. **Custom domain (optional):**
   - Domain settings > Add custom domain
   - Follow DNS configuration steps

### Netlify CLI Method

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Deploy:**
```bash
netlify login
netlify init
netlify deploy --prod
```

---

## ⚡ Vercel

### Import from Git

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure:**
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Click "Deploy"

### Vercel CLI

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel login
vercel
# Follow the prompts
```

3. **Deploy to production:**
```bash
vercel --prod
```

---

## 🤖 GitHub Actions (Automated Deployment)

### Setup Automated Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
        publish_branch: gh-pages
```

**Commit and push:**
```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add github actions deployment workflow"
git push
```

---

## 🔒 Environment Variables (If Needed)

If you add API keys or sensitive data later:

### Netlify
```bash
# netlify.toml
[build.environment]
  API_KEY = "your-key"
```

### Vercel
```bash
vercel env add API_KEY
```

### GitHub Pages
Use GitHub Secrets in repository settings.

---

## 🎨 Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Add your actual resume PDF
- [ ] Test all links
- [ ] Verify contact form
- [ ] Test on mobile devices
- [ ] Check dark mode functionality
- [ ] Optimize images (compress if needed)
- [ ] Update meta tags and SEO
- [ ] Test in different browsers

---

## 🔧 Troubleshooting

### CSS/JS Not Loading

**Problem:** Styles or scripts not working on deployment.

**Solution:** Check file paths are relative:
```html
<!-- Correct -->
<link rel="stylesheet" href="assets/css/style.css">

<!-- Incorrect (don't use absolute paths) -->
<link rel="stylesheet" href="/assets/css/style.css">
```

### Images Not Displaying

**Problem:** Images show locally but not on deployed site.

**Solution:** 
- Verify image paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are committed to Git

### Custom Domain Not Working

**Problem:** Custom domain shows error.

**Solutions:**
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Verify DNS records are correct
- Check domain registrar settings

---

## 📊 Performance Optimization

### Image Optimization

Use online tools to compress images:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/)

**Recommended:**
- Profile images: < 100KB
- Project images: < 200KB
- Format: WebP (with JPG fallback)

### Minification (Optional)

For production, minify your files:

```bash
# Install minifiers
npm install -g csso-cli uglify-js html-minifier

# Minify CSS
csso assets/css/style.css --output assets/css/style.min.css

# Minify JS
uglifyjs assets/js/script.js -o assets/js/script.min.js

# Minify HTML
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

Update references in HTML to use minified versions.

---

## 🌍 SEO Optimization

### Add robots.txt

Create `robots.txt` in root:

```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### Add sitemap.xml

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-09-30</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Google Analytics (Optional)

Add before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 📈 Monitoring

### Check Site Status

- [Uptime Robot](https://uptimerobot.com/) - Free uptime monitoring
- [Google Search Console](https://search.google.com/search-console) - SEO monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing

---

## 🎉 Deployment Complete!

Your portfolio is now live! Share it:
- LinkedIn
- GitHub profile README
- Email signature
- Business cards
- Resume

**Pro Tip:** Keep your portfolio updated with new projects and skills!

---

**Need help?** Open an issue on GitHub or check the troubleshooting section.
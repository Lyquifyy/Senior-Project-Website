# Carbon Weighted Traffic Control Website — Setup & Deployment

## 🚀 Quick Start

### Local Development
```powershell
cd "c:/Documents/Projects/Senior-Project-Website"
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### Build & Preview
```powershell
npm run build
npm run preview
```

---

## 📱 Mobile Optimization

This website is fully responsive and optimized for all devices:
- **Mobile (320px+):** Single column layouts, touch-friendly navigation
- **Tablet (768px+):** 2-column grids
- **Desktop (900px+):** Full 3-4 column layouts

No additional steps needed—it just works on all devices!

---

## 🌐 GitHub Pages Deployment

### Step 1: Initialize Git & Push to GitHub

```powershell
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Carbon Weighted Traffic Control website"

# Add GitHub remote
git remote add origin https://github.com/YOUR-USERNAME/Senior-Project-Website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username.**

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source," select **GitHub Actions** (or Deploy from branch → main → /root)
5. Save

### Step 3: Automatic Deployment Workflow

The `.github/workflows/deploy.yml` file automatically:
- Builds your site when you push to `main`
- Deploys to GitHub Pages
- **Live URL:** `https://YOUR-USERNAME.github.io/Senior-Project-Website/`

**Your site updates automatically every time you push!**

### Manual Deployment Alternative

If you want to deploy manually:
```powershell
npm run build
# Upload the dist/ folder to GitHub Pages or any static host
```

---

## 📂 Project Structure

```
Senior-Project-Website/
├── .github/workflows/deploy.yml    # Auto-deploy to GitHub Pages
├── src/
│   ├── main.jsx                    # React entry point
│   ├── App.jsx                     # All site content
│   └── styles.css                  # Responsive styling
├── public/
│   └── assets/                     # Images & videos
├── index.html                      # HTML template
├── vite.config.js                  # Build config (GitHub Pages ready)
├── package.json                    # Dependencies
└── README.md                       # This file
```

---

## 🎨 Customization

### Change Team Names
Open `src/App.jsx` and find the Team section:
```jsx
<strong>Your Name Here</strong>
<span className="role">Your Role</span>
```

### Add Images
1. Place images in `public/assets/`
2. Update paths in `src/App.jsx`:
```jsx
<img src="/assets/your-image.png" alt="Description" />
```

### Change Colors
Edit `src/styles.css` `:root` section:
```css
:root {
  --accent: #78ffd6;      /* Cyan accent color */
  --bg: #0f1724;          /* Dark background */
  --muted: #9aa6b2;       /* Gray text */
}
```

### Edit Content
All text is in `src/App.jsx`. Search for section titles like "The Problem", "Objectives", etc.

---

## ✅ Features

✅ **Fully Responsive** — Works perfectly on all devices
✅ **Zero Extra Dependencies** — Just React + Vite
✅ **Dark Theme** — Modern, professional design
✅ **CI/CD Ready** — Automatic GitHub Pages deployment
✅ **Fast** — Minimal build size, instant load times

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- --port 3001` |
| `npm install` fails | Delete `node_modules`, run `npm install` again |
| GitHub Pages not updating | Check Actions tab in GitHub; hard refresh (Ctrl+Shift+R) |
| Images not showing | Check paths are `/assets/filename.png` |
| Build fails | Run `npm run build` and check error output |

---

## 📋 Deployment Checklist

- [ ] Pushed code to GitHub
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] First GitHub Actions build succeeded (check Actions tab)
- [ ] Site is live at `https://YOUR-USERNAME.github.io/Senior-Project-Website/`
- [ ] Mobile responsive (test on phone)
- [ ] All images load correctly
- [ ] Navigation links work

---

## 🔗 Links

- **Repository:** `https://github.com/YOUR-USERNAME/Senior-Project-Website`
- **Live Site:** `https://YOUR-USERNAME.github.io/Senior-Project-Website/`
- **GitHub Pages Docs:** https://pages.github.com/

---

**Questions?** Check `vite.config.js` or `package.json` for build configuration details.

# Simple Deployment Guide for Paradise Nursery

This project now uses the `gh-pages` package for simple, reliable deployment to GitHub Pages.

## 🚀 **Quick Deployment**

### **Step 1: Deploy to GitHub Pages**
```bash
npm run deploy
```

This command will:
- Build your React app (`npm run build`)
- Deploy to the `gh-pages` branch
- Make your app live on GitHub Pages

### **Step 2: Configure GitHub Pages**
1. Go to your repository: https://github.com/me-sujith/Paradise_Nursery
2. **Settings** → **Pages**
3. **Source**: "Deploy from a branch"
4. **Branch**: `gh-pages`
5. **Folder**: `/ (root)`
6. Click **Save**

## 📋 **What's Included**

- ✅ **`gh-pages` package** - Simple deployment tool
- ✅ **`homepage` field** in package.json
- ✅ **Deployment scripts** - `npm run deploy`
- ✅ **No complex workflows** - Just simple commands

## 🔧 **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm run preview` - Preview production build

## 🌟 **Why This Approach is Better**

1. **Simpler** - No complex GitHub Actions
2. **More reliable** - Proven deployment method
3. **Easier to debug** - Clear error messages
4. **Standard approach** - Used by many React projects

## 🎯 **Live URL**

Once deployed, your app will be available at:
`https://me-sujith.github.io/Paradise_Nursery/`

## 🚨 **Troubleshooting**

If deployment fails:
1. Make sure you're logged into GitHub CLI or have proper permissions
2. Check that the repository exists and is accessible
3. Verify the `homepage` field in package.json is correct
4. Try running `npm run build` first, then `npm run deploy`

## 📝 **Manual Steps (if needed)**

If you prefer manual deployment:
1. Run `npm run build`
2. Copy contents of `dist/` folder to a new `gh-pages` branch
3. Push the branch to GitHub
4. Configure Pages to deploy from `gh-pages` branch

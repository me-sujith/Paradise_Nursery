# Manual Deployment Guide for Paradise Nursery

This branch contains the built production files for manual deployment to GitHub Pages.

## What's Included

- `dist/` folder with all built React files
- Production-ready HTML, CSS, and JavaScript
- Optimized for GitHub Pages deployment

## How to Deploy

### Option 1: Deploy from this branch
1. Push this branch to GitHub: `git push origin deploy-manual`
2. Go to Settings → Pages in your repository
3. Source: "Deploy from a branch"
4. Branch: `deploy-manual`
5. Folder: `/ (root)`
6. Click Save

### Option 2: Copy files to main branch
1. Copy the `dist/` folder contents to the root of your main branch
2. Commit and push the changes
3. Configure Pages to deploy from main branch

## Files Structure

```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-BS1loPIe.css    # Styles
│   └── index-DdQJnCWa.js     # JavaScript bundle
```

## Live URL

Once deployed, your app will be available at:
`https://me-sujith.github.io/Paradise_Nursery/`

## Troubleshooting

- Make sure the `dist/` folder is at the root level
- Check that all asset paths are correct
- Verify GitHub Pages is enabled and configured

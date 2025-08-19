# Paradise Nursery 🌱

A beautiful React-based shopping application for houseplants, built with modern web technologies.

## Features

- **Landing Page**: Company introduction with background image and call-to-action
- **Product Catalog**: Browse houseplants organized by categories (Low Light, Statement, Trailing)
- **Shopping Cart**: Add, remove, and adjust quantities of plants
- **Responsive Design**: Modern UI that works on all devices
- **Real-time Cart Updates**: Dynamic cart count in header

## Technologies Used

- React 18 with TypeScript
- Vite for fast development and building
- React Router for navigation
- CSS3 with custom properties and modern layouts
- Context API for state management

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/Paradise_Nursery.git
cd Paradise_Nursery
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React Context for cart state
├── data/          # Product data and categories
├── pages/         # Main application pages
└── styles/        # CSS and styling
```

## Deployment

This project is configured for GitHub Pages deployment using GitHub Actions. The workflow automatically builds and deploys the app whenever changes are pushed to the main branch.

### Manual Deployment Steps

1. Create a new repository on GitHub named `Paradise_Nursery`
2. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/Paradise_Nursery.git
git branch -M main
git push -u origin main
```

3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (will be created by the workflow)
   - Folder: / (root)

4. The GitHub Actions workflow will automatically deploy your app

## Live Demo

Your app will be available at: `https://YOUR_USERNAME.github.io/Paradise_Nursery/`

## Contributing

This is a course project for IBM's Developing Front-End Apps with React course.

## License

This project is created for educational purposes.

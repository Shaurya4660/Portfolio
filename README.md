# Shaurya Vishnoi — Portfolio

A modern, professional portfolio website built with **React + TypeScript**.

## Design System

- **Palette**: Warm Cream × Terracotta × Sage — refined editorial aesthetic
- **Typography**: Playfair Display (display) + DM Sans (body) + DM Mono (labels)
- **Theme**: Light/Dark toggle with `localStorage` persistence
- **Animations**: Scroll-reveal, hero entrance, hover micro-interactions

## Tech Stack

- React 18 + TypeScript
- CSS Modules (per-component CSS files)
- Google Fonts (Playfair Display, DM Sans, DM Mono)
- No external UI library — fully custom design

## Folder Structure

```
portfolio/
├── public/
│   └── index.html          # Full SEO + JSON-LD + OG tags
├── src/
│   ├── components/
│   │   ├── Navbar/         # Fixed nav + mobile drawer + theme toggle
│   │   ├── Hero/           # Animated entrance + social links + stats
│   │   ├── About/          # Summary + info card + passion tags
│   │   ├── Experience/     # Timeline layout + key project highlight
│   │   ├── Projects/       # Featured project card
│   │   ├── Skills/         # Categorised skill grid
│   │   ├── Education/      # Card grid with current badge
│   │   ├── Contact/        # Channel list + mailto form
│   │   └── Footer/         # Logo + copyright + back-to-top
│   ├── hooks/
│   │   └── useScrollSpy.ts # Active nav + scroll-reveal observer
│   ├── types/
│   │   └── index.ts        # Shared TypeScript interfaces
│   ├── utils/
│   │   └── data.ts         # ← EDIT THIS to update all portfolio content
│   ├── App.tsx             # Root: theme + layout
│   ├── index.tsx           # ReactDOM entry point
│   └── index.css           # Global design system (CSS variables, utilities)
├── package.json
└── tsconfig.json
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
# → Opens http://localhost:3000

# 3. Production build
npm run build
```

## Customisation

**All content lives in one file**: `src/utils/data.ts`

Edit `HERO`, `ABOUT`, `EXPERIENCES`, `PROJECTS`, `SKILL_CATEGORIES`, and `EDUCATIONS` to update the site instantly.

## Deployment

### Vercel (Recommended — free, zero config)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Create React App.

### Netlify
```bash
npm run build
# Drag the `build/` folder into app.netlify.com/drop
```
Or connect your GitHub repo → set build command `npm run build`, publish dir `build`.

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
# Add: "homepage": "https://yourusername.github.io/portfolio"
npm run deploy
```

## SEO Checklist

- [x] Semantic HTML (`<section>`, `<article>`, `<header>`, `<main>`, `<footer>`)
- [x] Meta title, description, keywords
- [x] Open Graph tags (og:title, og:description, og:image, og:url)
- [x] Twitter Card
- [x] JSON-LD structured data (Person schema)
- [x] Canonical URL
- [x] ARIA labels on interactive elements
- [x] Skip-to-content link for keyboard users
- [x] `lang="en"` on `<html>`

## Accessibility

- Skip-to-content link (visible on focus)
- ARIA labels on all icon buttons and links
- `aria-current="page"` on active nav item
- `aria-label` on all sections
- Form labels linked to inputs via `htmlFor`/`id`
- `role="status"` / `role="alert"` on form feedback

## Performance Tips

- Fonts loaded via Google Fonts with `preconnect`
- CSS animations use `transform` + `opacity` (GPU-accelerated)
- No heavy dependencies — pure React + CSS
- Add `loading="lazy"` if you add images later

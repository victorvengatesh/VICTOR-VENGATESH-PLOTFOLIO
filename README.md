# Victor Vengatesh — Interactive Portfolio

[![Portfolio CI](https://github.com/victorvengatesh/VICTOR-VENGATESH-PLOTFOLIO/actions/workflows/ci.yml/badge.svg)](https://github.com/victorvengatesh/VICTOR-VENGATESH-PLOTFOLIO/actions/workflows/ci.yml)

A cinematic, scroll-driven developer portfolio built to present AI/ML projects through an immersive visual experience rather than a conventional static résumé page.

**Live site:** https://victor-space-portfolio.vercel.app

---

## What the experience includes

- Three connected visual scenes inspired by a Japanese temple environment
- Scroll-linked camera movement and scene transitions
- Responsive About, Skills, Projects, Experience and Contact sections
- Featured AI/ML project storytelling
- Reduced-motion support for users who prefer less animation
- Responsive navigation across desktop and mobile layouts
- Downloadable résumé and professional links

---

## Technology

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion**
- **Node.js 22**
- **Vercel** for deployment

---

## Why this project matters

The goal of the portfolio is not just visual decoration. It is an experiment in combining interaction design, storytelling and frontend engineering while keeping the site usable and accessible.

Key engineering concerns include:

- keeping animation smooth without blocking navigation
- supporting responsive layouts across screen sizes
- respecting reduced-motion preferences
- balancing visual effects with readable project information
- maintaining a production build that remains deployable through a standard Next.js workflow

---

## Run locally

```bash
git clone https://github.com/victorvengatesh/VICTOR-VENGATESH-PLOTFOLIO.git
cd VICTOR-VENGATESH-PLOTFOLIO
npm install
npm run dev
```

Then open the local URL printed by Next.js.

---

## Quality checks

```bash
npm run lint
npm run build
```

A successful production build is the minimum release gate before deployment.

---

## Production

```bash
npm run build
npm start
```

The connected Vercel project deploys from the repository configuration.

---

## Project structure

```text
app/                 Next.js routes and application UI
public/              static assets
eslint.config.mjs    lint configuration
next.config.ts       Next.js configuration
package.json         scripts and dependencies
tsconfig.json        TypeScript configuration
vercel.json          deployment configuration
```

---

## Accessibility and performance direction

The project includes reduced-motion support and responsive interactions. Future improvements should be validated with measurable tooling rather than assumed from visual quality alone.

Useful checks include:

- Lighthouse performance/accessibility audits
- keyboard navigation testing
- contrast checks
- mobile interaction testing
- Core Web Vitals monitoring
- image and asset optimization

---

## Repository naming note

The current repository name contains the historical spelling `PLOTFOLIO`. The application itself is a **portfolio**. Renaming the repository can be done separately because it changes external URLs and may require updating deployment integrations and links.

---

Built by **M. Victor Vengatesh**.

# Gabriel Butt Portfolio Website

A coding-themed React portfolio website for Gabriel Butt, built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- Dark developer-style interface
- Terminal-inspired hero section
- Project cards linked to GitHub repositories
- Skills and about sections
- Responsive design for desktop and mobile
- GitHub Pages deployment workflow included

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build locally

```bash
npm run build
```

The production files will be created in `dist/`.

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy.yml`. Push the files to your GitHub Pages repository and set:

- Repository: `Gabrielbutt.github.io`
- Settings → Pages → Source: `GitHub Actions`

GitHub will automatically build and publish the site after each push to `main`.

## Customization

Update these files for personal details:

- `src/components/portfolio/Hero.tsx` for the intro and email button
- `src/components/portfolio/Footer.tsx` for contact links
- `src/components/portfolio/Projects.tsx` for project cards
- `src/components/portfolio/Skills.tsx` for skill tags

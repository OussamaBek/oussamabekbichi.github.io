# Oussama Bekbichi Portfolio

I built this portfolio with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Commands

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## Deployment

I deploy this site to GitHub Pages at:

```text
https://OussamaBek.github.io
```

For that root URL, my GitHub repository must be named:

```text
OussamaBek.github.io
```

If I keep the current project repository name, GitHub Pages serves the site under the project path instead:

```text
https://OussamaBek.github.io/oussamabekbichi.github.io/
```

## GitHub Pages Fix

If GitHub Pages shows a blank page and the browser console says a resource returned `404`, I am probably serving the Vite source files from the repository root instead of the compiled `dist` build.

I should use one of these deployment paths:

1. GitHub Actions deployment

In GitHub, I go to:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

Then I push to `main`. The workflow in `.github/workflows/deploy.yml` builds `dist` and deploys it.

2. Manual `gh-pages` deployment for the current project URL

```bash
npm install
npm run deploy
```

This deploys the built site to:

```text
https://OussamaBek.github.io/oussamabekbichi.github.io/
```

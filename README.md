## MD AL EMRAN – Portfolio (Vite + React + TS)

### Local development

```sh
npm install
npm run dev
```

### Build

```sh
npm run build
```

### Deploy to GitHub Pages

Two options:

1) GitHub Actions (recommended)
- Create repository on GitHub and push this code.
- In repo Settings → Pages, set Source to GitHub Actions.
- Commit the provided `.github/workflows/pages.yml` file (added in this repo) which builds with Vite and deploys the `dist` folder.

2) Manual deploy
- Run `npm run build`.
- Push the `dist` folder to the `gh-pages` branch.

If your repo is published under `https://<user>.github.io/<repo>/`, set an environment variable `VITE_BASE=/<repo>/` during build or set the `base` path inside `vite.config.ts` accordingly.

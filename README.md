# Personal portfolio

Static personal portfolio built with Astro and deployed to GitHub Pages.

- [View the site](https://jdavidleon.github.io/davidleon/)
- [Design system](DESING.md)

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The site is configured for the `/davidleon` GitHub Pages base path. Pushes to the `gh-pages` branch trigger `.github/workflows/deploy.yml`, which builds and deploys the static output through GitHub Actions.

# startup-site

This project is a static Vite + React + TypeScript site built with Tailwind CSS.

Static deployment instructions:

- Build the site:

```bash
npm install
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

- Deploy options:
	- Vercel or Netlify: connect the Git repository and use the `build` command. The publish directory is `dist/`.
	- GitHub Pages: build locally and push `dist/` to the `gh-pages` branch (or use an action to publish).

If you previously planned a backend server, that plan has been cancelled — this repository is now configured as a static site for easy deployment on static hosts.
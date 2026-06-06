# xaytag.com — project dashboard

A small static dashboard that links to my projects, sites and webapps.
Built with [Astro](https://astro.build), deployed to GitHub Pages, served on the
apex domain **xaytag.com** via Cloudflare DNS.

## Add or edit a project

Everything lives in one file:

```
src/data/projects.ts
```

Add an entry to the `projects` array, commit, and push to `main` — the GitHub
Action rebuilds and redeploys automatically.

```ts
{
  title: 'My App',
  description: 'What it does.',
  url: 'https://app.example.com',
  icon: '🚀',      // optional
  tag: 'webapp',   // optional
}
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

> Requires Node ≥ 18.17.1 (Astro 4). CI uses Node 20 regardless of your local version.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`. In the repo:
**Settings → Pages → Source = GitHub Actions**.

### Custom domain (Cloudflare DNS)

`public/CNAME` pins the domain to `xaytag.com`. In Cloudflare add the GitHub
Pages apex records (set them to **DNS only / grey cloud**):

| Type  | Name | Value             |
|-------|------|-------------------|
| A     | @    | 185.199.108.153   |
| A     | @    | 185.199.109.153   |
| A     | @    | 185.199.110.153   |
| A     | @    | 185.199.111.153   |
| CNAME | www  | xaytag.github.io  |

Then tick **Settings → Pages → Enforce HTTPS** once the certificate is issued.

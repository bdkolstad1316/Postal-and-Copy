# Postal and Copy Plus — Website

A fast, mobile-first static website for **Postal and Copy Plus**, served by a tiny
zero-dependency Node server so it deploys cleanly on **Railway**.

```
.
├── public/            ← the website
│   ├── index.html     ← page markup
│   ├── config.js      ← ★ EDIT THIS: all business info (hours, address, phone, services)
│   ├── site.js        ← fills the page from config.js + builds SEO data
│   ├── styles.css     ← styling
│   ├── favicon.svg    ← logo / icon (replace with a real logo when available)
│   ├── 404.html       ← not-found page
│   ├── robots.txt / sitemap.xml / llms.txt  ← discoverability (search + AI assistants)
├── server.js          ← minimal static server (binds to Railway's $PORT)
├── package.json       ← `npm start` runs the server
└── .gitignore
```

## 1. Add the real business details

Open **`public/config.js`** and replace every placeholder wrapped in `« »`:
phone, email, street/city/state/zip, hours, and the service list. Everything on the
page (and the data Google + AI assistants read) updates from this one file.
Also update the two `« »` placeholders in `public/llms.txt`.

## 2. Preview locally (optional)

```bash
npm start
# open http://localhost:3000
```

(Requires Node 18+. No `npm install` needed — there are no dependencies.)

## 3. Put it on GitHub (GitHub Desktop)

1. **File → Add local repository** → choose this folder (it's already a git repo).
2. Write a commit summary (e.g. "Initial site") → **Commit to main**.
3. **Publish repository** → push to GitHub (private is fine).

## 4. Deploy on Railway

1. In Railway: **New Project → Deploy from GitHub repo** → pick this repo.
2. Railway auto-detects Node, runs `npm start`, and assigns a URL. No config needed.
3. Every future push from GitHub Desktop redeploys automatically.

## 5. Connect the domain (after registering postalandcopyplus.com)

1. In Railway: project → **Settings → Networking → Custom Domain** → add
   `www.postalandcopyplus.com` (and the apex `postalandcopyplus.com`).
2. Railway shows the DNS records to create. Add them at your registrar / Cloudflare:
   - `www` → CNAME to the Railway target.
   - apex → use the registrar's ALIAS/ANAME (or a redirect to `www`).
3. Wait for DNS to propagate; Railway provisions HTTPS automatically.
4. Verify: `https://www.postalandcopyplus.com` loads with a valid certificate.

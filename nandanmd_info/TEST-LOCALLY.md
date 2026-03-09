# Test the Site Right Now (Local)

## Option 1: Quick local server (recommended)

From your project folder in a terminal:

**If you have Node/npx:**
```bash
cd /Users/vnandan/cursor_docs
npx --yes serve .
```
Then open **http://localhost:3000** (or the URL it prints).

**If you have Python 3:**
```bash
cd /Users/vnandan/cursor_docs
python3 -m http.server 8080
```
Then open **http://localhost:8080**.

---

## What you can test locally

- **All pages** – Click through Home, Surgical, procedure pages, Contact, etc.
- **Gallery from CMS** – Procedure pages load `gallery.json` and show “More patient results” if there’s data. Right now `gallery.json` is empty `[]`, so that section stays empty until you add entries via the admin (on Netlify).
- **Build script** – From the project root: `node scripts/generate-gallery.js`. It should write `gallery.json` (empty if there are no `content/gallery/*.md` files).

---

## What you can’t test locally

- **Admin panel** (`/admin`) – Login and saving only work when the site is on **Netlify** with **Identity** and **Git Gateway** enabled. Locally you might see the admin UI, but “Log in with Netlify Identity” will not complete. To test adding photos, deploy to Netlify and use **https://your-site.netlify.app/admin**.

---

## Test with fake gallery data (optional)

To see “More patient results” without using the CMS:

1. Edit `gallery.json` and paste:
```json
[
  { "procedure": "breast-lift", "image": "/images/page-hero-fallback.svg", "caption": "Sample result (replace with real photo via admin)." }
]
```
2. Restart or refresh your local server and open a procedure page (e.g. Breast Lift). You should see one entry in “More patient results”.

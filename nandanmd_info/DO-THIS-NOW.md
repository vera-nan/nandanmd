# Deploy This Site — Do This Now

Follow these steps in order. **I can’t log into Netlify or Squarespace for you**, but this is the shortest path.

---

## Part 1: Put the site online (Netlify)

1. **Open** [https://app.netlify.com](https://app.netlify.com) in your browser.
2. **Sign in** or create a free account (e.g. with Google or email).
3. On the Netlify dashboard, find **“Deploy manually”** or **“Drag and drop your site output folder here”**.
4. **Drag this entire folder** (`cursor_docs` — the one that contains `index.html`, `styles.css`, `main.js`, and the `images` folder) onto that area.  
   - Don’t drag individual files; drag the **whole folder** so the root has `index.html`.
5. Wait for the deploy to finish. Netlify will show a link like **`https://something-random-123.netlify.app`**. Click it and check that your site looks correct.

---

## Part 2: Use your Squarespace domain on Netlify

1. In Netlify, open your site → **Site configuration** (or **Domain settings**) → **Domain management** → **Add custom domain** (or **Add domain**).
2. Enter your domain (e.g. **`yourdomain.com`**) and follow the prompts. Add **`www.yourdomain.com`** as well if Netlify asks.
3. Netlify will show you **DNS records** to add. Usually:
   - **A record:** Name `@`, value **`75.2.60.5`** (Netlify’s load balancer).
   - **CNAME record:** Name `www`, value **`your-site-name.netlify.app`** (your actual Netlify URL from Part 1).

---

## Part 3: Point your Squarespace domain to Netlify (replaces old site)

1. Log in to **Squarespace** → **Settings** → **Domains** (or **Website** → **Domains**).
2. Click **your domain**.
3. Open **DNS Settings** (or **Advanced** / **Manage DNS**).
4. **Add** the records from Part 2:
   - **A record:** Host `@` (or leave blank if that’s how Squarespace shows “root”), Points to **`75.2.60.5`**.
   - **CNAME record:** Host `www`, Points to **`your-site-name.netlify.app`** (the Netlify URL from Part 1).
5. **Remove or update** any old **A** or **CNAME** records that pointed to your previous site (so the domain only points to Netlify).
6. **Save**. DNS can take 5–60 minutes (sometimes up to 48 hours). After that, **yourdomain.com** will show this new site and the old one will be replaced.

---

## If something goes wrong

- **“Site not found”** → Make sure you dragged the **folder** that contains `index.html` at the top level, not a parent or a zip.
- **Domain doesn’t load** → Wait a bit for DNS, then in Netlify run **“Verify DNS configuration”** and fix any records it suggests.
- **Old site still showing** → Clear browser cache or try an incognito window; confirm in Squarespace that the A and CNAME point to Netlify and the old records are gone.

Once Part 1–3 are done, the site is live on your domain and the old one is replaced.

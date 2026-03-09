# Veralogiq app & site — summary and maintenance guide

This document summarizes what was built, where everything lives, and how to continue development or change Netlify/Squarespace later.

---

## Part 1: What we did (summary)

### App & website structure

- **Landing page** at **index.html**: hero (“Catch Pokémon. Earn them with math & trivia”), “Play the game” → game, “What is this?”, blocks for For parents / For teachers, footer. This is the first thing visitors see.
- **Game** at **game.html**: full Pokémon collector (grid, trivia, math challenge, wild encounter, catch flow, card detail, break/cooldown, “How I play” mode picker). Sticky header and game menu; slim sticky footer (nav + Veralogiq tagline). “Data from PokeAPI” line scrolls with content (non-sticky).
- **Site pages**: about.html, teachers.html, students.html, parents.html, settings.html — each has “← Home” (to index), “Game” link (to game.html), and same top nav.
- **Navigation**: All pages (including landing and game) have Game, Settings, About, For Teachers, For Students, For Families in the top nav. “Back to game” was changed to “← Home” (to index) everywhere so it makes sense even if the user never played.

### UX and content changes

- **Sticky header**: Brand bar + full header (stats, toolbar, Play Trivia / Math Challenge, How I play, Done, Start over) stay at the top when scrolling (z-index 50 so content doesn’t hide it).
- **Footer**: Slim sticky footer with nav links + “Veralogiq — Learning games & tutoring”. “How I play” moved from footer into the header (game menu). PokeAPI/copyright line moved into the main content area (scrolls, not sticky).
- **Trivia & math**: Answer feedback stays 4 seconds before auto-advancing; added “Next question →” so users can advance when ready. Timeout is cleared when they click Next.
- **Break/cooldown**: Break reminder and cooldown overlays include a “Home” link (to index.html) so the site isn’t locked during the timer.
- **Domain**: Site is the **main** veralogiq.com site (not game.veralogiq.com). Docs updated for apex domain + A records.

### Deployment and hosting

- **GitHub**: Repo **vera-nan/veralogiq** (private or public) holds the site code. Pushing to `main` triggers Netlify.
- **Netlify**: Connected to the GitHub repo; builds and serves the site. Custom domain: **veralogiq.com** (and **www.veralogiq.com**). SSL is provisioned by Netlify.
- **Squarespace**: Domain **veralogiq.com** is registered/managed there. DNS is at Squarespace: **A** record for **@** → Netlify IP (e.g. 75.2.60.5), **CNAME** for **www** → **zingy-custard-0f5eeb.netlify.app**. Other records (e.g. k1._domainkey for email) left as needed.
- **Docs**: Strategy and deploy docs live in **veralogiq_docs/** (this file, GET_ONLINE_STEP_BY_STEP.md, DEPLOY.md, README, strategy docs). The actual app/site code is in **veralogiq/**.

---

## Part 2: Continue development (local → GitHub → live site)

### Where the code lives

- **Local**: `/Users/vnandan/cursor_docs/veralogiq/` — this is the folder you edit (HTML, CSS, JS).
- **GitHub**: `https://github.com/vera-nan/veralogiq` — same content; Netlify deploys from here.

### Workflow to ship changes

1. **Edit** files in `veralogiq/` (e.g. in Cursor).
2. **Commit and push** from that folder:
   ```bash
   cd /Users/vnandan/cursor_docs/veralogiq
   git add .
   git commit -m "Short description of what you changed"
   git push origin main
   ```
   Use your GitHub username and **Personal Access Token** (not password) if prompted.
3. **Netlify** will auto-deploy (usually 1–2 minutes). Check **Netlify → Deploys** to see the new deploy.
4. **Visit** https://veralogiq.com (and https://www.veralogiq.com) to confirm. Hard refresh or incognito if you still see old content.

### Useful git commands

- See status: `git status`
- See what changed: `git diff`
- Undo last commit (keep changes): `git reset --soft HEAD~1`

---

## Part 3: If you change Netlify later (e.g. new site or different host)

### Option A: New Netlify site, same repo

1. In **Netlify**: Add a new site → “Import an existing project” → **GitHub** → choose **vera-nan/veralogiq**.
2. Build settings: **Build command** leave empty, **Publish directory** = `/` (root). Deploy.
3. In the new site: **Domain management** → **Add custom domain** → **veralogiq.com** (and **www.veralogiq.com**).
4. In **Squarespace DNS**: Update the **A** record for **@** to the new Netlify site’s IP if Netlify gives a different one; update **www** CNAME to the new site’s **xxx.netlify.app** hostname. (Netlify will show the exact values.)
5. Wait for DNS/SSL; then turn off or delete the old Netlify site if you no longer need it.

### Option B: Move to another host (e.g. Vercel, or back to GitHub Pages)

1. **Connect** the new host to the same GitHub repo (**vera-nan/veralogiq**), branch **main**, publish directory **/** (root).
2. **Add custom domain** **veralogiq.com** (and **www**) in the new host’s dashboard.
3. **Squarespace DNS**: Remove or replace the Netlify A and www CNAME with the records the new host gives you (often A records for @ and CNAME for www to the new host’s URL).
4. After DNS propagates and SSL is active, disconnect or delete the Netlify site.

**Important:** Keep a list of any DNS records you care about (MX for email, TXT for verification, etc.) before changing DNS, and re-add them in the new host’s DNS if that host will manage DNS, or leave them in Squarespace if you keep DNS there.

---

## Part 4: If you change Squarespace later (e.g. new domain or different registrar)

### Moving the domain to another registrar (e.g. Namecheap, Cloudflare)

1. **At the new registrar**: Add the domain (transfer or connect), then set **nameservers** to either:
   - **Squarespace** (if you keep using Squarespace DNS), or  
   - **Netlify DNS** (if you switch to Netlify DNS — use the nameservers Netlify shows, e.g. dns1.p08.nsone.net, etc.), or  
   - The new registrar’s own DNS.
2. **Recreate the same records** you had in Squarespace:
   - **A** for **@** → Netlify IP (75.2.60.5 or whatever Netlify currently shows).
   - **CNAME** for **www** → **zingy-custard-0f5eeb.netlify.app** (or your current Netlify site URL).
   - Any **MX**, **TXT** (e.g. k1._domainkey), or other records you need for email or verification.
3. After the domain points to the new DNS, **Squarespace** can be disconnected from the domain (or you keep using Squarespace for the main marketing site and only DNS moves).

### Keeping Squarespace but changing DNS to Netlify DNS

1. In **Netlify**: Domain management → **Set up Netlify DNS** for **veralogiq.com** → note the four nameservers (e.g. dns1.p08.nsone.net, …).
2. **Copy** all important records from Squarespace (MX, TXT, etc.) into a list.
3. At your **domain registrar** (Squarespace Domains or wherever veralogiq.com is registered): change **nameservers** to the four Netlify nameservers.
4. In **Netlify** → **DNS**: Add **A** for **@** (Netlify will often add this), **CNAME** for **www** to your site’s .netlify.app URL, and **re-add** the MX and TXT records you copied. Then SSL for veralogiq.com and www will be handled by Netlify.

---

## Quick reference

| What | Where |
|------|--------|
| **Site code (edit this)** | `/Users/vnandan/cursor_docs/veralogiq/` |
| **Docs (strategy, deploy, this summary)** | `/Users/vnandan/cursor_docs/veralogiq_docs/` |
| **GitHub repo** | https://github.com/vera-nan/veralogiq |
| **Live site** | https://veralogiq.com and https://www.veralogiq.com |
| **Netlify site** | Netlify dashboard → your site (e.g. zingy-custard-0f5eeb.netlify.app) |
| **Domain/DNS** | Squarespace → Settings → Domains → veralogiq.com → DNS |
| **Push to update live site** | `cd veralogiq` → `git add .` → `git commit -m "..."` → `git push origin main` |

---

## Files in the repo (veralogiq/)

| File | Purpose |
|------|----------|
| index.html | Landing page (hero, Play the game, what is this, For parents/teachers) |
| game.html | Full game (grid, trivia, math, wild encounter, modals, sticky header/footer) |
| styles.css | All styles (game, landing, site pages, overlays) |
| app.js | Game logic, PokeAPI, collection, trivia, math, break/cooldown |
| trivia-types.js | Trivia question types / data |
| about.html, teachers.html, students.html, parents.html, settings.html | Site pages |
| README.md | Short project + deploy pointer |
| .gitignore | Ignore OS/editor junk |

No build step; open index.html locally or run a local server from the veralogiq folder to test before pushing.

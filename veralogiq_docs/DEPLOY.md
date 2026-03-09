# Deploy to GitHub Pages (main site: veralogiq.com)

Follow these steps to put the site on GitHub and serve it as your **main site** at **https://veralogiq.com**.

---

## 1. Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in (or create an account).
2. Click **New repository** (green button, or **+** → **New repository**).
3. Choose:
   - **Repository name:** e.g. `pokemon-collection` or `game` (this will be in the default URL until you add a custom domain).
   - **Public.**
   - Leave **Add a README** unchecked (you already have files).
4. Click **Create repository**.

---

## 2. Push this project to the repo

In Terminal (or Command Prompt), go to the project folder and run:

```bash
cd /path/to/veralogiq

git init
git add .
git commit -m "Initial commit: My Pokémon Collection site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace **YOUR_USERNAME** with your GitHub username and **YOUR_REPO_NAME** with the repo you created (e.g. `pokemon-collection`).

If GitHub asks you to log in, use a **Personal Access Token** as the password (Settings → Developer settings → Personal access tokens → Generate new token, with `repo` scope).

---

## 3. Turn on GitHub Pages

1. In the repo on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, find **Source** (or **Publishing source**). If it’s a dropdown that says **GitHub Actions**, change it to **Deploy from a branch**.
3. Then set:
   - **Branch:** `main` (or `master`)
   - **Folder:** `/ (root)`
4. Click **Save**.

After a minute or two, the site will be live at:

**https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/**

You can use that URL to test. To use **veralogiq.com** as your main site, do the next step.

---

## 4. Use your main domain (veralogiq.com)

### 4a. Set the custom domain in GitHub

1. Still in **Settings** → **Pages**.
2. Under **Custom domain**, type: **veralogiq.com** (no www, no https://).
3. Click **Save**.
4. If GitHub shows **Enforce HTTPS**, enable it after DNS is working.

### 4b. Point veralogiq.com to GitHub in your DNS (Squarespace)

For the **main domain** (veralogiq.com), use **A records**, not CNAME.

**Add four A records** in Squarespace (Settings → Domains → your domain → DNS Settings / Advanced):

- **Type:** A | **Host:** @ or blank | **Value:** 185.199.108.153  
- **Type:** A | **Host:** @ or blank | **Value:** 185.199.109.153  
- **Type:** A | **Host:** @ or blank | **Value:** 185.199.110.153  
- **Type:** A | **Host:** @ or blank | **Value:** 185.199.111.153  

**Optional (www):** Add one CNAME: **Host** `www` → **Target** `YOUR_USERNAME.github.io`.

DNS can take from a few minutes up to 24–48 hours. When it’s ready, GitHub will show a green check next to your custom domain in **Settings** → **Pages**.

---

## Summary

| Step | What you did |
|------|------------------|
| 1 | Created a new GitHub repo |
| 2 | Ran `git init`, `add`, `commit`, `remote`, `push` in the **veralogiq** folder |
| 3 | Settings → Pages → **Source: Deploy from a branch** → main, / (root) → Save |
| 4a | Set custom domain in repo to **veralogiq.com** |
| 4b | In Squarespace DNS: **Four A records** (@ → each of the four GitHub IPs); optional CNAME www → YOUR_USERNAME.github.io |

After DNS has propagated, the full site (landing + game) will be at **https://veralogiq.com** (your main site).

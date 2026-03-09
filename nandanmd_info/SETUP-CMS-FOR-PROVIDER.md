# One-Time Setup: Let the Provider Update Photos (You Do This Once)

The site uses **Decap CMS** (admin panel) so the provider can add/update images without coding. For that to work, you need to:

1. **Host the site on Netlify** and connect a **Git** repo (GitHub or GitLab).
2. **Enable Netlify Identity** and **Git Gateway** in Netlify.
3. **Invite the provider** as a user so they can log in at **yourdomain.com/admin**.

---

## 1. Put the site in a Git repo and connect Netlify

- Create a **GitHub** (or GitLab) account if you don’t have one.
- Create a new **repository** and push the contents of your `cursor_docs` folder (all HTML, CSS, JS, `images/`, `admin/`, `content/`, `scripts/`, `gallery.json`, etc.). The repo’s default branch should be **main** (or change `admin/config.yml` to use your branch name).
- In **Netlify**: add a new site by **“Import an existing project”** → connect GitHub/GitLab → select this repo.
- Set **Build command:** `node scripts/generate-gallery.js`  
  **Publish directory:** `.`  
  (Or rely on the existing `netlify.toml`: it already has `command` and `publish`.)
- Deploy. Your site should be live at `xxx.netlify.app` and, after DNS, at your custom domain.

---

## 2. Turn on Netlify Identity and Git Gateway

1. In Netlify: **Site** → **Site configuration** → **Identity**.
2. Click **“Enable Identity”**.
3. Under **Registration preferences**, set **“Invite only”** (so only people you invite can have accounts).
4. In **Site configuration** → **Services** → **Git Gateway**, click **“Enable Git Gateway”** (this lets the admin panel save changes back to your repo).

---

## 3. Invite the provider so they can log in

1. In Netlify: **Identity** → **Invite users**.
2. Enter the **provider’s email address** and send the invite.
3. They will get an email with a link to set their password. After that, they log in at **https://YOUR-DOMAIN.com/admin** with that email and password.
4. Send them the link and the short guide: **PROVIDER-GUIDE-ADD-PHOTOS.md** (you can copy the contents into an email or PDF).

---

## 4. How it works after setup

- Provider goes to **yourdomain.com/admin** and logs in.
- They use **“Gallery (before & after photos)”** to add entries: choose procedure, upload image, optional caption, save.
- Decap CMS commits the new file (and image) to your Git repo via Git Gateway.
- Netlify sees the new commit and **rebuilds** the site (runs `node scripts/generate-gallery.js`, which updates `gallery.json`).
- The live site loads `gallery.json` and shows the new photos in “More patient results” on the right procedure pages.

No coding is required for the provider; they only use the admin panel.

---

## Optional: Change the branch

If your repo uses a branch other than `main`, edit **admin/config.yml** and set:

```yaml
backend:
  name: git-gateway
  branch: your-branch-name
```

Then save and redeploy.

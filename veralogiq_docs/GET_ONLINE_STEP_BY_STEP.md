# Get the Veralogiq game website online — step by step

You need: a **GitHub account** and your **Squarespace domain** (veralogiq.com).  
Result: the site will be your **main site** at **https://veralogiq.com**.

---

## Part A: Put your code on GitHub

### Step 1: Create a new repository on GitHub

1. Open your browser and go to **https://github.com**. Log in.
2. In the top-right, click the **+** icon, then **New repository**.
3. On the “Create a new repository” page:
   - **Repository name:** type something like `game` or `veralogiq-game` (no spaces).
   - Leave **Public** selected.
   - **Do not** check “Add a README file.”
   - Click the green **Create repository** button.
4. You’ll see a page that says “Quick setup — if you’ve done this kind of thing before.”  
   Leave this tab open; you’ll need the repository URL in Step 3.

---

### Step 2: Open Terminal and go to your project folder

1. On your Mac, open **Terminal** (search “Terminal” in Spotlight, or find it in Applications → Utilities).
2. Type this and press **Enter** (use your real path if different):

   ```bash
   cd /Users/vnandan/cursor_docs/veralogiq
   ```

3. You should now be “inside” the folder that has `index.html`, `game.html`, etc.  
   To double-check, type: `ls` and press Enter. You should see a list of files including `index.html` and `game.html`.

---

### Step 3: Turn the folder into a Git repo and push to GitHub

Copy and run these commands **one at a time** in Terminal. After each line, press **Enter**.

**3a. Start Git in this folder**

```bash
git init
```

**3b. Stage all files**

```bash
git add .
```

**3c. Save a first “commit”**

```bash
git commit -m "Initial commit: Veralogiq game website"
```

**3d. Name the main branch `main`**

```bash
git branch -M main
```

**3e. Connect this folder to your GitHub repo**

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username and `YOUR_REPO_NAME` with the repo name you chose in Step 1 (e.g. `game`):

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
```

Example: if your username is `johndoe` and the repo is `game`, you’d type:

```bash
git remote add origin https://github.com/johndoe/game.git
```

**3f. Push the code to GitHub**

```bash
git push -u origin main
```

- If it asks for your **username**: type your GitHub username and press Enter.
- If it asks for your **password**: GitHub no longer accepts your normal password here. You must use a **Personal Access Token** (see box below).

**If you get “Authentication failed” or “Support for password authentication was removed”:**  
GitHub does **not** accept your account password for `git push`. You must use a **Personal Access Token** as the password. See **“How to create and use a Personal Access Token (PAT)”** below.

When the push succeeds, you’ll see something like “Branch 'main' set up to track remote branch 'main' from 'origin'.”

---

### How to create and use a Personal Access Token (PAT)

GitHub will **not** accept your normal login password for `git push`. You must create a **Personal Access Token** and paste it when Terminal asks for a “password.”

**Option 1 — Direct link (easiest)**

1. Open this page in your browser (log in to GitHub if needed):  
   **https://github.com/settings/tokens/new**
2. **Note:** type a name (e.g. `Veralogiq push`).
3. **Expiration:** pick 90 days or “No expiration” (you can delete the token later from GitHub).
4. Under **Scopes**, check **repo** (this will check all sub-items under it).
5. Scroll down and click the green **Generate token** button.
6. You’ll see a green box with a long token starting with `ghp_...`. **Copy the whole token** (click the copy icon or select all and copy). You won’t be able to see it again.
7. In Terminal, run again:  
   `git push -u origin main`  
   When it asks for **Password**, **paste the token** (Cmd+V) and press Enter. Leave **Username** as your GitHub username if it’s already filled.

**Option 2 — From the GitHub menu**

1. On **github.com**, click your **profile picture** (top right) → **Settings**.
2. In the **left sidebar**, scroll to the bottom and click **Developer settings**.
3. In the left sidebar, click **Personal access tokens** → **Tokens (classic)**.
4. Click **Generate new token** → **Generate new token (classic)**.
5. Name it (e.g. `Veralogiq push`), set **Expiration**, check the **repo** scope, then **Generate token**.
6. **Copy the token** (starts with `ghp_`). Use it in Terminal as the “password” when you run `git push -u origin main`.

**Important:** When Terminal asks for “Password”, paste the **token**, not your GitHub account password. The token is the only thing that will work.

---

## Part B: Turn on GitHub Pages (so the site is live)

### Step 4: Enable Pages and choose “Deploy from a branch”

1. On GitHub, open **your repository** (the one you created in Step 1).
2. Click **Settings** (tab at the top of the repo, next to Insights).
3. In the **left sidebar**, click **Pages**. (If you don’t see it, look under **“Code and automation”** or scroll down.)
4. You’ll see a **“Build and deployment”** section. Under it:
   - **Source** (or **Publishing source**) may show a **dropdown**. It might currently say **“GitHub Actions”**.
   - Open the dropdown and select **“Deploy from a branch”** (not “GitHub Actions”).
   - After you select it, two more dropdowns appear:
     - **Branch:** choose **main** (or **master** if that’s what you have).
     - **Folder:** choose **/ (root)**.
   - Click **Save** (or **Save changes**).

**If you still don’t see “Deploy from a branch”:**

- Look for a line that says **“Your site is currently being built from…”** or **“Source”**. There is usually a dropdown or link that says **“Change source”** or **“Change”** — click it, then pick **Deploy from a branch** and the **main** branch, **/ (root)** folder.
- On some accounts the option is under **“Pages”** → **“Build and deployment”** → **“Source”** → dropdown.

After one or two minutes, your site will be live at:

**https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/**

Example: `https://johndoe.github.io/game/`  
Open that URL in your browser to confirm the landing page and game work.

---

## Part C: Use your main domain (veralogiq.com)

Your GitHub Pages site will become **the main veralogiq.com site** (not a subdomain).

### Step 5a: If you see “There are no verified domains” and an “Add a domain” button

GitHub may ask you to **verify** the domain first so only you can publish to it.

1. Still in the repo: **Settings** → **Pages** (left sidebar).
2. Click **Add a domain**.
3. Enter **veralogiq.com** (no `www`, no `https://`) and confirm.
4. GitHub will show a **verification** step — usually a **TXT record** you must add in Squarespace DNS (e.g. a host like `_github-pages-challenge-YOUR_USERNAME` and a long value). Copy that value.
5. In **Squarespace**: **Settings** → **Domains** → your domain → **DNS Settings** (or **Advanced**). Add a **TXT** record with the host and value GitHub gave you. Save.
6. Back on GitHub, click **Verify** (or wait a few minutes; some UIs verify automatically). When it says the domain is verified, you can continue.
7. Then set **veralogiq.com** as the **Custom domain** for this Pages site (the box that says “Custom domain” — type veralogiq.com and Save). If you already added it in step 3, you may just need to Save or continue to Step 6.

### Step 5b: Tell GitHub to use veralogiq.com (if you didn’t use “Add a domain” above)

1. In the repo: **Settings** → **Pages**.
2. Under **Custom domain**, type: **veralogiq.com** (no `www`, no `https://`).
3. Click **Save**.
4. (Optional) After DNS is working and the site loads at veralogiq.com, come back and enable **Enforce HTTPS** if GitHub shows it.

---

### Step 6: Point your Squarespace domain to GitHub (A records + optional www)

So that **veralogiq.com** (and optionally **www.veralogiq.com**) opens your GitHub Pages site, you add DNS records in Squarespace.

**Important:** Your main domain (veralogiq.com) uses **A records**, not CNAME. You need **four A records** pointing to GitHub’s IPs.

1. Log in to **Squarespace** and open the site that has your domain (veralogiq.com).
2. Go to **Settings** → **Domains** (or **Website** → **Domains**).
3. Click your domain (veralogiq.com).
4. Open **DNS Settings**, **Advanced Settings**, or **Manage DNS** (or **Use custom nameservers** / **External DNS** if Squarespace offers it).
5. **Add four A records** for the apex domain (veralogiq.com). For each record:
   - **Type:** A  
   - **Host / Name:** leave **empty** or use **@** (meaning “the main domain veralogiq.com”).  
   - **Points to / Value / Address:** use **one** of these four IPs per record (add four separate A records, one per IP):
     - **185.199.108.153**
     - **185.199.109.153**
     - **185.199.110.153**
     - **185.199.111.153**
6. (Optional) If you want **www.veralogiq.com** to work too, add **one CNAME record**:
   - **Type:** CNAME  
   - **Host / Name:** `www`  
   - **Points to / Target:** **YOUR_GITHUB_USERNAME.github.io** (your real GitHub username, e.g. `johndoe.github.io`).
7. Save all records.

**If Squarespace doesn’t let you add A records** (e.g. domain is “hosted” by Squarespace only): check Squarespace help for “connect external domain” or “use custom DNS”; you may need to point the domain to “external” or “custom” DNS first, then add the A and CNAME records above.

DNS can take **5 minutes to 24 hours** to update. When it’s done, GitHub will show a green check next to your custom domain in **Settings** → **Pages**, and **https://veralogiq.com** will open your site.

---

## Part D: You’re done

veralogiq.com is now your main site. You don’t need a separate “link from main site” — this GitHub Pages site **is** the main site.

---

## Quick checklist

| Step | What you did |
|------|------------------|
| 1 | Created a new repo on GitHub (e.g. `game`) |
| 2 | Opened Terminal and went to the `veralogiq` folder |
| 3 | Ran `git init`, `git add .`, `git commit`, `git branch -M main`, `git remote add origin ...`, `git push` (and used a token if asked for a password) |
| 4 | In the repo: Settings → Pages → **Source dropdown** → **Deploy from a branch** → Branch: main, Folder: / (root) → Save |
| 5 | In Pages: Custom domain → **veralogiq.com** → Save |
| 6 | In Squarespace DNS: **Four A records** (@ or blank → each of the four GitHub IPs) + optional CNAME (www → YOUR_USERNAME.github.io) |

---

## If something goes wrong

- **“Repository not found” or 404:** Check that the repo name and username in `git remote add origin` are correct (e.g. github.com/username/game).
- **Push asks for password and token doesn’t work:** Use a **Personal Access Token** as the password, not your GitHub password. See the PAT section above.
- **I don’t see “Deploy from a branch”:** Under Settings → Pages, look for **“Build and deployment”** and a **Source** dropdown (it may default to “GitHub Actions”). Change the dropdown to **“Deploy from a branch”**; then pick branch **main** and folder **/ (root)**.
- **veralogiq.com doesn’t load:** Wait up to 24 hours for DNS. Check that you added **four A records** (one for each GitHub IP). In GitHub → Settings → Pages, see if the custom domain shows an error.
- **Site works at username.github.io/game but not at veralogiq.com:** The A records in Squarespace must point to the four IPs in Step 6. If Squarespace won’t let you add A records, you may need to use “External” or “Custom” DNS for the domain.

Once everything is set, run `git add .`, `git commit -m "Update site"`, and `git push` from the `veralogiq` folder whenever you change the site; GitHub Pages will update veralogiq.com automatically.

# What Needs to Change for Strategy Consistency

This list is what to change on the **current website** (this repo) so it matches **LANDING_AND_FLYWHEEL_STRATEGY.md**. No implementation here — only the checklist.

---

## 1. Add a dedicated landing page (main gap)

**Current:** Visitors land directly on the **game** (index.html). There is no “first touch” page that explains what this is and has a single **Play** CTA.

**Strategy:** First touch = **landing page** (Option B): hero + “What is this?” + For parents / For teachers blocks + footer. “Play the game” → goes to the game.

**Change:**

- Add a **new page** that is the landing (e.g. `landing.html` or make it the root `index.html` and move the current game to `game.html` — see 2 below).
- Landing page must include:
  - **Hero:** One headline for the player (e.g. “Catch Pokémon. Earn them with math and trivia.”), one subline (e.g. “Free game, no signup. Play in your browser.”), one primary button/link: **Play the game** → game URL.
  - **What is this?** 2–3 sentences: earn Poké Balls with Math/Trivia, catch with a question, Relaxed/Challenge modes, by Veralogiq.
  - **For parents:** Short block + link to `parents.html` (tutoring).
  - **For teachers:** Short block + link to `teachers.html` (classroom, permission).
  - **Footer:** Same nav as rest of site (About, Settings, For Teachers, For Students, For Families, Veralogiq).

**URL / entry point:**

- Decide the “share this game” URL:
  - **Option A:** Landing is the default (e.g. `index.html` = landing, game at `game.html`). Share link = site root or `/` → landing → Play → game.
  - **Option B:** Landing is a separate path (e.g. `landing.html` or `/play`). Share link = that path; game stays at `index.html`. You (or the host) set the default route to landing when possible.

---

## 2. Make “share this game” point to the landing (one clear URL)

**Strategy:** “One clear URL” for sharing; landing’s job is explain + Play so new visitors get context before (or instead of) dropping straight into the game.

**Change:**

- **Canonical share URL** = the landing page URL (whatever you chose in 1), not the game URL. Update any “Share this game” or “Share” copy/links so they use the landing URL (or root if root = landing).
- If you add a **“Share this game”** button (in the game or on landing), it should copy or open share with the **landing** URL, so recipients see explain + Play first.

---

## 3. Game page: optional “Home” or “About the game” link

**Current:** Game (index) has brand bar: Settings, About, For Teachers, For Students, For Families. No link back to a “home” or landing.

**Strategy:** Game stays as is; landing is the first touch. Optional: let people who landed on the game (e.g. from an old link) get to the landing.

**Change (optional):**

- Add a “Home” or “About this game” link in the brand bar or footer that goes to the **landing page**. So the flow is: Landing → Play → Game, and Game → Home → Landing. If you don’t add a landing (and keep a single game-only URL), skip this.

---

## 4. Keep lead gen off the play flow (already consistent)

**Current:** No signup or email gate to play; For Families / For Teachers are in nav and footer.

**Strategy:** Lead gen doesn’t block play; parents/teachers choose to click through.

**Change:** None. Just keep: no email or signup to play; no pop-ups before play; tutoring/classroom only in nav, footer, and on the landing’s “For parents” / “For teachers” blocks.

---

## 5. Don’t make the landing feel like a tutoring ad

**Strategy:** Player first; parents/teachers are a clear “second path.” Don’t overload the hero.

**Change:**

- On the **landing page**, hero = one headline, one subline, one **Play** CTA. No tutoring or classroom in the hero.
- Put “For parents” and “For teachers” in their own small blocks **below** the hero and “What is this?” so the first thing everyone sees is “what this is” and “Play.”

---

## 6. Footer and nav consistency

**Strategy:** Footer same as current: About, Settings, For Teachers, For Students, For Families, Veralogiq.

**Change:**

- On the **new landing page**, use the same footer (and nav if you add nav there) as on about.html / game: About, Settings, For Teachers, For Students, For Families, Veralogiq. No new links required beyond what you already have; just reuse the same pattern.

---

## 7. Optional later (not required for consistency)

- **Social proof:** When you have a quote or “Used in X classrooms,” add one line or a small block on the landing. Strategy says don’t invent it.
- **“Share this game” button:** In game or on landing, copy landing URL or open native share. Helps word of mouth; not required for strategy consistency.
- **Analytics:** To measure “Play” and “clicks to For Families / For Teachers,” add simple analytics (e.g. referrer, or one click tracker) when you’re ready. Not a content/structure change.

---

## Summary checklist

| # | Change | Status |
|---|--------|--------|
| 1 | Add dedicated landing page (hero + What is this + For parents/teachers + footer) | **To do** |
| 2 | Use landing URL as the canonical “share this game” URL | **To do** (once landing exists) |
| 3 | Optional: from game, add “Home” / “About this game” → landing | Optional |
| 4 | No signup / no lead gate to play | Already ok |
| 5 | Landing hero = player-focused only; tutoring/second path below | **To do** (when building landing) |
| 6 | Landing footer/nav matches rest of site | **To do** (when building landing) |
| 7 | Social proof, Share button, analytics | Later / optional |

**Bottom line:** The only structural change needed for consistency is **add a dedicated landing page** and treat it as the first touch and shareable URL. Everything else is either already aligned (no signup, lead gen in nav/footer) or a small addition on that new page (hero, “What is this?”, two blocks, footer).

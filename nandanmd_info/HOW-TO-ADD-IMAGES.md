# How to Add Images to Your Site

Put your image files in the **`images/`** folder (and **`images/gallery/`** for before/after photos). Then either **replace** an existing file with the same name or **edit the HTML** to point to your new filename.

**Current assets (no placeholders):** The site uses neutral fallbacks you can replace anytime:
- **Page heroes:** `page-hero-fallback.svg` (warm gradient) on all inner pages → replace with `page-hero.jpg` or your own file.
- **Gallery slots:** `card-empty.svg` (soft gradient) in procedure galleries → replace with your photos in `images/gallery/`.
- **Review badges:** `badge-google.svg`, `badge-yelp.svg`, `badge-realself.svg`, `badge-doximity.svg` (styled “Google Reviews”, “Yelp”, etc.) → replace with official PNG/SVG from each platform if you prefer.
- **Home hero:** Expects `hero-practice.jpg` in `images/`. Add it (1920×1080) so the main banner shows your photo.
- **Section background:** Expects `section-ambient.jpg` in `images/`. Add it for the “Our Approach” background.

---

## Quick reference: where images are used

| Use | Current file | Recommended size | Where it’s used |
|-----|--------------|------------------|------------------|
| **Home hero** (main banner) | `images/hero-practice.jpg` | 1920×1080 px | `index.html` |
| **Page hero** (inner pages) | `images/page-hero-fallback.svg` | 1920×1080 px (if using JPG) | All inner pages (surgical, contact, gallery, etc.) |
| **Section background** (Our Approach) | `images/section-ambient.jpg` | 1920×1080 px | `index.html` |
| **Gallery / before & after** | `images/card-empty.svg` (fallback) or your photos | 600×800 or 800×600 px | Procedure pages, photo-gallery.html, surgical-procedures.html |
| **Review badges** | `images/badge-*.svg` or official PNGs | 200×80 px (or platform size) | `index.html` (footer), `patient-testimonials.html` |
| **Logo** | `images/logo.svg` | Any (vector) | Header and hero on every page |
| **Doctor photo** | External (KP) or `images/dr-nandan.jpg` | 400×500 px | `index.html` About section |

---

## Step-by-step

### 1. Home hero (main banner)

- Add your photo as **`images/hero-practice.jpg`** (or another name).
- Recommended size: **1920×1080** (or same aspect ratio).
- If you use a different filename, in **`index.html`** change:
  ```html
  <img class="hero-img" src="images/hero-practice.jpg" alt="" />
  ```
  to your file, e.g. `src="images/your-hero.jpg"`.

### 2. Inner page heroes (surgical, contact, gallery, etc.)

- Right now every inner page uses **`images/page-hero-fallback.svg`** (a neutral gradient).
- To use **one photo for all inner pages**: add **`images/page-hero.jpg`** (1920×1080). Then in each inner page HTML, find:
  ```html
  <img class="page-hero-img" src="images/page-hero-fallback.svg" alt="" />
  ```
  and change to:
  ```html
  <img class="page-hero-img" src="images/page-hero.jpg" alt="" />
  ```
- To use **different photos per section**: e.g. add `images/page-hero-surgical.jpg`, `images/page-hero-contact.jpg`, and set each page’s `src` to the right file.

### 3. Section background (“Our Approach” on home)

- Add **`images/section-ambient.jpg`** (1920×1080).
- It’s referenced in **`index.html`** as:
  ```html
  <div class="philosophy-bg-img" style="background-image: url('images/section-ambient.jpg');"></div>
  ```
  Change the filename in `url('...')` if you use a different file.

### 4. Gallery / before & after photos

- Create a folder **`images/gallery/`** and put your photos there.
- Suggested names: e.g. `breast-lift-01.jpg`, `breast-reduction-02.jpg`, `tummy-tuck-01.jpg`, etc.
- Recommended size: **600×800** or **800×600** (portrait or landscape).
- In each **procedure page** (e.g. `breast-lift.html`, `tummy-tuck.html`), find the gallery blocks. Each case has something like:
  ```html
  <div class="gallery-case-image"><img src="images/card-empty.svg" alt="Breast lift case 1" /></div>
  ```
  Change `src` to your file, e.g.:
  ```html
  <div class="gallery-case-image"><img src="images/gallery/breast-lift-01.jpg" alt="Breast lift case 1" /></div>
  ```
- Do the same for **`photo-gallery.html`** and **`surgical-procedures.html`** where procedure cards use images.

### 5. Review badges (Google, Yelp, RealSelf, Doximity)

- The site uses neutral badge SVGs by default. To use **official badges**:
  - Download from [Google Business](https://business.google.com) (e.g. “Google” or “Reviews” badge), [Yelp](https://www.yelp.com/badges), and any RealSelf/Doximity assets you have.
  - Save as **`images/google-badge.png`**, **`images/yelp-badge.png`**, **`images/realself-badge.png`**, **`images/doximity-badge.png`** (or .svg if provided).
- In **`index.html`** (footer) and **`patient-testimonials.html`**, replace each badge `<img src="images/badge-google.svg" ... />` (or current path) with the matching file, e.g. `src="images/google-badge.png"`.

### 6. Doctor photo

- The About section currently uses the KP URL. To use a **local** photo:
  - Save it as **`images/dr-nandan.jpg`** (about 400×500 px).
  - In **`index.html`**, change:
    ```html
    <img src="https://www.kpcosmeticservices.com/..." ... />
    ```
    to:
    ```html
    <img src="images/dr-nandan.jpg" alt="Raghu Nandan, MD, FACS" ... />
    ```

---

## File formats

- **Photos:** JPG or WebP (smaller file size). Use JPG for widest compatibility.
- **Graphics / logo:** SVG when possible (stays sharp on all screens).
- **Badges:** PNG or SVG from the review platform.

---

## Folder structure (after you add images)

```
images/
  logo.svg              (keep — your logo)
  hero-practice.jpg      (your home hero)
  page-hero-fallback.svg (fallback for inner pages; optional page-hero.jpg)
  section-ambient.jpg   (Our Approach background)
  dr-nandan.jpg         (optional — About section)
  card-empty.svg        (fallback for gallery slots until you add photos)
  gallery/              (optional folder for before/after)
    breast-lift-01.jpg
    breast-lift-02.jpg
    breast-reduction-01.jpg
    ...
  badge-google.svg       (or .png from Google)
  badge-yelp.svg
  badge-realself.svg
  badge-doximity.svg
```

Once your files are in place, the site is ready to upload to any host (e.g. upload the whole `cursor_docs` folder or sync to a web server). No placeholders are required if you provide the images above.

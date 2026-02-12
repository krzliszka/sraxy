
You are an expert UI/UX Designer and Frontend Developer specialized in creating elegant, responsive wedding websites. Create a beautiful **single-page wedding landing page** using **React + Vite + Tailwind CSS**, deployed to **GitHub Pages**. The site should feel premium, romantic, and refined — like a digital invitation.

---

## Tech Stack

- **React 18** with Vite 6
- **Tailwind CSS 3** with custom theme
- **react-router-dom 6** (HashRouter) — only for one standalone page
- **Lucide React** for icons
- **Google Fonts**: Great Vibes (handwriting/display), Cormorant Garamond (serif body)
- **GitHub Pages** deployment via GitHub Actions

---

## Architecture: Single-Page Landing + One Standalone Route

This is critical to get right from the start:

### Main landing page (`/`)
Everything lives on **one scrollable page**. Navigation scrolls to sections using `document.getElementById().scrollIntoView({ behavior: 'smooth' })`. There are NO separate routes for sections.

Sections (in order):
1. **Hero** — Full-screen with names, date, location, two CTA buttons
2. **Countdown** — Live countdown timer to the wedding day
3. **Our Story** — About the couple + relationship timeline
4. **Details** — Ceremony & reception info, day schedule, transport notes, Google Maps links
5. **RSVP** — Full form with Google Sheets integration
6. **Gifts** — Gift preferences
7. **Gallery** — Photo grid with lightbox

### Standalone page (`/zaproszenie`)
A separate formal invitation page, rendered **without** the main Navigation/Footer. Has its own close button (X) in the top-right corner that navigates back to the main page.

### Routing setup (HashRouter)
```jsx
<HashRouter>
  <Routes>
    <Route path="/zaproszenie" element={<InvitationPage />} />
    <Route path="/" element={<Layout><HomePage /></Layout>} />
  </Routes>
</HashRouter>
```

> **IMPORTANT**: Use `HashRouter`, not `BrowserRouter`. GitHub Pages doesn't support client-side routing with regular paths — it will return 404 on refresh. HashRouter uses `/#/path` format which always loads index.html.

---

## Color Palette & Typography

```js
// tailwind.config.js
colors: {
  'cranberry': '#9D2B35',  // Primary accent — headings, buttons, hearts
  'chocolate': '#7C4C3E',  // Secondary warm tone — borders, subtle text
  'sage':      '#9CB58C',  // Soft green — backgrounds, success states
  'cream':     '#F4F4F0',  // Main background
  'graphite':  '#332E2C',  // Body text
},
fontFamily: {
  'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
  'handwriting': ['Great Vibes', 'cursive'],
},
```

Use Tailwind opacity modifiers extensively: `text-graphite/70`, `bg-sage/20`, `border-chocolate/30`, etc.

---

## Navigation Component

Fixed top navigation bar with:
- Logo on the left (heart icon + couple initials in handwriting font)
- Scroll links for all sections: Start, Our Story, Details, RSVP, Gifts, Gallery
- One route link for the Invitation page
- **Active section tracking** via scroll position (useEffect with scroll listener)
- Mobile hamburger menu
- Backdrop blur: `bg-cream/95 backdrop-blur-sm`

### ⚠️ CRITICAL: All section navigation must use smooth scroll, NOT routing

```jsx
// CORRECT — scroll to section
const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

// WRONG — never use <Link to="/rsvp"> for sections on the same page
```

Every CTA button anywhere on the page that points to a section must use `scrollIntoView`. This includes:
- Hero CTA buttons ("RSVP" and "See Details")
- Navigation links
- Footer links
- Any other internal references

Use `<button onClick={...}>` or `<a href="#section" onClick={scrollToSection}>` — **never** `<Link to="/section">`.

The only `<Link>` on the entire main page should be the one to `/zaproszenie`.

### Active section tracking

```jsx
useEffect(() => {
  const handleScroll = () => {
    const sections = ['home', 'historia', 'szczegoly', 'rsvp', 'prezenty', 'galeria'];
    const scrollPosition = window.scrollY + 100;
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## Section Details

### Hero Section
- Full viewport height (`min-h-screen`)
- Decorative corner borders (top-left, top-right, bottom-left, bottom-right)
- Subtle diagonal stripe background pattern (CSS)
- "We're getting married" tagline with sparkle icons
- Couple names in large handwriting font (text-6xl to text-9xl responsive)
- Animated pulsing heart divider
- Wedding date with calendar icon
- Location with map pin icon
- Two CTA buttons (both using `scrollIntoView`!):
  - Primary: "Confirm attendance" → scrolls to RSVP
  - Secondary: "See details" → scrolls to Details
- Bouncing scroll indicator at bottom

### Countdown Section
- Three boxes: days, hours, minutes
- Updates every 60 seconds via `setInterval`
- Sage green background

### Our Story Section
- Section header with sparkle decoration pattern (reused across all sections)
- Two-column "About us" with circular avatar placeholders
- Vertical timeline with heart markers and alternating left/right cards
- Inspirational quote with large decorative quotation mark SVG

### Details Section
- Two cards: Ceremony + Reception
  - Each has: icon, time, venue name, address, "Open map" link to Google Maps
- Day schedule as a vertical timeline with times on the left
- Transport info card

### RSVP Section (with Google Sheets Integration)
- Form fields: Name*, Email, Phone, Attending* (yes/no radio), Guest count, Dietary needs, Transport, Comments
- Conditional fields: guest count, diet, transport only show when attending = "yes"
- Custom styled radio buttons (not native browser radios)
- Loading spinner on submit
- Success state with checkmark animation
- Error state with alert
- Phone contact alternative below the form

#### ⚠️ Google Sheets Integration — Critical Details

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',  // Required for Google Apps Script
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
    });
    setStatus('success');  // With no-cors, we can't read response — assume success
  } catch (error) {
    setStatus('error');
  }
};
```

**The Google Apps Script code** (user deploys this in Google Sheets → Extensions → Apps Script):

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.guests || '',
      data.attending || '',
      data.diet || '',
      data.transport || '',
      data.comments || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

> **IMPORTANT**: When deploying the Apps Script, set "Who has access" to **Anyone**. Deploy as **Web App**, execute as **Me**. The URL must be placed in the React code as a constant.

> **IMPORTANT**: Use `mode: 'no-cors'` in fetch. Google Apps Script redirects POST requests, and CORS headers aren't set. With `no-cors` you can't read the response body, but the data IS sent and saved. The UI should assume success if no error is thrown.

### Gifts Section
- Heartfelt intro text ("Your presence is the greatest gift")
- Three suggestion cards: Wine bottle, Handmade gift, Contribution to future
- Each card has icon, title, description

### Gallery Section
- 2×3 responsive grid (2 cols mobile, 3 cols desktop)
- Photo placeholders with camera icon
- Click to open lightbox overlay
- Lightbox: dark overlay, close button, left/right navigation arrows
- Photo upload CTA section below

---

## Invitation Page (`/zaproszenie`)

Standalone formal invitation — NO shared Navigation or Footer.

- Close button (X) in top-right corner, fixed position, circular cranberry button
- Full-screen hero with decorative elements, names, date
- Ceremony section with church info + map link
- Reception section with venue info + map link
- RSVP reminder with phone numbers
- "Return to main page" button in footer

### ⚠️ Navigation back to main page

Since this is a HashRouter app, navigating back requires:
```jsx
const handleClose = () => {
  window.location.href = '/your-repo-name/#/';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

Do NOT use `<Link to="/">` — it doesn't scroll to top reliably. Use `window.location.href` with the full base path.

---

## Footer Component

- Decorative birds + heart
- Couple names in handwriting font
- Date
- Matching scroll links (same as Navigation — all using `scrollToSection`)
- One `<Link>` to Invitation page
- Decorative SVG wave
- Copyright

---

## GitHub Pages Deployment

### Vite config
```js
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/',  // Must match your GitHub repo name!
})
```

### GitHub Actions workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm install
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

### ⚠️ CRITICAL: Do NOT add a Jekyll workflow

GitHub Pages may auto-create a Jekyll workflow (`jekyll-gh-pages.yml`). If both exist, Jekyll will overwrite your Vite build with raw source files, causing a blank page. **Delete any Jekyll workflow immediately.** Only the Vite deployment workflow above should exist.

### ⚠️ CRITICAL: Keep `index.html` in the repository root

Vite needs `index.html` at the project root. If it's missing, the build will fail silently or produce an empty dist folder.

---

## CSS Details

Add to your `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

/* Diagonal stripe pattern for hero sections */
.stripe-pattern {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 35px,
    rgba(156, 181, 140, 0.08) 35px,
    rgba(156, 181, 140, 0.08) 70px
  );
}

/* Section dividers */
.section-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(124, 76, 62, 0.3), transparent);
}

/* Section scroll offset for fixed navigation */
section[id] {
  scroll-margin-top: 5rem;
}
```

> Add `scroll-mt-20` (or `scroll-mt-16`) to each section with an `id` so the fixed nav doesn't overlap content when scrolling to it.

---

## Design Patterns to Reuse

### Section header pattern
Every section starts with this decorative header:
```jsx
<div className="text-center mb-12">
  <div className="flex items-center justify-center gap-2 mb-6">
    <Sparkles className="w-4 h-4 text-chocolate/50" />
    <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">Section Label</span>
    <Sparkles className="w-4 h-4 text-chocolate/50" />
  </div>
  <h2 className="font-handwriting text-5xl sm:text-6xl text-cranberry mb-6">Section Title</h2>
</div>
```

### Card pattern
```jsx
<div className="bg-cream rounded-3xl p-8 shadow-sm border border-chocolate/10">
  {/* content */}
</div>
```

### Button patterns
- Primary: `bg-cranberry text-cream font-serif rounded-full hover:bg-cranberry/90 shadow-lg`
- Secondary: `bg-cream border-2 border-chocolate/30 text-chocolate font-serif rounded-full hover:bg-chocolate/10`
- Map link: `bg-sage/30 rounded-full text-chocolate hover:bg-sage/50`

---

## Common Pitfalls to Avoid

1. **Don't use `<Link>` for same-page sections** — use scroll handlers with `scrollIntoView`
2. **Don't use `BrowserRouter`** — GitHub Pages requires `HashRouter`
3. **Don't forget `base` in vite.config.js** — must match repo name for correct asset paths
4. **Don't have multiple GitHub Actions workflows** — Jekyll will overwrite Vite builds
5. **Don't use `mode: 'cors'` for Google Apps Script** — it will fail; use `mode: 'no-cors'`
6. **Don't forget `scroll-mt-*` on sections** — fixed nav overlaps scroll targets without it
7. **Don't forget to set Google Apps Script access to "Anyone"** — otherwise submissions fail silently
8. **Don't put placeholder URLs for Google Script** — test with `curl` that the endpoint actually works before deploying
9. **Don't navigate between HashRouter routes with `<Link>` from standalone pages** — use `window.location.href` with full base path for reliable navigation
10. **Keep `index.html` in repo root** — Vite build fails without it

---

## File Structure

```
src/
├── App.jsx                    # HashRouter with 2 routes
├── main.jsx                   # Entry point
├── index.css                  # Tailwind imports + custom CSS
├── components/
│   ├── Layout.jsx             # Navigation + main + Footer wrapper
│   ├── Navigation.jsx         # Fixed top nav with scroll tracking
│   └── Footer.jsx             # Footer with matching scroll links
├── pages/
│   ├── HomePage.jsx           # Single page with ALL sections as components
│   └── InvitationPage.jsx     # Standalone invitation (no Nav/Footer)
index.html                     # Vite entry HTML
vite.config.js                 # base: '/repo-name/'
tailwind.config.js             # Custom colors + fonts
.github/workflows/deploy.yml   # ONLY workflow — Vite build + GH Pages deploy
```

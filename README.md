# ZyntricAI — AI SaaS Platform Website

A modern, multi-page marketing website for **ZyntricAI**, a fictional premium AI SaaS platform. Built with vanilla HTML, CSS, and JavaScript, the site features a clean light/dark theme, smooth animations, and a fully responsive layout.

---

## Project Structure

```
├── index.html          # Homepage
├── explore.html        # Features & tools showcase
├── about.html          # Mission, vision, and core values
├── pricing.html        # Pricing plans with billing toggle
├── account.html        # Login / Sign up page
├── script.js           # Shared JavaScript (theme, nav, animations)
└── css/
    ├── common.css      # Global variables, resets, shared components
    ├── home.css        # Homepage-specific styles
    ├── explore.css     # Explore page styles
    ├── about.css       # About page styles
    ├── pricing.css     # Pricing page styles
    └── account.css     # Account / auth page styles
```

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section with animated dashboard card, feature grid, stats, and CTA |
| Explore | `explore.html` | Tool categories with chip filters, feature cards, and a live progress dashboard |
| About | `about.html` | Mission, vision, core values, and a join CTA |
| Pricing | `pricing.html` | Three-tier pricing (Starter / Pro / Enterprise) with monthly/annual billing toggle |
| Account | `account.html` | Split-layout login and sign-up forms with tab switching |

---

## Tech Stack

- **HTML5** — Semantic markup across all pages
- **CSS3** — Custom properties (CSS variables), Grid, Flexbox, animations, dark mode via `[data-theme="dark"]`
- **Vanilla JavaScript** — Theme toggle, mobile nav, scroll-reveal animations, pricing toggle, auth tab switching
- **Google Fonts** — `Cabinet Grotesk` (primary) and `Instrument Serif` (italic accents)

---

## Features

- **Light / Dark Mode** — Toggle persists via `localStorage`; smooth transitions across all components
- **Scroll Reveal Animations** — `.reveal` elements animate in using `IntersectionObserver`
- **Responsive Design** — Mobile-first breakpoints at `768px` and `1024px`; hamburger nav on mobile
- **Pricing Toggle** — Switches between monthly and annual pricing with a 20% annual discount
- **Auth Tab Switching** — Login and Sign Up forms toggle within the same card
- **Animated Dashboard Card** — Decorative hero visual with floating animation and a fake chart
- **CSS Custom Properties** — Full design token system in `common.css` for consistent theming

---

## Design System (CSS Variables)

Defined in `css/common.css` under `:root`:

| Variable | Light Value | Purpose |
|----------|-------------|---------|
| `--bg` | `#F2F4F7` | Page background |
| `--text` | `#0A1929` | Primary text |
| `--primary` | `#0077B6` | Brand blue |
| `--secondary` | `#00ABE4` | Accent cyan |
| `--gradient` | `135deg, #0077B6 → #00ABE4` | Brand gradient |
| `--panel` | `rgba(0,171,228,0.06)` | Card backgrounds |
| `--border` | `rgba(0,171,228,0.2)` | Card borders |
| `--muted` | `#4A7B9D` | Secondary text |
| `--radius` | `20px` | Default border radius |

Dark mode overrides are applied via `[data-theme="dark"]` on the `<html>` element.

---

## Getting Started

No build tools or dependencies required — open directly in a browser.

```bash
# Clone or download the project, then open the homepage
open index.html
```

Or serve locally with any static file server:

```bash
# Python
python -m http.server 3000

# Node (npx)
npx serve .
```

Then visit `http://localhost:3000`.

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Requires ES6+ support for JavaScript features.

---

## License

This project is for demonstration and portfolio purposes only. All brand names and content are fictional.
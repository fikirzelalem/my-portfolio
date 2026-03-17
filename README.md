# Fikir Demeke, Personal Portfolio

A fully custom personal portfolio website built from scratch using only vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies.

**Live site:** [fikirzelalem.github.io/my-portfolio](https://fikirzelalem.github.io/my-portfolio)

---

## Tech Stack

- **HTML5** - semantic structure
- **CSS3** - custom properties, animations, flexbox/grid
- **Vanilla JavaScript** - all interactivity
- **Font Awesome** (CDN) - icons
- **Google Fonts** (CDN) - Inter + Dancing Script typefaces
- **Formspree** - contact form backend
- **Git & GitHub** - version control

---

## Features

- Scroll-driven hero: cursive name intro fades out, content fades in on scroll
- Typewriter effect cycling through roles
- Glassmorphism card design with `backdrop-filter`
- Animated gradient background with floating orbs
- Section fade-in animations using `IntersectionObserver`
- Mouse parallax effect on hero avatar and orbs
- Scroll progress indicator bar
- Animated stat counters that trigger on scroll
- Skill progress bars that animate into view
- Project filter tabs (All / Mobile / Full Stack / Data / Backend)
- Individual project detail pages with descriptions, features, and previews
- Lightbox image viewer on project pages
- Custom cursor with magenta/amber particle trail
- Certificate cards with View Certificate buttons linking to PDFs
- Resume download button
- Working contact form via Formspree
- Fixed header with scroll-based glass effect
- Dark / light theme toggle with `localStorage` persistence
- Fully responsive mobile layout with hamburger menu

---

## Project Pages

Each project has a dedicated detail page under `projects/`:

| Project | File |
|---|---|
| Soul Fragments | `projects/soul-fragments.html` |
| GreenRoute | `projects/greenroute.html` |
| HBCUhire | `projects/hbcuhire.html` |
| Personal Finance Tracker | `projects/finance-tracker.html` |
| Real Estate Property Tool | `projects/real-estate-tool.html` |

---

## Structure

```
my-portfolio/
├── index.html
├── css/
│   ├── variables.css    # Design tokens (colors, spacing, etc.)
│   ├── base.css         # Reset, body, orbs, typography
│   ├── components.css   # Buttons, cards, glass styles
│   ├── sections.css     # All section-specific styles
│   └── project-page.css # Project detail page layout + lightbox
├── js/
│   ├── main.js        # Nav, hamburger, theme toggle, counters, skill bars
│   ├── typewriter.js  # Typewriter role cycling
│   ├── hero-scroll.js # Scroll-driven hero + section fade-in
│   ├── extras.js      # Scroll progress bar, mouse parallax
│   ├── theme.js       # Theme toggle logic
│   └── cursor.js      # Custom cursor with particle trail
├── projects/
│   ├── soul-fragments.html
│   ├── greenroute.html
│   ├── hbcuhire.html
│   ├── finance-tracker.html
│   └── real-estate-tool.html
└── assets/
    ├── pfp2.jpg
    ├── resume.pdf
    ├── financeTrackerapp/
    │   └── pft1-6.png
    └── certificates/
        ├── cloudthumb.png
        ├── codethumb.png
        ├── aws-cloud-practitioner.pdf
        ├── codepath-webdev.pdf
        └── codepath-cybersecurity.pdf
```

---

## Running Locally

No install or build step needed. Open with Live Server in VSCode, or run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

# Personal Portfolio Website

A fully custom personal portfolio website built from scratch using only vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, animations, flexbox/grid
- **Vanilla JavaScript** — all interactivity
- **Font Awesome** (CDN) — icons
- **Google Fonts** (CDN) — Inter typeface
- **Git & GitHub** — version control

## Features

- Animated gradient background with floating orbs using CSS keyframe animations
- Typewriter effect cycling through job titles
- Glassmorphism card design with `backdrop-filter`
- 3D perspective tilt on project cards using mouse tracking
- Scroll reveal animations using `IntersectionObserver`
- Animated stat counters that trigger on scroll
- Skill progress bars that animate into view
- Project filter tabs (All / Full Stack / Frontend)
- Fixed header with scroll-based glass effect
- Responsive mobile layout with hamburger menu
- Scroll progress indicator

## Structure

```
my-portfolio/
├── index.html
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   └── sections.css
└── js/
    ├── typewriter.js
    ├── tilt.js
    ├── animations.js
    └── main.js
```

## Running Locally

No install or build step needed. Just serve the files with any static server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

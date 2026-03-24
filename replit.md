# Habib Saine & Sumika Thapa — Personal Landing Page

A minimal, elegant personal landing page for Habib Saine and Sumika Thapa showcasing their Paycycle project and professional profiles.

## Architecture

- **Type**: Static HTML/CSS/JS site (no framework, no build step)
- **Entry point**: `index.html`
- **Server**: Python's built-in HTTP server (`python3 -m http.server 5000`)
- **Port**: 5000

## File Structure

```
/
├── index.html              # Main single-page site
├── PRD.md                  # Product requirements document
├── STANDARDS.md            # Technical & design standards
├── REPLIT_PROMPT.md        # Project brief
├── resume-habib.pdf        # Habib's resume (downloadable)
├── resume-sumika.txt       # Sumika's resume
├── images/
│   ├── habib-headshot.jpg
│   └── sumika-headshot.jpg
├── styles/
│   ├── reset.css           # CSS normalize
│   ├── variables.css       # Design tokens / CSS custom properties
│   ├── typography.css      # Font and text styles
│   ├── layout.css          # Grid and spacing
│   ├── components.css      # Reusable UI components
│   └── main.css            # Imports all above + section-specific styles
└── scripts/
    ├── smooth-scroll.js    # Anchor scroll behavior
    ├── animations.js       # IntersectionObserver fade-in
    └── main.js             # Entry point (nav, imports)
```

## Sections

1. **Hero** — Both names, headshots, tagline, CTA buttons
2. **About** — Individual person cards with bios and stats
3. **Skills** — Shared skills + individual focus areas
4. **Paycycle** — Full project showcase (dark section)
5. **Contact** — Links for both team members + resume download

## Design System

- Colors: `#1a1a1a` (primary), `#0066cc` (accent), `#fafafa` (background)
- Typography: System font stack (Inter / SF Pro / Segoe UI)
- Layout: 1200px max-width, 12-col responsive grid, BEM naming
- Animations: IntersectionObserver fade-in on scroll, no JS frameworks

## Running

The "Start application" workflow serves the static files on port 5000 using Python's HTTP server.

## Deployment

Configured as a static site. `publicDir: "."`.

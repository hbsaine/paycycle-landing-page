# STANDARDS.md
## Technical & Design Standards - Personal Landing Page

**Project:** Habib Saine Personal Landing Page  
**Version:** 1.0  
**Last Updated:** March 23, 2026

---

## Table of Contents
1. [Technology Stack](#technology-stack)
2. [Code Standards](#code-standards)
3. [Design System](#design-system)
4. [File Structure](#file-structure)
5. [Performance Standards](#performance-standards)
6. [Accessibility Standards](#accessibility-standards)
7. [Deployment & CI/CD](#deployment--cicd)

---

## Technology Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties (CSS variables)
- **Vanilla JavaScript** - No framework dependencies for MVP
- **Azure Static Web Apps** - Hosting platform
- **GitHub** - Version control and CI/CD

### Why Vanilla Over Framework?
- **Performance:** Zero bundle size, instant load times
- **Simplicity:** Single-page static site doesn't require React/Vue overhead
- **Maintainability:** No dependency management or version conflicts
- **Learning:** Demonstrates core web development skills to recruiters

### Optional Enhancements (Post-MVP)
- **Tailwind CSS** - If utility-first approach preferred
- **GSAP** - For advanced scroll animations
- **Vercel Analytics** or **Plausible** - Privacy-friendly analytics

---

## Code Standards

### HTML Standards

#### Semantic Structure
```html
<!-- Use semantic HTML5 elements -->
<header></header>
<nav></nav>
<main>
  <section id="hero"></section>
  <section id="about"></section>
  <section id="skills"></section>
  <section id="projects"></section>
  <section id="fire-series"></section>
</main>
<footer></footer>
```

#### Accessibility Requirements
- All images MUST have meaningful `alt` attributes
- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- ARIA labels for icon-only buttons
- Semantic links with descriptive text (avoid "click here")
- `lang` attribute on `<html>` tag

#### Meta Tags (Required)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Habib Saine - Business Analytics & Technology Risk Consultant building at the intersection of AI orchestration and compliance automation.">
<meta name="author" content="Habib Saine">
<meta property="og:title" content="Habib Saine - AI Orchestration & Technology Risk">
<meta property="og:description" content="Personal landing page showcasing technical projects, Fire Series content, and professional expertise.">
<meta property="og:image" content="[URL to social share image]">
<meta property="og:url" content="[Your custom domain]">
<meta name="twitter:card" content="summary_large_image">
```

### CSS Standards

#### File Organization
```
styles/
├── reset.css          # CSS reset/normalize
├── variables.css      # CSS custom properties
├── typography.css     # Font declarations and text styles
├── layout.css         # Grid system, section spacing
├── components.css     # Reusable component styles
└── main.css          # Imports all above + page-specific styles
```

#### CSS Variables (Design Tokens)
```css
:root {
  /* Colors */
  --color-primary: #1a1a1a;
  --color-accent: #0066cc;
  --color-background: #fafafa;
  --color-text: #2c2c2c;
  --color-text-muted: #6b6b6b;
  --color-border: #e0e0e0;
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
  --font-mono: 'SF Mono', 'Monaco', 'Courier New', monospace;
  
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.5rem;     /* 24px */
  --font-size-2xl: 2rem;      /* 32px */
  --font-size-3xl: 3rem;      /* 48px */
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  
  /* Spacing */
  --space-xs: 0.5rem;    /* 8px */
  --space-sm: 1rem;      /* 16px */
  --space-md: 1.5rem;    /* 24px */
  --space-lg: 2rem;      /* 32px */
  --space-xl: 3rem;      /* 48px */
  --space-2xl: 4rem;     /* 64px */
  --space-3xl: 6rem;     /* 96px */
  
  /* Layout */
  --max-width: 1200px;
  --section-padding: 7.5rem; /* 120px desktop */
  
  /* Borders */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
}

/* Mobile overrides */
@media (max-width: 768px) {
  :root {
    --section-padding: 5rem; /* 80px mobile */
    --font-size-3xl: 2rem;   /* Smaller hero text on mobile */
  }
}
```

#### Naming Convention: BEM (Block Element Modifier)
```css
/* Block */
.project-card { }

/* Element */
.project-card__title { }
.project-card__description { }
.project-card__tech-stack { }

/* Modifier */
.project-card--featured { }
.project-card__title--large { }
```

#### Responsive Design Breakpoints
```css
/* Mobile first approach */
/* Default styles: 320px - 767px */

@media (min-width: 768px) {
  /* Tablet: 768px - 1023px */
}

@media (min-width: 1024px) {
  /* Desktop: 1024px - 1439px */
}

@media (min-width: 1440px) {
  /* Large desktop: 1440px+ */
}
```

### JavaScript Standards

#### Code Style
- **ES6+ syntax** (const/let, arrow functions, template literals)
- **Strict mode:** `'use strict';` at top of files
- **No jQuery** - Use vanilla DOM methods
- **Modular functions** - Single responsibility principle

#### Smooth Scrolling Implementation
```javascript
// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
```

#### Intersection Observer for Scroll Animations
```javascript
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```

---

## Design System

### Typography Scale

#### Headings
```css
h1 { 
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2 { 
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: 1.2;
}

h3 { 
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  line-height: 1.3;
}
```

#### Body Text
```css
body {
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-text);
}

.text-large {
  font-size: var(--font-size-lg);
  line-height: 1.7;
}

.text-small {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}
```

### Color Usage Guidelines

| Color | Usage | Example |
|-------|-------|---------|
| `--color-primary` | Headings, primary text, dark backgrounds | Section titles, footer |
| `--color-accent` | Links, CTAs, interactive elements | Buttons, hover states |
| `--color-background` | Page background | Body background |
| `--color-text` | Body text | Paragraphs, descriptions |
| `--color-text-muted` | Secondary text, captions | Tech stack tags, dates |
| `--color-border` | Dividers, card borders | Section separators |

### Spacing System

**Consistent vertical rhythm:**
- Section padding: `var(--section-padding)`
- Between sections: `var(--space-3xl)`
- Between subsections: `var(--space-2xl)`
- Between paragraphs: `var(--space-md)`
- Between list items: `var(--space-sm)`

### Component Specifications

#### Button Styles
```css
.btn {
  display: inline-block;
  padding: var(--space-sm) var(--space-lg);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn-primary {
  background: var(--color-accent);
  color: white;
  border: 2px solid var(--color-accent);
}

.btn-primary:hover {
  background: transparent;
  color: var(--color-accent);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: white;
}
```

#### Project Card Component
```css
.project-card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  padding: var(--space-xl);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.project-card__title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-sm);
}

.project-card__tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-md);
}

.tech-tag {
  font-size: var(--font-size-xs);
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-background);
  border-radius: var(--border-radius-sm);
  color: var(--color-text-muted);
}
```

#### Skill Pills
```css
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.skill-pill {
  padding: var(--space-sm) var(--space-md);
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 999px; /* Full rounded */
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-fast);
}

.skill-pill:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

---

## File Structure

```
/
├── index.html
├── README.md
├── PRD.md
├── STANDARDS.md
├── WORKING_NOTES.md
├── resume.pdf
├── images/
│   ├── headshot.webp (or .jpg with WebP fallback)
│   ├── headshot-fallback.jpg
│   ├── paycycle-mockup.png
│   ├── v3-diagram.png
│   ├── fire-series-thumbnail.jpg
│   └── favicon.ico
├── styles/
│   ├── reset.css
│   ├── variables.css
│   ├── typography.css
│   ├── layout.css
│   ├── components.css
│   └── main.css
└── scripts/
    ├── smooth-scroll.js
    ├── animations.js
    └── main.js
```

### Image Optimization Standards

| Image Type | Format | Max Dimensions | Max File Size |
|------------|--------|----------------|---------------|
| Headshot | WebP + JPG fallback | 800x800px | 200KB |
| Project screenshots | WebP + PNG fallback | 1200x800px | 300KB |
| Fire Series thumbnail | WebP + JPG fallback | 1200x675px | 250KB |
| Favicon | ICO + PNG | 32x32px, 192x192px | 20KB |

**WebP Implementation Example:**
```html
<picture>
  <source srcset="images/headshot.webp" type="image/webp">
  <img src="images/headshot.jpg" alt="Habib Saine headshot" loading="lazy">
</picture>
```

---

## Performance Standards

### Target Metrics (Lighthouse)
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Performance Checklist
- [ ] All images optimized and lazy-loaded
- [ ] CSS minified for production
- [ ] JavaScript minified and deferred
- [ ] No render-blocking resources
- [ ] Fonts preloaded: `<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>`
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1

### Critical CSS Inlining
For above-the-fold content, inline critical CSS in `<head>` to eliminate render-blocking:
```html
<style>
  /* Critical CSS for hero section only */
  body { margin: 0; font-family: -apple-system, sans-serif; }
  #hero { min-height: 100vh; display: flex; align-items: center; }
</style>
```

---

## Accessibility Standards

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal text:** Minimum 4.5:1 contrast ratio
- **Large text (18pt+):** Minimum 3:1 contrast ratio
- **Interactive elements:** 3:1 against background

Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

#### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators required: `:focus { outline: 2px solid var(--color-accent); }`
- Logical tab order (no `tabindex` > 0)

#### Screen Reader Support
```html
<!-- Skip to main content link -->
<a href="#main" class="skip-link">Skip to main content</a>

<!-- ARIA landmarks -->
<nav aria-label="Main navigation"></nav>
<main id="main"></main>

<!-- Icon-only buttons -->
<a href="https://github.com/habibsaine" aria-label="Visit Habib's GitHub profile">
  <svg aria-hidden="true"><!-- GitHub icon --></svg>
</a>
```

#### Form Accessibility (if contact form added)
```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required aria-required="true">
```

---

## Deployment & CI/CD

### GitHub Actions Workflow

**File:** `.github/workflows/azure-static-web-apps.yml`

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: ""
```

### Environment Variables
Store in GitHub Secrets:
- `AZURE_STATIC_WEB_APPS_API_TOKEN` - Deployment token from Azure

### Pre-deployment Checklist
Before pushing to main:
- [ ] All links tested locally
- [ ] Resume PDF is latest version
- [ ] Images optimized and alt text added
- [ ] No console errors in browser DevTools
- [ ] Mobile responsiveness verified (DevTools device emulation)
- [ ] HTML validated: [W3C Validator](https://validator.w3.org/)
- [ ] CSS validated: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

### Custom Domain Configuration

**Azure Static Web Apps:**
1. Navigate to Azure Portal → Static Web App
2. Custom domains → Add custom domain
3. Enter domain name (e.g., `habibsaine.com`)
4. Copy CNAME or TXT record values
5. Add DNS records at domain registrar
6. Validate and enable HTTPS (automatic via Azure)

**DNS Records Example:**
```
Type: CNAME
Name: www
Value: [your-static-web-app].azurestaticapps.net

Type: CNAME (or ALIAS for apex domain)
Name: @
Value: [your-static-web-app].azurestaticapps.net
```

---

## Version Control Standards

### Git Commit Message Convention
```
feat: Add Fire Series section to landing page
fix: Correct mobile navigation menu overflow
style: Improve project card hover animation
docs: Update README with deployment instructions
refactor: Simplify smooth scroll implementation
```

### Branch Strategy
- **main** - Production branch (deploys to Azure)
- **dev** - Development branch for testing
- Feature branches: `feature/fire-series-section`, `fix/mobile-nav`

### .gitignore
```
# OS
.DS_Store
Thumbs.db

# Editors
.vscode/
.idea/

# Build artifacts
*.log
node_modules/

# Temporary files
*.tmp
*.bak
```

---

## Testing Checklist

### Browser Testing
Test on:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Device Testing
- [ ] Desktop (1920x1080, 1440x900)
- [ ] Tablet (768x1024, 1024x768)
- [ ] Mobile (375x667, 390x844, 414x896)

### Functional Testing
- [ ] All navigation links work
- [ ] Smooth scroll to sections functions
- [ ] Resume downloads correctly
- [ ] External links open in new tabs (`target="_blank" rel="noopener noreferrer"`)
- [ ] All images load with proper alt text
- [ ] Hover states work on interactive elements
- [ ] Page is fully responsive at all breakpoints

### Performance Testing
- [ ] Run Lighthouse audit (Desktop + Mobile)
- [ ] Test page load on slow 3G connection
- [ ] Verify no console errors or warnings
- [ ] Check network waterfall in DevTools

---

## Documentation Requirements

### README.md Must Include:
1. Project title and description
2. Live site URL
3. Technologies used
4. Local development setup instructions
5. Deployment process
6. Contact information
7. License (if applicable)

### WORKING_NOTES.md Format:
```markdown
# Working Notes

## [Date] - Session N

### Objectives
- Implement hero section
- Add project cards
- Configure Azure deployment

### Work Completed
- ✅ Created semantic HTML structure
- ✅ Implemented CSS variable system
- ✅ Added smooth scroll navigation
- ⏳ Still working on project card animations

### Challenges & Solutions
- **Challenge:** WebP images not displaying in Safari
- **Solution:** Added picture element with JPG fallback

### Next Session
- [ ] Finalize Fire Series section
- [ ] Add mobile navigation menu
- [ ] Optimize images for production
```

---

## Maintenance & Updates

### Content Update Frequency
- **Resume:** Review monthly, update as needed
- **Projects:** Add new projects immediately upon completion
- **Fire Series:** Update with new episodes upon release
- **Skills:** Review quarterly, add new technologies learned

### Monitoring
- **Analytics:** Check monthly for traffic patterns
- **Uptime:** Azure handles this, but monitor via StatusCake or similar if critical
- **Domain renewal:** Set calendar reminder 60 days before expiration
- **SSL certificate:** Auto-renewed by Azure, verify annually

---

## Security Best Practices

### General Guidelines
- No hardcoded sensitive information in code
- No API keys or tokens committed to GitHub
- No email addresses in HTML (use contact form or mailto with obfuscation)
- No personal phone numbers visible
- Keep dependencies updated (if using npm in future)

### Content Security Policy (CSP)
Add to `index.html` `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

---

## Quality Assurance Checklist

Before final deployment:
- [ ] All text proofread (no typos or grammatical errors)
- [ ] All links verified (no 404s)
- [ ] All images have descriptive alt text
- [ ] Site works without JavaScript (progressive enhancement)
- [ ] Print styles tested (Resume section prints cleanly)
- [ ] Social share preview tested (LinkedIn/Twitter cards)
- [ ] Google Search Console configured
- [ ] Sitemap.xml added (if multi-page in future)
- [ ] Robots.txt configured appropriately
- [ ] Favicon displays in all browsers
- [ ] Page title is SEO-optimized
- [ ] Meta description is compelling and accurate

---

## Contact & Support

For questions about these standards:
- **Project Owner:** Habib Saine
- **Documentation Maintained By:** Habib Saine + AI assistants (Claude, Replit)
- **Last Review Date:** March 23, 2026

---

*These standards are living documents. Update as the project evolves and new best practices emerge.*

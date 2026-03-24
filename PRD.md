# Product Requirements Document (PRD)
## Personal Landing Page - Habib Saine

**Version:** 1.0  
**Date:** March 23, 2026  
**Owner:** Habib Saine  
**Status:** Planning

---

## Executive Summary

A minimal, elegant personal landing page that serves as Habib Saine's digital home on the web. The site establishes a multi-purpose professional presence combining three core objectives: recruiting pipeline for full-time roles post-graduation, technical credibility through project showcases, and thought leadership via The Fire Series content platform.

---

## Product Vision

**Vision Statement:**  
Create a digital presence that positions Habib as a bridge builder between business strategy and technical execution—showcasing AI orchestration capabilities, technology risk consulting expertise, and emerging thought leadership in geopolitics and AI.

**Target Audience:**
- **Primary:** Tech recruiters and hiring managers (Big 4, consulting firms, fintech companies)
- **Secondary:** Professional network connections, potential collaborators, Fire Series audience
- **Tertiary:** University peers and faculty

**Success Metrics:**
- 3+ recruiter contacts per month via landing page
- 50+ unique visitors in first month post-launch
- Average session duration > 2 minutes
- Professional brand consistency across LinkedIn, GitHub, and personal site

---

## User Stories

### Recruiter Persona
> "As a tech recruiter, I want to quickly assess Habib's technical capabilities and cultural fit so that I can determine if he's a strong candidate for our technology risk consulting roles."

**Acceptance Criteria:**
- Skills and expertise visible within 3 seconds of landing
- Clear education and work experience timeline
- Technical projects with GitHub links
- Resume download accessible within one click
- Professional contact methods (LinkedIn, email)

### Technical Peer Persona
> "As a fellow developer or student, I want to understand Habib's technical projects and development approach so I can assess potential collaboration opportunities."

**Acceptance Criteria:**
- Detailed project descriptions with tech stack
- GitHub repository links for key projects
- Clear explanation of technical problem-solving approach
- Evidence of real-world application (Paycycle, V3)

### Content Audience Persona
> "As someone interested in geopolitics and AI, I want to discover Habib's Fire Series content so I can follow his thought leadership."

**Acceptance Criteria:**
- Fire Series prominently featured with visual branding
- Episode descriptions and themes clearly stated
- YouTube channel link accessible
- Clear value proposition for the series

---

## Features & Requirements

### Must-Have (MVP)

#### 1. Hero Section
- **Full-viewport hero** with name, tagline, and professional photo
- **Tagline:** "Building at the intersection of business analytics, technology risk, and AI orchestration"
- **CTA buttons:** "View Projects" and "Download Resume"
- **Smooth scroll** to anchor sections

#### 2. About Me Section
- **Personal narrative** (150-200 words)
  - Origin story (Gambia → Iowa)
  - Academic journey (UI Tippie, Business Analytics)
  - Professional trajectory (Shelter House → RSM internship)
  - Career aspirations (debt-free by 25, AI orchestration differentiator)
- **Professional headshot**
- **Key stats** in visual format:
  - Graduation: December 2026
  - Major: Business Analytics & Information Systems
  - Location: Iowa City → Minneapolis (June 2026)

#### 3. Skills & Expertise
- **Three core competency areas:**
  1. **Technology Risk & Compliance:** ITGC, SOX, SOC2
  2. **AI Orchestration:** Multi-agent systems (Claude, Gemini, Cursor, Perplexity)
  3. **Business Analytics:** Data wrangling, data mining, product management
- **Visual skill display** (minimal design, no progress bars)
- **Tool proficiency:** Python, SQL, Obsidian (PARA), DaVinci Resolve

#### 4. Technical Projects Showcase
Each project card includes:
- Project name and one-line description
- Tech stack tags
- Problem statement (2-3 sentences)
- Solution approach (2-3 sentences)
- GitHub link (if public) or "Private B2B Project" label
- Visual mockup or screenshot

**Featured Projects:**
1. **Paycycle** - Consumer fintech for students
   - Plaid integration, budget protection, contextual insights
   - Tech: Python, Flask, Plaid API
   - Collaboration with Sumika Thapa
   
2. **V3** - Immutable compliance ledger
   - Event sourcing architecture for mid-market audit automation
   - Tech: Python, cryptographic hashing, event-driven design
   - Private B2B product
   
3. **The Fire Series** - YouTube essay film series
   - Geopolitics, AI, history content (Johnny Harris style)
   - Episode 1: "Fire and Silicon"
   - Production: DaVinci Resolve, Obsidian scripting

#### 5. Fire Series Section
- **Section header:** "The Fire Series"
- **Tagline:** "Essay films exploring geopolitics, AI, and the forces shaping our world"
- **Episode 1 spotlight:**
  - Title: "Fire and Silicon"
  - Thumbnail or teaser visual
  - Theme description (50 words)
  - YouTube channel link
- **Call to action:** "Subscribe on YouTube"

#### 6. Contact & Social Links
- **LinkedIn** (primary professional contact)
- **GitHub** (code portfolio)
- **Email** (professional address)
- **YouTube** (Fire Series channel)
- **Resume download** (PDF)

### Nice-to-Have (Post-MVP)

- **Smooth scroll animations** (fade-in on scroll)
- **Dark mode toggle**
- **Blog/writing section** for long-form content
- **Analytics integration** (Google Analytics or Plausible)
- **Work experience timeline** (Shelter House, RSM internship)
- **Testimonials or recommendations**

### Out of Scope

- E-commerce functionality
- User authentication/login
- Comment system or forum
- Backend database
- Content management system
- Multi-language support

---

## Technical Requirements

### Platform & Hosting
- **Static site** deployed on Azure Static Web Apps
- **Custom domain** configured and SSL-enabled
- **GitHub repository** as source of truth
- **CI/CD pipeline** via GitHub Actions

### Performance
- **Page load time:** < 2 seconds on 4G connection
- **Lighthouse score:** 90+ across all categories
- **Mobile-first responsive** design
- **Accessibility:** WCAG 2.1 AA compliance

### Browser Support
- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)

### Content Management
- **Resume PDF:** Easily updatable via file replacement
- **Project content:** Editable via markdown or HTML
- **Images:** Optimized WebP format with fallbacks

---

## Design Principles

### Aesthetic Direction: Minimal & Elegant
**Inspiration:** Apple product pages, Stripe marketing site, Linear app

**Core Principles:**
1. **Generous whitespace** - breathing room between sections
2. **Typography-first** - hierarchy through font weight and size
3. **Subtle interactions** - no flashy animations, smooth micro-interactions only
4. **Monochromatic with accent** - neutral grays + one brand color
5. **Content clarity** - every element serves a purpose

### Brand Color Palette
- **Primary:** Deep charcoal (#1a1a1a)
- **Accent:** Professional blue (#0066cc) or custom brand color
- **Background:** Off-white (#fafafa)
- **Text:** Charcoal gray (#2c2c2c)
- **Muted text:** Medium gray (#6b6b6b)

### Typography
- **Headings:** Inter, SF Pro, or similar geometric sans-serif
- **Body:** System font stack for performance
- **Font weights:** 400 (regular), 500 (medium), 600 (semibold)

### Layout
- **Max content width:** 1200px
- **Grid system:** 12-column responsive grid
- **Section spacing:** 120px vertical padding (desktop), 80px (mobile)
- **Single-page scroll** with smooth anchor navigation

---

## User Flow

1. **Landing** → Hero section (immediate value proposition)
2. **Scroll/Click** → About Me (personal connection)
3. **Scroll** → Skills & Expertise (professional capabilities)
4. **Scroll** → Technical Projects (proof of execution)
5. **Scroll** → Fire Series (thought leadership differentiation)
6. **Action** → Contact links or Resume download (conversion)

**Alternative flow:**  
Direct navigation via sticky header → jump to specific section

---

## Content Strategy

### Voice & Tone
- **Professional but human** - avoid corporate jargon
- **Confident without arrogance** - let work speak
- **Technically precise** - demonstrate domain knowledge
- **Concise** - respect visitor's time

### Key Messages
1. **Bridge builder:** "I connect business strategy with technical execution"
2. **AI orchestration:** "Multi-agent systems are my competitive advantage"
3. **Risk-aware builder:** "I design systems that pass audits from day one"
4. **Lifelong learner:** "From Gambia to Iowa to building products that matter"

---

## Launch Checklist

### Pre-Launch
- [ ] GitHub repository created and public
- [ ] Azure Static Web App configured
- [ ] Custom domain pointing to Azure
- [ ] Resume PDF finalized and uploaded
- [ ] Professional headshot optimized (WebP)
- [ ] Project screenshots/mockups prepared
- [ ] All content proofread
- [ ] LinkedIn and GitHub profile links verified
- [ ] Mobile responsiveness tested
- [ ] Cross-browser testing complete

### Launch
- [ ] Deploy to Azure via GitHub Actions
- [ ] Verify custom domain SSL
- [ ] Test all links and downloads
- [ ] Analytics configured (if applicable)

### Post-Launch
- [ ] Share on LinkedIn with launch post
- [ ] Add link to LinkedIn profile header
- [ ] Add link to GitHub profile README
- [ ] Monitor analytics for first week
- [ ] Gather feedback from 3-5 trusted peers
- [ ] Iterate based on feedback

---

## Open Questions & Decisions Needed

1. **Custom domain:** What domain name? (habibsaine.com, hsaine.com, other?)
2. **Fire Series branding:** Do we have a logo/visual identity for the series?
3. **Project visibility:** Is Paycycle code public or will it remain private?
4. **Resume:** Should there be multiple resume versions (technical vs. consulting)?
5. **Contact form:** Direct email links or embedded contact form?

---

## Appendix

### Related Links
- **LinkedIn:** [To be added]
- **GitHub:** [To be added]
- **YouTube (Fire Series):** [To be added]

### Revision History
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | March 23, 2026 | Claude + Habib | Initial PRD creation |

# Initial Replit Prompt - Personal Landing Page

You are helping me build my personal landing page. I've uploaded several files that define the project:

**Core Documentation:**
- `PRD.md` - Complete product requirements document
- `STANDARDS.md` - Technical and design standards
- `resume.pdf` - My current resume (for download feature)

**Project Context:**
I'm Habib Saine, a senior at the University of Iowa's Tippie College of Business, majoring in Business Analytics and Information Systems, graduating December 2026. I have a Technology Risk Consulting internship at RSM Minneapolis starting June 2026. I'm building a professional landing page with my teammate Sumika Thapa that showcases our collaboration on Paycycle, a student fintech application we're developing for our Digital Product Management course.

**Design Direction:**
Minimal and elegant aesthetic (Apple/Stripe style) - generous whitespace, typography-first, subtle interactions, monochromatic with accent color.

**Required Sections:**
1. Hero intro with names, tagline, and professional photos
2. About Us section (highlighting both team members)
3. Skills & Expertise (combined technical skills)
4. Paycycle Project Showcase
5. Contact & social links (both team members)

**External Links to Include:**

**Habib Saine:**
- **LinkedIn:** https://www.linkedin.com/in/habibsaine/
- **GitHub:** [YOUR_GITHUB_URL]
- **Email:** habsaine@uiowa.edu

**Sumika Thapa:**
- **LinkedIn:** https://www.linkedin.com/in/sumika-thapa-30a0562b5/
- **Email:** sumika-thapa@uiowa.edu

**Technical Requirements:**
- Single-page static site (HTML, CSS, vanilla JavaScript)
- Fully responsive (mobile-first)
- Smooth scroll navigation
- Lazy-loaded, optimized images (WebP with JPG fallback)
- WCAG 2.1 AA accessible
- Lighthouse score 90+ across all categories

**Image Assets:**
We've uploaded both our headshots to the `images/` folder. Please use them in the hero and about sections.
- `images/habib-headshot.jpg` (or .webp)
- `images/sumika-headshot.jpg` (or .webp)

**Please:**
1. Read the PRD.md and STANDARDS.md files carefully
2. Create a complete `index.html` page following the design system defined in STANDARDS.md
3. Implement all required CSS files (variables.css, components.css, etc.)
4. Add smooth scroll and subtle fade-in animations via vanilla JavaScript
5. Make the resume.pdf downloadable with a prominent button
6. Ensure all links open in new tabs with proper security attributes

**Content to Use:**

**Hero Tagline:** "Building Paycycle - Student fintech that makes budgeting automatic"

**Team Intro:**
We're Habib Saine and Sumika Thapa, seniors at the University of Iowa's Tippie College of Business majoring in Business Analytics and Information Systems. We're graduating in December 2026 and both joining RSM - Habib in Technology Risk Consulting (Minneapolis) and Sumika in Microsoft D365 Finance & Supply Chain Consulting (Chicago).

**About Paycycle (use this as the main content):**
Paycycle is our answer to a problem every college student faces: income is unpredictable, but expenses aren't. We built a financial app that detects income the moment it hits your account via Plaid integration, automatically protects your budget allocations (rent, groceries, savings), and surfaces contextually relevant financial insights when you need them most.

This isn't just a class project - it's a product we wish we'd had as freshmen. We're applying everything we've learned in Business Analytics, from data wrangling to user-centered design, to create something that actually solves a real problem for students like us.

**Combined Skills & Expertise:**

**Technical Skills:**
- Business Analytics: Python, SQL, Data Wrangling, Excel
- Product Development: User Research, Wireframing, Prototyping
- Financial Technology: Plaid API Integration, Budget Automation
- Project Management: Agile Methodologies, Sprint Planning

**Habib's Focus Areas:**
- Technology Risk & Compliance (ITGC, SOX, SOC2)
- Backend Development & System Architecture
- AI-Assisted Development Workflows

**Sumika's Focus Areas:**
- Microsoft D365 Finance & Supply Chain
- Data Analysis & Business Intelligence
- Marketing Strategy & Client Relations

**Paycycle - The Main Project:**

**Problem Statement:**
College students face a fundamental mismatch: income arrives unpredictably (work-study paychecks, side gigs, internship stipends), but fixed expenses like rent and meal plans don't wait. Traditional budgeting apps assume steady income, leaving students to manually track and protect money earmarked for bills. The result? Overspending in the days after payday, then scrambling when rent is due.

**Our Solution:**
Paycycle automatically detects when money hits your account, allocates it to your predefined budget categories (rent, groceries, savings), and locks those funds from your "available to spend" balance. It's not about tracking where your money went - it's about making sure it goes where it needs to, before you have a chance to spend it.

**Key Features:**
1. **Plaid Integration** - Instant income detection across bank accounts
2. **Automatic Budget Protection** - Funds allocated the moment they arrive
3. **Contextual Insights** - Smart notifications based on spending patterns
4. **Student-First Design** - Built for irregular income, not 9-to-5 paychecks

**Tech Stack:**
- Backend: Python, Flask
- API Integration: Plaid API for bank connectivity
- Architecture: Event Sourcing (balance is always a calculation, never stored)
- Design: Figma for wireframes and user flows

**Development Approach:**
We're building Paycycle for our Digital Product Management course (BAIS:3300), following an agile development process with weekly sprints. We started with user research (interviewing 20+ fellow students about financial pain points), moved through wireframing and prototyping, and are now in active development.

**Current Status:**
- ✅ User research and problem validation complete
- ✅ Technical architecture designed (event sourcing ledger)
- ✅ Plaid sandbox integration working
- 🔄 Building core budget allocation engine
- 📅 Beta testing planned for April 2026

**GitHub:** [Add if public, otherwise note "Private Development Repository"]

Let me know if you have any questions about the requirements or need clarification on any design decisions. Let's build something we can both be proud to share with recruiters and our professional networks!

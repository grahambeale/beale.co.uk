# beale.co.uk — Design Brief

## Purpose

A single-page personal landing page for Graham Beale, Director of UX and Product Design. The site exists so that recruiters, hiring managers, and professional contacts who find Graham via LinkedIn, CV, or word of mouth can learn who he is, read a short positioning statement, download his CV, and make contact.

This is not a portfolio site. There are no case studies, no project galleries, no blog. It is a clean, confident, typographically driven landing page that says: this person is a senior design leader who knows exactly what good design looks like.

---

## Content (in order)

1. **Name** — Graham Beale
2. **Title/positioning line** — One line. Director-level UX and product design leadership. Human-centred AI.
3. **Headshot** — Professional portrait photo. Black and white or desaturated is preferred (keeps the page tonally consistent and avoids the accent colour competing with skin tones). Cropped head-and-shoulders, not environmental. Positioned beside or above the about text, not floating decoratively. Must feel intentional, not decorative. Size: restrained, not dominant. The typography is still the primary design element, not the photo.
4. **About** — 3-4 sentences maximum. Who Graham is, what he does, what he cares about. Written in third person, measured tone. Mention the civic role briefly (elected councillor) as a differentiator.
4. **Links** — LinkedIn, CV download (.pdf), email (mailto:). Optionally: Care Capital series link, TurbulentGround (if/when launched).
5. **Contact** — Email address. No contact form. Keep it simple.

That is the entire page. Nothing else.

---

## Design principles

### Swiss International Typographic Style

This is the governing aesthetic. Every decision should be tested against these principles:

- **Grid-based layout.** Visible or implied grid. Asymmetric where appropriate. Content aligned to a clear structure.
- **Typography is the design.** No decorative elements, no illustrations, no icons, no gradients, no shadows. The typeface, its weight, its size, and its spacing carry the entire visual identity.
- **Generous white space.** The page should breathe. White space is not emptiness, it is structure.
- **Minimal colour.** See colour palette below.
- **No ornamentation.** No borders, no cards, no rounded corners, no hover animations, no parallax, no background images. Nothing that a Swiss typographer in 1960 would not have used.
- **Confident hierarchy.** The name should be unmistakable. The positioning line should be immediately clear. The about text should be readable. The links should be findable. That is the hierarchy, in that order.

### Colour palette

- Background: dark warm charcoal (#252220 — not pure black)
- Primary text: warm off-white (#E8E4DC)
- Accent: golden amber (#E8960A — used sparingly for links, the positioning line, or a single rule)
- Muted text: #888480 (secondary information, contact details)

These are taken directly from the Care Capital LinkedIn image system (dark background variant) and must be used consistently. Do not introduce other colours. The accent is a warm golden amber — not the brighter orange #FF7600.

### Typography

- **Primary typeface:** A clean, geometric or neo-grotesque sans-serif. Options (in order of preference):
  - Inter (free, excellent for web, strong at display and body sizes)
  - Helvetica Neue (if system font stack is acceptable)
  - Archivo or IBM Plex Sans as alternatives
- **Do not use:** Serif fonts, handwriting fonts, monospace for body text, or anything decorative
- **Size:** Name should be large and bold. Positioning line should be smaller but still prominent. Body text at a comfortable reading size (18-20px equivalent). Links at body size or slightly smaller.
- **Line height:** Generous. 1.5 minimum for body text. Tighter for headings.
- **Letter spacing:** Slightly open on uppercase or small text. Normal on body.
- **Weight:** Use weight contrast (bold name, regular body) rather than size contrast alone.

### Layout

- **Single column, centred or left-aligned.** No multi-column layouts. No sidebar.
- **Vertical rhythm.** Consistent spacing between sections. The page should feel like a well-set piece of typography, not a website.
- **Viewport:** The entire page should be visible without scrolling on a desktop. On mobile, minimal scrolling.
- **No navigation.** There is only one page. No hamburger menu, no nav bar, no footer links.

---

## Accessibility (WCAG 2.2 AA minimum)

This is non-negotiable. Graham has built accessibility practices professionally (ISO 30071-1:2019 at Mimecast). The site must be exemplary.

### Colour and contrast
- All text must meet WCAG 2.2 AA contrast ratios: 4.5:1 for body text, 3:1 for large text
- Do not rely on colour alone to convey meaning
- Test with both light and dark mode if supporting both
- If using the orange accent (#FF7600), verify contrast against the background — it may need darkening for AA compliance on white

### Colour palette

- Background: warm off-white (#F5F0EB or similar — not pure white)
- Primary text: near-black (#1A1A1A)
- Accent: #FF7600 (orange — used sparingly for links, the positioning line, or a single rule)
- Muted text: #666666 (secondary information, contact details)

These match the Care Capital LinkedIn image system and must be used consistently. Do not introduce other colours.

### Structure and semantics
- Proper HTML5 semantic elements: `<header>`, `<main>`, `<footer>`, `<h1>`, `<p>`, `<a>`
- Single `<h1>` (the name). Use heading hierarchy correctly — do not skip levels
- `lang="en-GB"` on the html element
- Page `<title>` should be descriptive: "Graham Beale — UX and Product Design Leadership"

### Keyboard and focus
- All interactive elements (links, CV download) must be keyboard-accessible
- Visible focus indicators on all focusable elements. Do not remove outline without replacing it with something equally visible
- Tab order must follow visual order
- Skip-to-content link not needed (single page, minimal content) but include one if content grows

### Links
- All links must have descriptive text — no "click here"
- CV download link should indicate file type and size: "Download CV (PDF, 120KB)"
- External links should indicate they open in a new window if using `target="_blank"`, and include `rel="noopener noreferrer"`
- Email link: `<a href="mailto:graham@beale.co.uk">graham@beale.co.uk</a>`

### Images
- Headshot must have meaningful alt text: "Graham Beale, Director of UX and Product Design" (not "photo" or "headshot")
- Serve the image in WebP with a JPEG fallback for older browsers
- Use responsive image sizing (`srcset` or CSS) so it doesn't bloat mobile page weight
- Compress aggressively — target under 80KB
- If using black and white, ensure sufficient contrast between the photo and the page background
- Consider a subtle border or background tint behind the photo if it bleeds into a white background

### Motion and animation
- No animations. No transitions. No motion. This is both a design choice and an accessibility benefit.
- If any subtle transition is added later, respect `prefers-reduced-motion`

### Responsive design
- Must work on screen readers (test with VoiceOver on Mac)
- Must be readable and usable at 200% zoom
- Must work on mobile without horizontal scrolling
- Touch targets for links must be at least 44x44px

### Testing checklist
- [ ] Run axe DevTools or Lighthouse accessibility audit — score must be 100
- [ ] Test with VoiceOver (Mac) or NVDA (Windows)
- [ ] Test keyboard-only navigation
- [ ] Test at 200% browser zoom
- [ ] Validate HTML with W3C validator
- [ ] Check colour contrast with WebAIM contrast checker
- [ ] Test on mobile (real device, not just responsive mode)

---

## Technical

- **Hosting:** GitHub Pages (already set up)
- **DNS:** Heart Internet (already configured)
- **Domain:** beale.co.uk
- **No JavaScript unless essential.** A static HTML page with CSS is ideal. If JS is used, it must not be required for core content.
- **No build tools, no frameworks.** Plain HTML + CSS. The site is one page.
- **Performance:** Page should load in under 1 second. No external dependencies except font loading (and consider self-hosting the font).
- **Favicon:** Simple GB monogram or plain text favicon. Match the enclosed monogram from the LinkedIn brand system if it works at 16x16/32x32.
- **Meta tags:** OpenGraph and Twitter card meta for sharing. Description should match the positioning line.
- **Dark mode:** Optional. If implemented, use `prefers-color-scheme` media query. Ensure contrast ratios hold in both modes.

---

## What success looks like

A hiring manager clicks through from LinkedIn. The page loads instantly. They see a name, a clear statement of who this person is, and exactly how to get in touch or download a CV. The typography is confident and beautiful. There is nothing unnecessary. They think: this person understands design.

---

## Writing rules

These apply to every word on the site, without exception.

- **No em dashes.** Never use — in copy. Use a colon, a comma, a full stop, or rewrite the sentence.
- **No AI speak.** Do not use: leverage, robust, seamless, holistic, synergy, cutting-edge, streamlined, spearheaded, orchestrated, transformative, meticulous, fostered, thriving, pivotal, comprehensive (used vaguely), innovative (used vaguely), demonstrating, navigating, or any phrase a human would not say out loud.
- **No adverb hedges.** Avoid: deeply, truly, highly, incredibly, extremely, very.
- **Third person in the About section.** The site brief specifies third person. Use "he/his", not "I/my".
- **Facts must match the master CV.** Do not invent, round up, or embellish. If the CV says NPS was -1, write -1.
- **Short sentences.** Prefer full stops over conjunctions. Two short sentences beat one long one.

---

## Reference aesthetic

Search for: Josef Muller-Brockmann posters, Neue Grafik magazine covers, contemporary Swiss-style portfolio sites. The feeling is: precision, restraint, confidence. Every element earns its place.

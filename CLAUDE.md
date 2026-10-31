# beale.co.uk: Design Brief

## Purpose

The personal site of Graham Beale, a design director. It exists so that recruiters, hiring managers and professional contacts who arrive from LinkedIn, the CV or word of mouth can do three things quickly: see who he is and what he has built, read the evidence (experience and case studies), and get in touch or download the CV.

The audience is Director and Head of Design hiring panels at AI-forward product companies. Every change should make that reader's first minute clearer, not busier.

---

## Structure

**One landing page** (`index.html`) with a fixed navigation bar and these sections, in order:

1. **Hero** (`#hero`): photo, name, positioning line, fit line (level and availability), four proof points, then Download CV, LinkedIn and Email.
2. **About** (`#about`): short first-person narrative, plus an aside (Currently, Right to work, Civic role, Recognition).
3. **Education** (`#education`): qualifications and professional development.
4. **Testimonials** (`#testimonials`): three named colleague quotes.
5. **Experience** (`#experience`): employer logo strip and a dated timeline.
6. **Case Studies** (`#case-studies`): a short intro and a link to the case study index.
7. **Contact** (`#contact`): email and a booking link (Cal.com).

**Navigation** (`#nav`): About, Experience, Case Studies, Contact. The name at top left swaps from `beale.co.uk` to `Graham Beale` after scrolling (see `script.js`). Education and Testimonials are reachable by scrolling but are not in the nav.

**Case study pages** (`case-studies/`): `index.html` (the four-card index), `yell-project-alpha.html`, `mimecast-accessibility.html`, `mimecast-elements.html`, `mimecast-ai-guild.html`. They are public. There is no password gate. `enter.html` is only a redirect to `index.html` so old links keep working. Each case study carries its own inline stylesheet and a small `nav.js` for the name swap.

**Other files:** `styles.css` (home page only), `script.js` (nav behaviour), `og-card.jpg` (share image, 1200x630), `linkedin-profile-240.webp` and `.jpg` (hero photo), `logos/` (employer logos, single colour), `Graham-Beale-CV.pdf`.

---

## Design principles

Swiss International Typographic Style, kept restrained.

- Typography carries the design. Inter throughout, with weight and size contrast rather than decoration.
- Generous white space and a clear grid. Content sits in a single reading column (max width 900px) except the About section, which has a narrow aside.
- No gradients, shadows, illustrations or stock imagery. Lines, labels and the amber accent do the structural work.
- Confident hierarchy: the name first, then the positioning line, then the fit line, then the proof, then the actions.
- The hero must fit a 1440x900 viewport, including the buttons. If it does not, reduce vertical padding before removing content.

---

## Colour

Dark palette only. These are the tokens in `styles.css`.

| Token | Value | Use | Contrast on background |
|---|---|---|---|
| `--bg` | `#252220` | Page background (warm charcoal, not pure black) | n/a |
| `--text` | `#E8E4DC` | Primary text (warm off-white) | 12.47:1 |
| `--accent` | `#E8960A` | Buttons, rules, links, left borders (golden amber, not the brighter orange `#FF7600`) | 6.62:1 |
| `--muted` | `#A19C96` | Secondary text, labels, dates | 5.81:1 |
| `--border` | `#3A3633` | Hairlines and dividers | n/a |

Scoped exceptions. Do not extend them without asking.

- **NPS values in the hero proof row only:** `#F87171` (negative) and `#4ADE80` (positive). Both pass AA on `--bg`.
- **Case study accents:** the Yell page uses the amber accent. The other three pages use their own accent: teal `#4ac8b8` (accessibility), indigo `#8fa3e8` (Elements) and rust `#e07858` (AI guild), with the same colours as dots and card highlights on the case study index. These sit outside the five-colour palette and are an open design decision.

---

## Typography

- **Typeface:** Inter (Google Fonts, weights 400, 500 and 700), with Helvetica Neue and Arial as fallbacks. Do not use serif, handwriting or decorative faces.
- **Scale:** name `clamp(3.75rem, 11vw, 7.5rem)` bold; section headings `clamp(2rem, 5vw, 3.25rem)` bold; body 1rem to 1.0625rem; secondary text 0.875rem to 0.9375rem. Nothing below 0.8125rem (13px).
- **Weight:** bold for headings, nav name and key figures. 500 for nav links. 400 for body.
- **Line height:** 1.5 or more for body text, tighter for large headings. **Letter spacing:** slightly open on small uppercase labels, slightly negative on large headings.

---

## Motion

- Keep motion minimal. The home page has one transition on the nav name swap and one on button hover.
- Every transition, animation and smooth scroll must stop for `prefers-reduced-motion: reduce`. On the home page this is handled in `styles.css`. On case study pages all motion lives inside `@media (prefers-reduced-motion: no-preference)`.
- Hover states must still change colour for reduced-motion users.

---

## Accessibility (WCAG 2.2 AA minimum)

Non-negotiable. Graham built an ISO 30071-1:2019 accessibility programme at Mimecast, so this site has to be exemplary.

**Colour and contrast**
- Body text at least 4.5:1, large text at least 3:1, non-text UI at least 3:1.
- Never rely on colour alone to carry meaning.

**Structure**
- Semantic HTML5 landmarks: `header`, `nav`, `main`, `footer`.
- One `h1` per page (the name). Heading levels must not skip.
- `lang="en-GB"` on every page.
- Page titles follow `Graham Beale | Topic`.

**Keyboard and focus**
- Everything interactive works by keyboard, in visual order, with a visible focus indicator. Never remove an outline without replacing it.
- Touch targets at least 44x44px.

**Links**
- Descriptive link text. Never "click here".
- The CV link states file type and size: `Download CV (PDF, 64KB)`. Update the size whenever the PDF changes.
- Links that open a new tab use `target="_blank"` with `rel="noopener noreferrer"` and a visually hidden "(opens in new tab)".

**Images**
- Meaningful alt text. Decorative images and icons are hidden from assistive technology.
- Hero photo: WebP with JPEG fallback in a `picture` element, correct `width` and `height`, grayscale applied in CSS.

**Responsive**
- No horizontal scroll at any width. Readable at 200% zoom.

**Testing before any commit**
- [ ] Run axe-core with the `wcag2a`, `wcag2aa`, `wcag21aa`, `wcag22aa` and `best-practice` tags on `index.html` and `case-studies/index.html`. Target: zero violations.
- [ ] Check the hero fits 1440x900 and the page has no horizontal scroll at 390px.
- [ ] Keyboard-only pass through the page.
- [ ] VoiceOver spot check after structural changes.

---

## Technical

- **Hosting:** GitHub Pages from `main`. Custom domain `beale.co.uk` via `CNAME`.
- **No build tools and no frameworks.** Plain HTML and CSS.
- **JavaScript:** keep it to what already exists (`script.js`, `nav.js`, Plausible, and the image lightbox on the Yell case study). Core content must work without it. Do not add dependencies.
- **Analytics:** Plausible. Custom events currently sent: `CV Download`, `LinkedIn Click` (location `hero`), `Email Click` (location `hero`, `contact` or `case-studies-note`), `Case Studies Open` and `Schedule Click`. Retired when the password gate was removed: `Password Request Click`, `Case Study Unlock`, `Case Study Unlock Failed`. Do not rename live events.
- **Cache busting:** `styles.css` is linked with a `?v=` query string. Increase it whenever the stylesheet changes.
- **Meta:** `og:image` and `twitter:image` use `og-card.jpg` (1200x630) with width, height and alt text. Meta descriptions match the hero positioning line.
- **Structured data:** a JSON-LD `Person` block in the head of `index.html`.
- **Performance:** no render-blocking third-party scripts other than the Google Fonts stylesheet. Keep images small.

---

## Writing rules

These apply to every word on the site, without exception.

- **No em dashes.** Never use one, as a character or as an HTML entity, in copy, titles or meta tags. Use a colon, a comma, a full stop, a pipe or a rewrite. Date ranges use "to" (for example "Oct 2020 to Mar 2026").
- **British English.**
- **No AI speak.** Do not use: leverage, robust, seamless, holistic, synergy, cutting-edge, streamlined, spearheaded, orchestrated, transformative, meticulous, fostered, thriving, pivotal, comprehensive (used vaguely), innovative (used vaguely), demonstrating, navigating, or any phrase a person would not say out loud. Avoid "genuine" and "serious about".
- **No hedge adverbs.** Avoid: deeply, truly, highly, incredibly, extremely, very.
- **Voice.** The home page About section is in the first person. Case studies are in the third person ("Graham led...").
- **Facts must match the master CV.** Do not invent, round up or embellish. Use only numbers that already appear on the site or in the CV.
- **Yell NPS.** Consumer NPS of -1 and touchpoint NPS of 47 are different measures. Never draw an arrow or a "from X to Y" between them.
- **Courses and qualifications.** Never use the word "completed" about a course or qualification.
- **Short sentences.** Two short sentences beat one long one.

**Check any change against the writing rules and run axe before committing.**

---

## Known follow-ups

- `Graham-Beale-CV.pdf` still prints the old case study password in its contact line. Regenerate it, then update the file size shown in the Download CV link.
- Case study pages still use some text below 13px and keep their own inline stylesheets.

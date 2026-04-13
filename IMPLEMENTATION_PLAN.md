# BAH Travel Website — Implementation Plan

## Context
BAH Travel is a UK-based Hajj & Umrah tour operator. The client wants a premium multi-page website ("$10k quality") to replace their existing site at bahtravel.co.uk. The current site is considered poor quality. The client provided their logo (orange airplane + "BAHTRAVEL"), WhatsApp number (+220 228 9111), and a list of required pages. They said "just see what you can come up with" — so creative direction is ours.

The existing project has infrastructure already (serve.mjs, screenshot.mjs, puppeteer) but the current index.html contains an "ATLAS" luxury travel site that must be fully replaced.

Client instructions: Write all copy/SEO myself. Don't overload homepage — keep About Us, Terms as separate focused pages. Add placeholder photos (placehold.co) where appropriate. Email: info@bahtravel.com. Logo can be recreated/refined as inline SVG to match the design system — the orange airplane + "BAHTRAVEL" concept stays, but styling can be elevated.

Social Media Accounts:
- Facebook: https://www.facebook.com/profile.php?id=100063561303167
- Instagram: https://www.instagram.com/bahtransporters/
- TikTok: https://www.tiktok.com/@bahtransportersltd
(Twitter/X not used)

## Design Direction
Warm, premium, trustworthy. Not the dark-luxury ATLAS aesthetic — this needs to feel inviting and faith-centered. Think high-end brochure meets editorial magazine.

## Color Palette (derived from logo)
- cream #FAF7F2 Page background
- cream-dark #F0EBE3 Alternate section bg
- charcoal #1E1E1E Primary text
- charcoal-light #4A4A4A Secondary/body text
- amber #E8941A Primary accent (logo-derived)
- amber-light #F5A623 Logo match, hover states
- amber-dark #C67A0F Active states
- navy #1B2D4F Secondary color (trust, authority)
- navy-dark #0F1A30 Footer background
- white #FFFFFF Card surfaces

## Typography (Google Fonts)
- Headings: Playfair Display — refined serif, premium editorial warmth
- Body: Manrope — geometric sans, distinctive, excellent readability
- Heading tracking: -0.03em, body line-height: 1.7

## Texture & Depth
- Subtle grain overlay (SVG noise, low opacity)
- Layered, color-tinted shadows (not flat shadow-md)
- Islamic geometric pattern (inline SVG 8-point star) as subtle section dividers
- Image gradient overlays + mix-blend-multiply

## Expert-Level Animations
All animations use only transform and opacity (never transition-all), with spring-style easing.
- Page load sequence: Staggered reveals — hero content fades up in sequence (label → heading → subtext → CTAs) with animation-delay offsets. Nav slides down from top.
- Scroll-triggered entrances: IntersectionObserver-driven. Cards stagger in with cascading delays.
- Stats counter-animate (number counting up). Sections fade-up with translate.
- Hero parallax: Background image scrolls at slower rate than foreground content (CSS background-attachment: fixed or JS-driven transform).
- Card hover effects: Elevated lift (translateY + enhanced shadow), image zoom inside cards (scale on the background), text elements slide into view. All with spring cubic-bezier easing.
- Nav state transition: Smooth background/shadow transition on scroll with backdrop-blur.
- Button micro-interactions: Scale down on active, glow pulse on hover (box-shadow animation), arrow icons translate on hover.
- Testimonial section: Quotes fade in one at a time with slide animation as user scrolls.
- Islamic pattern elements: Subtle slow rotation or pulse animation on decorative geometric elements.
- WhatsApp widget: Bounce-in entrance for the button, spring slide-up for the chat popup, smooth typing indicator dots animation inside the widget.
- Page transitions: Smooth scroll behavior between sections. Anchor links with eased scroll.

## File Structure
- index.html ← Home (replace existing ATLAS content)
- about.html ← About Us (new)
- contact.html ← Contact Us (new)
- terms.html ← Terms & Conditions (new)
- brand_assets/ ← Save logo image here

All pages: standalone HTML, inline styles + Tailwind CDN, shared nav/footer/WhatsApp button.

## Shared Components (copied into each page)

### Navigation
- Fixed top, transparent → cream on scroll with shadow
- Logo left: Recreated as inline SVG — orange airplane icon + "BAH" (amber) + "TRAVEL" (charcoal). May refine proportions/style to match the overall design system while keeping the brand recognizable.
- Links right: Home, About, Contact, Terms
- Active page indicator (amber underline)
- Mobile hamburger menu (slide-in from right)

### Footer
- Navy-dark background
- 3 columns: Company info + ATOL badge | Quick Links | Contact (phone, WhatsApp, email, social)
- Email: info@bahtravel.com (mailto: link)
- Social icons with actual links:
  - Facebook: https://www.facebook.com/profile.php?id=100063561303167
  - Instagram: https://www.instagram.com/bahtransporters/
  - TikTok: https://www.tiktok.com/@bahtransportersltd
- Copyright + ATOL Protected notice

### Floating WhatsApp Widget (Popup Chat)
- Fixed bottom-right, green WhatsApp circle icon
- On click: Opens a popup chat widget (not just a link). Widget shows:
  - BAH Travel avatar/logo + "BAH Travel" header + "Typically replies within minutes"
  - Pre-filled greeting message: "Hello! How can we help you plan your pilgrimage?"
  - Text input field where user types their message
  - "Send" button that opens https://wa.me/2202289111?text={user_message} with URL-encoded message
  - Close button (X) to dismiss the popup
- Animations: Smooth slide-up entrance on open, slide-down on close. Subtle pulse/bounce on the green button on page load (attention-grabbing). Widget fades in with spring easing.
- Z-index above everything
- Mobile-friendly: full-width on small screens, compact card on desktop

## Page Layouts

### 1. Home (index.html) — Focused, not overloaded
- **Hero** — Full viewport. Placeholder Kaaba/Makkah image with gradient overlay. "Your Travelling Partner" headline. "Premier Hajj & Umrah Packages" subheading. Two CTAs: "View Packages" (amber) + "Contact Us" (outlined)
- **Services Overview** — Brief 3-card grid: Hajj Packages, Umrah Packages, Tailored Experiences. Just enough to show what they offer, with "Learn More" links to About page for details.
- **Featured Packages** — 2 package cards (Hajj + Umrah) with price, duration, key highlights, "Enquire Now" → Contact page. ATOL trust badge.
- **Testimonials** — Navy background, 3 client quotes
- **CTA Banner** — Amber gradient. "Begin Your Sacred Journey Today" + phone + WhatsApp
- **Footer**

### 2. About Us (about.html)
- Page Hero — Short (~40vh). "About BAH Travel"
- Company Story — Two-column: narrative text + placeholder image
- Mission & Values — 3-4 value cards (Faith-Centered, Safety, Expert Guidance, Quality)
- Why Choose Us — Stats grid (years, pilgrims served, ATOL, hotel stars)
- Footer

### 3. Contact Us (contact.html)
- Page Hero — Short. "Get in Touch"
- Contact Grid — Left: form (name, email, phone, interest dropdown, message). Right: contact info (phone, WhatsApp, email info@bahtravel.com, social links, hours)
- Quick Contact Cards — 4 cards: Call, WhatsApp, Email, Social Media
- Footer

### 4. Terms (terms.html)
- Page Hero — Short. "Terms and Conditions"
- Content — Structured legal sections with TOC sidebar: ATOL, Booking, Cancellation, Insurance, Passports, Liability, Privacy, Contact
- Footer

## Implementation Order

### Phase 1: Home Page
- Build shared components (nav, footer, WhatsApp, Tailwind config, grain overlay)
- Build all Home page sections
- Add scroll animations + mobile hamburger
- Screenshot & verify (2 rounds minimum)

### Phase 2: Inner Pages
- Build about.html (copy shared components + page content)
- Build contact.html
- Build terms.html
- Screenshot & verify each (2 rounds minimum)

### Phase 3: Integration
- Wire all nav links across pages, set active states
- Test mobile responsive (375px screenshots)
- Final full-page screenshots at 1440px

## Verification Checklist
- All 4 pages load at localhost:3000
- Nav links work across all pages with correct active states
- WhatsApp button on all pages → wa.me/2202289111
- Phone link → tel:+447982144203
- Social icons: Facebook, Instagram, TikTok (with actual links)
- Email link → mailto:info@bahtravel.com
- Mobile responsive (375px, 768px, 1440px)
- No transition-all in code
- No default Tailwind blue/indigo colors
- All buttons/links have hover + focus-visible + active states
- Images have gradient overlay treatment
- ATOL Protected mentioned (home, about, terms, footer)
- Grain texture overlay on all pages

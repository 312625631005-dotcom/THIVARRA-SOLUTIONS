# THIVARA Solutions — Site Structure

This document maps the **exact structure of the original single-file site**
(`THIVARRA-SOLUTIONS-main/index.html`) to the React build in this folder.

---

## 1. Exact structure of your original `index.html`

```
<head>
├─ meta charset / viewport / color-scheme
├─ <title>THIVARA Solutions | Intelligence. Innovation. Impact.</title>
├─ Google Fonts: Orbitron, Space Grotesk, Inter, Cormorant Garamond
└─ <style>  (brand tokens, logo base64, loader, cursor, cards, form, admin)

<body>
├─ #loader                     animated brand loader (kicker + 3-line title + progress)
├─ canvas#space                galaxy starfield background
├─ #bar                        scroll-progress bar
├─ #cur / #dot / #lbl          custom robot cursor + label
│
├─ <header>
│   └─ .wrap.nav
│       ├─ a.brand             logo mark + "THIVARA SOLUTIONS"
│       └─ nav                 Services · Projects · Why us · BOOK IT SUPPORT
│
├─ <main id="top">
│   ├─ section.hero
│   │   ├─ h1                  Intelligence. / Innovation. / Impact.
│   │   ├─ #type               typewriter (WEB / AI / IT / IOT …)
│   │   ├─ p                   intro paragraph
│   │   ├─ .row                BOOK DOORSTEP SUPPORT · OUR SERVICES
│   │   ├─ p.hero-promise      doorstep + remote support note
│   │   └─ .logo3d#logo3d      CSS 3D logo (aura, rings, orbits, glass, img)
│   │
│   ├─ section#services
│   │   ├─ h2                  What we build
│   │   ├─ p.lead
│   │   └─ .grid               5 × .card
│   │                           WEB DEVELOPMENT · AI SOLUTIONS ·
│   │                           IT SUPPORT & PC BUILDING · NETWORKING ·
│   │                           IOT & EMBEDDED
│   │
│   ├─ section#projects
│   │   ├─ h2                  Work we have built
│   │   ├─ p.lead
│   │   └─ .grid               4 × .proj
│   │                           ANNAMALAI FRESH MART · TULASI VIBE ·
│   │                           STUDENT BARCODE ATTENDANCE · SMART BUS SYSTEM
│   │
│   ├─ section#why
│   │   ├─ h2                  Why THIVARA
│   │   ├─ p.lead
│   │   └─ .why                4 value blocks
│   │
│   └─ section#contact
│       ├─ h2.glitch           Have a project in mind?
│       ├─ p.lead
│       └─ .cgrid
│           ├─ .ways           4 × .way (WhatsApp, Phone, Email, Instagram)
│           └─ form#enquiry    5-step service-request builder
│               ├─ step 1      service category + specific service + mode + urgency
│               ├─ step 2      device, brand/model, budget, details, attachment link
│               ├─ step 3      name, phone, email
│               ├─ step 4      doorstep address, Maps link, live location, visit time
│               └─ step 5      contact method, preview, consent, generate request
│
├─ <footer>
│   └─ © 2026 THIVARA Solutions · tagline · ADMIN LOGIN
│
├─ #adminOverlay               Supabase admin console
│   ├─ login panel             email + password (Supabase Auth)
│   └─ manager                 add / edit / delete / publish projects
│
└─ <script>                    loader · reveals · typewriter · scroll bar ·
                               robot cursor · galaxy canvas · request builder ·
                               Supabase admin
```

---

## 2. React build — file map

| Original block | React component / file |
| --- | --- |
| `#loader` | `src/components/Loader.jsx` |
| `#bar` | `src/components/ScrollProgress.jsx` |
| `canvas#space` | `src/three/Particles.jsx` |
| `header` | `src/components/Navbar.jsx` |
| `section.hero` | `src/components/Hero.jsx` |
| `.logo3d` | `src/three/Logo3D.jsx` (real Three.js logo, square + cursor tilt) |
| `section#services` | `src/components/Services.jsx` |
| `section#projects` | `src/components/Portfolio.jsx` |
| `section#why` | `src/components/Why.jsx` |
| `section#contact` | `src/components/Contact.jsx` |
| `footer` | `src/components/Footer.jsx` |
| `#adminOverlay` | **Not ported** — requires Supabase credentials; see note below |
| brand tokens / fonts | `src/index.css`, `tailwind.config.js` |
| logo asset | `public/logo.webp` (extracted from the original base64) |

Page composition: `src/App.jsx`

```
<Loader /> <ScrollProgress /> <Navbar /> <Hero /> <Services />
<Portfolio /> <Why /> <Contact /> <Footer />
```

---

## 3. Content parity checklist

| Item | Original | React build |
| --- | --- | --- |
| Brand name | THIVARA Solutions | ✅ same |
| Tagline | Intelligence. Innovation. Impact. | ✅ same |
| Logo | embedded base64 WebP | ✅ `public/logo.webp`, same image |
| Colours | `#000`, `#050A14`, `#1E5BFF`, `#22C7FF`, `#E6E9EF`, `#9AA7BD`, `#10233F` | ✅ same tokens |
| Fonts | Orbitron / Space Grotesk / Inter / Cormorant Garamond | ✅ same |
| Services | 5 | ✅ 5 |
| Projects | 4 | ✅ 4 |
| WhatsApp | +91 94459 82865 | ✅ same |
| Phone | +91 93843 47879 | ✅ same |
| Email | thivarasolutions@gmail.com | ✅ same |
| Instagram | @thivarasolutions | ✅ same |
| Request form | 5-step builder → WhatsApp / Gmail | ✅ same flow, React state |
| Loader / progress bar | yes | ✅ added |
| Galaxy background | canvas stars | ✅ Three.js particles |
| Robot cursor | yes | ❌ omitted (accessibility + mobile) |
| Supabase admin | yes | ❌ not ported (needs backend keys) |

---

## 4. Notes

- **3D logo:** the plane is square (`4 × 4`) because `logo.webp` is `800 × 800`.
  It is scaled to the smaller viewport axis, so it never crops or stretches.
  It tilts toward the cursor instead of spinning a full 360°, so it never turns
  edge-on and disappears.
- **Scroll reveals:** content is visible by default; `whileInView` only adds a
  small transform. This prevents sections from staying at `opacity: 0` if an
  IntersectionObserver never fires (in-app browsers, extensions, automation).
- **Admin console:** the original embeds a Supabase project URL and publishable
  key. The React build leaves this out on purpose. To add it, create
  `src/components/AdminConsole.jsx` and install `@supabase/supabase-js`.

---

## 5. Commands

```powershell
cd C:\Projects\thivara-solutions
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

# Evolution Accelerator — Project Reference

## Overview
Website for **Evolution Accelerator**, a VC/accelerator based in Sacramento Valley, CA.
Live site: https://evolutionacceleration.com
Staging (Vercel preview): https://evolution-rho-six.vercel.app
Vercel auto-deploys on every push to the development branch.

---

## Git

- **Repo**: `surfindad/evolution`
- **Development branch**: `claude/review-evolution-acceleration-XgFtE`
- **Always push to the branch above** — never to main without explicit permission
- If push is rejected (remote has new commits), run:
  ```
  git pull --rebase origin claude/review-evolution-acceleration-XgFtE && git push -u origin claude/review-evolution-acceleration-XgFtE
  ```

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 + custom config |
| Animation | Framer Motion 11 |
| Fonts | Raleway (headings), Inter (body), Space Mono (`label-mono`) |
| Deploy | Vercel (auto on push) |

### Key Tailwind classes
- `label-mono` — Space Mono small caps label
- `btn-outline` — outlined button style
- `divider` — horizontal rule between sections
- `grain` — subtle noise texture overlay
- `grid-bg` — dot-grid background pattern
- `text-green` / `bg-green` — brand green (`#4ade80` area)

---

## Project Structure

```
app/
  page.tsx              — Home page
  about/page.tsx        — About page
  ecosystem/page.tsx    — Ecosystem page
  portfolio/
    page.tsx            — Portfolio grid page
    [slug]/page.tsx     — Individual company detail page
  team/page.tsx         — Team page (Alex, Hannah, Rodney, Charles)
  terms/page.tsx        — Terms & Conditions
  privacy/page.tsx      — Privacy Policy

components/
  Navbar.tsx
  Footer.tsx
  Logo.tsx
  ScrollProgress.tsx
  PortfolioGrid.tsx     — Filterable grid with search, sector pills

data/
  companies.json        — Single source of truth for all 50 portfolio companies

public/images/          — All uploaded images live here (flat, no subfolders)
```

---

## Adding a Portfolio Company

All company data lives in `data/companies.json`. Each entry:

```json
{
  "id": 1,
  "name": "Company Name",
  "slug": "company-slug",
  "sector": "AI & ML",
  "logo": "/images/company.png",
  "description": "One-sentence description shown on the portfolio grid card.",
  "website": "https://www.company.com",
  "tagline": "Short punchy tagline shown on the detail page hero.",
  "longDescription": "Full description shown on the detail page.\n\nSupports paragraph breaks with \\n\\n.",
  "founders": "Founder One, Founder Two",
  "founded": "2021",
  "coverImage": "/images/company-product.jpg",
  "team": [
    {
      "name": "Jane Doe",
      "title": "CEO & Co-Founder",
      "bio": "Short bio paragraph.",
      "photo": "/images/company-jane.jpg"
    }
  ]
}
```

### Fields
- `coverImage` — optional; shows as full-width banner above About text on detail page
- `team` — optional array; renders a Team section on the detail page
- `longDescription` — if empty, detail page shows "Full profile coming soon"
- `description` — shown on the portfolio grid card (keep under ~150 chars)

### Sectors (with Tailwind color)
`AI & ML` · `Health` · `Fintech` · `Consumer` · `CleanTech` · `Enterprise` · `E-Commerce` · `EdTech` · `Technology`

---

## Image Conventions

All images go in `public/images/` — **no subfolders**.

### Naming pattern
| File | Convention |
|------|-----------|
| Company logo | `companyname.png` or `companyname.jpg` |
| Company product/cover | `companyname-product.jpg` |
| Team member photo | `companyname-firstname.jpg` |
| Evolution team | `firstname_lastname.jpg` |

### ⚠️ Known GitHub upload quirk
When uploading multiple files at once via the GitHub web UI, the **first file alphabetically sometimes gets a leading space** in its filename (e.g., ` bekonix-joshua.jpg` instead of `bekonix-joshua.jpg`). 

**Fix**: Update the path in `companies.json` to include the space: `"/images/ bekonix-joshua.jpg"`. Or re-upload that file separately.

---

## Companies Completed So Far

| ID | Name | Logo | Team | Cover Image |
|----|------|------|------|-------------|
| 1 | Aermetric | ✅ | ✅ 5 members | ❌ removed |
| 2 | Allos | ✅ | ✅ 4 members | ❌ |
| 3 | Arovia | ✅ | ✅ 2 members | ✅ |
| 4 | Bekonix | ✅ | ✅ 8 members | ✅ |
| 50 | Admisio | ✅ | ✅ 2 members | ❌ |
| 5–49 | Various | ❌ most | ❌ most | ❌ |

---

## Evolution Team Page

Four team members in `app/team/page.tsx`:
- **Alex Chompff** — Managing Director. Links: MinervaFund, Evolution Labs, Evolution Accelerator blog
- **Hannah Savage** — Investment Lead. LinkedIn: hannahsavage7
- **Rodney Ferrell** — Partner. Links: Ferrell Digital Production, Evolution Accelerator
- **Charles Ansbach** — Partner. Links: UC Davis GSM faculty page, Evolution Accelerator

Photos expected at `/public/images/team/` — **not yet uploaded**.

---

## Key External Links

| Purpose | URL |
|---------|-----|
| Apply Now form | https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form |
| Contact form | https://airtable.com/appNvUtobsLy17k38/pagc0E9ab4ZuPGh0a/form |
| Do Not Sell form | https://airtable.com/appNvUtobsLy17k38/pagTiBL17ezsSeFDS/form |
| Blog | https://www.evolutionaccelerator.co/ |

---

## Design Tokens

- Background dark: `#1E1E2A`
- Background darker: `#16161F`
- Brand green: `text-green` (Tailwind custom)
- All headings: Raleway Black (`font-raleway font-black uppercase`)
- Ghost backdrop text: `text-white/[0.022]` massive font centered behind hero content
- Dividers: `border-white/[0.06]`

---

## Pages Still Pending / To-Do

- [ ] Team page photos (Alex, Hannah, Rodney, Charles headshots)
- [ ] Remaining 45 company profiles (logos, descriptions, team where available)
- [ ] Event photos to add somewhere (about/home page)
- [ ] Admisio `founded` year not yet provided

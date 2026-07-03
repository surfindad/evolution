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
- `btn-outline` / `btn-primary` — button styles
- `divider` — horizontal rule between sections
- `grain` — subtle noise texture overlay
- `grid-bg` — dot-grid background pattern
- `text-green` / `bg-green` / `text-green-accent` — brand green

### Contrast rule
Body/label text should sit in the `text-white/40` to `text-white/55` opacity range for readability. Only the giant decorative "ghost" backdrop words behind hero sections should stay very dim (`text-white/[0.018]`–`[0.025]`) — those are intentional background texture, not content.

---

## Project Structure

```
app/
  page.tsx              — Home page
  about/page.tsx        — About page
  ecosystem/page.tsx    — Ecosystem page ("Capital. Community. Culture." philosophy section)
  portfolio/
    page.tsx            — Portfolio grid page
    [slug]/page.tsx     — Individual company detail page
  team/page.tsx         — Evolution team page (Alex, Hannah, Rodney, Charles)
  terms/page.tsx        — Terms & Conditions
  privacy/page.tsx      — Privacy Policy

components/
  Navbar.tsx
  Footer.tsx
  Logo.tsx               — plain <img> tag (not next/image) so Tailwind sizing classes work
  ScrollProgress.tsx
  StatsBar.tsx            — "50+ Portfolio Companies" full-width banner
  CountUp.tsx              — animated number counter used by StatsBar
  PortfolioGrid.tsx       — filterable grid with search, sector pills
  LearnMore.tsx

data/
  companies.json         — Single source of truth for all 51 portfolio company entries

public/images/           — All uploaded images live here (flat, no subfolders)
```

---

## Portfolio Company Data — Status: ✅ COMPLETE (51/51)

Every entry in `data/companies.json` has a logo, full description, and team bios as of this reference update. Full breakdown:

| ID | Name | Sector |
|----|------|--------|
| 1 | Aermetric | AI & ML |
| 2 | Allos | Health |
| 3 | Arovia | Technology |
| 4 | Bekonix | Enterprise |
| 5 | Cartwheel (staffing AR) | Fintech |
| 6 | Cash Abroad | Fintech |
| 7 | Ciao Pappy | Consumer |
| 8 | Cleona | Health |
| 9 | CoreImpact | Health |
| 10 | Companion Candles | Consumer |
| 11 | Dapper Boi | Consumer |
| 12 | Daxe | Enterprise |
| 13 | Dope Dog | Consumer |
| 14 | Enrich Scholars | EdTech |
| 15 | Eqvista | Fintech |
| 16 | Fanalyze | Technology |
| 17 | Fasten | Health |
| 18 | Fraxura | Health |
| 19 | Fuel AI | AI & ML |
| 20 | iDentical | Health |
| 21 | ISC (Invasive Species Corp) | CleanTech |
| 22 | Javlin Concepts | Enterprise |
| 23 | Kids Care Finder | Consumer |
| 24 | Knomee | Fintech |
| 25 | LaderaAI | AI & ML |
| 26 | Ladris | AI & ML |
| 27 | Matrubials | Health |
| 28 | MedDefend | Health |
| 29 | Mimoto | AI & ML |
| 30 | MV | Enterprise |
| 31 | My Panda | Consumer |
| 32 | My Town AI | AI & ML |
| 33 | NALA Membranes | CleanTech |
| 34 | Offi | Enterprise |
| 35 | Ozaru | AI & ML |
| 36 | The Paai.com | Enterprise |
| 37 | Pickaxe | AI & ML |
| 38 | Qatch | Consumer |
| 39 | RevShopp | E-Commerce |
| 40 | REX | AI & ML |
| 41 | SeeMedX | Health |
| 42 | ShadowGen | AI & ML |
| 43 | Sunbird | Technology |
| 44 | The Agenda | Health |
| 45 | The Pocket Panty | Consumer |
| 46 | Tumbleweed | Health |
| 47 | Veracity Labs | Technology |
| 48 | Villie | Consumer |
| 49 | Wind Harvest | CleanTech |
| 50 | Admisio | EdTech |
| 51 | Cartwheel (delivery) | Enterprise |

**Notes:**
- IDs 5 and 51 are both named "Cartwheel" but are two different, unrelated companies (staffing AR vs. delivery) — this is intentional, not a duplicate bug.
- Not every company has a `coverImage` (some original site pages had no hero photo, only logo + text) — this is expected and not missing data.
- Admisio's `founded` year was never provided by the source site — field left blank.
- Wind Harvest's board member Cornelius Fitzgerald has no personal headshot on the source site (only a turbine landscape photo was shown) — his `photo` field is blank, which renders a brand-green letter avatar via the fallback in `app/portfolio/[slug]/page.tsx`.

---

## Adding / Editing a Portfolio Company

All company data lives in `data/companies.json`. Each entry:

```json
{
  "id": 1,
  "name": "Company Name",
  "slug": "company-slug",
  "sector": "AI & ML",
  "logo": "/images/company-logo.jpg",
  "description": "One-sentence description shown on the portfolio grid card.",
  "website": "https://www.company.com",
  "tagline": "Short punchy tagline shown on the detail page hero.",
  "longDescription": "Full description shown on the detail page.\n\nSupports paragraph breaks with \\n\\n. Usually two paragraphs: what the company does, then why Evolution invested.",
  "founders": "Founder One, Founder Two",
  "founded": "2021",
  "coverImage": "/images/company-cover.jpg",
  "team": [
    {
      "name": "Jane Doe",
      "title": "CEO & Co-Founder",
      "bio": "Full bio paragraph, usually 2-4 sentences.",
      "photo": "/images/company-jane.jpg"
    }
  ]
}
```

### Fields
- `coverImage` — optional; shows as full-width banner/right-column image on detail page
- `team` — optional array; renders a Team section on the detail page. A member with `photo: ""` gets a green letter-avatar fallback instead of a broken image.
- `longDescription` — if empty, detail page shows "Full profile coming soon"
- `description` — shown on the portfolio grid card (keep under ~150 chars)

### Sectors (with Tailwind color mapping in the codebase)
`AI & ML` · `Health` · `Fintech` · `Consumer` · `CleanTech` · `Enterprise` · `E-Commerce` · `EdTech` · `Technology`

### ⚠️ Placeholder data trap
Before this pass, many `companies.json` entries had **plausible-sounding but entirely fabricated placeholder descriptions** (e.g., Tumbleweed was described as a "plant-based snack brand" — it's actually an end-of-life/legacy planning platform; REX was labeled Fintech/real estate — it's actually an AI ad-optimization platform). Never trust the existing `description`/`sector` as ground truth when populating a new company — always verify against the actual source screenshots and correct if wrong.

---

## Workflow: Populating a New/Incomplete Company Profile

1. User uploads company screenshots from the original site (evolutionacceleration.com/[company-slug]) to `public/images/` via GitHub's web UI, plus the company logo and any team headshots.
2. User says "X is uploaded."
3. Pull latest: `git pull --rebase origin claude/review-evolution-acceleration-XgFtE`
4. Check `ls public/images/` for the new files.
5. **Read the screenshots** to extract: company description, "At Evolution, we..." investment rationale paragraph, team member names/titles/full bios, and the company's own website URL (usually shown at the bottom as "To learn more about X, visit: ...").
   - ⚠️ If direct `Read` on an image fails/returns "media removed — rejected by API" (a recurring transient issue in this project), **route the read through a subagent** (`Agent` tool, `general-purpose` type) — ask it to Read the file and report back everything visible. This reliably works around the failure.
6. **Crop headshots/cover images** — uploaded "screenshots" are often full 2880×1800 browser-window captures (with tab bar, bookmarks, etc.), not pre-cropped photos. Use Python + Pillow (`pip install Pillow` if needed) to crop just the photo/product-shot region out of each screenshot. This can also be delegated to a subagent (give it the file path, describe the expected photo region, ask it to crop with PIL and verify the result by reading it back, iterating on bounds until clean).
7. Rename files to convention: `slug-logo.jpg`, `slug-cover.jpg`, `slug-firstname.jpg` (or similar) — no spaces.
8. Write/update the `companies.json` entry with the extracted text and corrected `logo`/`coverImage`/`team[].photo` paths. Correct `sector` and `description` if the placeholder was wrong (see trap above).
9. Validate: `node -e "require('./data/companies.json'); console.log('JSON valid')"` (must run from repo root, not from inside `public/images/`).
10. `git rm` the raw full-page screenshots (they're no longer needed once cropped), `git add` the new cropped images + `companies.json`.
11. Commit with a descriptive message, `git pull --rebase`, then `git push -u origin claude/review-evolution-acceleration-XgFtE`.

---

## Image Conventions

All images go in `public/images/` — **no subfolders**.

### Naming pattern
| File | Convention | Example |
|------|-----------|---------|
| Company logo | `slug-logo.jpg` | `nala-logo.jpg` |
| Company cover/product photo | `slug-cover.jpg` | `nala-cover.jpg` |
| Team member photo | `slug-firstname.jpg` | `nala-sue.jpg` |
| Evolution team | `firstname_lastname.ext` (matches whatever was actually uploaded) | `alexchompff.jpg`, `rodney_ferrell.jpg` |

Historically some companies used `companyname-1.jpg`, `-2.jpg` numbered screenshots before cropping — those get renamed to the `-logo`/`-cover`/`-firstname` pattern and the raw numbered originals are deleted once cropped.

### ⚠️ Known GitHub upload quirks
1. **Leading space bug**: when uploading multiple files at once via the GitHub web UI, the first file alphabetically sometimes gets a leading space in its filename (e.g., ` bekonix-joshua.jpg`). Fix: update the path in `companies.json` to include the space, or re-upload that file separately.
2. **Full-page screenshots, not cropped photos**: files the user uploads are frequently entire browser-window screenshots (2880×1800, complete with tab bar) rather than a cropped photo/headshot. Always inspect and crop before wiring into `companies.json`.
3. **Silent upload failures**: occasionally a GitHub web upload doesn't actually commit (user thinks it's done, but `git pull` shows nothing new). If files don't show up after a pull, ask the user to confirm they clicked "Commit changes" and check the branch selector said the right branch.
4. **Image Read tool instability**: in this project, the `Read` tool has intermittently failed on legitimate, reasonably-sized JPG files with a "rejected by API" error — unrelated to file size (confirmed on files well under 200KB). Workaround: delegate the image read to a subagent via the `Agent` tool; subagents have reliably succeeded where the main session's direct Read failed.

---

## Evolution Team Page (`app/team/page.tsx`)

Four core team members, defined in a `team` array in the file:

| Name | Title | Photo status | Links |
|------|-------|--------------|-------|
| Alex Chompff | Managing Director | ✅ `/images/alexchompff.jpg` | MinervaFund, Evolution Labs, Evolution Accelerator |
| Hannah Savage | Investment Lead | ❌ still pending | LinkedIn (hannahsavage7), MinervaFund, Elevate Global IO |
| Rodney Ferrell | Partner | ✅ `/images/rodney_ferrell.jpg` | Ferrell Digital, Evolution Accelerator |
| Charles Ansbach | Partner | ✅ `/images/charles_ansbach.jpg` | LinkedIn (cansbach), UC Davis GSM, Evolution Accelerator |

A 5th placeholder entry (all empty strings, `photo: null`) exists in the array for a "coming soon" card slot — leave as-is until a 5th team member is confirmed.

Photos uploaded directly to `public/images/` (flat, not a `team/` subfolder as earlier docs assumed) — file extensions vary by what was actually uploaded (`.jpg`), not `.png` as originally scaffolded.

---

## Key External Links

| Purpose | URL | Notes |
|---------|-----|-------|
| Apply Now form | https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form | Airtable form — submissions land as new records in that Airtable base. Owner/monitor of the base TBD (as of this writing, user was tracking down who owns it). |
| Contact form | https://airtable.com/appNvUtobsLy17k38/pagc0E9ab4ZuPGh0a/form | Same Airtable base, different page |
| Do Not Sell form | https://airtable.com/appNvUtobsLy17k38/pagTiBL17ezsSeFDS/form | Same Airtable base, different page |
| Blog | https://www.evolutionaccelerator.co/ | External blog, separate from this Next.js site |

---

## Design Tokens

- Background dark: `#1E1E2A`
- Background darker: `#16161F`
- Brand green: `text-green` / `text-green-accent` (Tailwind custom)
- All headings: Raleway Black (`font-raleway font-black uppercase`)
- Ghost backdrop text: `text-white/[0.018]`–`[0.025]` massive font centered behind hero content (intentionally near-invisible — decorative texture, not meant to be read)
- Body/label text: `text-white/40`–`/55` (bumped up site-wide from an earlier low-contrast `/15`–`/25` pass for readability)
- Dividers: `border-white/[0.06]`

---

## Pages / Items Still Pending

- [ ] Hannah Savage team page headshot — only one of the 4 core team photos still missing
- [ ] Confirm who owns/monitors the Airtable base the Apply Now / Contact / Do Not Sell forms submit to
- [x] Event photos for About page — done: 3 photos (`about-event-1/2/3.jpg`) added to the `PhotoBanner` gallery on `app/about/page.tsx`
- [ ] Admisio `founded` year — never provided by source site
- [ ] User flagged wanting to revisit "this part of the website" (unspecified section) as feeling underdeveloped — needs follow-up to clarify which page/section

# Tokyo Nature Walks — SEO & Instagram Launch Playbook

A practical, do-this-now plan to get your first bookings. Built around two channels: **search (SEO)** so people Googling "Tokyo nature tour" find you, and **Instagram** so the photos do the selling.

---

## Part 1 — SEO foundations (already built into the site)

The site already ships with: a keyword-rich `<title>` and meta description, Open Graph/Twitter cards (nice link previews), JSON-LD structured data (Product + TouristAttraction + Person), `sitemap.xml`, and `robots.txt`. After you deploy, do these one-time steps:

1. **Google Business Profile** (highest ROI for a local tour)
   - Create a free profile at business.google.com. Category: "Tour operator" / "Eco tour agency".
   - Service area: Minato City / Shirokanedai, Tokyo. Add your photos, hours (weekends + holidays), and your website link.
   - This is what makes you show up in Google Maps and the local "pack."

2. **Google Search Console** (search.google.com/search-console)
   - Verify the site, submit `sitemap.xml`. Lets you see what people search to find you.

3. **Update real URLs** once deployed: in `index.html`, replace `https://tokyonaturewalks.com/` in the canonical/OG tags and in `sitemap.xml`/`robots.txt` with your real domain (or the GitHub Pages URL).

### Target keywords (work these into copy + posts naturally)
- "Tokyo nature tour", "Tokyo forest walk", "things to do in Shirokanedai"
- "English guided tour Tokyo", "Tokyo with a local ecologist"
- "Institute for Nature Study tour", "Tokyo off the beaten path", "quiet things to do in Tokyo"

### Free backlinks / listings to submit to
- TripAdvisor (Things to Do → add an experience), GetYourGuide / Viator (apply as supplier), Klook
- Tokyo expat/travel blogs and subreddits (r/JapanTravel, r/Tokyo) — share genuinely, don't spam
- Time Out Tokyo, Tokyo Cheapo, Japan Travel (JT) — pitch a short guest piece on urban old-growth forest

---

## Part 2 — Instagram (your main top-of-funnel)

Your photos are the product. Instagram + a Google Business Profile will out-perform paid ads at this stage.

### Setup
- Convert to a **Business account** (free) → unlocks insights + the booking link.
- Bio: `🌿 Edo-era forest walks in Tokyo with an ecologist · EN/JP · Weekends & holidays · Book ↓`
- Link: your website `#book` section (or a Linktree if you add more later).
- Handle: keep it consistent with the site (`@tokyonaturewalks` is wired into the footer/code).

### Content pillars (rotate these)
1. **The forest** — seasonal beauty: irises (early summer), deep green, autumn maples, the night illumination. (You have great shots already.)
2. **The ecologist's eye** — short "did you know" facts: why this forest survived, an ancient tree, a native Musashino plant, a bird at the pond. This is your differentiator — nobody else offers the science.
3. **You / behind the scenes** — fieldwork (the truck/buckets photo is gold), prepping a walk, a guest moment.
4. **Practical/CTA** — "Now booking weekends from mid-June," what's included, a guest testimonial once you have one.

### Posting cadence (sustainable, not burnout)
- **3 feed posts/week** + **daily-ish Stories** when you have something.
- **Reels are the growth engine** — aim for 2–3 Reels/week. Ideas: a 15s slow walk down the forest path; "5 things hiding in this Tokyo forest"; time-lapse of light through the canopy; before/after of a season.
- Best times for a Japan/inbound audience: evenings JST and overlap with US/EU mornings.

### Hashtags (mix big + niche; ~10–15 per post)
`#tokyo #tokyotravel #japantravel #thingstodointokyo #tokyonature #shirokanedai #ecotourism #forestbathing #shinrinyoku #japannature #tokyohiddengems #visitjapan #naturelover #tokyoexperiences #自然教育園`

### A note on "auto" marketing
True automation (auto-posting, auto-DMs) violates Instagram's terms and risks your account. The realistic, safe version of "automatic":
- **Batch + schedule**: shoot a month of content in 1–2 sessions, then schedule with **Meta Business Suite** (free, official) or Later/Buffer.
- **Cross-post automatically**: Business Suite posts to Instagram + Facebook at once.
- **Saved reply templates** for DMs answering "how do I book?" → send the link.

---

## Part 3 — First 30 days (checklist)

- [ ] Deploy site; set real URLs in meta tags + sitemap
- [ ] Google Business Profile live with photos
- [ ] Search Console verified + sitemap submitted
- [ ] Instagram Business account + bio + link
- [ ] Schedule 2 weeks of posts in Meta Business Suite
- [ ] Post 1 Reel of the forest path
- [ ] Submit to TripAdvisor + apply to GetYourGuide/Viator
- [ ] Ask your first 1–3 guests for a photo + a 1-line review (put reviews on the site)
- [ ] Add real WhatsApp number + Instagram handle in `assets/js/main.js` (CONFIG)

---

## Part 4 — Once you have a budget (later)
- Instagram/Facebook ads targeting tourists planning Japan trips (interest: Japan travel + in-market travel), $5–10/day, send to the booking section.
- Google Search ads on "Tokyo nature tour" / "English tour Tokyo" — small budget, high intent.
- Keep it off until you've validated bookings come in organically first.

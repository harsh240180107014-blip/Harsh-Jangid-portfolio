# Harsh Jangid — portfolio guide

## Private preview and owner studio
The Site is owner-private. Public sharing requires your approval and a Sites audience change. The homepage and project pages use stable URLs; unpublished/deleted project slugs return 404.

Open `/owner` on your Site. Sign in with ChatGPT. Server writes require the verified platform identity email `realharshjangid@gmail.com`. If your ChatGPT email differs, update the allowlist in `lib/server.ts` to your confirmed ChatGPT identity before publishing publicly. Editing your public contact email does not alter permissions. Never add client-side authentication or expose a writable Worker origin outside the Sites gateway.

## Adding and updating projects
Click **Add draft**, expand the item, enter a stable lowercase URL slug, title, summary, category, technologies, your contribution, and an honest project story. Add HTTPS repository/demo links when available. Upload a thumbnail and screenshots (PNG/JPEG/WebP, up to 8 MB each). Blank images use clearly labeled concept illustrations.

Use **Preview drafts** to review the homepage; return to the editor before saving. Draft project detail links are unavailable until published. To review a story before publishing, use its expanded editor. Toggle **Featured** and **Published**, reorder using the arrows, then **Save changes**. Save feedback reports server success or failure. Drafts persist on save but are excluded from the public API and project routes. Delete moves a project into recovery; **Restore project** brings it back. Nothing is permanently purged by the editor.

## Text, skills, availability, and resume
Edit the Portfolio panel and save. Skills use one `Category: technologies` line per group. Leave availability blank to hide the badge. Upload a replacement PDF and save to change the download independently from website text. Check website facts against the PDF deliberately. There is no automatic resume import. The original PDF is shipped unchanged as `public/Harsh-Jangid-Resume.pdf`.

Upload a landscape social-sharing image (1200 × 630 recommended) and save. Sharing platforms may cache old previews. Use **Copy portfolio link** on the homepage to share when the Site is public. Email contact uses the visitor's mail app; no unsupported submission form is included.

## Source and local setup
Stack: React, TypeScript, Vinext (Next.js App Router API), CSS, Cloudflare D1 and R2. Source is synchronized to the Site repository. No API keys are required. Sites supplies ChatGPT authentication and hosted data bindings.

1. Install Node 22.13+ and dependencies with `npm install` (or `pnpm install` when using the tracked pnpm lockfile).
2. Run `npm run build` to produce Worker configuration.
3. Apply each migration once locally: `node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_past_ultron.sql`.
4. Run `npm run dev`. Local databases are separate from hosted data. Standalone local sign-in is not a substitute for the Sites authentication gateway. Do not disable the owner guard to deploy.
5. Validate with `node node_modules/typescript/bin/tsc --noEmit` and build with the Sites build helper in the Sites environment. Deploy using the native Sites private publishing workflow. Hosted migrations apply through Sites.

`lib/content.ts` holds initial content only; saved D1 content overrides it. `components/Portfolio.tsx` controls page structure. `app/globals.css` defines design tokens, responsive layouts, motion, reduced-motion rules and print styles. Change `--accent`, `--bg`, spacing and radii there. Project data is separate from presentation. Files upload to R2 using random immutable keys; replacement files leave old objects intact for recovery. No automated asset cleanup is configured.

## Custom domain
The provided Sites URL works without domain setup. Custom domain support is not confirmed in the available Sites tools. Check hosting support before buying or changing DNS. For a confirmed domain, follow the host's exact DNS/verification instructions, then update `metadataBase` in `app/layout.tsx`. Do not guess DNS targets.

## Content decisions and remaining materials
Python–MySQL work is featured because the resume describes concrete database operations. The recommendation experiment shows the data-mining interest, with its introductory scope explicit. The Python workbench groups broader practice. No experience or certification sections were invented. The supplied PDF includes only LinkedIn, with no GitHub/repository/demo links or screenshots. LinkedIn could not be inspected automatically. Add project code, datasets, algorithm choices, screenshots and precise contributions to deepen these pages.

## Verification
TypeScript and production build are checked. Desktop and 390px phone-width homepage were visually inspected in a browser; mobile navigation opening/closing and the database project page were checked. Reduced-motion, print, focus styles and semantic content are implemented; assistive-technology testing, real-device testing, and cross-browser coverage are not exhaustive.

Owner authorization, origin checks, schema validation, D1 and R2 operations are implemented server-side. Hosted ChatGPT login, positive owner CRUD/upload flows, cross-device persistence, email delivery via external mail apps, and social-crawler behavior require an authenticated live check. A terminal integration attempt could not reach the isolated preview server, so it is not counted as a pass. No local-storage-only CMS or decorative dashboard is used.

## Redesign and direct launches
The visual direction now uses oversized name typography, warm paper, ink and electric lime with an interactive abstract sculpture. Project images, titles and launch buttons open the live demo first, or the repository when there is no demo. Project notes remain a separate link. If neither URL exists, the card clearly states that the link has not been added; no URL is invented. Add the real HTTPS URL using Owner studio > Projects > Demo or Repository, then Save.

## AI Voice Assistant added
The supplied repository is now a featured project and opens directly from its thumbnail, title, and repository action. No live browser demo was supplied. Its description is based on the README and Python source imports / command branches inspected at commit db2435d05bf0134a01790056599333dff993a23c. The assistant was not executed. A revision-marked content update inserts it once into any older saved portfolio while preserving owner edits and existing projects; subsequent owner removal or unpublishing is respected. GitHub profile links are included.

## Movie Recommendation System linked
The existing movie project now opens the supplied GitHub repository directly. Its description reflects the inspected README and Python pipeline: genre TF-IDF / cosine similarity, collaborative filtering, SVD, and K-Means. Dataset files are not included in that repository, and the pipeline was not executed. A revision-2 update preserves existing media, publication status and unrelated portfolio edits while applying this requested project update.

## Recruiter-focused update and contact fix
All homepage contact actions and project enquiry links now open `/contact`. This avoids relying on a configured mailto handler. The contact page displays a selectable email address, a clipboard button with success/fallback feedback, Gmail and Outlook compose links, and an explicitly labeled default-mail-app option. No email is sent automatically, and no unconfigured contact form is displayed. Email changes in Owner studio apply to all contact links. The contact page needs no JavaScript for its readable address or webmail links.

The homepage now prioritizes a readable name, professional headline, education / technical foundation summary, and the two projects with source repositories. Other published practical work remains available as concise notes. Decorative motion is restrained. Repository clicks remain direct. A revision-3 content update changes the original default introduction only if it has not been customized. No recruitment outcome is promised.

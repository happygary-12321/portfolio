# Yuxuan Portfolio - Project State

Last updated: 2026-06-18

## 1. Current Status

This is a dependency-free, three-page static portfolio built with HTML, CSS, and vanilla JavaScript. The site can be opened directly or served from any basic static host.

Current assessment: **content-complete prototype, but not yet production-ready**. The pages, navigation, contact dialog, responsive layouts, project media, resume link, and external profile/publication links are in place. The main deployment blocker is the 412 MB project video; production metadata, automated checks, and host configuration are also absent.

Project totals at review time:

- 15 website source/asset files plus this status document
- 3 HTML pages, 1 stylesheet, 1 JavaScript file, and 10 media/document assets
- 416,553,677 bytes of website source/assets (about 397 MiB), almost entirely due to the MP4
- No framework, package manager, build step, test suite, or deployment configuration
- No Git repository metadata inside this folder

## 2. Website Structure

```text
yuxuan-portfolio/
|-- index.html
|-- projects.html
|-- experience.html
|-- styles.css
|-- script.js
|-- PROJECT_STATE.md
`-- assets/
    |-- quadruped-robot.jpg
    |-- quadruped-leg-detail.jpg
    |-- quadruped-journey.mp4
    |-- ecm-cad-prototype.png
    |-- ecm-machining-detail.png
    |-- ecm-final-workpieces.png
    |-- ecm-system-assembly.png
    |-- caster-wheel-prototype-angle.jpg
    |-- caster-wheel-prototype-front.jpg
    `-- Yuxuan-Huang-Resume.pdf
```

### `index.html` - Home

- Personal introduction and degree information for Columbia University and RPI
- Tools and skills list covering programming, controls, CAD, and fabrication
- Route cards linking to Projects and Experience
- Footer email and LinkedIn links
- Shared responsive navigation and contact dialog
- Inline SVG data-URI favicon (present on this page only)

### `projects.html` - Projects

- Page-level jump navigation for three projects
- Quadruped Robot System: linked video cover image, two supporting photos, role/method/build/outcome facts
- Electrochemical Machining System: three-image gallery and project facts
- Motorized Caster Wheel Module: two-photo prototype gallery and project facts
- Footer navigation to Home and Experience
- Shared contact dialog

### `experience.html` - Experience

- BHTC Mechanical Design Engineer Trainee entry
- RPI CubeSat Simulation Group research entry
- Clickable SPIE publication card linking to DOI `10.1117/12.3062051`
- Footer link to the PDF resume
- Shared contact dialog

### `styles.css`

- Complete visual system: color variables, typography, layout, cards, project galleries, schematic, footer, and dialog
- Responsive breakpoints at 900 px and 560 px
- Reveal animations and reduced-motion overrides
- Several later override sections refine earlier rules; the cascade works as the current design history, but contains stale/duplicated selectors that should be consolidated only during a later refactor
- Uses system font stacks only; there are no external font or CSS requests

### `script.js`

- Mobile navigation open/close state and `aria-expanded` updates
- Modal contact card using the native `<dialog>` element
- Escape, close-button, and backdrop-click dismissal
- Reduced-motion-aware closing animation
- IntersectionObserver-based reveal animation
- Optional New York clock updater for `#local-time`; no current page contains that element, so this block is dormant

## 3. Completed Work

- Three-page information architecture and cross-page navigation
- Responsive desktop, tablet, and mobile layouts
- Consistent portfolio branding and page-specific title panels
- Home biography, education, technical skills, email, phone, location, and LinkedIn content
- Three project summaries with roles, methods, build details, and outcomes
- Quadruped image/video presentation
- ECM image gallery
- Caster wheel prototype photo gallery
- Projects title panel matched to the blue Home Projects card
- Enlarged project detail fact-table typography
- Industry and research experience entries
- Integrated publication citation and DOI link
- Download/view link for the current resume
- Semantic headings, navigation labels, image alt text, and contact dialog labels
- Reduced-motion CSS support
- Local source and asset references checked; all currently referenced local files exist

## 4. Asset Inventory

All website asset paths are relative to the project root.

| Path | Type | Dimensions / pages | Size | Current use |
|---|---|---:|---:|---|
| `assets/quadruped-robot.jpg` | JPEG | 1280 x 1706 | 167,453 B | Project photo and video poster |
| `assets/quadruped-leg-detail.jpg` | JPEG | 1706 x 1280 | 141,478 B | Quadruped leg detail |
| `assets/quadruped-journey.mp4` | MP4 | Not decoded during scan | 412,119,570 B | **Unused local source; replaced on-page by a linked cover image** |
| `assets/ecm-cad-prototype.png` | PNG | 985 x 606 | 493,275 B | Main ECM gallery image |
| `assets/ecm-machining-detail.png` | PNG | 353 x 475 | 294,557 B | ECM machining detail |
| `assets/ecm-final-workpieces.png` | PNG | 1402 x 1122 | 2,586,259 B | ECM final workpieces |
| `assets/ecm-system-assembly.png` | PNG | 248 x 385 | 167,507 B | **Unused by current HTML** |
| `assets/caster-wheel-prototype-angle.jpg` | JPEG | 1706 x 1280 | 209,357 B | Caster prototype main photo |
| `assets/caster-wheel-prototype-front.jpg` | JPEG | 1280 x 1706 | 192,972 B | Caster prototype secondary photo |
| `assets/Yuxuan-Huang-Resume.pdf` | PDF | 1 page | 132,759 B | Experience footer resume link |

The PDF was created from Microsoft Word on 2026-05-26. Its education, publication, skills, projects, BHTC role, and RPI research content are broadly consistent with the website. It also includes a Six Sigma Green Belt certification that is not currently shown on the site.

## 5. Links and Integrations

Internal destinations:

- `index.html`
- `projects.html`
- `projects.html#quadruped`
- `projects.html#ecm`
- `projects.html#caster`
- `experience.html`
- `assets/Yuxuan-Huang-Resume.pdf`

External/contact destinations:

- Email: `mailto:yh3924@columbia.edu`
- Phone: `tel:+15189618858`
- LinkedIn: `https://www.linkedin.com/in/yuxuan-huang-7590362ab`
- Publication: `https://doi.org/10.1117/12.3062051`
- Quadruped video: `https://www.youtube.com/watch?v=aEup_hopHnc`

There are no analytics, forms, databases, APIs, cookies, authentication flows, or third-party iframe/script integrations. The Projects page links to YouTube but does not load YouTube content inside the site.

## 6. Deployment Readiness

### Ready

- Uses portable relative paths and static files only
- `index.html` is present at the project root
- No build command or server runtime is required
- Suitable in principle for GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or conventional web hosting
- Local image, video, stylesheet, script, page, and PDF references resolve to files in the project
- External links use HTTPS where applicable

### Blocking or high-priority issues

1. **Remove the unused 412 MB MP4 from the deployed bundle or archive it outside the site.** The page now uses YouTube, but the unreferenced local file still represents about 99% of the project size and may trigger host/repository size limits.
2. **Verify the YouTube link across target browsers.** Confirm that the linked video is publicly accessible and opens correctly in Safari, Chrome, Firefox, iOS, and Android.
3. **Add video accessibility support.** Confirm accurate YouTube captions and provide a transcript or direct fallback link where appropriate.
4. **Choose and configure a deployment target.** There is no `vercel.json`, `netlify.toml`, GitHub Actions workflow, custom domain record, or equivalent host configuration.

### Important production gaps

- No automated HTML validation, link checking, linting, visual regression testing, or browser test
- No Open Graph/Twitter metadata, canonical URL, sitemap, or `robots.txt`
- No dedicated 404 page
- Only Home declares a favicon; Projects and Experience do not
- No explicit cache or security-header configuration
- PNG assets, especially `ecm-final-workpieces.png`, can be optimized or converted to modern formats
- No specified image `width`/`height`, responsive `srcset`, or lazy-loading attributes
- No preload strategy for critical assets; the large video correctly uses `preload="metadata"`
- Public phone number and email appear in page source; confirm that this exposure is intentional
- The site has not yet been checked in a deployed HTTPS environment or across the target browser/device matrix

## 7. Recommended Next Steps

1. Create a compressed web delivery version of `quadruped-journey.mp4`, retain the original outside the deployed bundle, and measure visual quality and loading time.
2. Run a browser QA pass at desktop, tablet, and phone widths, including menu behavior, dialog focus/close behavior, anchor scrolling, video playback, resume opening, and external links.
3. Validate all three HTML pages and perform an accessibility audit; add video captions/transcript and fix any focus, contrast, or semantic findings.
4. Select the production host and add the smallest necessary deployment configuration, HTTPS/custom-domain setup, caching, and security headers.
5. Add production discovery metadata: consistent favicon, canonical URL, Open Graph image/data, sitemap, and `robots.txt`.
6. Optimize images and add intrinsic dimensions, responsive sources, and lazy loading where appropriate.
7. Reconcile final content against the resume, including whether to show the Six Sigma certification and whether every numerical outcome is ready for public presentation.
8. Decide whether to use or remove `assets/ecm-system-assembly.png`, the now-unused caster schematic CSS, and the dormant `#local-time` JavaScript.
9. Consolidate duplicate/stale CSS rules after visual behavior is locked, with before/after screenshots to prevent regressions.
10. Add lightweight automated checks for internal links, HTML validity, and basic page loading before deployment.

## 8. Review Boundary

The initial review inventoried every file present in `yuxuan-portfolio`, extracted the resume text, checked image dimensions and file sizes, reviewed all HTML/CSS/JavaScript, and checked local path consistency. On 2026-06-18, the Projects title panel was changed to blue, project fact typography was enlarged, the generated caster schematic was replaced on-page by two supplied prototype photos, and the quadruped player was replaced by a cover image linking to YouTube. Live external-link availability, visual browser rendering, and production-host behavior remain to be verified in the next QA phase.

# Tanvirul Islam Niloy — Portfolio Website

A responsive, static personal portfolio built with plain HTML, CSS, and JavaScript. It has no build step, no framework, and no required paid service.

## Project structure

```text
tanvirul-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── favicon.svg
```

## Run locally

1. Extract the ZIP (if you downloaded it as an archive).
2. Open `index.html` in a modern browser.
3. For a local web-server preview, open a terminal in this folder and run one of:
   - Python: `python -m http.server 8000`
   - Node.js (if installed): `npx serve .`
4. Visit `http://localhost:8000` for Python's server.

No npm install or build command is needed. The site is designed to work without third-party JavaScript libraries or externally hosted fonts/images.

## Before publishing

Please review all personal information and project wording. This version uses the supplied name, contact links, degree/university, certificates, and project descriptions. It intentionally does **not** bundle the private `INTERVIEW_PREP.md` file.

### Add your verified CV (optional)

1. Export your reviewed CV as a PDF.
2. Copy it to `assets/Tanvirul-Islam-Niloy-CV.pdf`.
3. In `index.html`, find the Resume section and replace the “Request CV by email” link with this link:

```html
<a class="button button-primary" href="assets/Tanvirul-Islam-Niloy-CV.pdf" download>
  Download CV <span aria-hidden="true">↓</span>
</a>
```

Do not publish a CV until you have checked that its phone number, address, dates, and other personal information are correct and that you are comfortable sharing it publicly.

### Project proof and links

The portfolio marks the campus VLAN lab as in progress. The two other project descriptions retain explicit reminders where the original HTML used placeholders. Before publishing measured outcomes, fill those details with your real data and remove the reminder box only when the facts have been verified. Add GitHub or demo links only after the repository or demo exists.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new public repository, for example `tanvirul-portfolio`.
2. Upload the contents of this folder to the repository root. Make sure `index.html` is at the repository root (not inside an extra nested folder).
3. Open the repository **Settings → Pages**.
4. Under the build/deployment source, choose **Deploy from a branch**.
5. Select the `main` branch and `/(root)` folder, then save.
6. Wait for GitHub Pages to finish its deployment. The published URL will be shown in the Pages settings; it is usually `https://<your-github-username>.github.io/<repository-name>/` for a project site.
7. Open the URL on both desktop and mobile. Test the navigation, theme switch, email links, LinkedIn, GitHub and all sections.

Official documentation: https://docs.github.com/en/pages

## Included interactions

- Responsive navigation menu for small screens, with Escape-to-close.
- Dark/light theme toggle; remembers the explicit selection when browser storage is available.
- Smooth anchor scrolling and scroll-reveal transitions, respecting reduced-motion preferences.
- Navigation section highlight, SEO metadata, semantic landmarks, visible focus styles and skip link.

## Notes

- No backend, analytics, contact-form service, or external package is used.
- The contact section uses a `mailto:` link; it opens the visitor's configured email application.
- The interview preparation document was intentionally excluded because it was marked private in the source file.

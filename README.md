# Alexia's Portfolio — Project Milestone 3: Accessible & Designed

A three-page student portfolio built with HTML, CSS, and a small amount of JavaScript.

## Pages
- `index.html`: Home and learning goals
- `projects.html`: Project descriptions
- `about.html`: About section and a **practice contact form**

## Accessibility changes implemented
- Added a visible-on-focus **skip to main content** link and a named primary navigation landmark.
- Marked the current navigation page using `aria-current="page"`.
- Used semantic landmarks, descriptive page titles, and logically ordered headings.
- Added clear focus outlines and kept navigation usable with keyboard controls.
- Added proper `<label for>` associations, a `<fieldset>` and `<legend>` for the contact form.
- Added inline error messages linked with `aria-describedby`, `aria-invalid` on invalid inputs, and a status message using `role="status"`.
- Used a single shared stylesheet with a consistent palette and readable text sizes.
- No decorative images were added; the original `portfolio-wireframe.png` is a planning artifact, not an image displayed on the pages.

## Gestalt principles used
1. **Proximity:** Related information is grouped into cards with consistent padding and spacing on the Home and Projects pages.
2. **Similarity:** Cards, navigation styles, typography, button shapes, and colors are repeated across the three pages so related elements look consistent.

## Contact form limitation
The form demonstrates accessible client-side validation only. It **does not send, store, or deliver messages**; a backend/service would be required for real submission.

## Required manual checks before submitting
**Do not report these checks as passed until you run them.**

- [ ] Publish or open all three pages in a browser and run [WAVE](https://wave.webaim.org/) on each; address any reported errors.
- [ ] Record actual WAVE fixes and results for `index.html`, `projects.html`, and `about.html` here.
- [ ] Run the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) on each text/background combination; confirm WCAG AA (at least 4.5:1 for normal text, 3:1 for large text).
- [ ] Check all links and keyboard focus order with Tab/Shift+Tab.
- [ ] Test empty and incorrectly formatted contact-form fields and verify visible error messages.
- [ ] Confirm the layout remains readable on a narrow/mobile window.

### WAVE test record (fill in after testing)
| Page | Initial errors | Fixes made after scan | Final errors |
| --- | --- | --- | --- |
| Home | Not tested | Pending | Not tested |
| Projects | Not tested | Pending | Not tested |
| About/Contact | Not tested | Pending | Not tested |

## Submission
Submit the updated GitHub repository URL to Campuswire:
https://github.com/alexiapatton2021-hub/portfolio-scaffold-assignment

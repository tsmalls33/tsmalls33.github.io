# Thomas Smallwood — Portfolio (Astro + React)

Welcome to my portfolio! It’s where clean design, performance, and a bit of personality meet. Built with Astro + React for a modern, professional, and sleek experience—with just enough dynamic flair to keep things lively.

- Live site: https://tsmalls33.github.io
- Resume (web): https://tsmalls33.github.io/resume
- Resume (PDFs):
  - EN: https://tsmalls33.github.io/resume/en-thomas-smallwood.pdf
  - ES: https://tsmalls33.github.io/resume/es-thomas-smallwood.pdf

## About me
I’m Thomas Smallwood — a motivated, product-minded developer who cares about clarity, craftsmanship, and shipping meaningful work. I like building fast, accessible interfaces, keeping the DX smooth, and leaving codebases better than I found them. Serious about impact; still having fun along the way.

## What’s inside
This portfolio highlights selected projects, experiments, and writing. Expect:
- Thoughtful UI with React components
- Snappy performance via Astro’s island architecture
- Clean, maintainable code and a focus on accessibility

## Tech
- Astro for site structure and performance
- React for interactive components
- Deployed on GitHub Pages

## Contact form

The contact page uses formsubmit.co to send messages directly to my inbox (tbm.smallwood@gmail.com) without a custom backend, which works well on GitHub Pages.

- The form posts to: https://formsubmit.co/tbm.smallwood@gmail.com
- A honeypot field (_honey) is included to reduce spam.
- Captcha is disabled for smoother UX; remove the `_captcha=false` input to enable reCAPTCHA.
- Successful submissions redirect to `/contact?success=1`, which displays a success banner.
- The first time a message is sent, formsubmit will email you to verify forwarding; approve once and you’re set.

If you prefer a dedicated backend (e.g., serverless function with SendGrid or Nodemailer), add it and update the form `action` accordingly.

## Development
Want to run it locally?

```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

Project structure (high-level):
- src/pages — routes and pages (including the resume page)
- src/components — React components and UI primitives
- public — static assets (including resume PDFs)

## Feedback
If something looks off or you have ideas, open an issue or reach out. Always improving.

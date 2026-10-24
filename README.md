# Mohamed Ashraf: Portfolio

React + TypeScript + Vite + Tailwind CSS. No backend, no trackers.

## Run locally
```
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Update content
Everything lives in `src/data/`: `profile.ts` (links, intro), `skills.ts` (skills and tools), `projects.ts`, `experience.ts` (training, hours, volunteering), `services.ts`.
To add a report or notebook link to a project, add an entry to its `links` array in `projects.ts`; the card and popup show it automatically. To use a real screenshot, put it in `public/images/` and swap it in for `ProjectVisual` in `Projects.tsx` and `ProjectModal.tsx`.
Impact numbers are computed from `projects.ts` and `experience.ts` (set `hoursValue` on a program to count its hours).
Fonts (Sora, Inter, JetBrains Mono) are bundled via `@fontsource`, so there are no external font requests.
To replace the CV, overwrite `public/Mohamed_Ashraf_CV.pdf`.

## Deploy
The build uses relative paths (`base: './'`), so `dist/` works on any static host.
- **Netlify:** build command `npm run build`, publish directory `dist` (or drag `dist/` into the Netlify dashboard).
- **Vercel:** import the repo; framework Vite; output `dist`.
- **GitHub Pages:** push the repo, then publish `dist/` (for example with the `gh-pages` package or a Pages workflow).

## Still needed to finalize
- Project screenshots (cards show clearly labeled illustrative previews).
- Report or notebook links for Formula 1, Machine Failure, Car Price, and the other projects without one.
- Organization logos and a profile photo (text monograms and an abstract visual are used for now).
- DEPI training hours (not counted in the hours metric).
- Bank Customer Churn Prediction: no details were available, so it is not included.
- Production domain, so `og:image` can use an absolute URL and a canonical link can be added.

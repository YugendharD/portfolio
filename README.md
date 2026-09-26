# Yugendhar Dommaraju - Portfolio

**Live:** [yugendhard.github.io/portfolio](https://yugendhard.github.io/portfolio/)

A single-page developer portfolio built from raw HTML, CSS, and JavaScript, no frameworks, no build tools, no dependencies. Every visual effect on this page is hand-written CSS.

## What's actually in it

- **Gradient hero typography** using `background-clip: text`, not an image
- **A floating 3D visual** built from layered `div`s and CSS 3D transforms (`perspective`, `rotateX/Y`, `preserve-3d`) - no canvas, no WebGL, no libraries
- **Cursor-driven parallax** on that visual, written in ~20 lines of vanilla JS
- **Staggered entrance animations** via CSS `animation-delay`, not a JS animation library
- **A full accessibility fallback**: every animation and the parallax effect are disabled via `prefers-reduced-motion`, checked in both CSS and JavaScript
- **Fully responsive**, tested and fixed down to 320px width - not just "shrunk," restructured (stacked nav, collapsed grids, resized visual)

## Why no framework

This didn't need one. A single static page with no client-side state or routing gets zero benefit from React or a bundler - it would only add build complexity for no functional gain. Using the right tool for the job here means using less tooling, not more.

## Stack

`HTML5` · `CSS3` (Grid, Flexbox, custom properties, 3D transforms) · vanilla `JavaScript`

## Structure



## Running locally

No build step. Clone it and open `index.html`, or serve it with any static server (e.g. VS Code's Live Server extension):

```bash
git clone https://github.com/YugendharD/portfolio.git
```

## Contact

- **Email:** yugendhardommaraju06@gmail.com
- **LinkedIn:** [yugendhar-dommaraju](https://www.linkedin.com/in/yugendhar-dommaraju-15b051327/)
- **GitHub:** [@YugendharD](https://github.com/YugendharD)
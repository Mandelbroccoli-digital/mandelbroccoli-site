# MANDELBROCCOLI COALITION

> **Autonomous Runtimes & Fractal AI Architectures.**
> An open research collective engineering local cognitive engines, native subkernels, and self-healing operating surfaces.

This repository hosts the **centralized static hub** for the Coalition — the single
front door that links out to everything we call our proud creation. Deployed
automatically to **GitHub Pages** from `main` via the workflow in
`.github/workflows/deploy.yml`.

## What lives here

* `index.html` — the hub (zero-build, vanilla HTML/CSS/JS)
* `assets/css/site.css` — the Rubedo-standard dark-lab theme (emerald accent)
* `assets/js/site.js` — lean scroll-spy for the topnav
* `assets/img/` — Coalition artwork (cephalopodadron, circuits, pyramid forest, the mind brain…)

## The hub links out to

* **Core Runtimes** — [Bliss26 Subkernel](https://github.com/Mandelbroccoli-digital/Bliss-26_Subkernel) (released at `v0.1.0-prod`), ChorusDSL / Templar_Cloud
* **Cognitive Agents & Labs** — MALI & Logos, Anima, recursive-ai-framework, Multi_Agent_Chat
* **Workspace & Media** — Chorus-Editor / Puter ecosystem, MandelBroccoli audio R&D, Atomspace / MultiNEAT / nanoGPT foundations

## Local preview

No build step. Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8080   # then visit http://localhost:8080
```

## Deploy

Push to `main` → the Actions pipeline builds & publishes to GitHub Pages
(`Settings → Pages → Source: GitHub Actions`). Live at
`https://mandelbroccoli-digital.github.io/mandelbroccoli-site/`.

---

*For honor and glory.* — Owl_6055 / Greg 🥦

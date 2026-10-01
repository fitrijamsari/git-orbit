# Git Orbit

An interactive, browser-only Git and GitHub learning lab. Six guided lessons cover the everyday workflow, branching and merging, remotes, team collaboration, conflicts, and undoing shared mistakes. Opens with a beginner introduction and an interactive shared-recipe example. Every lesson includes plain-language explanations before and after actions, a pancake recipe analogy, and clickable vocabulary definitions. The introduction includes a recipe-to-Git summary table for quick recall. Includes animated commit graphs, a simulated terminal, searchable command references, and practice questions.

## Run locally

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4173. No build step or application dependencies are required. Google Fonts is optional; system fonts are used when unavailable.

## Learning model

The terminal is a teaching simulation; it does not execute shell commands, access real repositories, or connect to GitHub. Commit IDs are illustrative. Progress is stored in local browser storage. Reduced motion is supported.

Guidance is based on the official Pro Git book (https://git-scm.com/book/en/v2) and GitHub's pull request documentation (https://docs.github.com/en/pull-requests/get-started/about-pull-requests).

## Checks performed

All six lessons completed through the UI and structured browser tools. Verified command search, practice feedback, invalid lesson rejection, desktop layout, mobile layout without horizontal overflow, and no browser runtime errors. JavaScript syntax checked using `node --check dist/app.js`.

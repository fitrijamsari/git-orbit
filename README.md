# Git Orbit

An interactive, browser-only Git and GitHub learning lab with two separate learning paths. Start with four solo lessons: initialize an empty folder, edit/stage/commit locally, experiment with branches, use your own GitHub repository, and correct a published mistake. The separate two-lesson team path starts by cloning an existing project, then introduces pull requests, reviews, and conflicts. Navigation, lesson numbering, progress, and continuation stay within the selected path. Solo completion offers an explicit, optional transition into teamwork.

The introduction uses a solo pancake recipe example and a solo-to-Git summary table; team concepts have a separate expandable table. Each lesson explains its replayable starting history, includes plain-language guidance before and after every action, and ends with a two-question recap with feedback, score, replay, and optional skip. Includes animated commit graphs, a simulated terminal, searchable command references, and practice questions. A file workbench displays the actual pancakes.txt contents beside the current saved snapshot, with animated green additions and red replacements. Working, staging, and GitHub tabs use distinct simulator snapshots. Edit, stage, commit, and push have separate lesson actions; commit inspection shows the saved file contents.

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

All six lessons and their twelve recap questions completed through the UI and structured browser tools. Verified solo ordering (start → branches → own GitHub → recovery), team ordering (clone and review → conflicts), explicit path completion, quiz replay/skip and incorrect-answer feedback, solo/team copy separation, desktop and mobile layouts, and no browser runtime errors. Verified file creation, staged snapshots preserved across subsequent edits, branch-specific recipe contents, online edits and local synchronization, combined team recipe contents, conflict markers/resolution, and restored flour after revert. All three JavaScript assets pass `node --check`.

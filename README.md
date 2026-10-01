# Git Orbit

An interactive, browser-only Git and GitHub learning lab with two separate learning paths. Start with four solo lessons: initialize an empty folder, edit/stage/commit locally, experiment with branches, use your own GitHub repository, and correct a published mistake. The separate two-lesson team path starts by cloning an existing project, then introduces pull requests, reviews, and conflicts. Navigation, lesson numbering, progress, and continuation stay within the selected path. Solo completion offers an explicit, optional transition into teamwork.

The introduction uses a solo pancake recipe example and a solo-to-Git summary table; team concepts have a separate expandable table. Each lesson opens with a dedicated overview of three learning goals, its prepared starting history, useful terms, and the outcome before the Start practice button reveals the lab. Overview can be reopened without resetting progress. Each lesson explains its replayable starting history, includes plain-language guidance before and after every action, and ends with a two-question recap with feedback, score, replay, and optional skip. Includes an animated chronological commit timeline with fixed main and feature lanes, visible split/merge connections, separate local/GitHub pointers, commit messages and authors, and explanations of fast-forward, fetch, push, and pull. Longer histories scroll horizontally without shrinking the diagram on mobile. The File and Terminal views share a compact upper workspace, capped at 280 pixels on desktop. The animated commit graph stays underneath and fills the remaining space instead of expanding the editor. The current command, Run button, and latest result remain accessible between them. The lesson guide offers Current step, All steps, and Notes views; smaller screens include it in a Lesson tab. Quizzes open in the same workspace with fixed navigation controls. The learning layout fits the viewport without page scrolling, while long histories and explanations use bounded internal scrolling. Editor and GitHub actions and conflict resolution choices are explicitly labeled. Typed commands, inspection shortcuts, and expandable lesson quick commands remain available. Also includes searchable command references, and practice questions. A file workbench displays the actual pancakes.txt contents beside the current saved snapshot, with animated green additions and red replacements. Working, staging, and GitHub tabs use distinct simulator snapshots. Edit, stage, commit, and push have separate lesson actions; commit inspection shows the saved file contents.

## Run locally

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4173. No build step or application dependencies are required. Google Fonts is optional; system fonts are used when unavailable.

## Cloudflare Pages

The deployable website is the `dist` folder. `wrangler.jsonc` configures a Pages project named `git-orbit-lab`.

For automatic updates, connect this repository in Cloudflare's **Workers & Pages → Create application → Pages → Import an existing Git repository** flow. Use these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | Leave blank |
| Build output directory | `dist` |
| Root directory | Repository root |

Push changes to `main` to update the production site. Cloudflare also creates preview deployments for other branches. Manage deployments and custom domains from the project's Pages dashboard.

For local development or a manual deployment to the configured project:

```sh
npm ci
npm run check
npm run dev
# Deploy after authenticating with npx wrangler login:
npm run deploy
```

Credentials stay in Wrangler's local login storage and must never be committed. The old `.openai/hosting.json` is retained as metadata for the previous Sites host; Cloudflare serves only `dist`.

## Learning model

The terminal is a teaching simulation; it does not execute shell commands, access real repositories, or connect to GitHub. Commit IDs are illustrative. Progress is stored in local browser storage. Reduced motion is supported.

Guidance is based on the official Pro Git book (https://git-scm.com/book/en/v2) and GitHub's pull request documentation (https://docs.github.com/en/pull-requests/get-started/about-pull-requests).

## Checks performed

All six lessons and their twelve recap questions completed through the UI and structured browser tools. Verified solo ordering (start → branches → own GitHub → recovery), team ordering (clone and review → conflicts), explicit path completion, quiz replay/skip and incorrect-answer feedback, solo/team copy separation, desktop and mobile layouts, and no browser runtime errors. Verified file creation, staged snapshots preserved across subsequent edits, branch-specific recipe contents, online edits and local synchronization, combined team recipe contents, conflict markers/resolution, and restored flour after revert. All three JavaScript assets pass `node --check`. Verified all six practices completed entirely through the upper terminal controls, typed initialization, quick-command editing/staging, desktop placement, mobile ordering/widths, and no browser runtime errors.

Verified all six practices reach the Quiz view with the graph remaining visible. Checked typed commands, tab switching, full recipe visibility at 1280 × 720, mobile page sizing at 390 × 844, and mobile quiz navigation remaining inside the workspace. No browser runtime errors.

Verified all six lesson overviews, explicit Start practice navigation, prepared save counts, practice completion, and continuation to the next lesson overview. Confirmed 1280 × 720 and 1440 × 984 practice fit, larger graph allocation (441 pixels at 984 height), and mobile intro/practice controls within 390 × 844. No browser runtime errors.

Quiz sizing is capped at 380 pixels on desktop, with remaining space reserved for the graph. Graph labels use the diagram’s natural dimensions rather than stretching to fill large panels. Verified quiz/graph allocation at 1654 × 977 (380 / 426 pixels), matching graph text across Terminal and Quiz, short-screen layout at 1280 × 720, and mobile feedback automatically revealed inside the quiz without moving the page. Answer navigation and continuation remain functional; JavaScript checks pass and no browser runtime errors were found.

# Git Orbit

An interactive, browser-only Git and GitHub learning lab with two separate learning paths. Start with four solo lessons: initialize an empty folder, edit/stage/commit locally, experiment with branches, use your own GitHub repository, and correct a published mistake. The separate two-lesson team path starts by cloning an existing project, then introduces pull requests, reviews, and conflicts. Navigation, lesson numbering, progress, and continuation stay within the selected path. Solo completion offers an explicit, optional transition into teamwork.

The introduction uses a solo pancake recipe example and a solo-to-Git summary table; team concepts have a separate expandable table. Each lesson opens with a dedicated overview of three learning goals, its prepared starting history, useful terms, and the outcome before the Start practice button reveals the lab. Overview can be reopened without resetting progress. Each lesson explains its replayable starting history, includes plain-language guidance before and after every action, and ends with a two-question recap with feedback, score, replay, and optional skip. Includes an animated chronological commit timeline with fixed main and feature lanes, visible split/merge connections, separate local/GitHub pointers, commit messages and authors, and explanations of fast-forward, fetch, push, and pull. Longer histories scroll horizontally without shrinking the diagram on mobile. The File and Terminal views share a compact upper workspace, capped at 280 pixels on desktop. The animated commit graph stays underneath and fills the remaining space instead of expanding the editor. The current command, Run button, and latest result remain accessible between them. The lesson guide offers Current step, All steps, and Notes views; smaller screens include it in a Lesson tab. Quizzes open in the same workspace with fixed navigation controls. The learning layout fits the viewport without page scrolling, while long histories and explanations use bounded internal scrolling. Editor and GitHub actions and conflict resolution choices are explicitly labeled. Typed commands, inspection shortcuts, and expandable lesson quick commands remain available. Also includes searchable command references, and practice questions. A file workbench displays the actual pancakes.txt contents beside the current saved snapshot, with animated green additions and red replacements. Working, staging, and GitHub tabs use distinct simulator snapshots. Edit, stage, commit, and push have separate lesson actions; commit inspection shows the saved file contents.

## Habits & workflows

The optional **Habits & workflows** sidebar section follows the beginner paths, with a link from path completion. It contains 33 decisions across five replayable modules:

- **Good Git habits:** inspect diffs, separate unrelated changes, write useful messages, name branches, and keep untracked private files out of commits.
- **Everyday problems:** preserve edits on the wrong branch, unstage a file, stash unfinished tracked work, integrate a rejected push, and revert a shared mistake.
- **GitHub Flow:** practice review feedback, a failed required check, follow-up commits, merge approval, and branch cleanup.
- **Gitflow:** follow feature integration, parallel development during release preparation, release tagging, and hotfix integration back into future work.
- **Tags & releases:** create and publish an annotated tag, describe a GitHub release, retain a tag as main advances, and distinguish releases from deployment.

The workflow diagrams build commit history one decision at a time. Branch pointers, release tags, and inspectable parent relationships show what each choice changes. All actions are guided simulations, separate from the terminal lab; they do not run commands or contact GitHub. Progress uses the independent `git-orbit-beyond-v1` browser storage key and supports resuming solved decisions after reload, completion, and replay. The six beginner lessons keep their original progress and numbering.

Gitflow is presented as an optional model for planned, versioned releases, with its creator’s guidance to consider simpler workflows for continuous delivery. Each module links to its Git or GitHub documentation, or the original Gitflow model and reflection. Graphs scroll horizontally without widening the page, keyboard controls are supported, and graph animation respects reduced motion.

## Branding

The selected orbital commits logo is shared by the sidebar, footer, lesson overview, and About dialog. Deployable assets live in `dist/assets/brand`, with a multi-size `dist/favicon.ico`, PNG favicons, an Apple touch icon, home-screen icons referenced by `dist/site.webmanifest`, and the selected concept as the social preview. Transparent source artwork and generation prompts are retained in `output/logo-concepts`.

Verified the logo on desktop and 390 × 844 mobile layouts, including lesson practice, with no page-width overflow or browser errors. All linked local assets, favicon sizes, image transparency, and manifest icon dimensions were checked. JavaScript checks and the existing six tests pass.

## Run locally

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4173. No build step or application dependencies are required. Google Fonts is optional; system fonts are used when unavailable.

## Cloudflare Pages

The deployable website is the `dist` folder. `wrangler.jsonc` configures a Pages project named `git-orbit-lab`.

The Pages project is connected to [fitrijamsari/git-orbit](https://github.com/fitrijamsari/git-orbit). The production site is [git-orbit-lab.pages.dev](https://git-orbit-lab.pages.dev). Manage it in the [Cloudflare Pages dashboard](https://dash.cloudflare.com/2d76be11b31c484b215bd57a0a6968b6/pages/view/git-orbit-lab).

The project uses these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | Leave blank |
| Build output directory | `dist` |
| Root directory | Repository root |

The production site is live. Local changes are published by the configured Git integration or a manual deployment. The Cloudflare Workers and Pages GitHub app now has saved access to this repository. Pages is configured to deploy pushes to `main` to production and other branches to preview URLs. You can also use `npm run deploy` to publish changes manually.

Manage deployments and custom domains from the project's Pages dashboard. In this checkout, `github` is the GitHub remote and `origin` retains the previous Sites source location:

```sh
npm run check
npm test
git push github main
```

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

Verified all 33 optional decisions through the browser, wrong-answer retry, saved solved/completed progress after reload, keyboard activation, desktop layout, and 390 × 844 mobile sizing with bounded graph scrolling. Confirmed the existing beginner lab opens normally and no browser runtime errors were reported. `npm test` covers graph ancestry and references, preservation of release/hotfix corrections, fixed release tags, decision completeness, and progress restoration with malformed or unavailable storage.

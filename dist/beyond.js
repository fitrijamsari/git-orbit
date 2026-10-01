// Optional exercises use their own progress and never mutate the beginner sandbox.
const beyondSources = {
  habits: ['Pro Git · contributing', 'https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project'],
  github: ['GitHub Flow guide', 'https://docs.github.com/en/get-started/using-github/github-flow'],
  gitflow: ['Gitflow model & reflection', 'https://nvie.com/posts/a-successful-git-branching-model/'],
  tags: ['Pro Git · tagging', 'https://git-scm.com/book/en/v2/Git-Basics-Tagging'],
  releases: ['GitHub · releases', 'https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases'],
  stash: ['Git stash reference', 'https://git-scm.com/docs/git-stash'],
  restore: ['Git restore reference', 'https://git-scm.com/docs/git-restore'],
  ignore: ['Git ignore reference', 'https://git-scm.com/docs/gitignore']
};
const beyondModules = [
  {
    id: 'habits', title: 'Good Git habits', category: 'START HERE', duration: '5 min',
    summary: 'Inspect your work, make focused commits, and leave a history others can understand.',
    takeaway: 'Inspect → select → inspect the staged diff → commit. Keep unrelated work separate and explain the purpose of each change.',
    sources: ['habits', 'ignore'],
    steps: [
      {
        title: 'Look before you save',
        story: 'You added chocolate chips and also changed the cooking time. Before staging, find out exactly what changed.',
        evidence: 'On branch main\nModified: pancakes.txt\n\n- Chocolate chips: none\n+ Chocolate chips: 1/2 cup\n- Cook until golden.\n+ Cook for 2 minutes per side.',
        choices: ['Inspect git status and git diff', 'Commit every file immediately', 'Push the working directory'], correct: 0,
        why: 'Status tells you which files changed. Diff shows unstaged edits. Neither command changes your files or saves a commit.',
        result: 'You spotted two separate improvements before choosing what belongs in the next commit.', command: 'git status\ngit diff'
      },
      {
        title: 'Give each commit one purpose',
        story: 'The chocolate variation and the cooking-time correction can be reviewed and undone independently. How would you save them?',
        evidence: 'Change A: add chocolate chips\nChange B: correct cooking time\nBoth changes are in pancakes.txt.',
        choices: ['One commit called “misc changes”', 'Two focused commits, selecting one change at a time', 'One commit for every individual character'], correct: 1,
        why: 'Group edits by purpose. Use git add -p to select hunks, splitting or editing a hunk if both changes appear together. Review git diff --staged before each commit. Related changes can span several files.',
        result: 'The recipe now has two meaningful saves: “Add chocolate chips” and “Correct pancake cooking time”.',
        command: 'git add -p pancakes.txt\ngit diff --staged\ngit commit -m "Add chocolate chips"'
      },
      {
        title: 'Leave a useful message',
        story: 'The old cooking time left the middle of each pancake raw. Which message would help a future teammate understand the correction?',
        evidence: 'The next commit changes the cooking instructions.\nReason: the previous time left the centre undercooked.',
        choices: ['“update stuff”', '“final final fix”', '“Correct cooking time to avoid undercooked pancakes”'], correct: 2,
        why: 'Describe the change and, when useful, why it matters. A team may choose a format such as Conventional Commits; Git does not require that format.',
        result: 'A future reader can understand the purpose without guessing from the diff.',
        command: 'git commit -m "Correct cooking time to avoid undercooked pancakes"'
      },
      {
        title: 'Name the work',
        story: 'You want to try a vegan recipe on a separate branch. Which name communicates its purpose?',
        evidence: 'One branch for one experiment.\nThe branch name should help your teammates find it.',
        choices: ['feature/vegan-pancakes', 'branch2', 'final-working-new'], correct: 0,
        why: 'A short, descriptive name helps people identify ongoing work. Prefixes such as feature/ and fix/ are optional team conventions, not special branch types.',
        result: 'Your experiment has a recognizable name and a clear purpose.', command: 'git switch -c feature/vegan-pancakes'
      },
      {
        title: 'Keep private files out',
        story: 'An untracked .env contains a private API key. You have not staged or committed it. What should you do before saving your recipe?',
        evidence: 'Modified: pancakes.txt\nUntracked: .env (private API key)\nUntracked: .gitignore',
        choices: ['Run git add . without checking', 'Ignore .env and stage the intended files explicitly', 'Commit the key and delete it later'], correct: 1,
        why: '.gitignore helps keep untracked private files out of future staging. It does not remove files already tracked or erase secrets from history. If a key was committed or exposed, revoke or rotate it and follow the provider’s recovery guidance.',
        result: 'Only pancakes.txt and .gitignore are selected. The private .env stays outside Git history.',
        command: '# Add .env to .gitignore, then:\ngit add pancakes.txt .gitignore\ngit diff --staged'
      }
    ]
  },
  {
    id: 'problems', title: 'Everyday problems', category: 'BUILD CONFIDENCE', duration: '6 min',
    summary: 'Choose a safe next step when work lands on the wrong branch or a push is rejected.',
    takeaway: 'Inspect first. Preserve unfinished work, understand remote changes, and choose recovery based on whether a change is already shared.',
    sources: ['stash', 'restore', 'habits'],
    steps: [
      {
        title: 'Edits on the wrong branch',
        story: 'You edited tracked pancakes.txt on main, but have not committed. The intended feature branch does not exist yet.',
        evidence: 'On branch main\nModified, not staged: pancakes.txt\nNo commits have been made for this experiment.',
        choices: ['Discard the file and start over', 'Create the feature branch from the current position', 'Force push main'], correct: 1,
        why: 'Creating a branch at the current commit carries these uncommitted edits with you. Then inspect, stage, and commit on the new branch. Moving commits already made on another branch needs a different recovery plan.',
        result: 'Your edits remain intact, and you are now on feature/vegan-pancakes.', command: 'git switch -c feature/vegan-pancakes\ngit status'
      },
      {
        title: 'The wrong file is staged',
        story: 'You accidentally staged notes.txt along with your recipe. You want to keep the notes on disk but leave them out of this commit.',
        evidence: 'Changes to be committed:\n  modified: pancakes.txt\n  modified: notes.txt',
        choices: ['git restore --staged notes.txt', 'git restore notes.txt', 'Delete notes.txt'], correct: 0,
        why: 'Restore with --staged updates the index using HEAD by default. Your working-file edits stay in place. Restore without --staged replaces working-file content and can discard unstaged edits.',
        result: 'Only pancakes.txt is staged. Your notes are still on disk.', command: 'git restore --staged notes.txt\ngit status'
      },
      {
        title: 'Pause unfinished work',
        story: 'Your tracked recipe edits are unfinished. An urgent task needs a clean working directory, and you want to return to the edits later.',
        evidence: 'On branch feature/vegan-pancakes\nTracked file modified: pancakes.txt\nUrgent task: fix the published cooking instructions.',
        choices: ['Throw away the edits', 'Save a named stash before switching', 'Push without making a commit'], correct: 1,
        why: 'Stash saves tracked local changes and cleans them from your worktree. Include -u if you also need untracked files. Return to this branch and use stash apply to reapply the work; conflicts can occur. Apply keeps the stash until you deliberately drop it.',
        result: 'Your unfinished work is parked locally. After the urgent task, return to the feature branch and reapply it.',
        command: 'git stash push -m "Vegan recipe in progress"\n# Later, back on the feature branch:\ngit stash apply\n# Verify the restored work before git stash drop'
      },
      {
        title: 'A push is rejected',
        story: 'Your feature branch and its remote counterpart both have new commits. Git rejects your push because it would overwrite remote history.',
        evidence: '! [rejected] feature/vegan-pancakes -> feature/vegan-pancakes\nReason: non-fast-forward\nYou have local commits; Maya also pushed new commits.',
        choices: ['Force push immediately', 'Delete Maya’s commits', 'Fetch, inspect, and merge the remote feature branch'], correct: 2,
        why: 'Fetch first so you can inspect both histories. In this exercise, merge the remote branch into your local feature branch, resolve any conflicts, test, then push. Some teams use rebase instead; agree on a policy before rewriting shared work.',
        result: 'Both contributions are preserved. After integration and checks, your push can include the combined history.',
        command: 'git fetch origin\ngit log --oneline --graph --all\ngit merge origin/feature/vegan-pancakes\n# Resolve conflicts and run checks, then push'
      },
      {
        title: 'Undo a shared mistake',
        story: 'The latest commit removed flour. It has already been merged into the shared main branch. Others may have pulled it.',
        evidence: 'Shared main:\n  b2 Remove flour by mistake\n  a1 Start pancake recipe',
        choices: ['Reset main and force push', 'Create a revert commit and propose the correction', 'Delete the repository'], correct: 1,
        why: 'Revert records a correction without erasing the shared commit. On a protected main branch, make the correction on a branch and open a pull request. This scenario has an ordinary single-parent commit; reverting a merge requires choosing a mainline parent.',
        result: 'The fix can be reviewed, and the earlier mistake remains visible in history.',
        command: 'git switch -c fix/restore-flour\ngit revert HEAD\ngit push -u origin fix/restore-flour\n# Open a pull request to main'
      }
    ]
  },
  {
    id: 'github', title: 'GitHub Flow', category: 'EVERYDAY TEAMWORK', duration: '6 min',
    summary: 'Take one small improvement through feedback, checks, merging, and branch cleanup.',
    takeaway: 'Use a focused branch, invite feedback, address it, pass the agreed checks, and merge. Keep the default branch ready for the team’s release process.',
    sources: ['github'],
    lanes: [['main', 'Shared accepted recipe'], ['feature', 'Your chocolate variation']],
    initial: {nodes: [{id:'a1',lane:'main',label:'Classic recipe',parents:[]}], refs: {main:'a1'}},
    steps: [
      {title:'Make space for the idea', story:'The shared main recipe is ready to use. Start your chocolate variation from the current main.', choices:['Create feature/chocolate-pancakes', 'Edit the shared main without review'],correct:0,
        why:'A focused branch gives the team a place to review the proposed change.',result:'The feature branch starts at the same saved recipe as main. Creating a branch creates no commit.',command:'git switch -c feature/chocolate-pancakes',refs:{feature:'a1'},status:'Feature branch created'},
      {title:'Save and publish a small change',story:'You added chocolate chips. Inspect the diff, stage the intended change, commit, and publish your branch.',choices:['Push the unsaved edits','Inspect, stage, commit, and push'],correct:1,
        why:'Push sends commits. The feature branch can be published while main keeps the accepted recipe.',result:'Your chocolate variation is available for review. Main still points to the classic recipe.',command:'git diff\ngit add pancakes.txt\ngit diff --staged\ngit commit -m "Add chocolate chips"\ngit push -u origin feature/chocolate-pancakes',add:[{id:'b1',lane:'feature',label:'Add chocolate',parents:['a1']}],refs:{feature:'b1'},status:'Branch published'},
      {title:'Explain the proposal',story:'You are ready for feedback. The team needs to understand what changed and how you checked it.',choices:['Open a pull request with purpose and checks','Merge immediately'],correct:0,
        why:'A pull request starts the review conversation. Explain the problem, the change, and your validation.',result:'PR #12 is open: “Add a chocolate variation”. A review and the recipe checks are requested.',command:'GitHub action: open feature/chocolate-pancakes → main',status:'PR #12 · review requested'},
      {title:'Respond to feedback',story:'Maya requests a change: the mixing instructions never say when to add the chocolate chips. What happens next?',evidence:'Maya: “Please add the chips after mixing the batter.”\nReview: changes requested',choices:['Close the PR and open a new one','Merge despite the request','Commit the correction and push to the same branch'],correct:2,
        why:'New commits pushed to the PR branch update the existing proposal. The review conversation stays together.',result:'The instructions now include the chips. The same PR contains your follow-up commit.',command:'git add pancakes.txt\ngit commit -m "Explain when to add chocolate chips"\ngit push',add:[{id:'b2',lane:'feature',label:'Clarify mixing',parents:['b1']}],refs:{feature:'b2'},status:'PR updated · awaiting checks'},
      {title:'A check catches a mistake',story:'The required recipe check fails: the ingredient list says “Chocolate chips” but the instructions refer to “Cocoa chips”. The merge gate is blocked.',evidence:'Required check: recipe-consistency\nFAILED: instruction ingredient missing from list\nMerge blocked',choices:['Fix the mismatch and rerun the check','Disable the required check'],correct:0,
        why:'A failed check is useful feedback. Correct the change and rerun it so the team can assess a consistent recipe.',result:'The mismatch is fixed in a new commit. The simulated check passes, and Maya approves the corrected proposal.',command:'git add pancakes.txt\ngit commit -m "Use consistent chocolate ingredient name"\ngit push\nGitHub action: rerun recipe-consistency',add:[{id:'b3',lane:'feature',label:'Fix ingredient',parents:['b2']}],refs:{feature:'b3'},status:'Checks passed · review approved'},
      {title:'Accept the reviewed change',story:'The required check passed and Maya approved. This repository uses merge commits. Include the variation in main.',choices:['Merge the approved PR','Push the branch again to merge automatically'],correct:0,
        why:'Publishing a branch and accepting its PR are separate actions. A merge commit here links the prior main and the feature history; repositories can also choose squash or rebase merging.',result:'Main now includes the chocolate variation and its reviewed corrections. Deployment requires a configured release or deployment process.',command:'GitHub action: merge PR #12',add:[{id:'m1',lane:'main',label:'Merge PR #12',parents:['a1','b3']}],refs:{main:'m1'},status:'PR #12 · merged'},
      {title:'Clean up and sync',story:'The feature is merged. You have no uncommitted edits, and your local main can fast-forward to the accepted history.',choices:['Delete the merged branch and update local main','Keep using the old branch for unrelated features'],correct:0,
        why:'Delete the finished remote branch through the PR, switch to main, pull, and remove the merged local branch. The merged commits remain reachable from main.',result:'Main contains the accepted work. The finished feature pointer is gone; its commits remain in the diagram.',command:'GitHub action: delete the PR branch\ngit switch main\ngit pull --ff-only origin main\ngit branch -d feature/chocolate-pancakes',refs:{feature:null},status:'Local main updated · feature branch deleted'}
    ]
  },
  {
    id:'gitflow',title:'Gitflow',category:'OPTIONAL · RELEASE TEAMS',duration:'8 min',
    summary:'Prepare a versioned release while development continues, then carry a hotfix into future work.',
    takeaway:'Release and hotfix corrections must reach ongoing development too. These roles are conventions for ordinary branches, and they add coordination work.',
    sources:['gitflow'],
    note:'Gitflow can suit planned, versioned releases. For continuously delivered apps, its creator recommends considering a simpler workflow such as GitHub Flow. Choose based on the project; no model fits every team.',
    lanes:[['main','Released recipe history'],['hotfix','Urgent correction to a release'],['release','Final preparation for a version'],['develop','Integration for the next version'],['feature','One new recipe idea']],
    initial:{nodes:[{id:'a1',lane:'main',label:'Recipe v0.1',parents:[]}],refs:{main:'a1',develop:'a1'},tags:{'v0.1':'a1'}},
    steps:[
      {title:'Start a feature from develop',story:'Recipe v0.1 is released. Main and develop both point to it. The chocolate variation belongs to the next planned release.',choices:['Branch from develop','Branch from an unrelated old commit'],correct:0,
        why:'In this model, features start from develop and return there. The branch initially shares its starting commit.',result:'Feature starts at a1. Main still represents the released version.',command:'git switch develop\ngit switch -c feature/chocolate-pancakes',refs:{feature:'a1'},status:'Preparing the next version'},
      {title:'Save the feature',story:'The chocolate variation is ready. Save it on the feature branch.',choices:['Commit the variation on feature','Move the v0.1 tag to the new work'],correct:0,
        why:'A release tag identifies the earlier released version. New work belongs in new commits.',result:'Feature has one new commit; the v0.1 tag remains on a1.',command:'git add pancakes.txt\ngit commit -m "Add chocolate variation"',add:[{id:'f1',lane:'feature',label:'Add chocolate',parents:['a1']}],refs:{feature:'f1'}},
      {title:'Integrate the feature',story:'The team reviewed the variation. Bring it into the next version’s integration branch.',choices:['Merge feature into main immediately','Merge feature into develop'],correct:1,
        why:'Develop collects accepted work for the next release. This example uses --no-ff so the graph records the integration.',result:'Develop includes the variation. The merged feature branch can be deleted.',command:'git switch develop\ngit merge --no-ff feature/chocolate-pancakes\ngit branch -d feature/chocolate-pancakes',add:[{id:'d1',lane:'develop',label:'Integrate feature',parents:['a1','f1']}],refs:{develop:'d1',feature:null}},
      {title:'Prepare v1.0 separately',story:'The planned features for v1.0 are integrated. Final release checks need a stable place while development continues.',choices:['Create release/1.0 from develop','Freeze all work forever'],correct:0,
        why:'A release branch holds final fixes and release preparation. Major new features continue on develop for a later version.',result:'Release starts at d1. It shares that commit with develop until either branch gains new work.',command:'git switch develop\ngit switch -c release/1.0',refs:{release:'d1'},status:'Release v1.0 · final preparation'},
      {title:'Continue future development',story:'While v1.0 is being checked, the team accepts a new serving suggestion for the next version.',choices:['Add new scope to release/1.0','Save future work on develop'],correct:1,
        why:'Keeping new scope on develop lets the release branch finish its agreed version.',result:'Develop moves ahead. Release remains at d1, ready for final v1.0 fixes.',command:'git switch develop\n# Integrate the reviewed serving suggestion',add:[{id:'d2',lane:'develop',label:'Serving idea',parents:['d1']}],refs:{develop:'d2'}},
      {title:'Fix the release candidate',story:'Final testing finds a spelling mistake. Correct it on release/1.0.',choices:['Commit the release fix on release/1.0','Change the old release tag'],correct:0,
        why:'Final corrections belong on the release branch, then need to be carried into the released and future histories.',result:'Release has the spelling correction. Develop’s new serving idea stays separate.',command:'git switch release/1.0\ngit add pancakes.txt\ngit commit -m "Correct release spelling"',add:[{id:'r1',lane:'release',label:'Release fix',parents:['d1']}],refs:{release:'r1'}},
      {title:'Record the released version',story:'The v1.0 candidate passes the team’s checks. Accept it into main and mark the release.',choices:['Merge release into main and tag v1.0','Tag develop’s future work as v1.0'],correct:0,
        why:'The tag must identify the accepted release commit. Merging and tagging do not themselves deploy an app.',result:'Main now contains v1.0. Its tag points to the new merge commit; v0.1 remains on a1.',command:'git switch main\ngit merge --no-ff release/1.0\ngit tag -a v1.0 -m "Recipe 1.0"',add:[{id:'m1',lane:'main',label:'Release v1.0',parents:['a1','r1']}],refs:{main:'m1'},tags:{'v1.0':'m1'},status:'v1.0 recorded · publish through team release process'},
      {title:'Carry the release fix forward',story:'Develop has the serving idea but still needs the release spelling fix.',choices:['Delete the release branch immediately','Merge release back into develop, then delete it'],correct:1,
        why:'Back-merging keeps future versions from reintroducing a bug already fixed in a release.',result:'Develop contains both the serving idea and the release correction. Release’s commits remain in history after its pointer is deleted.',command:'git switch develop\ngit merge --no-ff release/1.0\ngit branch -d release/1.0',add:[{id:'d3',lane:'develop',label:'Carry release fix',parents:['d2','r1']}],refs:{develop:'d3',release:null}},
      {title:'Fix a released mistake',story:'After publishing v1.0, a cooking-time mistake is reported. Future development is not ready for release. Where should the urgent fix start?',choices:['Create hotfix/1.0.1 from main and save the correction','Release all unfinished develop work'],correct:0,
        why:'A hotfix starts from the released history so unrelated future changes stay out of the correction.',result:'The hotfix corrects v1.0 independently of develop.',command:'git switch main\ngit switch -c hotfix/1.0.1\ngit add pancakes.txt\ngit commit -m "Correct cooking time"',add:[{id:'h1',lane:'hotfix',label:'Cooking fix',parents:['m1']}],refs:{hotfix:'h1'},status:'Urgent fix · future work stays separate'},
      {title:'Record the patch release',story:'The hotfix passes its checks. Bring it into released history and identify version 1.0.1.',choices:['Merge hotfix into main and tag v1.0.1','Overwrite the v1.0 tag'],correct:0,
        why:'A new tag distinguishes the corrected release from the earlier version.',result:'Main contains the hotfix. Both v1.0 and v1.0.1 identify their original release commits.',command:'git switch main\ngit merge --no-ff hotfix/1.0.1\ngit tag -a v1.0.1 -m "Cooking-time patch"',add:[{id:'m2',lane:'main',label:'Release v1.0.1',parents:['m1','h1']}],refs:{main:'m2'},tags:{'v1.0.1':'m2'}},
      {title:'Keep the correction in future versions',story:'There is no active release branch now. Develop must receive the hotfix too.',choices:['Merge hotfix into develop, then delete hotfix','Leave develop with the cooking mistake'],correct:0,
        why:'Without this integration, the next release could bring the mistake back. If a release branch were active, the original model routes the fix into that release branch, which later carries it back to develop.',result:'Main has the patch; develop has the patch and future work. The temporary hotfix pointer is removed.',command:'git switch develop\ngit merge --no-ff hotfix/1.0.1\ngit branch -d hotfix/1.0.1',add:[{id:'d4',lane:'develop',label:'Carry hotfix',parents:['d3','h1']}],refs:{develop:'d4',hotfix:null},status:'Released and future histories both contain the fix'}
    ]
  },
  {
    id:'releases',title:'Tags & releases',category:'MAKE IT SHIP',duration:'4 min',
    summary:'Mark an accepted version, share its tag, and distinguish a release from deployment.',
    takeaway:'A branch moves as work is accepted. A release tag identifies a chosen commit. Publishing a tag, creating a GitHub release, and deploying are distinct actions.',
    sources:['tags','releases'],
    lanes:[['main','Accepted recipe history']],
    initial:{nodes:[{id:'a1',lane:'main',label:'Accepted recipe',parents:[]}],refs:{main:'a1'}},
    steps:[
      {title:'Mark the version you checked',story:'The accepted main recipe passed your release checks. Give this exact commit the version label v1.0.0.',choices:['Create an annotated tag','Rename main to v1.0.0'],correct:0,
        why:'An annotated tag records release metadata and identifies a specific commit. Branches serve a different purpose: tracking ongoing work.',result:'The local v1.0.0 tag identifies a1. No new commit was created.',command:'git tag -a v1.0.0 -m "First recipe release"',tags:{'v1.0.0':'a1'},status:'Tag exists locally'},
      {title:'Share the tag deliberately',story:'You pushed main earlier, but created v1.0.0 afterward. How do you share this tag with the remote?',choices:['Assume the earlier push included it','Push the named tag'],correct:1,
        why:'An ordinary branch push does not automatically publish newly created tags. Push the specific tag you intend to share.',result:'The remote can now identify the same v1.0.0 commit.',command:'git push origin v1.0.0',status:'Tag published to origin'},
      {title:'Describe the release',story:'Your GitHub users need a readable description and downloadable release assets, if your project produces them.',choices:['Create a GitHub release from the published tag','Make another commit just to copy the tag'],correct:0,
        why:'A GitHub release adds notes and optional assets around a tag. A tag alone is a Git reference, not a release page.',result:'The simulated release page identifies v1.0.0 and explains what changed.',command:'GitHub action: create release from v1.0.0\nNotes: classic recipe and checked cooking instructions',status:'Release published · deployment pending'},
      {title:'Main moves; the version stays identifiable',story:'The team merges a new serving suggestion after v1.0.0. What should happen to the existing tag?',choices:['Move v1.0.0 to every new main commit','Keep v1.0.0 on the original release commit'],correct:1,
        why:'An established release label should continue identifying the version users received. New work advances main; a later release gets a new tag.',result:'Main moves to a2. The v1.0.0 tag still identifies a1.',command:'# Integrate the reviewed serving suggestion on main',add:[{id:'a2',lane:'main',label:'Serving idea',parents:['a1']}],refs:{main:'a2'}},
      {title:'Release does not automatically mean deployed',story:'A release page exists, but this project has no deployment automation connected to tag or release events. Is the website updated?',choices:['Yes, every Git tag deploys automatically','No, use the project’s configured deployment process'],correct:1,
        why:'Git records versions. A hosting or delivery system must build and deploy the selected version. Projects may configure automation for tags, releases, or branches; the trigger depends on their setup.',result:'You choose the tested release commit for the team’s deployment process. The release label and the deployed version can be checked against each other.',command:'Team action: build and deploy the selected release\n# Git has no universal deploy command',status:'Release selected for the team deployment process'}
    ]
  }
];
const beyondProgress = {};
let beyondSelected = null;
try {
  const saved = JSON.parse(localStorage.getItem('git-orbit-beyond-v1') || '{}');
  for (const module of beyondModules) {
    const entry = saved?.[module.id];
    if (entry && Number.isInteger(entry.step) && entry.step >= 0 && entry.step <= module.steps.length) {
      beyondProgress[module.id] = {step:entry.step, solved:entry.step < module.steps.length && entry.solved === true, choice:null};
    }
  }
} catch { /* Exercises also work without browser storage. */ }
function beyondEntry(module) {
  return beyondProgress[module.id] ||= {step:0, solved:false, choice:null};
}
function saveBeyondProgress() {
  try { localStorage.setItem('git-orbit-beyond-v1', JSON.stringify(beyondProgress)); } catch {}
}
function beyondSnapshot(module, count) {
  const snapshot = {nodes: [...(module.initial?.nodes || [])], refs:{...module.initial?.refs}, tags:{...module.initial?.tags}, status:'Prepared starting history'};
  for (const item of module.steps.slice(0, count)) {
    snapshot.nodes.push(...(item.add || []));
    Object.assign(snapshot.refs, item.refs);
    Object.assign(snapshot.tags, item.tags);
    if (item.status) snapshot.status = item.status;
  }
  return snapshot;
}
function beyondGraph(module, snapshot) {
  const width = Math.max(530, 170 + snapshot.nodes.length * 115), height = 62 + module.lanes.length * 70;
  const colors = {main:'#63e9c3',feature:'#bba2fa',develop:'#75b9ff',release:'#72d4dd',hotfix:'#f3aa6e'};
  const points = new Map(snapshot.nodes.map((node,index) => [node.id, {x:140+index*115, y:55+module.lanes.findIndex(lane=>lane[0]===node.lane)*70}]));
  const lines = module.lanes.map(([lane]) => {const y=55+module.lanes.findIndex(item=>item[0]===lane)*70;return `<text x="14" y="${y+4}" fill="${colors[lane]}">${lane}</text><path d="M 110 ${y} H ${width-20}" stroke="#233442" stroke-dasharray="4 6"/>`;}).join('');
  const edges = snapshot.nodes.map(node=>node.parents.map(parent=>{const from=points.get(parent),to=points.get(node.id);return `<path d="M ${from.x} ${from.y} C ${from.x+45} ${from.y}, ${to.x-45} ${to.y}, ${to.x} ${to.y}" stroke="${colors[node.lane]}" stroke-width="2" opacity=".7"/>`;}).join('')).join('');
  const nodes = snapshot.nodes.map(node=>{const p=points.get(node.id);return `<g><title>${escapeHTML(node.label)} · ${node.id}</title><circle cx="${p.x}" cy="${p.y}" r="9" fill="${colors[node.lane]}"/><text x="${p.x}" y="${p.y+27}" text-anchor="middle" fill="#c9d8e3">${node.id}</text></g>`;}).join('');
  return `<section class="beyond-history" aria-label="Workflow history"><div class="beyond-history-head"><strong>Saved history</strong><span>Older ← scroll → newer</span></div><div class="beyond-graph-scroll" tabindex="0" role="region" aria-label="Scrollable branch diagram"><svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHTML(module.title)} commit history: ${snapshot.nodes.map(n=>n.id+' '+n.label).join(', ')}"><g font-family="monospace" font-size="12" fill="none">${lines}${edges}${nodes}</g></svg></div><div class="beyond-refs">${Object.entries(snapshot.refs).filter(([,id])=>id).map(([lane,id])=>`<span><i style="background:${colors[lane]}"></i>${lane} → ${id}</span>`).join('')}${Object.entries(snapshot.tags).map(([tag,id])=>`<span class="beyond-tag">◇ ${tag} → ${id}</span>`).join('')}</div><p class="beyond-history-status">${escapeHTML(snapshot.status)}</p><details class="beyond-commits"><summary>Inspect ${snapshot.nodes.length} saved ${snapshot.nodes.length===1?'commit':'commits'}</summary><ol>${snapshot.nodes.map(node=>`<li><code>${node.id}</code><span>${escapeHTML(node.label)}<small>${node.parents.length?'Parents: '+node.parents.join(' + '):'Starting commit · no parent'}</small></span></li>`).join('')}</ol></details></section>`;
}
function beyondSourceLinks(module) {
  return `<div class="beyond-sources">Read the source: ${module.sources.map(key=>{const [label,url]=beyondSources[key];return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;}).join('')}</div>`;
}
function renderBeyond() {
  const root=document.querySelector('#beyond-view');
  const finished=beyondModules.filter(module=>beyondEntry(module).step===module.steps.length).length;
  if (!beyondSelected) {
    root.innerHTML=`<div class="beyond-heading"><span class="section-kicker">AFTER THE BASICS · OPTIONAL PRACTICE</span><h2 id="beyond-overview-title" tabindex="-1">Build habits. Choose a workflow.</h2><p>You know the actions. Now practice the decisions behind them. Start with good habits, then explore how teams review and release their work.</p><span class="beyond-count">${finished} / ${beyondModules.length} modules complete · progress saved in this browser</span></div><div class="beyond-module-grid">${beyondModules.map((module,index)=>{const entry=beyondEntry(module),complete=entry.step===module.steps.length;return `<article class="beyond-module-card"><span class="section-kicker">${String(index+1).padStart(2,'0')} · ${module.category}</span><h3>${module.title}</h3><p>${module.summary}</p><small>${module.duration} · ${module.steps.length} decisions</small><button class="${index===0?'primary-button':'quiet-button'}" data-beyond-open="${module.id}">${complete?'Review module':entry.step||entry.solved?'Continue module':'Start module'} <span>${complete?'✓':'→'}</span></button>${entry.step||entry.solved?`<span class="beyond-card-progress">${complete?'Complete':`${entry.step+Number(entry.solved)} / ${module.steps.length} decisions practiced`}</span>`:''}</article>`;}).join('')}</div><div class="beyond-comparison"><h3>Which workflow fits?</h3><div class="beyond-table-scroll"><table><caption>Choose by how your team integrates and releases work.</caption><thead><tr><th>Workflow</th><th>Branch structure</th><th>Consider it when…</th></tr></thead><tbody><tr><th>GitHub Flow</th><td>Main + focused feature branches</td><td>You want a simple review process and frequent delivery.</td></tr><tr><th>Gitflow</th><td>Main + develop + feature, release, and hotfix branches</td><td>You prepare planned versions while future development continues.</td></tr></tbody></table></div><p>These are team conventions, not extra rules built into Git. Merging into main deploys only when your project has configured that automation.</p><a href="${beyondSources.gitflow[1]}" target="_blank" rel="noopener noreferrer">Why Gitflow’s creator recommends choosing by context ↗</a></div>`;
    return;
  }
  const module=beyondModules.find(item=>item.id===beyondSelected),entry=beyondEntry(module),complete=entry.step===module.steps.length;
  const item=module.steps[entry.step],snapshot=beyondSnapshot(module,entry.step+Number(entry.solved));
  const next=beyondModules[beyondModules.indexOf(module)+1];
  root.innerHTML=`<div class="beyond-exercise-heading"><button class="beyond-back" data-beyond-home>← All modules</button><span>${module.category} · ${module.duration}</span><h2 id="beyond-title" tabindex="-1">${module.title}</h2><p>${module.summary}</p></div><nav class="beyond-module-nav" aria-label="Optional practice modules">${beyondModules.map(m=>`<button data-beyond-open="${m.id}" ${m.id===module.id?'aria-current="page"':''}>${m.title}${beyondEntry(m).step===m.steps.length?' ✓':''}</button>`).join('')}</nav>${module.note?`<p class="beyond-context">${module.note}</p>`:''}<div class="beyond-exercise-grid"><div>${module.lanes?beyondGraph(module,snapshot):`<section class="beyond-evidence"><span class="section-kicker">${complete?'TAKE IT INTO YOUR NEXT PROJECT':'YOUR STARTING SITUATION'}</span><pre>${escapeHTML(complete?module.takeaway:item.evidence)}</pre></section>`}${module.lanes?`<details class="beyond-roles"><summary>What each branch is for</summary>${module.lanes.map(([lane,role])=>`<p><code>${lane}</code> ${role}</p>`).join('')}<small>Branch names describe roles. They are ordinary Git branches.</small></details>`:''}</div><section class="beyond-decision" aria-labelledby="beyond-step-title">${complete?`<span class="section-kicker">MODULE COMPLETE</span><h3 id="beyond-step-title" tabindex="-1">Ready to use these ideas.</h3><p>${module.takeaway}</p><div class="beyond-completion">✓ ${module.steps.length} decisions practiced. Replay any time.</div><button class="primary-button" ${next?`data-beyond-open="${next.id}"`:'data-beyond-home'}>${next?'Next: '+next.title:'Return to all modules'} <span>→</span></button><button class="beyond-replay" data-beyond-replay>Replay this module</button>`:`<div class="beyond-step-meta"><span>DECISION ${entry.step+1} / ${module.steps.length}</span><button data-beyond-replay>Restart module</button></div><div class="beyond-step-track" aria-label="${entry.step+Number(entry.solved)} of ${module.steps.length} decisions practiced">${module.steps.map((_,index)=>`<i class="${index<entry.step||index===entry.step&&entry.solved?'done':index===entry.step?'current':''}"></i>`).join('')}</div><h3 id="beyond-step-title" tabindex="-1">${item.title}</h3><p>${item.story}</p>${module.lanes&&item.evidence?`<pre class="beyond-check-output">${escapeHTML(item.evidence)}</pre>`:''}<div class="beyond-choices" role="group" aria-label="Choose your next action">${item.choices.map((choice,index)=>`<button data-beyond-choice="${index}" ${entry.solved?'disabled':''} class="${entry.solved&&index===item.correct?'correct':entry.choice===index?'incorrect':''}"><span>${String.fromCharCode(65+index)}</span>${escapeHTML(choice)}</button>`).join('')}</div><div id="beyond-feedback" class="beyond-feedback ${entry.solved?'correct':entry.choice!==null?'incorrect':''}" role="status">${entry.solved?`<strong>That’s the next step.</strong><p>${item.why}</p><div class="beyond-result"><strong>What changed</strong><p>${item.result}</p></div><pre>${escapeHTML(item.command)}</pre>`:entry.choice!==null?`<strong>Try another action.</strong><p>${item.why}</p>`:'Choose an action to see its effect and explanation.'}</div>${entry.solved?`<button class="primary-button" data-beyond-next>${entry.step===module.steps.length-1?'Finish module':'Next decision'} <span>→</span></button>`:''}`}</section></div>${beyondSourceLinks(module)}<p class="beyond-simulation">Guided simulation · these decisions do not run commands or connect to GitHub.</p>`;
}
function focusBeyond(selector) {
  const target=document.querySelector(selector);
  target?.focus({preventScroll:true});
  target?.scrollIntoView({block:'nearest',behavior:'auto'});
}
document.addEventListener('click',event=>{
  const button=event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-beyond-home')) {beyondSelected=null;renderBeyond();focusBeyond('#beyond-overview-title');}
  if (button.dataset.beyondOpen && beyondModules.some(module=>module.id===button.dataset.beyondOpen)) {
    beyondSelected=button.dataset.beyondOpen;
    renderBeyond();focusBeyond('#beyond-title');
  }
  const module=beyondModules.find(item=>item.id===beyondSelected);
  if (!module) return;
  const entry=beyondEntry(module);
  if (button.hasAttribute('data-beyond-choice') && !entry.solved && entry.step<module.steps.length) {
    entry.choice=Number(button.dataset.beyondChoice);
    entry.solved=entry.choice===module.steps[entry.step].correct;
    saveBeyondProgress();renderBeyond();
    const announcement=document.querySelector('#beyond-announcement');
    if(announcement)announcement.textContent=entry.solved?'Correct. '+module.steps[entry.step].result:'Try another action. '+module.steps[entry.step].why;
    if (entry.solved) {focusBeyond('[data-beyond-next]');const graph=document.querySelector('.beyond-graph-scroll');if(graph)graph.scrollLeft=graph.scrollWidth;}
    else {focusBeyond(`[data-beyond-choice="${entry.choice}"]`);}
  }
  if (button.hasAttribute('data-beyond-next') && entry.solved && entry.step<module.steps.length) {
    entry.step++;entry.solved=false;entry.choice=null;
    saveBeyondProgress();renderBeyond();focusBeyond('#beyond-step-title');
    const graph=document.querySelector('.beyond-graph-scroll');if(graph)graph.scrollLeft=graph.scrollWidth;
  }
  if (button.hasAttribute('data-beyond-replay')) {
    beyondProgress[module.id]={step:0,solved:false,choice:null};
    saveBeyondProgress();renderBeyond();focusBeyond('#beyond-step-title');
  }
});

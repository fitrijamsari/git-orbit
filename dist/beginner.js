// File changes stay visible through separate edit, stage, and commit actions.
const beginnerGuides = [
 {
  "title": "Start from zero",
  "description": "Start with an empty folder on your computer. Turn on Git tracking, write a pancake recipe, and create your first saved version. Everything in this lesson stays on your computer.",
  "analogy": "An empty recipe folder, ready for its first version",
  "story": "You are inside a new folder named pancake-project. There is no recipe file or saved history yet. Git init prepares the history keeper; you create the first saved version by editing, staging, and committing.",
  "terms": [
   "Init",
   "Working directory",
   "Staging area",
   "Commit"
  ],
  "steps": [
   [
    "Start Git tracking",
    "Initialize the repository"
   ],
   [
    "Write your first recipe",
    "Create pancakes.txt"
   ],
   [
    "Choose what to save",
    "Stage the recipe file"
   ],
   [
    "Create your first save",
    "Make the first commit"
   ]
  ],
  "before": [
   "Start Git tracking in this empty folder. Think of it as setting up a place to keep recipe history. It does not write the recipe or create a saved version.",
   "Create pancakes.txt with a classic pancake recipe: flour, milk, and cooking instructions. This is just a file on your computer. Git has not saved it yet.",
   "Select pancakes.txt for your first saved version. Git calls this staging: choosing the file content that the next commit will record.",
   "Save the selected recipe with the note “Start pancake recipe”. This creates your first commit. Watch the first circle appear; it stays on your computer."
  ],
  "after": [
   "Git tracking is ready, and the history is still empty. Git init creates a hidden .git folder for Git’s records; it does not create a commit.",
   "Your classic recipe file exists. It is untracked: Git has not selected or committed it. There are still zero saved versions.",
   "The recipe is staged and ready to save. There are still zero commits; staging is preparation, not saving.",
   "You created saved version 1 yourself. This root commit has no parent because it is the beginning of your recipe history."
  ],
  "commandNotes": [
   "git init -b main initializes Git here. -b main chooses the initial branch name. In real use, install Git and open a terminal inside your project folder first.",
   "“edit” is a lab action, not a Git command. In real use, create this text file in an editor.",
   "git add pancakes.txt selects the file’s current content for the commit.",
   "git commit -m \"Start pancake recipe\" saves it with a note. Real Git may first ask you to set user.name and user.email as the commit author."
  ],
  "insight": [
   "Setup is not a saved version",
   "Git init starts tracking. Git add chooses file content. Git commit creates the first saved version. GitHub comes later."
  ],
  "hint": "Your first circle appears only when you create your first commit."
 },
 {
  "title": "Try an idea",
  "description": "You want to try a new idea while keeping your original work. Create a separate line of saved versions, then bring the idea back when it is ready.",
  "analogy": "Classic pancakes and a chocolate experiment",
  "story": "main is your main recipe. feature is a place to develop the chocolate variation separately. Both start from the same saved recipe. A branch is a name pointing to a version; Git does not duplicate every file to create it.",
  "terms": [
   "Branch",
   "main",
   "HEAD",
   "Merge"
  ],
  "steps": [
   [
    "Start a recipe experiment",
    "Create a branch"
   ],
   [
    "Edit the recipe",
    "Add chocolate chips to the working file"
   ],
   [
    "Select the changed recipe",
    "Stage these exact contents"
   ],
   [
    "Save the chocolate variation",
    "Commit the staged recipe"
   ],
   [
    "Return to your main recipe",
    "Switch to main"
   ],
   [
    "Bring the idea into main",
    "Merge the branch"
   ]
  ],
  "before": [
   "Create a branch named feature for your chocolate variation. main and feature initially point to the same saved recipe.",
   "Add 2 tablespoons of chocolate chips to pancakes.txt. Watch that line change in the working file. The saved recipe on the left still has no chocolate chips.",
   "Select the edited recipe for your next saved version. The Staging area tab shows exactly the contents Git will commit.",
   "Save the selected recipe with the note “Add chocolate chips”. The saved file will now match the staged contents.",
   "Switch back to main. Your files now show main’s saved version. Your trial work remains safely saved on feature.",
   "Bring the chocolate variation into main. Because main has not changed separately, it can move directly to the saved feature version."
  ],
  "after": [
   "main and feature point to the same version. You are now working on feature; creating a branch did not create a commit.",
   "The working file now contains chocolate chips. The green + shows the new instruction; the red − shows the instruction it replaced. No new commit exists yet.",
   "The staging area contains the chocolate-chip recipe. The saved version still has no chocolate chips. Staging selects contents; it does not save a commit.",
   "Your new commit contains chocolate chips. The working file and saved recipe now match. Click its circle to inspect the actual contents saved in that version.",
   "You are back on main. The purple version still exists; switching branches did not delete it.",
   "main now includes the chocolate variation. Git moved main to the saved feature version; this simple merge needed no extra commit."
  ],
  "commandNotes": [
   "git switch chooses a branch. -c creates it first. feature is a name we chose.",
   "This button simulates editing a file in your text editor. “edit pancakes.txt” is a lab action, not a Git command.",
   "git add pancakes.txt copies its current content into the staging area. If you edit again, that later edit is not selected automatically.",
   "git commit -m \"Add chocolate chips\" records the staged snapshot in your local history. It does not upload to GitHub.",
   "main is a common name for the main branch; it is a name, not a special Git command.",
   "git merge feature brings feature into the branch you are currently on."
  ],
  "insight": [
   "Which recipe version are you working on?",
   "HEAD tells Git where you are working. Normally it points to your current branch, which points to a saved version."
  ],
  "hint": "Labels name the recipe branches. Circles are saved recipe versions."
 },
 {
  "title": "Your own GitHub copy",
  "description": "You are still working alone. Put your saved recipe on GitHub, make one online edit yourself, then bring it back to your computer.",
  "analogy": "One cook. Two copies of the same recipe.",
  "story": "Your computer has your recipe history. GitHub can host another copy online. You choose when to send saved versions there and when to bring online changes back. No teammates are involved in this lesson.",
  "terms": [
   "GitHub",
   "Local",
   "Remote",
   "origin",
   "Push",
   "Fetch",
   "Pull"
  ],
  "steps": [
   [
    "Connect your GitHub repository",
    "Create an empty repository and add origin"
   ],
   [
    "Upload your saved recipe",
    "Push main to GitHub"
   ],
   [
    "Make your own online edit",
    "Commit a change in GitHub’s editor"
   ],
   [
    "Download the new history",
    "Fetch from GitHub"
   ],
   [
    "Update your computer’s copy",
    "Merge the downloaded version"
   ],
   [
    "Improve the cooking instructions",
    "Edit your local recipe"
   ],
   [
    "Select the improved recipe",
    "Stage the cooking instruction"
   ],
   [
    "Save the improved instructions",
    "Commit the staged contents"
   ],
   [
    "Upload the saved improvement",
    "Push your new commit"
   ]
  ],
  "before": [
   "Create a new empty repository named pancake-project on GitHub, without a README, license, or .gitignore. Copy its URL and connect it as origin. This button simulates both actions.",
   "Send the commit you already saved on your computer to your empty GitHub repository. Connecting its address did not upload anything.",
   "Imagine you open pancakes.txt on GitHub, clarify the mixing instructions, and save with “Commit changes”. You made this edit yourself, in the browser. Your computer still has the earlier version.",
   "Download your online saved history. origin/main is your computer’s bookmark for the latest GitHub main it has seen. Fetch changes that bookmark, but leaves your own main in place.",
   "Bring your downloaded online edit into your computer’s main. This lesson has no competing local edits, so main can simply move forward.",
   "Change “Cook until golden.” to “Cook on medium heat until golden.” on your computer. Watch the working file change while the saved version stays in place.",
   "Select the edited recipe for your next saved version. Compare the Staging area with your last saved file.",
   "Commit the selected recipe. This saves the improved cooking instruction on your computer.",
   "Send your new saved commit to GitHub. Your own local and online recipes will now agree."
  ],
  "after": [
   "origin stores your GitHub address. Your online repository is still empty; you have not uploaded a saved version.",
   "Your first saved recipe is now on your computer and GitHub. Push sent the saved commit; it did not make a new one.",
   "You saved a second version online. GitHub moved forward, while your computer’s main stayed at version 1.",
   "Your computer has downloaded the online history. origin/main moved, but main and your working recipe did not.",
   "Your computer’s recipe now includes your online edit. Downloading and applying an update were two separate actions.",
   "The cooking line changed in your working file. Your saved version and online copy still have the earlier instruction.",
   "The new cooking instruction is staged. It is ready to save, but the last commit still contains the older instruction.",
   "The local saved version now includes the new cooking instruction. Your GitHub copy still has the previous saved version.",
   "Your two copies now contain the improved cooking instructions. You visibly practiced edit → stage → commit → push as four separate actions."
  ],
  "commandNotes": [
   "git remote add origin <url> stores an address. The example URL is a placeholder; use your own repository URL and authenticate with GitHub in real use.",
   "git push -u origin main uploads main. -u remembers the remote branch for future pushes and pulls.",
   "The GitHub file editor creates a commit online. This button is a simulation; it does not open or modify a real account.",
   "git fetch origin downloads history without applying it to your current branch.",
   "git merge origin/main integrates the history you fetched. git pull --ff-only origin main can do this simple fetch-and-update in one command.",
   "Editing changes your local file. It creates no saved commit and sends nothing online.",
   "git add pancakes.txt selects the file’s current contents.",
   "git commit saves locally. Open the GitHub copy tab to see that the online file has not caught up yet.",
   "git push origin main sends saved commits. It cannot send unstaged or uncommitted edits."
  ],
  "insight": [
   "GitHub also works for one person",
   "You can use Git locally and keep an online copy on GitHub. Push sends saved work; fetch downloads history; merge brings it into your local branch."
  ],
  "hint": "You are the only person here: your computer and your own GitHub repository."
 },
 {
  "title": "Work as a team",
  "description": "Join Maya and Leo’s existing project. Download its history first, then propose your own improvement for review.",
  "analogy": "You propose a recipe. Maya checks it. Leo improves it.",
  "story": "Maya started the shared recipe. You join by cloning it, which gives you its files and saved history. Then a pull request asks: “Shall we add my chocolate variation to our main recipe?”",
  "terms": [
   "Clone",
   "Pull request",
   "Review",
   "Merge",
   "Pull"
  ],
  "steps": [
   [
    "Join the existing project",
    "Clone the team’s repository"
   ],
   [
    "Give your idea its own branch",
    "Create feature"
   ],
   [
    "Edit the recipe",
    "Add chocolate chips to the working file"
   ],
   [
    "Select the changed recipe",
    "Stage these exact contents"
   ],
   [
    "Save the chocolate variation",
    "Commit the staged recipe"
   ],
   [
    "Send feature to GitHub",
    "Push your saved branch"
   ],
   [
    "Ask to include your changes",
    "Open a pull request"
   ],
   [
    "Have Maya check the idea",
    "Review the changes"
   ],
   [
    "Accept the idea into main",
    "Merge on GitHub"
   ],
   [
    "Bring shared work back home",
    "Update your local copy"
   ]
  ],
  "before": [
   "The recipe already exists on GitHub because Maya started it. Clone downloads its files and history into a new folder on your computer. You do not run init on this existing project.",
   "Start a feature branch so your idea can develop separately from the team’s main version.",
   "Add 2 tablespoons of chocolate chips to pancakes.txt. Watch that line change in the working file. The saved recipe on the left still has no chocolate chips.",
   "Select the edited recipe for your next saved version. The Staging area tab shows exactly the contents Git will commit.",
   "Save the selected recipe with the note “Add chocolate chips”. The saved file will now match the staged contents.",
   "Publish your saved chocolate variation on GitHub’s feature branch. This makes it available for review, but does not add chocolate chips to the team’s main recipe.",
   "Open a pull request on GitHub. This proposes adding the work from feature to main; it does not merge it yet.",
   "Maya reads and approves the chocolate-chip addition. Meanwhile, Leo sends clearer mixing instructions to the shared main branch.",
   "Accept the pull request. The new merge commit joins your feature and Leo’s main update in the shared history.",
   "Download the accepted work and update your own main. Your computer needs this step even though the merge happened on GitHub."
  ],
  "after": [
   "Your computer now has the team’s recipe and its first saved version. origin was configured automatically. Cloning copied the history; it did not create a new commit.",
   "Your feature branch is ready. Each teammate can work on their own branch without moving main.",
   "The working file now contains chocolate chips. The green + shows the new instruction; the red − shows the instruction it replaced. No new commit exists yet.",
   "The staging area contains the chocolate-chip recipe. The saved version still has no chocolate chips. Staging selects contents; it does not save a commit.",
   "Your new commit contains chocolate chips. The working file and saved recipe now match. Click its circle to inspect the actual contents saved in that version.",
   "Your feature branch is published. The team’s main recipe still has no chocolate chips; a pull request will propose accepting the variation.",
   "The pull request is open. Maya can compare your changes with main and leave feedback.",
   "Maya approved the idea, and Leo added his own update. Approval is feedback; it does not merge the code.",
   "GitHub has a merged version with both histories. Your local main is still behind it.",
   "Your computer now has the accepted team version. Everyone can update their own copy in the same way."
  ],
  "commandNotes": [
   "git clone <url> creates a local copy of an existing repository. This lab simulates the download.",
   "git switch -c feature creates and selects your trial branch.",
   "This button simulates editing a file in your text editor. “edit pancakes.txt” is a lab action, not a Git command.",
   "git add pancakes.txt copies its current content into the staging area. If you edit again, that later edit is not selected automatically.",
   "git commit -m \"Add chocolate chips\" records the staged snapshot in your local history. It does not upload to GitHub.",
   "git push -u origin feature uploads feature and remembers its upstream branch. The GitHub copy tab in this lab shows the team’s main recipe.",
   "A pull request is a GitHub feature. It is different from the git pull command.",
   "This button simulates Maya’s review and Leo’s independent contribution.",
   "This button simulates GitHub’s “Create a merge commit” option.",
   "--ff-only means update only if your main can move forward without combining separate local changes."
  ],
  "insight": [
   "Sharing is not the same as accepting",
   "Push makes a branch available to others. A pull request proposes adding it to main. Merging accepts the changes."
  ],
  "hint": "You, Maya, and Leo have separate copies. GitHub is the meeting point."
 },
 {
  "title": "Resolve a disagreement",
  "description": "You changed the sugar to 1 tablespoon. Maya changed that same line to 2 tablespoons. Git cannot decide which instructions you intended. Choose an amount and save the decision.",
  "analogy": "One recipe, two different sugar amounts",
  "story": "Both people changed the sugar line in different ways. Git pauses and asks which text belongs in the recipe. Keep either version or agree on 1.5 tablespoons as a compromise.",
  "terms": [
   "Merge conflict",
   "Staging area",
   "Commit"
  ],
  "steps": [
   [
    "Combine the recipe changes",
    "Start the merge"
   ],
   [
    "Choose the sugar amount",
    "Resolve the disagreement"
   ],
   [
    "Mark your answer as ready",
    "Stage the resolved file"
   ],
   [
    "Save the combined version",
    "Finish the merge"
   ]
  ],
  "before": [
   "Try to combine feature with main. Because the same line has two different edits, Git pauses and asks you to choose.",
   "Use the choices at the bottom of the workspace to decide the sugar amount. The conflict markers show your line and Maya’s line; they are not recipe instructions.",
   "Tell Git you finished fixing pancakes.txt by staging the resolved file. Choosing the text alone does not finish the merge.",
   "Save the resolved result as a merge commit. It keeps the earlier versions and records your final decision."
  ],
  "after": [
   "The merge paused. Both versions are still in the history, and the file shows the disagreement.",
   "The recipe now has your chosen sugar amount. Next, tell Git the resolved file is ready by staging it.",
   "The resolved recipe is selected. You still need to commit to save the merge result.",
   "The merge is complete. A new saved recipe joins the two histories and contains your chosen sugar amount."
  ],
  "commandNotes": [
   "git merge feature starts combining feature with your current branch.",
   "In a real project you edit the file and remove the conflict markers. Here the choice buttons do that for you.",
   "git add pancakes.txt tells Git to use the resolved file content.",
   "git commit records the merge result and the note explaining it."
  ],
  "insight": [
   "A normal part of teamwork",
   "Git combines many changes automatically. When edits disagree, people decide the intended result."
  ],
  "hint": "Choose the sugar amount at the bottom of the workspace. Then stage the recipe and save the merge."
 },
 {
  "title": "Correct a mistake",
  "description": "You accidentally removed flour and pushed that change to your own GitHub repository. Add a correction without hiding the earlier saved versions.",
  "analogy": "Put flour back without hiding the mistake",
  "story": "You are working alone. Revert adds a saved correction that restores the flour instruction. The mistaken version stays in your record, so you can see what happened and how you fixed it.",
  "terms": [
   "HEAD",
   "Revert",
   "Commit",
   "Push"
  ],
  "steps": [
   [
    "Read the most recent change",
    "Inspect the saved version"
   ],
   [
    "Make an undo version",
    "Revert the last commit"
   ],
   [
    "Share the correction",
    "Push the new version"
   ]
  ],
  "before": [
   "Look at the latest saved change. HEAD identifies your current position, so “show HEAD” displays the commit you are on.",
   "Create a new commit that reverses the last commit. The flour line comes back without deleting the original record.",
   "Send your correction to your own GitHub repository. Your computer and online copy will both contain the fixed recipe."
  ],
  "after": [
   "You inspected the change that removed the flour line. Reading a commit does not change the recipe.",
   "A new correction commit restores flour. The mistaken commit still exists so you can understand what happened.",
   "Your correction is on GitHub. Your own two copies agree, with all earlier saved versions preserved."
  ],
  "commandNotes": [
   "git show HEAD displays your current commit and its changes.",
   "git revert HEAD creates the inverse of your current commit as a new commit.",
   "git push origin main publishes main, including the new correction."
  ],
  "insight": [
   "Correct without hiding history",
   "Revert adds a new correction commit. You can still inspect the original mistake and see why the correction was needed."
  ],
  "hint": "The old circle stays. The new circle records the correction."
 }
];
const beginnerTerms = {
 'Clone':['Get an existing project’s files and history','git clone downloads an existing repository into a new folder and configures origin. Use init when starting your own new local project; use clone when the repository already exists.'],
 'Init':['Start Git tracking in a folder','git init prepares a local repository and its hidden .git records. It creates no commits and does not connect to GitHub.'],
 'Edit':['Change the recipe instructions','Modify a file in your working directory. Editing alone does not create a commit or share the change.'],
 'Git':['Your project’s history keeper','Software on your computer that records versions of files and helps combine changes. It can work without GitHub.'],
 'GitHub':['Your repository online','A website that hosts Git repositories. Use it for your own online copy; later you can use its tools to collaborate with others.'],
 'Repository':['The project and its history','Usually shortened to “repo”. It contains the files and the Git record of saved versions.'],
 'Working directory':['Your editable recipe files','The files you can open and edit right now. These may have changes that are not committed yet.'],
 'Staging area':['The recipe content chosen for the next save','The exact content you have chosen for the next commit. Git also calls this the index.'],
 'Commit':['A named saved version','A snapshot of the project with a message, an author, and links to earlier commits. Committing saves locally; it does not upload.'],
 'Branch':['A named recipe variation','A name that points to a commit. It moves forward as you save more work on that branch. Branches share their earlier history.'],
 'main':['The agreed recipe branch','A common branch name for a project’s main version. A project can use another name, such as master.'],
 'HEAD':['Your current place in the recipe history','Git’s reference to where you are working. It usually points to your current branch.'],
 'Local':['On your own computer','Your project files and Git history on your machine. Saving here does not automatically update GitHub.'],
 'Remote':['A copy hosted elsewhere','A repository your local Git can exchange work with, often hosted on GitHub.'],
 'origin':['The remote’s nickname','A common short name for the repository you download from and send work to. It is a name, not GitHub itself.'],
 'Push':['Send your saved work','Upload commits and update the chosen branch in a remote repository. It does not send uncommitted edits.'],
 'Fetch':['Check for and download updates','Download remote history and update local remote-tracking bookmarks, such as origin/main. Your current branch stays in place.'],
 'Pull':['Download and bring updates into your work','Fetch, followed by integrating the downloaded changes into your current branch. The integration can use merge or rebase.'],
 'Merge':['Bring the recipe changes together','Integrate another branch into your current branch. Git may move the branch to a newer version or create a commit joining histories.'],
 'Pull request':['Ask the team to include an idea','A GitHub proposal to merge one branch into another. Teammates can read, discuss, and review it. It is different from git pull.'],
 'Review':['A teammate checks the changes','Someone reads the proposed work and gives feedback or approval. Approval alone does not merge the changes.'],
 'Merge conflict':['Two edits need a human decision','Git cannot combine some changes automatically. You edit the result, stage the resolved files, and complete the merge.'],
 'Revert':['Add a correction to the history','Create a new commit that reverses an earlier change. The original commit remains in the history.']
};
let recipeStep=0,recipePreview=1;
const recipeActions=['Add chocolate chips','Choose this change to save','Save version 2','Send version 2 to GitHub'];
const recipeExplanations=[
 'pancakes.txt holds the recipe instructions. Version 1 makes classic pancakes. Let’s try chocolate chips while keeping the original version.',
 'The editable recipe now includes chocolate chips. The saved version still makes classic pancakes. Editing and saving a version are different actions.',
 'You selected the chocolate-chip recipe for the next save. This is staging: choosing the file content to include in the next commit.',
 'Version 2 is saved on your computer with the note “Add chocolate chips”. Version 1 still exists. Your GitHub copy still has version 1.',
 'Version 2 is now on your GitHub copy too. Both earlier and newer saved versions remain in your history.'
];
function renderIntroduction(){
 const root=document.querySelector('#introduction-view');
 if(root.dataset.ready)return;
 root.dataset.ready='true';
 root.innerHTML=`<div class="beginner-welcome"><span class="section-kicker">START HERE · NO EXPERIENCE NEEDED</span><h2>You do not need to know code<br>to understand <span>Git.</span></h2><p>Imagine improving your own pancake recipe. Git keeps the versions you choose to save. Learn that solo workflow first; add teammates once you understand your own history.</p></div>
 <div class="intro-concepts"><article><span class="concept-number">01</span><h3>Why use it?</h3><p>Keep useful versions, see what changed, and safely try new ideas without naming files <code>final-final-v3.txt</code>.</p></article><article><span class="concept-number">02</span><h3>Git remembers.</h3><p>Git is the history keeper on your computer. You deliberately save a version called a <button class="term-link" data-term="Commit">commit</button>.</p></article><article><span class="concept-number">03</span><h3>GitHub hosts.</h3><p>GitHub hosts your repository online. Start with your own copy. The separate team path introduces collaboration later.</p></article></div>
 <section class="learning-paths" aria-label="Choose a learning path"><article class="learning-path-card solo"><span class="section-kicker">01 · RECOMMENDED START</span><h3>Learn solo.</h3><p>One person, one project. Build your own history before bringing in anyone else.</p><ol><li>Start a repository locally</li><li>Try branches and merge your idea</li><li>Use your own GitHub repository</li><li>Correct your own mistake</li></ol><button class="primary-button" data-lesson="0">Start the solo path <span>→</span></button><small>4 lessons · no teammates</small></article><article class="learning-path-card team"><span class="section-kicker">02 · AFTER THE SOLO BASICS</span><h3>Work as a team.</h3><p>Use the same basics with other people. Join an existing project and combine everyone’s work.</p><ol><li>Clone, propose, and review a change</li><li>Resolve two people’s conflicting edits</li></ol><button class="quiet-button" data-lesson="3">Explore the team path <span>→</span></button><small>2 lessons · you, Maya, and Leo</small></article></section>
 <section class="recipe-demo panel" aria-labelledby="recipe-title"><div class="panel-head"><div class="panel-title"><span class="tiny-branch">▤</span><strong id="recipe-title">Try it with a pancake recipe</strong></div><span class="repo-tag">NO TYPING REQUIRED</span></div><div class="recipe-grid"><div><span class="section-kicker">YOUR COMPUTER · pancakes.txt</span><div class="recipe-page"><span class="recipe-file-label">PANCAKE RECIPE · THE FILE YOU EDIT</span><h3 id="recipe-name">Classic pancakes</h3><div class="recipe-ingredients"><p><span>Flour</span><strong>1 cup</strong></p><p><span>Milk</span><strong>1 cup</strong></p><p><span>Chocolate chips</span><strong id="recipe-chips">None</strong></p></div><div class="recipe-page-status" id="recipe-page-status">Matches saved version 1</div></div><div class="recipe-tray" id="recipe-tray"><span>◫</span><div><strong>Selected for the next save · staging area</strong><p id="recipe-tray-text">No changes selected yet.</p></div></div><div class="recipe-history"><span class="section-kicker">YOUR SAVED VERSIONS</span><div id="recipe-versions"></div><p id="recipe-preview" aria-live="polite"></p></div></div><div class="recipe-coach"><span class="section-kicker" id="recipe-step-label">STEP 1 / 4</span><h3 id="recipe-action-title">First, make a change.</h3><p id="recipe-explanation" aria-live="polite"></p><div class="recipe-github"><span>◎</span><div><strong>Your online copy on GitHub</strong><p id="recipe-remote">Your GitHub copy has version 1 · Classic pancakes</p></div></div><button class="primary-button" id="recipe-next">Add chocolate chips <span>✦</span></button><button class="recipe-reset" id="recipe-reset">Replay this example</button><p class="analogy-limit">This preview begins with an already saved recipe to explain the idea. Lesson 1 shows how to create that first saved version from an empty folder. Git tracks the recipe instructions, not the pancakes you cook. In real projects, a commit can save changes across many files.</p></div></div></section>
 <section class="intro-check"><div><span class="section-kicker">QUICK CHECK</span><h3>You saved a commit on your laptop.<br>Is your GitHub copy updated yet?</h3></div><div><div class="intro-check-options"><button data-intro-answer="yes">Yes, saving shares it.</button><button data-intro-answer="no">No, I need to push it.</button></div><p id="intro-check-feedback" role="status">Pick an answer. It is fine to try both.</p></div></section>
 <section class="intro-dictionary"><div class="dictionary-heading"><span class="section-kicker">GIT WORDS, TRANSLATED</span><h3>A few words you will meet</h3><p>Open a word whenever you need it. You do not need to memorize them all.</p></div><div class="dictionary-grid">${['Init','Repository','Commit','Staging area','Branch','HEAD','Remote','Push','Fetch'].map(term=>`<details><summary>${term}<span>+</span></summary><strong>${beginnerTerms[term][0]}</strong><p>${beginnerTerms[term][1]}</p></details>`).join('')}</div></section>
 <section class="intro-summary panel" aria-label="Recipe to Git summary"><span class="section-kicker">QUICK RECAP · KEEP THIS HANDY</span><table><caption>Solo workflow → Git concepts</caption><thead><tr><th scope="col">What happens in the recipe example</th><th scope="col">Git concept</th></tr></thead><tbody>
<tr><td>You set up Git history keeping for your recipe folder. No saved versions yet.</td><td><button class="concept-pill" data-term="Init">Init</button></td></tr>
<tr><td>You change the pancake recipe on your computer.</td><td><button class="concept-pill" data-term="Edit">Edit</button></td></tr>
<tr><td>You choose which recipe changes belong in the next saved version.</td><td><button class="concept-pill" data-term="Staging area">Stage</button></td></tr>
<tr><td>You save a version called “Add chocolate chips”.</td><td><button class="concept-pill" data-term="Commit">Commit</button></td></tr>
<tr><td>You try the chocolate variation separately from your main recipe.</td><td><button class="concept-pill" data-term="Branch">Branch</button></td></tr>
<tr><td>You store your empty GitHub repository’s address with the nickname origin.</td><td><button class="concept-pill" data-term="origin">Add remote</button></td></tr>
<tr><td>You send your saved recipe version to GitHub.</td><td><button class="concept-pill" data-term="Push">Push</button></td></tr>
<tr><td>You check for and download your own online recipe updates without changing your current version.</td><td><button class="concept-pill" data-term="Fetch">Fetch</button></td></tr>
<tr><td>You download your online updates and bring them into your current recipe.</td><td><button class="concept-pill" data-term="Pull">Pull</button></td></tr>
<tr><td>You bring your saved variation or downloaded update into main.</td><td><button class="concept-pill" data-term="Merge">Merge</button></td></tr>
<tr><td>You save a correction that reverses a mistake, keeping the earlier recipe versions.</td><td><button class="concept-pill" data-term="Revert">Revert</button></td></tr>
</tbody></table><p>Tap a Git concept for its meaning. Return to Introduction whenever you need a reminder.</p></section>
 <details class="team-summary"><summary>Later: team workflow → Git concepts <span>+</span></summary><p>Learn these after the solo path. Other people now have their own copies and ideas.</p><table><caption>Working with other people</caption><thead><tr><th scope="col">Team action</th><th scope="col">Git concept</th></tr></thead><tbody><tr><td>You download the team’s existing recipe and its history.</td><td><button class="concept-pill" data-term="Clone">Clone</button></td></tr><tr><td>Your friend asks the team to include their improvement in your main recipe.</td><td><button class="concept-pill" data-term="Pull request">Pull request</button></td></tr>
<tr><td>You both changed the same sugar line differently and must choose a final amount.</td><td><button class="concept-pill" data-term="Merge conflict">Merge conflict</button></td></tr>
</tbody></table></details>
 <div class="intro-next"><div><span class="section-kicker">NOW YOU HAVE THE BIG PICTURE</span><h3>Build your first repository from an empty folder.</h3><p>The lesson buttons run each action for you. Type commands only when you feel ready.</p></div><button class="primary-button" data-lesson="0">Start lesson 1 <span>✦</span></button></div>`;
 root.querySelector('#recipe-next').addEventListener('click',()=>{if(recipeStep<4){recipeStep++;recipePreview=recipeStep>=3?2:1;renderRecipe()}});
 root.querySelector('#recipe-reset').addEventListener('click',()=>{recipeStep=0;recipePreview=1;renderRecipe()});
 renderRecipe();
}
function renderRecipe(){
 document.querySelector('#recipe-name').textContent=recipeStep?'Chocolate-chip pancakes':'Classic pancakes';
 document.querySelector('#recipe-chips').textContent=recipeStep?'2 tablespoons':'None';
 document.querySelector('.recipe-page').classList.toggle('has-change',recipeStep>0&&recipeStep<3);
 document.querySelector('#recipe-page-status').textContent=recipeStep===0?'Matches saved version 1':recipeStep<3?'Edited recipe · not saved as a commit yet':'Matches saved version 2';
 document.querySelector('#recipe-tray').classList.toggle('selected',recipeStep===2);
 document.querySelector('#recipe-tray-text').textContent=recipeStep===2?'Selected: pancakes.txt · chocolate-chip variation':recipeStep>2?'Saved in version 2. Nothing is waiting to be committed.':'No changes selected yet.';
 document.querySelector('#recipe-remote').textContent=recipeStep===4?'Your GitHub copy has version 2 · Chocolate-chip pancakes':'Your GitHub copy has version 1 · Classic pancakes';
 document.querySelector('.recipe-github').classList.toggle('shared',recipeStep===4);
 document.querySelector('#recipe-versions').innerHTML=`<button class="version-chip ${recipePreview===1?'selected':''}" data-recipe-version="1"><span>1</span>Classic pancakes</button>${recipeStep>=3?`<i></i><button class="version-chip ${recipePreview===2?'selected':''}" data-recipe-version="2"><span>2</span>Add chocolate chips</button>`:''}`;
 document.querySelector('#recipe-preview').textContent=`Viewing saved version ${recipePreview}: ${recipePreview===1?'Classic pancakes · no chocolate chips':'Chocolate-chip pancakes · 2 tablespoons of chips'}. ${recipeStep>=3?'Click either version to look back; viewing does not change the recipe you are editing.':''}`;
 document.querySelector('#recipe-step-label').textContent=recipeStep===4?'EXAMPLE COMPLETE':`STEP ${recipeStep+1} / 4`;
 document.querySelector('#recipe-action-title').textContent=['First, make a change.','Choose what belongs in the save.','Save it with a note.','Update your online copy.','One idea, four separate actions.'][recipeStep];
 document.querySelector('#recipe-explanation').textContent=recipeExplanations[recipeStep];
 document.querySelector('#recipe-next').innerHTML=recipeStep===4?'Version 2 uploaded <span>✓</span>':`${recipeActions[recipeStep]} <span>✦</span>`;
 document.querySelector('#recipe-next').disabled=recipeStep===4;
}
function renderBeginnerGuide(){
 const guide=beginnerGuides[lesson];
 const starts=['','Starting point: your classic recipe has the first commit from solo lesson 1. This local exercise begins at that version so you can try an independent variation. No GitHub connection is needed.','Starting point: your computer has the classic recipe’s first commit. There is no GitHub connection or online history yet. You will create and connect your own empty GitHub repository.','Starting point: Maya already saved the classic recipe on the team’s GitHub repository. The visible circle belongs to that existing online history. You have not downloaded a local copy yet.','Starting point: the team’s original recipe plus two saved sugar edits, one by you and one by Maya. These three circles set up the disagreement you will resolve.','Starting point: your original recipe and a second commit that accidentally removed flour. You already pushed those two versions to your own GitHub repository. You will add a correction.'];
 document.querySelector('#lesson-analogy').innerHTML=`<div><span class="section-kicker">${mode.toUpperCase()} PATH · THE RECIPE ANALOGY</span><h3>${guide.analogy}</h3><p>${guide.story}</p></div><div class="lesson-terms"><span class="section-kicker">WORDS FOR THIS LESSON</span>${guide.terms.map(term=>`<button data-term="${term}">${term}<span>?</span></button>`).join('')}</div>${lesson>0?`<p class="lesson-start">${starts[lesson]} Each lesson resets to this stated starting point so you can replay it independently.</p>`:''}`;
 const finished=step>=lessons[lesson].steps.length;
 const alreadyConnected=lesson===2&&step===0&&state.remoteConfigured;
 if(alreadyConnected)document.querySelector('#next-action').innerHTML='Connection ready · continue <span>⌘</span>';
 document.querySelector('#step-explanation').innerHTML=`<span class="section-kicker">${finished?'YOU DID IT':'BEFORE YOU CLICK'}</span><p>${finished?'You finished the practice. Answer the two recap questions in the Quiz tab to check your understanding. You can replay them or skip the quiz.':alreadyConnected?'You already connected origin using a quick command. That address is ready. Continue to the upload step; your saved recipe has not been uploaded yet.':guide.before[step]}</p>${finished?'':`<small>${escapeHTML(guide.commandNotes[step])}</small>`}`;
 document.querySelector('#lesson-feedback').hidden=step===0;
 document.querySelector('#lesson-feedback').innerHTML=step===0?'':`<span>✓</span><div><strong>What just happened?</strong><p>${guide.after[Math.min(step-1,guide.after.length-1)]}</p></div>`;
}
document.addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button)return;
 if(button.dataset.recipeVersion){recipePreview=+button.dataset.recipeVersion;renderRecipe()}
 if(button.dataset.introAnswer){const correct=button.dataset.introAnswer==='no';document.querySelector('#intro-check-feedback').textContent=correct?'Exactly. Commit saves on your computer. Push sends the saved version to GitHub to update your own online copy.':'Not yet. A commit stays on your computer. Push is the separate action that sends it to GitHub.';document.querySelector('#intro-check-feedback').classList.toggle('correct',correct)}
 if(button.dataset.term){const term=button.dataset.term,definition=beginnerTerms[term];if(definition)openDialog(`<div class="detail-label">GIT WORDS, TRANSLATED</div><h2>${term}</h2><p><strong>${definition[0]}</strong></p><p>${definition[1]}</p>`)}
});

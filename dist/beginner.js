// One familiar story connects the introduction to every Git lesson.
const beginnerGuides = [
 {title:'Start from zero',description:'Begin with an empty folder on your computer. Turn it into a Git repository, write a pancake recipe, and create your very first saved version. Then share it on GitHub.',analogy:'An empty recipe folder, ready for its first version',story:'You are inside a new folder named pancake-project. There is no recipe file or saved history yet. Git init prepares the history keeper; you create the first saved version by editing, staging, and committing.',terms:['Init','Working directory','Staging area','Commit','origin','Push'],steps:[
 ['Start Git tracking','Initialize the repository'],['Write your first recipe','Create pancakes.txt'],['Choose what to save','Stage the recipe file'],['Create your first save','Make the first commit'],['Connect to GitHub','Add the remote named origin'],['Share your first save','Push main to GitHub']],before:[
 'Start Git tracking in this empty folder. Think of it as setting up a place to keep recipe history. It does not write the recipe or create a saved version.',
 'Create pancakes.txt with a classic pancake recipe: flour, milk, and cooking instructions. This is just a file on your computer. Git has not saved it yet.',
 'Select pancakes.txt for your first saved version. Git calls this staging: choosing the file content that the next commit will record.',
 'Save the selected recipe with the note “Start pancake recipe”. This creates your first commit. Watch the first circle appear; it stays on your computer.',
 'On GitHub, create a new empty repository named pancake-project, without adding a README, license, or .gitignore. Copy its URL and give it the nickname origin in your local repository. This button simulates those steps.',
 'Upload your first saved version to the connected GitHub repository. Maya can now download it. Your local history remains on your computer.'],after:[
 'Git tracking is ready, and the history is still empty. Git init creates a hidden .git folder for Git’s records; it does not create a commit.',
 'Your classic recipe file exists. It is untracked: Git has not selected or committed it. There are still zero saved versions.',
 'The recipe is staged and ready to save. There are still zero commits; staging is preparation, not saving.',
 'You created saved version 1 yourself. This root commit has no parent because it is the beginning of your recipe history.',
 'origin now names the empty GitHub repository. Connecting the address did not upload your recipe. Push is the next action.',
 'Your first commit is now on GitHub too. You built the whole journey: init → edit → stage → commit → connect → push.'],commandNotes:[
 'git init -b main initializes Git here. -b main chooses the initial branch name. In real use, install Git and open a terminal inside your project folder first.',
 '“edit” is a lab action, not a Git command. In real use, create this text file in an editor.',
 'git add pancakes.txt selects the file’s current content for the commit.',
 'git commit -m "Start pancake recipe" saves it with a note. Real Git may first ask you to set user.name and user.email as the commit author.',
 'git remote add origin <url> stores the remote address. The example URL is a placeholder; use your own repository URL in real use and authenticate with GitHub.',
 'git push -u origin main uploads main. -u remembers origin/main as its upstream for future pushes and pulls.'],insight:['Setup is not a saved version','Git init starts tracking. Git add chooses file content. Git commit creates the first saved version. GitHub comes later.'],hint:'Your first circle appears only when you create your first commit.'},
 {title:'Try an idea',description:'You want to try a new idea while keeping your original work. Create a separate line of saved versions, then bring the idea back when it is ready.',analogy:'Classic pancakes and a chocolate experiment',story:'main is your agreed recipe. feature is a place to develop the chocolate variation separately. Both start from the same saved recipe. A branch is a name pointing to a version; Git does not duplicate every file to create it.',terms:['Branch','main','HEAD','Merge'],steps:[
 ['Start a recipe experiment','Create a branch'],['Save your new idea','Edit, stage, and commit'],['Return to the agreed recipe','Switch to main'],['Bring the idea into main','Merge the branch']],before:[
 'Create a branch named feature for your chocolate variation. main and feature initially point to the same saved recipe.',
 'Save the chocolate variation on feature. This button edits the recipe, selects the change, and commits it. main keeps the classic recipe.',
 'Switch back to main. Your files now show main’s saved version. Your trial work remains safely saved on feature.',
 'Bring the chocolate variation into main. Because main has not changed separately, it can move directly to the saved feature version.'],after:[
 'main and feature point to the same version. You are now working on feature; creating a branch did not create a commit.',
 'The purple circle saves your chocolate experiment. main still points to the classic recipe.',
 'You are back on main. The purple version still exists; switching branches did not delete it.',
 'main now includes the chocolate variation. Git moved main to the saved feature version; this simple merge needed no extra commit.'],commandNotes:[
 'git switch chooses a branch. -c creates it first. feature is a name we chose.',
 'The button runs edit, git add, and git commit on feature.',
 'main is a common name for the main branch; it is a name, not a special Git command.',
 'git merge feature brings feature into the branch you are currently on.'],insight:['Which recipe version are you working on?','HEAD tells Git where you are working. Normally it points to your current branch, which points to a saved version.'],hint:'Labels name the recipe branches. Circles are saved recipe versions.'},
 {title:'Sync your copies',description:'Leo saves an update on GitHub. Your computer will not change automatically. First look for his update, then bring it into your own copy.',analogy:'Your recipe file and the shared recipe online',story:'Leo adds clearer mixing instructions to the shared recipe on GitHub. Fetch downloads his saved work for you to inspect. Merging brings it into your local recipe.',terms:['Local','Remote','origin','Fetch','Pull'],steps:[
 ['Leo shares an update','A teammate pushes'],['Download the new history','Fetch from GitHub'],['Update your own version','Merge the downloaded work'],['Share your next improvement','Save and push your work']],before:[
 'Let Leo save a change and send it to GitHub. Watch the shared copy gain a saved version while your own main stays in place.',
 'Download the saved recipe history from GitHub. Git updates origin/main, the local record of the latest shared main version it has seen.',
 'Move your local main to the downloaded version. This brings Leo’s update into your working files.',
 'Make your own improvement, save it, and send it back to GitHub. Both copies will now include the new work.'],after:[
 'Leo’s version is on GitHub. Your local main has not moved, because Git does not automatically download or apply updates.',
 'You downloaded the new history. origin/main moved, but your own main and working files stayed the same.',
 'Your main now includes Leo’s work. Downloading an update and applying it are two different actions.',
 'Your new saved version has been sent to GitHub. Both local main and shared main now include it.'],commandNotes:[
 'This button simulates Leo editing, committing, and pushing from his own computer.',
 'git fetch downloads history. origin is the nickname for the remote repository.',
 'origin/main is a local record of the remote main last seen by Git. It is not a live connection.',
 'The button runs edit, git add, git commit, and git push.'],insight:['What does pull mean?','Pull fetches updates, then brings them into your current branch. Fetch lets you inspect them first.'],hint:'Git works on your computer. GitHub hosts the copy you share.'},
 {title:'Work as a team',description:'You add chocolate chips, Maya reviews the recipe change, and Leo improves the mixing instructions. GitHub is where your separate work comes together.',analogy:'You propose a recipe. Maya checks it. Leo improves it.',story:'A pull request asks: “Shall we add my chocolate variation to our agreed recipe?” Maya can read and discuss the changed instructions before the team accepts them.',terms:['Pull request','Review','Merge','Pull'],steps:[
 ['Give your idea its own branch','Create feature'],['Save and share the idea','Commit and push feature'],['Ask to include your changes','Open a pull request'],['Have Maya check the idea','Review the changes'],['Accept the idea into main','Merge on GitHub'],['Bring shared work back home','Update your local copy']],before:[
 'Start a feature branch so your idea can develop separately from the team’s main version.',
 'Save the idea on feature and send that branch to GitHub. Publishing a feature does not put it into main.',
 'Open a pull request on GitHub. This proposes adding the work from feature to main; it does not merge it yet.',
 'Maya reads and approves the chocolate-chip addition. Meanwhile, Leo sends clearer mixing instructions to the shared main branch.',
 'Accept the pull request. The new merge commit joins your feature and Leo’s main update in the shared history.',
 'Download the accepted work and update your own main. Your computer needs this step even though the merge happened on GitHub.'],after:[
 'Your feature branch is ready. Each teammate can work on their own branch without moving main.',
 'Your idea is on GitHub’s feature branch. The team’s main version has not adopted it yet.',
 'The pull request is open. Maya can compare your changes with main and leave feedback.',
 'Maya approved the idea, and Leo added his own update. Approval is feedback; it does not merge the code.',
 'GitHub has a merged version with both histories. Your local main is still behind it.',
 'Your computer now has the accepted team version. Everyone can update their own copy in the same way.'],commandNotes:[
 'git switch -c feature creates and selects your trial branch.',
 'The button edits, stages, commits, then runs git push -u origin feature. -u remembers the branch to sync with.',
 'A pull request is a GitHub feature. It is different from the git pull command.',
 'This button simulates Maya’s review and Leo’s independent contribution.',
 'This button simulates GitHub’s “Create a merge commit” option.',
 '--ff-only means update only if your main can move forward without combining separate local changes.'],insight:['Sharing is not the same as accepting','Push makes a branch available to others. A pull request proposes adding it to main. Merging accepts the changes.'],hint:'You, Maya, and Leo have separate copies. GitHub is the meeting point.'},
 {title:'Resolve a disagreement',description:'You changed the sugar to 1 tablespoon. Maya changed that same line to 2 tablespoons. Git cannot decide which instructions you intended. Choose an amount and save the decision.',analogy:'One recipe, two different sugar amounts',story:'Both people changed the sugar line in different ways. Git pauses and asks which text belongs in the recipe. Keep either version or agree on 1.5 tablespoons as a compromise.',terms:['Merge conflict','Staging area','Commit'],steps:[
 ['Combine the recipe changes','Start the merge'],['Choose the sugar amount','Resolve the disagreement'],['Mark your answer as ready','Stage the resolved file'],['Save the combined version','Finish the merge']],before:[
 'Try to combine feature with main. Because the same line has two different edits, Git pauses and asks you to choose.',
 'Use the choices below the graph to decide the sugar amount. The conflict markers show your line and Maya’s line; they are not recipe instructions.',
 'Tell Git you finished fixing pancakes.txt by staging the resolved file. Choosing the text alone does not finish the merge.',
 'Save the resolved result as a merge commit. It keeps the earlier versions and records your final decision.'],after:[
 'The merge paused. Both versions are still in the history, and the file shows the disagreement.',
 'The recipe now has your chosen sugar amount. Next, tell Git the resolved file is ready by staging it.',
 'The resolved recipe is selected. You still need to commit to save the merge result.',
 'The merge is complete. A new saved recipe joins the two histories and contains your chosen sugar amount.'],commandNotes:[
 'git merge feature starts combining feature with your current branch.',
 'In a real project you edit the file and remove the conflict markers. Here the choice buttons do that for you.',
 'git add pancakes.txt tells Git to use the resolved file content.',
 'git commit records the merge result and the note explaining it.'],insight:['A normal part of teamwork','Git combines many changes automatically. When edits disagree, people decide the intended result.'],hint:'Choose the sugar amount below the graph. Then stage the recipe and save the merge.'},
 {title:'Correct a mistake',description:'The flour line was accidentally removed from the recipe and the change is already shared. Add a correction that puts it back while preserving the earlier history.',analogy:'Put flour back without hiding the mistake',story:'Revert adds a saved correction that restores the flour instruction. The mistaken version stays in the record, so your team can understand both the mistake and the fix.',terms:['HEAD','Revert','Commit','Push'],steps:[
 ['Read the most recent change','Inspect the saved version'],['Make an undo version','Revert the last commit'],['Share the correction','Push the new version']],before:[
 'Look at the latest saved change. HEAD identifies your current position, so “show HEAD” displays the commit you are on.',
 'Create a new commit that reverses the last commit. The flour line comes back without deleting the original record.',
 'Send the correction to GitHub so your teammates can update their copies too.'],after:[
 'You inspected the change that removed the flour line. Reading a commit does not change the recipe.',
 'A new correction commit restores the flour line. The mistaken commit still exists, so everyone can understand what happened.',
 'The correction is shared on GitHub. Your team can download it normally, with no history rewritten.'],commandNotes:[
 'git show HEAD displays your current commit and its changes.',
 'git revert HEAD creates the inverse of your current commit as a new commit.',
 'git push origin main publishes main, including the new correction.'],insight:['A good default for shared work','Revert records a correction. Commands that rewrite history need more care when other people already use that history.'],hint:'The old circle stays. The new circle records the correction.'}
];
const beginnerTerms = {
 'Init':['Start Git tracking in a folder','git init prepares a local repository and its hidden .git records. It creates no commits and does not connect to GitHub.'],
 'Edit':['Change the recipe instructions','Modify a file in your working directory. Editing alone does not create a commit or share the change.'],
 'Git':['Your project’s history keeper','Software on your computer that records versions of files and helps combine changes. It can work without GitHub.'],
 'GitHub':['The team’s online meeting place','A website that hosts Git repositories and adds tools for discussing, reviewing, and sharing work.'],
 'Repository':['The project and its history','Usually shortened to “repo”. It contains the files and the Git record of saved versions.'],
 'Working directory':['Your editable recipe files','The files you can open and edit right now. These may have changes that are not committed yet.'],
 'Staging area':['The recipe content chosen for the next save','The exact content you have chosen for the next commit. Git also calls this the index.'],
 'Commit':['A named saved version','A snapshot of the project with a message, an author, and links to earlier commits. Committing saves locally; it does not upload.'],
 'Branch':['A named recipe variation','A name that points to a commit. It moves forward as you save more work on that branch. Branches share their earlier history.'],
 'main':['The agreed recipe branch','A common branch name for a project’s main version. A project can use another name, such as master.'],
 'HEAD':['Your current place in the recipe history','Git’s reference to where you are working. It usually points to your current branch.'],
 'Local':['On your own computer','Your project files and Git history on your machine. Teammates do not see local changes automatically.'],
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
const recipeActions=['Add chocolate chips','Choose this change to save','Save version 2','Share version 2 with Maya'];
const recipeExplanations=[
 'pancakes.txt holds the recipe instructions. Version 1 makes classic pancakes. Let’s try chocolate chips while keeping the original version.',
 'The editable recipe now includes chocolate chips. The saved version still makes classic pancakes. Editing and saving a version are different actions.',
 'You selected the chocolate-chip recipe for the next save. This is staging: choosing the file content to include in the next commit.',
 'Version 2 is saved on your computer with the note “Add chocolate chips”. Version 1 still exists. Maya cannot see version 2 yet.',
 'Version 2 is now shared on GitHub. Maya can download it. Both earlier and newer saved versions remain in your history.'
];
function renderIntroduction(){
 const root=document.querySelector('#introduction-view');
 if(root.dataset.ready)return;
 root.dataset.ready='true';
 root.innerHTML=`<div class="beginner-welcome"><span class="section-kicker">START HERE · NO EXPERIENCE NEEDED</span><h2>You do not need to know code<br>to understand <span>Git.</span></h2><p>Imagine improving a pancake recipe with friends. You try chocolate chips, Maya suggests a different sugar amount, and Leo clarifies a step. Git helps you keep useful versions and bring your changes together.</p></div>
 <div class="intro-concepts"><article><span class="concept-number">01</span><h3>Why use it?</h3><p>Keep useful versions, see who changed what, and combine everyone’s work without naming files <code>final-final-v3.txt</code>.</p></article><article><span class="concept-number">02</span><h3>Git remembers.</h3><p>Git is the history keeper on your computer. You deliberately save a version called a <button class="term-link" data-term="Commit">commit</button>.</p></article><article><span class="concept-number">03</span><h3>GitHub connects.</h3><p>GitHub hosts a shared copy online. Your team can exchange saved work and review ideas before accepting them.</p></article></div>
 <section class="recipe-demo panel" aria-labelledby="recipe-title"><div class="panel-head"><div class="panel-title"><span class="tiny-branch">▤</span><strong id="recipe-title">Try it with a pancake recipe</strong></div><span class="repo-tag">NO TYPING REQUIRED</span></div><div class="recipe-grid"><div><span class="section-kicker">YOUR COMPUTER · pancakes.txt</span><div class="recipe-page"><span class="recipe-file-label">PANCAKE RECIPE · THE FILE YOU EDIT</span><h3 id="recipe-name">Classic pancakes</h3><div class="recipe-ingredients"><p><span>Flour</span><strong>1 cup</strong></p><p><span>Milk</span><strong>1 cup</strong></p><p><span>Chocolate chips</span><strong id="recipe-chips">None</strong></p></div><div class="recipe-page-status" id="recipe-page-status">Matches saved version 1</div></div><div class="recipe-tray" id="recipe-tray"><span>◫</span><div><strong>Selected for the next save · staging area</strong><p id="recipe-tray-text">No changes selected yet.</p></div></div><div class="recipe-history"><span class="section-kicker">YOUR SAVED VERSIONS</span><div id="recipe-versions"></div><p id="recipe-preview" aria-live="polite"></p></div></div><div class="recipe-coach"><span class="section-kicker" id="recipe-step-label">STEP 1 / 4</span><h3 id="recipe-action-title">First, make a change.</h3><p id="recipe-explanation" aria-live="polite"></p><div class="recipe-github"><span>◎</span><div><strong>Shared copy on GitHub</strong><p id="recipe-remote">Maya can see version 1 · Classic pancakes</p></div></div><button class="primary-button" id="recipe-next">Add chocolate chips <span>✦</span></button><button class="recipe-reset" id="recipe-reset">Replay this example</button><p class="analogy-limit">This preview begins with an already saved recipe to explain the idea. Lesson 1 shows how to create that first saved version from an empty folder. Git tracks the recipe instructions, not the pancakes you cook. In real projects, a commit can save changes across many files.</p></div></div></section>
 <section class="intro-check"><div><span class="section-kicker">QUICK CHECK</span><h3>You saved a commit on your laptop.<br>Can Maya see it on GitHub yet?</h3></div><div><div class="intro-check-options"><button data-intro-answer="yes">Yes, saving shares it.</button><button data-intro-answer="no">No, I need to push it.</button></div><p id="intro-check-feedback" role="status">Pick an answer. It is fine to try both.</p></div></section>
 <section class="intro-dictionary"><div class="dictionary-heading"><span class="section-kicker">GIT WORDS, TRANSLATED</span><h3>A few words you will meet</h3><p>Open a word whenever you need it. You do not need to memorize them all.</p></div><div class="dictionary-grid">${['Init','Repository','Commit','Staging area','Branch','HEAD','Remote','Push','Pull request'].map(term=>`<details><summary>${term}<span>+</span></summary><strong>${beginnerTerms[term][0]}</strong><p>${beginnerTerms[term][1]}</p></details>`).join('')}</div></section>
 <section class="intro-summary panel" aria-label="Recipe to Git summary"><span class="section-kicker">QUICK RECAP · KEEP THIS HANDY</span><table><caption>Recipe actions → Git concepts</caption><thead><tr><th scope="col">What happens in the recipe example</th><th scope="col">Git concept</th></tr></thead><tbody>
<tr><td>You set up Git history keeping for your recipe folder. No saved versions yet.</td><td><button class="concept-pill" data-term="Init">Init</button></td></tr>
<tr><td>You change the pancake recipe on your computer.</td><td><button class="concept-pill" data-term="Edit">Edit</button></td></tr>
<tr><td>You choose which recipe changes belong in the next saved version.</td><td><button class="concept-pill" data-term="Staging area">Stage</button></td></tr>
<tr><td>You save a version called “Add chocolate chips”.</td><td><button class="concept-pill" data-term="Commit">Commit</button></td></tr>
<tr><td>You try the chocolate variation separately from the agreed recipe.</td><td><button class="concept-pill" data-term="Branch">Branch</button></td></tr>
<tr><td>You store the empty shared repository’s address with the nickname origin.</td><td><button class="concept-pill" data-term="origin">Add remote</button></td></tr>
<tr><td>You send your saved recipe version to GitHub.</td><td><button class="concept-pill" data-term="Push">Push</button></td></tr>
<tr><td>You check for and download a friend’s saved recipe updates without changing your current version.</td><td><button class="concept-pill" data-term="Fetch">Fetch</button></td></tr>
<tr><td>You download the shared updates and bring them into your current recipe.</td><td><button class="concept-pill" data-term="Pull">Pull</button></td></tr>
<tr><td>Your friend asks the team to include their improvement in the agreed recipe.</td><td><button class="concept-pill" data-term="Pull request">Pull request</button></td></tr>
<tr><td>You bring the accepted improvement into the main recipe.</td><td><button class="concept-pill" data-term="Merge">Merge</button></td></tr>
<tr><td>You both changed the same sugar line differently and must choose a final amount.</td><td><button class="concept-pill" data-term="Merge conflict">Merge conflict</button></td></tr>
<tr><td>You save a correction that reverses a mistake, keeping the earlier recipe versions.</td><td><button class="concept-pill" data-term="Revert">Revert</button></td></tr>
</tbody></table><p>Tap a Git concept for its meaning. Return to Introduction whenever you need a reminder.</p></section>
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
 document.querySelector('#recipe-remote').textContent=recipeStep===4?'Maya can download version 2 · Chocolate-chip pancakes':'Maya can see version 1 · Classic pancakes';
 document.querySelector('.recipe-github').classList.toggle('shared',recipeStep===4);
 document.querySelector('#recipe-versions').innerHTML=`<button class="version-chip ${recipePreview===1?'selected':''}" data-recipe-version="1"><span>1</span>Classic pancakes</button>${recipeStep>=3?`<i></i><button class="version-chip ${recipePreview===2?'selected':''}" data-recipe-version="2"><span>2</span>Add chocolate chips</button>`:''}`;
 document.querySelector('#recipe-preview').textContent=`Viewing saved version ${recipePreview}: ${recipePreview===1?'Classic pancakes · no chocolate chips':'Chocolate-chip pancakes · 2 tablespoons of chips'}. ${recipeStep>=3?'Click either version to look back; viewing does not change the recipe you are editing.':''}`;
 document.querySelector('#recipe-step-label').textContent=recipeStep===4?'EXAMPLE COMPLETE':`STEP ${recipeStep+1} / 4`;
 document.querySelector('#recipe-action-title').textContent=['First, make a change.','Choose what belongs in the save.','Save it with a note.','Let your teammate see it.','One idea, four separate actions.'][recipeStep];
 document.querySelector('#recipe-explanation').textContent=recipeExplanations[recipeStep];
 document.querySelector('#recipe-next').innerHTML=recipeStep===4?'Version 2 shared <span>✓</span>':`${recipeActions[recipeStep]} <span>✦</span>`;
 document.querySelector('#recipe-next').disabled=recipeStep===4;
}
function renderBeginnerGuide(){
 const guide=beginnerGuides[lesson];
 const starts=['','Starting point: the classic recipe already has the first commit you learned to make in lesson 1. This exercise adds a chocolate variation.','Starting point: your classic recipe has one commit, shared with GitHub as in lesson 1. Leo is about to add the next version.','Starting point: you and the team each have the classic recipe’s first commit. GitHub has that same version.','Starting point: one original recipe commit, then two different sugar edits saved by you and Maya. These three circles set up the disagreement you will resolve.','Starting point: the original recipe commit and a second, shared commit that accidentally removed flour. You will add the correction.'];
 document.querySelector('#lesson-analogy').innerHTML=`<div><span class="section-kicker">THE RECIPE ANALOGY</span><h3>${guide.analogy}</h3><p>${guide.story}</p></div><div class="lesson-terms"><span class="section-kicker">WORDS FOR THIS LESSON</span>${guide.terms.map(term=>`<button data-term="${term}">${term}<span>?</span></button>`).join('')}</div>${lesson>0?`<p class="lesson-start">${starts[lesson]} Each lesson resets to this stated starting point so you can replay it independently.</p>`:''}`;
 const finished=step>=lessons[lesson].steps.length;
 const alreadyConnected=lesson===0&&step===4&&state.remoteConfigured;
 if(alreadyConnected)document.querySelector('#next-action').innerHTML='Connection ready · continue <span>⌘</span>';
 document.querySelector('#step-explanation').innerHTML=`<span class="section-kicker">${finished?'YOU DID IT':'BEFORE YOU CLICK'}</span><p>${finished?'You can replay this lesson or continue. Try explaining how you saved and shared the recipe in your own words.':alreadyConnected?'You already connected origin using a quick command. That address is ready. Continue to the sharing step; your saved recipe has not been uploaded yet.':guide.before[step]}</p>${finished?'':`<small>${escapeHTML(guide.commandNotes[step])}</small>`}`;
 document.querySelector('#lesson-feedback').hidden=step===0;
 document.querySelector('#lesson-feedback').innerHTML=step===0?'':`<span>✓</span><div><strong>What just happened?</strong><p>${guide.after[Math.min(step-1,guide.after.length-1)]}</p></div>`;
}
document.addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button)return;
 if(button.dataset.recipeVersion){recipePreview=+button.dataset.recipeVersion;renderRecipe()}
 if(button.dataset.introAnswer){const correct=button.dataset.introAnswer==='no';document.querySelector('#intro-check-feedback').textContent=correct?'Exactly. Commit saves on your computer. Push sends the saved version to GitHub so Maya can download it.':'Not yet. A commit stays on your computer. Push is the separate action that sends it to GitHub.';document.querySelector('#intro-check-feedback').classList.toggle('correct',correct)}
 if(button.dataset.term){const term=button.dataset.term,definition=beginnerTerms[term];if(definition)openDialog(`<div class="detail-label">GIT WORDS, TRANSLATED</div><h2>${term}</h2><p><strong>${definition[0]}</strong></p><p>${definition[1]}</p>`)}
});

// One familiar story connects the introduction to every Git lesson.
const beginnerGuides = [
 {title:'Save a version',description:'You are updating a project file, just like changing a page in a notebook. Choose the changes to save, make a named version, then share it.',analogy:'Your desk, your selection tray, your history shelf',story:'The working directory is the notebook you are editing. The staging area is a tray where you choose what to save. A commit adds a named version to the history shelf.',terms:['Working directory','Staging area','Commit','Push'],steps:[
  ['Change a page','Edit a file'],['Choose what to save','Stage the file'],['Save a named version','Create a commit'],['Send it to GitHub','Push your saved version']],before:[
  'Change README.md, a text file that explains this project. Editing changes your current page; it does not create a saved version.',
  'Choose the current contents of README.md for the next saved version. In Git, this preparation is called staging.',
  'Save the staged content with the note “Update README”. Git calls this saved version a commit. It stays on your computer for now.',
  'Send your saved version to the shared project on GitHub. This is called pushing. Now a teammate can download it.'],after:[
  'The file has changed on your desk. There is no new saved version yet.',
  'The selection tray holds the file content you chose. The history shelf has not changed yet.',
  'A new circle appeared: your commit. It saves the selected content and a note explaining the change.',
  'Your commit is now on GitHub as well as your computer. Editing, saving, and sharing are separate steps.'],commandNotes:[
  'This button simulates editing. “edit” is a lab action, not a Git command.',
  'git add selects the file. README.md is the file name.',
  'git commit saves your selection. -m adds the short explanation in quotes.',
  'git push sends saved work. origin is the nickname for GitHub; main is the branch to share.'],insight:['Saving is a deliberate step','Editing a file does not create a commit. Staging chooses what goes in; committing saves that choice.'],hint:'Each circle is a saved version. Click one to read its note.'},
 {title:'Try an idea',description:'You want to try a new idea while keeping your original work. Create a separate line of saved versions, then bring the idea back when it is ready.',analogy:'Two storylines in the same notebook',story:'main is the main storyline. feature is a trial storyline starting from the same saved page. A branch is really a movable bookmark, not a whole new copy of the project.',terms:['Branch','main','HEAD','Merge'],steps:[
 ['Start a trial storyline','Create a branch'],['Save your new idea','Edit, stage, and commit'],['Open the main storyline','Switch to main'],['Bring the idea into main','Merge the branch']],before:[
 'Create a branch named feature and start working on it. Both branch bookmarks initially point to the same saved version.',
 'Add and save an idea on feature. This button handles editing, staging, and committing so you can focus on the separate storyline.',
 'Switch back to main. Your files now show main’s saved version. Your trial work remains safely saved on feature.',
 'Bring feature’s saved work into main. In this example, main has not changed, so its bookmark can simply move forward to the new version.'],after:[
 'main and feature point to the same version. You are now working on feature; creating a branch did not create a commit.',
 'The purple circle is your trial version. main still points to the earlier version.',
 'You are back on main. The purple version still exists; switching branches did not delete it.',
 'main now includes the idea. This simple merge moved the bookmark forward, without adding another commit.'],commandNotes:[
 'git switch chooses a branch. -c creates it first. feature is a name we chose.',
 'The button runs edit, git add, and git commit on feature.',
 'main is a common name for the main branch; it is a name, not a special Git command.',
 'git merge feature brings feature into the branch you are currently on.'],insight:['Your bookmark: HEAD','HEAD tells Git where you are working. Normally it points to your current branch, which points to a saved version.'],hint:'Branch labels are bookmarks. The circles are the saved versions.'},
 {title:'Sync your copies',description:'Leo saves an update on GitHub. Your computer will not change automatically. First look for his update, then bring it into your own copy.',analogy:'Your notebook and the team’s library copy',story:'Your local copy lives on your computer. The remote copy lives on GitHub. Fetch is checking the library for new versions; merging brings the downloaded version into your current work.',terms:['Local','Remote','origin','Fetch','Pull'],steps:[
 ['Leo shares an update','A teammate pushes'],['Download the new history','Fetch from GitHub'],['Update your own version','Merge the downloaded work'],['Share your next improvement','Save and push your work']],before:[
 'Let Leo save a change and send it to GitHub. Watch the shared copy gain a saved version while your own main stays in place.',
 'Download the history from GitHub. Git updates origin/main, your local bookmark for the last main version it saw on GitHub.',
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
 {title:'Work as a team',description:'You add a feature, Maya checks it, and Leo improves the shared project. You each have your own copy; GitHub is where the work comes together.',analogy:'Authors, an editor, and one shared notebook',story:'A pull request is like asking an editor: “Can we include these pages in the main story?” Your team can discuss and check the changes before accepting them.',terms:['Pull request','Review','Merge','Pull'],steps:[
 ['Give your idea its own branch','Create feature'],['Save and share the idea','Commit and push feature'],['Ask to include your changes','Open a pull request'],['Have Maya check the idea','Review the changes'],['Accept the idea into main','Merge on GitHub'],['Bring shared work back home','Update your local copy']],before:[
 'Start a feature branch so your idea can develop separately from the team’s main version.',
 'Save the idea on feature and send that branch to GitHub. Publishing a feature does not put it into main.',
 'Open a pull request on GitHub. This proposes adding the work from feature to main; it does not merge it yet.',
 'Maya reads and approves your changes. Meanwhile, Leo sends a separate improvement to the shared main branch.',
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
 {title:'Resolve a disagreement',description:'You wrote “Hello!” and Maya wrote “Hey!” on the same line. Git cannot choose the greeting for you. Pick the final wording, then save that decision.',analogy:'Two authors rewrote the same sentence',story:'A merge conflict is a question, not lost work: “Which version of this sentence belongs in the final page?” You can keep either one or write a combined answer.',terms:['Merge conflict','Staging area','Commit'],steps:[
 ['Try to combine the storylines','Start the merge'],['Choose the final greeting','Resolve the disagreement'],['Mark your answer as ready','Stage the resolved file'],['Save the combined version','Finish the merge']],before:[
 'Try to combine feature with main. Because the same line has two different edits, Git pauses and asks you to choose.',
 'Use the choices below the graph to decide the final greeting. The symbols in the file mark where the two versions disagree.',
 'Tell Git you finished fixing greeting.js by staging the resolved file. Choosing the text alone does not finish the merge.',
 'Save the resolved result as a merge commit. It keeps the earlier versions and records your final decision.'],after:[
 'The merge paused. Both versions are still in the history, and the file shows the disagreement.',
 'The file now has your chosen greeting. Next, tell Git the answer is ready by staging it.',
 'Git has the resolved content in the selection tray. You still need to save the merge result.',
 'The merge is complete. A new saved version joins the two histories and contains your chosen greeting.'],commandNotes:[
 'git merge feature starts combining feature with your current branch.',
 'In a real project you edit the file and remove the conflict markers. Here the choice buttons do that for you.',
 'git add greeting.js tells Git to use the resolved file content.',
 'git commit records the merge result and the note explaining it.'],insight:['A normal part of teamwork','Git combines many changes automatically. When edits disagree, people decide the intended result.'],hint:'Choose the greeting below the graph. Then stage it and save the merge.'},
 {title:'Correct a mistake',description:'A heading was removed by mistake, and the change is already shared. Add a correction that puts the heading back while keeping the earlier history.',analogy:'Write a correction page, keep the old pages',story:'Revert is like adding a correction note to a notebook. The mistake remains in the record, and a new saved version reverses its effect.',terms:['HEAD','Revert','Commit','Push'],steps:[
 ['Read the most recent change','Inspect the saved version'],['Make an undo version','Revert the last commit'],['Share the correction','Push the new version']],before:[
 'Look at the latest saved change. HEAD identifies your current position, so “show HEAD” displays the commit you are on.',
 'Create a new commit that reverses the last commit. The missing heading comes back without deleting the original record.',
 'Send the correction to GitHub so your teammates can update their copies too.'],after:[
 'You inspected the change that removed the heading. Reading a commit does not change any files.',
 'A new correction commit restores the heading. The mistaken commit still exists, so the story is easy to follow.',
 'The correction is shared on GitHub. Your team can download it normally, with no history rewritten.'],commandNotes:[
 'git show HEAD displays your current commit and its changes.',
 'git revert HEAD creates the inverse of your current commit as a new commit.',
 'git push origin main publishes main, including the new correction.'],insight:['A good default for shared work','Revert records a correction. Commands that rewrite history need more care when other people already use that history.'],hint:'The old circle stays. The new circle records the correction.'}
];
const beginnerTerms = {
 'Git':['Your project’s history keeper','Software on your computer that records versions of files and helps combine changes. It can work without GitHub.'],
 'GitHub':['The team’s online meeting place','A website that hosts Git repositories and adds tools for discussing, reviewing, and sharing work.'],
 'Repository':['The project and its history','Usually shortened to “repo”. It contains the files and the Git record of saved versions.'],
 'Working directory':['The pages on your desk','The files you can open and edit right now. These may have changes that are not committed yet.'],
 'Staging area':['Your selection tray','The exact content you have chosen for the next commit. Git also calls this the index.'],
 'Commit':['A named saved version','A snapshot of the project with a message, an author, and links to earlier commits. Committing saves locally; it does not upload.'],
 'Branch':['A movable storyline bookmark','A name that points to a commit. It moves forward as you save more work on that branch. Branches share their earlier history.'],
 'main':['The main storyline','A common branch name for a project’s main version. A project can use another name, such as master.'],
 'HEAD':['Your “you are here” bookmark','Git’s reference to where you are working. It usually points to your current branch.'],
 'Local':['On your own computer','Your project files and Git history on your machine. Teammates do not see local changes automatically.'],
 'Remote':['A copy hosted elsewhere','A repository your local Git can exchange work with, often hosted on GitHub.'],
 'origin':['The remote’s nickname','A common short name for the repository you download from and send work to. It is a name, not GitHub itself.'],
 'Push':['Send your saved work','Upload commits and update the chosen branch in a remote repository. It does not send uncommitted edits.'],
 'Fetch':['Check for and download updates','Download remote history and update local remote-tracking bookmarks, such as origin/main. Your current branch stays in place.'],
 'Pull':['Download and bring updates into your work','Fetch, followed by integrating the downloaded changes into your current branch. The integration can use merge or rebase.'],
 'Merge':['Bring storylines together','Integrate another branch into your current branch. Git may move the bookmark forward or create a commit joining histories.'],
 'Pull request':['Ask the team to include an idea','A GitHub proposal to merge one branch into another. Teammates can read, discuss, and review it. It is different from git pull.'],
 'Review':['A teammate checks the changes','Someone reads the proposed work and gives feedback or approval. Approval alone does not merge the changes.'],
 'Merge conflict':['Two edits need a human decision','Git cannot combine some changes automatically. You edit the result, stage the resolved files, and complete the merge.'],
 'Revert':['Add a correction to the history','Create a new commit that reverses an earlier change. The original commit remains in the history.']
};
let notebookStep=0,notebookPreview=1;
const notebookActions=['Change the meetup day','Choose this change to save','Save version 2','Share version 2 with Maya'];
const notebookExplanations=[
 'This text file is your notebook page. Version 1 is already saved. Let’s change the plan without losing the original.',
 'The page now says Saturday, but the saved version still says Friday. Editing and saving a version are different actions.',
 'You chose the Saturday page for the next version. This is staging: preparing the exact content you want to save.',
 'Version 2 is saved on your computer with the note “Move meetup to Saturday”. Version 1 still exists. Maya cannot see version 2 yet.',
 'Version 2 is now shared on GitHub. Maya can download it. Both earlier and newer saved versions remain in your history.'
];
function renderIntroduction(){
 const root=document.querySelector('#introduction-view');
 if(root.dataset.ready)return;
 root.dataset.ready='true';
 root.innerHTML=`<div class="beginner-welcome"><span class="section-kicker">START HERE · NO EXPERIENCE NEEDED</span><h2>You do not need to know code<br>to understand <span>Git.</span></h2><p>Imagine planning a meetup with friends. The day changes, someone tries a new venue, and you want to remember what happened. Git helps you keep that history and work together.</p></div>
 <div class="intro-concepts"><article><span class="concept-number">01</span><h3>Why use it?</h3><p>Keep useful versions, see who changed what, and combine everyone’s work without naming files <code>final-final-v3.txt</code>.</p></article><article><span class="concept-number">02</span><h3>Git remembers.</h3><p>Git is the history keeper on your computer. You deliberately save a version called a <button class="term-link" data-term="Commit">commit</button>.</p></article><article><span class="concept-number">03</span><h3>GitHub connects.</h3><p>GitHub hosts a shared copy online. Your team can exchange saved work and review ideas before accepting them.</p></article></div>
 <section class="notebook-demo panel" aria-labelledby="notebook-title"><div class="panel-head"><div class="panel-title"><span class="tiny-branch">▤</span><strong id="notebook-title">Try it with a shared notebook</strong></div><span class="repo-tag">NO TYPING REQUIRED</span></div><div class="notebook-grid"><div><span class="section-kicker">YOUR COMPUTER · meetup.txt</span><div class="notebook-page"><span class="notebook-file-label">TEAM MEETUP PLAN</span><h3>Let’s meet on <span id="meetup-day">Friday</span>.</h3><p>Venue: the neighborhood café</p><div class="notebook-page-status" id="notebook-page-status">Matches saved version 1</div></div><div class="notebook-tray" id="notebook-tray"><span>◫</span><div><strong>Selection tray · staging area</strong><p id="notebook-tray-text">No changes selected yet.</p></div></div><div class="notebook-history"><span class="section-kicker">YOUR SAVED VERSIONS</span><div id="notebook-versions"></div><p id="notebook-preview" aria-live="polite"></p></div></div><div class="notebook-coach"><span class="section-kicker" id="notebook-step-label">STEP 1 / 4</span><h3 id="notebook-action-title">First, make a change.</h3><p id="notebook-explanation" aria-live="polite"></p><div class="notebook-github"><span>◎</span><div><strong>Shared copy on GitHub</strong><p id="notebook-remote">Maya can see version 1 · Friday</p></div></div><button class="primary-button" id="notebook-next">Change the meetup day <span>✦</span></button><button class="notebook-reset" id="notebook-reset">Replay this example</button><p class="analogy-limit">This notebook is an analogy. Git can track many files together; a commit records a snapshot of the project.</p></div></div></section>
 <section class="intro-check"><div><span class="section-kicker">QUICK CHECK</span><h3>You saved a commit on your laptop.<br>Can Maya see it on GitHub yet?</h3></div><div><div class="intro-check-options"><button data-intro-answer="yes">Yes, saving shares it.</button><button data-intro-answer="no">No, I need to push it.</button></div><p id="intro-check-feedback" role="status">Pick an answer. It is fine to try both.</p></div></section>
 <section class="intro-dictionary"><div class="dictionary-heading"><span class="section-kicker">GIT WORDS, TRANSLATED</span><h3>A few words you will meet</h3><p>Open a word whenever you need it. You do not need to memorize them all.</p></div><div class="dictionary-grid">${['Repository','Commit','Staging area','Branch','HEAD','Remote','Push','Pull request'].map(term=>`<details><summary>${term}<span>+</span></summary><strong>${beginnerTerms[term][0]}</strong><p>${beginnerTerms[term][1]}</p></details>`).join('')}</div></section>
 <div class="intro-next"><div><span class="section-kicker">NOW YOU HAVE THE BIG PICTURE</span><h3>Try the same idea with Git commands.</h3><p>The lesson buttons run each action for you. Type commands only when you feel ready.</p></div><button class="primary-button" data-lesson="0">Start lesson 1 <span>✦</span></button></div>`;
 root.querySelector('#notebook-next').addEventListener('click',()=>{if(notebookStep<4){notebookStep++;notebookPreview=notebookStep>=3?2:1;renderNotebook()}});
 root.querySelector('#notebook-reset').addEventListener('click',()=>{notebookStep=0;notebookPreview=1;renderNotebook()});
 renderNotebook();
}
function renderNotebook(){
 document.querySelector('#meetup-day').textContent=notebookStep?'Saturday':'Friday';
 document.querySelector('.notebook-page').classList.toggle('has-change',notebookStep>0&&notebookStep<3);
 document.querySelector('#notebook-page-status').textContent=notebookStep===0?'Matches saved version 1':notebookStep<3?'Edited page · not saved as a commit yet':'Matches saved version 2';
 document.querySelector('#notebook-tray').classList.toggle('selected',notebookStep===2);
 document.querySelector('#notebook-tray-text').textContent=notebookStep===2?'Selected: meetup.txt · Saturday':notebookStep>2?'Saved in version 2. The tray is clear.':'No changes selected yet.';
 document.querySelector('#notebook-remote').textContent=notebookStep===4?'Maya can download version 2 · Saturday':'Maya can see version 1 · Friday';
 document.querySelector('.notebook-github').classList.toggle('shared',notebookStep===4);
 document.querySelector('#notebook-versions').innerHTML=`<button class="version-chip ${notebookPreview===1?'selected':''}" data-notebook-version="1"><span>1</span>Original plan</button>${notebookStep>=3?`<i></i><button class="version-chip ${notebookPreview===2?'selected':''}" data-notebook-version="2"><span>2</span>Move meetup to Saturday</button>`:''}`;
 document.querySelector('#notebook-preview').textContent=`Viewing saved version ${notebookPreview}: “Let’s meet on ${notebookPreview===1?'Friday':'Saturday'}.” ${notebookStep>=3?'Click either version to look back; viewing does not change your working page.':''}`;
 document.querySelector('#notebook-step-label').textContent=notebookStep===4?'EXAMPLE COMPLETE':`STEP ${notebookStep+1} / 4`;
 document.querySelector('#notebook-action-title').textContent=['First, make a change.','Choose what belongs in the save.','Save it with a note.','Let your teammate see it.','One idea, four separate actions.'][notebookStep];
 document.querySelector('#notebook-explanation').textContent=notebookExplanations[notebookStep];
 document.querySelector('#notebook-next').innerHTML=notebookStep===4?'Version 2 shared <span>✓</span>':`${notebookActions[notebookStep]} <span>✦</span>`;
 document.querySelector('#notebook-next').disabled=notebookStep===4;
}
function renderBeginnerGuide(){
 const guide=beginnerGuides[lesson];
 document.querySelector('#lesson-analogy').innerHTML=`<div><span class="section-kicker">THE NOTEBOOK ANALOGY</span><h3>${guide.analogy}</h3><p>${guide.story}</p></div><div class="lesson-terms"><span class="section-kicker">WORDS FOR THIS LESSON</span>${guide.terms.map(term=>`<button data-term="${term}">${term}<span>?</span></button>`).join('')}</div>`;
 const finished=step>=lessons[lesson].steps.length;
 document.querySelector('#step-explanation').innerHTML=`<span class="section-kicker">${finished?'YOU DID IT':'BEFORE YOU CLICK'}</span><p>${finished?'You can replay this lesson or continue. Try explaining the notebook example in your own words.':guide.before[step]}</p>${finished?'':`<small>${guide.commandNotes[step]}</small>`}`;
 document.querySelector('#lesson-feedback').hidden=step===0;
 document.querySelector('#lesson-feedback').innerHTML=step===0?'':`<span>✓</span><div><strong>What just happened?</strong><p>${guide.after[Math.min(step-1,guide.after.length-1)]}</p></div>`;
}
document.addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button)return;
 if(button.dataset.notebookVersion){notebookPreview=+button.dataset.notebookVersion;renderNotebook()}
 if(button.dataset.introAnswer){const correct=button.dataset.introAnswer==='no';document.querySelector('#intro-check-feedback').textContent=correct?'Exactly. Commit saves on your computer. Push sends the saved version to GitHub so Maya can download it.':'Not yet. A commit stays on your computer. Push is the separate action that sends it to GitHub.';document.querySelector('#intro-check-feedback').classList.toggle('correct',correct)}
 if(button.dataset.term){const term=button.dataset.term,definition=beginnerTerms[term];if(definition)openDialog(`<div class="detail-label">GIT WORDS, TRANSLATED</div><h2>${term}</h2><p><strong>${definition[0]}</strong></p><p>${definition[1]}</p>`)}
});

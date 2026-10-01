// Two small questions reinforce the action the learner just practiced.
const lessonRecaps = [
 [
  {question:'Your recipe folder has no saved versions. Which action creates the first circle in its history?',answers:['git init — start Git tracking','Edit pancakes.txt — write the recipe','git commit — save the staged recipe'],correct:2,why:'Git init prepares the repository. Editing creates the file, and staging selects its content. Only committing creates the first saved version.'},
  {question:'You stage your recipe, then edit it again before committing. Which content does the commit save?',answers:['Every edit, including the newest unstaged change','The recipe content you selected when staging','The recipe is uploaded online automatically'],correct:1,why:'Staging selects file content at that moment. Commit saves that selected version locally. Later edits need to be staged again to enter the next commit.'}
 ],
 [
  {question:'You create feature to try chocolate chips. What happens immediately?',answers:['Git saves a new chocolate-chip commit','feature points to the same saved recipe as main','Git copies the entire project into another folder'],correct:1,why:'A new branch begins at your current commit. You are now working on feature, but no new version exists until you make changes and commit.'},
  {question:'You commit the chocolate variation on feature. Before merging, what does main contain?',answers:['The original classic recipe','The chocolate variation automatically','Both recipes combined automatically'],correct:0,why:'Committing moves feature forward. main still points to the classic recipe. Switching back to main shows that original version; merging brings the variation into main.'}
 ],
 [
  {question:'You saved better mixing instructions in GitHub’s online editor. You run git fetch origin. What happens to your own recipe?',answers:['Your working recipe changes immediately','The update is downloaded, but your main stays in place','Your local recipe is uploaded automatically'],correct:1,why:'Fetch downloads remote history and updates origin/main. It does not integrate the update into your current branch or change your working recipe.'},
  {question:'You integrated your own online edit and want to share your own improvement. Which sequence saves and shares it?',answers:['Edit → push','Edit → stage → fetch','Edit → stage → commit → push'],correct:2,why:'Stage chooses the changed content, commit saves it locally, and push shares the saved commit. Push does not upload edits that have not been committed.'}
 ],
 [
  {question:'You push your chocolate variation on feature. Is it now part of the team’s agreed main recipe?',answers:['No. Publishing the branch and merging it into main are separate actions','Yes. Any push automatically changes main','Yes. Opening a pull request automatically merges it'],correct:0,why:'Push makes feature available on GitHub. A pull request proposes adding it to main. Merging accepts the change; publishing or proposing alone does not.'},
  {question:'Maya reviewed the proposal and the team merged it on GitHub. What updates your local main with the accepted recipe?',answers:['Ask Maya to approve it again','Create another feature branch','Pull the shared main into your local main'],correct:2,why:'The merge updated main on GitHub. Your computer has a separate copy, so pull downloads and integrates the shared version into your local branch.'}
 ],
 [
  {question:'You chose 1 tablespoon of sugar and Maya chose 2. Git pauses the merge. What is Git asking for?',answers:['Delete one person’s saved history','Push again to make the disagreement disappear','A person must choose the intended recipe text'],correct:2,why:'Both saved versions are still safe. Git cannot decide which sugar amount you intended, so you choose the final text and remove the conflict markers.'},
  {question:'You chose 1.5 tablespoons as the final amount. What finishes this merge?',answers:['Choose the amount and stop','Stage the resolved file, then commit the merge','Create a new GitHub repository'],correct:1,why:'Choosing the text resolves the disagreement in the file. Staging tells Git the result is ready, and committing saves the completed merge with links to both histories.'}
 ],
 [
  {question:'Your published commit removed the flour line. You revert it. What happens to that mistaken commit?',answers:['It stays in history, followed by a correction commit','It is permanently erased','It becomes an uncommitted edit'],correct:0,why:'Revert adds a new commit that reverses the change. The flour line returns, and the original mistake remains visible so you can understand the correction.'},
  {question:'You created the correction commit locally. How do you update your own GitHub copy?',answers:['Revert every earlier commit','Push the correction to GitHub','Run git init again'],correct:1,why:'The correction is an ordinary new commit. Push sends it to your own GitHub repository. Your local and online copies now include the correction, with earlier versions preserved.'}
 ]
];
let recapState;
function resetLessonQuiz(){recapState={question:0,choice:null,answers:[],finished:false,skipped:false};}
function focusLessonQuiz(){setWorkspacePane('quiz');$('#lesson-quiz-title')?.focus({preventScroll:true});}
function continueAfterLesson(){const next=nextPathLesson();if(next===undefined){view='introduction';renderView();window.scrollTo({top:0,behavior:'auto'});}else selectLesson(next);}
function pathCompletion(){if(nextPathLesson()!==undefined)return '';return `<div class="path-completion"><span class="section-kicker">${mode.toUpperCase()} PATH COMPLETE</span><h3>${mode==='solo'?'You have practiced a complete solo workflow.':'You have practiced working with a team.'}</h3><p>${mode==='solo'?'You can keep working on your own. When you are ready, the separate team path adds cloning, reviews, and conflicts.':'Return to either path whenever you need to recall a step.'}</p>${mode==='solo'?'<button class="quiet-button" data-lesson="3">Ready for teammates? Start the team path <span>→</span></button>':''}<button class="quiet-button" data-view="beyond">Explore good habits &amp; workflows <span>→</span></button></div>`;}

function fitLessonQuiz(){
 const root=$('#lesson-quiz'),footer=root.querySelector('.recap-footer');
 if(!footer)return;
 const content=document.createElement('div');content.className='recap-content';
 while(root.firstChild)content.append(root.firstChild);
 root.replaceChildren(content,footer);
}

function renderLessonQuiz(){
 const root=$('#lesson-quiz');root.hidden=step<lessons[lesson].steps.length;if(root.hidden){root.innerHTML='';return;}
 const questions=lessonRecaps[lesson],score=recapState.answers.filter(Boolean).length;
 $('#next-action').innerHTML=recapState.finished?continuationLabel()+' <span>✦</span>':'Answer the lesson quiz <span>?</span>';
 $('#lesson-step-label').textContent=recapState.finished?'Lesson complete':'Practice complete · quiz ready';
 $('#step-explanation').innerHTML=recapState.finished?'<span class="section-kicker">RECAP COMPLETE</span><p>You can retry the questions or continue. Your lesson practice is saved.</p>':'<span class="section-kicker">PRACTICE COMPLETE</span><p>Answer the two questions in the Quiz tab to check the idea you just practiced. Each answer comes with an explanation.</p>';
 const header=`<div class="recap-heading"><div><span class="section-kicker">${mode.toUpperCase()} ${String(pathPosition()).padStart(2,'0')} RECAP</span><h2 id="lesson-quiz-title" tabindex="-1">${recapState.finished?'Take the idea with you.':'A quick check before you move on.'}</h2><p>${escapeHTML(lessons[lesson].title)} · Two questions. It is fine to get one wrong.</p></div><span class="recap-badge">${recapState.finished?'RECAP COMPLETE':`QUESTION ${recapState.question+1} / ${questions.length}`}</span></div>`;
 if(recapState.finished){root.innerHTML=header+`<div class="recap-result"><span class="recap-score">${recapState.skipped?'↻':`${score}<small> / ${questions.length}</small>`}</span><div><h3>${recapState.skipped?'Come back whenever you want to check your understanding.':score===questions.length?'You have the key ideas.':'Keep practicing. Every answer is explained.'}</h3><p>${recapState.skipped?'The quiz is available to replay. Your lesson practice is saved.':`${score} of ${questions.length} answered correctly. ${escapeHTML(beginnerGuides[lesson].insight[1])}`}</p></div></div>${pathCompletion()}<div class="recap-footer"><button class="recap-replay" data-recap-replay>Try the quiz again</button><button class="primary-button" data-recap-continue>${continuationLabel()} <span>✦</span></button></div>`;fitLessonQuiz();return;}
 const q=questions[recapState.question],answered=recapState.choice!==null,correct=recapState.choice===q.correct;
 root.innerHTML=header+`<div class="recap-progress" aria-label="Quiz progress">${questions.map((_,i)=>`<span class="${i<recapState.question?'answered':i===recapState.question?'current':''}"></span>`).join('')}</div><h3 class="recap-question">${escapeHTML(q.question)}</h3><div class="recap-choices" role="group" aria-label="Answer choices">${q.answers.map((answer,i)=>`<button data-recap-answer="${i}" class="${answered?(i===q.correct?'correct':i===recapState.choice?'incorrect':''):''}" ${answered?'disabled':''}><span class="recap-letter">${String.fromCharCode(65+i)}</span><span>${escapeHTML(answer)}</span>${answered&&i===q.correct?'<span class="recap-choice-mark">✓</span>':answered&&i===recapState.choice?'<span class="recap-choice-mark">×</span>':''}</button>`).join('')}</div><div id="recap-feedback" tabindex="-1" class="recap-feedback ${answered?(correct?'correct':'incorrect'):''}" role="status">${answered?`<strong>${correct?'Exactly.':'Not quite — here is why.'}</strong><p>${escapeHTML(q.why)}</p>`:'Choose an answer to see the explanation.'}</div><div class="recap-footer"><button class="recap-skip" data-recap-skip>Skip this quiz</button><button class="primary-button" data-recap-next ${answered?'':'disabled'}>${recapState.question===questions.length-1?'See my recap':'Next question'} <span>✦</span></button></div>`;fitLessonQuiz();
}
document.addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button||step<lessons[lesson].steps.length)return;
 if(button.dataset.recapAnswer!==undefined&&recapState.choice===null){const choice=Number(button.dataset.recapAnswer),q=lessonRecaps[lesson][recapState.question];if(!Number.isInteger(choice)||choice<0||choice>=q.answers.length)return;recapState.choice=choice;recapState.answers[recapState.question]=choice===q.correct;renderLessonQuiz();const feedback=$('#recap-feedback'),content=$('#lesson-quiz .recap-content');feedback.focus?.({preventScroll:true});requestAnimationFrame(()=>{const overflow=feedback.getBoundingClientRect().bottom-content.getBoundingClientRect().bottom;if(overflow>0)content.scrollTop+=overflow+8;});}
 if(button.hasAttribute('data-recap-next')&&recapState.choice!==null){if(recapState.question===lessonRecaps[lesson].length-1)recapState.finished=true;else{recapState.question++;recapState.choice=null;}renderLessonQuiz();focusLessonQuiz();}
 if(button.hasAttribute('data-recap-replay')){resetLessonQuiz();renderLessonQuiz();focusLessonQuiz();}
 if(button.hasAttribute('data-recap-skip')){recapState.finished=true;recapState.skipped=true;renderLessonQuiz();focusLessonQuiz();}
 if(button.hasAttribute('data-recap-continue')&&recapState.finished)continueAfterLesson();
});

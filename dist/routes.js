// Shared by the browser, static-page generator, and routing checks.
(function(root){
  const origin='https://git-orbit.algomatrix.my';
  const routes=[
    {path:'/',view:'introduction',title:'Learn Git & GitHub Interactively | Git Orbit',description:'Learn Git and GitHub with free interactive lessons. Practice commits, branches, pull requests, and merge conflicts in a safe browser simulator.'},
    {path:'/lessons/start-a-repository/',view:'lesson-intro',lesson:0,title:'Git Basics: Init, Stage & Commit | Git Orbit',description:'Create your first Git repository. Learn git init, git add, and git commit with a guided recipe example, a visual history, and a short recap.'},
    {path:'/lessons/branches-and-merging/',view:'lesson-intro',lesson:1,title:'Learn Git Branches & Merging | Git Orbit',description:'Practice creating a Git branch, saving changes, switching to main, and merging your idea. See each command change an interactive commit graph.'},
    {path:'/lessons/github-and-remotes/',view:'lesson-intro',lesson:2,title:'Learn GitHub Remotes, Push & Fetch | Git Orbit',description:'Connect your own GitHub repository and learn the difference between push, fetch, and merge through a guided browser simulation.'},
    {path:'/lessons/pull-requests/',view:'lesson-intro',lesson:3,title:'Learn GitHub Pull Requests & Reviews | Git Orbit',description:'Clone a team project, propose a change, review a pull request, and synchronize your local copy in a safe GitHub collaboration simulation.'},
    {path:'/lessons/merge-conflicts/',view:'lesson-intro',lesson:4,title:'Practice Resolving Git Merge Conflicts | Git Orbit',description:'Understand why Git merge conflicts happen. Choose the final file content, stage the resolution, and save a merge commit in a guided lesson.'},
    {path:'/lessons/undo-and-recovery/',view:'lesson-intro',lesson:5,title:'Undo a Published Git Mistake with Revert | Git Orbit',description:'Inspect a published mistake, reverse it with git revert, and push the correction while preserving earlier commits in your repository history.'},
    {path:'/reference/',view:'reference',title:'Git Command Reference for Beginners | Git Orbit',description:'Find plain-language explanations of Git commands for staging, commits, branches, remotes, and recovery. Search by command or what you want to do.'},
    {path:'/challenges/',view:'challenge',title:'Git Practice Challenges & Questions | Git Orbit',description:'Test your understanding of staging, fetch versus pull, and safe recovery with beginner Git practice questions and explanations.'},
    {path:'/habits-and-workflows/',view:'beyond',title:'Git Habits, GitHub Flow & Releases | Git Orbit',description:'Practice good Git habits, everyday fixes, GitHub Flow, Gitflow, and tags and releases across 33 guided decisions with visual commit histories.'}
  ];
  function find(path){const normalized=path.replace(/\/index\.html$/,'/').replace(/\/?$/,'/');return routes.find(route=>route.path===normalized);}
  function forState(view,lesson){return routes.find(route=>route.view===(view==='lab'?'lesson-intro':view)&&(route.lesson===undefined||route.lesson===lesson))||routes[0];}
  root.GitOrbitRoutes={origin,routes,find,forState};
  if(typeof module==='object')module.exports=root.GitOrbitRoutes;
})(typeof globalThis==='object'?globalThis:this);

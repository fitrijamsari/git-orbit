const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {origin,routes,find,forState}=require('../dist/routes.js');
const root=path.resolve(__dirname,'../dist');
test('Routes preserve lesson IDs, normalize directory URLs, and reject unknown pages',()=>{
 assert.equal(new Set(routes.map(route=>route.path)).size,routes.length);
 assert.equal(forState('lab',5).path,'/lessons/undo-and-recovery/');
 for(const route of routes){assert.equal(find(route.path),route);assert.equal(find(route.path+'index.html'),route);assert.equal(find(route.path.slice(0,-1)||'/'),route)}
 assert.equal(find('/missing/'),undefined);
});
test('Every sitemap page serves matching metadata and readable HTML without JavaScript',()=>{
 const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
 for(const route of routes){
  const html=fs.readFileSync(path.join(root,route.path,'index.html'),'utf8');
  assert.ok(sitemap.includes(`<loc>${origin+route.path}</loc>`));
  assert.ok(html.includes(`<link rel="canonical" href="${origin+route.path}">`));
  assert.ok(!html.includes('__TITLE__')&&!html.includes('__SCHEMA__'));
  const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema['@graph'][1].url,origin+route.path);
  assert.equal((html.match(/<h1>/g)||[]).length,1);
  const id={introduction:'introduction-view','lesson-intro':'lesson-intro-view',reference:'reference-view',challenge:'challenge-view',beyond:'beyond-view'}[route.view];
  assert.ok(html.includes(`<section id="${id}"`));
  assert.ok(!new RegExp(`<section id="${id}"[^>]* hidden`).test(html));
  if(route.lesson!==undefined)assert.ok(html.includes('WHAT YOU WILL LEARN'));
  if(route.view==='reference')assert.equal((html.match(/class="reference-card"/g)||[]).length,19);
  for(const [,url] of html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){
   const asset=path.join(root,url);assert.ok(fs.existsSync(asset),`Missing local URL ${url} in ${route.path}`);
  }
 }
 assert.ok(fs.readFileSync(path.join(root,'robots.txt'),'utf8').includes(origin+'/sitemap.xml'));
 assert.ok(fs.readFileSync(path.join(root,'404.html'),'utf8').includes('content="noindex"'));
});

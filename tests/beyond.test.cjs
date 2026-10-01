const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('dist/beyond.js', 'utf8');
function load(saved='{}', unavailable=false) {
  const context=vm.createContext({document:{addEventListener(){}},localStorage:{getItem(){if(unavailable)throw Error('Storage disabled');return saved;},setItem(){if(unavailable)throw Error('Storage disabled');}}});
  vm.runInContext(source,context);
  return expression=>JSON.parse(vm.runInContext(`JSON.stringify(${expression})`,context));
}
test('Every workflow snapshot has valid references and chronological parents',()=>{
  const read=load();
  for(const module of read('beyondModules')) {
    for(let count=0;count<=module.steps.length;count++) {
      const snapshot=read(`beyondSnapshot(beyondModules.find(m=>m.id==='${module.id}'),${count})`);
      const seen=new Set();
      for(const node of snapshot.nodes) {
        assert.ok(!seen.has(node.id),`${module.id}: duplicate commit`);
        for(const parent of node.parents)assert.ok(seen.has(parent),`${module.id}: invalid parent ${parent}`);
        assert.ok(module.lanes.some(([lane])=>lane===node.lane));
        seen.add(node.id);
      }
      for(const id of [...Object.values(snapshot.refs),...Object.values(snapshot.tags)]) {
        if(id!==null)assert.ok(seen.has(id),`${module.id}: reference to missing commit ${id}`);
      }
    }
  }
});
test('Gitflow carries both corrections into develop and retains release tags',()=>{
  const read=load(),snapshot=read('beyondSnapshot(beyondModules.find(m=>m.id==="gitflow"),11)');
  const nodes=new Map(snapshot.nodes.map(node=>[node.id,node]));
  const ancestors=id=>new Set([id,...nodes.get(id).parents.flatMap(parent=>[...ancestors(parent)])]);
  for(const head of [snapshot.refs.main,snapshot.refs.develop]) {
    assert.ok(ancestors(head).has('r1'),'Release spelling fix must survive');
    assert.ok(ancestors(head).has('h1'),'Hotfix must survive');
  }
  assert.deepEqual(snapshot.tags,{'v0.1':'a1','v1.0':'m1','v1.0.1':'m2'});
  assert.equal(snapshot.refs.feature,null);
  assert.equal(snapshot.refs.release,null);
  assert.equal(snapshot.refs.hotfix,null);
});
test('GitHub Flow retains reviewed commits after deleting the feature pointer',()=>{
  const read=load(),snapshot=read('beyondSnapshot(beyondModules.find(m=>m.id==="github"),7)');
  assert.equal(snapshot.refs.main,'m1');
  assert.equal(snapshot.refs.feature,null);
  assert.deepEqual(snapshot.nodes.at(-1).parents,['a1','b3']);
  assert.equal(snapshot.nodes.length,5);
});
test('Release tag stays fixed as main advances',()=>{
  const snapshot=load()('beyondSnapshot(beyondModules.find(m=>m.id==="releases"),5)');
  assert.equal(snapshot.refs.main,'a2');
  assert.equal(snapshot.tags['v1.0.0'],'a1');
});
test('Every decision has a valid correct choice, explanation, and visible outcome',()=>{
  for(const module of load()('beyondModules'))for(const step of module.steps) {
    assert.ok(Number.isInteger(step.correct)&&step.correct>=0&&step.correct<step.choices.length);
    assert.ok(step.story&&step.why&&step.result&&step.command);
    assert.ok(module.lanes||step.evidence);
  }
});
test('Progress restoration rejects malformed entries and tolerates unavailable storage',()=>{
  const read=load(JSON.stringify({habits:{step:-1},problems:{step:999},github:{step:2,solved:true},gitflow:{step:1.5},releases:{step:5,solved:true}}));
  assert.deepEqual(read('beyondProgress'),{github:{step:2,solved:true,choice:null},releases:{step:5,solved:false,choice:null}});
  assert.deepEqual(load('invalid JSON')('beyondProgress'),{});
  assert.deepEqual(load('{}',true)('beyondProgress'),{});
});

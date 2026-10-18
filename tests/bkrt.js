const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const U=APP;
const c1=await b.newContext();const p=await c1.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(U);await p.waitForTimeout(500);
// seed data in ALL keys used
const before=await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=3);S.tests=[{date:today(),scores:scores()}];S.route=buildRoute(scores());S.g.tr={SUE:{b:'2026-09-01'}};store.set('game',S.g);save();
 store.set('diario',[{d:today(),k:'EMO-01',v:'apunte secreto ñ á €'}]);store.set('perg',[{t:'Mi pergamino',x:'texto largo con acentos áéíóú'}]);store.set('foco',{m:25});store.set('tourDone',true);store.set('advEnd',true);store.set('advN',3);store.set('profe',{c:'1A'});store.set('learnInit',true);store.set('name','Laura');
 const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k.startsWith('brujula:')&&!k.startsWith('brujula:ui:')&&k!=='brujula:t')o[k]=localStorage.getItem(k)}return {code:backupCode(),o}});
// new "phone"
const c2=await b.newContext();const q=await c2.newPage();q.on('pageerror',e=>errs.push('2:'+e.message));
await q.addInitScript(()=>{window.__noGuia=1});await q.goto(U);await q.waitForTimeout(500);
const ok=await q.evaluate(c=>restoreCode(c),before.code);
// simulate an app save racing before reload: must NOT overwrite
await q.evaluate(()=>{try{save()}catch(e){};store.set('name','PISADO')});
await q.reload();await q.waitForTimeout(500);
const after=await q.evaluate(()=>{const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k.startsWith('brujula:')&&!k.startsWith('brujula:ui:')&&k!=='brujula:t')o[k]=localStorage.getItem(k)}return o});
const miss=Object.keys(before.o).filter(k=>after[k]!==before.o[k]);
const A=JSON.parse(before.o['brujula:game']),Bq=JSON.parse(after['brujula:game']||'{}');console.log('game diff',Object.keys({...A,...Bq}).filter(k=>JSON.stringify(A[k])!==JSON.stringify(Bq[k])).map(k=>k+':'+JSON.stringify(A[k])+' -> '+JSON.stringify(Bq[k])).join(' | ').slice(0,600));console.log('restore ok:',ok,'keys origen:',Object.keys(before.o).length,'distintas/perdidas:',miss.length,miss.slice(0,10));
// old-format code (only 34 keys) still accepted
const old=await q.evaluate(()=>{const o={v:1,name:"Viejo"};return restoreCode("BRUJULA-"+btoa(unescape(encodeURIComponent(JSON.stringify(o)))))});
console.log('codigo antiguo aceptado:',old,'errores:',errs);await b.close()})();

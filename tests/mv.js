const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(600);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();store.set('game',S.g);S.tourDone=true;startReto("MOV-02")});await p.waitForTimeout(400);
for(let i=0;i<7;i++)await p.click(`[data-rxset="base.d${i}|30"]`);await p.click('[data-rxtog="hu|Ir en bici"]');await p.waitForTimeout(200);
await (await p.$('.rxsetup')).screenshot({path:'mv2.png'});console.log(await p.evaluate(()=>[JSON.stringify(S.active.x),RX["MOV-02"].ok(S.active)]));
// MOV-03 setup text
await p.evaluate(()=>{S.active={id:"MOV-03",start:today(),plan:"",log:{},rating:null};save();render()});await p.waitForTimeout(300);
await p.fill('[data-rxtext="t0.fl"]','6');await p.dispatchEvent('[data-rxtext="t0.fl"]','change');await p.waitForTimeout(200);console.log(await p.evaluate(()=>JSON.stringify(S.active.x)));
// MOV-04 silla tool
await p.evaluate(()=>{S.active={id:"MOV-04",start:addDays(today(),-1),plan:"x",alarm:1,log:{},rating:null};save();render()});await p.waitForTimeout(300);
await p.click('[data-act=silla-roll]');await p.waitForTimeout(200);console.log(await p.evaluate(()=>document.querySelector('.sillach')?.textContent));
// MOV-01 dato
await p.evaluate(()=>{const st=addDays(today(),-7);S.active={id:"MOV-01",start:st,plan:"x",alarm:1,log:{},rating:null};for(let k=0;k<5;k++){const d=addDays(st,k);S.diario.push({id:"MOV-01",d,t:Date.now()+k,v:[String(4+k%2),String(7),"20 min"]});S.active.log[d]="si"}save();render()});await p.waitForTimeout(300);
console.log(await p.evaluate(()=>document.querySelector('.dprev')?.textContent));
console.log(errs);await b.close()})();

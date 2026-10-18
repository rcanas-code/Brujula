const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(600);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();store.set('game',S.g);S.tourDone=true;startReto("SUE-01")});await p.waitForTimeout(500);
await (await p.$('.bzmis,.retocard')).screenshot({path:'su1.png'});
await p.click('[data-rxset="bet|8"]');await p.waitForTimeout(200);
// day 2 entries
await p.evaluate(()=>{S.active.plan="x";S.active.alarm=1;S.active.start=addDays(today(),-1);save();render()});await p.waitForTimeout(300);
await p.fill('#rg0','00:30');await p.fill('#rg1','07:15');await p.click('[data-rgm="2|Series o vídeos"]');await p.click('[data-act=rg-save]');await p.waitForTimeout(300);
console.log(await p.evaluate(()=>[rgEntries("SUE-01").length,S.active.log[today()]]));
// day 7 dato
await p.evaluate(()=>{const st=addDays(today(),-7);S.active.start=st;S.diario=S.diario.filter(x=>x.id!=="SUE-01");for(let k=0;k<6;k++){const d=addDays(st,k);S.diario.push({id:"SUE-01",d,t:Date.now()+k,v:["00:"+(10+k*5),"07:10",k%2?"Móvil o redes":"Series o vídeos, Móvil o redes"]});S.active.log[d]="si"}save();render()});await p.waitForTimeout(300);
console.log(await p.evaluate(()=>document.querySelector('.dprev')?.textContent));
await (await p.$('.bzmis,.retocard')).screenshot({path:'su7.png'});
// reflejos
await p.evaluate(()=>{S.active={id:"SUE-06",start:addDays(today(),-1),plan:"x",alarm:1,log:{},rating:null};save();render()});await p.waitForTimeout(300);
await p.click('[data-act=rf-open]');for(let i=0;i<5;i++){await p.dispatchEvent('#rfpad','pointerdown');await p.waitForFunction(()=>document.querySelector('#rfpad.go'),null,{timeout:6000});await p.waitForTimeout(150);await p.dispatchEvent('#rfpad','pointerdown');await p.waitForTimeout(100)}
await (await p.$('#dlg')).screenshot({path:'surf.png'});await p.click('[data-act=rf-use]');await p.waitForTimeout(300);
console.log(await p.evaluate(()=>[S.rfLast,document.getElementById('rg0')?.value]));
console.log(errs);await b.close()})();

const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(600);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();store.set('game',S.g);S.tourDone=true;
 S.active={id:"SUE-01",start:addDays(today(),-2),plan:"x",time:"21:30",alarm:1,log:{[addDays(today(),-2)]:"si"},rating:null};save();go("hoy")});await p.waitForTimeout(500);
console.log(await p.evaluate(()=>[!!document.querySelector('.howto'),!!document.querySelector('.ayer'),document.querySelector('.ayer')?.textContent.slice(0,60)]));
await (await p.$('.bzmis,.retocard')).screenshot({path:'f1a.png'});
// gap 2
await p.evaluate(()=>{S.active.start=addDays(today(),-4);S.active.log={[addDays(today(),-4)]:"si"};S.rescued=false;save();render()});await p.waitForTimeout(300);
console.log(await p.evaluate(()=>[retoGap(),!!document.querySelector('.gback'),guiaTips()[0][0].slice(0,50)]));await p.screenshot({path:'f1b.png'});
// finish -> disc
await p.evaluate(()=>{S.active.start=addDays(today(),-7);const L={};for(let k=0;k<6;k++)L[addDays(S.active.start,k)]="si";S.active.log=L;S.active.rating=4;finishReto("next");go("hoy")});await p.waitForTimeout(300);
console.log(await p.evaluate(()=>[!!document.querySelector('.dnew'),(S.g.disc||[]).length]));await p.screenshot({path:'f1c.png'});
await p.click('[data-act=disc-ok]');await p.evaluate(()=>{S.pergOpen=true;go("mas")});await p.waitForTimeout(300);
await p.fill('[data-perg=libre]','Hola mundo');await p.waitForTimeout(700);console.log(await p.evaluate(()=>[S.perg.length,JSON.parse(localStorage.getItem('brujula:perg')||'[]').length,document.querySelector('.pergs').textContent]));
await p.evaluate(()=>{const d=document.createElement('div');d.id='dt';d.innerHTML=dialBox('t1','¿Cuánto?');document.getElementById('app').prepend(d)});await p.click('[data-dial="t1|7"]');console.log(await p.evaluate(()=>[S.g.dial.t1,document.querySelector('.dialb.on').textContent]));
await p.screenshot({path:'f1d.png',fullPage:true});console.log(errs);await b.close()})();

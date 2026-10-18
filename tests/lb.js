const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(600);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();store.set('game',S.g);S.tourDone=true;go("explorar")});await p.waitForTimeout(300);
await p.waitForSelector('[data-act=lib-rec]:not([disabled])',{timeout:20000});await p.click('[data-act=lib-rec]');await p.waitForTimeout(400);console.log(await p.evaluate(()=>document.querySelector('.advtxt').classList.contains('typing')));
await p.waitForSelector('[data-librq=SUE]:not([disabled])',{timeout:20000});await p.screenshot({path:'lb1.png'});await p.click('[data-librq=SUE]');
await p.waitForSelector('.dlgo.go:not([disabled])',{timeout:20000});await p.screenshot({path:'lb2.png'});console.log(await p.evaluate(()=>document.querySelector('.libbox .advtxt').textContent.slice(0,140)));
await p.click('.dlgo.go');await p.waitForTimeout(400);console.log(await p.evaluate(()=>[document.getElementById('dlg').open,S.libR&&S.libR.id]));console.log(errs);await b.close()})();

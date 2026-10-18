const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(600);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();S.g.tr={SUE:{b:"2026-10-16"},HAB:{b:"2026-10-16"},ATE:{b:"2026-10-16"}};S.g.celebrated=1;store.set('game',S.g);S.tourDone=true;go("mundo")});await p.waitForTimeout(800);
await p.evaluate(()=>{document.querySelectorAll('.celeb').forEach(e=>e.remove());document.body.style.overflow=''});
const s0=await p.evaluate(()=>[document.querySelector('.mwwrap').scrollLeft,document.querySelector('.mwwrap').scrollTop]);
const tgt=await p.evaluate(()=>[...mwSeen()].find(k=>k!==S.g.at&&k!=="VAL"&&k!==mwFocus(mwSeen())));console.log('go to',tgt,s0);
await p.evaluate(k=>document.querySelector(`[data-mw="${k}"]`).click(),tgt);await p.waitForTimeout(2800);
console.log(await p.evaluate(()=>[document.querySelector('.mwwrap').scrollLeft,document.querySelector('.mwwrap').scrollTop,S.g.at]));await p.screenshot({path:'mw2.png'});console.log(errs);await b.close()})();

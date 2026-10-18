const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(600);
const big=async(n)=>{await p.evaluate(()=>{document.getElementById('dlg').style.maxHeight='none'});await (await p.$('#dlg')).screenshot({path:n});await p.evaluate(()=>{document.getElementById('dlg').style.maxHeight=''})};
await p.evaluate(()=>xrOpen());await p.waitForTimeout(300);await big('al0.png');
await p.click('[data-xr=cola]',{force:true});await p.click('[data-act=xr-ray]',{force:true});await p.waitForTimeout(400);await big('al1.png');
await p.evaluate(()=>duOpen());await p.waitForTimeout(300);await p.evaluate(()=>document.querySelector('[data-du]').click());await p.waitForTimeout(300);await big('al2.png');
await p.evaluate(()=>{baOpen();BA.g="des"});await p.evaluate(()=>{['huevo','pint','fruta'].forEach(k=>document.querySelector(`[data-ba="${k}"]`).click())});await p.waitForTimeout(300);await big('al3.png');
await p.evaluate(()=>document.querySelector('[data-act=ba-done]').click());await p.waitForTimeout(300);console.log(await p.evaluate(()=>JSON.stringify(S.g.ali)));
// reto ALI-04 dato
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();S.tourDone=true;document.getElementById('dlg').close();const st=addDays(today(),-7);S.active={id:"ALI-04",start:st,plan:"x",alarm:1,log:{},rating:null};const V=[["A: bollería, galletas o zumo","8","4"],["B: pan integral con huevo, o yogur con fruta y frutos secos","3","8"]];for(let k=0;k<5;k++){const d=addDays(st,k);S.diario.push({id:"ALI-04",d,t:Date.now()+k,v:V[k%2]});S.active.log[d]="si"}save();go("hoy")});await p.waitForTimeout(300);
console.log(await p.evaluate(()=>document.querySelector('.dprev')?.textContent));console.log(errs);await b.close()})();

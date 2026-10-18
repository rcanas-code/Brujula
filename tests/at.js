const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(600);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();store.set('game',S.g);S.tourDone=true;
 const st=addDays(today(),-7);S.active={id:"ATE-08",start:st,plan:"x",alarm:1,log:{},rating:null};for(let k=0;k<5;k++){const d=addDays(st,k);S.diario.push({id:"ATE-08",d,t:Date.now()+k,v:[String(2+k%2),String(4),"25 min"]});S.active.log[d]="si"}save();go("hoy")});await p.waitForTimeout(400);
console.log(await p.evaluate(()=>[document.querySelector('.dprev')?.textContent,document.querySelector('.pltal')?.textContent.slice(0,60)]));
for(const id of ["ATE-01","ATE-02","ATE-03","ATE-04","ATE-05","ATE-06","ATE-07"]){await p.evaluate(id=>{S.active={id,start:addDays(today(),-1),plan:"x",alarm:1,log:{},rating:null};save();render()},id);await p.waitForTimeout(200);console.log(id,await p.evaluate(()=>[!!document.querySelector('.howto'),!!document.querySelector('.rgform'),document.querySelector('.rgform .btn.ghost, .rgform ~ *')?.textContent?.slice(0,30)||""]))}
await p.evaluate(()=>{S.active={id:"ATE-07",start:today(),plan:"",log:{},rating:null};save();render()});await p.click('[data-rxset="ap|TikTok"]');console.log(await p.evaluate(()=>S.active.x));
console.log(errs);await b.close()})();

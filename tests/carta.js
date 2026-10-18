const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const p=await b.newPage({viewport:{width:360,height:760}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(APP);
await p.evaluate(()=>{localStorage.setItem('brujula:name',JSON.stringify('Laura'))});await p.reload();
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:today(),scores:scores()}];S.route=buildRoute(scores());S.tourDone=true;store.set("tourDone",true);S.view="hoy";save();render()});
await p.waitForTimeout(500);
for(let i=0;i<8;i++){const info=await p.evaluate(()=>{const b=document.querySelector('[data-carta]:not(.ghost)');if(!b)return {none:true,view:S.view,carta:S.g.carta,txt:document.querySelector('main,#app,body').innerText.slice(0,200)};const r=b.getBoundingClientRect();const el=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return {txt:b.textContent,top:el&&(el.className||el.tagName),same:el===b||b.contains(el),y:r.y,h:innerHeight}});console.log(i,JSON.stringify(info).slice(0,300));if(info.none)break;await p.evaluate(()=>document.querySelector('[data-carta]:not(.ghost)').click());await p.waitForTimeout(400)}
await p.screenshot({path:'carta_end.png'});console.log(errs);await b.close()})();

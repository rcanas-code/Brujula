const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:360,height:760},deviceScaleFactor:2});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(APP);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.answers[0]=1;S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();store.set('game',S.g);S.tourDone=true;save();render()});
const seen=await p.evaluate(()=>[...mwSeen()]);console.log('seen',seen);
const fogK=await p.evaluate(()=>Object.keys(MWPOS).find(k=>!mwSeen().has(k)&&GDIF[k]));const fogC=await p.evaluate(k=>C.find(c=>AREAS[c.a].k===k).id,fogK);
await p.evaluate(id=>openConcept(id),fogC);await p.waitForTimeout(300);console.log('fog box:',await p.evaluate(()=>document.querySelector('#dlg .lqbox').className));
await p.evaluate(()=>document.getElementById('dlg').close());console.log('seen after reading fog:',await p.evaluate(()=>mwSeen().size));
await p.evaluate(k=>{qzStart(k)},fogK);console.log('quiz fog blocked:',await p.evaluate(()=>S.qz===null));
const id=await p.evaluate(s=>C.find(c=>AREAS[c.a].k===s&&c.e!=="X").id,seen[0]);
await p.evaluate(id=>openConcept(id),id);await p.waitForTimeout(500);
console.log('before:',await p.evaluate(()=>document.querySelector('#dlg .lqbox').className),await p.evaluate(id=>lqWait(id),id));

await p.evaluate(()=>{const d=document.getElementById('dlg');d.scrollTop=d.scrollHeight;S.lqRead.t0-=60000});await p.waitForTimeout(1300);
console.log('after:',await p.evaluate(()=>document.querySelector('#dlg .lqbox').className),await p.$$eval('#dlg [data-lq]',x=>x.length));
await p.click('#dlg [data-lq]:not([data-lq="0"])');await p.waitForTimeout(300);
console.log('after fail:',await p.evaluate(()=>document.querySelector('#dlg .lqbox').textContent.slice(0,60)));

console.log(errs);await b.close()})();

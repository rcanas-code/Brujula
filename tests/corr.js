const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(500);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();S.tourDone=true;startReto("ALI-12");S.active.start=addDays(today(),-2);S.active.plan="x";S.active.alarm=1;S.g.guiaH=today();save();go('hoy',true)});await p.waitForTimeout(800);
const st=()=>p.evaluate(()=>({log:S.active.log[today()]||null,xp:points(),g:gXP(),done:!!document.querySelector('.bzmis.ok'),opts:document.querySelectorAll('.bzmis .checkin [data-log]').length}));
const out=[['inicio',await st()]];
for(const v of ['si','poco','no','si','si']){await p.click(`.bzmis .checkin [data-log="${v}"]`);await p.waitForTimeout(500);const dl=await p.$('#dlg[open] button');if(dl){await p.keyboard.press('Escape')}await p.waitForTimeout(200);out.push([v,await st()])}
await p.reload();await p.waitForTimeout(800);out.push(['recarga',await st()]);
out.forEach(o=>console.log(o[0],JSON.stringify(o[1])));console.log(errs);await b.close()})();

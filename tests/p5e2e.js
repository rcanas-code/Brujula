const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const F=APP;
const errs=[];
const T=await (await b.newContext({viewport:{width:360,height:760},deviceScaleFactor:2})).newPage();T.on('pageerror',e=>errs.push('T '+e.message));
await T.goto(F+'?profe');await T.waitForTimeout(300);await T.screenshot({path:'e_t0.png',fullPage:true});
await T.fill('#pfmail','profe.prueba@ejemplo.cat');await T.click('[data-act="pf-new"]');await T.waitForTimeout(500);
await T.fill('#pfcls','1.º B');await T.click('[data-act="pf-cls"]');await T.waitForTimeout(200);
const link=await T.evaluate(()=>{const P=pfGet();return pfLink(P,P.cls[0])});
await T.screenshot({path:'e_t1.png',fullPage:true});
const St=await (await b.newContext({viewport:{width:360,height:760},deviceScaleFactor:2})).newPage();St.on('pageerror',e=>errs.push('S '+e.message));
await St.goto(F);await St.evaluate(()=>{localStorage.setItem('brujula:name',JSON.stringify('Laura'));QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();S.g.lore=Object.fromEntries(Object.keys(MWPOS).map(k=>[k,today()]));store.set('game',S.g);S.tourDone=true;save()});
await St.goto(F+'?clase='+link.split('clase=')[1]);await St.waitForTimeout(300);await St.screenshot({path:'e_s0.png',fullPage:true});
await St.click('[data-act="cls-join"]');await St.waitForTimeout(200);
await St.evaluate(()=>{S.g.tr.DIN={b:addDays(today(),-10)};S.g.ok=S.g.ok||{};['DIN-01','DIN-02','DIN-03'].forEach(i=>S.g.ok[i]=addDays(today(),-12));S.quizR.DIN={best:8,last:8,n:1,date:addDays(today(),-11),pass:addDays(today(),-11)};S.g.lore=Object.fromEntries(Object.keys(MWPOS).map(k=>[k,today()]));S.history.push({id:"DIN-05",start:addDays(today(),-8),end:addDays(today(),-1),passed:true,finished:true});S.g.last=null;save();store.set('game',S.g);S.reg='DIN';go('region')});
await St.waitForTimeout(300);await St.screenshot({path:'e_s1.png',fullPage:true});
await St.click('[data-gact="foto|DIN"]');await St.waitForTimeout(300);await St.screenshot({path:'e_s2.png',fullPage:true});
const val=await St.evaluate(()=>prMail('DIN').body.match(/validar=([A-Za-z0-9_-]+)/)[1]);
await T.goto(F+'?validar='+val);await T.waitForTimeout(300);await T.screenshot({path:'e_t2.png',fullPage:true});
await T.click('[data-act="val-ok"]');await T.waitForTimeout(500);await T.screenshot({path:'e_t3.png',fullPage:true});
const ok=await T.evaluate(()=>S.valOut.txt.match(/ok=([A-Za-z0-9_-]+)/)[1]);
// enlace a otro alumno: no debe valer
await St.goto(F+'?ok='+ok);await St.waitForTimeout(1500);
const res=await St.evaluate(()=>({pv:S.g.pv,metal:gArea('DIN').metal,view:S.view,celeb:!!document.querySelector('.celeb')}));
console.log('student after ok',JSON.stringify(res));await St.screenshot({path:'e_s3.png'});
// honor mode
const H=await (await b.newContext({viewport:{width:360,height:760}})).newPage();H.on('pageerror',e=>errs.push('H '+e.message));
await H.goto(F);await H.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();S.g.lore=Object.fromEntries(Object.keys(MWPOS).map(k=>[k,today()]));S.g.tr.HAB={b:addDays(today(),-10)};S.history.push({id:"HAB-01",end:addDays(today(),-1),passed:true,finished:true});save();store.set('game',S.g);S.fotoK='HAB';go('prueba')});
await H.screenshot({path:'e_h0.png',fullPage:true});await H.check('#honorchk');await H.click('[data-act="honor-ok"]');await H.waitForTimeout(300);
console.log('honor',await H.evaluate(()=>gArea('HAB').metal));
// enlace manipulado
const bad=ok.slice(0,-3)+'AAA';const X=await (await b.newContext()).newPage();
console.log(errs);await b.close()})();

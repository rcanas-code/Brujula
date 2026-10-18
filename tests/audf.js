const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:360,height:740}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(APP);await p.waitForTimeout(400);
await p.evaluate(()=>{localStorage.clear();QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-12),scores:scores()}];S.route=buildRoute(scores());S.tourDone=true;store.set("tourDone",true);S._intro=false;S.g.carta=today();S.g.guiaIntro=today();S.g.celebrated=1;startReto("ALI-12");S.active.start=addDays(today(),-2);S.active.plan="x";S.active.alarm=1;S.active.log[addDays(today(),-2)]="si";S.active.log[addDays(today(),-1)]="si";store.set('game',S.g);save();go('hoy',true)});await p.waitForTimeout(800);
const st=async l=>console.log(l,JSON.stringify(await p.evaluate(()=>({log:S.active.log[today()],xp:points(),racha:streak(),g:goodDays(S.active)}))));
await st('inicio');await p.evaluate(()=>document.querySelector('.checkin [data-log="si"]').click());await p.waitForTimeout(300);await st('Sí');await p.evaluate(()=>document.querySelector('.checkin [data-log="si"]').click());await p.waitForTimeout(300);await st('Sí otra vez (desmarca)');
await p.evaluate(()=>document.querySelector('.checkin [data-log="poco"]').click());await p.waitForTimeout(300);await st('Un poco');await p.evaluate(()=>document.querySelector('.checkin [data-log="si"]').click());await p.waitForTimeout(300);await st('cambia a Sí');
await p.reload();await p.waitForTimeout(600);await st('recarga');
// Aguja visible: ¿tapa el botón principal en reposo?
await p.evaluate(()=>{S.g.guiaH=null;startReto("EMO-01");S.active.start=addDays(today(),-2);S.active.plan="x";S.active.alarm=1;save();go('hoy',true)});await p.waitForTimeout(900);
await p.evaluate(()=>{const sv=document.querySelector('.bzmis [data-act="rg-save"]');sv.scrollIntoView({block:'end'})});await p.waitForTimeout(1500);
const ov=await p.evaluate(()=>{const sv=document.querySelector('.bzmis [data-act="rg-save"]'),a=sv.getBoundingClientRect(),g=document.getElementById('guiafl').getBoundingClientRect(),n=document.getElementById('nav').getBoundingClientRect();return {save:[a.top|0,a.bottom|0,a.right|0],guia:[g.top|0,g.bottom|0,g.left|0],nav:n.top|0}});console.log('solape',JSON.stringify(ov));
await p.screenshot({path:'aud/ov360.png'});
console.log(errs);await b.close()})();

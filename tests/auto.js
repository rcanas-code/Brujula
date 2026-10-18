const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const F=APP;const errs=[];
// profe crea clase (herramienta sigue funcionando)
const T=await (await b.newContext()).newPage();T.on('pageerror',e=>errs.push('T '+e.message));
await T.goto(F+'?profe');await T.waitForTimeout(300);await T.click('[data-act="pf-new"]');await T.waitForTimeout(500);await T.fill('#pfcls','1.º B');await T.click('[data-act="pf-cls"]');await T.waitForTimeout(200);
const link=await T.evaluate(()=>{const P=pfGet();return pfLink(P,P.cls[0])});
async function run(conClase){
 const p=await (await b.newContext({viewport:{width:360,height:740}})).newPage();p.on('pageerror',e=>errs.push((conClase?'C ':'S ')+e.message));
 await p.addInitScript(()=>{window.__noGuia=1});await p.goto(F);await p.waitForTimeout(300);
 await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-30),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();S.g.celebrated=1;S.tourDone=true;S.g.lore=Object.fromEntries(Object.keys(MWPOS).map(k=>[k,addDays(today(),-29)]));save();store.set('game',S.g)});
 if(conClase){await p.goto(F+'?clase='+link.split('clase=')[1]);await p.waitForTimeout(300);await p.evaluate(()=>document.querySelector('[data-act="cls-join"]').click());await p.waitForTimeout(200)}
 const k='HAB',out=[];
 // BRONCE: lecturas clave + quiz
 out.push(await p.evaluate(k=>{const cs=C.filter(c=>AREAS[c.a].k===k);S.g.ok=S.g.ok||{};cs.forEach(c=>S.g.ok[c.id]=addDays(today(),-20));S.quizR=S.quizR||{};S.quizR[k]={best:9,last:9,n:1,date:addDays(today(),-20),pass:addDays(today(),-20)};save();store.set('game',S.g);const m=gArea(k).metal;S.g.tr[k].b=addDays(today(),-20);store.set('game',S.g);return 'bronce:'+m},k));
 // PLATA: reto de 7 días hecho + palabra de honor por la pantalla real
 await p.evaluate(k=>{S.history.push({id:"HAB-01",start:addDays(today(),-9),end:addDays(today(),-2),passed:true,finished:true});save();S.fotoK=k;go('prueba')},k);await p.waitForTimeout(300);await p.evaluate(()=>document.querySelectorAll('.celeb').forEach(e=>e.remove()));
 out.push('pantalla:'+await p.evaluate(()=>{const t=document.querySelector('#app').innerText;return /palabra de honor/i.test(t)?'honor':/foto/i.test(t)?'foto':'otra'}));
 await p.evaluate(()=>{document.querySelectorAll('.celeb').forEach(e=>e.remove());document.getElementById('honorchk').checked=true;document.querySelector('[data-act="honor-ok"]').click()});await p.waitForTimeout(300);
 out.push(await p.evaluate(k=>'plata:'+gArea(k).metal+' duelo bloqueado:'+/validar/.test(gArea(k).next),k));
 // ORO: 3 días de entreno, duelo 9/10 y reflexión escrita (sin enviar)
 out.push(await p.evaluate(k=>{const T0=S.g.tr[k];S.g.ent=S.g.ent||{};S.g.ent[k]=[addDays(today(),-1),addDays(today(),-1),today()].map((d,i)=>addDays(today(),-i));const A=gArea(k);const act=A.act&&A.act[0];return 'tras entrenar, siguiente paso:'+act},k));
 out.push(await p.evaluate(k=>{S.g.fin=S.g.fin||{};S.g.fin[k]={pass:today(),best:9};S.g.ref=S.g.ref||{};S.g.ref[k]={t:'Aprendí a preparar mi entorno.',date:today()};store.set('game',S.g);return 'oro:'+gArea(k).metal},k));
 await p.evaluate(()=>{go('mas',true)});await p.reload();await p.waitForTimeout(300);
 out.push(await p.evaluate(k=>'tras recargar:'+gArea(k).metal,k));
 console.log(conClase?'CON CLASE  ':'SIN CLASE  ',out.join(' | '));await p.close()}
await run(false);await run(true);
// progreso antiguo de un alumno con clase: plata pendiente de validar y reflexión sin enviar
const M=await (await b.newContext()).newPage();M.on('pageerror',e=>errs.push('M '+e.message));await M.addInitScript(()=>{window.__noGuia=1});
await M.goto(F);await M.waitForTimeout(300);
const r=await M.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-30),scores:scores()}];S.route=buildRoute(scores());S.cls={i:'x',n:'1B',e:'p@x.cat',x:'a',y:'b'};store.set('cls',S.cls);
 S.g.tr.DIN={b:addDays(today(),-20),p:addDays(today(),-10)};S.g.pvs={DIN:addDays(today(),-10)};S.g.honor={};S.g.pv={HAB:addDays(today(),-15)};S.g.tr.HAB={b:addDays(today(),-25),p:addDays(today(),-15),o:addDays(today(),-5)};S.g.ref={DIN:{t:'x',date:today()}};store.set('game',S.g);save();
 return {din:gArea('DIN').metal,hab:gArea('HAB').metal,pendiente:prPend('DIN'),duelo:/validar/.test(gArea('DIN').next)}});
console.log('PROGRESO ANTIGUO',JSON.stringify(r));
console.log('errores',errs);await b.close()})();

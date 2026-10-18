const {APP,OFF,ANTES,FONT}=require('./_entorno');
// Migración: partida antigua (reglas anteriores) → modelo D → vuelta al interruptor apagado.
const {chromium}=require('playwright');
const R=[];const ok=(n,c,i)=>R.push([c?'OK ':'FALLO',n,i===undefined?'':JSON.stringify(i)]);
(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const ctx=await b.newContext();const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.clock.install({time:new Date('2026-11-02T10:00:00')});const E=(f,a)=>p.evaluate(f,a);
const snapF=()=>E(()=>{const G=gState();return {xp:G.xp,l:G.l,st:G.st,tr:JSON.stringify(S.g.tr),metals:Object.fromEntries(Object.keys(GDIF).map(k=>{const A=gArea(k);return [k,A.mC||A.metal]})),diario:JSON.stringify(S.diario),perg:JSON.stringify(S.perg),hist:JSON.stringify(S.history),ok:JSON.stringify(S.g.ok),keys:Object.keys(localStorage).sort().join()}});
// 1) partida antigua creada con las reglas anteriores (interruptor apagado)
await p.goto(OFF);await p.waitForTimeout(400);
await E(()=>{localStorage.clear();QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:"2026-09-20",scores:scores()}];S.route=buildRoute(scores());S.tourDone=true;store.set("tourDone",true);S.name="Ana";store.set("name","Ana");
 Object.assign(S.g,{carta:"2026-09-20",celebrated:1,lore:{EDU:"2026-09-21",HAB:"2026-09-21",ATE:"2026-09-22",SUE:"2026-09-20"},ok:{"EDU-01":"2026-09-22","EDU-02":"2026-09-23","EDU-06":"2026-09-24","HAB-01":"2026-09-25","ATE-01":"2026-09-26","SUE-01":"2026-09-21"},
  tr:{EDU:{b:"2026-09-25",p:"2026-10-03",o:"2026-10-12"},HAB:{b:"2026-09-27"},ATE:{b:"2026-09-28",p:"2026-10-06"},SUE:{b:"2026-09-22",p:"2026-09-30",o:"2026-10-10"}},fin:{EDU:{pass:"2026-10-12"},SUE:{pass:"2026-10-10"}},ent:{EDU:["2026-10-05","2026-10-07","2026-10-09"]}});
 S.quizR={EDU:{pass:true,best:9},HAB:{pass:true,best:8}};
 S.history=[{id:"EDU-01",start:"2026-09-26",end:"2026-10-03",log:{"2026-09-26":"si","2026-09-27":"si","2026-09-28":"no","2026-09-29":"si","2026-09-30":"si","2026-10-01":"si"},finished:true,passed:true,plan:"x"}];
 S.active={id:"HAB-03",start:"2026-10-29",plan:"Si llego a casa, entonces 2 minutos",log:{"2026-10-29":"si","2026-10-30":"si","2026-10-31":"poco","2026-11-01":"si"},rating:null};
 S.diario=[{id:"ATE-08",d:"2026-10-01",t:1,v:["3","5"]}];S.perg=[{id:"x",d:"2026-10-02"}];store.set("perg",S.perg);store.set("diario",S.diario);store.set("game",S.g);store.set("quiz",S.quizR);save();go("hoy",true)});
await p.waitForTimeout(500);const before=await snapF();const oldCode=await E(()=>backupCode());const ls0=await E(()=>JSON.stringify(localStorage));
ok('Partida antigua preparada',before.metals.EDU==='oro',before);
// 2) se abre con el modelo D
await p.goto(APP);await p.waitForTimeout(600);const after=await snapF();const g=await E(()=>({tools:S.g.tools,cst:S.g.cst,rulesV:S.g.rulesV,dMax:S.g.dMax,leg:S.g.leg,trD:S.g.trD}));
ok('Trofeos antiguos intactos',after.tr===before.tr);
ok('XP no baja',after.xp>=before.xp,{antes:before.xp,despues:after.xp});ok('Nivel no baja',after.l>=before.l,{antes:before.l,despues:after.l});ok('Etapa no baja',after.st>=before.st,{antes:before.st,despues:after.st});
ok('Recuento de trofeos incluye los históricos',JSON.stringify(after.metals)===JSON.stringify(before.metals),after.metals);
ok('Diarios, pergaminos, retos y lecturas intactos',after.diario===before.diario&&after.perg===before.perg&&after.hist===before.hist&&after.ok===before.ok,{d:after.diario===before.diario,p:after.perg===before.perg,h:after.hist===before.hist,o:after.ok===before.ok,perg:after.perg});
ok('Plata antigua da la herramienta de la región',!!g.tools.calendario&&g.tools.calendario.src==='hist'&&!!g.tools.foco,g.tools);
ok('Bronce antiguo no marca conceptos como comprendidos',Object.keys(g.cst).length===0);
ok('Reto en curso registrado para terminar con reglas antiguas',g.leg&&g.leg.HAB&&g.leg.HAB.start==='2026-10-29',g.leg);
ok('Región muestra trofeo histórico',await E(()=>{S.reg="EDU";go("region");return /Trofeo histórico: oro/.test(document.body.innerText)}));
// 3) repetir la migración (recargar dos veces) sin efectos dobles
const g1=await E(()=>localStorage.getItem('brujula:game'));await p.reload();await p.waitForTimeout(300);await p.reload();await p.waitForTimeout(300);const g2=await E(()=>localStorage.getItem('brujula:game'));
const strip=s=>{const o=JSON.parse(s);delete o.last;return JSON.stringify(o)};ok('Migración repetible sin efectos dobles',strip(g1)===strip(g2));
// 4) terminar el reto en curso con las reglas antiguas
await p.clock.fastForward(2*864e5);await E(()=>{["2026-11-02","2026-11-03","2026-11-04"].forEach(d=>S.active.log[d]="si");S.active.rating=4;finishReto("next");gArea("HAB")});
ok('Reto antiguo terminado da la plata histórica',await E(()=>!!S.g.tr.HAB.p&&!!S.g.tools.plan),await E(()=>S.g.tr.HAB));
// 5) restaurar una copia antigua en la versión D
await E(()=>localStorage.clear());await p.reload();await p.waitForTimeout(300);await E(c=>restoreCode(c),oldCode);await p.reload();await p.waitForTimeout(500);
const rs=await snapF();ok('Copia antigua restaurada y migrada',rs.tr===before.tr&&rs.xp>=before.xp&&rs.st>=before.st,{xp:rs.xp,st:rs.st});
// 6) volver al interruptor apagado: la partida funciona como antes
await p.goto(OFF);await p.waitForTimeout(500);const off=await snapF();
ok('Interruptor apagado: trofeos y métricas como antes',off.tr===before.tr&&JSON.stringify(off.metals)===JSON.stringify(before.metals)&&off.l>=before.l,{xp:[before.xp,off.xp]});
ok('Sin errores de JavaScript',errs.length===0,errs.slice(0,4));
console.log(R.map(r=>r.join(' | ')).join('\n'));console.log('TOTAL',R.filter(r=>r[0]==='OK ').length,'/',R.length);await b.close()})();

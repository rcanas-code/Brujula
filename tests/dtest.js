const {APP,OFF,ANTES,FONT}=require('./_entorno');
// Prueba funcional del modelo D con reloj simulado (Playwright clock). Uso: node dtest.js <chromium>
const {chromium}=require('playwright');
const URL=APP;
const R=[];const ok=(n,c,info)=>{R.push([c?'OK ':'FALLO',n,info===undefined?'':JSON.stringify(info)]);};
(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:1});const p=await ctx.newPage();
const errs=[],net=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});p.on('request',r=>{if(!r.url().startsWith('file:')&&!r.url().startsWith('data:'))net.push(r.url())});
await p.clock.install({time:new Date('2026-11-02T10:00:00')});
await p.goto(URL);await p.waitForTimeout(500);
const E=(f,a)=>p.evaluate(f,a);const day=async n=>{await p.clock.fastForward(n*864e5);await E(()=>render());await p.waitForTimeout(150)};
const cel=async()=>{for(let i=0;i<8;i++){const n=await E(()=>{const b=document.querySelectorAll('.celeb .cgo');b.forEach(x=>x.click());const d=document.getElementById('dlg');let o=0;if(d&&d.open){d.close();o=1}return b.length+o});if(!n)break;await p.waitForTimeout(350)}};const clk=async s=>{await cel();await p.click(s)};
const wait=async()=>{await p.clock.fastForward(4000)};const shot=async n=>{await p.screenshot({path:`dshots/${n}.png`,fullPage:false})};
// alumno nuevo: test hecho, regiones piloto como prioridad
await E(()=>{localStorage.clear();TA.forEach((a,i)=>[0,1,2].forEach(j=>S.answers[i*3+j]=["ATE","EDU","HAB"].includes(a.k)?1:4));S.tests=[{date:today(),scores:scores()}];S.route=buildRoute(scores());S.tourDone=true;store.set("tourDone",true);S.name="Laia";store.set("name","Laia");S.g.carta=today();S.g.guiaIntro=today();S.g.guiaH=today();S.g.celebrated=1;store.set("game",S.g);save();go("hoy",true)});
await p.waitForTimeout(600);
ok('Interruptor activo en las 3 regiones',await E(()=>DREG.join()),'EDU,ATE,HAB');
ok('Regiones piloto iniciales en el mapa',await E(()=>mwSeen().has("EDU")&&mwSeen().has("HAB")));
const st0=await E(()=>gState());ok('Alumno nuevo: etapa 1, sin trofeos',st0.st===1&&st0.nb===0,{st:st0.st,xp:st0.xp});
await E(()=>{S.g.lore={ATE:today(),EDU:today(),HAB:today()};store.set("game",S.g);S.reg="EDU";go("region")});await p.waitForTimeout(300);
ok('Prueba cerrada sin lecturas',await E(()=>!dGuardOpen("EDU")&&!document.querySelector('[data-d="dguard|EDU"]')));
await shot('01_region_inicio');
await E(()=>{S.g.ok=S.g.ok||{};S.g.lqn=S.g.lqn||{};["EDU-01","EDU-03","EDU-02","EDU-08"].forEach(id=>S.g.ok[id]=today());S.g.lqn["EDU-04"]={d:today(),n:1};store.set("game",S.g);render()});
ok('Lectura con la comprobación fallada cuenta como trabajada',await E(()=>dVisto(DC["EDU-C"])));
await clk('[data-d="dguard|EDU"]');await p.waitForTimeout(300);await shot('02_guardian_q1');
let c0=await E(()=>S.dg.cur.cid);await clk('[data-dga="0"]');await p.waitForTimeout(80);
ok('Respuesta en menos de 3 s no cuenta',await E(c=>S.dg.st[c].ok1===0&&S.dg.cur.fast===true,c0));
await shot('05_rapida');await clk('[data-d^="dgnext"]');
let guard=0;while(guard++<30){const C=await E(()=>S.dg&&S.dg.cur?1:0);if(!C)break;await wait();await clk('[data-dga="0"]');await clk('[data-d^="dgnext"]');await p.waitForTimeout(50)}
ok('Bronce de Estudio: alumno que acierta a la primera',await E(()=>!!S.g.trD.EDU.b&&dCs("EDU").every(c=>dSt(c.id)==="c")));
ok('Idea difícil empezó con 3 preguntas',await E(()=>S.dg.st["EDU-A"].asked.length>=3));
ok('El bronce D abre camino en el mapa',await E(()=>mwSeen().size>=5),await E(()=>[...mwSeen()]));
await E(()=>{["HAB-04","HAB-03","HAB-05","HAB-01"].forEach(id=>S.g.ok[id]=today());store.set("game",S.g);dGuardStart("HAB")});
guard=0;while(guard++<30){const C=await E(()=>S.dg&&S.dg.cur?1:0);if(!C)break;await wait();await clk('[data-dga="0"]');await clk('[data-d^="dgnext"]');await p.waitForTimeout(50)}
await E(()=>{S.reg="HAB";go("region")});await p.waitForTimeout(1200);
const st1=await E(()=>gState());ok('Evolución: 2 bronces → Explorador',st1.st===2,{st:st1.st});
ok('Celebración mostrada',await E(()=>!!document.querySelector('.celeb')));await shot('06_celebracion');
for(let i=0;i<4;i++){await E(()=>{document.querySelectorAll('.celeb .cgo').forEach(b=>b.click())});await p.waitForTimeout(300)}
ok('Atención aparece en el mapa',await E(()=>mwSeen().has("ATE")));
await E(()=>{S.g.ok["ATE-02"]=today();S.g.ok["ATE-01"]=today();S.g.lqn["ATE-08"]={d:today(),n:1};store.set("game",S.g);S.reg="ATE";go("region")});await p.waitForTimeout(300);
await clk('[data-d="dguard|ATE"]');await p.waitForTimeout(300);
guard=0;let failed=false,seenInTest=new Set(),repeats=0,interleaveOK=true,prev=null;
while(guard++<30){const C=await E(()=>S.dg&&S.dg.cur?{cid:S.dg.cur.cid,qid:S.dg.cur.qid}:null);if(!C)break;
  if(seenInTest.has(C.qid))repeats++;seenInTest.add(C.qid);
  if(prev&&prev.fail&&prev.cid===C.cid&&(await E(()=>S.dg.cs.filter(id=>!S.dg.st[id].res).length))>1)interleaveOK=false;
  await wait();const wrong=C.cid==="ATE-B"&&!failed;await clk(`[data-dga="${wrong?2:0}"]`);if(wrong)failed=true;await p.waitForTimeout(80);
  if(wrong)await shot('03_guardian_feedback');
  prev={cid:C.cid,fail:wrong};await clk('[data-d^="dgnext"]');await p.waitForTimeout(80)}
const g1=await E(()=>({cst:S.g.cst,tr:S.g.trD.ATE}));
ok('Sin preguntas repetidas en la prueba',repeats===0,{repeats});
ok('Tras un fallo, pasa a otra idea antes de volver',interleaveOK);
ok('A la primera → comprendida',g1.cst["ATE-A"].st==="c"&&g1.cst["ATE-C"].st==="c");
ok('Acierto tras feedback → con apoyo, repaso en 2 días',g1.cst["ATE-B"].st==="a"&&g1.cst["ATE-B"].nx==="2026-11-04",g1.cst["ATE-B"]);
ok('Bronce D de Atención',g1.tr&&g1.tr.b==="2026-11-02",g1.tr);
await shot('04_guardian_resultado');
// salir y volver (recarga) conserva la prueba
await p.reload();await p.waitForTimeout(500);ok('Tras recargar se conservan estados',await E(()=>dSt("ATE-B")==="a"&&!!S.g.trD.ATE.b));
// misión fugas
await E(()=>{S.reg="ATE";go("region")});await p.waitForTimeout(200);await shot('07_region_bronce');
await clk('[data-d="dmis|ATE"]');await p.waitForTimeout(200);await shot('08_elegir_mision');
await clk('[data-d="dmpick|ATE|fugas"]');await p.waitForTimeout(150);
const sess=async(f,i)=>{await p.fill('#dff',String(f));await p.fill('#dfi',String(i));await clk('[data-d^="dsave|ATE|app"]');await p.waitForTimeout(100)};
await sess(2,7);await sess(1,6);
await shot('09_contramedida');
await clk('[data-d="dcm|ATE|0"]');await p.waitForTimeout(100);ok('Contramedida incoherente rechazada',await E(()=>S.g.mis.ATE.cm[1]==="bad"));await shot('10_contramedida_mal');
await clk('[data-d="dcm|ATE|2"]');await p.waitForTimeout(100);ok('Contramedida coherente aceptada',await E(()=>S.g.mis.ATE.cm[1]==="ok"));
await sess(1,5);ok('Máximo 2 aplicaciones al día',await E(()=>S.g.mis.ATE.apps.length===2));
await day(3);await sess(1,3);await day(2);await sess(0,2);
await E(()=>{S.reg="ATE";go("region")});await p.waitForTimeout(800);
const pl=await E(()=>({p:S.g.trD.ATE.p,tool:S.g.tools.lente}));ok('Plata sin días seguidos ni caducidad',pl.p==="2026-11-07",pl);ok('Herramienta Lente obtenida',!!pl.tool);
await shot('11_plata');await E(()=>{document.querySelectorAll('.celeb .cgo').forEach(b=>b.click())});await p.waitForTimeout(300);await E(()=>{document.querySelectorAll('.celeb .cgo').forEach(b=>b.click())});
ok('Texto de plata no afirma competencia',await E(()=>{S.dm={k:"ATE"};go("dmis");return /registrado por ti/.test(document.body.innerText)&&!/sabes aplicarla/i.test(document.body.innerText)}));await shot('12_mision_hecha');
// repaso diferido con pista (no promociona) y sin pista (promociona)
ok('Repaso pendiente de la idea con apoyo',await E(()=>dRepDue("ATE").includes("ATE-B")));
await E(()=>dRepStart("ATE"));await p.waitForTimeout(150);await clk('[data-d^="dhint"]');await wait();await shot('13_repaso_pista');await clk('[data-dra="0"]');
ok('Acierto con pista sigue «con apoyo»',await E(()=>dSt("ATE-B")==="a"));await clk('[data-d^="drnext"]');
await day(2);await E(()=>dRepStart("ATE"));await wait();await clk('[data-dra="0"]');ok('Recuperación diferida sin ayuda → comprendida',await E(()=>dSt("ATE-B")==="c"));await shot('14_repaso_ok');
// oro: espera de 10 días que no bloquea
await E(()=>{S.reg="ATE";go("region")});const ow=await E(()=>dOroState("ATE"));ok('Oro cerrado antes de 10 días',!ow.ok&&ow.why==="wait",ow);
ok('Mientras, se puede explorar otra región',await E(()=>{S.reg="HAB";go("region");return dGuardOpen("HAB")===false&&!!document.querySelector('.region')}));
await day(8);ok('A los 10 días se abre',await E(()=>dOroState("ATE").ok));
await E(()=>dOroStart("ATE"));await p.waitForTimeout(150);await shot('15_oro_q1');
const oQ=await E(()=>S.do.Q.map(x=>x.qid));ok('Encuentro solo con preguntas nunca vistas',await E(q=>q.every(id=>S.g.ans.filter(a=>a[0]===id).length===0),oQ),oQ);
ok('Al menos una de transferencia por idea',await E(()=>Object.keys(S.do.st).every(c=>S.do.Q.some(x=>x.cid===c&&["t","h"].includes(DQ[x.qid].q[1])))));
// falla una de ATE-C (1 de 2 → pregunta extra) y falla dos de ATE-A (no consolida)
let failC=false,failA=0;guard=0;while(guard++<20){const ph=await E(()=>S.do.phase);if(ph==="end")break;
  const it=await E(()=>S.do.phase==="q"?S.do.Q[S.do.i]:{cid:"I"});await wait();let pick=0;
  if(it.cid==="ATE-C"&&!failC){pick=1;failC=true}else if(it.cid==="ATE-A"&&failA<2){pick=1;failA++}
  await clk(`[data-doa="${pick}"]`);await p.waitForTimeout(60);await clk('[data-d^="donext"]');await p.waitForTimeout(60)}
const o1=await E(()=>({st:Object.fromEntries(Object.keys(S.g.cst).filter(k=>k.startsWith("ATE")).map(k=>[k,S.g.cst[k].st])),dor:S.g.dor.ATE,tr:S.g.trD.ATE}));
ok('Sin corte por errores: llegó al final',true,o1);ok('1 de 2 + extra acertada → consolidada',o1.st["ATE-C"]==="k");ok('Fallo → nuevo intento a los 2 días, sin perder nada',o1.st["ATE-A"]==="c"&&o1.dor.next==="2026-11-19"&&!o1.tr.o);
await shot('16_oro_resultado');
await day(2);await E(()=>dOroStart("ATE"));const oQ2=await E(()=>S.do.Q.map(x=>x.qid));ok('Reintento con otras preguntas',!oQ2.some(q=>oQ.includes(q)),oQ2);
guard=0;while(guard++<20){const ph=await E(()=>S.do.phase);if(ph==="end")break;await wait();await clk('[data-doa="0"]');await p.waitForTimeout(60);await clk('[data-d^="donext"]');await p.waitForTimeout(60)}
ok('Todas consolidadas',await E(()=>dCs("ATE").every(c=>dSt(c.id)==="k")));ok('Sin eco aún no hay oro',await E(()=>!S.g.trD.ATE.o&&!gArea("ATE").T.o));
await E(()=>{S.dm={k:"ATE"};go("dmis")});await p.waitForTimeout(150);await shot('17_eco');await p.fill('#dff','0');await p.fill('#dfi','1');await clk('[data-d^="dsave|ATE|eco"]');
await E(()=>{S.reg="ATE";go("region")});await p.waitForTimeout(800);ok('Oro D tras eco',await E(()=>S.g.trD.ATE.o==="2026-11-19"));await shot('18_oro');
await E(()=>{document.querySelectorAll('.celeb .cgo').forEach(b=>b.click())});await p.waitForTimeout(200);await E(()=>{document.querySelectorAll('.celeb .cgo').forEach(b=>b.click())});
// herramientas y desafío
await E(()=>{S.dtt=null;go("dtools")});await p.waitForTimeout(150);await shot('19_mochila');
await E(()=>{S.dtt="lente";render()});await p.fill('#tlf','2');await p.fill('#tli','4');await clk('[data-d="tlsave"]');ok('Utilidad Lente guarda sesión',await E(()=>S.g.td.lente.length===1));await shot('20_lente');
await E(()=>{S.dc={k:"ATE",a:{},f:null};go("dchal")});for(const [i,v] of [[0,'f'],[1,'f'],[2,'d'],[3,'d'],[4,'d'],[5,'d']])await clk(`[data-d="dcl|${i}|${v}"]`);await clk('[data-d="dcf|0"]');await shot('21_desafio');
const xpb=await E(()=>gXP());await clk('[data-d^="dcdone"]');const xpa=await E(()=>gXP());ok('Desafío da +20 XP una vez',xpa-xpb===20,{xpb,xpa});
await E(()=>{S.dc={k:"ATE",a:{},f:null,end:true};go("dchal")});await p.reload();await p.waitForTimeout(400);ok('XP sin duplicar al recargar',await E(x=>gXP()===x,xpa));
// semanas activas y Hoy
const W=await E(()=>dWeeks());ok('Semanas activas calculadas',W.n>=2,W);
await E(()=>go("hoy",true));await p.waitForTimeout(400);ok('Hoy muestra semanas activas, no racha',await E(()=>/semanas? activas?/.test(document.querySelector('.hhead').innerText)&&!/🔥/.test(document.querySelector('.hhead').innerText)));await shot('22_hoy');
// «Hoy no» no es práctica
ok('«Hoy no» no cuenta como día de práctica',await E(()=>{const d=addDays(today(),5);S.active={id:"SUE-01",start:today(),plan:"x",log:{[d]:"no"},rating:null};const r=!dDays().has(d);S.active=null;return r}));
// Yo
await E(()=>go("mas",true));await p.waitForTimeout(300);await shot('23_yo');ok('Cinturón de herramientas en Yo',await E(()=>!!document.querySelector('.dbelt')));
// copia de seguridad ida y vuelta
const snap=await E(()=>JSON.stringify({trD:S.g.trD,cst:S.g.cst,tools:Object.keys(S.g.tools),xp:gXP()}));const code=await E(()=>backupCode());
await E(()=>{localStorage.clear()});await p.reload();await p.waitForTimeout(300);await E(c=>restoreCode(c),code);await p.reload();await p.waitForTimeout(400);
ok('Copia de seguridad: ida y vuelta sin pérdidas',await E(s=>JSON.stringify({trD:S.g.trD,cst:S.g.cst,tools:Object.keys(S.g.tools),xp:gXP()})===s,snap));
// sin conexión
await ctx.setOffline(true);await E(()=>{S.reg="EDU";go("region")});await clk('[data-d="dmis|EDU"]');await p.waitForTimeout(100);ok('Funciona sin conexión',await E(()=>!!document.querySelector('[data-d="dmpick|EDU|folio"]')));await ctx.setOffline(false);
ok('Ninguna petición de red',net.length===0,net.slice(0,5));
ok('Sin errores de JavaScript',errs.length===0,errs.slice(0,5));
console.log(R.map(r=>r.join(' | ')).join('\n'));console.log('TOTAL',R.filter(r=>r[0]==='OK ').length,'/',R.length);await b.close()})();

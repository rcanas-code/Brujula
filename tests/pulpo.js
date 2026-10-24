const {APP,OFF}=require('./_entorno');
// Aventura «La llave de Tinta» (Estudio): recorrido, guardado, reanudación, privacidad del borrador,
// compatibilidad con partidas existentes, interruptor apagado y pantalla de 360 px. Uso: node pulpo.js <chromium>
const {chromium}=require('playwright');
const R=[];const ok=(n,c,info)=>{R.push([c?'OK ':'FALLO',n,info===undefined?'':JSON.stringify(info)]);};
const SENT1='CENTINELA-uno-ñ-áéí-7391',SENT2='CENTINELA-dos-ü-4402';
(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const mk=async(opts={},dreg)=>{const c=await b.newContext(Object.assign({viewport:{width:360,height:640},deviceScaleFactor:1,hasTouch:true,isMobile:true},opts));
  if(dreg==='off')await c.addInitScript(()=>{window.__DREG=[]});await c.addInitScript(()=>{window.__noGuia=1});return c};
const ctx=await mk();const p=await ctx.newPage();const errs=[],net=[];
p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
p.on('request',r=>{if(!r.url().startsWith('file:')&&!r.url().startsWith('data:'))net.push(r.url())});
await p.clock.install({time:new Date('2026-11-02T10:00:00')});
await p.goto(APP);await p.waitForTimeout(500);
const E=(f,a)=>p.evaluate(f,a);
const seed=async()=>{await E(()=>{localStorage.clear();TA.forEach((a,i)=>[0,1,2].forEach(j=>S.answers[i*3+j]=["ATE","EDU","HAB"].includes(a.k)?1:4));S.tests=[{date:today(),scores:scores()}];S.route=buildRoute(scores());S.tourDone=true;store.set("tourDone",true);S.name="Laia";store.set("name","Laia");S.g.carta=today();S.g.guiaIntro=today();S.g.guiaH=today();S.g.celebrated=1;S.g.lore={EDU:today()};store.set("game",S.g);save();S.reg="EDU";go("region")});await p.waitForTimeout(400)};
await seed();
const base=await E(()=>JSON.stringify(Object.assign({},S.g,{pulpo:undefined})));
const clk=async s=>{await p.click(s);await p.waitForTimeout(60)};
const view=()=>E(()=>({v:S.view,paso:S.g.pulpo&&S.g.pulpo.paso,w:document.documentElement.scrollWidth,iw:innerWidth,txt:document.querySelector('.view').innerText}));
const geo=async n=>{const r=await E(()=>{const bs=[...document.querySelectorAll('.pulpo button:not([disabled])')].filter(x=>x.offsetParent);const small=bs.filter(x=>x.getBoundingClientRect().height<40&&!x.classList.contains('linkbtn')).map(x=>x.textContent.trim().slice(0,24)+':'+Math.round(x.getBoundingClientRect().height));const pr=document.querySelector('.pulpo>.btn:not(.ghost),.pulpo>.puact .btn'),vis=!pr||pr.getBoundingClientRect().bottom<=innerHeight-60;return {ow:document.documentElement.scrollWidth>innerWidth+1,small,vis}});
  ok('360 px · '+n+': sin desborde, botones ≥ 40 px y acción principal visible sin desplazar',!r.ow&&r.small.length===0&&r.vis,r)};
const noText=async(s,n)=>{const d=await E(()=>{const code=backupCode();let raw=decodeURIComponent(escape(atob(code.replace(/^BRUJULA-/,''))));let all='';for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k.startsWith('brujula:ui:'))all+=localStorage.getItem(k)}return {code:raw.includes('CENTINELA'),ls:all.includes('CENTINELA'),ui:localStorage.getItem('brujula:ui:pulpo-borrador')}});return d};
// ---- entrada ----
ok('Estudio muestra la tarjeta de entrada',await E(()=>!!document.querySelector('[data-p="open"]')&&document.querySelector('[data-p="open"]').innerText.includes('La llave de Tinta')));
ok('Sin datos antes de abrir: g.pulpo no existe',await E(()=>!S.g.pulpo&&!localStorage.getItem('brujula:ui:pulpo-borrador')));
await E(()=>{S.g.lore={};store.set("game",S.g);render()});
ok('Sin hablar con la guardiana: no hay botón de la aventura (la región muestra solo la conversación)',await E(()=>!document.querySelector('[data-p="open"]')&&document.body.innerText.includes('Doña Lechuza')));
await E(()=>{S.g.lore={EDU:today()};store.set("game",S.g);render()});
await clk('[data-p="open"]');
// ---- P1 ----
let v=await view();ok('P1 abierta (paso 1)',v.v==='pulpo'&&v.paso===1);await geo('P1');
await clk('[data-p="dl"]');await clk('[data-p="dl"]');ok('P1: tercer diálogo y botón «Abrir los cinco cofres»',await E(()=>!!document.querySelector('[data-p="cofres"]')&&document.body.innerText.includes('No son tres sistemas del cerebro')));
await clk('[data-p="cofres"]');
// ---- P2 ----
ok('P2: primera tarjeta',(await view()).txt.includes('Secreto 1 de 5'));await geo('P2');await p.screenshot({path:'pulpo-02-tarjeta.png'});
await clk('[data-p="cn"]');await clk('[data-p="cp"]');ok('P2: Anterior/Siguiente',(await view()).txt.includes('Secreto 1 de 5'));
for(let i=0;i<5;i++)await clk('[data-p="cn"]');
// ---- P3 ----
v=await view();ok('P3: ¿Te suena?',v.paso===3&&v.txt.includes('¿Te suena? 1 de 5'));
const optsOf=async()=>E(()=>[...document.querySelectorAll('[data-p^="ro|"]')].map(x=>x.dataset.p));
for(let i=0;i<5;i++){const o=await optsOf();const pick=i%2===0?o.find(x=>x.endsWith('|0')):o.find(x=>!x.endsWith('|0'));await clk(`[data-p="${pick}"]`);
  if(i===0)ok('P3: feedback tras responder',await E(()=>!!document.querySelector('.dfb')));
  if(i===1){await geo('P3');ok('P3: fallo explica la respuesta correcta',await E(()=>document.querySelector('.dfb.bad')&&document.querySelector('.dfb.bad').innerText.includes('La respuesta era')))}
  await clk('[data-p="rn"]')}
ok('P3: 3 de 5 reconocidas',await E(()=>S.g.pulpo.ro.filter(o=>o===0).length)===3);
// ---- P4 ----
v=await view();ok('P4: predicción',v.paso===4);await geo('P4');
await E(()=>{const e=document.getElementById('ppred');e.value='8';e.dispatchEvent(new Event('input',{bubbles:true}))});
ok('P4: el número se actualiza',await E(()=>document.getElementById('ppv').textContent)==='8');
await clk('[data-p="pred"]');
// ---- P5 ----
v=await view();ok('P5: primer folio, sin tarjetas',v.paso===5&&await E(()=>!document.querySelector('[data-p="cp"]')&&!document.querySelector('[data-p="cn"]')));await geo('P5');
await p.fill('#pbor',SENT1);await p.waitForTimeout(700);
let d=await E(()=>JSON.parse(localStorage.getItem('brujula:ui:pulpo-borrador')||'null'));
ok('P5: el borrador se guarda aparte (clave ui, fuera de KEYS)',d&&d.t===SENT1&&d.n===1,d&&{n:d.n});
ok('P5: el borrador NO está en game',!(await E(()=>localStorage.getItem('brujula:game'))).includes('CENTINELA'));
let leak=await noText();ok('P5: backupCode() y el resto del almacén no contienen el texto',!leak.code&&!leak.ls,leak);
// cierre accidental: se escribe más y se recarga sin salir
await p.fill('#pbor',SENT1+' más texto');await p.evaluate(()=>window.dispatchEvent(new Event('pagehide')));
await p.reload();await p.waitForTimeout(500);await E(()=>{S.reg="EDU";go("region")});await p.waitForTimeout(300);
ok('Reanudar: la tarjeta de Estudio dice «paso 5 de 10»',await E(()=>document.querySelector('[data-p="open"]').innerText.includes('paso 5 de 10')));
await clk('[data-p="open"]');
ok('Reanudar: el borrador sobrevive al cierre accidental',await E(()=>document.getElementById('pbor').value)===SENT1+' más texto');
ok('Reanudar: se conservan reconocimiento y predicción',await E(()=>S.g.pulpo.pred===8&&S.g.pulpo.ro.filter(o=>o===0).length===3));
// ---- P6 ----
await clk('[data-p="fin5"]');v=await view();ok('P6: autocorrección',v.paso===6&&v.txt.includes('Lo que escribiste'));await geo('P6');
ok('P6: la lista tiene 10 puntos',await E(()=>document.querySelectorAll('[data-p^="chk|"]').length)===10);
ok('P6: se ve el texto escrito para comparar',await E(()=>document.querySelector('details.fold p').textContent.includes('CENTINELA')));
for(const i of [0,1,2,6])await clk(`[data-p="chk|${i}"]`);
ok('P6: contador y marcas',await E(()=>document.getElementById('pcnt').textContent)==='4'&&await E(()=>S.g.pulpo.c1.filter(Boolean).length)===4);
const px0=await E(()=>gXP());
await clk('[data-p="ok6"]');v=await view();
ok('P6→P7: corrección confirmada (4 de 10)',v.paso===7&&await E(()=>S.g.pulpo.r1)===4);
leak=await noText();ok('PRIVACIDAD: tras la autocorrección el borrador ya no existe en ningún sitio',!leak.code&&!leak.ls&&leak.ui===null,leak);
ok('Recompensa: Llave de Tinta concedida una sola vez',await E(()=>S.g.pulpo.cos===today()));
ok('Recompensa: sin XP',await E(()=>gXP())===px0,{antes:px0});
ok('P7: tres cifras y mensaje de Doña Lechuza',v.txt.includes('8')&&v.txt.includes('lo que recordaste')&&!!(await E(()=>document.querySelector('.advbox'))));await geo('P7');await p.screenshot({path:'pulpo-07-brecha.png'});
// ---- P8 con pistas ----
await clk('[data-p="p7"]');v=await view();ok('P8: segundo folio con pistas de los puntos que faltaron',v.paso===8&&v.txt.includes('Sangre: ¿cómo lleva el oxígeno')&&!v.txt.includes('hemoglobina'));await geo('P8');
await p.fill('#pbor',SENT2);await p.waitForTimeout(700);
leak=await noText();ok('P8: copia de seguridad a mitad de borrador sin texto',!leak.code&&!leak.ls,leak);
const codeMid=await E(()=>backupCode());
// otro móvil: restaurar la copia a mitad
const c2=await mk();const q=await c2.newPage();q.on('pageerror',e=>errs.push('2:'+e.message));await q.clock.install({time:new Date('2026-11-02T10:05:00')});await q.goto(APP);await q.waitForTimeout(400);
const rok=await q.evaluate(c=>restoreCode(c),codeMid);await q.reload();await q.waitForTimeout(500);
ok('Restaurar copia a mitad: el progreso vuelve (paso 8) pero el borrador no',rok&&await q.evaluate(()=>S.g.pulpo.paso===8&&S.g.pulpo.r1===4&&S.g.pulpo.cos!==''&&localStorage.getItem('brujula:ui:pulpo-borrador')===null));
await q.evaluate(()=>{S.reg="EDU";go("pulpo")});await q.waitForTimeout(200);
ok('Restaurar: el folio aparece vacío y se puede seguir',await q.evaluate(()=>document.getElementById('pbor').value)==='');
await c2.close();
// ---- P9 / P10 ----
await clk('[data-p="fin8"]');v=await view();ok('P9: misma lista de 10',v.paso===9&&await E(()=>document.querySelectorAll('[data-p^="chk|"]').length)===10);
for(const i of [0,1,2,3,4,6,7])await clk(`[data-p="chk|${i}"]`);
await clk('[data-p="ok9"]');v=await view();
ok('P10: cierre con los dos intentos (4 → 7)',v.paso===10&&await E(()=>S.g.pulpo.r2)===7&&v.txt.includes('más fuerte'));await geo('P10');await p.screenshot({path:'pulpo-10-cierre.png'});
leak=await noText();ok('P10: nada de texto escrito en ningún sitio',!leak.code&&!leak.ls&&leak.ui===null,leak);
ok('P10: fecha de fin e historial de 1 intento',await E(()=>S.g.pulpo.fin===today()&&S.g.pulpo.h.length===1));
// ---- no toca el resto de la partida ----
const after=await E(()=>JSON.stringify(Object.assign({},S.g,{pulpo:undefined})));
ok('La aventura no modifica nada de la partida fuera de g.pulpo (XP, trofeos, bronce, plata, oro)',after===base);
ok('Bronce, plata y oro siguen cerrados para quien no ha leído ni practicado',await E(()=>!dGuardOpen("EDU")&&dMis("EDU")==null&&!dOroState("EDU").ok));
// ---- mochila ----
await E(()=>go("dtools"));await p.waitForTimeout(150);ok('La Llave de Tinta aparece en la mochila',await E(()=>document.querySelector('.pukey')&&document.querySelector('.pukey').innerText.includes('no da XP')));
// ---- repetir ----
await E(()=>{S.reg="EDU";go("pulpo")});await clk('[data-p="again"]');
ok('Práctica libre: reinicia el recorrido, conserva historial y recompensa',await E(()=>S.g.pulpo.paso===1&&S.g.pulpo.h.length===1&&S.g.pulpo.cos===today()));
// ---- intento diferido ----
await E(()=>{const g=S.g.pulpo;g.paso=5;g.pred=3;g.ro=[0,0,0,0,0];g.po=null;store.set("game",S.g)});
await E(()=>localStorage.setItem('brujula:ui:pulpo-borrador',JSON.stringify({n:1,t:'empecé hace días',d:addDays(today(),-3)})));
await p.reload();await p.waitForTimeout(400);await E(()=>go("pulpo"));await p.waitForTimeout(200);
ok('Volver otro día: aviso de intento diferido y borrador intacto',await E(()=>document.body.innerText.includes('Han pasado 3 días')&&document.getElementById('pbor').value==='empecé hace días'&&S.g.pulpo.dif===1));
// ---- borrador huérfano (copia antigua restaurada) ----
await E(()=>{S.g.pulpo.paso=1;store.set("game",S.g)});await p.reload();await p.waitForTimeout(400);
ok('Borrador huérfano (paso incompatible) se elimina solo al cargar',await E(()=>localStorage.getItem('brujula:ui:pulpo-borrador')===null));
// ---- Folio de la plata: ejemplos y texto ----
await E(()=>{S.g.trD=S.g.trD||{};S.g.trD.EDU=Object.assign({},S.g.trD.EDU,{b:today()});S.g.mis=S.g.mis||{};S.g.mis.EDU={id:"folio",start:today(),apps:[]};store.set("game",S.g);S.dm={k:"EDU"};go("dmis")});await p.waitForTimeout(250);
await E(()=>{const m=S.g.mis.EDU;delete S.g.mis.EDU;render();window.__m=m});await p.waitForTimeout(150);
ok('Folio: el texto de la misión admite temas propios',await E(()=>document.body.innerText.includes('de fuera de clase')&&document.body.innerText.includes('tu fuente')&&!document.body.innerText.includes('tus módulos:')));
await E(()=>{S.g.mis.EDU=window.__m;render()});await p.waitForTimeout(150);
ok('Folio: cuatro ideas de tema',await E(()=>document.querySelectorAll('.puex [data-p^="ex|"]').length)===4);
for(let i=0;i<6;i++){const n=await E(()=>{const b=document.querySelectorAll('.celeb .cgo');b.forEach(x=>x.click());return b.length});if(!n)break;await p.waitForTimeout(350)}
await p.click('.puex [data-p^="ex|"]');ok('Folio: la idea rellena el tema (≤ 80 caracteres) y se puede editar',await E(()=>{const e=document.getElementById('dft');return e.value.length>3&&e.value.length<=80}));await geo('Folio').catch(()=>{});
// ---- 390 px y tema oscuro ----
await p.setViewportSize({width:390,height:844});await p.emulateMedia({colorScheme:'dark'});await E(()=>{S.g.pulpo=Object.assign(S.g.pulpo,{paso:7,r1:4,pred:8,ro:[0,0,0,1,1]});S.reg="EDU";go("pulpo")});await p.waitForTimeout(200);await p.screenshot({path:'pulpo-07-oscuro.png'});
ok('390 px oscuro: sin desborde',!(await E(()=>document.documentElement.scrollWidth>innerWidth+1)));
ok('Sin errores de JavaScript',errs.length===0,errs.slice(0,5));
ok('Ninguna petición de red',net.length===0,net.slice(0,5));
// ---- interruptor apagado ----
const c3=await mk({}, 'off');const o=await c3.newPage();const e3=[];o.on('pageerror',e=>e3.push(e.message));await o.goto(APP);await o.waitForTimeout(400);
await o.evaluate(()=>{localStorage.clear();S.name="Ana";S.tourDone=true;S.g.lore={EDU:today()};S.g.pulpo={v:1,h:[],cos:today(),cosSeen:1,paso:5};store.set("game",S.g);S.reg="EDU";go("region")});await o.waitForTimeout(300);
ok('DREG apagado: no hay tarjeta ni pantalla',await o.evaluate(()=>!document.querySelector('[data-p]')&&DREG.length===0));
await o.evaluate(()=>go("pulpo"));await o.waitForTimeout(150);ok('DREG apagado: la vista cae a la región sin errores',await o.evaluate(()=>S.view==='pulpo'&&!document.querySelector('.pulpo'))&&e3.length===0,e3);
await o.evaluate(()=>go("dtools"));ok('DREG apagado: la mochila no muestra la llave',await o.evaluate(()=>!document.querySelector('.pukey')));
ok('DREG apagado: los datos de la partida se conservan',await o.evaluate(()=>S.g.pulpo&&S.g.pulpo.cos!==''));
await c3.close();
console.log(R.map(r=>r.join(' | ')).join('\n'));console.log('TOTAL',R.filter(r=>r[0]==='OK ').length,'/',R.length);await b.close()})();

/*D-BEGIN · Modelo D del piloto (Estudio, Atención, Hábitos). Interruptor: DREG. Con DREG=[] la app funciona como antes. */
const DREG=(typeof window!=="undefined"&&Array.isArray(window.__DREG))?window.__DREG:["EDU","ATE","HAB"];
const dOn=k=>DREG.includes(k);
const DCFG={wait:10,waitC:{},retry:2,fast:3000,maxQ:5,rep:2,keep:2000,perDay:2};
const DB=__DBANK__;
const DC={},DQ={};
Object.keys(DB).forEach(k=>{DB[k].concepts.forEach(c=>{c.k=k;DC[c.id]=c;c.q.forEach(q=>DQ[q[0]]={q,c:c.id,k})});DB[k].integ.forEach(q=>DQ[q[0]]={q,c:null,k})});
const dCs=k=>DB[k]?DB[k].concepts:[];
const DTOOLS={lente:["Lente de fugas","ATE","Apunta en 20 segundos tus fugas de fuera y de dentro y mira cómo cambian de una sesión a otra.","la plata «Mapa de tus fugas»"],
 foco:["Sala de foco","ATE","Prepara un bloque de foco: objetivo, pasos, entorno, temporizador y nota de cierre.","la plata «Sesión de foco»"],
 arranque:["Arranque de 10 minutos","HAB","Nombra lo que te frena, pon 10 minutos y decide al final si sigues.","la plata «Arranque de 10 minutos»"],
 multi:["Multiplicador de tiempos","HAB","Guarda lo que calculas y lo que tardas de verdad, y te dice tu multiplicador para planificar plazos realistas.","la plata «Multiplicador»"],
 plan:["Plan si… entonces","HAB","Construye planes con cuándo, dónde y primer paso, y te avisa si falta algo. Puedes llevarlos al calendario.","tu primer plan válido en una misión de la Forja"],
 folio:["Folio en blanco","EDU","5 minutos para escribir sin mirar lo que recuerdas y una lista para compararlo con tus apuntes.","la plata «Folio en blanco»"],
 calendario:["Calendario anti-olvido","EDU","Con la fecha de un control, te propone repasos espaciados y los manda al calendario del móvil.","la plata «Calendario anti-olvido»"]};
const DTORD=["lente","foco","arranque","multi","plan","folio","calendario"];
Object.assign(PXI,{
 tl_lente:["...KKKK.....","..KLLLLK....",".KLLWLLLK...",".KLWLLLBK...",".KLLLLLBK...",".KLLLLBBK...","..KBBBBK....","...KKKKNK...",".......KNK..","........KNK.","........KnNK",".........KK."],
 tl_foco:["....KKKK....","..KKCCCCKK..",".KCCWWWWCCK.",".KCWWCCWWCK.","KCWWCKKCWWCK","KCWCKYYKCWCK","KCWCKYYKCWCK","KCWWCKKCWWCK",".KCWWCCWWCK.",".KCCWWWWCCK.","..KKCCCCKK..","....KKKK...."],
 tl_arranque:["....KKKK....",".....KK.....","...KKKKKK...","..KWWWWWWK..",".KWWWWRWWWK.",".KWWWWRWWWK.",".KWWWWRRRWK.",".KWWWWWWWWK.",".KWWWWWWWWK.","..KWWWWWWK..","...KKKKKK...","............"],
 tl_multi:[".KKKKKKKKKK.",".KNNNNNNNNK.","..KWYYYYWK..","...KWYYWK...","....KWWK....",".....KK.....",".....KK.....","....KWYK....","...KWYYYK...","..KYYYYYYK..",".KNNNNNNNNK.",".KKKKKKKKKK."],
 tl_plan:[".....KK.....","KKKKKKKKKK..","KGGGGGGGGGK.","KGWWWWWWGGGK","KGGGGGGGGGK.","KKKKKKKKKK..",".....KN.....","..KKKKKKKKKK",".KBBBBBBBBBK","KBBWWWWWWBBK",".KBBBBBBBBBK","..KKKKKNKKKK"],
 tl_folio:["KKKKKKK.....","KWWWWWKK....","KWWWWWKWK...","KWWWWWKKKK..","KWssssWWWK..","KWWWWWWWWK.K","KWssssWWWKKC","KWWWWWWWKYK.","KWsssWWKYK..","KWWWWWKYK...","KWWWWWKKK...","KKKKKKKKK..."],
 tl_calendario:["..K....K....","KKKKKKKKKKKK","KRRRRRRRRRRK","KRRRRRRRRRRK","KKKKKKKKKKKK","KWWKWWKWWKWK","KWWKWWKBBKWK","KKKKKKKKKKKK","KWWKBBKWWKWK","KWWKBBKWWKWK","KKKKKKKKKKKK","............"]});
const dIco=(t,px)=>pxIco("tl_"+t,px||2);
const DCM=[["fuera","Móvil en otra habitación y avisos fuera durante la sesión"],["fuera","Avisar en casa y estudiar en un sitio sin interrupciones"],["dentro","Cuando me atasco, marco la duda y paso al siguiente apartado"],["dentro","Hacer más pequeño el siguiente paso: solo el primer apartado"]];
const DMIS={
 ATE:[{id:"fugas",n:"Mapa de tus fugas",tool:"lente",N:4,lec:"ATE-08",what:"En 4 sesiones de estudio reales, apunta cuántas veces te distrajo algo de fuera y cuántas lo buscaste tú. Tras la segunda, elige una contramedida que encaje con tus datos y pruébala en las otras dos.",chk:"Que la contramedida encaja con tu tipo de fuga dominante, y la comparación antes y después.",self:"Que las sesiones y los palitos son reales."},
  {id:"foco",n:"Sesión de foco",tool:"foco",N:2,lec:"ATE-02",what:"Haz 2 sesiones completas en la sala de foco: objetivo concreto, al menos 2 pasos, entorno preparado, temporizador y nota de cierre.",chk:"Que la sesión tiene objetivo y al menos 2 pasos antes de empezar, y la duración del temporizador.",self:"Si trabajaste sin interrupciones."}],
 HAB:[{id:"arranque",n:"Arranque de 10 minutos",tool:"arranque",N:3,plan:true,lec:"HAB-04",what:"Elige 3 tareas reales que estés aplazando. En cada una, nombra lo que te frena, trabaja 10 minutos con el temporizador y apunta si seguiste.",chk:"Que tu plan si… entonces tiene cuándo, dónde y primer paso, y que el temporizador llega a 10 minutos.",self:"Que empezaste la tarea y si seguiste después."},
  {id:"multi",n:"Multiplicador",tool:"multi",N:4,plan:true,lec:"HAB-08",what:"En 4 tareas reales, apunta cuánto crees que tardarás y cuánto tardas de verdad. Desde la segunda, usa tu multiplicador para corregir la estimación.",chk:"El cálculo de tu multiplicador y que lo usas al estimar la tarea siguiente.",self:"Que los tiempos son reales."}],
 EDU:[{id:"folio",n:"Folio en blanco",tool:"folio",N:3,lec:"EDU-01",what:"Con 3 temas reales de tus módulos: 5 minutos escribiendo sin mirar todo lo que recuerdas, compara con los apuntes y apunta qué te faltaba. Al final, programa tus repasos.",chk:"Que tus repasos quedan espaciados en el tiempo.",self:"Que escribiste sin mirar y cuánto recordabas."},
  {id:"calendario",n:"Calendario anti-olvido",tool:"calendario",N:1,lec:"EDU-02",what:"Con la fecha de un control real, programa al menos 3 repasos espaciados y cuando hagas el primero, márcalo.",chk:"Que las fechas de repaso están espaciadas y antes del control.",self:"Que haces los repasos."}]};
const DPAGES=[[3,"Semana 3 · El cuaderno empieza a pesar","Llevas tres semanas volviendo al camino. No todos los días, y no hace falta: lo que cuenta es que vuelves. En el margen, la Cartógrafa ha escrito: «Los mapas no se dibujan de un tirón»."],
 [6,"Semana 6 · Tus propios atajos","Seis semanas activas. Ya reconoces cuándo te cuesta arrancar y qué te ayuda. El cuaderno tiene manchas de barro y de café: es la prueba de que lo has usado de verdad."],
 [10,"Semana 10 · El viaje como costumbre","Diez semanas. Lo que empezó como una misión ahora es parte de cómo haces las cosas. La Cartógrafa te devuelve el cuaderno: «Ya no lo necesitas para no perderte. Guárdalo para recordar cómo llegaste»."]];

/* ---------- estado ---------- */
function dG(){const g=S.g;g.cst=g.cst||{};g.ans=g.ans||[];g.mis=g.mis||{};g.tools=g.tools||{};g.trD=g.trD||{};g.dor=g.dor||{};g.chal=g.chal||{};g.td=g.td||{};return g}
function dSave(){store.set("game",S.g)}
function dSt(id){const x=dG().cst[id];return x?x.st:null}
function dTried(id){const g=S.g;return !!((g.ok||{})[id]||(g.lqr||{})[id]||(g.lqn||{})[id]||(g.lqf||{})[id]||(g.dom||{})[id])}
function dVisto(c){return c.lec.every(dTried)}
function dKeyLecs(k){const L=[];dCs(k).forEach(c=>c.lec.forEach(id=>{if(CI[id]&&!L.includes(id))L.push(id)}));return L}
function dSeenAt(q){let d=null;dG().ans.forEach(a=>{if(a[0]===q&&(!d||a[1]>d))d=a[1]});return d}
function dAns(q,ok,ctx,fresh,hint){const g=dG();g.ans.push([q,today(),ok,ctx,fresh?1:0,hint?1:0]);if(g.ans.length>DCFG.keep)g.ans.splice(0,g.ans.length-DCFG.keep)}
function dPick(cid,use,excl,pref){const c=DC[cid];if(!c)return null;let pool=c.q.filter(q=>q[0].includes("-"+use)&&!excl.includes(q[0]));
  if(pref){const p2=pool.filter(q=>pref.includes(q[1]));if(p2.some(q=>!dSeenAt(q[0])))pool=p2}
  const fr=pool.filter(q=>!dSeenAt(q[0]));if(fr.length)return {q:fr[Math.floor(Math.random()*fr.length)],fresh:true};
  const old=pool.filter(q=>dDiff(dSeenAt(q[0]),today())>=14).sort((a,b)=>dSeenAt(a[0])<dSeenAt(b[0])?-1:1);
  return old.length?{q:old[0],fresh:false}:null}
function dOpts(q){return q.slice(3).map(x=>x.split("§"))}
const DSTN={a:"Comprendida con apoyo",c:"Comprendida",k:"Consolidada"};
function dStName(id){const s=dSt(id);if(s)return DSTN[s];return dVisto(DC[id])?"Trabajada":"Por descubrir"}
function dGrant(t,src){const g=dG();if(!t||g.tools[t])return false;g.tools[t]={d:today(),src:src||"D"};dSave();if(src!=="hist")setTimeout(()=>celebrate({type:"tool",t}),500);return true}
function dMetal(T){return T.o?"oro":T.p?"plata":T.b?"bronce":"ninguno"}
const DRANK={ninguno:0,bronce:1,plata:2,oro:3};

/* ---------- migración (repetible, sin borrar nada) ---------- */
function dMigrate(){if(!DREG.length)return;const g=dG();if(g.rulesV===2&&g.dmig)return;
  g.rulesV=2;g.dmig={d:today(),v:1};
  try{const st=dOldStage();g.dMax=g.dMax||{};g.dMax.st=Math.max(g.dMax.st||1,st)}catch(e){}
  DREG.forEach(k=>{const T=(S.g.tr||{})[k]||{};
    if(T.p){const t={ATE:"foco",HAB:"plan",EDU:"calendario"}[k];if(t&&!g.tools[t])g.tools[t]={d:today(),src:"hist"}}
    if(S.active&&aK(S.active.id)===k&&T.b&&!T.p&&S.active.start>=T.b){g.leg=g.leg||{};g.leg[k]={start:S.active.start,id:S.active.id}}});
  dSave()}
function dLegacy(k){const g=dG(),L=(g.leg||{})[k],T=S.g.tr[k]=S.g.tr[k]||{};if(!L||T.p)return;
  const h=S.history.find(x=>x.passed&&x.id===L.id&&x.start===L.start);if(h){T.p=h.end||today();const t={ATE:"foco",HAB:"plan",EDU:"calendario"}[k];if(t&&!g.tools[t])g.tools[t]={d:today(),src:"hist"};store.set("game",S.g)}}
function dOldStage(){const xp=gXP();let l=1,acc=0;while(xp>=acc+100+50*l){acc+=100+50*l;l++}
  const ms=Object.keys(GDIF).map(k=>{const T=(S.g.tr||{})[k]||{};return dMetal(T)});const nb=ms.filter(m=>m!=="ninguno").length,np=ms.filter(m=>m==="plata"||m==="oro").length,no=ms.filter(m=>m==="oro").length;
  const R=[[5,0,0,0],[10,3,0,0],[15,3,2,0],[20,3,2,1]];let st=1;for(const [L,b,p,o] of R){if(l>=L&&nb>=b&&np>=p&&no>=o)st++;else break}return st}

/* ---------- misiones ---------- */
function dMisDef(k,id){return (DMIS[k]||[]).find(m=>m.id===id)}
function dMis(k){return dG().mis[k]||null}
function dPlanCheck(p){const miss=[];p=p||{};const w=String(p.w||"").trim(),l=String(p.l||"").trim(),s=String(p.s||"").trim();
  if(w.length<4||!/(\d|despu[eé]s|antes|al |cuando|lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo|ma[ñn]ana|tarde|noche|llegar|salir|terminar|acabar|cenar|comer|desayunar|levant|clase|recreo|autob|metro|tren)/i.test(w))miss.push("cuándo (una situación concreta que se repite)");
  if(l.length<3)miss.push("dónde");
  const n=s.split(/\s+/).filter(Boolean).length;if(n<2)miss.push("el primer paso (una acción concreta)");else if(n>16)miss.push("un primer paso más pequeño (menos de 16 palabras)");
  return miss}
function dSpaced(ds,before){ds=ds.filter(Boolean).slice().sort();if(ds.length<3)return "Pon al menos 3 fechas de repaso.";if(new Set(ds).size!==ds.length)return "Las fechas tienen que ser distintas.";
  if(ds[0]<today())return "Las fechas tienen que ser de hoy en adelante.";if(before&&ds[ds.length-1]>=before)return "Todos los repasos tienen que ser antes del control.";
  const gaps=[];for(let i=1;i<ds.length;i++)gaps.push(dDiff(ds[i-1],ds[i]));if(gaps.some(x=>x<1))return "Deja al menos un día entre repasos.";
  if(dDiff(ds[0],ds[ds.length-1])<4)return "Están demasiado juntos: repartidos en pocos días se olvida antes. Sepáralos más.";
  for(let i=1;i<gaps.length;i++)if(gaps[i]+1<gaps[i-1])return "Los repasos funcionan mejor si cada vez se separan un poco más (o igual), no menos.";return ""}
function dPropose(ex){const t=today(),n=dDiff(t,ex),L=[];[1,3,7,14,21].forEach(o=>{if(o<n)L.push(addDays(t,o))});if(n>=2&&!L.includes(addDays(ex,-1)))L.push(addDays(ex,-1));return [...new Set(L)].sort().slice(-5)}
function dMulti(apps){let e=0,r=0;apps.forEach(a=>{e+=+a.v.est||0;r+=+a.v.real||0});return e>0?r/e:null}
function dDom(apps){let f=0,i=0;apps.forEach(a=>{f+=+a.v.f||0;i+=+a.v.i||0});return f>i?"fuera":i>f?"dentro":"ambas"}
function dMisChk(k){const M=dMis(k);if(!M)return false;const D=dMisDef(k,M.id);if(!D)return false;
  if(M.id==="fugas")return !!M.cm&&(M.cm[1]==="ok");if(M.id==="foco")return M.apps.length>0&&M.apps.every(a=>a.v.steps>=2);
  if(D.plan&&!(M.plan&&!dPlanCheck(M.plan).length))return false;if(M.id==="multi")return M.apps.slice(1).every(a=>a.v.use);
  if(M.id==="folio")return !!(M.rp&&!dSpaced(M.rp.ds,null));if(M.id==="calendario")return !!(M.cal&&!dSpaced(M.cal.ds,M.cal.ex));return true}
function dMisComplete(k){const M=dMis(k);if(!M)return false;const D=dMisDef(k,M.id);return !!D&&M.apps.length>=D.N&&dMisChk(k)}
function dAppsToday(M){return M.apps.filter(a=>a.d===today()).length}
function dAddApp(k,v){const M=dMis(k);if(!M)return false;const D=dMisDef(k,M.id);if(M.apps.length>=D.N){toast("Ya tienes todas las aplicaciones de esta misión");return false}
  if(dAppsToday(M)>=DCFG.perDay){toast("Por hoy ya has registrado "+DCFG.perDay+". Repartir la práctica en días distintos ayuda más.");return false}
  M.apps.push({d:today(),t:Date.now(),v});dSave();return true}

/* ---------- prueba del guardián ---------- */
function dGuardOpen(k){return !!(S.g.lore||{})[k]&&dCs(k).every(dVisto)&&dCs(k).some(c=>!dSt(c.id))}
function dGuardStart(k){const cs=dCs(k).filter(c=>!dSt(c.id));if(!cs.length)return;
  S.dg={k,cs:cs.map(c=>c.id),st:Object.fromEntries(cs.map(c=>[c.id,{n0:c.hard?3:2,asked:[],ok1:0,indep:true,consec:0,res:null}])),cur:null,last:null,n:0,done:false};dgNext();go("dguard")}
function dgNext(){const G=S.dg;const open=G.cs.filter(id=>!G.st[id].res);if(!open.length){G.cur=null;dgFinish();return}
  let cand=open.filter(id=>id!==G.last);if(!cand.length)cand=open;cand.sort((a,b)=>G.st[a].asked.length-G.st[b].asked.length||G.cs.indexOf(a)-G.cs.indexOf(b));
  const cid=cand[0],s=G.st[cid],P=s.asked.length<DCFG.maxQ?dPick(cid,"b",s.asked):null;
  if(!P){s.res="no";return dgNext()}
  G.cur={cid,qid:P.q[0],fresh:P.fresh,o:sh([0,1,2,3]),t0:Date.now(),pick:null}}
function dgAnswer(o){const G=S.dg,C=G&&G.cur;if(!C||C.pick!=null)return;C.pick=o;const ok=o===0,fast=Date.now()-C.t0<DCFG.fast,s=G.st[C.cid];C.fast=fast;
  s.asked.push(C.qid);G.n++;dAns(C.qid,fast?-1:ok?1:0,"g",C.fresh);
  if(!fast){if(ok){s.consec++;if(C.fresh&&s.indep)s.ok1++;else s.indep=false}else{s.indep=false;s.consec=0}
    if(s.indep&&s.ok1>=s.n0)s.res="c";else if(!s.indep&&s.consec>=2)s.res="a"}
  if(!s.res&&s.asked.length>=DCFG.maxQ)s.res="no";G.last=C.cid;dSave()}
function dgFinish(){const G=S.dg,g=dG(),t=today();if(G.done)return;G.done=true;
  G.cs.forEach(id=>{const r=G.st[id].res;if(r==="c"&&!g.cst[id])g.cst[id]={st:"c",tC:t};else if(r==="a"&&!g.cst[id])g.cst[id]={st:"a",tA:t,nx:addDays(t,DCFG.rep)}});
  const T=g.trD[G.k]=g.trD[G.k]||{};if(!T.b&&dCs(G.k).every(c=>dSt(c.id)))T.b=t;dSave()}

/* ---------- repaso diferido ---------- */
function dRepDue(k){const g=dG(),t=today();return Object.keys(g.cst).filter(id=>{const c=DC[id],x=g.cst[id];return c&&dOn(c.k)&&(!k||c.k===k)&&(x.st==="a"||x.st==="k")&&x.nx&&x.nx<=t})}
function dRepNext(k){const g=dG();const L=Object.keys(g.cst).filter(id=>DC[id]&&DC[id].k===k&&g.cst[id].st==="a").map(id=>g.cst[id].nx).sort();return L[0]||null}
function dRepStart(k){const ids=dRepDue(k);if(!ids.length)return;S.dr={k,L:ids.map(id=>{const P=dPick(id,"b",[]);return P?{cid:id,qid:P.q[0],fresh:P.fresh,o:sh([0,1,2,3])}:null}).filter(Boolean),i:0,t0:Date.now(),pick:null,hint:false,res:[]};if(!S.dr.L.length){toast("No quedan casos nuevos de esa idea: vuelve a leerla y prueba en unos días");return}go("drep")}
function drAnswer(o){const R=S.dr,it=R.L[R.i];if(!it||R.pick!=null)return;R.pick=o;const g=dG(),x=g.cst[it.cid],t=today(),ok=o===0,fast=Date.now()-R.t0<DCFG.fast;
  dAns(it.qid,fast?-1:ok?1:0,"r",it.fresh,R.hint);let msg;
  if(x.st==="a"){if(ok&&it.fresh&&!fast&&!R.hint){x.st="c";x.tC=t;delete x.nx;msg="up"}else{x.nx=addDays(t,DCFG.rep);msg=ok?(R.hint?"hint":fast?"fast":"seen"):"no"}}
  else if(x.st==="k"){if(ok&&!fast){x.nx=addDays(t,42);msg="keep"}else{x.nx=addDays(t,7);msg="soon"}}
  R.res.push(msg);dSave()}

/* ---------- encuentro del oro ---------- */
function dWait(k){return Math.max(...dCs(k).map(c=>DCFG.waitC[c.id]||DCFG.wait))}
function dOroDate(k){const T=dG().trD[k]||{};return T.p?addDays(T.p,dWait(k)):null}
function dOroState(k){const g=dG(),T=g.trD[k]||{},cs=dCs(k);if(!T.p)return {ok:false,why:"plata"};
  if(cs.every(c=>dSt(c.id)==="k"))return {ok:false,why:"done"};
  const ap=cs.filter(c=>dSt(c.id)==="a");if(ap.length)return {ok:false,why:"apoyo",n:ap.length};
  const d=dOroDate(k);if(today()<d)return {ok:false,why:"wait",when:d};
  const R=g.dor[k];if(R&&R.next&&today()<R.next)return {ok:false,why:"retry",when:R.next};return {ok:true}}
function dOroStart(k){if(!dOroState(k).ok)return;const pend=dCs(k).filter(c=>dSt(c.id)==="c");const Q=[],st={};
  pend.forEach(c=>{st[c.id]={n:0,ok:0,asked:[],res:null}});
  const pick=(cid,first)=>{const ex=st[cid].asked;let P=dPick(cid,"o",ex,first?["t","h"]:null);if(!P||!P.fresh){const B=dPick(cid,"b",ex);if(B&&B.fresh)P=B}if(!P)return null;st[cid].asked.push(P.q[0]);return {cid,qid:P.q[0],fresh:P.fresh}};
  [0,1].forEach(r=>pend.forEach(c=>{const it=pick(c.id,r===0);if(it)Q.push(it)}));
  const ig=DB[k].integ.filter(q=>!dSeenAt(q[0]))[0]||DB[k].integ.slice().sort((a,b)=>(dSeenAt(a[0])||"")<(dSeenAt(b[0])||"")?-1:1)[0];
  S.do={k,Q,st,i:0,pick:null,t0:Date.now(),ig:ig?ig[0]:null,igRes:null,phase:"q",o:sh([0,1,2,3]),pick2:null,done:false};go("doro")}
function doAnswer(o){const D=S.do;if(D.pick!=null)return;D.pick=o;const it=D.phase==="q"?D.Q[D.i]:null,ok=o===0,fast=Date.now()-D.t0<DCFG.fast;
  if(D.phase==="i"){dAns(D.ig,fast?-1:ok?1:0,"o",!dSeenAt(D.ig));D.igRes=ok;dSave();return}
  dAns(it.qid,fast?-1:ok?1:0,"o",it.fresh);const s=D.st[it.cid];D.fast=fast;
  const more=()=>{const ex=s.asked;let P=dPick(it.cid,"o",ex);if(!P||!P.fresh){const B=dPick(it.cid,"b",ex);if(B&&B.fresh)P=B}if(P){s.asked.push(P.q[0]);D.Q.push({cid:it.cid,qid:P.q[0],fresh:P.fresh});return true}return false};
  if(fast){if(s.asked.length<4&&!more())s.res=s.res||"no"}
  else{s.n++;if(ok&&it.fresh)s.ok++;
    if(s.n===2){if(s.ok===2)s.res="k";else if(s.ok===1){if(!more())s.res="no"}else s.res="no"}
    else if(s.n>=3&&!s.res)s.res=s.ok>=2?"k":"no"}
  dSave()}
function doNext(){const D=S.do;D.pick=null;D.t0=Date.now();D.o=sh([0,1,2,3]);
  if(D.phase==="q"){D.i++;if(D.i>=D.Q.length){if(D.ig){D.phase="i"}else{doFinish()}}}
  else doFinish()}
function doFinish(){const D=S.do,g=dG(),t=today();if(D.done)return;D.done=true;D.phase="end";
  Object.keys(D.st).forEach(id=>{if(D.st[id].res==="k"){const x=g.cst[id];x.st="k";x.tK=t;x.nx=addDays(t,21)}});
  const R=g.dor[D.k]=g.dor[D.k]||{n:0};R.n++;R.last=t;if(D.igRes!=null)R.ig=R.ig||D.igRes;
  if(dCs(D.k).some(c=>dSt(c.id)!=="k"))R.next=addDays(t,DCFG.retry);else delete R.next;dSave()}

/* ---------- área, plan y XP ---------- */
function dPlan(k){const g=dG(),T=g.trD[k]||{},cs=dCs(k),lo=!!(S.g.lore||{})[k],cn=(CREN[k]||["el guardián"])[0].split(",")[0];
  const nV=cs.filter(dVisto).length,M=dMis(k),DM=M&&dMisDef(k,M.id),nA=M?M.apps.length:0,nC=cs.filter(c=>["c","k"].includes(dSt(c.id))).length,nK=cs.filter(c=>dSt(c.id)==="k").length,eco=!!(M&&M.eco);
  return [{m:"bronce",v:"Comprende",it:[[lo,`Habla con ${cn}`,["reg",k,"Ir a hablar"]],[nV>=cs.length||!!T.b,`Trabaja las ${cs.length} ideas clave en sus lecturas (${Math.min(nV,cs.length)}/${cs.length})`,["area",k,"Ver las lecturas"]],[!!T.b,"Supera la Prueba del guardián: cada idea, en situaciones nuevas",["dguard",k,"Prueba del guardián"]]]},
   {m:"plata",v:"Aplica",it:[[!!M||!!T.p,"Elige una misión para aplicar una técnica en tu vida",["dmis",k,"Elegir mi misión"]],[!!T.p||!!(DM&&nA>=DM.N),DM?`${DM.n}: ${Math.min(nA,DM.N)} de ${DM.N} aplicaciones, a tu ritmo y sin fecha límite`:"Completa sus aplicaciones, a tu ritmo y sin fecha límite",["dmis",k,"Registrar una aplicación"]],[!!T.p||(!!M&&dMisChk(k)),"La app comprueba que tus decisiones encajan con tus datos",["dmis",k,"Ver mi misión"]]]},
   {m:"oro",v:"Consolida",it:[[nC>=cs.length,`Confirma en el Repaso, sin ayuda, las ideas que acertaste con apoyo (${nC}/${cs.length})`,["drep",k,"Hacer el repaso"]],[nK>=cs.length,`Encuentro con ${cn}: recuerda y aplica las ideas pasado un tiempo (${nK}/${cs.length})`,["doro",k,"Ir al encuentro"]],[eco,"Eco: una aplicación más de tu técnica, registrada por ti",["deco",k,"Registrar el eco"]]]}]}
function dAvail(k,a){if(!a)return false;const x=a[0],T=dG().trD[k]||{},M=dMis(k);
  if(x==="reg"||x==="area")return true;if(x==="dguard")return dGuardOpen(k);if(x==="dmis")return !!T.b&&!T.p;if(x==="drep")return dRepDue(k).length>0;if(x==="doro")return dOroState(k).ok;if(x==="deco")return !!T.p&&!!M&&!M.eco&&today()>T.p;return false}
function dArea(k){const g=dG(),T=g.trD[k]=g.trD[k]||{},t=today(),cs=dCs(k);let ch=false;dLegacy(k);
  if(T.b&&!T.p&&dMisComplete(k)){T.p=t;ch=true;const M=dMis(k);dGrant(dMisDef(k,M.id).tool)}
  if(T.p&&!T.o&&cs.every(c=>dSt(c.id)==="k")&&dMis(k)&&dMis(k).eco){T.o=t;ch=true}
  if(ch)dSave();
  const P=dPlan(k),metal=dMetal(T),H=S.g.tr[k]||{},hist=dMetal(H),mC=DRANK[hist]>DRANK[metal]?hist:metal,cn=(CREN[k]||["el guardián"])[0].split(",")[0];
  let next="¡Oro conseguido! Lo que has aprendido seguirá apareciendo de vez en cuando en el Repaso.",act=null;const ci=P.findIndex(c=>!c.it.every(x=>x[0]));
  if(ci>=0){const it=P[ci].it.find(x=>!x[0]&&dAvail(k,x[2]))||P[ci].it.find(x=>!x[0]);next=`${P[ci].m==="bronce"?"Bronce":P[ci].m==="plata"?"Plata":"Oro"}: ${it[1].charAt(0).toLowerCase()+it[1].slice(1)}.`;
    if(dAvail(k,it[2]))act=it[2];
    else{const x=it[2]&&it[2][0];
      if(x==="dguard")next+=" Antes, trabaja las lecturas de las ideas clave.";
      if(x==="drep"){const n=dRepNext(k);if(n)next+=` Tus ideas «con apoyo» vuelven al Repaso el ${fmtD(n)}. Mientras, puedes explorar otras regiones.`}
      if(x==="doro"){const O=dOroState(k);if(O.why==="wait")next+=` ${cn} te espera a partir del ${fmtD(O.when)}: el tiempo es parte de la prueba. Mientras, sigue explorando.`;else if(O.why==="retry")next+=` Repasa con calma: podrás volver a verle el ${fmtD(O.when)}, con otras preguntas.`;else if(O.why==="apoyo")next+=" Antes, confirma en el Repaso las ideas que acertaste con apoyo."}
      if(x==="deco"){next+=" Puedes registrarlo a partir de mañana."}}}
  return {k,d:GDIF[k],metal,mC,hist,T,next,act,checks:P[2].it.map(x=>[x[0],x[1]]),learned:cs.filter(dVisto).length,total:cs.length,openO:null,plan:P,ent:0,D:true}}
function dWhen(k,A,i,j){const it=A.plan[i].it[j],x=it[2]&&it[2][0];if(it[0])return ["done","✓ Hecho"];if(i>0&&!A.T.b)return ["later","🔒 Más adelante: con el bronce"];
  if(dAvail(k,it[2]))return ["now","🟢 Puedes hacerlo hoy"];
  if(x==="dguard")return ["later","🔒 Cuando hayas trabajado las lecturas de las ideas clave"];
  if(x==="dmis")return A.T.p?["done","✓ Hecho"]:["later","🔒 Más adelante: con el bronce"];
  if(x==="drep"){const n=dRepNext(k);return n?["tom",`🌙 El ${fmtD(n)}`]:["later","🔒 Más adelante"]}
  if(x==="doro"){const O=dOroState(k);if(O.why==="plata")return ["later","🔒 Más adelante: con la plata"];if(O.why==="wait")return ["tom",`🌙 A partir del ${fmtD(O.when)}`];if(O.why==="retry")return ["tom",`🌙 El ${fmtD(O.when)}`];if(O.why==="apoyo")return ["later","🔒 Antes, el Repaso"];return ["later","🔒 Más adelante"]}
  if(x==="deco")return A.T.p?["tom","🌙 A partir de mañana"]:["later","🔒 Más adelante: con la plata"];return ["now","🟢 Puedes hacerlo hoy"]}
function dBtn(k,a,c){const [x,,l]=a,ic={dguard:"🛡️",dmis:"🧭",drep:"🔁",doro:"⭐",deco:"🔂"}[x]||"▶";return `<button class="${c||"btn"}" data-d="${x}|${k}">${ic} ${esc(l)}</button>`}
function dXP(){if(!DREG.length)return 0;const g=dG();let xp=0;
  DREG.forEach(k=>{const T=g.trD[k]||{},M=g.mis[k];if(T.b)xp+=20;if(T.p)xp+=30;if(T.o)xp+=50;if(M){const D=dMisDef(k,M.id);xp+=Math.min(M.apps.length,D?D.N:4)*10;if(M.eco)xp+=10}if(g.chal[k])xp+=20});
  (g.misH||[]).forEach(M=>xp+=Math.min((M.apps||[]).length,4)*10);
  const rv=new Set();g.ans.forEach(a=>{if(a[3]==="r")rv.add(a[0]+a[1])});xp+=rv.size*5;return xp}
function dStage(){const ms=Object.keys(GDIF).map(k=>{try{const A=gArea(k);return A.mC||A.metal}catch(e){return "ninguno"}});
  const nb=ms.filter(m=>m!=="ninguno").length,np=ms.filter(m=>m==="plata"||m==="oro").length,no=ms.filter(m=>m==="oro").length;
  let st=1;if(nb>=2)st=2;if(st===2&&np>=2)st=3;if(st===3&&no>=1)st=4;if(st===4&&no>=3)st=5;
  const g=dG();const base=Math.max(st,(g.dMax&&g.dMax.st)||1);if(!g.dMax||base>(g.dMax.st||1)){g.dMax=Object.assign(g.dMax||{},{st:base});dSave()}
  const R=[["2 trofeos de bronce o más",nb,2],["2 trofeos de plata o más",np,2],["1 trofeo de oro",no,1],["3 trofeos de oro",no,3]];
  const nx=base<5?{name:PJSTG[base][0],gear:pjGear(base),req:[[R[base-1][0],`${Math.min(R[base-1][1],R[base-1][2])} / ${R[base-1][2]}`]]}:null;return {st:base,nextEvo:nx,nb,np,no}}

/* ---------- semanas activas ---------- */
function dDays(){const D=new Set();allLogs().forEach(([d,v])=>{if(v==="si"||v==="poco")D.add(d)});const g=dG();g.ans.forEach(a=>D.add(a[1]));
  Object.values(g.mis).forEach(M=>{(M.apps||[]).forEach(a=>D.add(a.d));if(M.eco)D.add(M.eco.d)});(g.misH||[]).forEach(M=>(M.apps||[]).forEach(a=>D.add(a.d)));
  Object.values(S.g.ok||{}).forEach(d=>{if(typeof d==="string")D.add(d)});Object.values(S.g.ent||{}).forEach(L=>L.forEach(d=>D.add(d)));
  Object.values(g.td).forEach(L=>{if(Array.isArray(L))L.forEach(x=>{if(x&&x.d)D.add(x.d)})});(S.diario||[]).forEach(x=>{if(x&&x.d)D.add(x.d)});return D}
function dWeeks(){const W={};dDays().forEach(d=>{if(!/^\d{4}-\d\d-\d\d$/.test(d))return;const w=wkey(d);W[w]=(W[w]||0)+1});const act=Object.keys(W).filter(w=>W[w]>=2).sort(),cur=wkey(today());return {n:act.length,list:act,thisWeek:W[cur]||0}}

/* ---------- interfaz: piezas comunes ---------- */
function dQCard(q,o,pick,onAttr,extra){const O=dOpts(q),done=pick!=null;
  return `<div class="card stack dq"><h2 class="qh" style="font-size:1.12rem;margin:0">${esc(q[2])}</h2><div class="stack" style="gap:8px">${o.map(i=>`<button class="btn ghost lqo dopt${done?(i===0?" tok":i===pick?" tno":""):""}" ${onAttr}="${i}" ${done?"disabled":""}>${esc(O[i][0])}</button>`).join("")}</div>${done?`<div class="dfb ${pick===0?"good":"bad"}"><b>${pick===0?"✓ Bien visto.":"✗ Esta no era."}</b> ${esc(O[pick][1])}${pick!==0?`<br><span class="muted">La buena: «${esc(O[0][0])}». ${esc(O[0][1])}</span>`:""}</div>`:""}${extra||""}</div>`}
function dHead(k,t,sub){return `<p class="eyebrow">${esc(GREG[k]||"")}</p><h1 style="margin:0">${t}</h1>${sub?`<p class="muted" style="margin:4px 0 0">${sub}</p>`:""}`}
function dGuide(k,txt){const cn=(CREN[k]||["El guardián"])[0].split(",")[0];return `<div class="rgg"><span class="rggc">${creSVG(k,2.6)}</span><div class="rggb"><span class="advwho">${esc(cn)}</span><p>${txt}</p></div></div>`}

/* ---------- vista: prueba del guardián ---------- */
function vDGuard(){const G=S.dg;if(!G)return vRegion();const k=G.k;
  if(G.done||!G.cur){const R=G.cs.map(id=>[id,G.st[id].res]);const T=dG().trD[k]||{};
    return `<section class="stack dview">${dHead(k,"Prueba del guardián · resultado")}${dGuide(k,T.b?"Has demostrado que entiendes mis ideas en situaciones nuevas. El bronce es tuyo.":"Todavía no. Lo que ya has demostrado se queda guardado: la próxima vez solo te preguntaré lo que falta, con situaciones nuevas.")}
     <div class="card stack">${R.map(([id,r])=>`<div class="dcrow"><b>${esc(DC[id].n)}</b><span class="dst ${r}">${r==="c"?"✓ Comprendida a la primera":r==="a"?"✓ Comprendida con apoyo: volverá al Repaso en unos días":"Aún no: relee y vuelve cuando quieras"}</span></div>`).join("")}</div>
     ${R.some(([,r])=>r==="a")?`<div class="lectwhy"><b>¿Por qué «con apoyo»?</b> Acertar justo después de leer la explicación no demuestra lo mismo que acertar a la primera. Por eso esa idea vuelve al Repaso dentro de ${DCFG.rep} días o más, con un caso nuevo y sin ayuda. El bronce no se quita nunca.</div>`:""}
     ${R.some(([,r])=>r==="no")?`<div class="stack" style="gap:6px">${R.filter(([,r])=>r==="no").map(([id])=>DC[id].lec.map(l=>CI[l]?`<button class="linkbtn" data-open="${l}" style="text-align:left">📖 Releer: ${esc(CI[l].t)}</button>`:"").join("")).join("")}</div>`:""}
     <div class="row"><button class="btn" data-reg="${k}">Volver a la región</button></div></section>`}
  const C=G.cur,q=DQ[C.qid].q,done=C.pick!=null,nOpen=G.cs.filter(id=>!G.st[id].res).length;
  const fb=done?(C.fast?`<p class="dfast">⏱️ Has respondido en menos de 3 segundos: esta no cuenta, ni a favor ni en contra. Lee cada situación con calma.</p>`:"")+`<button class="btn" data-d="dgnext|${k}" style="width:max-content">Siguiente</button>`:"";
  return `<section class="stack dview"><div class="row" style="justify-content:space-between"><p class="eyebrow" style="margin:0">🛡️ Prueba del guardián · ${esc(GREG[k])}</p><span class="pxchip">${G.n+(done?0:1)}</span></div>
   <div class="dchips">${G.cs.map(id=>{const r=G.st[id].res;return `<span class="dchip ${r||(id===C.cid?"now":"")}">${r==="c"||r==="a"?"✓ ":""}${esc(DC[id].n)}</span>`}).join("")}</div>
   ${dQCard(q,C.o,C.pick,"data-dga",fb)}
   <p class="muted" style="font-size:.8rem">Sin vidas ni cuenta atrás. Si fallas, verás por qué y la idea volverá más tarde con otra situación. Quedan ${nOpen} ${nOpen===1?"idea":"ideas"} por demostrar.</p></section>`}

/* ---------- vista: repaso ---------- */
function vDRep(){const R=S.dr;if(!R)return vRegion();const k=R.k;
  if(R.i>=R.L.length){const up=R.res.filter(x=>x==="up").length;return `<section class="stack dview">${dHead(k,"Repaso del guardián · hecho")}${dGuide(k,up?`Ahora sí: ${up===1?"una idea pasa":up+" ideas pasan"} a «comprendida», porque la has resuelto días después, sin ayuda.`:"Lo que hoy no ha salido volverá en un par de días con otro caso. No pierdes nada.")}<div class="row"><button class="btn" data-reg="${k}">Volver a la región</button><button class="btn ghost" data-go="hoy">Ir a Hoy</button></div></section>`}
  const it=R.L[R.i],q=DQ[it.qid].q,c=DC[it.cid],done=R.pick!=null,T=dG().tools[c.tool];
  const m=done?R.res[R.res.length-1]:null,msg={up:"Idea comprendida: la has resuelto días después, sin ayuda.",hint:"Con pista cuenta como «con apoyo»: volverá en un par de días.",fast:"Muy rápido: no cuenta como prueba. Volverá en un par de días.",seen:"Este caso ya lo habías visto: cuenta como práctica, no como prueba. Volverá con otro.",no:"Volverá en un par de días con otro caso.",keep:"Sigue ahí. La próxima vez, dentro de unas semanas.",soon:"Volverá antes para que no se escape. No pierdes nada."}[m]||"";
  const hint=!done&&T&&!R.hint?`<button class="linkbtn" data-d="dhint|${k}">${dIco(c.tool,1.2)} Usar ${esc(DTOOLS[c.tool][0])} como pista</button>`:R.hint?`<div class="dhint">${dIco(c.tool,1.4)} <span>${esc(c.hint)}</span></div>`:"";
  return `<section class="stack dview"><div class="row" style="justify-content:space-between"><p class="eyebrow" style="margin:0">🔁 Repaso del guardián · ${esc(c.n)}</p><span class="pxchip">${R.i+1} / ${R.L.length}</span></div>
   <p class="muted" style="margin:0;font-size:.88rem">Sin abrir las lecturas: un caso nuevo de una idea que viste hace unos días.</p>${hint}
   ${dQCard(q,it.o,R.pick,"data-dra",done?`<p class="okline">${esc(msg)}</p><button class="btn" data-d="drnext|${k}" style="width:max-content">${R.i+1<R.L.length?"Siguiente":"Terminar"}</button>`:"")}</section>`}

/* ---------- vista: encuentro del oro ---------- */
function vDOro(){const D=S.do;if(!D)return vRegion();const k=D.k,cn=(CREN[k]||["El guardián"])[0].split(",")[0];
  if(D.phase==="end"){const ok=Object.keys(D.st).filter(id=>D.st[id].res==="k"),no=Object.keys(D.st).filter(id=>D.st[id].res!=="k"),R=dG().dor[k]||{};
    return `<section class="stack dview">${dHead(k,"Encuentro del oro · resultado")}${dGuide(k,no.length?`Has consolidado ${ok.length} de ${ok.length+no.length}. Repasa lo que falta y vuelve el ${fmtD(R.next)}: te esperaré con otras preguntas. No pierdes nada de lo conseguido.`:"Lo recuerdas y lo aplicas pasado un tiempo. Eso es lo que de verdad cuenta.")}
     <div class="card stack">${Object.keys(D.st).map(id=>`<div class="dcrow"><b>${esc(DC[id].n)}</b><span class="dst ${D.st[id].res==="k"?"k":"no"}">${D.st[id].res==="k"?"⭐ Consolidada":"Aún no: repásala"}</span></div>`).join("")}${D.ig?`<div class="dcrow"><b>Desafío integrador</b><span class="dst ${D.igRes?"k":"no"}">${D.igRes?"✓ Resuelto":"Revisa el porqué en el feedback"}</span></div>`:""}</div>
     ${no.length?`<div class="stack" style="gap:6px">${no.map(id=>DC[id].lec.map(l=>CI[l]?`<button class="linkbtn" data-open="${l}" style="text-align:left">📖 Releer: ${esc(CI[l].t)}</button>`:"").join("")).join("")}</div>`:""}
     ${!no.length&&!(dMis(k)||{}).eco?`<div class="lectwhy"><b>Te falta el eco:</b> una aplicación más de tu técnica, registrada por ti. Con ella se completa el oro.</div>`:""}
     <div class="row"><button class="btn" data-reg="${k}">Volver a la región</button></div></section>`}
  const isI=D.phase==="i",qid=isI?D.ig:D.Q[D.i].qid,q=DQ[qid].q,done=D.pick!=null,tot=D.Q.length+(D.ig?1:0),pos=isI?D.Q.length+1:D.i+1;
  const fb=done?(D.fast&&!isI?`<p class="dfast">⏱️ Menos de 3 segundos: esta no cuenta. Te traeré otra.</p>`:"")+`<button class="btn" data-d="donext|${k}" style="width:max-content">${pos<tot||(!isI&&D.ig)?"Siguiente":"Terminar"}</button>`:"";
  return `<section class="stack dview"><div class="row" style="justify-content:space-between"><p class="eyebrow" style="margin:0">⭐ Encuentro con ${esc(cn)}</p><span class="pxchip">${pos} / ${tot}</span></div>
   ${isI?`<div class="lectwhy"><b>Desafío final:</b> aquí se mezcla todo lo que has aprendido en ${esc(GREG[k])}.</div>`:`<p class="muted" style="margin:0;font-size:.85rem">Preguntas que nunca has visto, sobre ideas que aprendiste hace tiempo. Sin vidas: aunque falles, sigues hasta el final.</p>`}
   ${dQCard(q,D.o,D.pick,"data-doa",fb)}</section>`}

/* ---------- vista: misión de aplicación ---------- */
function dPlanForm(k,M){const p=M.plan||{},miss=M.plan?dPlanCheck(M.plan):null;
  return `<div class="card stack dplan"><h3 style="margin:0">${dIco("plan",1.4)} Tu plan si… entonces</h3><p class="muted" style="margin:0;font-size:.86rem">Antes de empezar, decide cuándo, dónde y cuál es tu primer paso. La app comprueba que tenga las tres piezas.</p>
   <label class="rglab" for="dpw">Si… (cuándo: una situación que ya pasa cada día)</label><input id="dpw" class="field" maxlength="90" placeholder="Ej.: después de cenar" value="${esc(p.w||"")}">
   <label class="rglab" for="dpl">¿Dónde?</label><input id="dpl" class="field" maxlength="60" placeholder="Ej.: en la mesa de la cocina" value="${esc(p.l||"")}">
   <label class="rglab" for="dps">Entonces… (tu primer paso, pequeño)</label><input id="dps" class="field" maxlength="120" placeholder="Ej.: abro los apuntes y leo el primer apartado" value="${esc(p.s||"")}">
   ${miss&&miss.length?`<p class="dwarn">Te falta: ${esc(miss.join(", "))}.</p>`:miss?`<p class="okline">✓ Plan completo: cuándo, dónde y primer paso.</p>`:""}<button class="btn ghost" data-d="dplan|${k}" style="width:max-content">Comprobar mi plan</button></div>`}
function dTimer(key,min,label){const t=dG().td.tm&&dG().td.tm[key];const left=t?Math.max(0,Math.round((t.t0+min*60000-Date.now())/1000)):null;
  if(!t)return `<button class="btn" data-d="dtm|${key}|${min}">▶ ${label||`Empezar ${min} minutos`}</button>`;
  if(left>0)return `<div class="dtimer"><b id="dtm-${key}" data-end="${t.t0+min*60000}">${String(Math.floor(left/60)).padStart(2,"0")}:${String(left%60).padStart(2,"0")}</b><span class="muted">Puedes dejar el móvil: el tiempo sigue contando.</span><button class="linkbtn" data-d="dtmx|${key}">Cancelar</button></div>`;
  return `<p class="okline">✓ ${min} minutos cumplidos (medido por la app).</p>`}
function dTmDone(key,min){const t=(dG().td.tm||{})[key];return !!t&&Date.now()-t.t0>=min*60000}
setInterval(()=>{document.querySelectorAll("[id^=dtm-]").forEach(e=>{const l=Math.max(0,Math.round((+e.dataset.end-Date.now())/1000));e.textContent=`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`;if(l<=0&&!e.dataset.fired){e.dataset.fired=1;toast("⏱️ ¡Tiempo!");render()}})},1000);
function dAppForm(k,M,D,eco){const n=M.apps.length,tag=eco?"eco":"app";
  if(M.id==="fugas"){const need=!eco&&n>=2&&!(M.cm&&M.cm[1]==="ok");
    if(need){const dom=dDom(M.apps.slice(0,2));return `<div class="card stack"><h3 style="margin:0">Elige tu contramedida</h3><p style="margin:0">En tus dos primeras sesiones: <b>${M.apps.slice(0,2).reduce((s,a)=>s+(+a.v.f||0),0)}</b> fugas de fuera y <b>${M.apps.slice(0,2).reduce((s,a)=>s+(+a.v.i||0),0)}</b> de dentro.</p><p class="muted" style="margin:0;font-size:.86rem">Elige qué vas a probar en las dos siguientes. La app comprobará si encaja con tus datos.</p>${DCM.map((c,i)=>`<button class="btn ghost dopt" data-d="dcm|${k}|${i}">${esc(c[1])}</button>`).join("")}${M.cm&&M.cm[1]==="bad"?`<p class="dwarn">${dom==="dentro"?"Tus fugas son sobre todo de dentro: quitar avisos o cambiar de sitio ayuda poco con eso. Prueba una contramedida para cuando algo te cuesta.":"Tus fugas vienen sobre todo de fuera: lo que más ayuda es cambiar el entorno."}</p>`:""}</div>`}
    return `<div class="card stack"><h3 style="margin:0">${eco?"Eco: una sesión más":"Sesión "+(n+1)+" de "+D.N}</h3><p class="muted" style="margin:0;font-size:.86rem">Después de estudiar, apunta tus palitos.${M.cm&&!eco?` Tu contramedida: <b>${esc(DCM[M.cm[0]][1])}</b>.`:""}</p>
     <div class="dstep"><span>🔔 Me distrajo algo de fuera</span><input id="dff" type="number" min="0" max="60" inputmode="numeric" class="field" value="0"></div><div class="dstep"><span>🙋 Lo busqué yo</span><input id="dfi" type="number" min="0" max="60" inputmode="numeric" class="field" value="0"></div>
     <button class="btn" data-d="dsave|${k}|${tag}">Guardar sesión</button></div>`}
  if(M.id==="foco")return `<div class="card stack"><h3 style="margin:0">${eco?"Eco: una sesión más":"Sesión "+(n+1)+" de "+D.N}</h3><p style="margin:0">Hazla en la sala de foco. Cuando la cierres y la guardes, la app la apuntará aquí si tenía objetivo y al menos 2 pasos.</p><button class="btn" data-act="foco-open">${dIco("foco",1.3)} Abrir la sala de foco</button></div>`;
  if(M.id==="arranque"){const key="arr-"+k+(eco?"e":n);return `<div class="card stack"><h3 style="margin:0">${eco?"Eco: un arranque más":"Tarea "+(n+1)+" de "+D.N}</h3>
     <label class="rglab" for="dat">¿Qué tarea estás aplazando?</label><input id="dat" class="field" maxlength="80" value="${esc((dG().td.arrT||{})[key]||"")}" placeholder="Ej.: empezar la memoria de prácticas">
     <p class="rglab">¿Qué te frena?</p><div class="rgchips">${["Me aburre","Miedo a hacerlo mal","No sé por dónde empezar","Me da corte","Otra cosa"].map(x=>`<button type="button" data-d="demo|${key}|${x}" aria-pressed="${((dG().td.arrE||{})[key])===x}">${x}</button>`).join("")}</div>
     ${dTimer(key,10,"Empezar 10 minutos")}${dTmDone(key,10)?`<p class="rglab">¿Seguiste después de los 10 minutos?</p><div class="rgchips">${["Sí","Un poco","No"].map(x=>`<button type="button" data-d="dsave|${k}|${tag}|${x}">${x}</button>`).join("")}</div>`:""}</div>`}
  if(M.id==="multi"){const m=dMulti(M.apps);return `<div class="card stack"><h3 style="margin:0">${eco?"Eco: una tarea más":"Tarea "+(n+1)+" de "+D.N}</h3>${m?`<p class="dmult">Tu multiplicador ahora: <b>×${fmt1(m)}</b> (lo que tardas de verdad dividido entre lo que calculas)</p>`:""}
     <label class="rglab" for="dmt">Tarea</label><input id="dmt" class="field" maxlength="80" placeholder="Ej.: hacer la ficha de Anatomía">
     <label class="rglab" for="dme">¿Cuántos minutos crees que tardarás?</label><input id="dme" type="number" min="1" max="1440" inputmode="numeric" class="field">
     ${m?`<label class="rglab" for="dmc">Con tu multiplicador, ¿cuántos minutos planificas de verdad?</label><input id="dmc" type="number" min="1" max="3000" inputmode="numeric" class="field">`:""}
     <label class="rglab" for="dmr">Cuando acabes: ¿cuántos minutos tardaste?</label><input id="dmr" type="number" min="1" max="3000" inputmode="numeric" class="field">
     <button class="btn" data-d="dsave|${k}|${tag}">Guardar tarea</button></div>`}
  if(M.id==="folio"){const key="fol-"+k+(eco?"e":n);return `<div class="card stack"><h3 style="margin:0">${eco?"Eco: un folio más":"Tema "+(n+1)+" de "+D.N}</h3>
     <label class="rglab" for="dft">¿Qué tema?</label><input id="dft" class="field" maxlength="80" value="${esc((dG().td.folT||{})[key]||"")}" placeholder="Ej.: tema 3 de Seguridad e Higiene">
     <p class="muted" style="margin:0;font-size:.86rem">Cierra los apuntes y escribe en un papel todo lo que recuerdes. Después compara.</p>${dTimer(key,5,"Empezar 5 minutos")}
     ${dTmDone(key,5)?`<p class="rglab">Al comparar, ¿cuánto recordabas?</p><div class="rgchips">${["Casi nada","Menos de la mitad","Más o menos la mitad","Casi todo"].map(x=>`<button type="button" data-d="dsave|${k}|${tag}|${x}">${x}</button>`).join("")}</div><p class="muted" style="font-size:.8rem;margin:0">Lo que te faltaba, apúntalo en tu papel: eso es lo que repasas. La app no lo guarda.</p>`:""}</div>`}
  if(M.id==="calendario"){const C=M.cal;if(eco)return `<div class="card stack"><h3 style="margin:0">Eco: un repaso más</h3><p style="margin:0">Haz uno de tus repasos programados (o uno nuevo) sin mirar, y márcalo.</p><button class="btn" data-d="dsave|${k}|eco|hecho">Lo he hecho</button></div>`;
    if(C&&!dSpaced(C.ds,C.ex)){const f=C.ds.slice().sort()[0];return `<div class="card stack"><h3 style="margin:0">Tus repasos</h3><p style="margin:0">Control: <b>${fmtD(C.ex)}</b>${C.t?" · "+esc(C.t):""}</p><ul class="dlist">${C.ds.slice().sort().map(d=>`<li>📅 ${fmtD(d)}</li>`).join("")}</ul><button class="btn ghost" data-d="dics|${k}">📅 Añadir al calendario del móvil</button>${n?"":today()>=f?`<button class="btn" data-d="dsave|${k}|app|hecho">He hecho el primer repaso</button>`:`<p class="muted">Cuando llegue el ${fmtD(f)}, haz el primer repaso sin mirar y márcalo aquí.</p>`}</div>`}
    const ex=(C&&C.ex)||"",pr=ex?dPropose(ex):[];return `<div class="card stack"><h3 style="margin:0">Programa tus repasos</h3><label class="rglab" for="dcx">Fecha del control</label><input id="dcx" type="date" class="field" value="${esc(ex)}" min="${addDays(today(),3)}"><label class="rglab" for="dct">Módulo o tema</label><input id="dct" class="field" maxlength="60" value="${esc((C&&C.t)||"")}">
     ${ex?`<p class="muted" style="margin:0;font-size:.86rem">Te propongo estas fechas. Cámbialas si quieres: la app comprobará que queden espaciadas.</p>${[0,1,2,3,4].map(i=>`<input type="date" class="field dcd" id="dcd${i}" value="${esc((C&&C.ds&&C.ds[i])||pr[i]||"")}">`).join("")}${C&&C.ds?`<p class="dwarn">${esc(dSpaced(C.ds,C.ex))}</p>`:""}<button class="btn" data-d="dcal|${k}">Comprobar y guardar</button>`:`<button class="btn" data-d="dcalx|${k}">Proponerme fechas</button>`}</div>`}
  return ""}
function vDMis(){const k=S.dm&&S.dm.k;if(!k)return vRegion();const g=dG(),M=dMis(k),T=g.trD[k]||{};
  if(!M){return `<section class="stack dview">${dHead(k,"Elige tu misión de aplicación","Aplicar una técnica en tu vida real. Sin días seguidos ni fecha límite: a tu ritmo.")}
    ${DMIS[k].map(D=>`<div class="card stack dmcard"><div class="row" style="gap:10px;align-items:center">${dIco(D.tool,2)}<div><b>${esc(D.n)}</b><br><span class="muted" style="font-size:.85rem">${D.N} ${D.N===1?"aplicación":"aplicaciones"} · herramienta: ${esc(DTOOLS[D.tool][0])}</span></div></div><p style="margin:0">${esc(D.what)}</p>
     <div class="dvs"><span>✅ <b>La app comprueba:</b> ${esc(D.chk)}</span><span>✍️ <b>Registras tú:</b> ${esc(D.self)}</span></div><button class="btn" data-d="dmpick|${k}|${D.id}" style="width:max-content">Elegir esta misión</button></div>`).join("")}
    <div class="row"><button class="btn ghost" data-reg="${k}">Volver a la región</button></div></section>`}
  const D=dMisDef(k,M.id),n=M.apps.length,done=!!T.p,ecoOk=done&&!M.eco&&today()>T.p;
  let body="";if(D.plan&&!(M.plan&&!dPlanCheck(M.plan).length))body=dPlanForm(k,M);
  else if(!done&&(n<D.N||!dMisChk(k)))body=(D.plan?`<p class="okline">✓ Tu plan: si ${esc(M.plan.w)}, en ${esc(M.plan.l)}, entonces ${esc(M.plan.s)}.</p>`:"")+(n<D.N||M.id==="fugas"||M.id==="calendario"||M.id==="folio"?(n>=D.N&&M.id==="folio"?dFolioPlan(k,M):dAppForm(k,M,D,false)):"");
  else if(ecoOk)body=`<div class="lectwhy"><b>Eco para el oro:</b> una aplicación más de esta técnica, cuando quieras. La registras tú.</div>`+dAppForm(k,M,D,true);
  const sum=dMisSummary(k,M,D);
  return `<section class="stack dview">${dHead(k,esc(D.n),done?"Plata conseguida: has puesto en práctica esta técnica (registrado por ti) y tus decisiones encajan con tus datos.":`${Math.min(n,D.N)} de ${D.N} aplicaciones · sin fecha límite`)}
   <div class="xpbar" aria-hidden="true"><i style="width:${Math.min(100,n/D.N*100)}%"></i></div>
   <div class="dvs"><span>✅ <b>La app comprueba:</b> ${esc(D.chk)}</span><span>✍️ <b>Registras tú:</b> ${esc(D.self)}</span></div>
   ${body}${sum}
   <div class="row"><button class="btn ghost" data-reg="${k}">Volver a la región</button>${!done&&n===0?`<button class="linkbtn" data-d="dmchange|${k}">Cambiar de misión</button>`:""}</div></section>`}
function dFolioPlan(k,M){const R=M.rp||{ds:[]};const pr=[1,3,7,14].map(o=>addDays(today(),o));return `<div class="card stack"><h3 style="margin:0">Programa tus repasos</h3><p class="muted" style="margin:0;font-size:.86rem">Elige al menos 3 fechas para volver a hacer el folio en blanco de estos temas. La app comprobará que queden espaciadas.</p>${[0,1,2,3].map(i=>`<input type="date" class="field" id="drp${i}" value="${esc(R.ds[i]||pr[i])}">`).join("")}${M.rp&&dSpaced(M.rp.ds,null)?`<p class="dwarn">${esc(dSpaced(M.rp.ds,null))}</p>`:""}<button class="btn" data-d="drp|${k}">Comprobar y guardar</button>${M.rp&&!dSpaced(M.rp.ds,null)?`<button class="btn ghost" data-d="dics|${k}">📅 Añadir al calendario</button>`:""}</div>`}
function dMisSummary(k,M,D){if(!M.apps.length)return "";let x="";
  if(M.id==="fugas"){const a=M.apps.slice(0,2),b=M.apps.slice(2,4),dom=dDom(a),key=dom==="fuera"?"f":"i",av=L=>L.length?L.reduce((s,y)=>s+(+y.v[key]||0),0)/L.length:null;
    x=`<p style="margin:0">Fuga dominante en tus primeras sesiones: <b>${dom==="ambas"?"empate":dom}</b>.</p>${b.length?`<p style="margin:0">Fugas de ${dom==="fuera"?"fuera":"dentro"} por sesión: <b>${fmt1(av(a))}</b> antes → <b>${fmt1(av(b))}</b> con tu contramedida.</p>`:""}`}
  if(M.id==="multi"){const m=dMulti(M.apps);x=m?`<p style="margin:0">Tu multiplicador: <b>×${fmt1(m)}</b>. ${m>1.15?"Sueles tardar más de lo que calculas: ahora ya sabes cuánto corregir.":m<.87?"Sueles calcular de más: puedes ajustar a la baja.":"Calculas bastante bien."}</p>`:""}
  return `<details class="card fold"><summary>📓 Tus registros (${M.apps.length})</summary><div class="stack" style="gap:6px;margin-top:8px">${x}<ul class="dlist">${M.apps.map((a,i)=>`<li>${fmtD(a.d)} · ${esc(dAppTxt(M.id,a.v))}</li>`).join("")}</ul><p class="muted" style="font-size:.8rem;margin:0">Esto lo has registrado tú. La app comprueba las decisiones y los cálculos, no si las sesiones ocurrieron.</p></div></details>`}
function dAppTxt(id,v){if(id==="fugas")return `${v.f} de fuera · ${v.i} de dentro`;if(id==="foco")return `${v.min} min · ${v.steps} pasos · ${v.ok||""}`;if(id==="arranque")return `${v.task} · ${v.emo||""} · siguió: ${v.cont}`;if(id==="multi")return `${v.task}: calculaste ${v.est} min${v.corr?`, planificaste ${v.corr}`:""}, tardaste ${v.real}`;if(id==="folio")return `${v.t} · recordabas: ${v.r}`;if(id==="calendario")return "primer repaso hecho";return ""}

/* ---------- herramientas ---------- */
function dBelt(px){const g=dG(),L=DTORD.filter(t=>g.tools[t]);if(!DREG.length||!L.length)return "";return `<button class="dbelt" data-go="dtools" aria-label="Tus herramientas">${L.map(t=>`<span title="${esc(DTOOLS[t][0])}">${dIco(t,px||1.5)}</span>`).join("")}</button>`}
function vDTools(){const g=dG(),sel=S.dtt;if(sel&&g.tools[sel])return dToolView(sel);
  return `<section class="stack dview"><p class="eyebrow">Tu mochila</p><h1 style="margin:0">Herramientas</h1><p class="muted" style="margin:4px 0 0">Cada técnica que aplicas se convierte en una herramienta. Sirven en tu vida real y en los desafíos del juego.</p>
   <div class="dtgrid">${DTORD.map(t=>{const T=DTOOLS[t],own=g.tools[t];return `<button class="dtool${own?"":" off"}" ${own?`data-d="dtsel|${t}"`:"disabled"}>${dIco(t,2.6)}<b>${esc(T[0])}</b><span class="muted">${own?esc(T[2]):"Se consigue con "+esc(T[3])}</span>${own&&own.src==="hist"?`<small class="dhist">por tu plata histórica</small>`:""}</button>`}).join("")}</div>
   ${DREG.filter(k=>g.trD[k]&&g.trD[k].p&&!g.chal[k]&&g.tools[DB[k].chal.tool]).map(k=>`<div class="card stack"><b>🗝️ Desafío opcional · ${esc(DB[k].chal.who)}</b><p class="muted" style="margin:0">Alguien de ${esc(GREG[k])} necesita tu ${esc(DTOOLS[DB[k].chal.tool][0])}. Da una página de historia y XP, no trofeos.</p><button class="btn ghost" data-d="dchal|${k}" style="width:max-content">Ayudar</button></div>`).join("")}
   <button class="btn ghost" data-go="mas" style="width:max-content">Volver</button></section>`}
function dToolView(t){const g=dG(),T=DTOOLS[t],td=g.td;let b="";
  if(t==="lente"){const L=(td.lente||[]).concat(...Object.values(g.mis).filter(M=>M.id==="fugas").map(M=>M.apps.map(a=>({d:a.d,f:+a.v.f,i:+a.v.i})))).sort((a,b)=>a.d<b.d?-1:1).slice(-8),mx=Math.max(1,...L.map(x=>x.f+x.i));
    b=`<div class="dstep"><span>🔔 De fuera</span><input id="tlf" type="number" min="0" max="60" inputmode="numeric" class="field" value="0"></div><div class="dstep"><span>🙋 De dentro</span><input id="tli" type="number" min="0" max="60" inputmode="numeric" class="field" value="0"></div><button class="btn" data-d="tlsave">Guardar sesión</button>
     ${L.length?`<div class="dbars">${L.map(x=>`<div><i class="f" style="height:${x.f/mx*80}px"></i><i class="i" style="height:${x.i/mx*80}px"></i><small>${x.d.slice(8)}/${x.d.slice(5,7)}</small></div>`).join("")}</div><p class="muted" style="font-size:.8rem;margin:0">Naranja: de fuera · Azul: de dentro. Si dominan las de fuera, cambia el entorno; si dominan las de dentro, haz más pequeño el paso difícil.</p>`:""}`}
  else if(t==="foco")b=`<p style="margin:0">Sesiones guardadas: <b>${(S.diario||[]).filter(x=>x.id==="ATE-05").length}</b></p><button class="btn" data-act="foco-open">Abrir la sala de foco</button>`;
  else if(t==="arranque"){const key="tool-arr";b=`<p class="rglab">¿Qué te frena ahora?</p><div class="rgchips">${["Me aburre","Miedo a hacerlo mal","No sé por dónde empezar","Me da corte"].map(x=>`<button type="button" data-d="demo|${key}|${x}" aria-pressed="${((td.arrE||{})[key])===x}">${x}</button>`).join("")}</div><p class="muted" style="margin:0;font-size:.86rem">Ponerle nombre ya le quita fuerza. Ahora, solo 10 minutos.</p>${dTimer(key,10,"Empezar 10 minutos")}${dTmDone(key,10)?`<p class="okline">¿Sigues? Si te apetece, continúa. Si no, ya has empezado, que era lo difícil.</p><button class="linkbtn" data-d="dtmx|${key}">Otro arranque</button>`:""}`}
  else if(t==="multi"){const E=(td.multi||[]).concat(...Object.values(g.mis).filter(M=>M.id==="multi").map(M=>M.apps.map(a=>({d:a.d,est:+a.v.est,real:+a.v.real})))),m=E.length?E.reduce((s,x)=>s+x.real,0)/Math.max(1,E.reduce((s,x)=>s+x.est,0)):null;
    b=`${m?`<p class="dmult">Tu multiplicador: <b>×${fmt1(m)}</b> (con ${E.length} ${E.length===1?"tarea":"tareas"})</p>`:"<p class='muted'>Apunta algunas tareas para conocer tu multiplicador.</p>"}<div class="dstep"><span>Calculo (min)</span><input id="tme" type="number" min="1" inputmode="numeric" class="field"></div><div class="dstep"><span>Tardé (min)</span><input id="tmr" type="number" min="1" inputmode="numeric" class="field"></div><button class="btn ghost" data-d="tmsave">Guardar tarea</button>
     ${m?`<p class="rglab">Calculadora de plazos</p><div class="dstep"><span>Si calculo (min)</span><input id="tmq" type="number" min="1" inputmode="numeric" class="field" oninput="var o=document.getElementById('tmo');if(o)o.textContent=this.value?Math.round(this.value*${m.toFixed(3)})+' min realistas':''"></div><p id="tmo" class="dmult"></p>`:""}`}
  else if(t==="plan"){const P=td.plans||[];b=`<label class="rglab" for="tpw">Si… (cuándo)</label><input id="tpw" class="field" maxlength="90"><label class="rglab" for="tpl">Dónde</label><input id="tpl" class="field" maxlength="60"><label class="rglab" for="tps">Entonces… (primer paso)</label><input id="tps" class="field" maxlength="120"><label class="rglab" for="tph">Aviso diario (opcional)</label><input id="tph" type="time" class="field" style="max-width:160px"><button class="btn" data-d="tpsave">Comprobar y guardar</button>${P.length?`<ul class="dlist">${P.slice(-5).map((p,i)=>`<li>Si ${esc(p.w)}, en ${esc(p.l)}, entonces ${esc(p.s)} ${p.h?`<button class="linkbtn" data-d="tpics|${P.length-Math.min(5,P.length)+i}">📅</button>`:""}</li>`).join("")}</ul>`:""}`}
  else if(t==="folio")b=`<p style="margin:0">Cierra los apuntes. Escribe en un papel todo lo que recuerdes del tema durante 5 minutos. Después compara con los apuntes y marca lo que faltaba: eso es lo que repasas.</p>${dTimer("tool-fol",5,"Empezar 5 minutos")}${dTmDone("tool-fol",5)?`<button class="linkbtn" data-d="dtmx|tool-fol">Otro folio</button>`:""}`;
  else if(t==="calendario"){const c=td.cal||{};b=`<label class="rglab" for="tcx">Fecha del control</label><input id="tcx" type="date" class="field" value="${esc(c.ex||"")}" min="${addDays(today(),2)}"><label class="rglab" for="tct">Módulo o tema</label><input id="tct" class="field" maxlength="60" value="${esc(c.t||"")}"><button class="btn ghost" data-d="tcprop">Proponer repasos</button>${c.ds?`<ul class="dlist">${c.ds.map(d=>`<li>📅 ${fmtD(d)}</li>`).join("")}</ul><button class="btn" data-d="tcics">Añadir al calendario del móvil</button>`:""}`}
  return `<section class="stack dview"><div class="row" style="gap:12px;align-items:center">${dIco(t,3)}<div><p class="eyebrow" style="margin:0">Herramienta</p><h1 style="margin:0">${esc(T[0])}</h1></div></div><p class="muted" style="margin:0">${esc(T[2])}</p><div class="card stack">${b}</div><p class="muted" style="font-size:.8rem">Lo que apuntas aquí se queda solo en tu móvil.</p><button class="btn ghost" data-d="dtsel|" style="width:max-content">← Todas las herramientas</button></section>`}
function dICSdl(evs,name){const z=x=>String(x).replace(/[,;]/g,m=>"\\"+m),st=new Date().toISOString().replace(/[-:]/g,"").slice(0,15)+"Z";
  const L=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Brujula//ES"];evs.forEach((e,i)=>{const d=e.d.replace(/-/g,"");L.push("BEGIN:VEVENT","UID:brujula-d-"+d+"-"+i+"-"+Date.now()+"@rcanas-code.github.io","DTSTAMP:"+st);if(e.h){const hh=e.h.replace(":","")+"00";L.push("DTSTART:"+d+"T"+hh,"DTEND:"+d+"T"+hh);if(e.rr)L.push("RRULE:"+e.rr)}else L.push("DTSTART;VALUE=DATE:"+d);L.push("SUMMARY:"+z(e.s),"DESCRIPTION:"+z(e.x||"Brújula"),"END:VEVENT")});L.push("END:VCALENDAR");
  const url="data:text/calendar;charset=utf-8,"+encodeURIComponent(L.join("\r\n"));if(isIOS){location.href=url}else{const a=document.createElement("a");a.href=url;a.download=name||"brujula.ics";document.body.appendChild(a);a.click();a.remove()}toast("Ábrelo y toca «Añadir»")}

/* ---------- desafío opcional ---------- */
function vDChal(){const k=S.dc&&S.dc.k;if(!k)return vDTools();const C=DB[k].chal,st=S.dc,t=C.tool;
  if(dG().chal[k]&&st.end)return `<section class="stack dview">${dHead(k,"Desafío resuelto")}<div class="card dpage"><p class="eyebrow" style="margin:0">Página de historia</p><p style="margin:0">${esc(C.page)}</p></div><button class="btn" data-go="dtools" style="width:max-content">Volver a la mochila</button></section>`;
  let b="";
  if(t==="lente"){const A=st.a||{};const all=C.items.every((x,i)=>A[i]),ok=C.items.filter((x,i)=>A[i]===x[1]).length;
    b=`<div class="stack" style="gap:8px">${C.items.map((x,i)=>`<div class="dcrow"><span>${esc(x[0])}</span><span class="row" style="gap:6px"><button class="chip" data-d="dcl|${i}|f" aria-pressed="${A[i]==="f"}">Fuera</button><button class="chip" data-d="dcl|${i}|d" aria-pressed="${A[i]==="d"}">Dentro</button></span></div>`).join("")}</div>
     ${all?(ok>=5?`<p class="okline">✓ ${ok} de 6 bien clasificadas. ¿Qué le recomiendas?</p>${C.fix.map((f,i)=>`<button class="btn ghost dopt" data-d="dcf|${i}">${esc(f[0])}</button>`).join("")}${st.f!=null?`<div class="dfb ${C.fix[st.f][1]?"good":"bad"}">${esc(C.fix[st.f][2])}</div>`:""}`:`<p class="dwarn">${ok} de 6. Fíjate: ¿lo provocó algo externo o lo buscó él cuando algo le costaba?</p>`):""}`}
  else{const O=t==="multi"?C.opts:C.plans;if(t==="multi"){const e=C.past.reduce((s,x)=>s+x[0],0),r=C.past.reduce((s,x)=>s+x[1],0);b=`<table class="dtab"><tr><th>Calculó</th><th>Tardó</th></tr>${C.past.map(x=>`<tr><td>${x[0]} h</td><td>${x[1]} h</td></tr>`).join("")}<tr><td><b>${e} h</b></td><td><b>${r} h</b></td></tr></table><p class="muted" style="margin:0;font-size:.86rem">Usa tu Multiplicador: lo que tardó entre lo que calculó.</p><p class="rglab">¿Qué día terminará con un cálculo realista?</p>`}
    b+=O.map((f,i)=>`<button class="btn ghost dopt" data-d="dcf|${i}">${esc(f[0])}</button>`).join("")+(st.f!=null?`<div class="dfb ${O[st.f][1]?"good":"bad"}">${esc(O[st.f][2])}</div>`:"")}
  const solved=st.f!=null&&(t==="lente"?C.fix:t==="multi"?C.opts:C.plans)[st.f][1];
  return `<section class="stack dview">${dHead(k,"Desafío · "+esc(C.who))}<div class="row" style="gap:8px;align-items:center">${dIco(t,2)}<span class="muted">${esc(DTOOLS[t][0])}</span></div><p style="margin:0">${esc(C.intro)}</p><div class="card stack">${b}</div>${solved?`<button class="btn" data-d="dcdone|${k}">Entregar la ayuda (+20 XP)</button>`:""}<button class="btn ghost" data-go="dtools" style="width:max-content">Volver</button></section>`}
function vDPages(){const W=dWeeks();return `<section class="stack dview"><p class="eyebrow">Cuaderno de viaje</p><h1 style="margin:0">${W.n} ${W.n===1?"semana activa":"semanas activas"}</h1><p class="muted" style="margin:4px 0 0">Una semana activa es una semana con al menos 2 días de práctica. Fallar días no rompe nada, y «Hoy no» no cuenta como práctica.</p>
  ${DPAGES.map(([n,t,x])=>W.n>=n?`<div class="card dpage"><p class="eyebrow" style="margin:0">${esc(t)}</p><p style="margin:0">${esc(x)}</p></div>`:`<div class="card dpage off"><p class="eyebrow" style="margin:0">🔒 Página de la semana ${n}</p><p class="muted" style="margin:0">Se abre con ${n} semanas activas.</p></div>`).join("")}
  ${DREG.filter(k=>dG().chal[k]).map(k=>`<div class="card dpage"><p class="eyebrow" style="margin:0">${esc(DB[k].chal.who)}</p><p style="margin:0">${esc(DB[k].chal.page)}</p></div>`).join("")}
  <button class="btn ghost" data-go="mas" style="width:max-content">Volver</button></section>`}

/* ---------- región y Hoy ---------- */
function dRegPanel(k){const A=gArea(k),g=dG(),cs=dCs(k);
  const ideas=`<details class="card fold rgf" id="dideas" ${S.dIdeasOpen?"open":""} ontoggle="S.dIdeasOpen=this.open"><summary><span class="fi">💡</span>Tus ideas clave <span class="muted" style="font-weight:600">· ${cs.filter(c=>["c","k"].includes(dSt(c.id))).length} de ${cs.length} comprendidas</span></summary><div class="stack" style="gap:6px;margin-top:10px">${cs.map(c=>`<div class="dcrow"><span><b>${esc(c.n)}</b><br><small class="muted">${c.lec.map(l=>CI[l]?esc(CI[l].t):"").join(" · ")}</small></span><span class="dst ${dSt(c.id)||(dVisto(c)?"v":"")}">${dStName(c.id)}</span></div>`).join("")}<p class="muted" style="font-size:.8rem;margin:0">Trabajada: has hecho su lectura. Con apoyo: la acertaste tras ver la explicación. Comprendida: la resolviste sin ayuda en un caso nuevo. Consolidada: la recordaste y aplicaste pasado un tiempo.</p></div></details>`;
  const hist=A.hist!=="ninguno"?`<div class="card dhistc">${trSVG(GICO[k],A.hist,1.6)}<span><b>Trofeo histórico: ${A.hist}</b><br><small class="muted">Conseguido con las reglas anteriores. Se conserva y cuenta para tu personaje. ${A.hist==="oro"&&A.metal!=="oro"?"Si quieres, puedes conseguir también el sello de las reglas nuevas.":""}</small></span></div>`:"";
  const M=dMis(k),ms=M?`<button class="card dmini" data-d="dmis|${k}">${dIco(dMisDef(k,M.id).tool,1.8)}<span><b>Tu misión: ${esc(dMisDef(k,M.id).n)}</b><br><small class="muted">${A.T.p?"Plata conseguida"+(M.eco?" · eco hecho":" · falta el eco para el oro"):`${M.apps.length} de ${dMisDef(k,M.id).N} aplicaciones`}</small></span><span>→</span></button>`:"";
  const ch=A.T.p&&!g.chal[k]&&g.tools[DB[k].chal.tool]?`<button class="card dmini" data-d="dchal|${k}">🗝️<span><b>Desafío opcional</b><br><small class="muted">${esc(DB[k].chal.who)} necesita tu ${esc(DTOOLS[DB[k].chal.tool][0])}</small></span><span>→</span></button>`:"";
  return hist+ms+ideas+ch}
function dLectWhy(k){const T=dG().trD[k]||{};return T.b?"Ya tienes el bronce. Las lecturas de ampliación no son obligatorias: suman XP y te ayudan a entender mejor los casos del Repaso y del encuentro.":`Para abrir la Prueba del guardián, trabaja las lecturas de las <b>ideas clave</b> (⭐): léelas y haz su comprobación. Aunque falles la comprobación, ya cuenta como trabajada. El resto son ampliación.`}
function dStepTxt(k,A){const T=A.T;if(!T.b)return dGuardOpen(k)?"Hacia el bronce: la Prueba del guardián te espera":"Hacia el bronce: lecturas de las ideas clave";if(!T.p)return "Hacia la plata: tu misión de aplicación";const O=dOroState(k);if(dRepDue(k).length)return "Repaso del guardián: tienes ideas para confirmar";if(O.ok)return "Hacia el oro: el encuentro te espera";if(O.why==="wait")return `Hacia el oro: el encuentro se abre el ${fmtD(O.when)}`;return "Hacia el oro: repaso, encuentro y eco"}
function dHoyCard(){if(!DREG.length||!S.tests.length)return "";const g=dG(),L=[];
  DREG.forEach(k=>{if(!mwSeen().has(k))return;const T=g.trD[k]||{},M=dMis(k),nm=esc(GREG[k]);
    if(dRepDue(k).length)L.push([`🔁 Repaso del guardián · ${nm}`,`${dRepDue(k).length===1?"Una idea":dRepDue(k).length+" ideas"} para confirmar sin ayuda · 2 min`,`data-d="drep|${k}"`]);
    if(T.b&&!T.p&&M){const D=dMisDef(k,M.id);L.push([`🧭 ${esc(D.n)}`,`${M.apps.length} de ${D.N} aplicaciones · sin fecha límite`,`data-d="dmis|${k}"`])}
    if(dOroState(k).ok)L.push([`⭐ Encuentro del oro · ${nm}`,"Ya puedes ir: preguntas nuevas sobre lo que aprendiste",`data-d="doro|${k}"`]);
    if(T.p&&M&&!M.eco&&today()>T.p&&!T.o)L.push([`🔂 Eco · ${nm}`,"Una aplicación más de tu técnica, cuando quieras",`data-d="deco|${k}"`])});
  if(!L.length)return "";return `<div class="card stack dhoy"><p class="eyebrow" style="margin:0">Tu aventura en el piloto</p>${L.slice(0,3).map(([t,s,a])=>`<button class="dmini" ${a}><span><b>${t}</b><br><small class="muted">${s}</small></span><span>→</span></button>`).join("")}</div>`}

/* ---------- clics ---------- */
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest("[data-d],[data-dga],[data-dra],[data-doa]");if(!b||b.disabled)return;const g=dG();
  if(b.dataset.dga!=null){dgAnswer(+b.dataset.dga);render();return}
  if(b.dataset.dra!=null){drAnswer(+b.dataset.dra);render();return}
  if(b.dataset.doa!=null){doAnswer(+b.dataset.doa);render();return}
  const [a,k,x,y]=b.dataset.d.split("|"),val=id=>{const e2=document.getElementById(id);return e2?e2.value.trim():""};
  if(a==="dguard"){dGuardStart(k);return}
  if(a==="dgnext"){dgNext();render();window.scrollTo({top:0});return}
  if(a==="drep"){dRepStart(k);return}
  if(a==="dhint"){S.dr.hint=true;render();return}
  if(a==="drnext"){S.dr.i++;S.dr.pick=null;S.dr.hint=false;S.dr.t0=Date.now();render();window.scrollTo({top:0});return}
  if(a==="doro"){dOroStart(k);return}
  if(a==="donext"){doNext();render();window.scrollTo({top:0});return}
  if(a==="dmis"||a==="deco"){S.dm={k};go("dmis");return}
  if(a==="dmpick"){g.mis[k]={id:x,start:today(),apps:[]};dSave();render();return}
  if(a==="dmchange"){const M=g.mis[k];if(M&&M.apps.length){g.misH=g.misH||[];g.misH.push(M)}delete g.mis[k];dSave();render();return}
  if(a==="dplan"){const M=dMis(k);M.plan={w:val("dpw"),l:val("dpl"),s:val("dps")};const miss=dPlanCheck(M.plan);if(!miss.length){g.td.plans=g.td.plans||[];g.td.plans.push(Object.assign({d:today()},M.plan));dGrant("plan");toast("✓ Plan completo")}dSave();render();return}
  if(a==="dcm"){const M=dMis(k),dom=dDom(M.apps.slice(0,2)),c=DCM[+x];M.cm=[+x,dom==="ambas"||c[0]===dom?"ok":"bad"];dSave();if(M.cm[1]==="ok")toast("✓ Encaja con tus datos");render();return}
  if(a==="demo"){g.td.arrE=g.td.arrE||{};g.td.arrE[k]=x;const t=document.getElementById("dat");if(t){g.td.arrT=g.td.arrT||{};g.td.arrT[k]=t.value}dSave();render();return}
  if(a==="dtm"){g.td.tm=g.td.tm||{};const t=document.getElementById("dat")||document.getElementById("dft");if(t){const kk=k.startsWith("fol")?"folT":"arrT";g.td[kk]=g.td[kk]||{};g.td[kk][k]=t.value}g.td.tm[k]={t0:Date.now()};dSave();render();return}
  if(a==="dtmx"){if(g.td.tm)delete g.td.tm[k];dSave();render();return}
  if(a==="dsave"){const M=dMis(k),D=dMisDef(k,M.id),eco=x==="eco";let v=null;
    if(M.id==="fugas"){v={f:Math.max(0,Math.min(60,+val("dff")||0)),i:Math.max(0,Math.min(60,+val("dfi")||0))}}
    if(M.id==="arranque"){const key="arr-"+k+(eco?"e":M.apps.length);const task=val("dat")||((g.td.arrT||{})[key]||"");if(task.length<3){toast("Escribe qué tarea estás aplazando");return}if(!dTmDone(key,10)){toast("Primero, los 10 minutos");return}v={task,emo:(g.td.arrE||{})[key]||"",cont:y};delete g.td.tm[key]}
    if(M.id==="multi"){const est=+val("dme"),real=+val("dmr"),m=dMulti(M.apps),task=val("dmt");if(!task||!est||!real){toast("Rellena la tarea y los dos tiempos");return}v={task,est,real};
      if(m){const corr=+val("dmc");if(!corr){toast("Escribe cuánto planificas con tu multiplicador");return}const exp=est*m;v.corr=corr;v.use=Math.abs(corr-exp)<=Math.max(5,exp*.25);if(!v.use){toast(`Con tu multiplicador ×${fmt1(m)}, ${est} min serían unos ${Math.round(exp)}. Corrige tu plan.`);return}}}
    if(M.id==="folio"){const key="fol-"+k+(eco?"e":M.apps.length),t=val("dft")||((g.td.folT||{})[key]||"");if(t.length<2){toast("Escribe el tema");return}if(!dTmDone(key,5)){toast("Primero, los 5 minutos");return}v={t,r:y};delete g.td.tm[key]}
    if(M.id==="calendario"){v={done:1}}
    if(!v)return;
    if(eco){if(M.eco)return;M.eco={d:today(),v};dSave();toast("✓ Eco registrado");render();return}
    if(dAddApp(k,v)){toast("✓ Aplicación registrada (+10 XP)");render()}return}
  if(a==="drp"){const M=dMis(k);M.rp={ds:[0,1,2,3].map(i=>val("drp"+i)).filter(Boolean)};const e2=dSpaced(M.rp.ds,null);if(!e2)toast("✓ Repasos bien espaciados");dSave();render();return}
  if(a==="dcalx"){const M=dMis(k),ex=val("dcx");if(!ex||ex<addDays(today(),3)){toast("Pon una fecha de control dentro de 3 días o más");return}M.cal={ex,t:val("dct")};dSave();render();return}
  if(a==="dcal"){const M=dMis(k),ex=val("dcx");M.cal={ex,t:val("dct"),ds:[0,1,2,3,4].map(i=>val("dcd"+i)).filter(Boolean)};if(!dSpaced(M.cal.ds,ex))toast("✓ Repasos bien espaciados");dSave();render();return}
  if(a==="dics"){const M=dMis(k),C=M.cal||{},ds=(C.ds||(M.rp&&M.rp.ds)||[]);dICSdl(ds.map(d=>({d,s:"Brújula: repaso sin mirar"+(C.t?" · "+C.t:""),x:"5-10 minutos, en papel y sin mirar. Después compara."})),"brujula-repasos.ics");return}
  if(a==="dtsel"){S.dtt=k||null;render();window.scrollTo({top:0});return}
  if(a==="tlsave"){g.td.lente=g.td.lente||[];g.td.lente.push({d:today(),f:+val("tlf")||0,i:+val("tli")||0});dSave();toast("Sesión guardada");render();return}
  if(a==="tmsave"){const e=+val("tme"),r=+val("tmr");if(!e||!r){toast("Pon los dos tiempos");return}g.td.multi=g.td.multi||[];g.td.multi.push({d:today(),est:e,real:r});dSave();render();return}
  if(a==="tpsave"){const p={w:val("tpw"),l:val("tpl"),s:val("tps"),h:val("tph")},miss=dPlanCheck(p);if(miss.length){toast("Te falta: "+miss.join(", "));return}g.td.plans=g.td.plans||[];g.td.plans.push(Object.assign({d:today()},p));dSave();toast("✓ Plan guardado");render();return}
  if(a==="tpics"){const p=(g.td.plans||[])[+k];if(p&&p.h)dICSdl([{d:addDays(today(),1),h:p.h,rr:"FREQ=DAILY;COUNT=14",s:"Brújula: si "+p.w+", entonces "+p.s,x:"En "+p.l}],"brujula-plan.ics");return}
  if(a==="tcprop"){const ex=val("tcx");if(!ex||ex<=today()){toast("Pon la fecha del control");return}g.td.cal={ex,t:val("tct"),ds:dPropose(ex)};dSave();render();return}
  if(a==="tcics"){const c=g.td.cal;if(c&&c.ds)dICSdl(c.ds.map(d=>({d,s:"Brújula: repaso sin mirar"+(c.t?" · "+c.t:""),x:"5-10 minutos, en papel y sin mirar."})),"brujula-repasos.ics");return}
  if(a==="dchal"){S.dc={k,a:{},f:null};go("dchal");return}
  if(a==="dcl"){S.dc.a[k]=x;render();return}
  if(a==="dcf"){S.dc.f=+k;render();return}
  if(a==="dcdone"){g.chal[k]=today();S.dc.end=true;dSave();toast("+20 XP · Página de historia nueva");render();return}
});
/* la sala de foco cuenta para la misión «Sesión de foco» */
function dFocoHook(F){const k="ATE",M=dMis(k);if(!dOn(k)||!M||M.id!=="foco")return;const T=dG().trD[k]||{};const steps=(F.steps||[]).filter(Boolean).length,min=F.real&&F.real<F.dur?F.real:F.dur,v={res:F.res,steps,min,ok:F.ok,f:F.f,d:F.d};
  if(!F.t0){return}if(steps<2){setTimeout(()=>toast("Para tu misión, la sesión necesita al menos 2 pasos. Esta se ha guardado en tu diario."),2600);return}
  if(T.p&&!M.eco&&today()>T.p){M.eco={d:today(),v};dSave();return}if(!T.p)dAddApp(k,v)}
/*D-END*/

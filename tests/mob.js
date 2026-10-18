const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const p=await b.newPage({viewport:{width:360,height:740},hasTouch:true,isMobile:true});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_/.test(m.text()))errs.push('console:'+m.text())});
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);
await p.evaluate(()=>{localStorage.setItem('brujula:name',JSON.stringify('Laura'))});await p.reload();
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:today(),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();S.tourDone=true;store.set("tourDone",true);store.set('game',S.g);save();render()});
const ov=async(n)=>{await p.waitForTimeout(350);const r=await p.evaluate(()=>{const W=document.documentElement.clientWidth;const bad=[];document.querySelectorAll('body *').forEach(e=>{const r=e.getBoundingClientRect();if(r.width&&r.right>W+2&&getComputedStyle(e).position!=='fixed'&&!e.closest('.mwwrap,.mwbox,dialog:not([open])'))bad.push((e.className||e.tagName)+':'+Math.round(r.right))});return {sw:document.documentElement.scrollWidth,W,bad:[...new Set(bad)].slice(0,4)}});console.log(n,JSON.stringify(r))};
for(const v of ["hoy","mundo","explorar","mas","coleccion","personaje","proposito","santuario","ayuda","dudas"]){await p.evaluate(v=>go(v),v);await ov(v)}
const R=await p.evaluate(()=>[...mwSeen()]);
for(const k of R){await p.evaluate(k=>{S.g.lore=S.g.lore||{};S.g.lore[k]=today();S.reg=k;go("region")},k);await ov("region-"+k)}
await p.evaluate(()=>{S.view="region";openConcept("SUE-01")});await ov("concepto-SUE-01");
await p.evaluate(()=>{document.getElementById('dlg').close();S.view="explorar";openConcept("CIV-03")});await ov("concepto-CIV-03 (corta)");await p.screenshot({path:'mob_civ.png'});
await p.evaluate(()=>{document.getElementById('dlg').close();startReto("HAB-03");go("hoy")});await ov("hoy-con-reto");await p.screenshot({path:'mob_hoy.png',fullPage:true});
console.log("errores:",errs.slice(0,6));await b.close()})();

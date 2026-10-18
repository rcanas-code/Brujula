const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const ctx=await b.newContext();const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));

await p.addInitScript(()=>{window.__noGuia=1});
await p.goto(ANTES);await p.waitForTimeout(500);
// alumno con progreso en la versión anterior
await p.evaluate(()=>{localStorage.clear();QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-12),scores:scores()}];S.route=buildRoute(scores());S.name="Laura";S.tourDone=true;store.set('tourDone',true);
 S.g.carta=today();S.g.ok={"EDU-01":"2026-10-10","CIU-01":"2026-10-11","SUE-01":"2026-10-09"};S.g.dom={"EDU-01":"2026-10-12"};S.g.tr={EDU:{b:"2026-10-12"},SUE:{b:"2026-10-09",p:"2026-10-15"}};S.g.lore={EDU:"2026-10-01",CIU:"2026-10-01",SUE:"2026-10-01",STO:"2026-10-01"};
 S.g.lqf={"STO-01":"2026-10-16"};S.g.scp={"SUE-02":3};store.set('game',S.g);save();store.set('diario',[{d:today(),id:'SUE-01',v:'nota'}]);store.set('perg',[{t:'x'}])});
const snap=async()=>p.evaluate(()=>{const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k.startsWith('brujula:')&&!k.startsWith('brujula:ui:'))o[k]=localStorage.getItem(k)}return o});
const before=await snap();
await p.goto(APP);await p.waitForTimeout(800);
const r=await p.evaluate(()=>{const out=[];['EDU','CIU','STO','SUE','CIV','CRI','ANI','ALI','MOV'].forEach(k=>{try{S.reg=k;go('region')}catch(e){out.push(k+' ERR '+e.message)}});
 try{S.exArea=AK.EDU;go('explorar',true);openConcept('EDU-01');document.getElementById('dlg').close();openConcept('STO-01');document.getElementById('dlg').close()}catch(e){out.push('concept ERR '+e.message)}
 const G=S.g;return {out,ok:Object.keys(G.ok).sort(),dom:Object.keys(G.dom),tr:JSON.stringify({EDU:G.tr.EDU,SUE:G.tr.SUE}),lqf:G.lqf,scp:G.scp,
  eduLong:deepHtml('EDU-01').includes('scinvite')?'escena':'versión larga',stoNew:deepHtml('STO-03').includes('scinvite')?'invita a escena':'larga'}});
const after=await snap();
const lost=Object.keys(before).filter(k=>!(k in after));
const g0=JSON.parse(before['brujula:game']),g1=JSON.parse(after['brujula:game']);
const chg=['ok','dom','lqf','scp','lore'].filter(k=>JSON.stringify(g0[k])!==JSON.stringify(g1[k]));
console.log(JSON.stringify(r,null,0));console.log('claves perdidas:',lost,'campos de juego cambiados:',chg,'diario igual:',before['brujula:diario']===after['brujula:diario'],'perg igual:',before['brujula:perg']===after['brujula:perg']);
console.log('errores',errs);await b.close()})();

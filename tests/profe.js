// SEC-01: el panel de profesor ya no trae ningún correo por defecto y sigue creando la clave igual.
const {APP}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});
const p=await b.newPage({viewport:{width:390,height:844}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
const R=[];const ok=(n,c,i)=>R.push([c?'OK ':'FALLO',n,i===undefined?'':JSON.stringify(i)]);
await p.addInitScript(()=>{window.__noGuia=1});
await p.goto(APP);await p.waitForTimeout(500);
await p.evaluate(()=>{localStorage.clear();go('profe')});await p.waitForTimeout(300);
const f=await p.evaluate(()=>{const e=document.getElementById('pfmail');return e?{v:e.value,ph:e.placeholder}:null});
ok('1. el campo de correo existe',!!f,f);
ok('2. no trae ningún correo por defecto',f&&f.v==='',f);
ok('3. el código no contiene el correo institucional',await p.evaluate(()=>!document.documentElement.outerHTML.includes('lluisacura')));
await p.click('[data-act="pf-new"]');await p.waitForTimeout(400);
ok('4. sin correo, pide escribirlo y no crea clave',await p.evaluate(()=>!(store.get('pf',null)||{}).priv&&/correo/i.test(document.body.innerText)));
await p.fill('#pfmail','profe.prueba@ejemplo.cat');await p.click('[data-act="pf-new"]');await p.waitForTimeout(1200);
const P=await p.evaluate(()=>{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);const v=localStorage.getItem(k);if(v&&v.includes('profe.prueba@ejemplo.cat'))return {k,priv:v.includes('"priv"')}}return null});
ok('5. con correo, crea la clave como antes (solo en este navegador)',!!P&&P.priv,P);
ok('6. sin errores de página',errs.length===0,errs);
console.log(R.map(r=>r.join(' | ')).join('\n'));console.log('TOTAL',R.filter(r=>r[0]==='OK ').length,'/',R.length);await b.close()})();

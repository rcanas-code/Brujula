// Ejecutable sin navegador: ejercita el código real de almacenamiento y reloj.
const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
function storage(){const m=new Map();return {getItem:k=>m.get(k)??null,setItem:(k,v)=>m.set(k,String(v)),removeItem:k=>m.delete(k),snapshot:()=>JSON.stringify([...m])}}
const local=storage(),session=storage();
function page(demo){
 const c={URLSearchParams,location:{search:demo?'?demo=1':''},localStorage:local,sessionStorage:session,Date,console,
 btoa:s=>Buffer.from(s,'binary').toString('base64'),atob:s=>Buffer.from(s,'base64').toString('binary'),escape,unescape,encodeURIComponent,decodeURIComponent};c.window=c;vm.createContext(c);
 const boot=html.slice(html.indexOf('/* DEMO-01:'),html.indexOf('})();',html.indexOf('/* DEMO-01:'))+5);
 const line=prefix=>html.split('\n').find(l=>l.startsWith(prefix));
 vm.runInContext([boot,line('const store='),line('const KEYS='),line('function backupCode()'),line('function restoreCode('),line('const uiGet=')].join('\n'),c);
 return code=>vm.runInContext(code,c);
}
const real=page(false);real('store.set("name","Real");store.set("game",{xp:500,tr:{EDU:{o:"2026-01-01"}}});uiSet("tema","dark")');
const original=local.snapshot(),realBackup=real('backupCode()');
const demo=page(true);assert.equal(demo('store.get("name",null)'),null);assert.equal(demo('uiGet("tema",null)'),null);
demo('store.set("name","Demo");store.set("game",{xp:1});uiSet("tema","light")');
assert.equal(local.snapshot(),original);
const demoBackup=demo('backupCode()');
assert.equal(real(`restoreCode(${JSON.stringify(demoBackup)})`),false);
assert.equal(demo(`restoreCode(${JSON.stringify(realBackup)})`),false);
assert.equal(local.snapshot(),original);
const start=demo('Date.now()');demo('demoClock.advance(864000000)');assert.ok(demo('Date.now()')-start>=864000000);
assert.ok(Math.abs(real('Date.now()')-Date.now())<1000);
assert.equal(demo('new Date("2026-01-01").getFullYear()'),2026);
const reload=page(true);assert.equal(reload('demoClock.offset'),864000000);assert.equal(reload('store.get("name",null)'),'Demo');
assert.equal(reload(`restoreCode(${JSON.stringify(demoBackup)})`),true);
assert.equal(real(`restoreCode(${JSON.stringify(realBackup)})`),true);
assert.equal(local.snapshot(),original);
console.log('OK: almacenamiento y preferencias aislados; copias incompatibles entre modos; reloj local, fechas explícitas y recarga; partida real intacta.');

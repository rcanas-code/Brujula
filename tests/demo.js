// Aislamiento, reloj, copias y controles de DEMO-01. Solo datos sintéticos.
const assert=require('node:assert/strict');
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
(async()=>{
 const root=path.resolve(__dirname,'..');
 const server=http.createServer((req,res)=>{
  const file=path.resolve(root,'.'+new URL(req.url,'http://localhost').pathname);
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}
  fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end();return}res.end(data)});
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 let browser;
 try{
  browser=await chromium.launch({executablePath:process.argv[2]||undefined});
  const ctx=await browser.newContext({viewport:{width:360,height:800}});
  const real=await ctx.newPage(),demo=await ctx.newPage();
  const errors=[];demo.on('pageerror',e=>errors.push(e.message));
  const url=`http://127.0.0.1:${server.address().port}/index.html`;
  await real.goto(url);
  await real.evaluate(()=>{store.set('name','Partida real de prueba');store.set('diario',[{d:'2026-01-01',v:'No modificar'}]);uiSet('tema','real');localStorage.setItem('otra-app','conservar')});
  const snapshot=await real.evaluate(()=>JSON.stringify({...localStorage}));
  const realCode=await real.evaluate(()=>backupCode());
  await demo.goto(url+'?demo=1');
  assert.equal(await demo.evaluate(()=>store.get('name',null)),null,'La demo no lee la partida real');
  assert.equal(await demo.evaluate(()=>restoreCode('invalid')),false);
  assert.equal(await demo.evaluate(c=>restoreCode(c),realCode),false,'No importa partidas reales');
  await demo.click('#demo-ready');
  assert.equal(await demo.evaluate(()=>dGuardOpen('EDU')),true);
  assert.equal(await demo.evaluate(()=>!!dG().trD.EDU?.b),false,'Preparar no regala bronce');
  const t=await demo.evaluate(()=>Date.now());
  await demo.click('[data-demo-time="864000000"]');
  assert.ok((await demo.evaluate(()=>Date.now()))-t>=864000000);
  assert.ok(Math.abs((await real.evaluate(()=>Date.now()))-Date.now())<5000,'El reloj real no cambia');
  await demo.reload();
  assert.equal(await demo.evaluate(()=>demoClock.offset),864000000,'El reloj sobrevive recarga');
  assert.equal(await demo.evaluate(()=>dGuardOpen('EDU')),true,'La demo sobrevive recarga');
  for(const region of ['ATE','HAB']){
   await demo.selectOption('#demo-region',region);await demo.click('#demo-ready');
   assert.equal(await demo.evaluate(k=>dGuardOpen(k),region),true);
  }
  for(const theme of ['light','dark']){
   await demo.evaluate(t=>document.documentElement.dataset.theme=t,theme);
   assert.equal(await demo.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'Sin desborde a 360 px');
  }
  const code=await demo.evaluate(()=>backupCode());
  assert.equal(await real.evaluate(c=>restoreCode(c),code),false,'La partida real rechaza copias demo');
  assert.equal(await demo.evaluate(async()=>{try{await albDB();return true}catch{return false}}),false,'Álbum bloqueado');
  await demo.evaluate(()=>sessionStorage.setItem('otra-sesion','conservar'));
  demo.once('dialog',d=>d.accept());await demo.click('#demo-reset');await demo.waitForLoadState('load');
  await demo.waitForFunction(()=>demoClock.offset===0);
  assert.equal(await demo.evaluate(()=>store.get('name',null)),null,'Reinicio sin personaje anterior');
  assert.equal(await demo.evaluate(()=>sessionStorage.getItem('otra-sesion')),'conservar');
  assert.equal(await real.evaluate(()=>JSON.stringify({...localStorage})),snapshot,'Todo el almacenamiento real intacto');
  await demo.evaluate(c=>{if(!restoreCode(c))throw Error('Copia demo rechazada')},code);await demo.reload();
  assert.equal(await demo.evaluate(()=>store.get('name',null)),'Explorador de prueba');
  await demo.click('#demo-exit');
  assert.equal(await demo.locator('#demo-panel').count(),0);
  assert.equal(await demo.evaluate(()=>store.get('name',null)),'Partida real de prueba');
  assert.equal(await demo.evaluate(c=>restoreCode(c),realCode),true,'Copias reales siguen siendo compatibles');
  assert.deepEqual(errors,[]);
  console.log('OK aislamiento, reloj, preparación de tres regiones, recarga, reinicio, copias, salida y 360 px');
 }finally{if(browser)await browser.close();server.close()}
})().catch(e=>{console.error(e);process.exitCode=1});

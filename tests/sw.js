// Prueba del service worker experimental (DOC-09). Simula GitHub Pages en localhost:
//   /Brujula/            → index.html de esta rama (con sw.js)
//   /Brujula/candidata/  → una copia distinta (APP_V 11111111111111) para comprobar que no se mezclan
// Uso: node tests/sw.js [chromium]
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const REPO = path.resolve(__dirname, '..');
const RAIZ = fs.mkdtempSync(path.join(os.tmpdir(), 'brujula-sw-'));
const B = path.join(RAIZ, 'Brujula');
fs.mkdirSync(path.join(B, 'candidata'), { recursive: true });
fs.mkdirSync(path.join(B, 'fonts'));
for (const f of ['index.html', 'sw.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'favicon-32.png'])
  fs.copyFileSync(path.join(REPO, f), path.join(B, f));
for (const f of fs.readdirSync(path.join(REPO, 'fonts'))) fs.copyFileSync(path.join(REPO, 'fonts', f), path.join(B, 'fonts', f));
const idx = fs.readFileSync(path.join(B, 'index.html'), 'utf8');
const V0 = idx.match(/const APP_V="(\d+)"/)[1];
fs.writeFileSync(path.join(B, 'candidata', 'index.html'), idx.replace(`const APP_V="${V0}"`, 'const APP_V="11111111111111"'));
const tipos = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.woff2': 'font/woff2' };
let peticiones = [];
const srv = http.createServer((q, r) => {
  let u = decodeURIComponent(q.url.split('?')[0]); peticiones.push(q.url);
  if (u.endsWith('/')) u += 'index.html';
  const f = path.join(RAIZ, u);
  if (!f.startsWith(RAIZ) || !fs.existsSync(f)) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': tipos[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'max-age=600' });
  fs.createReadStream(f).pipe(r);
});
const R = []; const ok = (n, c, i) => R.push([c ? 'OK ' : 'FALLO', n, i === undefined ? '' : JSON.stringify(i)]);
srv.listen(0, async () => {
  const URLB = `http://localhost:${srv.address().port}/Brujula/`;
  const b = await chromium.launch(process.argv[2] ? { executablePath: process.argv[2] } : {});
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  const snap = () => p.evaluate(() => { const o = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('brujula:') && !k.startsWith('brujula:ui:')) o[k] = localStorage.getItem(k); } return o; });
  const vista = () => p.evaluate(() => ({ v: typeof APP_V !== 'undefined' ? APP_V : null, app: (document.getElementById('app') || {}).innerHTML?.length || 0 }));
  try {
    await p.addInitScript(() => { window.__noGuia = 1; });
    await p.goto(URLB); await p.evaluate(() => navigator.serviceWorker.ready); await p.waitForTimeout(800);
    await p.reload(); await p.waitForTimeout(800);
    ok('1. el service worker controla la página', await p.evaluate(() => !!navigator.serviceWorker.controller));
    await p.evaluate(() => { S.name = 'Prueba'; S.g = S.g || {}; S.g.xp = 345; store.set('game', S.g); save(); store.set('diario', [{ d: today(), id: 'EDU-01', v: 'nota de prueba' }]); });
    const antes = await snap();
    // Sin conexión
    await ctx.setOffline(true); await p.reload(); await p.waitForTimeout(1000);
    let v = await vista(); ok('2. sin conexión la app abre', v.v === V0 && v.app > 500, v);
    ok('3. sin conexión la partida está intacta', JSON.stringify(await snap()) === JSON.stringify(antes));
    ok('4. sin conexión la comprobación de versión falla sin romper nada', await p.evaluate(() => fetch(location.pathname + '?nc=1').then(() => 'respondió', () => 'falla')) === 'falla');
    // Versión nueva publicada
    const V1 = '20991231000000';
    fs.writeFileSync(path.join(B, 'index.html'), idx.replace(`const APP_V="${V0}"`, `const APP_V="${V1}"`));
    await ctx.setOffline(false); await p.reload(); await p.waitForTimeout(1000);
    v = await vista(); ok('5. con conexión se carga la versión nueva en la primera recarga', v.v === V1, v);
    ok('6. tras actualizar, la partida está intacta', JSON.stringify(await snap()) === JSON.stringify(antes));
    ok('7. la comprobación de versión va siempre a la red', (await p.evaluate(() => fetch(location.pathname + '?nc=' + Date.now(), { cache: 'no-store' }).then((r) => r.text()))).includes(V1));
    await ctx.setOffline(true); await p.reload(); await p.waitForTimeout(1000);
    v = await vista(); ok('8. sin conexión se usa la versión nueva guardada', v.v === V1, v);
    await ctx.setOffline(false);
    // Candidata en la misma web
    await p.goto(URLB + 'candidata/'); await p.waitForTimeout(1000);
    v = await vista(); ok('9. la candidata no recibe la versión de los alumnos', v.v === '11111111111111', v);
    const claves = await p.evaluate(async () => { const out = []; for (const k of await caches.keys()) { const c = await caches.open(k); for (const r of await c.keys()) out.push(k + ' ' + new URL(r.url).pathname); } return out; });
    ok('10. la caché no contiene nada de /candidata/', !claves.some((x) => x.includes('/candidata/')), claves.length + ' entradas');
    // Servidor caído con conexión (GitHub Pages sin servicio)
    await p.goto(URLB); await p.waitForTimeout(500);
    srv.close();
    await p.reload(); await p.waitForTimeout(1500);
    v = await vista(); ok('11. si el servidor no responde, abre la copia guardada', v.v === V1 && v.app > 500, v);
    ok('12. sin errores de página', errs.length === 0, errs.slice(0, 3));
  } catch (e) { ok('excepción', false, e.message); }
  console.log(R.map((r) => r.join(' | ')).join('\n'));
  console.log('TOTAL', R.filter((r) => r[0] === 'OK ').length, '/', R.length);
  await b.close(); try { srv.close(); } catch (e) {} fs.rmSync(RAIZ, { recursive: true, force: true });
});

/* Brújula · service worker EXPERIMENTAL (DOC-09). Rama exp/sin-conexion. No integrar sin autorización.
 *
 * Estrategia:
 *  - Página (index.html y navegaciones): primero la red, con caché de respaldo. Con conexión siempre
 *    se carga la versión publicada; sin conexión, la última que se descargó.
 *  - Comprobación de versión (?nc=…): solo red. Nunca se responde desde caché, para no engañar al aviso de versión nueva.
 *  - Fuentes, iconos y manifest: primero la caché (no cambian); se descargan y guardan la primera vez.
 *  - Nunca toca localStorage ni IndexedDB: las partidas no pasan por aquí.
 *  - Solo controla su propia carpeta. Una copia en /candidata/ tendría su propio alcance y su propia caché.
 */
const CACHE = 'brujula-' + new URL(self.registration.scope).pathname.replace(/\W+/g, '-') + 'v1';
const BASE = new URL(self.registration.scope).pathname;           // p. ej. /Brujula/
const NUCLEO = ['./', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'favicon-32.png'];
const ESPERA_RED = 4000;                                            // ms antes de usar la copia guardada

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(NUCLEO)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const claves = await caches.keys();
    // Solo borra cachés antiguas de ESTE alcance (no las de la candidata ni otras).
    const prefijo = CACHE.replace(/v\d+$/, '');
    await Promise.all(claves.filter((k) => k.startsWith(prefijo) && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

const esPagina = (req, url) =>
  req.mode === 'navigate' || url.pathname === BASE || url.pathname.endsWith('/index.html');

async function primeroRed(req) {
  const c = await caches.open(CACHE);
  try {
    const r = await Promise.race([
      fetch(req, { cache: 'no-store' }),
      new Promise((_, no) => setTimeout(() => no(new Error('lenta')), ESPERA_RED)),
    ]);
    if (r && r.ok) c.put(BASE, r.clone());
    return r;
  } catch (err) {
    const guardada = await c.match(BASE);
    if (guardada) return guardada;
    throw err;
  }
}

async function primeroCache(req) {
  const c = await caches.open(CACHE);
  const g = await c.match(req);
  if (g) return g;
  const r = await fetch(req);
  if (r && r.ok) c.put(req, r.clone());
  return r;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;                       // enlaces externos: sin tocar
  if (!url.pathname.startsWith(BASE)) return;
  // Subcarpetas con su propia app (candidata, prototipos): no son de este service worker.
  const resto = url.pathname.slice(BASE.length);
  if (/^(candidata|proto)\//.test(resto)) return;
  if (url.searchParams.has('nc')) return;                           // comprobación de versión: solo red
  if (esPagina(req, url)) { e.respondWith(primeroRed(req)); return; }
  if (/\.(woff2|png|json|ico)$/.test(url.pathname)) { e.respondWith(primeroCache(req)); return; }
});

// Entorno común de las pruebas de Brújula.
// - Resuelve las rutas respecto al repositorio (no hay rutas absolutas en las pruebas).
// - Permite probar con el modelo D apagado: BRUJULA_DREG=off, o la URL con ?dreg=off.
// - Si no se pasa la ruta de Chromium como primer argumento, usa la de Playwright.
// Se carga con: require('./_entorno') ANTES de usar playwright.
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const REPO = path.resolve(__dirname, '..');
const TMP = path.join(__dirname, '.tmp');
const DIR = pathToFileURL(REPO).href + '/';
const APP = process.env.BRUJULA_URL || DIR + 'index.html';
const OFF = APP + (APP.includes('?') ? '&' : '?') + 'dreg=off';
const ANTES = pathToFileURL(path.join(TMP, 'antes.html')).href;
const FONT = (f) => DIR + 'fonts/' + f;

const pw = require('playwright');
const offAll = process.env.BRUJULA_DREG === 'off';
const INIT = `try{if(${offAll}||location.search.indexOf('dreg=off')>=0)window.__DREG=[]}catch(e){}`;
if (!pw.chromium.__brujula) {
  const launch = pw.chromium.launch.bind(pw.chromium);
  pw.chromium.launch = async (o = {}) => {
    if (!o.executablePath) delete o.executablePath;
    const b = await launch(o);
    const np = b.newPage.bind(b), nc = b.newContext.bind(b);
    b.newContext = async (x) => { const c = await nc(x); await c.addInitScript(INIT); return c; };
    b.newPage = async (x) => { const p = await np(x); await p.addInitScript(INIT); return p; };
    return b;
  };
  pw.chromium.__brujula = true;
}
if (!fs.existsSync(TMP)) fs.mkdirSync(TMP, { recursive: true });

module.exports = { REPO, DIR, APP, OFF, ANTES, FONT, TMP };

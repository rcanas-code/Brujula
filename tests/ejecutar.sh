#!/usr/bin/env bash
# Batería de regresión de Brújula.
# Uso:  tests/ejecutar.sh [etiqueta] [prueba ...]
#   etiqueta  carpeta de resultados en tests/.out/<etiqueta> (por defecto: fecha y hora)
#   prueba    nombres sin .js; si no se indican, se ejecutan todas las de REGRESION y MODELO_D
# Variables:
#   BRUJULA_DREG=off        ejecuta todo con el modelo D apagado (window.__DREG=[])
#   BRUJULA_URL=...         prueba otra URL (por ejemplo, la candidata publicada)
#   BRUJULA_ANTES_REF=ref   versión de git usada como «versión anterior» en migr (por defecto v197-antes-de-lanzamiento)
#   CHROMIUM=/ruta          navegador; si no, se busca el de Playwright
set -u
cd "$(dirname "$0")"
REGRESION="hoyf audf allv p5e2e p36t sct lq su mv al at f1 f3 mw2 zm carta bkrt mob migr fbk auto irest lb p32t corr profe"
MODELO_D="dtest dmig dvis pulpo"
ETQ="${1:-$(date +%Y%m%d-%H%M%S)}"; shift || true
# Con el modelo D apagado no tienen sentido dtest y dvis; dmig ya prueba por sí misma el apagado y el encendido.
if [ "${BRUJULA_DREG:-}" = off ]; then LISTA="${*:-$REGRESION}"; else LISTA="${*:-$REGRESION $MODELO_D}"; fi

if [ -z "${CHROMIUM:-}" ]; then
  CHROMIUM=$(ls -d /opt/pw-browsers/chromium_headless_shell-*/*/headless_shell 2>/dev/null | head -1)
fi
export NODE_PATH="${NODE_PATH:-}:$(npm root -g 2>/dev/null):$(pwd)/node_modules"

mkdir -p .tmp ".out/$ETQ"
REF="${BRUJULA_ANTES_REF:-v197-antes-de-lanzamiento}"
if ! git show "$REF:index.html" > .tmp/antes.html 2>/dev/null; then
  echo "AVISO: no existe $REF; migr se saltará" >&2; rm -f .tmp/antes.html
fi

fallos=0
for t in $LISTA; do
  if [ "$t" = migr ] && [ ! -f .tmp/antes.html ]; then echo "$t SALTADA"; continue; fi
  ( cd ".out/$ETQ" && timeout 300 node "../../$t.js" ${CHROMIUM:+"$CHROMIUM"} ) > ".out/$ETQ/$t.txt" 2>&1
  rc=$?
  # Señales de fallo: código de salida, errores de página no vacíos, líneas FALLO/✗ o TOTAL incompleto
  marca=""
  [ $rc -ne 0 ] && marca="salida=$rc"
  grep -E "errores:? \[" ".out/$ETQ/$t.txt" | grep -qvE "errores:? \[ ?\]" && marca="$marca errores-de-página"
  grep -qE "^(FALLO|FAIL|✗)" ".out/$ETQ/$t.txt" && marca="$marca fallos"
  tot=$(grep -oE "^TOTAL [0-9]+ / [0-9]+" ".out/$ETQ/$t.txt" | tail -1)
  if [ -n "$tot" ]; then set -- $tot; [ "$2" != "$4" ] && marca="$marca $2/$4"; fi
  if [ -n "$marca" ]; then echo "$t REVISAR ($marca)"; fallos=$((fallos+1)); else echo "$t ok ${tot:-}"; fi
done
echo "Resultados en tests/.out/$ETQ · pruebas a revisar: $fallos"
echo "Para comparar dos ejecuciones: tools/comparar.sh tests/.out/A tests/.out/B"
exit $fallos

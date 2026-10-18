#!/usr/bin/env bash
# Compara dos ejecuciones de tests/ejecutar.sh prueba a prueba.
# Uso: tools/comparar.sh tests/.out/base tests/.out/nueva
# Las diferencias esperables (contenido aleatorio, fechas) hay que revisarlas a mano.
A="$1"; B="$2"
for f in "$A"/*.txt; do
  n=$(basename "$f")
  if [ ! -f "$B/$n" ]; then echo "== $n: falta en $B"; continue; fi
  if cmp -s "$f" "$B/$n"; then echo "== $n: igual"; else echo "== $n: DISTINTO"; diff "$f" "$B/$n" | head -20; fi
done

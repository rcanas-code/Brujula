# Pruebas automatizadas

Pruebas de navegador (Playwright + Chromium) que antes vivían en un espacio temporal fuera del repositorio (DOC-03). Ahora usan rutas relativas al repositorio y no contienen datos personales: los nombres que aparecen («Laura», «Laia», «Marc»…) son ficticios.

## Requisitos

- Node 18 o posterior (probado con 22).
- Playwright 1.56: `cd tests && npm install` (o una instalación global, que se detecta con `npm root -g`).
- Un Chromium: el de Playwright (`npx playwright install chromium`) o el que se indique en `CHROMIUM=/ruta`.
- `git`, para la prueba de migración (`migr`), que extrae una versión anterior del historial.

## Ejecutar

```bash
tests/ejecutar.sh base                 # todo, con el modelo D tal como está en index.html
BRUJULA_DREG=off tests/ejecutar.sh off # todo con el modelo D apagado (comportamiento anterior)
tests/ejecutar.sh rapido dtest dmig    # solo algunas
tools/comparar.sh tests/.out/base tests/.out/otra
```

Los resultados y las capturas quedan en `tests/.out/<etiqueta>/` (no se suben). Una prueba se marca **REVISAR** si termina con error, si hay errores de página, líneas `FALLO` o un `TOTAL` incompleto. El resto de pruebas no se autoevalúan: imprimen medidas y estados que se comparan con una ejecución anterior. Diferencias normales: contenido aleatorio (consejos, retos sorpresa, `lb`, `mv`), milisegundos (`su`) y alturas que dependen del texto elegido (`allv`). `lq` y `migr` dependen de tiempos y a veces fallan; se repiten antes de dar un fallo por bueno. Con `BRUJULA_DREG=off` no se ejecutan `dtest`, `dmig` ni `dvis` (`dmig` ya prueba el apagado por sí misma).

## Qué cubre cada una

| Prueba | Qué comprueba |
|---|---|
| `hoyf` | Pantalla Hoy: misión, formulario, guardado, XP sin duplicar, día olvidado, recarga |
| `audf` | Auditoría de pantallas: desbordes y elementos fuera de sitio |
| `allv` | Todas las vistas se abren sin errores; altura de cada una |
| `p5e2e` | Recorrido completo de un alumno por una región con trofeos |
| `p36t`, `p32t`, `sct` | Tipografía pixel, tamaños mínimos y contraste en pantallas clave |
| `lq` | Lecturas: preguntas, espera y práctica |
| `su` | Prueba de reflejos de Sueño |
| `mv` | Retos sorpresa de Movimiento |
| `al`, `at` | Regiones Alimentación y Atención |
| `f1`, `f3` | Flujos de la primera sesión |
| `mw2` | Mundo: regiones vistas, ganadas y desbloqueos |
| `zm` | Zoom y tamaño de letra |
| `carta` | Carta de descubrimiento |
| `bkrt` | Copia de seguridad: exportar, importar, código antiguo |
| `mob` | Diseño a 360 px |
| `migr` | Partida de una versión anterior → versión actual sin pérdidas |
| `fbk` | Enlaces de sugerencias y errores (mailto) |
| `auto` | Trofeos, duelo, entrenamiento y progreso antiguo |
| `irest` | Restaurar desde el inicio |
| `lb` | La Aguja recomienda una lectura |
| `corr` | Corregir respuestas sin duplicar XP |
| `dtest` | Modelo D: 50 comprobaciones (guardián, repaso, misiones, oro, herramientas, semanas activas, etapas) con reloj simulado |
| `dmig` | Modelo D: 16 comprobaciones de migración, interruptor apagado/encendido y conservación de datos |
| `dvis` | Modelo D: 22 pantallas a 360 px en claro y oscuro sin desbordes |

`_entorno.js` resuelve las rutas, aplica `BRUJULA_DREG=off` y permite probar otra URL con `BRUJULA_URL`.

## Último resultado

18/10/2026, rama `tools/pruebas` (index.html = `desarrollo` 7b412b1):
- Modelo D encendido: 28/28 sin marcas de revisión; `dtest` 50/50, `dmig` 16/16, `dvis` sin desbordes. Frente a la última ejecución fuera del repositorio, solo cambian resultados aleatorios o de milisegundos (`allv`, `lb`, `lq`, `mv`, `su`).
- Modelo D apagado (`BRUJULA_DREG=off`): 25/25 de regresión; `lq` y `migr` fallaron la primera vez por tiempos y pasaron al repetirlas.

## Scripts exploratorios

Durante el desarrollo se escribieron unos 200 scripts más (capturas, comparativas, depuración) y los parches `p*.py` que construyeron cada versión. No se suben al repositorio público: contienen rutas del espacio temporal y, en algunos casos, nombres reales en datos de prueba. Están archivados en la copia externa (ver [docs/copias-de-seguridad.md](../docs/copias-de-seguridad.md)).

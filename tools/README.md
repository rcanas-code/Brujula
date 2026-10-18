# Herramientas

| Herramienta | Uso |
|---|---|
| `compilar.py` | Actualiza `APP_V` de `index.html` o `candidata/index.html`. `--comprobar` solo informa. Hace copia `.bak` |
| `comparar.sh` | Compara dos carpetas de resultados de `tests/ejecutar.sh` |
| `modelo-d/` | Fuentes legibles del modelo D (ver abajo) |

## Cambio respecto a la cadena antigua

Antes, `index.html` se generaba uniendo `hdr.txt` + `brujula.html` + `</body></html>` en un espacio temporal. Se ha comprobado que el resultado es idéntico byte a byte a `index.html` de `desarrollo` (7b412b1), así que **`index.html` es la única fuente del código** y ya no hace falta esa cadena. Los cambios se hacen con reemplazos exactos sobre `index.html` (ver [CLAUDE.md](../CLAUDE.md)).

## `modelo-d/`

| Archivo | Qué es |
|---|---|
| `bank_ate.py`, `bank_edu.py`, `bank_hab.py` | Banco de preguntas del piloto, en origen |
| `fix1.py`, `fix2.py` | Reescritura de opciones para que la correcta no se delate por su longitud |
| `build_bank.py` | Genera `dbank.json` (106 preguntas). Comprobado: el resultado es idéntico al banco incrustado en `index.html` |
| `qc.py` | Control de calidad del banco: IDs y enunciados únicos, feedback en todas las opciones, longitudes, absolutos en distractores |
| `dmodel.js`, `d.css` | Motor y estilos del modelo D **en su primera versión**. Después se corrigieron dentro de `index.html`; la versión vigente es la que está entre `/*D-BEGIN` y `/*D-END*/` |
| `historico/hooks.py`, `historico/content.py` | Parches de una sola vez que integraron el modelo D y las correcciones de contenido. **Ya aplicados: no volver a ejecutar** (fallan a propósito si el modelo D ya está) |

Para cambiar preguntas del piloto: editar `bank_*.py` o `fix*.py` → `python3 build_bank.py` → `python3 qc.py` → sustituir el banco en `index.html` con un reemplazo exacto → `tests/ejecutar.sh`.

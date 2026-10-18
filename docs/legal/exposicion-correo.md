# SEC-01 · Exposición del correo institucional

> Registro del alcance y de las medidas. Aprobado por Raúl el 19/10/2026: sustituir el valor en `desarrollo` y en la candidata, aplicarlo a la versión de alumnos en la siguiente publicación estable, configurar el correo «noreply» y **no reescribir el historial público por ahora**. Este documento no repite el correo para no volver a publicarlo.

## Alcance (revisión del 18/10/2026 sobre todas las ramas y todo el historial)

| Dónde | Desde | Visible para | Estado |
|---|---|---|---|
| `index.html` de los alumnos (`main`): valor por defecto del campo «Tu correo de profe» del panel de profesor (`?profe`, función de validación desactivada) | 14/10/2026 | Cualquiera que abra el código fuente de la web o el repositorio | **Sigue** hasta la próxima publicación estable autorizada |
| `candidata/index.html` (`main`) | 18/10/2026 | Igual | **Corregido** el 19/10/2026 |
| `index.html` de `desarrollo` | 14/10/2026 | Repositorio | **Corregido** el 19/10/2026 |
| Historial de git (todas las versiones anteriores de esos archivos) | 14/10/2026 | Repositorio y cualquier copia o bifurcación | Se mantiene (no se reescribe) |
| Correo de autor de 8 commits | 14-18/10/2026 | Repositorio (vista de commits) | Se mantiene (no se reescribe) |
| Copias de seguridad (bundle del 18/10) | — | Solo Raúl | Lo contiene, como todo el historial |

No se encontraron credenciales, datos de alumnos ni otros datos personales.

## Medidas aplicadas

1. El campo queda vacío con un ejemplo genérico (`nombre@tucentro.cat`). El funcionamiento no cambia: el profesor escribe su correo una vez y la clave se crea igual; las claves ya creadas en un navegador siguen intactas. Prueba automatizada `tests/profe.js` (6/6).
2. `tools/configurar-git.sh` configura el clon local con el correo «noreply» de GitHub; los agentes (Claude, Codex) firman con su propia identidad «noreply».
3. Regla en [CLAUDE.md](../../CLAUDE.md) y [AGENTS.md](../../AGENTS.md): ningún correo personal o institucional en el código ni en los commits.

## Medidas pendientes

| Medida | Cuándo | Quién |
|---|---|---|
| Aplicar el cambio a `index.html` de los alumnos | Con la siguiente publicación estable aprobada | Claude, con autorización |
| Activar en GitHub «Keep my email addresses private» y «Block command line pushes that expose my email» | Cuando pueda | Raúl |
| Ejecutar `tools/configurar-git.sh` en el ordenador desde el que haga commits | Cuando pueda | Raúl |
| Decidir si se limpia el historial (reescritura o repositorio público nuevo sin historial) | Al separar repositorio privado y público ([../repositorios.md](../repositorios.md)) | Raúl |

## Por qué no se reescribe ahora

Reescribir el historial cambia todos los identificadores de commit: rompe los enlaces de los PR, las ramas de copia y el bundle verificado, y no elimina las copias que otros hayan podido descargar. La separación en repositorio privado y público permite resolverlo de una vez, publicando un repositorio público nuevo sin este historial.

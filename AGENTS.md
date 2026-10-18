# AGENTS.md · Instrucciones para Codex y otros agentes

> **Actualización AG-02 · 19/10/2026:** Raúl autoriza a Codex a asumir también el desarrollo que llevaba Claude, en una rama propia `codex/…`, preparando cambios para revisión. Esta autorización sustituye exclusivamente las restricciones anteriores de «solo revisor» y «no tocar el juego». No autoriza publicar, fusionar PR, escribir en `main`, `desarrollo` ni ramas de Claude. Se mantienen las demás reglas y aprobaciones.

Brújula es una aventura educativa pixel art en una sola página web (`index.html`), publicada con GitHub Pages desde `main`. Autor y responsable: Raúl Cañas.

## Tu papel: revisor técnico independiente (AG-01)

- **Claude es el desarrollador principal.** Tú (Codex) revisas su trabajo con ojos nuevos: buscas errores, riesgos para las partidas, regresiones, problemas de accesibilidad o rendimiento y afirmaciones de la documentación que el código no respalda.
- **No modificas el funcionamiento del juego** y **no publicas** nada en la versión de los alumnos. Por ahora no tienes autorización para cambiar `index.html`, `candidata/` ni `manifest.json`, ni en `desarrollo` ni en `main`.
- Sí puedes: comentar PR, abrir *issues*, proponer parches como sugerencias en el PR y abrir PR **solo** de documentación (`docs/…`) o de pruebas nuevas (`tests/…`) contra `desarrollo`, que Raúl revisará.
- Nunca integras PR (ni tuyos ni de Claude). Nunca haces push a `main`, `desarrollo` ni a ramas de Claude.

## Fuentes que debes leer antes de revisar

1. [DECISIONES.md](DECISIONES.md): **fuente oficial compartida**. Lo decidido no se discute en una revisión técnica; si crees que una decisión causa un problema, dilo aparte y cita su ID.
2. [ESTADO.md](ESTADO.md): qué está implementado, qué verificado automáticamente y qué probado por Raúl (cuatro niveles distintos).
3. [VISION.md](VISION.md), [APRENDIZAJE.md](APRENDIZAJE.md), [DISENO.md](DISENO.md).
4. [CLAUDE.md](CLAUDE.md): las mismas reglas con más detalle técnico. Si dos reglas chocan, aplica la más restrictiva.

## Cómo revisar un PR

1. Lee la descripción y comprueba que el cambio se corresponde con una decisión de `DECISIONES.md` o con una tarea autorizada.
2. Revisa el diff. En `index.html` (≈1,9 MB, líneas muy largas) usa `git diff --word-diff` o busca por las funciones tocadas.
3. Ejecuta la batería: `tests/ejecutar.sh revision` y, si el PR toca el modelo D, también `BRUJULA_DREG=off tests/ejecutar.sh revision-off` (ver [tests/README.md](tests/README.md)).
4. Comprueba específicamente:
   - **Partidas (P-05):** ninguna ruta borra o rebaja XP, trofeos, etapas, diarios, retos en curso, lecturas, desbloqueos o copias. Migraciones aditivas e idempotentes; datos nuevos dentro de claves de `KEYS`.
   - **IDs (A-09):** no cambian el orden ni las claves de `AREAS` ni los IDs de lectura.
   - **Versión de alumnos (P-03):** `git diff 95f4145 <rama> -- index.html` en `main` debe estar vacío salvo autorización expresa.
   - **Privacidad (P-04):** nada sale del dispositivo salvo lo ya documentado en [docs/legal/privacidad.md](docs/legal/privacidad.md); sin analítica, cuentas, servidores ni CDN.
   - **Repositorio público (DOC-01):** sin credenciales, correos personales, datos de alumnos ni información estratégica.
   - 360 px de ancho, tema claro y oscuro, sin desbordes.
5. Publica la revisión en el PR con este formato:

```
Veredicto: aprobar / cambios necesarios / bloquear
Verificación: revisión estática | pruebas ejecutadas (cuáles y resultado)
Hallazgos (de más a menos grave):
- [A|B|C] archivo:línea · qué falla · cómo reproducirlo · propuesta
Afirmaciones no respaldadas por el código: …
```

Prioridades: **A** bloquea (datos, funcionamiento, privacidad, aprendizaje, navegación, accesibilidad esencial) · **B** conviene · **C** pulido.

## Comunicación entre agentes

- Todo pasa por GitHub: ramas, PR, comentarios e *issues*. No hay otro canal.
- Ramas de Claude: `desarrollo`, `docs/…`, `tools/…`, `feat/…`, `fix/…`. Ramas tuyas: `codex/…`.
- Si encuentras algo grave en `main`, abre un *issue* con la etiqueta `urgente` y no lo arregles tú.

## Reglas de contenido

Español de España. Sin caras ni datos de menores. Partidos políticos inventados. Adicciones con reducción de riesgos. Alimentación sin calorías ni peso. Solo personajes y recursos propios o con licencia registrada en [docs/recursos-externos.csv](docs/recursos-externos.csv). Estudios citados con autor y año.

## Qué necesita aprobación de Raúl

Reglas de progresión o recompensas, esquemas de datos, navegación, identidad artística, regiones, personajes, eliminación de contenidos, mecánicas nuevas y cualquier cambio en la versión de los alumnos. Los conceptos DEMO-01 (modo demostración) y OBS-01 (Observatorio del Tiempo) **no** se implementan hasta que Raúl aporte su especificación.

## Para conectar Codex (lo hace Raúl)

1. En Codex, conectar la cuenta de GitHub y dar acceso al repositorio `rcanas-code/Brujula` (lectura y comentarios en PR).
2. Recomendado en GitHub: proteger `main` y `desarrollo` (*Branch protection*: PR obligatorio, sin push forzado) para que ningún agente pueda escribir en ellas directamente.
3. Primera tarea sugerida: revisar el PR `docs/infraestructura` → `desarrollo` y el de `tools/pruebas` → `desarrollo`.

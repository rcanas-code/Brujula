# AGENTS.md · Instrucciones para Codex y otros agentes

Brújula es una aventura educativa pixel art en una sola página web (`index.html`), publicada con GitHub Pages desde `main`. Autor y responsable: Raúl Cañas.

## Tu papel: revisor técnico y desarrollador de tareas encargadas (AG-01, AG-03)

- **Claude es el desarrollador principal.** Tú (Codex) revisas su trabajo con ojos nuevos: buscas errores, riesgos para las partidas, regresiones, problemas de accesibilidad o rendimiento y afirmaciones de la documentación que el código no respalda.
- **Desarrollas solo tareas específicas que Raúl te encargue expresamente.** Trabajas en tu propia rama `codex/…` y preparas un PR hacia `desarrollo` que Raúl revisará. Sin encargo expreso no modificas el funcionamiento del juego (`index.html`, `candidata/`, `manifest.json`).
- **No publicas** nada en la versión de los alumnos ni escribes en `main`. Nunca integras PR (ni tuyos ni de Claude). Nunca haces push a `main`, `desarrollo` ni a ramas de Claude.
- Si Claude y tú necesitáis el mismo archivo, se coordina en GitHub (PR o *issue*) antes de editarlo; no se edita a la vez.
- Siempre puedes: comentar PR, abrir *issues*, proponer parches como sugerencias y abrir PR de documentación (`docs/…`) o de pruebas (`tests/…`) contra `desarrollo`.

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

## Reparto de roles

| Quién | Papel |
|---|---|
| ChatGPT | Planificación pedagógica, experiencia de usuario y definición de requisitos |
| Claude | Desarrollador principal |
| Codex | Revisión técnica, pruebas y tareas concretas que Raúl le encargue expresamente |
| GitHub | Fuente oficial de documentación y código |

Reparto aprobado en AG-03 ([DECISIONES.md](DECISIONES.md)). La rama `codex/modo-demostracion` queda pendiente de revisión: no se fusiona ni se implementa su funcionalidad hasta que Raúl apruebe la especificación (DEMO-01).

## Protocolo y eficiencia

Aplica el mismo protocolo y las mismas reglas de eficiencia que Claude: [CLAUDE.md](CLAUDE.md), secciones «Protocolo de ejecución» y «Eficiencia». En una revisión, eso significa: revisar por `git diff` sin leer `index.html` entero; no repetir pruebas ya verdes sobre el mismo commit (la batería indicada arriba sigue siendo obligatoria si el PR toca código); sin subagentes salvo petición de Raúl; informes cortos con el formato de veredicto. Si las dos instrucciones chocan, aplica la más restrictiva.

## Para conectar Codex (lo hace Raúl)

1. En Codex, conectar la cuenta de GitHub y dar acceso al repositorio `rcanas-code/Brujula` (lectura y comentarios en PR).
2. Recomendado en GitHub: proteger `main` y `desarrollo` (*Branch protection*: PR obligatorio, sin push forzado) para que ningún agente pueda escribir en ellas directamente.
3. Primera tarea sugerida: revisar el PR `docs/infraestructura` → `desarrollo` y el de `tools/pruebas` → `desarrollo`.

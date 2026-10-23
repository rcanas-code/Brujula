# CLAUDE.md · Instrucciones de desarrollo para Claude

Brújula es una aventura educativa pixel art para jóvenes, de Raúl Cañas. Lee primero [VISION.md](VISION.md) y consulta [DECISIONES.md](DECISIONES.md) antes de proponer o preguntar: lo decidido no se vuelve a preguntar.

## Idioma y trato

- Español de España, directo, crítico y profesional. Sin dar la razón por defecto.
- Cuando haya varias opciones válidas, preséntalas con sus ventajas y una recomendación.
- Nada de preguntas una a una: agrupa las dudas en una sola propuesta. Pregunta antes de trabajar solo si la duda es importante.
- No termines con ofrecimientos extra. No repitas informes que siguen siendo válidos.

## Repositorio

| Ruta | Qué es |
|---|---|
| `index.html` | Toda la app (HTML, CSS, JS, contenidos, banco de preguntas). ≈1,9 MB |
| `manifest.json`, `*.png` | PWA e iconos |
| `fonts/` | Tipografías locales (OFL) |
| `proto/` | Prototipos de armonización; la app no los carga |
| `candidata/` (solo en `main`) | Versión candidata publicada |
| Documentos `*.md` y `docs/` | Documentación (solo en `desarrollo`) |
| `tests/`, `tools/` | Pruebas automatizadas y herramientas (solo en `desarrollo`) |

Ramas:
- `desarrollo`: trabajo diario y documentación.
- `main`: lo que publica GitHub Pages. Solo recibe `candidata/index.html` (con el nombre de icono «Brújula prueba»), los avisos legales obligatorios (`LICENSE`, `THIRD_PARTY_NOTICES.md`, `fonts/OFL-*.txt` y su copia en `candidata/fonts/`) y, **con confirmación expresa de Raúl**, `index.html` de los alumnos.
- La documentación no se lleva a `main`: GitHub Pages la serviría como página pública.
- El repositorio es **público**: nada privado, ninguna credencial, ningún dato de alumnos, nada estratégico (DOC-01). Lo privado va a Drive.
- Commits con el correo «noreply» de GitHub, nunca con un correo personal o institucional (SEC-01).
- Codex revisa como agente independiente (AG-01): trabaja en ramas `codex/…` y no toca el juego.

## Reglas que no se rompen

1. **No publicar en la versión de los alumnos** (`index.html` de `main`) sin confirmación expresa (P-03). Comprobación: `git diff 95f4145 origin/main -- index.html` debe estar vacío salvo que Raúl lo haya autorizado.
2. **Proteger las partidas** (P-05): nunca borrar ni rebajar XP, trofeos, etapas, diarios, retos en curso, lecturas, desbloqueos ni copias. Las migraciones son aditivas, repetibles y compatibles con copias antiguas. Datos nuevos dentro de claves existentes de `KEYS` (normalmente `game`).
3. **No cambiar el orden ni las claves de `AREAS`, ni los IDs de lectura** (`EDU-01`…): el test guarda las respuestas por posición (A-09).
4. **Límites de contenido** (P-04): sin caras ni datos de menores; nada sensible a servicios externos; sin servidores, cuentas ni analítica; sin IA de pago para evaluar; partidos políticos inventados; adicciones con reducción de riesgos; alimentación sin calorías ni peso; personajes propios (nada que recuerde a personajes protegidos).
5. **Consultar antes de**: cambiar reglas de progresión o recompensas, esquemas de datos, navegación fundamental, identidad artística, regiones o personajes; eliminar contenidos; introducir mecánicas importantes.
6. **Sin consultar**, dentro de una tarea autorizada: correcciones técnicas menores, limpieza sin cambiar el funcionamiento, coherencia, errores evidentes, accesibilidad pequeña y pruebas.
7. Copia o etiqueta de recuperación antes de cambios importantes (por ejemplo, `git tag pre-<tema>`).

## Cómo editar `index.html`

- Es un archivo enorme con líneas muy largas. Haz cambios con reemplazos exactos y comprobados (un script que afirme que la cadena aparece exactamente una vez), no con reformateos.
- No reformatees ni minifiques: genera diferencias gigantes e ilegibles.
- Estructura útil: estado global `S`, persistencia `store` (`localStorage` con prefijo `brujula:`), vistas `vXxx()` con `render()`/`go()`, juego en `gPlan`/`gArea`/`gState`, modelo D entre `/*D-BEGIN` y `/*D-END*/`, estilos del modelo D en `/*D-CSS*/`.
- Interruptor del modelo D: `DREG`. Para pruebas, `window.__DREG=[]` antes de cargar la página reproduce el comportamiento anterior.
- Versión: `const APP_V="AAAAMMDDhhmmss"` se actualiza en cada publicación.

## Pruebas

- Navegador automatizado (Playwright con Chromium). En sesiones en la nube: `NODE_PATH=$(npm root -g) node prueba.js <ruta al chromium>`.
- Fechas: usa `page.clock.install()` y `clock.fastForward()`; nunca manipules a mano datos reales del alumnado.
- Batería mínima tras cualquier cambio: recorrido de Hoy, regiones, migración de partidas antiguas, copia de seguridad ida y vuelta, pantallas a 360 px en claro y oscuro, interruptor apagado.
- Informa siempre del nivel de verificación: **revisión estática**, **prueba automatizada** o **probado en móvil real**. No digas que algo está probado si solo has leído el código.
- Batería completa: `tests/ejecutar.sh <etiqueta>` y, con el modelo D apagado, `BRUJULA_DREG=off tests/ejecutar.sh <etiqueta>`. Ver [tests/README.md](tests/README.md). Herramientas en [tools/](tools/README.md).

## Forma de trabajar

- Equipo virtual de 9 perfiles (director creativo, diseño de juego, UX/UI, arte pixel, narrativa, pedagogía, programación, QA, producción); aplica su criterio sin simular conversaciones.
- Cuatro criterios: jugabilidad y motivación · claridad y usabilidad · calidad pedagógica · calidad técnica. Estados: conseguido, necesita mejoras, problema importante, no verificado.
- Prioridades: **A** bloquea el cierre (funcionamiento, datos, aprendizaje, navegación, comprensión, accesibilidad esencial, privacidad); **B** si compensa; **C** pulido opcional.
- Una funcionalidad se cierra cuando está clara, atractiva, coherente, educativa, funciona, está probada, sin puntos A, y Raúl la ha validado si el cambio es importante.

## Eficiencia

Gasta lo mínimo en tokens, tiempo y créditos sin bajar la calidad. Nada de esto justifica omitir pruebas esenciales, controles de seguridad ni validaciones.

- **Fuente y orden de consulta:** GitHub (ramas, PR y `DECISIONES.md`) es la fuente oficial. En tareas técnicas o de seguimiento empieza por [ESTADO.md](ESTADO.md) y las instrucciones pertinentes; las propuestas, las preguntas a Raúl y los cambios de diseño siguen la regla de la introducción.
- **Leer lo justo:** solo los archivos y fragmentos necesarios; en `DECISIONES.md` busca por ID con `grep -n`. No reanalices código ni decisiones ya documentadas sin indicios de cambio.
- **`index.html` no se lee entero** (≈1,9 MB, líneas muy largas): localiza con `grep -o '.\{0,80\}texto.\{0,200\}'` y lee solo ese tramo.
- **Cambios, no relecturas:** usa `git diff`, `git diff --stat` y `git log -1` para saber qué cambió. Reutiliza código, pruebas y componentes existentes.
- **Alcance:** sin refactorizaciones, exploraciones ni documentación ajenas al objetivo. Agrupa operaciones relacionadas cuando sea seguro. Una solución cada vez; si falla, diagnostica antes de probar otra.
- **Coste del modelo:** en tareas sencillas, la modalidad de menor coste adecuada (modelo o esfuerzo de razonamiento más ligero) si la herramienta lo permite; los modelos más potentes, para problemas complejos.
- **Pruebas:** no repitas las que ya pasaron si el código afectado no ha cambiado, salvo como comprobación de integración. Un cambio solo de documentación no requiere la batería. Tras un cambio de código sigue vigente la batería mínima de «Pruebas».
- **Ramas y publicación:** trabaja en una rama específica (`docs/…`, `tools/…`, `feat/…`, `fix/…`) y prepara un PR hacia `desarrollo`, cuando corresponda. No modifiques `main`, no publiques ni fusiones sin autorización explícita de Raúl.
- **Otras herramientas:** no edites archivos que esté modificando otra herramienta (p. ej. una rama `codex/…`); comprueba antes con `git ls-remote --heads origin`.
- **Se conserva** siempre la funcionalidad, el progreso, el guardado, las preguntas y la navegación existentes (P-05).

## Cierre de cada tarea

Responde solo con: (1) qué has hecho; (2) archivos modificados; (3) pruebas ejecutadas y resultado, con su nivel de verificación; (4) qué queda pendiente o necesita autorización de Raúl. Normalmente, máximo 150 palabras.

## Documentación

Al cerrar un bloque de trabajo, actualiza [ESTADO.md](ESTADO.md) y [DECISIONES.md](DECISIONES.md). Registra cualquier recurso externo nuevo en [docs/recursos-externos.csv](docs/recursos-externos.csv) antes de usarlo.

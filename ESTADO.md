# Brújula · Estado del proyecto

> Qué existe, qué falta y qué falla. Se actualiza al cerrar cada bloque de trabajo. Última revisión: 24/10/2026.
>
> Niveles de verificación: **probado en móvil real** · **prueba automatizada** (navegador automatizado) · **revisión estática** (solo lectura de código) · **sin verificar**.

## Para retomar

1. Ramas y PR: `git log -3 origin/desarrollo` y la pestaña *Pull requests* de GitHub.
2. Trabajo por hacer: tabla «Pendiente» (más abajo). Decisiones por tomar: [DECISIONES.md](DECISIONES.md), sección 2.
3. Cómo trabajar: [CLAUDE.md](CLAUDE.md) (Claude) y [AGENTS.md](AGENTS.md) (Codex).

## Versiones publicadas

| Versión | Dónde | Commit | Estado |
|---|---|---|---|
| Estable (alumnos, «v200») | `index.html` de `main` → https://rcanas-code.github.io/Brujula/ | sin cambios desde `95f4145` | En uso. No se toca sin confirmación de Raúl |
| Candidata | `candidata/index.html` de `main` → https://rcanas-code.github.io/Brujula/candidata/ | ver `git log -1 -- candidata/index.html` en `main` | Hoy nuevo, armonización visual y modelo D. Pendiente de prueba en iPhone |
| Desarrollo | rama `desarrollo` | ver `git log -1 origin/desarrollo` | Igual que la candidata (salvo el nombre del icono: «Brújula prueba») |

Puntos de recuperación: ramas de copia en GitHub (`v200-publicada`, `copia/candidata-2026-10-18`, `copia/desarrollo-2026-10-18`, `copia/pre-modeloD`, `v197-estable`, `copia-pre-gamificacion`) y etiquetas equivalentes dentro del bundle del 18/10. Detalle en [docs/copias-de-seguridad.md](docs/copias-de-seguridad.md).

## Arquitectura

- Una sola página: `index.html` (≈1,9 MB) con HTML, CSS, JavaScript, contenidos y banco de preguntas. Sin dependencias externas ni proceso de compilación obligatorio.
- Recursos al lado: `manifest.json`, iconos PNG, `fonts/` (WOFF2 locales).
- Datos del alumno en `localStorage` (claves `brujula:*`) y fotos del álbum en IndexedDB (`brujula-album`). Nada se envía a servidores.
- Copia de seguridad por código («BRUJULA-…») que incluye las claves de `KEYS`, entre ellas `game`. **No incluye las fotos del álbum.**
- Publicación con GitHub Pages desde `main`.
- Interruptor del modelo D: constante `DREG` (por defecto `["EDU","ATE","HAB"]`; con `[]`, comportamiento anterior).

## Funcionalidades: cuatro niveles de estado

Cada funcionalidad se valora en cuatro niveles independientes. Que algo esté implementado o pase las pruebas automáticas **no** significa que Raúl lo haya probado y aprobado.

- **Decidido**: hay una decisión en [DECISIONES.md](DECISIONES.md) (se indica el ID).
- **Implementado**: existe en el código (indica dónde: estable, candidata o desarrollo).
- **Verificado automáticamente**: lo cubre una prueba de [tests/](tests/README.md) que pasa (se indica cuál). «Revisión estática» = solo se ha leído el código.
- **Probado y aprobado por Raúl**: Raúl lo ha usado (idealmente en su móvil) y lo ha dado por bueno. «Sin registro» = no consta ni a favor ni en contra.

| Área | Qué hay | Decidido | Implementado | Verificado automáticamente | Probado y aprobado por Raúl |
|---|---|---|---|---|---|
| Inicio | Test inicial por áreas, carta de navegación (5 pasos), elección de personaje (23 tipos) | Sí (anterior al registro) | Estable | Sí (`f1`, `f3`, `carta`) | Sin registro |
| Hoy | Misión principal (reto de 7 días con 5/7 y 7/7), diario, plan «si… entonces», calendario, misiones secundarias | H-01, H-02, M-D3 | Candidata | Sí (`hoyf`, `corr`) | Pendiente: prueba en iPhone (H-04) |
| Armonización visual | Biblioteca, Aguja como diálogo, Yo reorganizado, iconos pixel propios | V-01 a V-04 | Candidata | Sí (`audf`, `mob`, `p32t`, `p36t`, `sct`) | Aprobada en maqueta; falta prueba en móvil |
| Mundo | Mapa pixel de 19 regiones con caminos, niebla y guardianes; santuario | A-07 | Estable | Sí (`mw2`, `zm`) | Sin registro |
| Biblioteca | 213 lecturas: 103 explicadas, 13 breves, 97 solo con la idea; escenas interactivas; recomendador | — | Estable | Parcial (`lq`, `lb`, auditoría de contenidos 18/10) | Sin registro |
| Regiones con trofeos (11) | Reglas antiguas: lecturas clave, quiz, reto de 7 días, entreno, duelo y reflexión | Sí (modelo anterior) | Estable | Sí (`auto`, `p5e2e`) | Sin registro |
| Regiones piloto (3): bronce | Prueba del guardián adaptativa | D-1, D-2, F-1 a F-9 | Candidata, detrás de `DREG` | Sí (`dtest` 50/50) | **Pendiente** |
| Regiones piloto (3): plata | Misiones de 1 a 4 aplicaciones, sin días seguidos | D-4 | Candidata | Sí (`dtest`) | **Pendiente** |
| Regiones piloto (3): oro | Encuentro diferido (10 días, configurable) y eco | D-3 | Candidata | Sí (`dtest`, con reloj simulado) | **Pendiente** |
| Herramientas | 7 herramientas del piloto con utilidad real | D-8 | Candidata | Sí (`dtest`, `dvis`) | **Pendiente** |
| Migración de partidas al modelo D | Aditiva, repetible, interruptor reversible | D-9, P-05 | Candidata | Sí (`dmig` 16/16, `migr`, `bkrt`) | No aplica (técnico) |
| Regiones sin trofeos (4) | Emociones, Autoestima, Autoconocimiento, Adicciones | — | Estable | Sí (`allv`) | Sin registro |
| Progreso | XP, niveles, 5 etapas del personaje, actos con el Alter Ego, celebraciones | D-6, IM-1 (pendiente) | Estable; etapas por trofeos en candidata | Sí (`auto`, `dtest`) | Sin registro |
| Constancia | Semanas activas (candidata); racha (estable) | D-7 | Candidata | Sí (`dtest`) | **Pendiente** |
| Propósito | 7 pasos hasta la frase de propósito | — | Estable | Sí (`allv`) | Sin registro |
| Yo | Panel, colección, hoja de personaje, mochila, pantalla y sonido, mi partida, álbum privado | V-03 | Candidata | Sí (`allv`, `irest`) | Sin registro |
| Copia de seguridad | Código «BRUJULA-…» con las claves de `KEYS`; sin fotos del álbum | P-05 | Estable | Sí (`bkrt`) | Sin registro |
| Ayuda | Preguntas frecuentes, teléfonos, sugerencias y errores por correo | — | Estable | Parcial (`fbk`) | Sin registro |
| Clase y profesor | `?clase` y `?profe` siguen en el código; validación por foto desactivada | Descartada (foto del profesor) | Código conservado, inactivo | Revisión estática | No aplica |
| Accesibilidad | Tamaño de letra, temas, velocidad de diálogos, animaciones, 4 tipografías | — | Estable | Parcial (`zm`, `mob`) | Sin registro |
| **Modo demostración** | — | **Pendiente de consolidar** (DEMO-01) | No | No | No |
| **Observatorio del Tiempo** | — | **Pendiente de consolidar** (OBS-01) | No | No | No |

## Pendiente

| Prioridad | Trabajo | Quién |
|---|---|---|
| A | Prueba de la candidata en un iPhone real (Hoy, modelo D, temporizadores, calendario, teclado) | Raúl |
| A | Requisitos del centro y del DPD antes de usarla con alumnos | Raúl |
| A | Revisión humana del banco de 106 preguntas y de EDU-03/EDU-04 | Raúl |
| — | ~~Llevar a `main` los avisos de licencia de las 6 tipografías (`fonts/OFL-*.txt`)~~ | Hecho el 19/10 (DOC-02b): publicados en `main` sin tocar `index.html` de los alumnos |
| A | Revisión de enlaces externos ([docs/recursos-externos.csv](docs/recursos-externos.csv)) | Raúl, con la lista |
| B | Contenido de Emociones (AU-01) y lecturas sin explicar fuera del piloto | Por decidir |
| B | Extender el modelo D a otras regiones tras el piloto | Por decidir |
| B | Actualizaciones por internet (U-01) | Solo análisis |

## Problemas conocidos

| Prioridad | Problema | Detalle |
|---|---|---|
| A | **No hay service worker** | La app no se guarda para funcionar sin conexión: si el navegador no la tiene en caché, no abre offline. Análisis y prototipo en rama aparte (DOC-09, [docs/sin-conexion.md](docs/sin-conexion.md)); no integrado |
| — | ~~Las herramientas de trabajo no están en el repositorio~~ | Resuelto el 18/10 (DOC-03): 28 pruebas de regresión y las herramientas, en `tests/` y `tools/` (rama `tools/pruebas`). La cifra anterior de «unas 80 pruebas» contaba también scripts exploratorios; esos ~200 scripts están archivados en la copia externa |
| B | El correo institucional de Raúl aparece en el código y en el historial público | Valor por defecto del campo «Tu correo de profe» (función desactivada) en `index.html` y `candidata/index.html` de `main` y en `desarrollo`, y como correo de autor de 8 commits. Ver SEC-01 en [DECISIONES.md](DECISIONES.md) |
| B | La candidata comparte almacenamiento con la versión estable en el mismo navegador | La migración del modelo D añadiría datos a esa partida (sin borrar nada). Probar desde el icono «Brújula prueba» |
| B | Las fotos del álbum no van en la copia de seguridad | Avisado en la propia app; se pierden al cambiar de móvil |
| B | `README.md` de `main` dice «14 áreas» | Corregido en `desarrollo` (DOC-08); en `main`, con la próxima versión estable |
| B | La prueba automatizada `lq` falla a veces por tiempos | Pasa al repetirla; conviene estabilizarla |
| B | Parámetros del modelo D sin calibrar | 10 días para el oro, reintento a 2 días, 3 s por respuesta, 2 aplicaciones al día (`DCFG`) |
| C | Las herramientas se ven en un cinturón bajo el personaje, no dibujadas sobre él | Decisión de alcance |

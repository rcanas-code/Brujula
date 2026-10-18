# Brújula · Estado del proyecto

> Qué existe, qué falta y qué falla. Se actualiza al cerrar cada bloque de trabajo. Última revisión: 18/10/2026.
>
> Niveles de verificación: **probado en móvil real** · **prueba automatizada** (navegador automatizado) · **revisión estática** (solo lectura de código) · **sin verificar**.

## Versiones publicadas

| Versión | Dónde | Commit | Estado |
|---|---|---|---|
| Estable (alumnos, «v200») | `index.html` de `main` → https://rcanas-code.github.io/Brujula/ | sin cambios desde `95f4145` | En uso. No se toca sin confirmación de Raúl |
| Candidata | `candidata/index.html` de `main` → https://rcanas-code.github.io/Brujula/candidata/ | `d139746` (18/10/2026) | Hoy nuevo, armonización visual y modelo D. Pendiente de prueba en iPhone |
| Desarrollo | rama `desarrollo` | `7b412b1` | Igual que la candidata (salvo el nombre del icono: «Brújula prueba») |

Punto de recuperación anterior al modelo D: etiqueta git `pre-modeloD` (`24b8fcf`).

## Arquitectura

- Una sola página: `index.html` (≈1,9 MB) con HTML, CSS, JavaScript, contenidos y banco de preguntas. Sin dependencias externas ni proceso de compilación obligatorio.
- Recursos al lado: `manifest.json`, iconos PNG, `fonts/` (WOFF2 locales).
- Datos del alumno en `localStorage` (claves `brujula:*`) y fotos del álbum en IndexedDB (`brujula-album`). Nada se envía a servidores.
- Copia de seguridad por código («BRUJULA-…») que incluye las claves de `KEYS`, entre ellas `game`. **No incluye las fotos del álbum.**
- Publicación con GitHub Pages desde `main`.
- Interruptor del modelo D: constante `DREG` (por defecto `["EDU","ATE","HAB"]`; con `[]`, comportamiento anterior).

## Funcionalidades implementadas

| Área | Qué hay | Verificación |
|---|---|---|
| Inicio | Test inicial por áreas, carta de navegación (5 pasos), elección de personaje (23 tipos) | Prueba automatizada |
| Hoy | Misión principal (reto de 7 días con 5/7 y 7/7), diario, plan «si… entonces», calendario, misiones secundarias, tarjeta del piloto (modelo D) | Prueba automatizada · iPhone pendiente |
| Mundo | Mapa pixel de 19 regiones con caminos, niebla y guardianes; santuario | Prueba automatizada |
| Biblioteca | 213 lecturas: 103 explicadas, 13 breves, 97 solo con la idea; escenas interactivas; recomendador (Don Fermín) | Auditoría de contenidos 18/10 |
| Regiones con trofeos (11) | Reglas antiguas: lecturas clave, quiz, reto de 7 días, entreno, duelo y reflexión | Prueba automatizada |
| Regiones piloto (3) | Modelo D: Prueba del guardián, repaso diferido, misiones de aplicación, encuentro del oro, eco | Prueba automatizada (50/50) |
| Regiones sin trofeos (4) | Emociones, Autoestima, Autoconocimiento, Adicciones: lecturas para conocerse | Prueba automatizada |
| Herramientas | 7 herramientas del piloto con utilidad real; sala de foco, laboratorio de multitarea, taller del móvil y otros lugares | Prueba automatizada |
| Progreso | XP, niveles, 5 etapas del personaje, actos de la historia con el Alter Ego, celebraciones con música generada | Prueba automatizada |
| Constancia | Semanas activas y cuaderno de viaje (modelo D); racha en la versión estable | Prueba automatizada |
| Propósito | 7 pasos hasta la frase de propósito, experimentos en la vida real | Prueba automatizada |
| Yo | Panel, colección, hoja de personaje, mochila, pantalla y sonido, mi partida, álbum privado | Prueba automatizada |
| Ayuda | Preguntas frecuentes, ayuda y teléfonos, informe de errores y sugerencias por correo | Revisión estática |
| Clase y profesor | `?clase` y `?profe` siguen en el código; la validación por foto está desactivada | Revisión estática |
| Accesibilidad | Tamaño de letra, tema claro/oscuro/automático, velocidad de diálogos, animaciones desactivables, 4 tipografías | Prueba automatizada parcial |

## Pendiente

| Prioridad | Trabajo | Quién |
|---|---|---|
| A | Prueba de la candidata en un iPhone real (Hoy, modelo D, temporizadores, calendario, teclado) | Raúl |
| A | Requisitos del centro y del DPD antes de usarla con alumnos | Raúl |
| A | Revisión humana del banco de 106 preguntas y de EDU-03/EDU-04 | Raúl |
| A | Licencias: completar los avisos de copyright de todas las fuentes ([docs/legal/propiedad-intelectual.md](docs/legal/propiedad-intelectual.md)) | Claude prepara, Raúl confirma |
| A | Revisión de enlaces externos ([docs/recursos-externos.csv](docs/recursos-externos.csv)) | Raúl, con la lista |
| B | Contenido de Emociones (AU-01) y lecturas sin explicar fuera del piloto | Por decidir |
| B | Extender el modelo D a otras regiones tras el piloto | Por decidir |
| B | Actualizaciones por internet (U-01) | Solo análisis |

## Problemas conocidos

| Prioridad | Problema | Detalle |
|---|---|---|
| A | **No hay service worker** | La app no se guarda para funcionar sin conexión: si el navegador no la tiene en caché, no abre offline. Las pruebas «sin conexión» solo comprobaron que, una vez abierta, no hace peticiones de red |
| A | **Las herramientas de trabajo no están en el repositorio** | Scripts de compilación y las ~80 pruebas automatizadas viven en un espacio temporal de las sesiones de Claude y se pueden perder. Ver DOC-03 en [docs/README.md](docs/README.md) |
| B | La candidata comparte almacenamiento con la versión estable en el mismo navegador | La migración del modelo D añadiría datos a esa partida (sin borrar nada). Probar desde el icono «Brújula prueba» |
| B | Las fotos del álbum no van en la copia de seguridad | Avisado en la propia app; se pierden al cambiar de móvil |
| B | `README.md` dice «14 áreas» | Hay 19 regiones (14 del test y 5 extra) |
| B | La prueba automatizada `lq` falla a veces por tiempos | Pasa al repetirla; conviene estabilizarla |
| B | Parámetros del modelo D sin calibrar | 10 días para el oro, reintento a 2 días, 3 s por respuesta, 2 aplicaciones al día (`DCFG`) |
| C | Las herramientas se ven en un cinturón bajo el personaje, no dibujadas sobre él | Decisión de alcance |

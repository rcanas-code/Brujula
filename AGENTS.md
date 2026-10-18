# AGENTS.md · Instrucciones para agentes de programación (Codex y otros)

Brújula es una aventura educativa pixel art en una sola página web (`index.html`), publicada con GitHub Pages. Antes de trabajar, lee [VISION.md](VISION.md), [DECISIONES.md](DECISIONES.md) y [ESTADO.md](ESTADO.md). [CLAUDE.md](CLAUDE.md) contiene las mismas reglas con más detalle; en caso de duda, prevalece la más restrictiva.

## Flujo de trabajo

1. Crea una rama desde `desarrollo` con un nombre descriptivo (`fix/…`, `feat/…`, `docs/…`).
2. Haz cambios pequeños y revisables. Un tema por rama.
3. Ejecuta las pruebas disponibles y describe en el PR qué has verificado y cómo.
4. Abre el PR **contra `desarrollo`**. Raúl lo revisa y lo integra.

Prohibido:
- Hacer push a `main` o modificar `index.html` / `candidata/` en `main`.
- Integrar tus propios PR.
- Añadir credenciales, tokens, correos personales, datos de alumnos o archivos de configuración privados. El repositorio es público.
- Añadir dependencias externas, CDN, analítica, cuentas, servidores o llamadas a servicios de terceros.
- Reformatear o minificar `index.html`.

## Reglas técnicas

- No cambies el orden ni las claves de `AREAS`, ni los IDs de lectura (`XXX-NN`): el test inicial guarda respuestas por posición.
- No borres ni rebajes datos de partidas guardadas (`localStorage`, prefijo `brujula:`). Cualquier migración debe ser aditiva, repetible e incluida en la copia de seguridad (`KEYS`).
- El modelo D está entre `/*D-BEGIN` y `/*D-END*/` y se activa por región con `DREG`. Con `DREG=[]` la app debe comportarse como antes.
- Las fechas en pruebas se simulan (por ejemplo, `page.clock` de Playwright).
- Comprueba a 360 px de ancho, en modo claro y oscuro, sin desbordamiento horizontal.

## Reglas de contenido

Español de España. Sin caras ni datos de menores. Partidos políticos inventados. Adicciones con enfoque de reducción de riesgos. Alimentación sin calorías ni peso. Solo personajes y recursos propios o con licencia registrada en [docs/recursos-externos.csv](docs/recursos-externos.csv). Estudios citados con autor y año.

## Qué necesita aprobación de Raúl

Reglas de progresión o recompensas, esquemas de datos, navegación, identidad artística, regiones, personajes, eliminación de contenidos y mecánicas nuevas importantes. Si tu tarea lo requiere, detente y propón el cambio en el PR sin implementarlo.

# Propiedad intelectual

> Registro de autoría, licencias y riesgos. No presupone que un material pueda usarse: cada recurso tiene procedencia, licencia y estado de verificación en [../recursos-externos.csv](../recursos-externos.csv). Esto es una organización documental, no asesoramiento jurídico.

## Titularidad

- Autoría declarada: Raúl Cañas. Aviso en la app, en `README.md` y en [`LICENSE`](../../LICENSE): «© 2026 Raúl Cañas. Todos los derechos reservados».
- **Titularidad exclusiva: no verificada jurídicamente.** Queda pendiente confirmar el origen de los iconos PNG, valorar el efecto de la asistencia de IA y comprobar si alguna norma laboral o del centro afecta a una obra creada por un docente (consultar con un profesional antes de cualquier uso comercial).
- El repositorio es **público**: cualquiera puede ver y copiar el código, aunque no tenga permiso legal para reutilizarlo. Ver DOC-01 y DOC-02 en [../README.md](../README.md#decisiones-que-necesitan-confirmacion).
- Hecho (DOC-02): [`LICENSE`](../../LICENSE) con derechos reservados y [`THIRD_PARTY_NOTICES.md`](../../THIRD_PARTY_NOTICES.md) separando lo propio de lo de terceros.

## Inventario por tipo

| Tipo | Origen declarado | Estado | Riesgo |
|---|---|---|---|
| Código de la app | Propio, con asistencia de IA (Claude) | Pendiente de confirmar por el autor | Bajo |
| Textos, lecturas, escenas y banco de preguntas | Redactados para Brújula; resumen y citan estudios de terceros | Pendiente de revisión humana | Bajo si no se copian frases literales de fuentes |
| Arte pixel (iconos, personajes, mapa, trofeos) | Propio, dibujado en código | Pendiente de confirmar | Revisar que ningún personaje recuerde a uno protegido |
| Música y sonidos | Generados por código (Web Audio), melodías propias | Pendiente de confirmar | Revisar que ninguna melodía reproduzca una obra conocida |
| Iconos de la PWA (PNG) | Por confirmar | **Sin verificar** | Confirmar cómo se crearon |
| Tipografías (6 familias) | Google Fonts vía Fontsource 5.3.0, SIL Open Font License 1.1 | **Verificado** el 18/10/2026: los 30 archivos son idénticos a los del paquete oficial; aviso completo por familia en `fonts/OFL-*.txt` | Bajo. Falta llevar los avisos a `main` (autorización) |
| Enlaces externos (≈160) | Terceros | **Sin verificar** | Bajo (no se reproduce contenido), pero hay que revisar que funcionan y son adecuados |
| Nombres y marcas citados (TED, Diary of a CEO, autores, organismos) | Terceros | Uso nominativo en citas y enlaces | Bajo; evitar logotipos |

## Reglas

1. Solo personajes y diseños propios. Nada que recuerde a personajes protegidos, aunque se cambien colores, poses o estilo.
2. No se copian textos literales de libros, artículos ni canciones. Se resume con palabras propias y se cita.
3. Cualquier recurso de terceros (imagen, sonido, fuente, fragmento de código) se registra antes de usarlo, con licencia y prueba de la licencia guardada en Drive (`05 Legal/Licencias`).
4. Los recursos con licencia dudosa no se usan hasta verificarlos.
5. La asistencia de IA en el desarrollo se registra en los commits («Co-Authored-By»).

## Tareas pendientes

| Prioridad | Tarea | Quién |
|---|---|---|
| — | ~~Avisos de copyright de las 6 tipografías~~ | Hecho en `desarrollo` (18/10); pendiente copiarlos a `main` |
| A | Confirmar el origen de los iconos PNG de la PWA | Raúl |
| B | Valorar con un profesional la titularidad (IA, relación laboral) antes de cualquier uso fuera del aula | Raúl |
| B | Revisión de que ningún personaje o melodía se parezca a obras protegidas | Raúl |
| C | Valorar el registro de la obra en el Registro de la Propiedad Intelectual | Raúl |

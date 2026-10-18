# Propiedad intelectual

> Registro de autoría, licencias y riesgos. No presupone que un material pueda usarse: cada recurso tiene procedencia, licencia y estado de verificación en [../recursos-externos.csv](../recursos-externos.csv). Esto es una organización documental, no asesoramiento jurídico.

## Titularidad

- Autor y titular: Raúl Cañas. Aviso actual en la app y en `README.md`: «© 2026 Raúl Cañas. Todos los derechos reservados».
- El repositorio es **público**: cualquiera puede ver y copiar el código, aunque no tenga permiso legal para reutilizarlo. Ver DOC-01 y DOC-02 en [../README.md](../README.md#decisiones-que-necesitan-confirmacion).
- Pendiente de decidir: archivo `LICENSE` explícito (por ejemplo, «Todos los derechos reservados») y un aviso de terceros (`THIRD_PARTY_NOTICES`) con las licencias de las fuentes.

## Inventario por tipo

| Tipo | Origen declarado | Estado | Riesgo |
|---|---|---|---|
| Código de la app | Propio, con asistencia de IA (Claude) | Pendiente de confirmar por el autor | Bajo |
| Textos, lecturas, escenas y banco de preguntas | Redactados para Brújula; resumen y citan estudios de terceros | Pendiente de revisión humana | Bajo si no se copian frases literales de fuentes |
| Arte pixel (iconos, personajes, mapa, trofeos) | Propio, dibujado en código | Pendiente de confirmar | Revisar que ningún personaje recuerde a uno protegido |
| Música y sonidos | Generados por código (Web Audio), melodías propias | Pendiente de confirmar | Revisar que ninguna melodía reproduzca una obra conocida |
| Iconos de la PWA (PNG) | Por confirmar | **Sin verificar** | Confirmar cómo se crearon |
| Tipografías (6 familias) | Google Fonts, SIL Open Font License 1.1 | **Parcial**: `fonts/OFL.txt` solo contiene el aviso de Fredoka | La OFL exige conservar el aviso de copyright de cada familia: completar |
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
| A | Añadir a `fonts/OFL.txt` (o a archivos separados) el aviso de copyright de Silkscreen, Nunito Sans, Bricolage Grotesque, Quicksand y Pacifico | Claude prepara, Raúl aprueba |
| A | Confirmar el origen de los iconos PNG de la PWA | Raúl |
| B | Decidir `LICENSE` y aviso de terceros (DOC-02) | Raúl |
| B | Revisión de que ningún personaje o melodía se parezca a obras protegidas | Raúl |
| C | Valorar registro de la obra (Registro de la Propiedad Intelectual) antes de comercializar | Raúl |

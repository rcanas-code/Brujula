# Repositorio privado de desarrollo y público de publicación (DOC-01)

> Estudio de viabilidad del 18/10/2026. **Solo análisis: no se ha migrado nada.** Mientras tanto, el repositorio sigue público y no se sube nada confidencial ni estratégico.

## Qué hay publicado hoy (revisión del 18/10/2026)

Se revisaron todos los archivos de todas las ramas remotas y todo su historial (cada versión de cada archivo), buscando correos, nombres del centro, credenciales, teléfonos, enlaces privados y contenido estratégico.

| Hallazgo | Dónde | Valoración |
|---|---|---|
| Correo institucional de Raúl como valor por defecto del campo «Tu correo de profe» | `index.html` y `candidata/index.html` de `main`, `desarrollo` y la rama de documentación (código desde el 14/10) | Expone la relación con el centro. La función está desactivada. Propuesta en SEC-01 |
| El mismo correo como autor de 8 commits | Metadatos del historial | Visible en GitHub. Reescribir el historial es destructivo; propuesta: no reescribir y usar el correo «noreply» de GitHub en adelante |
| Mención a la estrategia de sostenibilidad (licencias educativas) | `VISION.md` y `DECISIONES.md` de la rama `docs/infraestructura`, publicada el 18/10 | Retirada de los documentos; queda en el historial de esa rama. Es una frase general |
| Correo del proyecto `hola.brujula.app@gmail.com` | Código | Público a propósito (sugerencias) |
| Teléfonos | Código | Líneas de ayuda públicas (Línia Verda, Teléfono de la Esperanza…) |
| Correo del DPD del Departament | `docs/legal/normativa.md` | Dirección institucional pública |
| Credenciales, tokens, datos de alumnos, enlaces de claude.ai o de Drive | — | No aparecen |

## Opciones

| | A. Todo público (actual) | B. Privado de desarrollo + público de publicación | C. Todo privado + otro alojamiento |
|---|---|---|---|
| GitHub Pages | Gratis | Gratis (en el público) | Pages privado requiere plan de pago; o Netlify, Cloudflare Pages… |
| Qué ve cualquiera | Código, documentación, pruebas, historial | Solo lo publicado: `index.html`, `candidata/`, fuentes, iconos, avisos legales | Nada salvo la web |
| Documentación estratégica | No se puede guardar | Se puede guardar en el privado | Se puede guardar |
| Codex y Claude | Acceso sencillo | Trabajan en el privado | Trabajan en el privado |
| Coste de mantenimiento | Ninguno | Un paso de publicación: copiar los archivos publicables al público (manual o con una acción de GitHub) | Configurar y vigilar otro servicio |
| Riesgo de exponer algo por error | Alto | Bajo: al público solo llega una lista cerrada de archivos | Bajo |
| Historial ya publicado | — | Sigue público en el repositorio actual salvo que se archive o se vacíe | Igual |

## Recomendación

**B**, cuando se cumpla cualquiera de estas condiciones: haya que guardar documentación del piloto o estratégica junto al código, entre un colaborador externo, o se presente el proyecto a terceros. Hasta entonces, A con las reglas actuales es suficiente.

Cómo se haría (cuando Raúl lo autorice):
1. Crear `rcanas-code/brujula-dev` **privado** e importar todo el historial (ramas y etiquetas).
2. En el actual `Brujula` (público) dejar solo lo publicable. Para no perder la URL de GitHub Pages, el público mantiene su nombre.
3. Publicar desde el privado con una lista cerrada de archivos (`index.html`, `candidata/`, `manifest.json`, iconos, `fonts/`, `LICENSE`, `THIRD_PARTY_NOTICES.md`, `README.md`).
4. Decidir qué hacer con el historial del público: conservarlo (más simple) o sustituir el repositorio por uno nuevo sin historial (la URL de Pages se conserva si el nombre es el mismo, pero se pierden estrellas, *issues* y enlaces a commits).

Coste estimado: una sesión de trabajo y una prueba de publicación en la candidata.

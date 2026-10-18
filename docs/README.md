# Documentación de Brújula

> Índice de la documentación permanente. Creada el 18/10/2026 en la rama `docs/infraestructura` para revisión. No cambia el funcionamiento de la app.

## Mapa

| Documento | Para qué sirve | Quién lo mantiene |
|---|---|---|
| [../VISION.md](../VISION.md) | Identidad, propósito y fundamentos | Raúl |
| [../DECISIONES.md](../DECISIONES.md) | Decisiones aprobadas, pendientes, en estudio y descartadas | Claude propone, Raúl aprueba |
| [../ESTADO.md](../ESTADO.md) | Versiones, funcionalidades, pendientes y problemas conocidos | Claude, al cerrar cada bloque |
| [../DISENO.md](../DISENO.md) | Universo gráfico, interfaz, personajes y regiones | Raúl y Claude |
| [../APRENDIZAJE.md](../APRENDIZAJE.md) | Modelo pedagógico y mecánicas educativas | Raúl y Claude |
| [../CLAUDE.md](../CLAUDE.md) | Instrucciones para Claude | Raúl |
| [../AGENTS.md](../AGENTS.md) | Instrucciones para Codex y otros agentes | Raúl |
| [legal/propiedad-intelectual.md](legal/propiedad-intelectual.md) | Autoría, licencias y riesgos | Raúl |
| [legal/normativa.md](legal/normativa.md) | Normas que hay que verificar | Raúl |
| [legal/privacidad.md](legal/privacidad.md) | Datos, almacenamiento y comunicaciones | Raúl, con el DPD |
| [accesibilidad.md](accesibilidad.md) | Estado y auditoría de accesibilidad | Claude |
| [bibliografia.md](bibliografia.md) | Fuentes citadas y su verificación | Claude |
| [recursos-externos.md](recursos-externos.md) y [recursos-externos.csv](recursos-externos.csv) | Procedencia, licencia y verificación de cada recurso | Claude prepara, Raúl verifica |
| [copias-de-seguridad.md](copias-de-seguridad.md) | Sistema de copias y restauración | Raúl |
| [drive/biblia-drive.md](drive/biblia-drive.md) | Organización de la Biblia en Google Drive y sincronización | Raúl |

## Fuentes de verdad

- **Repositorio:** documentos de fundamentos y código.
- **Google Drive:** archivos binarios, borradores en revisión, documentos privados del piloto y justificantes legales.
- **Proyecto de Claude «Autoconocimiento»:** copia de consulta para las conversaciones; si difiere, manda el repositorio.
- **claude.ai (documentos privados):** informes de trabajo; los que respaldan decisiones se exportan a Drive.

## Informes y comparativas

Enlaces privados de claude.ai (solo los ve Raúl con su cuenta):
- Especificación final del modelo D · entrega de la candidata · propuesta integrada · rediseño del aprendizaje
- Auditoría de contenidos y matriz de lecturas
- Revisión y rediseño de Hoy · armonización visual

Los enlaces concretos están en el registro del proyecto de Claude y no se copian aquí para no exponerlos en un repositorio público.

## Decisiones que necesitan confirmación

| ID | Decisión | Opciones | Recomendación |
|---|---|---|---|
| DOC-01 | Visibilidad del repositorio | **Público** (GitHub Pages gratis; todo lo subido es visible) · **Privado** (Pages requiere plan de pago u otro alojamiento) | Mantener público y no subir nada estratégico ni privado; lo comercial y lo del centro, a Drive |
| DOC-02 | Licencia del código y los contenidos | Archivo `LICENSE` «Todos los derechos reservados» + aviso de terceros · Licencia abierta para el código y reservada para contenidos · Sin cambios | `LICENSE` reservado + `THIRD_PARTY_NOTICES` con las fuentes |
| DOC-03 | Llevar al repositorio las herramientas y pruebas (hoy en espacio temporal) | Carpetas `tools/` y `tests/` en `desarrollo` · Guardarlas solo en Drive | En el repositorio, sin datos privados y con rutas relativas |
| DOC-04 | Fuente de verdad de las decisiones | `DECISIONES.md` manda y el proyecto de Claude es copia · Al revés | `DECISIONES.md` |
| DOC-05 | Dónde vive la documentación | Solo en `desarrollo` · También en `main` | Solo en `desarrollo`: en `main` GitHub Pages la publicaría |
| DOC-06 | Biblia en Drive y sincronización | Estructura propuesta + sincronización semanal automática · Manual | Estructura propuesta; sincronización semanal con tarea programada |
| DOC-07 | Copias de seguridad | Regla 3-2-1 con bundle semanal en Drive y protección de `main` | Sí |
| DOC-08 | Corregir `README.md` («14 áreas» → 19 regiones) y enlazar la documentación | Ahora en `desarrollo` · Al publicar la siguiente versión estable | En `desarrollo` ahora; en `main`, con la próxima versión estable |
| DOC-09 | Service worker para que la app funcione sin conexión | Implementar (cambio técnico, requiere pruebas) · Dejarlo | Implementar antes del piloto, con tu aprobación |
| DOC-10 | Publicar esta rama en GitHub para revisarla como PR | Push de `docs/infraestructura` y PR contra `desarrollo` · Revisar primero el paquete | Revisar el paquete y, si te parece bien, PR |

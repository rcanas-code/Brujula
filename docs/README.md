# Documentación de Brújula

> Índice de la documentación permanente. Creada el 18/10/2026. No cambia el funcionamiento de la app. Todo lo que hay aquí es público: lo privado o estratégico vive en Drive.

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
| [../LICENSE](../LICENSE) y [../THIRD_PARTY_NOTICES.md](../THIRD_PARTY_NOTICES.md) | Derechos reservados y avisos de terceros | Raúl |
| [../tests/README.md](../tests/README.md) y [../tools/README.md](../tools/README.md) | Pruebas automatizadas y herramientas (rama `tools/pruebas` hasta fusionarla) | Claude |
| [drive/biblia-drive.md](drive/biblia-drive.md) | Organización de la Biblia en Google Drive y sincronización | Raúl |

## Qué va dónde

| Tipo de información | Dónde |
|---|---|
| Decidido (aprobado, pendiente, en estudio, descartado) | [DECISIONES.md](../DECISIONES.md) |
| Implementado | [ESTADO.md](../ESTADO.md), tabla de funcionalidades |
| Probado (automático o en móvil real) | [ESTADO.md](../ESTADO.md), columnas de verificación; las pruebas, en [tests/](../tests/README.md) |
| Pendiente de hacer | [ESTADO.md](../ESTADO.md), «Pendiente»; las decisiones por tomar, en [DECISIONES.md](../DECISIONES.md) |
| Cómo trabajan Claude y Codex | [CLAUDE.md](../CLAUDE.md) y [AGENTS.md](../AGENTS.md); si chocan, la más restrictiva |

Cada dato vive en un solo documento; los demás lo enlazan, no lo copian.

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

## Decisiones de infraestructura

DOC-01 a DOC-10 se aprobaron el 18/10/2026 con condiciones. Están en [DECISIONES.md](../DECISIONES.md#infraestructura-documental-aprobadas-el-18102026), que es la fuente oficial.

## Estudios y análisis

| Documento | Estado |
|---|---|
| [repositorios.md](repositorios.md) | Viabilidad de separar repositorio privado de desarrollo y público de publicación (DOC-01). Solo análisis |
| [sin-conexion.md](sin-conexion.md) | Service worker: estrategia, actualizaciones y riesgos (DOC-09). Solo análisis y prototipo |
| [pendientes-de-consolidar.md](pendientes-de-consolidar.md) | Conceptos de Raúl aún sin especificación en el repositorio: modo demostración y Observatorio del Tiempo |

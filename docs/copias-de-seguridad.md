# Copias de seguridad

> Propuesta del 18/10/2026. Pendiente de confirmación (DOC-07).

## Situación actual

| Qué | Dónde está | Riesgo |
|---|---|---|
| Código y documentación | GitHub (`rcanas-code/Brujula`), ramas `main` y `desarrollo` | Una sola copia remota; un borrado o un push forzado afecta a todo |
| Herramientas de compilación y pruebas automatizadas | Espacio temporal de las sesiones de Claude | **Se pierden** cuando termina la sesión (ver DOC-03) |
| Informes y propuestas | Documentos privados en claude.ai | Dependen de la cuenta; sin exportación periódica |
| Registro de decisiones | Proyecto de Claude «Autoconocimiento» y ahora `DECISIONES.md` | Duplicado sin sincronización automática |
| Partidas de los alumnos | `localStorage` de cada móvil; código de copia «BRUJULA-…» | Responsabilidad del alumno; las fotos del álbum no se copian |

## Propuesta: regla 3-2-1

Tres copias, en dos soportes distintos, una fuera de GitHub.

1. **GitHub** (copia de trabajo). Proteger `main` contra pushes forzados y borrados (ajuste de GitHub: *Branch protection rules*). Etiqueta en cada publicación: `estable-AAAAMMDD` y `candidata-AAAAMMDD`.
2. **Clon local en el ordenador de Raúl**, actualizado tras cada bloque de trabajo (`git pull` en todas las ramas).
3. **Paquete semanal en Google Drive**: `git bundle create brujula-AAAAMMDD.bundle --all` guardado en `06 Copias de seguridad/`. Un *bundle* es un único archivo con todo el historial y todas las ramas; se restaura con `git clone brujula-AAAAMMDD.bundle`. Conservar los 8 últimos y uno por mes.

Además:
- Antes de cada cambio importante: etiqueta `pre-<tema>` (ya se hizo con `pre-modeloD`).
- Exportar a PDF los informes de claude.ai que respaldan decisiones y guardarlos en `07 Informes/`.
- No guardar nunca en Drive ni en GitHub copias de partidas reales de alumnos.

## Automatización posible

- Una tarea programada de Claude puede generar el *bundle* semanal y subirlo a Drive con el conector de Google Drive de la cuenta de Raúl, sin credenciales en el repositorio. Requiere tu autorización (DOC-06).
- Alternativa sin IA: un recordatorio semanal y dos comandos en el ordenador.

## Restauración (prueba recomendada una vez al trimestre)

1. Descargar el último *bundle* de Drive.
2. `git clone brujula-AAAAMMDD.bundle brujula-restaurada`.
3. Abrir `index.html` en el navegador y comprobar que carga.
4. Apuntar la fecha de la prueba en [../ESTADO.md](../ESTADO.md).

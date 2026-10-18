# Biblia de Brújula en Google Drive

> Organización aprobada (DOC-06, 18/10/2026) con sincronización supervisada al principio. No contiene credenciales: el acceso a Drive se hace desde la cuenta de Raúl, nunca con claves guardadas en el repositorio.
>
> **Cuenta decidida (DRV-01, 19/10/2026): la cuenta personal de Raúl.** El Drive conectado hoy a Claude es el del instituto: ahí **no se sube nada**. La estructura queda preparada en este documento y se crea en cuanto la cuenta personal esté conectada en claude.ai (conectores).

## Reparto de papeles

| Contenido | Fuente de verdad | Por qué |
|---|---|---|
| Visión, decisiones, estado, diseño, aprendizaje, instrucciones para agentes | **Repositorio** (`*.md`) | Los agentes de programación (Claude, Codex) los leen al trabajar; el historial de cambios queda en git |
| Arte, bocetos, capturas, paletas, audio de referencia | **Drive** | Son archivos binarios y de trabajo |
| Borradores de lecturas y revisión del banco de preguntas | **Drive** (Docs y Sheets) | Se comentan y revisan mejor allí; lo aprobado se pasa al repositorio |
| Documentos del piloto, del centro y del DPD | **Drive, solo privado** | Pueden contener datos personales: nunca van al repositorio |
| Justificantes de licencias y verificaciones | **Drive, privado** | Pruebas documentales |
| Copias de seguridad del repositorio | **Drive** | Copia fuera de GitHub |

## Estructura de carpetas

```
Brújula · Biblia/
├── 00 Léeme                       ← índice y reglas de sincronización (este documento)
├── 01 Fundamentos (copia)         ← exportación de VISION, DECISIONES, ESTADO, DISENO, APRENDIZAJE
├── 02 Diseño
│   ├── Personajes y guardianes
│   ├── Regiones y mapa
│   ├── Interfaz y capturas
│   └── Referencias (solo con su licencia)
├── 03 Aprendizaje y contenidos
│   ├── Lecturas en revisión
│   ├── Banco de preguntas (Sheets)
│   └── Bibliografía (PDF de artículos con licencia o enlaces)
├── 04 Piloto (PRIVADO)
│   ├── Centro y dirección
│   ├── DPD y consentimientos
│   └── Mediciones (anonimizadas)
├── 05 Legal (PRIVADO)
│   ├── Licencias          ← justificantes nombrados con el id del registro (R001…)
│   ├── Normativa          ← fuentes consultadas y fecha
│   └── Propiedad intelectual
├── 06 Copias de seguridad ← bundles semanales del repositorio
├── 07 Informes            ← PDF de los informes de claude.ai
└── 99 Archivo
```

Las carpetas `04` y `05` no se comparten con nadie salvo indicación expresa de Raúl.

## Sincronización

| Dirección | Qué | Cómo | Frecuencia |
|---|---|---|---|
| Repositorio → Drive | Los documentos `*.md` de fundamentos | Exportación como Google Docs de solo lectura en `01 Fundamentos (copia)`, con la fecha y el commit en la primera línea | Al cerrar cada bloque o semanal |
| Drive → Repositorio | Contenido aprobado (lecturas, preguntas, decisiones) | Se transcribe en una rama y se revisa en un PR; nunca se copia automáticamente | Cuando se aprueba |
| Repositorio → Drive | `git bundle` completo | Manual o tarea programada | Semanal |
| claude.ai → Drive | Informes que respaldan decisiones | Exportar a PDF | Al aprobarse |

Reglas:
1. Nadie edita las copias de `01`: se cambian en el repositorio y se vuelven a exportar.
2. Cada documento de Drive que derive del repositorio indica su origen: «Copia de `DECISIONES.md`, commit `abc1234`, 18/10/2026».
3. Si Drive y el repositorio no coinciden, manda el repositorio para los fundamentos y Drive para lo privado y lo binario.
4. Nada de `04` ni `05` se menciona con datos concretos en el repositorio: solo «consulta al DPD hecha el …».

## Cuenta de Drive

| Opción | Ventajas | Inconvenientes |
|---|---|---|
| **Cuenta personal de Raúl** (recomendada para la Biblia) | El proyecto queda bajo control personal; coherente con la autoría declarada | Hay que conectar esa cuenta a Claude (en claude.ai, conectores) |
| Cuenta institucional | Ya conectada; adecuada para lo que el centro deba custodiar | Los archivos dependen del Departament; mezcla una obra personal con la cuenta de trabajo |
| Mixta | Biblia en la personal; solo `04 Piloto` en la institucional, si el DPD lo pide | Dos sitios que mantener |

## Primeros pasos (cuando esté elegida la cuenta)

1. Crear la estructura de carpetas (con el conector, supervisado).
   - Añadir en `02 Diseño` la carpeta `Especificaciones de origen` para las conversaciones de ChatGPT sobre el modo demostración y el Observatorio del Tiempo ([../pendientes-de-consolidar.md](../pendientes-de-consolidar.md)).
2. Exportar los siete documentos de fundamentos a `01`.
3. Subir el primer bundle a `06`.
4. Subir a `99 Archivo` el paquete de scripts exploratorios (no van al repositorio público).
5. Sincronización supervisada: Claude prepara la exportación y Raúl la confirma. Más adelante, tarea programada para las exportaciones técnicas.

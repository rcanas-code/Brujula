# Biblia de Brújula en Google Drive

> Propuesta de organización y sincronización. Pendiente de confirmación (DOC-06). No contiene credenciales: el acceso a Drive se hace desde la cuenta de Raúl (en la web o con el conector de Google Drive de Claude), nunca con claves guardadas en el repositorio.

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

## Primeros pasos propuestos (requieren tu confirmación)

1. Crear la estructura de carpetas en tu Drive (puedo hacerlo con el conector).
2. Exportar los siete documentos de fundamentos a `01`.
3. Subir el primer bundle a `06`.
4. Programar la sincronización semanal (`01` y `06`) como tarea programada, o dejarla manual.

# Registro de recursos externos

El registro vive en [recursos-externos.csv](recursos-externos.csv) para poder abrirlo en una hoja de cálculo (Google Sheets o Excel) y filtrarlo.

## Columnas

| Columna | Contenido |
|---|---|
| `id` | Identificador estable (`R001`…) |
| `tipo` | Tipografía, Arte gráfico, Audio, Imagen, Texto, Código, Vídeo, Web, Organismo oficial |
| `recurso` | Nombre o dominio |
| `url_o_ruta` | Enlace o ruta en el repositorio |
| `usado_en` | Lectura o parte de la app donde aparece (aproximado en la extracción automática) |
| `titular` | Autor o propietario |
| `licencia_o_condiciones` | Licencia o condiciones de uso |
| `uso_en_brujula` | Incluido en la app, enlazado, integrado |
| `estado_verificacion` | Sin verificar · Parcial · Verificado · Retirar |
| `fecha_verificacion` | Fecha de la última comprobación |
| `notas` | Observaciones |

## Estado inicial (18/10/2026)

- 174 filas: 6 tipografías, 5 grupos de recursos propios y 163 enlaces externos (64 vídeos, 16 organismos oficiales, 83 webs).
- Extraído automáticamente de `index.html`: la columna `usado_en` es aproximada.
- **Nada está verificado todavía.** Las tipografías tienen verificación parcial (falta el aviso de copyright de 5 familias).

## Reglas

1. Ningún recurso nuevo entra en la app sin fila en el registro.
2. «Verificado» significa: el enlace funciona, el contenido es adecuado para la edad y el tema, y la licencia permite el uso que hacemos.
3. Los justificantes (captura de la licencia, correo de permiso) se guardan en Drive, `05 Legal/Licencias`, con el `id` del recurso en el nombre del archivo.
4. Antes de cada publicación para alumnos, se revisan al menos los enlaces de las regiones que cambian.

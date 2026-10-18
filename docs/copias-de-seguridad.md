# Copias de seguridad

> Sistema 3-2-1 aprobado (DOC-07, 18/10/2026): tres copias, en dos soportes, una fuera de GitHub. Nunca se sobrescribe una copia anterior: cada copia lleva fecha en el nombre y las etiquetas no se mueven.

## Copias que existen (18/10/2026)

| # | Copia | Dónde | Qué contiene | Estado |
|---|---|---|---|---|
| 1 | Repositorio | GitHub `rcanas-code/Brujula` | Todas las ramas y etiquetas | Existe |
| 1a | Etiquetas de versión | GitHub | `estable-v200` (95f4145, alumnos) · `candidata-2026-10-18` (d139746) · `desarrollo-2026-10-18` (7b412b1) · `pre-modeloD` (24b8fcf) · `v197-antes-de-lanzamiento` (8e6007f) · `pre-gamificacion` (2a2c116) | Publicadas el 18/10 |
| 1b | Ramas de copia | GitHub | `v200-publicada`, `v197-estable`, `copia-pre-gamificacion` | Ya existían |
| 2 | Bundle de git | Archivo `brujula-20261018.bundle` entregado a Raúl en la conversación de Claude, con su suma SHA-256 | Todo el historial, todas las ramas y etiquetas | **Restauración comprobada** (ver abajo). Pasa a ser copia local cuando Raúl lo descargue a su ordenador |
| 3 | Copia externa (Drive) | — | Bundle + paquetes de trabajo | **Pendiente**: el Drive conectado es la cuenta institucional; falta elegir cuenta (ver [drive/biblia-drive.md](drive/biblia-drive.md)) |
| — | Paquetes de trabajo | Entregados a Raúl en la conversación | `brujula-scripts-exploratorios-20261018.tar.gz` (≈330 scripts exploratorios y parches de versiones) · `brujula-trabajo-modeloD-20261018.tar.gz` (fuentes del modelo D, especificación, registro y copias previas al modelo D) | Privados: no van al repositorio público |

Mientras la copia 3 no exista, la regla 3-2-1 **no está completa**: hay GitHub y el bundle descargable.

## Prueba de restauración del bundle (18/10/2026)

1. `git bundle verify brujula-20261018.bundle` → correcto.
2. `git clone brujula-20261018.bundle restaurada` y comprobación de que están todas las ramas y etiquetas.
3. `index.html` de la etiqueta `estable-v200` idéntico al publicado en `main`.
4. Batería de pruebas ejecutada desde la copia restaurada (rama `tools/pruebas`).

El resultado concreto de cada paso se anota en el informe de entrega del 18/10/2026.

## Cómo restaurar

```bash
git clone brujula-AAAAMMDD.bundle brujula-restaurada
cd brujula-restaurada
git branch -a          # todas las ramas
git tag                # todas las etiquetas
git remote set-url origin https://github.com/rcanas-code/Brujula.git   # si hay que volver a publicar
```

Para recuperar solo la versión de los alumnos: `git show estable-v200:index.html > index.html`.

## Rutina

- **Antes de cada cambio importante:** etiqueta `pre-<tema>`.
- **En cada publicación:** etiqueta `estable-AAAAMMDD` o `candidata-AAAAMMDD`. Las etiquetas no se mueven ni se borran.
- **Al cerrar cada bloque de trabajo (supervisado):** nuevo bundle con fecha, verificación y subida a Drive. Conservar todos los de los últimos dos meses y uno por mes después.
- **Una vez al trimestre:** prueba de restauración completa.
- **Recomendado en GitHub (Raúl):** proteger `main` y `desarrollo` (*Branch protection rules*: sin push forzado ni borrado).
- Nunca se guardan copias de partidas reales de alumnos ni en GitHub ni en Drive.

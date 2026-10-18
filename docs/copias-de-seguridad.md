# Copias de seguridad

> Sistema 3-2-1 aprobado (DOC-07, 18/10/2026): tres copias, en dos soportes, una fuera de GitHub. Nunca se sobrescribe una copia anterior: cada copia lleva fecha en el nombre y las etiquetas no se mueven.

## Copias que existen (18/10/2026)

| # | Copia | Dónde | Qué contiene | Estado |
|---|---|---|---|---|
| 1 | Repositorio | GitHub `rcanas-code/Brujula` | Todas las ramas (sin etiquetas, ver 1b) | Existe |
| 1a | Ramas de copia | GitHub | `v200-publicada` (95f4145, alumnos) · `v197-estable` (8e6007f) · `copia-pre-gamificacion` (2a2c116) · **nuevas el 18/10:** `copia/candidata-2026-10-18` (d139746) · `copia/desarrollo-2026-10-18` (7b412b1) · `copia/pre-modeloD` (24b8fcf) | Existen |
| 1b | Etiquetas de versión | Dentro del bundle (copia 2) | `estable-v200` · `candidata-2026-10-18` · `desarrollo-2026-10-18` · `pre-modeloD` · `v197-antes-de-lanzamiento` · `pre-gamificacion` | **No están en GitHub**: el entorno de Claude no permite subir etiquetas (error 403). Raúl puede subirlas desde su ordenador con `git push origin --tags` tras restaurar el bundle. Mientras, las ramas `copia/…` cubren los mismos puntos |
| 2 | Bundle de git | Archivo `brujula-20261018.bundle` (2,9 MB) entregado a Raúl en la conversación de Claude, con `SHA256SUMS.txt` | Todo el historial, las 11 ramas de GitHub y las 6 etiquetas | **Restauración comprobada** (ver abajo). Pasa a ser copia local cuando Raúl lo descargue a su ordenador |
| 3 | Copia externa (Drive) | — | Bundle + paquetes de trabajo | **Pendiente**: el Drive conectado es la cuenta institucional; falta elegir cuenta (ver [drive/biblia-drive.md](drive/biblia-drive.md)) |
| — | Paquetes de trabajo | Entregados a Raúl en la conversación | `brujula-scripts-exploratorios-20261018.tar.gz` (≈330 scripts exploratorios y parches de versiones) · `brujula-trabajo-modeloD-20261018.tar.gz` (fuentes del modelo D, especificación, registro y copias previas al modelo D) | Privados: no van al repositorio público |

Mientras la copia 3 no exista, la regla 3-2-1 **no está completa**: hay GitHub y el bundle descargable.

## Prueba de restauración del bundle (18/10/2026)

| Paso | Resultado |
|---|---|
| `git bundle verify brujula-20261018.bundle` | Correcto |
| `git clone` del bundle + `git fetch origin '+refs/heads/*:refs/remotes/origin/*'` | 11 ramas y 6 etiquetas recuperadas |
| `index.html` de `estable-v200` frente al publicado en `main` | Idénticos |
| Pruebas desde la copia restaurada (`tools/pruebas`): `dtest`, `dmig`, `migr`, `bkrt`, `hoyf` | Todas correctas (`dtest` 50/50, `dmig` 16/16) |

## Cómo restaurar

```bash
git clone brujula-AAAAMMDD.bundle brujula-restaurada
cd brujula-restaurada
git fetch origin '+refs/heads/*:refs/remotes/origin/*'   # trae todas las ramas del bundle
git branch -a          # todas las ramas
git tag                # todas las etiquetas
git remote set-url origin https://github.com/rcanas-code/Brujula.git   # si hay que volver a publicar
```

Para recuperar solo la versión de los alumnos: `git show estable-v200:index.html > index.html`.

## Rutina

- **Antes de cada cambio importante:** etiqueta `pre-<tema>`.
- **En cada publicación:** etiqueta `estable-AAAAMMDD` o `candidata-AAAAMMDD` y rama `copia/…` equivalente en GitHub (mientras no se puedan subir etiquetas desde Claude). Ni etiquetas ni ramas de copia se mueven o se borran.
- **Cómo se genera el bundle:** desde un clon espejo de GitHub más las etiquetas locales (`git clone --mirror` + `git fetch <local> 'refs/tags/*:refs/tags/*'` + `git bundle create … --all`), para que incluya todas las ramas remotas.
- **Al cerrar cada bloque de trabajo (supervisado):** nuevo bundle con fecha, verificación y subida a Drive. Conservar todos los de los últimos dos meses y uno por mes después.
- **Una vez al trimestre:** prueba de restauración completa.
- **Recomendado en GitHub (Raúl):** proteger `main` y `desarrollo` (*Branch protection rules*: sin push forzado ni borrado).
- Nunca se guardan copias de partidas reales de alumnos ni en GitHub ni en Drive.

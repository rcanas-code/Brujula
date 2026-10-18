# Avisos de terceros

Brújula incluye o enlaza los siguientes elementos que **no** son obra propia. Los elementos propios están cubiertos por [LICENSE](LICENSE).

## 1. Elementos de terceros incluidos en la aplicación

### Tipografías (SIL Open Font License 1.1)

Las seis familias se sirven desde `fonts/` en formato WOFF2. Se ha verificado (18/10/2026) que los 30 archivos son idénticos byte a byte a los del paquete Fontsource 5.3.0 de cada familia, que las distribuye desde Google Fonts con licencia OFL-1.1. El texto completo de la licencia y el aviso de copyright de cada familia acompañan a las fuentes.

| Familia | Aviso de copyright | Licencia |
|---|---|---|
| Silkscreen | Copyright 2001 The Silkscreen Project Authors (https://github.com/googlefonts/silkscreen) | [fonts/OFL-silkscreen.txt](fonts/OFL-silkscreen.txt) |
| Nunito Sans | Copyright 2016 The Nunito Sans Project Authors (https://github.com/Fonthausen/NunitoSans) | [fonts/OFL-nunito-sans.txt](fonts/OFL-nunito-sans.txt) |
| Bricolage Grotesque | Copyright 2022 The Bricolage Grotesque Project Authors (https://github.com/ateliertriay/bricolage) | [fonts/OFL-bricolage-grotesque.txt](fonts/OFL-bricolage-grotesque.txt) |
| Fredoka | Copyright 2016 The Fredoka Project Authors (https://github.com/hafontia/Fredoka-One) | [fonts/OFL-fredoka.txt](fonts/OFL-fredoka.txt) |
| Quicksand | Copyright 2019 The Quicksand Project Authors (https://github.com/andrew-paglinawan/QuicksandFamily.git), con nombre de fuente reservado «Quicksand» | [fonts/OFL-quicksand.txt](fonts/OFL-quicksand.txt) |
| Pacifico | Copyright 2018 The Pacifico Project Authors (https://github.com/googlefonts/Pacifico) | [fonts/OFL-pacifico.txt](fonts/OFL-pacifico.txt) |

`fonts/OFL.txt` es el aviso original, que solo cubría Fredoka; se conserva.

## 2. Contenido de terceros enlazado (no incluido)

La aplicación enlaza unas 160 páginas y vídeos externos (organismos oficiales, artículos, charlas TED, YouTube). No reproduce su contenido: solo enlaza y cita. Sus titulares conservan todos los derechos. La lista completa, con el estado de verificación de cada enlace, está en [docs/recursos-externos.csv](docs/recursos-externos.csv).

Los nombres de autores, organismos, programas y marcas se citan solo para identificar la fuente.

## 3. Herramientas de desarrollo (no se distribuyen con la app)

| Herramienta | Uso | Licencia |
|---|---|---|
| Playwright | Pruebas automatizadas (`tests/`) | Apache-2.0 |
| Chromium | Navegador de las pruebas | BSD y otras |

## 4. Asistencia de IA

Parte del código y de los textos se ha escrito con asistencia de IA (Claude, de Anthropic). Consta en los commits («Co-Authored-By»). Cómo afecta esto a la titularidad está pendiente de valorar (ver [docs/legal/propiedad-intelectual.md](docs/legal/propiedad-intelectual.md)).

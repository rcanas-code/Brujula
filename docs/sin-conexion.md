# Funcionamiento sin conexión (DOC-09)

> Análisis y prototipo del 18/10/2026. **Aprobado solo para análisis y preparación, no para integrar.** La prioridad es que la app funcione bien con conexión.

## Situación actual

- No hay *service worker*. La app solo abre sin conexión si el navegador conserva la página en su caché normal, algo que no está garantizado (sobre todo en iPhone).
- Una vez abierta, la app no necesita la red: los datos están en `localStorage` y las fotos en IndexedDB.
- El aviso de versión nueva descarga la página con `fetch(location.pathname+"?nc=…", {cache:"no-store"})` y compara `APP_V`.

## Prototipo

Rama `exp/sin-conexion` (desde `desarrollo` 7b412b1): `sw.js` y una línea de registro al final de `index.html`, marcada `SW-EXP`.

| Recurso | Estrategia | Motivo |
|---|---|---|
| Página (`index.html`, navegación) | **Primero la red**, con copia guardada si no hay red o tarda más de 4 s | Con conexión siempre se usa la versión publicada: evita que un alumno se quede con una versión vieja |
| Comprobación de versión (`?nc=`) | Solo red, nunca caché | Si respondiera la caché, el aviso de versión nueva no funcionaría |
| Fuentes, iconos, `manifest.json` | Primero la caché | No cambian |
| Enlaces externos, `/candidata/`, `/proto/` | No los toca | La candidata tendría su propio service worker y su propia caché |
| `localStorage`, IndexedDB | No los toca | Las partidas no pasan por el service worker |

Se desactiva añadiendo `?nosw` a la dirección. No se registra en `file://`.

### Resultado de la prueba (`tests/sw.js`, simulando GitHub Pages en local)

12/12 (prueba automatizada, Chromium; **no probado en iPhone**):
1. El service worker controla la página.
2. Sin conexión, la app abre.
3. Sin conexión, la partida está intacta.
4. Sin conexión, la comprobación de versión falla sin romper nada.
5. Con conexión, la versión nueva se carga en la primera recarga.
6. Tras actualizar, la partida está intacta.
7. La comprobación de versión va siempre a la red.
8. Sin conexión, se usa la última versión descargada.
9. La candidata no recibe la versión de los alumnos.
10. La caché no contiene nada de `/candidata/`.
11. Si el servidor no responde, abre la copia guardada.
12. Sin errores de página.

## Riesgos y cómo se cubren

| Riesgo | Gravedad | Mitigación |
|---|---|---|
| Un alumno sigue con una versión vieja después de publicar una nueva | Alta con «primero caché»; baja con «primero red» | Primero red para la página. Sin conexión, la versión vieja sigue funcionando hasta que vuelva la red |
| La versión vieja (desde caché) abre una partida ya migrada por una nueva | Media | Las migraciones son aditivas (P-05). Que la versión vieja conserve los campos que no conoce al guardar `S.g` es probable, pero **sin verificar**. **Pendiente:** prueba automatizada «v200 abre una partida migrada por el modelo D y la guarda sin perder campos» antes de integrar |
| El service worker de la raíz captura la candidata (mismo dominio) | Alta | Excluye `/candidata/` y `/proto/` por ruta (prueba 9 y 10) |
| Un service worker defectuoso deja la app rota en los móviles | Alta | Primero red para la página (si el servidor responde, manda la red); `?nosw` para saltarlo; plan de retirada: publicar un `sw.js` que se desregistra a sí mismo |
| iPhone: Safari puede borrar los datos de una web que no se ha usado en 7 días si no está añadida a la pantalla de inicio | Alta, **y ya existe hoy** con o sin service worker | Según la política de WebKit (verificar en el iPhone del piloto). Recomendar instalar la app en la pantalla de inicio y hacer copias con el código «BRUJULA-…» |
| La caché ocupa espacio | Baja | ≈2 MB de página + ≈0,5 MB de fuentes e iconos |

## Qué falta antes de integrar (requiere autorización)

1. Prueba en iPhone real (instalada en la pantalla de inicio y en Safari sin instalar).
2. Prueba de compatibilidad «versión vieja abre partida nueva» (ver tabla).
3. Decidir si se integra primero en la candidata (recomendado), con su propio `candidata/sw.js`.
4. Añadir `tests/sw.js` a la batería.

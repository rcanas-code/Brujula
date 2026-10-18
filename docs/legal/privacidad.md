# Privacidad

> Qué datos maneja Brújula, dónde se guardan y qué puede salir del dispositivo. Comprobado leyendo el código el 18/10/2026 (revisión estática); pendiente de validar con el DPD.

## Principios

Sin cuentas, sin servidores propios, sin analítica, sin cookies de terceros, sin IA de pago. Los datos del alumno se quedan en su dispositivo.

## Inventario de datos

| Dato | Dónde | ¿Sale del dispositivo? | En la copia de seguridad |
|---|---|---|---|
| Respuestas del test, resultados, ruta | `localStorage` (`brujula:answers`, `tests`, `route`) | No | Sí |
| Nombre o apodo elegido | `localStorage` (`brujula:name`) | No | Sí |
| Diario de retos, reflexiones, estado de ánimo | `localStorage` (`diario`, `mood`, `game.ref`) | No | Sí |
| Progreso del juego (XP, trofeos, modelo D, herramientas) | `localStorage` (`brujula:game`) | No | Sí |
| Propósito, experimentos, gratitud | `localStorage` (`purpose`, `grat`, …) | No | Sí |
| Fotos de los retos | IndexedDB (`brujula-album`) | No | **No** (avisado en la app) |
| Datos de clase (`?clase`): nombre de la clase y correo del profesor | `localStorage` (`cls`) | Solo si el alumno decide enviar un correo desde su propia app de correo | Sí |
| Ajustes de pantalla y sonido | `localStorage` (`cfg`, `font`) | No | Sí |

## Comunicaciones de red

| Qué | Destino | Datos que viajan |
|---|---|---|
| Cargar la app y comprobar si hay versión nueva | GitHub Pages (`rcanas-code.github.io`) | Los propios de cualquier visita web (dirección IP, navegador) que registra GitHub como alojamiento. **Consultar con el DPD** |
| Abrir un enlace externo (vídeos, webs) | El sitio enlazado | Lo que ese sitio recoja; el alumno sale de la app |
| Enviar sugerencias o errores | App de correo del alumno, a `hola.brujula.app@gmail.com` | Solo lo que el alumno escriba y envíe |
| Exportar al calendario | Archivo `.ics` local o Google Calendar si el alumno lo elige | Título y fecha del recordatorio |

Las tipografías son locales: no se cargan desde Google Fonts.

## Riesgos y tareas

| Prioridad | Tema | Acción |
|---|---|---|
| A | Alojamiento en GitHub Pages y registros de IP | Consultar con el DPD; valorar alojamiento alternativo para el uso institucional |
| A | Información en dos capas para el alumnado del piloto | Redactar texto breve (en la app) y completo (documento) |
| B | Dispositivos compartidos | Recordar que cualquiera con el móvil desbloqueado puede ver el diario |
| B | La candidata y la versión estable comparten almacenamiento en el mismo navegador | Probar la candidata desde el icono «Brújula prueba» |
| B | Código de copia de seguridad | Contiene el diario en texto codificado (no cifrado): avisar de que no se comparta |

## Reglas para el desarrollo

- Ninguna funcionalidad nueva puede enviar datos del alumno a terceros.
- Nada de analítica ni píxeles de seguimiento.
- Ningún dato real de alumnos en el repositorio, en pruebas ni en capturas.
- Los documentos del piloto con datos personales (consentimientos, listas, resultados) viven solo en Drive del centro o de Raúl, nunca en el repositorio.

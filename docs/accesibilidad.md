# Accesibilidad

> Referencia: WCAG 2.1 nivel AA. Estado a 18/10/2026. «Verificado» solo cuando hay prueba automatizada o en dispositivo real.

## Lo que ya hay

| Función | Dónde | Verificación |
|---|---|---|
| Tamaño de letra normal o grande | Yo → Pantalla y sonido | Prueba automatizada |
| Tema claro, oscuro o automático | Yo → Pantalla y sonido | Prueba automatizada (contraste corregido en modo automático) |
| 4 estilos de letra, incluido uno no pixel | Yo → Pantalla y sonido | Prueba automatizada |
| Velocidad de los diálogos o texto al instante | Yo → Pantalla y sonido | Revisión estática |
| Desactivar animaciones y sonido | Yo → Pantalla y sonido | Revisión estática |
| Sin desbordamiento horizontal a 360 px | Todas las vistas principales | Prueba automatizada |
| Botones con texto oscuro sobre coral | Sistema visual | Revisión visual |
| Etiquetas `aria` en partes de la interfaz (barra de experiencia, diálogos, iconos decorativos ocultos) | Varias vistas | Revisión estática parcial |

## Por auditar

| Prioridad | Criterio | Qué revisar |
|---|---|---|
| A | Lectores de pantalla (VoiceOver en iPhone) | Orden de lectura, nombres de botones, mapa del Mundo y preguntas |
| A | Tamaño de los objetivos táctiles (mín. 44×44 px) | Chips, botones pequeños, casillas de la semana |
| A | Contraste de texto (4,5:1) | Textos grises sobre fondos oscuros y en tarjetas de región |
| B | `prefers-reduced-motion` | Que respete el ajuste del sistema además del interruptor propio |
| B | El color no es el único indicador | Estados de ideas, trofeos, fugas de fuera/dentro en gráficas |
| B | Tiempos | Temporizadores sin penalización; la regla de 3 s del modelo D es un mínimo para que cuente la respuesta, no un límite |
| B | Teclado y foco | Navegación con teclado en escritorio; foco visible |
| C | Lectura fácil | Versiones más simples de las lecturas largas |

## Procedimiento

Antes de cada publicación para alumnos: pasada con VoiceOver en iPhone, revisión de contraste y objetivos táctiles en las pantallas cambiadas, y nota aquí con fecha.

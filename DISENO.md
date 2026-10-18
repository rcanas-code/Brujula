# Brújula · Diseño

> Universo gráfico, interfaz, personajes y referencias. Cambiar sustancialmente la identidad artística, las regiones o los personajes requiere aprobación de Raúl. Última revisión: 18/10/2026.

## Dirección artística

- **Pixel art de 8/16 bits**, dibujado en código (rejillas de caracteres convertidas en SVG `crispEdges`). No hay imágenes de terceros dentro de la app.
- Paleta base de los iconos (`PXP`): tinta `#1E2B38`, crema `#FFF7E0`, amarillo `#FFE27A`, oro `#F2B632`, coral `#FF6B3D`, morado `#9B7BFF`, azul `#4FA3E0`, verde `#5CC98A`, rojo `#E5484D`, marrón `#A0683A`, grises `#C9D3DC`/`#8A9AA8`, celeste `#9FDDF5`.
- Color de marca: coral `#FF6B3D` (fondo del icono); tema `#14222E`.
- Cada área tiene un tono propio (matiz HSL en `AREAS`) que tiñe tarjetas y regiones.
- Música y efectos: sintetizados en el navegador (Web Audio), sin archivos de audio. Cada región tiene su melodía generada.

## Sistema de interfaz (armonización del 18/10)

- Iconos pixel 12×12 propios para las 19 áreas, el menú inferior, las pestañas de lectura, Yo y las 7 herramientas.
- Botones: **coral** (primario, texto oscuro), **azul con borde crema** (secundario), **dorado** (especial).
- Paneles con el mismo borde y sombra; plegables con la misma flecha.
- Diálogos estilo RPG (cuadro con nombre del personaje y texto que se escribe).
- Menú inferior: Hoy · Mundo · Biblioteca · Yo, más Ayuda arriba.
- Tipografías locales: Silkscreen (pixel, títulos), Nunito Sans (texto), y como opción Bricolage Grotesque, Fredoka, Quicksand y Pacifico.
- Ancho de referencia: móvil de 360–390 px; sin desbordamiento horizontal.

## Personajes

| Personaje | Papel |
|---|---|
| La Cartógrafa | Guía inicial; entrega la carta de navegación |
| Don Fermín | Bibliotecario de la Biblioteca del Cartógrafo; recomienda lecturas |
| La Aguja | Ayudante que aparece como diálogo en la parte inferior |
| El Alter Ego | Antagonista de la historia en tres actos; aparece con los oros |
| Personaje del jugador | 23 tipos (chico y chica personalizables, gato, perro, robot, pirata, ninja, caballero, mago, astronauta, samurái, luchador, vikingo, detective, dinosaurio y otros), 5 etapas: Caminante, Explorador, Cartógrafo, Guía y Leyenda |

## Regiones y guardianes

| Clave | Área | Región | Guardián |
|---|---|---|---|
| SUE | Sueño | Valle de la Luna Dormida | Selenia, la polilla lunar |
| MOV | Movimiento | Cumbres del Viento | Ráfaga, el espíritu del viento |
| ALI | Alimentación | Huertos de la Abundancia | Raíz, la mandrágora parlante |
| EMO | Emociones | Lago de las Mareas | Marea, la medusa de los mil colores |
| PEN | Autoestima y cómo te hablas | Claro del Espejo | El Reflejo |
| HAB | Hábitos | Forja de los Pequeños Pasos | Chispa, la salamandra herrera |
| REL | Relaciones | Puente de los Aliados | Pontífice, el trol del puente |
| ATE | Atención y pantallas | Faro del Foco | El Ojo del Faro |
| EST | Estrés | Fuentes del Respiro | Respiro, la tortuga milenaria |
| VAL | Propósito y valores | Cima de la Brújula | Rosa, la de los vientos |
| DIN | Dinero | Puerto de las Mil Monedas | Cofre, el mímico |
| EDU | Estudio | Torre de los Sabios | Doña Lechuza |
| CRI | Criterio y convivencia | Bosque de los Espejismos | Velo, el camaleón |
| AUT | Autoconocimiento | Cueva del Eco | Eco, el murciélago |
| ANI | Animales | Selva de las Huellas | El Ciervo Blanco |
| CIU | Ciudadanía | Ágora de las Mil Voces | Portavoz, el loro |
| ADI | Adicciones | Pantano de los Anzuelos | Farol, el rape |
| STO | Estoicismo | Templo de la Calma | La Estatua |
| CIV | Civismo y día a día | Villa de los Buenos Vecinos | Don Caracol |

Las claves internas (`SUE`, `MOV`…) y el orden de `AREAS` no se cambian: el test inicial guarda las respuestas por posición (A-09).

## Trofeos

- Bronce: medalla con cinta · Plata: escudo con gemas · Oro: estatua sobre pedestal. El emblema de cada región va dentro.
- En las regiones del modelo D los trofeos antiguos se muestran como «trofeo histórico».

## Referencias y comparativas

Informes visuales de la armonización y de Hoy (privados, en claude.ai): ver [docs/README.md](docs/README.md#informes-y-comparativas).

## Reglas de arte

- Solo personajes y diseños propios. Nada que recuerde a personajes protegidos (Pokémon, Zelda, Sonic, etc.), aunque se cambien colores o poses.
- Cualquier recurso gráfico externo debe registrarse antes en [docs/recursos-externos.csv](docs/recursos-externos.csv) con su licencia.

# Conceptos pendientes de consolidar

> Conceptos que Raúl ha desarrollado fuera de este repositorio (en conversaciones con ChatGPT) y que todavía no tienen especificación aquí. **No se inventan decisiones ni se programan** hasta que Raúl aporte la especificación completa. Registrados el 18/10/2026.

| ID | Concepto | Lo que consta hoy | Decidido | Implementado | Verificado automáticamente | Probado por Raúl |
|---|---|---|---|---|---|---|
| DEMO-01 | Modo demostración | Raúl lo cita como prioridad junto al sistema bronce/plata/oro y las 3 regiones piloto | Pendiente de consolidar | No | No | No |
| OBS-01 | Observatorio del Tiempo | Concepto con finalidad narrativa y educativa; hay decisiones planteadas que aún no están en el repositorio. Se implementará después, sin sustituir las prioridades del piloto | Pendiente de consolidar | No | No | No |

No hay rastro de ninguno de los dos en el código, en el registro de decisiones del proyecto de Claude ni en las conversaciones con Claude (búsqueda del 18/10/2026).

## Cómo se consolidarán

1. Raúl entrega la especificación (texto o exportación de las conversaciones). Se guarda tal cual en Drive: `Brújula · Biblia/02 Diseño/Especificaciones de origen/`.
2. Claude la resume aquí separando lo **aprobado**, lo **pendiente** y lo **descartado**, sin añadir nada que no esté en el original, y señala contradicciones con las decisiones vigentes (19 regiones, modelo D, límites P-04, protección de partidas P-05).
3. Raúl confirma el resumen. Las decisiones pasan a [DECISIONES.md](../DECISIONES.md) con su ID.
4. Solo entonces se propone el diseño técnico y, con autorización, se implementa en la candidata.

## Preguntas que la especificación debería responder

Sirven para revisar que el material está completo, no para decidir ahora.

- Modo demostración: ¿para quién es (Raúl, un centro, una presentación)? ¿Usa una partida aparte que no toque la real? ¿Qué se puede adelantar (tiempo, trofeos, regiones)? ¿Se activa con un enlace, un gesto o un ajuste? ¿Debe estar en la versión de los alumnos?
- Observatorio del Tiempo: ¿qué lugar ocupa en el mundo (región 20, lugar fuera del mapa, pantalla)? ¿Qué enseña y con qué datos del propio alumno? ¿Qué decisiones están aprobadas y cuáles abiertas? ¿Encaja con el oro diferido del modelo D o lo sustituye en algo?

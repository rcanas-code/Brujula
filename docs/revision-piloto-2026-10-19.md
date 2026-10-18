# Revisión editorial del piloto · 19/10/2026

**Veredicto: cambios necesarios antes de dar el contenido por validado.** Revisión asistida de los 106 ítems del banco DB, las dos lecturas EDU-03/04 añadidas por D-CONTENT y el desafío de cálculo de Hábitos. Base: `desarrollo` c1efad2363842007aa881e8b21181b27082fa39e. No sustituye la revisión humana F-9 ni una validación psicométrica.

No se modifica `index.html`, las medallas, los plazos ni las partidas. Las propuestas se guardan con el texto original para poder revisarlas y aplicarlas después sin cambiar IDs. Esta rama es independiente de la demostración del PR #4.

## Resultado comprobable

- 106 IDs distintos: Atención 32, Estudio 32, Hábitos 42. Los 106 ítems tienen cuatro opciones y feedback por opción.
- 60 preguntas de guardián/repaso, 40 de oro y 6 integradoras.
- La respuesta correcta es estrictamente la más larga en 34/106 ítems (contando caracteres antes de §). No existe una regla universal de «elige la más larga». Esto no demuestra ausencia de pistas de estilo.
- La matriz al final distingue problemas concretos de ítems sin hallazgo individual. «Sin hallazgo» no significa evidencia científica íntegramente verificada.

## Hallazgos y decisiones propuestas

| ID | Prioridad | Problema | Corrección propuesta |
|---|---|---|---|
| PIL-01 | A | EDU-B-b2 explica el recuerdo al día siguiente como memoria a corto plazo que se vacía en días. | Sustituir el mecanismo por oportunidades de recuperación separadas, sin ese modelo temporal incorrecto. Fuente S1. |
| PIL-02 | A en dos ítems; B en derivados | ATE-A-b2/o2 convierten la mera presencia del móvil en una pérdida segura de atención. | Diferenciar presencia, uso y notificaciones; evitar prometer un efecto individual. Ward no encontró efecto en su medida de atención sostenida; S2 y S3. |
| PIL-03 | A | HAB-A-b1/b5 y HAB-B-b1 eligen una causa sin que el caso aporte tiempo disponible, malestar, responsabilidades o barreras. Incluso se añade «tiempo libre» solo en el feedback. | Incorporar al enunciado los datos necesarios o preguntar qué observar antes de concluir. No etiquetar falta de organización, disponibilidad o cansancio como evitación. |
| PIL-04 | A | EDU-A-b3/b5 convierten la dificultad en señal suficiente de aprendizaje. | Vincularla a un intento adecuado, comprobación, feedback y nueva recuperación. Esforzarse no garantiza acertar ni comprender. |
| PIL-05 | B | Explicación fluida = comprensión, atasco = falta de comprensión. | Tratar ambos como indicios; contrastar exactitud y considerar expresión/nervios. No retirar la autoexplicación. |
| PIL-06 | A en o3; B en otros | ATE-C-o3 generaliza que toda app gratuita vive del tiempo/datos. El feedback de b3 llama azar a un contenido recomendado. | Acotar al modelo publicitario descrito y decir «recompensa impredecible para quien usa», sin afirmar azar puro. |
| PIL-07 | B | Un horario fijo de mensajes en prácticas se presupone compatible con el puesto. | Añadir acuerdo con el tutor y canal de urgencias; valorar el contexto laboral. |
| PIL-08 | B | Casos de electricidad, farmacia, tintes y primeros auxilios pueden sugerir que recordar sustituye consultar procedimientos o práctica supervisada. | Acotar a aprendizaje en simulación y conservar comprobación de instrucciones; en EDU-I2 añadir práctica del procedimiento, no solo decir valores y porqués. |
| PIL-09 | B | Pedir ayuda o un recordatorio se presenta como incorrecto por depender de otra persona. | Reconocer apoyos legítimos; distinguir apoyo para aprender de sustituir siempre la práctica. |
| PIL-10 | B | Releer se describe como incapaz de producir recuerdo; resultados de grupos se convierten en pronósticos individuales. Repasar diariamente una semana se llama pérdida del espaciado. | «Suele», objetivo/intervalo explícito y tareas comparables. Una semana con sesiones separadas sí contiene espaciado. S4 respalda recuperación diferida, no que releer no enseñe nada. |
| PIL-11 | B | Procrastinación solo emocional, motivación fuera de control, hábito necesariamente diario, crecimiento obligatorio y entorno presentado como causal a partir de correlaciones. | Presentar mecanismos útiles sin exclusividad; adaptar frecuencia y dificultad al objetivo. Mantener claros los límites de cada estudio. |
| PIL-12 | B | ATE-A-b4/b5 atribuyen efectos y perfiles a estudios sin identificar bien medida y fuente. | Verificar referencia concreta o evaluar una decisión observable sin el dato no trazado. No convertir tiempo hasta retomar una tarea en tiempo universal para recuperar concentración. |
| PIL-13 | B | Opciones grotescas o moralizantes facilitan acertar por tono: castigos, cambiar de amigos, «porque eres vago». | Sustituir distractores por errores plausibles del concepto, sin hacer correcta solo la opción más amable o completa. |
| PIL-14 | B | Desafío HAB: martes se explica como resultado de planificar 8 horas a 3 horas/día. | El cálculo sin corrección acabaría el miércoles, no el martes. Cambiar solo ese feedback por «El martes solo acumularía 6 horas, menos de las 8 iniciales y de las 12 ajustadas». |

A = afecta a lo que se enseña o se exige como respuesta correcta; B = claridad, alcance, equidad o calidad de evaluación. Son prioridades de esta revisión, no una declaración de fallo funcional del juego.

## Lecturas EDU-03 y EDU-04

**EDU-03:** mantener recuperar y contrastar, pero identificar el caso de Eric como ejemplo ficticio. Dos temas distintos y una nota 5 frente a 8 no permiten atribuir causalmente la diferencia al método. La tercera pregunta comprueba recordar la anécdota, no aplicar la estrategia: sustituirla por un caso nuevo. La escena no debería garantizar qué se recordará mañana en una comparación individual sin controlar contenidos y práctica.

**EDU-04:** conservar autoexplicación y la advertencia de comprobar después; hacer esa comprobación explícita también en el resumen y el procedimiento. Cambiar «Si puedes explicar un tema sin mirar, lo has entendido» por «Explicarlo sin mirar y contrastarlo te ayuda a comprobar qué entiendes y qué necesitas revisar». Permitir explicación escrita/esquema además de oral, manteniendo el mismo objetivo. La pregunta sobre quién recordó más en el estudio debería comprobar transferencia, no memorizar un resultado de autores. La referencia de Fiorella y Mayer tiene DOI localizado, pero el texto completo no se pudo abrir; no se marca verificada la afirmación conjunta sobre recuerdo y comprensión a una semana.

## Primera tanda lista para revisar

`propuestas-preguntas-piloto.json` contiene ocho sustituciones completas: enunciado, cuatro opciones y feedback, junto al original. Cubren errores claros y ejemplos de cómo matizar; no resuelven todas las filas marcadas. No se incorporan automáticamente. Conservan el ID, tipo y posición fuente de la correcta. ATE-A-o2 evalúa interpretación de evidencia: si se adopta, actualizar también la lectura ATE-02 antes de exigir esa respuesta. Evitar enseñar un matiz solo en el examen.

## Fuentes contrastadas (consulta 19/10/2026)

- **S1. Cowan (2008)**. *What are the differences between long-term, short-term, and working memory?* DOI 10.1016/S0079-6123(07)00020-9. [Texto del autor en PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2657600/). Sustenta distinguir mantenimiento temporal inmediato de memoria a largo plazo; no explica memoria a corto plazo como un depósito de varios días.
- **S2. Ward, Duke, Gneezy y Bos (2017)**. *Brain Drain*. [Artículo original](https://doi.org/10.1086/691462). El experimento distingue capacidad cognitiva de atención sostenida; la segunda medida no mostró efecto. No generalizar a cada alumno.
- **S3. Hartanto y colaboradores (2024)**. *The effect of mere presence of smartphone on cognitive functions: A four-level meta-analysis*. [Repositorio de los autores](https://ink.library.smu.edu.sg/soss_research/3918/), DOI 10.1037/tmb0000123. El resumen de 33 estudios no encuentra efecto global significativo de mera presencia. No implica que uso o notificaciones carezcan de efecto.
- **S4. Roediger y Karpicke (2006)**. *Test-enhanced learning*. [Resumen original en PubMed](https://pubmed.ncbi.nlm.nih.gov/16507066/), DOI 10.1111/j.1467-9280.2006.01693.x. En sus experimentos, reestudiar favoreció la prueba inmediata de cinco minutos y recuperar favoreció las diferidas. Respalda el beneficio diferido, no una superioridad absoluta en cada tarea o persona.
- **Pendiente:** Fiorella y Mayer (2013), DOI 10.1016/j.cedpsych.2013.06.001. Referencia localizada; lectura íntegra no verificada en esta revisión.

No se declara verificada toda la bibliografía: referencias de Mark, multitarea/autopercepción, Hofmann, Fogg y el detalle de Fiorella requieren contraste específico si se conservan como preguntas sobre estudios.

## Matriz completa de 106 preguntas

Estados editoriales: **A** corregir antes del piloto; **B** revisar la redacción indicada; **S** sin hallazgo individual en esta pasada, pendiente de revisión docente y prueba con usuarios. No se han calculado dificultad, discriminación ni fiabilidad con alumnos.

| ID | Estado | Observación |
|---|---|---|
| ATE-A-b1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-A-b2 | A | PIL-02: presencia del móvil presentada como efecto universal y confusión con atención sostenida |
| ATE-A-b3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-A-b4 | B | PIL-12: falta fuente específica y alcance exacto de afirmación |
| ATE-A-b5 | B | PIL-12: falta fuente específica y alcance exacto de afirmación |
| ATE-A-b6 | B | PIL-02: matizar feedback sobre presencia y distinguir uso/interrupciones |
| ATE-A-o1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-A-o2 | A | PIL-02: presencia del móvil presentada como efecto universal y confusión con atención sostenida |
| ATE-A-o3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-A-o4 | B | PIL-02: matizar feedback sobre presencia y distinguir uso/interrupciones |
| ATE-B-b1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-B-b2 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-B-b3 | B | PIL-13: distractores extremos o feedback que invalida alternativas razonables |
| ATE-B-b4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-B-b5 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-B-b6 | B | PIL-13: distractores extremos o feedback que invalida alternativas razonables |
| ATE-B-o1 | B | PIL-07: pactar cambios de organización con tutor; no descalificar apoyos externos |
| ATE-B-o2 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-B-o3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-B-o4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-C-b1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-C-b2 | B | PIL-06: acotar publicidad; no equiparar algoritmo con azar puro |
| ATE-C-b3 | B | PIL-06: acotar publicidad; no equiparar algoritmo con azar puro |
| ATE-C-b4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-C-b5 | B | PIL-13: distractores extremos o feedback que invalida alternativas razonables |
| ATE-C-b6 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-C-o1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-C-o2 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-C-o3 | A | PIL-06: generalización de modelo comercial a todas las apps gratuitas |
| ATE-C-o4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-A-b1 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-A-b2 | B | PIL-08: delimitar simulación educativa y comprobación de protocolos; completar práctica |
| EDU-A-b3 | A | PIL-04: esfuerzo o dificultad no equivalen por sí solos a aprendizaje; PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-A-b4 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-A-b5 | A | PIL-04: esfuerzo o dificultad no equivalen por sí solos a aprendizaje |
| EDU-A-b6 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-A-o1 | B | PIL-08: delimitar simulación educativa y comprobación de protocolos; completar práctica |
| EDU-A-o2 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-A-o3 | B | PIL-08: delimitar simulación educativa y comprobación de protocolos; completar práctica |
| EDU-A-o4 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-B-b1 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-B-b2 | A | PIL-01: explicación errónea de memoria a corto plazo |
| EDU-B-b3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-B-b4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-B-b5 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-B-b6 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-B-o1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-B-o2 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-B-o3 | B | PIL-10: reducir absolutos y pronósticos individuales; no presentar intervalos únicos |
| EDU-B-o4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-C-b1 | B | PIL-05: atascarse al hablar no demuestra por sí solo falta de comprensión |
| EDU-C-b2 | B | PIL-13: distractores extremos o feedback que invalida alternativas razonables |
| EDU-C-b3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-C-b4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-C-b5 | B | PIL-13: distractores extremos o feedback que invalida alternativas razonables |
| EDU-C-b6 | B | PIL-05: añadir contraste de exactitud con fuente o solución |
| EDU-C-o1 | B | PIL-05: añadir contraste de exactitud con fuente o solución |
| EDU-C-o2 | B | PIL-05: atascarse al hablar no demuestra por sí solo falta de comprensión; PIL-08: delimitar simulación educativa y comprobación de protocolos; completar práctica |
| EDU-C-o3 | B | PIL-05: añadir contraste de exactitud con fuente o solución |
| EDU-C-o4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-A-b1 | A | PIL-03: conclusión causal sin datos suficientes en el enunciado |
| HAB-A-b2 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-A-b3 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-A-b4 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-A-b5 | A | PIL-03: conclusión causal sin datos suficientes en el enunciado |
| HAB-A-b6 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-A-o1 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-A-o2 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-A-o3 | B | PIL-09: pedir ayuda o usar recordatorios no es un fallo de autonomía |
| HAB-A-o4 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-B-b1 | A | PIL-03: conclusión causal sin datos suficientes en el enunciado |
| HAB-B-b2 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-B-b3 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-B-b4 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-B-b5 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-B-b6 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-B-o1 | B | PIL-07: pactar cambios de organización con tutor; no descalificar apoyos externos; PIL-09: pedir ayuda o usar recordatorios no es un fallo de autonomía |
| HAB-B-o2 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-B-o3 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-B-o4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-b1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-b2 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-b3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-b4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-b5 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-b6 | B | PIL-07: pactar cambios de organización con tutor; no descalificar apoyos externos; PIL-09: pedir ayuda o usar recordatorios no es un fallo de autonomía |
| HAB-C-o1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-o2 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-o3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-C-o4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-D-b1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-D-b2 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-D-b3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-D-b4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-D-b5 | B | PIL-13: distractores extremos o feedback que invalida alternativas razonables |
| HAB-D-b6 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-D-o1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-D-o2 | B | PIL-11: matizar exclusividad emocional, automatismo, generalización o causalidad |
| HAB-D-o3 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-D-o4 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| ATE-I1 | B | PIL-02: matizar feedback sobre presencia y distinguir uso/interrupciones; PIL-07: pactar cambios de organización con tutor; no descalificar apoyos externos |
| ATE-I2 | B | PIL-02: matizar feedback sobre presencia y distinguir uso/interrupciones |
| EDU-I1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| EDU-I2 | B | PIL-08: delimitar simulación educativa y comprobación de protocolos; completar práctica |
| HAB-I1 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |
| HAB-I2 | S | Concepto y respuesta distinguibles en el caso; no equivale a validación científica o psicométrica. |

Recuento: 9 A, 47 B, 50 S.

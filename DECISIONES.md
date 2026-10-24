# Brújula · Decisiones

> Fuente de verdad de las decisiones del proyecto. Antes de preguntar algo, se consulta aquí: lo que está decidido no se vuelve a preguntar. Las decisiones nuevas se añaden con fecha, identificador y estado.
>
> **Estados:** Aprobada · Aprobada con condiciones · Pendiente · En estudio · Descartada · Sustituida.
> **Ejecución:** «Sí» = se puede implementar sin volver a consultar · «Autorización» = antes hay que validar una propuesta concreta · «Solo análisis».
>
> **Fuente oficial compartida (DOC-04, aprobada el 18/10/2026).** Claude, Codex y cualquier colaborador trabajan con estas decisiones. Una decisión no se sobrescribe: si cambia, se marca «Sustituida» con la fecha y la nueva decisión, y el cambio se anota en el [registro de cambios](#5-registro-de-cambios). El registro del proyecto de Claude «Autoconocimiento» es una copia de consulta con el historial detallado; si difiere, manda este archivo.
>
> Lo estratégico o confidencial (comercialización, datos del centro o del piloto) no se escribe aquí porque el repositorio es público: se guarda en Drive y aquí solo queda una referencia.
>
> Última actualización: 18/10/2026.

## 1. Aprobadas

### Proceso y límites permanentes

| ID | Decisión | Ejecución |
|---|---|---|
| P-01 | Forma de trabajar: equipo virtual de 9 especialidades, 4 criterios (jugabilidad, claridad, pedagogía, técnica) y prioridades A/B/C. Detalle en [CLAUDE.md](CLAUDE.md) | Sí |
| P-02 | Las preguntas pendientes se agrupan en una sola propuesta con recomendación; nada de preguntas una a una | Sí |
| P-03 | Nada se publica en la versión de los alumnos (`index.html` de `main`) sin confirmación expresa de Raúl. La candidata va en `/candidata/` | Sí (candidata) · Autorización (alumnos) |
| P-04 | Límites fijos: sin caras ni datos de menores; el diario no sale del móvil; sin servidores, cuentas ni analítica; personajes propios; partidos políticos inventados; adicciones con reducción de riesgos; alimentación sin calorías ni peso; sin IA de pago para corregir; nada sensible a servicios externos | Sí |
| P-05 | Protección de partidas: se conservan XP, trofeos, diarios, retos en curso, lecturas, desbloqueos y copias de seguridad. Copia estable y pruebas de regresión antes de cambios importantes | Sí |
| P-06 | No se repiten informes terminados que siguen siendo válidos | Sí |
| P-07 | Se puede proponer sustituir cualquier mecánica de recompensas; implementarlo requiere aprobación | Propuesta: sí · Implementación: autorización |

### Pantalla Hoy y armonización visual

| ID | Decisión | Estado |
|---|---|---|
| H-01 | Tarjeta única de misión para todos los tipos de reto, día 1 compacto, corregir sin duplicar XP | Hecho en candidata; falta la prueba en iPhone (H-04) |
| H-02 | Formulario del diario en la propia página | Hecho |
| V-01 | «La Biblioteca del Cartógrafo», portada compacta | Hecho (candidata) |
| V-02 | La Aguja como diálogo RPG abajo | Hecho (candidata) |
| V-03 | Yo: «Pantalla y sonido» y «Mi partida» | Hecho (candidata) |
| V-04 | Sistema visual común: iconos pixel 12×12 propios, botones coral/azul/dorado, paneles y plegables | Hecho (candidata) |

### Aprendizaje y recompensas (modelo D)

| ID | Decisión | Estado |
|---|---|---|
| M-00 | Dirección: descubrir → comprender → recordar → aplicar → consolidar, adaptado al tipo de aprendizaje | Aprobada |
| M-D3 | Textos: «misión cumplida» (5/7), «semana completa» (7/7); nunca decir que 7 días crean un hábito | Hecho |
| D-1 | Bronce = comprender, plata = aplicar, oro = consolidar | Aprobada para el piloto |
| D-2 | Prueba del guardián adaptativa; dos aciertos tras feedback no son dominio duradero | Aprobada; calibrar en el piloto |
| D-3 | Evaluación diferida y transferencia; 10 días como hipótesis; la espera no bloquea | Aprobada |
| D-4 | Plata por 1–4 aplicaciones, sin días seguidos ni caducidad; distinguir lo comprobado de lo autorregistrado | Aprobada |
| D-5 | Retirar obligaciones sin valor de aprendizaje (todas las lecturas, reflexión obligatoria, esperas largas) | Aprobada |
| D-6 / D-7 | Separar participación (XP, niveles) de dominio (trofeos, herramientas); semanas activas en lugar de racha | Aprobada |
| D-8 | Herramientas funcionales con utilidad real | Aprobada |
| D-9 | Conservación íntegra de partidas; trofeos antiguos como históricos | Aprobada |
| D-10 | 10 conceptos esenciales (Atención 3, Hábitos 4, Estudio 3) | Aceptados provisionalmente |
| D-11 | Formato de preguntas: distractores creíbles, feedback explicativo, sin cantidad cerrada | Aprobada |
| D-12 | Correcciones pedagógicas y científicas del piloto | Aprobada tras ver el contenido final |
| D-13 | Piloto de 6 semanas + prueba diferida en la semana 9 | Aprobada, condicionada al centro |
| D-14 | Grupo en espera si es viable (no se presenta como experimento causal) | Preferida |
| D-15 | Modelo D solo en Estudio, Atención y Hábitos, reversible; las otras 16 regiones no cambian | Aprobada |
| F-1 a F-9 | Especificación final del modelo D | Aprobada el 18/10 (19:07) solo para la candidata |
| D-AUT | Desarrollo del modelo D en la candidata | Hecho y probado automáticamente; falta la prueba real en iPhone |

### Infraestructura documental (aprobadas el 18/10/2026)

| ID | Decisión | Condiciones | Estado |
|---|---|---|---|
| DOC-01 | Repositorio público de momento, para no interrumpir GitHub Pages | No subir nada confidencial ni estratégico; revisar ramas e historial; estudiar repositorio privado de desarrollo + público de publicación, **sin migrar** | Revisión hecha (SEC-01); estudio en [docs/repositorios.md](docs/repositorios.md) |
| DOC-02 | Avisos de derechos reservados y `THIRD_PARTY_NOTICES` separando lo propio de lo de terceros | No declarar la titularidad exclusiva como verificada sin comprobarla; completar y verificar las licencias de las 6 tipografías | Hecho en `desarrollo`: [LICENSE](LICENSE), [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), `fonts/OFL-*.txt` (verificadas) |
| DOC-03 | Herramientas y pruebas al repositorio, en `tools/` y `tests/` | Rama independiente; sin secretos ni datos personales; verificar que funcionan | Hecho en la rama `tools/pruebas` (28/28) |
| DOC-04 | `DECISIONES.md` es la fuente oficial compartida | Trazabilidad histórica; nada se sobrescribe sin registrar el cambio | Aplicada (sección 5) |
| DOC-05 | Documentación en `desarrollo`; en `main` solo lo imprescindible para publicar | `desarrollo` también es público: lo privado va a Drive | Aplicada |
| DOC-06 | Biblia de Brújula en Drive con las carpetas propuestas | Sincronización supervisada al principio; una sola fuente oficial por documento; automatizar más adelante | En preparación ([docs/drive/biblia-drive.md](docs/drive/biblia-drive.md)) |
| DOC-07 | Copias 3-2-1: etiquetas de versión, copia local y bundle externo | Verificar que se pueden restaurar; no sobrescribir copias anteriores | Hecho ([docs/copias-de-seguridad.md](docs/copias-de-seguridad.md)) |
| DOC-08 | `README.md`: 19 regiones y descripción actualizada | Primero en `desarrollo`; en `main` con la próxima versión estable aprobada | Hecho en `desarrollo` |
| DOC-09 | Funcionamiento sin conexión | Solo análisis y prototipo en rama aparte; no integrar; prioridad: que funcione bien con conexión | Análisis en [docs/sin-conexion.md](docs/sin-conexion.md) |
| DOC-10 | PR de `docs/infraestructura` contra `desarrollo` | Revisar antes información privada, afirmaciones no verificadas y errores; no fusionar automáticamente | PR abierto, sin fusionar |
| SEC-01 | Correo institucional expuesto en el código y en 8 commits | Sustituido en `desarrollo` y en la candidata manteniendo el funcionamiento; en la versión de alumnos, con la siguiente publicación estable; correo «noreply» para commits futuros; **no reescribir el historial por ahora** | Aprobada el 19/10. Hecho salvo la versión de alumnos ([docs/legal/exposicion-correo.md](docs/legal/exposicion-correo.md)) |
| DOC-02b | Avisos legales en la publicación (`main` y `candidata/`) | Solo si son correctos y sin información privada | Aprobada el 19/10. Publicados sin tocar `index.html` de alumnos |
| DRV-01 | La Biblia de Brújula va en la cuenta **personal** de Raúl, nunca en la del instituto | Estructura preparada; no se sube nada hasta conectar la cuenta personal | Aprobada el 19/10 |
| DOC-11 | Protocolo de ejecución y reglas de eficiencia (tokens, tiempo, créditos) para Claude y Codex | Nunca se omiten pruebas esenciales, controles de seguridad ni validaciones; el modelo y el esfuerzo se eligen en la herramienta, no desde el repositorio; no contradice DOC-04, DOC-10, P-03 ni P-05 | Aprobada el 24/10 (PR #6 y #7). Aplicada en [CLAUDE.md](CLAUDE.md) y [AGENTS.md](AGENTS.md) |
| AG-01 | Codex como revisor técnico independiente; Claude, desarrollador principal | Codex no publica en la versión de los alumnos; ramas y PR separados; mismas decisiones. Armonizada con AG-03: la prohibición de modificar el juego pasa a «solo con encargo expreso de Raúl, en rama `codex/…` y mediante PR» | Aplicada en [AGENTS.md](AGENTS.md). Vigente; conserva todas sus protecciones |
| AG-03 | Reparto de roles y alcance de Codex. ChatGPT: planificación pedagógica, experiencia de usuario y requisitos · Claude: desarrollador principal · Codex: revisión técnica, pruebas y tareas específicas que Raúl le encargue expresamente · GitHub: fuente oficial de documentación y código | Cada herramienta, en su propia rama; ningún archivo se edita a la vez sin coordinación; ninguna fusiona en `main` ni publica el videojuego sin autorización de Raúl; Codex modifica el juego solo en la tarea encargada, en rama `codex/…` y mediante PR hacia `desarrollo`. Prevalece sobre el aviso AG-02 de `codex/modo-demostracion` (Codex como desarrollador general), que no queda vigente | Aprobada con condiciones el 24/10. Aplicada en [AGENTS.md](AGENTS.md) |

### Retos, piloto y arquitectura

| ID | Decisión | Estado |
|---|---|---|
| R-01 | Cuatro tipos de reto: microdesafío, entrenamiento de 7 días, continuidad y consolidación | Aprobada |
| R-02 | El 5/7 se mantiene en las misiones semanales | Aprobada |
| R-03 | No se modifican en bloque los 213 retos | Aprobada |
| M-D6 | Piloto con Estudio, Atención y Hábitos, alumnado de 1.º de FP de 18 años o más, gratuito, voluntario y sin efecto en la nota | Aprobada (selección) |
| A-07 | Unas 19 regiones como preferencia, sin forzar el número | Aprobada como preferencia |
| VA-01 | El alumno avanza sin aprobaciones manuales del profesor | Aprobada |
| VA-02 | Conocimientos: corrección automática; prácticas: autorregistro responsable; reflexiones: privadas y sin evaluar | Aprobada |

## 2. Pendientes

| ID | Tema | Recomendación | Quién |
|---|---|---|---|
| H-04 | Prueba final de Hoy en iPhone | Hacerla con la candidata actual | Raúl |
| PI-REQ / RS-REQ | Dirección del centro, DPD del Departament, normativa de móviles, consentimiento de la medición | Obligatorio antes de usar la app con alumnos | Raúl |
| IM-1 | Etapa del personaje solo por trofeos (puede subir de golpe con trofeos antiguos) | Mantener; confirmar | Raúl |
| IM-2 a IM-6 | Ajustes de implementación del modelo D (ver [APRENDIZAJE.md](APRENDIZAJE.md)) | Calibrar en el piloto | Raúl |
| F-9 (revisión) | Revisión humana del banco de 106 preguntas y de EDU-03/EDU-04 | Antes del piloto | Raúl |
| M-T1 a M-T5 | Reglas técnicas del modelo C para las otras regiones | Absorbidas por el modelo D en el piloto; revisar al extender | Raúl |
| R-04 | Retos compartidos entre lecturas (ALI-06/08/09, EDU-02/08, EDU-06/09, EST-05/08, HAB-03/05, HAB-04/07, DIN-06/21) | Reto propio o fusión | Raúl |
| AU-01 | Contenido completo de las 7 lecturas de Emociones | Segunda fase | Raúl |
| AU-03 | Correcciones de rigor fuera del piloto (pódcasts como fuente, Robbins, Asch, Ariely, 90 segundos, cifras con fecha) | Por tandas | Raúl |
| AU-04 | Sustituir las preguntas sobre el reto fuera del piloto | Por regiones | Raúl |
| VA-04 | Textos heredados que mencionan la validación por foto del profesor | Corregir (bajo riesgo) | Raúl |
| U-01 | Actualizaciones de contenido por internet sin servidores complejos | Solo análisis | — |
| COM-01 | Estrategia de sostenibilidad | Documentada solo en Drive (privado); en el código no hay pagos | Raúl |
| DEMO-01 | **Modo demostración** | Concepto trabajado por Raúl en conversaciones con ChatGPT. **Pendiente de consolidar documentalmente**: Raúl aportará la especificación completa. No se implementa ni se toman decisiones hasta entonces. La rama `codex/modo-demostracion` queda **pendiente de revisión** (24/10): no se fusiona ni se implementa su funcionalidad hasta que Raúl apruebe la especificación | Raúl |
| OBS-01 | **Observatorio del Tiempo** | Concepto narrativo y educativo trabajado por Raúl en conversaciones con ChatGPT. **Pendiente de consolidar documentalmente**: Raúl aportará la especificación y las decisiones ya tomadas. Se documentará para implementarlo después del piloto, sin sustituir sus prioridades | Raúl |

## 3. En estudio (sin cambios en el mapa por ahora)

| ID | Hipótesis | Recomendación provisional |
|---|---|---|
| A-01 / AU-05 | Unir Autoconocimiento y Autoestima | Unir después de escribir su contenido |
| A-02 / AU-08 | Unir Emociones y Estrés | No unir de momento |
| A-03 / AU-06 | Unir Ciudadanía y Civismo como «Convivencia y ciudadanía» | Unir |
| A-04 / AU-07 | Región nueva: Vocación, trabajo y futuro profesional | Crear |
| A-05 / AU-07 | Región nueva: Tecnología, IA y vida digital | Crear |
| A-06 | Creatividad y emprendimiento | Dentro de Vocación, no como región |
| A-09 | Regla técnica de cualquier reorganización: no borrar ni reordenar áreas internas ni IDs de lectura (el test inicial guarda respuestas por posición) | Obligatoria si se reorganiza |

## 4. Descartadas o sustituidas

| ID | Decisión | Motivo | Fecha |
|---|---|---|---|
| — | Piloto con Sueño, Estudio y Emociones | Sustituido por Estudio, Atención y Hábitos (M-D6) | 18/10 |
| PI-01 | Piloto de 4 semanas con retos diarios | Sustituido por 6 semanas + diferida en la 9 (D-13) | 18/10 |
| — | Número fijo de preguntas por concepto (por ejemplo, 3) | Rechazado: la prueba es adaptativa (D-2) | 18/10 |
| — | Comparar en el piloto las reglas antiguas con el modelo D | Obliga a mantener dos sistemas; se prefiere grupo en espera (D-14) | 18/10 |
| — | Eliminar automáticamente XP, niveles o rachas | Se separan participación y dominio (RS-5) | 18/10 |
| — | Racha diaria visible | Sustituida por semanas activas en el modelo D | 18/10 |
| — | Validación de retos por foto del profesor | Desactivada (`PROFE_VALIDA=false`); el código se conserva | antes del 18/10 |
| — | «Repaso sin mirar» y «lecturas dominadas» | Desactivados el 15/10 (commit `cef5514`) al llegar el entreno; código conservado | 15/10 |
| — | Cambios estructurales del mapa ahora | Raúl no los aprueba por ahora; quedan en estudio | 18/10 |

## 5. Registro de cambios

Cada cambio en una decisión existente se anota aquí (fecha, ID, antes → después, quién). Las decisiones nuevas no hace falta anotarlas: ya llevan fecha en su tabla.

| Fecha | ID | Cambio | Quién |
|---|---|---|---|
| 18/10/2026 | DOC-01 a DOC-10 | Pendientes → aprobadas con condiciones | Raúl |
| 18/10/2026 | DOC-04 | La fuente de verdad pasa del registro del proyecto de Claude a este archivo | Raúl |
| 18/10/2026 | DOC-09 | Recomendación «implementar antes del piloto» → aprobado solo análisis y prototipo en rama aparte | Raúl |
| 18/10/2026 | DOC-06 | Recomendación «sincronización semanal automática» → sincronización supervisada al principio | Raúl |
| 18/10/2026 | COM-01 | Detalle retirado del repositorio público; queda en Drive | Claude, aplicando DOC-01 |
| 18/10/2026 | DEMO-01, OBS-01 | Registrados como pendientes de consolidar documentalmente | Raúl |
| 19/10/2026 | DOC-01 a DOC-10 | PR #1 y #2 revisados, probados (28/28) y fusionados en `desarrollo` | Raúl autoriza; Claude ejecuta |
| 19/10/2026 | SEC-01 | Pendiente → aprobada (sin reescribir historial) | Raúl |
| 19/10/2026 | DOC-06 | Cuenta de Drive: personal (DRV-01) | Raúl |
| 19/10/2026 | DOC-01 | Se confirma separar en el futuro desarrollo privado y versión pública; propuesta preparada, sin migrar | Raúl |
| 24/10/2026 | DOC-11 | Registrada: reglas de eficiencia y protocolo de ejecución (PR #6 y #7 fusionados en `desarrollo`) | Raúl autoriza; Claude ejecuta |
| 24/10/2026 | AG-03 | Propuesta de reparto de roles; AG-01 sigue vigente y AG-02 sin registrar en `desarrollo` hasta que Raúl decida | Claude, a petición de Raúl |
| 24/10/2026 | AG-03 | Propuesta → aprobada con condiciones; AG-01 armonizada conservando sus protecciones; el aviso AG-02 de la rama de Codex no queda vigente | Raúl |
| 24/10/2026 | DEMO-01 | Rama `codex/modo-demostracion` pendiente de revisión; sin fusionar ni implementar hasta aprobar la especificación | Raúl |

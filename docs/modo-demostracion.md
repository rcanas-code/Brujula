# Modo demostración · propuesta DEMO-01

Estado: implementado en rama para revisión; no publicado.

## Uso previsto

Abrir la versión de esta rama con `?demo=1` (por ejemplo, con un servidor local en `http://localhost:8000/index.html?demo=1`). El enlace de la candidata publicada todavía no contiene este cambio.

1. Elegir Estudio, Atención o Hábitos y abrir la región. Se crea un perfil sintético si no existe.
2. Opcionalmente «Preparar prueba de bronce»: simula únicamente las lecturas previas y el encuentro con el guardián. No concede trofeos, respuestas ni estados de comprensión.
3. Resolver la prueba, con aciertos o errores, y completar las aplicaciones de la plata.
4. Avanzar 4 segundos para comprobar las esperas de respuesta, 10 minutos para temporizadores, o 1/2/10 días para aplicaciones, repasos y oro. Guardar formularios antes: avanzar vuelve a dibujar la pantalla. Las condiciones del oro siguen vigentes: comprensión sin apoyo, espera desde plata, encuentro y eco.
5. Reiniciar borra solo la demostración de esta pestaña. Salir quita el parámetro y vuelve a la partida real.

## Aislamiento

- Partida y preferencias de la demo: `sessionStorage`, prefijo `brujula-demo:`. La partida normal conserva `localStorage`, prefijo `brujula:`.
- Reloj virtual de la página: no cambia el del dispositivo ni otras páginas; conserva su adelanto al recargar la pestaña. No acelera las animaciones ni ejecuta miles de intervalos al saltar días.
- Álbum desactivado en demo: no se accede a las fotos reales ni se crean fotos de prueba persistentes.
- Copias con marca `demo`: no se importan entre modos. Esta marca evita errores accidentales; no es un sistema antifraude ni de autenticación.
- Cerrar la pestaña normalmente elimina la sesión; algunos navegadores pueden restaurarla. Para borrarla de forma explícita, usar Reiniciar.
- No es un modo de evaluación ni un panel protegido por contraseña.

## Verificación

`node tests/demo-logica.js`: pasa pruebas de almacenamiento, preferencias, copias, reloj y recarga con el código real extraído del HTML. Sintaxis de los cuatro scripts: correcta.

`node tests/demo.js [ruta-chromium]`: prueba adicional de navegador para aislamiento, controles, reinicio, salida y 360 px. No ejecutada satisfactoriamente: Chromium bloqueado por permisos del entorno (`socket() failed: Operation not permitted`).

Pendiente antes de integrar: ejecutar esta prueba y la batería de `tests/README.md` con D encendido/apagado; comprobar visualmente el panel y completar bronce/plata/oro con reloj virtual en navegador y móvil.

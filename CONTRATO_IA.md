# Contrato de desarrollo con IA · Brújula Godot

Este documento fija las reglas para cualquier agente o persona que modifique la versión nativa de Brújula en Godot 4.x.

## 1. Fuente de verdad

- `content/gamedata.json` es la fuente de verdad del contenido configurable del juego.
- Textos, nombres, estadísticas, costes, cantidades de enemigos, dificultad, niveles y objetos deben vivir en ese archivo o en otros archivos de datos que se aprueben en el futuro.
- Los scripts GDScript contienen comportamiento, validación y presentación de datos. No contienen valores de contenido alternativos que oculten errores del JSON.
- Las claves que forman el contrato del esquema, las rutas de archivos y los nombres de acciones de entrada sí pueden aparecer en el código.

## 2. Estructura inicial

- `content/gamedata.json`: configuración y contenido inicial.
- `src/DataManager.gd`: único punto de carga y acceso global a los datos.
- `src/Player.gd`: comportamiento del personaje; consume los datos mediante `DataManager`.
- `project.godot`: registra `DataManager` como Autoload con el nombre global `DataManager`.

## 3. Contrato de datos

- La raíz de `gamedata.json` debe ser un objeto JSON.
- Las secciones obligatorias iniciales son `config`, `player_base`, `levels` e `items`.
- Cada nivel y objeto debe tener un `id` estable y único. Los IDs se usan para referencias internas; cambiar un nombre visible no obliga a cambiar su ID.
- El código debe tratar la ausencia o el tipo incorrecto de un dato como un error explícito. No debe inventar estadísticas de respaldo.
- Cualquier cambio incompatible del esquema debe documentarse y actualizar a todos sus consumidores en el mismo PR.

## 4. Reglas de GDScript

- Se usa Godot 4.x y tipado estático en parámetros, retornos, propiedades y variables locales cuando el tipo sea conocido.
- Los nodos acceden al contenido mediante `DataManager`; no abren `gamedata.json` por su cuenta.
- La lógica no debe depender del orden de objetos en el JSON cuando exista un `id`.
- Los errores de carga deben detener de forma segura el comportamiento dependiente de los datos y dejar un mensaje útil en la consola.

## 5. Cambios y revisión

- Los cambios se hacen en una rama propia y mediante Pull Request.
- No se fusiona automáticamente un PR ni se publica una versión sin revisión de Raúl.
- Los commits de contenido deben modificar principalmente archivos de `content/`.
- Los commits de lógica deben separar, cuando sea razonable, los cambios de código de los cambios masivos de contenido.
- Antes de solicitar integración hay que validar el JSON, abrir el proyecto con una versión compatible de Godot 4.x y comprobar que no hay errores de parseo.

## 6. Criterios mínimos de aceptación

1. `gamedata.json` es JSON válido.
2. `DataManager` carga `res://content/gamedata.json` y queda registrado como Autoload.
3. Los scripts nuevos se pueden analizar con Godot sin errores.
4. El personaje obtiene vida y velocidad desde los datos y no desde constantes de contenido en GDScript.
5. El cambio no modifica la versión web existente ni la publicación de GitHub Pages.

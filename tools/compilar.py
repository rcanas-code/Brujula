#!/usr/bin/env python3
"""Actualiza la versión (APP_V) de un index.html de Brújula.

Uso:
  python3 tools/compilar.py                 # index.html de la raíz (alumnos: requiere autorización de Raúl para publicarlo)
  python3 tools/compilar.py candidata/index.html
  python3 tools/compilar.py --comprobar     # solo informa, no escribe

Sustituye a la cadena antigua «hdr.txt + brujula.html + </body></html>», que vivía fuera del
repositorio: index.html ya es el archivo completo y la única fuente del código.
No toca nada más que la constante APP_V. Hace una copia .bak junto al archivo antes de escribir.
"""
import re, sys, time, shutil, pathlib

args = [a for a in sys.argv[1:] if not a.startswith("--")]
solo = "--comprobar" in sys.argv
raiz = pathlib.Path(__file__).resolve().parent.parent
ruta = (raiz / (args[0] if args else "index.html")).resolve()
s = ruta.read_text(encoding="utf-8")
m = re.findall(r'const APP_V="(\d+)"', s)
if len(m) != 1:
    sys.exit(f"Se esperaba exactamente una constante APP_V en {ruta} y hay {len(m)}")
nueva = time.strftime("%Y%m%d%H%M%S")
print(f"{ruta.relative_to(raiz)}: APP_V {m[0]} -> {nueva if not solo else '(sin cambios)'}")
if not s.rstrip().endswith("</html>"):
    print("AVISO: el archivo no termina en </html>")
if solo:
    sys.exit(0)
shutil.copy2(ruta, str(ruta) + ".bak")
ruta.write_text(s.replace(f'const APP_V="{m[0]}"', f'const APP_V="{nueva}"'), encoding="utf-8")
print("ok (copia previa en .bak; bórrala cuando hayas comprobado el resultado)")

#!/usr/bin/env bash
# SEC-01: configura este clon para que los commits usen el correo privado («noreply») de GitHub.
# Uso (en el ordenador de Raúl, dentro del repositorio):  tools/configurar-git.sh
# Solo cambia la configuración de ESTE repositorio (no la global) y no toca el historial.
set -e
NOREPLY="337400312+rcanas-code@users.noreply.github.com"   # ID público de la cuenta rcanas-code
git config user.name  "Raúl Cañas"
git config user.email "$NOREPLY"
echo "Este repositorio firmará los commits como: $(git config user.name) <$(git config user.email)>"
echo
echo "Completa también en GitHub (Settings → Emails):"
echo "  1. Activar «Keep my email addresses private»."
echo "  2. Activar «Block command line pushes that expose my email»."
echo "  3. En la web de GitHub, los commits hechos desde el navegador usarán ya el correo noreply."

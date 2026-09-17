# Neural Quest — English Lab

Juego web de práctica de inglés (Passive Voice, First Conditional, etc.) con una
red neuronal (Synaptic.js) que ajusta la dificultad según tu desempeño.

## Estructura
- `index.html` — estructura de las pantallas del juego
- `style.css` — todos los estilos (colores, animaciones, layout)
- `script.js` — lógica del juego, banco de ejercicios y la red neuronal

## Recursos externos (no hay que subirlos, se cargan por CDN)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
- Synaptic.js (red neuronal): `https://cdnjs.cloudflare.com/ajax/libs/synaptic/1.1.4/synaptic.min.js`

## Nota sobre imágenes y audio
Este juego **no usa imágenes ni música**: todos los íconos y el diagrama de la
red neuronal son SVG generados por código en `script.js`, y no hay archivos de
audio en ningún lado del proyecto. Por eso no hay carpetas `img/` ni `audio/`.

## Cómo publicarlo en GitHub Pages
1. Subí los 3 archivos (`index.html`, `style.css`, `script.js`) a la raíz del repo.
2. Activá GitHub Pages (Settings → Pages → Branch: main → / root).
3. Listo, el juego queda accesible desde `https://tu-usuario.github.io/tu-repo/`.

# Mates · Matemáticas Básicas

Sitio web interactivo para aprender **Matemáticas Básicas** (programa de nivelación de la Universidad Nacional de Colombia), con lecciones, práctica, glosario y animaciones hechas con [Manim](https://www.manim.community/).

**Sitio publicado:** https://hmbc03.github.io/mates/

## Qué hace

- **Ruta de aprendizaje** con el avance del estudiante guardado en el navegador.
- **Unidad 1 · Conjuntos** completa: 17 lecciones, cada una con explicación, ejemplo, video y ejercicio.
- **Contenidos** del programa: 9 unidades y 62 temas, con las unidades futuras marcadas como “en preparación”.
- **Práctica** con ejercicios del taller y solución desplegable.
- **Glosario** de símbolos matemáticos.
- **Logros** y ajustes; no requiere cuenta ni servidor: todo el progreso vive en `localStorage`.
- **Diseño responsive** para escritorio, tableta y móvil.

## Estructura

```text
.
├── web/                        Aplicación React + Vite
│   ├── public/assets/          Logo y videos de las animaciones
│   │   └── videos/conjuntos/   e01 … e20 (.mp4)
│   ├── src/
│   │   ├── components/         Layout, lecciones, video, práctica, diálogos
│   │   ├── context/            Progreso en localStorage
│   │   ├── data/               Lecciones, programa y portada
│   │   ├── hooks/              Título de documento
│   │   ├── pages/              Ruta, lección y contenidos
│   │   └── styles/             Estilos del curso
│   └── index.html
├── manim/                      Escenas y utilidades de Manim CE
│   ├── comun/                  Colores, Venn y helpers
│   └── escenas/conjuntos/      e01 … e20
└── .github/workflows/pages.yml Publicación automática en GitHub Pages
```

## Desarrollo local

Requiere Node.js 20 o superior.

```powershell
cd web
npm install
npm run dev        # http://127.0.0.1:8765
```

Para probar la compilación de producción:

```powershell
npm run build
npm run preview
```

Para simular la ruta de GitHub Pages (`/mates/`):

```powershell
$env:GITHUB_PAGES = "true"
npm run build
Remove-Item Env:GITHUB_PAGES
```

## Animaciones

Los videos se generan con Manim Community y viven en `web/public/assets/videos/conjuntos/`. El código de cada escena está en `manim/escenas/conjuntos/`.

```powershell
cd manim
uv sync
uv run manim render -qh escenas/conjuntos/e01_que_es_un_conjunto.py QueEsUnConjunto
```

El render queda en `manim/media/videos/.../1080p60/`. Cópialo a `web/public/assets/videos/conjuntos/` con el nombre de la escena (`e01_que_es_un_conjunto.mp4`, etc.). Hay 20 escenas: las 17 lecciones de la unidad y tres escenas de apoyo (`e18`–`e20`).

## Publicación

El flujo de GitHub Actions (`.github/workflows/pages.yml`) compila `web/` y publica `web/dist/` en GitHub Pages cada vez que se hace push a `main`.

- Ruta del sitio: `/mates/`
- La configuración de Vite usa `GITHUB_PAGES=true` para fijar esa base.
- `BrowserRouter` toma la base desde `import.meta.env.BASE_URL`, y los enlaces internos se mantienen bajo `/mates/`.

## Progreso

El avance se guarda en la clave `mates.progreso.v1`. Si existe la clave antigua `axioma.progreso.v1`, se migra automáticamente para no perder lo que el estudiante ya había completado.

## Créditos

- Programa oficial de Matemáticas Básicas, Universidad Nacional de Colombia.
- Animaciones: [Manim Community](https://www.manim.community/).
- Interfaz: React, React Router y Vite.

Los materiales de estudio de terceros (talleres y apuntes) no se distribuyen en este repositorio; solo se publica el código del sitio y las animaciones propias.

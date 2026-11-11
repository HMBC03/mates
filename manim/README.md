# Animaciones · Manim Community

Escenas del curso **Matemáticas Básicas** (Unidad 1 · Conjuntos). Cada video explica una sola idea y se reproduce junto al texto de la lección en `web/`.

## Requisitos

- Python 3.11+
- [uv](https://docs.astral.sh/uv/)
- Para las fórmulas con `MathTex`: [MiKTeX](https://miktex.org/download) (Windows) o TeX Live.

```powershell
cd manim
uv sync
uv run manim checkhealth
```

## Renderizar

Una escena:

```powershell
uv run manim render -qh escenas/conjuntos/e01_que_es_un_conjunto.py QueEsUnConjunto
```

Todas las escenas de la unidad:

```powershell
$escenas = @(
  "e01_que_es_un_conjunto.py QueEsUnConjunto",
  "e02_pertenencia.py Pertenencia",
  "e03_conjunto_vacio.py ConjuntoVacio",
  "e04_conjunto_universal.py ConjuntoUniversal",
  "e05_por_extension.py PorExtension",
  "e06_por_comprension.py PorComprension",
  "e07_contenencia.py Contenencia",
  "e08_igualdad.py Igualdad",
  "e09_conjunto_de_partes.py ConjuntoDePartes",
  "e10_union.py Union",
  "e11_interseccion.py Interseccion",
  "e12_complemento.py Complemento",
  "e13_diferencia.py Diferencia",
  "e14_diferencia_simetrica.py DiferenciaSimetrica",
  "e15_producto_cartesiano.py ProductoCartesiano",
  "e16_diagramas_de_venn.py DiagramasDeVenn",
  "e17_problema_venn.py ProblemaVenn",
  "e18_propiedades_operaciones.py PropiedadesOperaciones",
  "e19_venn_tres_conjuntos.py VennTresConjuntos",
  "e20_cardinalidad.py Cardinalidad"
)
foreach ($s in $escenas) { $p = $s -split ' '; uv run manim render -qh "escenas/conjuntos/$($p[0])" $p[1] }
```

El resultado queda en `media/videos/<escena>/1080p60/<Clase>.mp4`. Para la web se copia como:

```powershell
Copy-Item media\videos\e01_que_es_un_conjunto\1080p60\QueEsUnConjunto.mp4 ..\web\public\assets\videos\conjuntos\e01_que_es_un_conjunto.mp4
```

## Escenas

| # | Archivo | Clase | Video en la web |
|---|---|---|---|
| 1 | `e01_que_es_un_conjunto.py` | `QueEsUnConjunto` | `e01_que_es_un_conjunto.mp4` |
| 2 | `e02_pertenencia.py` | `Pertenencia` | `e02_pertenencia.mp4` |
| 3 | `e03_conjunto_vacio.py` | `ConjuntoVacio` | `e03_conjunto_vacio.mp4` |
| 4 | `e04_conjunto_universal.py` | `ConjuntoUniversal` | `e04_conjunto_universal.mp4` |
| 5 | `e05_por_extension.py` | `PorExtension` | `e05_por_extension.mp4` |
| 6 | `e06_por_comprension.py` | `PorComprension` | `e06_por_comprension.mp4` |
| 7 | `e07_contenencia.py` | `Contenencia` | `e07_contenencia.mp4` |
| 8 | `e08_igualdad.py` | `Igualdad` | `e08_igualdad.mp4` |
| 9 | `e09_conjunto_de_partes.py` | `ConjuntoDePartes` | `e09_conjunto_de_partes.mp4` |
| 10 | `e10_union.py` | `Union` | `e10_union.mp4` |
| 11 | `e11_interseccion.py` | `Interseccion` | `e11_interseccion.mp4` |
| 12 | `e12_complemento.py` | `Complemento` | `e12_complemento.mp4` |
| 13 | `e13_diferencia.py` | `Diferencia` | `e13_diferencia.mp4` |
| 14 | `e14_diferencia_simetrica.py` | `DiferenciaSimetrica` | `e14_diferencia_simetrica.mp4` |
| 15 | `e15_producto_cartesiano.py` | `ProductoCartesiano` | `e15_producto_cartesiano.mp4` |
| 16 | `e16_diagramas_de_venn.py` | `DiagramasDeVenn` | `e16_diagramas_de_venn.mp4` |
| 17 | `e17_problema_venn.py` | `ProblemaVenn` | `e17_problema_venn.mp4` |
| 18 | `e18_propiedades_operaciones.py` | `PropiedadesOperaciones` | `e18_propiedades_operaciones.mp4` |
| 19 | `e19_venn_tres_conjuntos.py` | `VennTresConjuntos` | `e19_venn_tres_conjuntos.mp4` |
| 20 | `e20_cardinalidad.py` | `Cardinalidad` | `e20_cardinalidad.mp4` |

## Utilidades

- `comun/colores.py`: paleta del curso.
- `comun/venn.py`: diagramas de Venn reutilizables.
- `comun/base.py`: helpers de animación y texto.

"""Diagramas de Venn de dos conjuntos con regiones coloreables.

Usa las operaciones booleanas de Manim (`Union`, `Intersection`, `Difference`,
`Exclusion`) para obtener cada zona del diagrama como un mobject independiente
que se puede pintar y animar.

IMPORTANTE: todas las piezas (círculos, universo y regiones) se construyen ya
posicionadas en `centro`. NO mover los círculos después de crear el Venn: las
regiones se calculan a partir de su posición inicial.
"""

from manim import Circle, LEFT, ORIGIN, Rectangle, RIGHT
from manim.mobject.geometry.boolean_ops import (
    Difference,
    Exclusion,
    Intersection,
    Union,
)

from comun.colores import AZUL, GRIS, VERDE


def crear_venn(radio=1.5, separacion=1.6, ancho_universo=7.0, alto_universo=4.6, centro=ORIGIN):
    """Crea un Venn de dos conjuntos dentro de un universo rectangular.

    Devuelve un diccionario con:
      - "circulo_a", "circulo_b", "universo": los dibujos base.
      - "solo_a", "solo_b", "interseccion", "union",
        "diferencia_simetrica", "complemento_a", "complemento_b",
        "complemento": las regiones (mobjects) listas para pintar.
    """
    circulo_a = Circle(radius=radio, color=AZUL, stroke_width=3).shift(
        centro + LEFT * separacion / 2
    )
    circulo_b = Circle(radius=radio, color=VERDE, stroke_width=3).shift(
        centro + RIGHT * separacion / 2
    )
    universo = Rectangle(
        width=ancho_universo,
        height=alto_universo,
        color=GRIS,
        stroke_width=1,
    ).move_to(centro).set_fill(opacity=0)

    union_ab = Union(circulo_a, circulo_b)
    return {
        "circulo_a": circulo_a,
        "circulo_b": circulo_b,
        "universo": universo,
        "solo_a": Difference(circulo_a, circulo_b),
        "solo_b": Difference(circulo_b, circulo_a),
        "interseccion": Intersection(circulo_a, circulo_b),
        "union": union_ab,
        "diferencia_simetrica": Exclusion(circulo_a, circulo_b),
        "complemento_a": Difference(universo, circulo_a),
        "complemento_b": Difference(universo, circulo_b),
        "complemento": Difference(universo, union_ab),
    }


def pintar(region, color, opacidad=0.5):
    """Pinta una región del Venn con relleno sólido y sin borde."""
    region.set_fill(color, opacity=opacidad)
    region.set_stroke(width=0)
    return region

"""Unidad 1 · Conjuntos — e04: El conjunto universal U

Render: uv run manim render -qh escenas/conjuntos/e04_conjunto_universal.py ConjuntoUniversal
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import Create, DOWN, FadeIn, FadeOut, Indicate, ORIGIN, Rectangle, RIGHT, Text, UL, UP, Write

from comun.base import EscenaBase
from comun.colores import GRIS, MORADO


class ConjuntoUniversal(EscenaBase):
    def construct(self):
        titulo = Text("El conjunto universal U", font_size=38, color=MORADO).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.0)

        universo = Rectangle(width=6.6, height=3.8, color=MORADO, stroke_width=2.5).move_to(
            ORIGIN + UP * 0.2
        )
        etiqueta_u = Text("U", font_size=36, color=MORADO).move_to(
            universo.get_corner(UL) + RIGHT * 0.4 + DOWN * 0.4
        )
        self.play(Create(universo), FadeIn(etiqueta_u), run_time=1.4)
        etiqueta = Text("contiene a todos los elementos que nos interesan", font_size=26, color=GRIS)
        etiqueta.next_to(universo, DOWN, buff=0.6)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.play(Indicate(universo, color=MORADO, scale_factor=1.04), run_time=1.2)
        self.wait(1.6)

        ejemplo = Text("Ej.: al hablar de vocales, U = todas las letras", font_size=26, color=GRIS)
        ejemplo.move_to(etiqueta)
        self.play(FadeOut(etiqueta), FadeIn(ejemplo), run_time=0.9)
        self.wait(1.8)

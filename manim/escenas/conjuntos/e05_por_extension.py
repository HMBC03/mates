"""Unidad 1 · Conjuntos — e05: Notación por extensión

Render: uv run manim render -qh escenas/conjuntos/e05_por_extension.py PorExtension
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import DOWN, FadeIn, FadeOut, Indicate, MathTex, ORIGIN, Text, UP, VGroup, Write

from comun.base import EscenaBase
from comun.colores import GRIS, VERDE


class PorExtension(EscenaBase):
    def construct(self):
        titulo = Text("Por extensión", font_size=38, color=VERDE).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.0)

        ejemplo = MathTex(r"A = \{1, 2, 3, 4, 5\}", font_size=64).move_to(ORIGIN + UP * 0.6)
        self.play(Write(ejemplo), run_time=1.4)
        etiqueta = Text("se listan TODOS los elementos, uno a uno", font_size=26, color=GRIS)
        etiqueta.next_to(ejemplo, DOWN, buff=0.9)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.play(Indicate(ejemplo, color=VERDE, scale_factor=1.05), run_time=1.2)
        self.wait(1.4)

        otro = VGroup(
            MathTex(r"B = \{a, e, i, o, u\}", font_size=64),
            Text("otro ejemplo", font_size=24, color=GRIS),
        ).arrange(DOWN, buff=0.5).move_to(ORIGIN + UP * 0.3)
        self.play(FadeOut(ejemplo), FadeOut(etiqueta))
        self.play(FadeIn(otro), run_time=1.2)
        self.wait(1.8)

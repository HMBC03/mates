"""Unidad 1 · Conjuntos — e09: El conjunto de partes

Render: uv run manim render -qh escenas/conjuntos/e09_conjunto_de_partes.py ConjuntoDePartes
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import DOWN, FadeIn, FadeOut, Indicate, MathTex, ORIGIN, Text, UP, VGroup, Write

from comun.base import EscenaBase
from comun.colores import GRIS, VERDE


class ConjuntoDePartes(EscenaBase):
    def construct(self):
        titulo = MathTex(r"\mathcal{P}(A)", font_size=52).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.0)
        etiqueta = Text("el conjunto de todos los subconjuntos de A", font_size=26, color=GRIS)
        etiqueta.next_to(titulo, DOWN, buff=0.5)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.4)

        base = MathTex(r"A = \{a, b\}", font_size=44).move_to(ORIGIN + UP * 1.5)
        self.play(FadeOut(etiqueta))
        self.play(Write(base), run_time=1.1)
        self.wait(1.0)

        partes = MathTex(
            r"\mathcal{P}(A) = \{\varnothing, \{a\}, \{b\}, \{a, b\}\}", font_size=40
        ).move_to(ORIGIN + UP * 0.4)
        self.play(Write(partes), run_time=1.4)
        self.play(Indicate(partes, color=VERDE, scale_factor=1.04), run_time=1.2)
        self.wait(1.4)

        conteo = MathTex(r"|\mathcal{P}(A)| = 2^{|A|} = 2^2 = 4", font_size=44, color=VERDE).move_to(
            ORIGIN + DOWN * 1.6
        )
        self.play(Write(conteo), run_time=1.2)
        self.play(Indicate(conteo, color=VERDE, scale_factor=1.06), run_time=1.2)
        self.wait(2.0)

"""Unidad 1 · Conjuntos — e01: ¿Qué es un conjunto?

Render: uv run manim render -qh escenas/conjuntos/e01_que_es_un_conjunto.py QueEsUnConjunto
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import DOWN, FadeIn, FadeOut, Indicate, MathTex, ORIGIN, Text, UP, VGroup, Write

from comun.base import EscenaBase
from comun.colores import AZUL, GRIS


class QueEsUnConjunto(EscenaBase):
    def construct(self):
        titulo = Text("Conjuntos", font_size=38, color=AZUL).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.0)

        vocales = MathTex(r"V = \{a, e, i, o, u\}", font_size=64).move_to(ORIGIN + UP * 0.5)
        self.play(Write(vocales), run_time=1.4)
        etiqueta = Text("las llaves { } agrupan los elementos", font_size=26, color=GRIS)
        etiqueta.next_to(vocales, DOWN, buff=0.9)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.play(Indicate(vocales, color=AZUL, scale_factor=1.05), run_time=1.2)
        self.wait(1.4)

        otro = VGroup(
            MathTex(r"\{1, 3, 5, 7\}", font_size=56),
            Text("otro ejemplo", font_size=24, color=GRIS),
        ).arrange(DOWN, buff=0.5).move_to(ORIGIN + UP * 0.4)
        self.play(FadeOut(vocales), FadeOut(etiqueta))
        self.play(FadeIn(otro), run_time=1.0)
        self.wait(1.6)

"""Unidad 1 · Conjuntos — e08: Igualdad de conjuntos

Render: uv run manim render -qh escenas/conjuntos/e08_igualdad.py Igualdad
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import DOWN, FadeIn, FadeOut, FadeTransform, Indicate, MathTex, ORIGIN, Text, UP, VGroup, Write

from comun.base import EscenaBase
from comun.colores import AZUL, GRIS


class Igualdad(EscenaBase):
    def construct(self):
        titulo = MathTex(
            r"A = B \quad \Longleftrightarrow \quad A \subseteq B \;\; \wedge \;\; B \subseteq A",
            font_size=40,
        ).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.4)
        etiqueta = Text("misma colección de elementos", font_size=26, color=GRIS)
        etiqueta.next_to(titulo, DOWN, buff=0.5)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.6)

        orden = VGroup(
            MathTex(r"\{1, 2, 3\} = \{3, 1, 2\}", font_size=48),
            Text("el orden NO importa", font_size=26, color=GRIS),
        ).arrange(DOWN, buff=0.5).move_to(ORIGIN + UP * 0.35)
        self.play(FadeOut(etiqueta))
        self.play(FadeIn(orden), run_time=1.2)
        self.play(Indicate(orden[0], color=AZUL, scale_factor=1.04), run_time=1.2)
        self.wait(1.6)

        repetidos = VGroup(
            MathTex(r"\{1, 2, 3\} = \{1, 1, 2, 2, 3\}", font_size=48),
            Text("los repetidos NO se cuentan dos veces", font_size=26, color=GRIS),
        ).arrange(DOWN, buff=0.5).move_to(ORIGIN + UP * 0.35)
        self.play(FadeTransform(orden, repetidos), run_time=1.2)
        self.play(Indicate(repetidos[0], color=AZUL, scale_factor=1.04), run_time=1.2)
        self.wait(2.0)

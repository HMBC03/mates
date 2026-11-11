"""Unidad 1 · Conjuntos — e02: Pertenencia ∈ y ∉

Render: uv run manim render -qh escenas/conjuntos/e02_pertenencia.py Pertenencia
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import DOWN, FadeIn, Indicate, LEFT, MathTex, ORIGIN, RIGHT, Text, UP, VGroup, Write

from comun.base import EscenaBase
from comun.colores import AZUL, GRIS, ROJO, VERDE


class Pertenencia(EscenaBase):
    def construct(self):
        titulo = MathTex(r"x \in A \qquad x \notin A", font_size=48).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.2)

        vocales = MathTex(r"V = \{a, e, i, o, u\}", font_size=54).move_to(ORIGIN + UP * 1.3)
        self.play(Write(vocales), run_time=1.2)
        self.wait(1.0)

        pertenece = VGroup(
            MathTex(r"a \in V", font_size=56, color=VERDE),
            Text("pertenece", font_size=26, color=GRIS),
        ).arrange(DOWN, buff=0.4).shift(LEFT * 2.6 + DOWN * 0.1)
        no_pertenece = VGroup(
            MathTex(r"b \notin V", font_size=56, color=ROJO),
            Text("no pertenece", font_size=26, color=GRIS),
        ).arrange(DOWN, buff=0.4).shift(RIGHT * 2.6 + DOWN * 0.1)

        self.play(FadeIn(pertenece), run_time=1.0)
        self.play(Indicate(pertenece[0], color=VERDE, scale_factor=1.1), run_time=1.2)
        self.wait(1.2)
        self.play(FadeIn(no_pertenece), run_time=1.0)
        self.play(Indicate(no_pertenece[0], color=ROJO, scale_factor=1.1), run_time=1.2)
        self.wait(1.8)

"""Unidad 1 · Conjuntos — e07: Contenencia (subconjuntos)

Render: uv run manim render -qh escenas/conjuntos/e07_contenencia.py Contenencia
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import Circle, Create, DOWN, FadeIn, FadeOut, Indicate, LEFT, MathTex, ORIGIN, Text, UP, Write

from comun.base import EscenaBase
from comun.colores import AZUL, GRIS, VERDE


class Contenencia(EscenaBase):
    def construct(self):
        titulo = MathTex(r"A \subseteq B", font_size=56).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.2)
        etiqueta = Text("todo elemento de A está en B", font_size=26, color=GRIS)
        etiqueta.next_to(titulo, DOWN, buff=0.5)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.4)

        circulo_b = Circle(radius=1.7, color=VERDE, stroke_width=3).move_to(ORIGIN + DOWN * 0.1)
        circulo_a = Circle(radius=0.85, color=AZUL, stroke_width=3).move_to(
            ORIGIN + DOWN * 0.1 + LEFT * 0.45
        )
        etiqueta_b = Text("B", font_size=36, color=VERDE).move_to(
            circulo_b.get_center() + LEFT * 0.6 + UP * 1.05
        )
        etiqueta_a = Text("A", font_size=32, color=AZUL).move_to(circulo_a.get_center())
        self.play(FadeOut(etiqueta))
        self.play(
            Create(circulo_b),
            FadeIn(etiqueta_b),
            Create(circulo_a),
            FadeIn(etiqueta_a),
            run_time=1.4,
        )
        self.play(Indicate(circulo_a, color=AZUL, scale_factor=1.12), run_time=1.4)
        self.wait(1.6)

        ejemplo = MathTex(r"A = \{1, 2\} \;\; B = \{1, 2, 3, 4\} \quad \Rightarrow \quad A \subseteq B", font_size=36)
        ejemplo.move_to(ORIGIN + DOWN * 0.1)
        self.play(FadeOut(circulo_b, circulo_a, etiqueta_b, etiqueta_a))
        self.play(FadeIn(ejemplo), run_time=1.2)
        self.wait(2.0)

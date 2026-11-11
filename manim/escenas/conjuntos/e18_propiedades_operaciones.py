"""Unidad 1 · Conjuntos — e18: Propiedades de las operaciones

Render: uv run manim render -qh escenas/conjuntos/e18_propiedades_operaciones.py PropiedadesOperaciones
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import DOWN, FadeIn, Indicate, LaggedStart, LEFT, MathTex, ORIGIN, Text, UP, VGroup, Write

from comun.base import EscenaBase
from comun.colores import AZUL, VERDE


class PropiedadesOperaciones(EscenaBase):
    def construct(self):
        titulo = Text("Propiedades de las operaciones", font_size=38, color=AZUL).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.0)

        propiedades = VGroup(
            MathTex(r"A \cup B = B \cup A \qquad A \cap B = B \cap A", font_size=28),
            MathTex(r"(A \cup B) \cup C = A \cup (B \cup C)", font_size=28),
            MathTex(r"A \cap (B \cup C) = (A \cap B) \cup (A \cap C)", font_size=28),
            MathTex(r"A \cup A = A \qquad A \cap A = A", font_size=28),
            MathTex(r"A \cup \varnothing = A \qquad A \cap \varnothing = \varnothing", font_size=28),
            MathTex(r"(A')' = A", font_size=28),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.4).move_to(ORIGIN + UP * 0.05)
        self.play(LaggedStart(*[Write(p) for p in propiedades], lag_ratio=0.55), run_time=4.0)
        self.play(Indicate(propiedades[2], color=VERDE, scale_factor=1.04), run_time=1.4)
        self.wait(1.2)
        self.play(Indicate(propiedades[5], color=VERDE, scale_factor=1.06), run_time=1.4)
        self.wait(1.8)

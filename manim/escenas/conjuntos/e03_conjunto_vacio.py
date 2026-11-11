"""Unidad 1 · Conjuntos — e03: El conjunto vacío

Render: uv run manim render -qh escenas/conjuntos/e03_conjunto_vacio.py ConjuntoVacio
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import DOWN, FadeIn, FadeOut, Indicate, MathTex, ORIGIN, Text, UP, VGroup, Write

from comun.base import EscenaBase
from comun.colores import AMARILLO, GRIS, ROJO


class ConjuntoVacio(EscenaBase):
    def construct(self):
        titulo = Text("El conjunto vacío", font_size=38, color=AMARILLO).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.0)

        vacio = MathTex(r"\varnothing = \{\}", font_size=68).move_to(ORIGIN + UP * 0.6)
        self.play(Write(vacio), run_time=1.4)
        etiqueta = Text("no tiene elementos", font_size=26, color=GRIS)
        etiqueta.next_to(vacio, DOWN, buff=0.9)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.play(Indicate(vacio, color=AMARILLO, scale_factor=1.08), run_time=1.2)
        self.wait(1.6)

        cuidado = VGroup(
            MathTex(r"\{\varnothing\} \neq \varnothing", font_size=56, color=ROJO),
            Text("{∅} sí tiene un elemento: el conjunto ∅", font_size=26, color=GRIS),
        ).arrange(DOWN, buff=0.5).move_to(ORIGIN + UP * 0.3)
        self.play(FadeOut(vacio), FadeOut(etiqueta))
        self.play(FadeIn(cuidado), run_time=1.2)
        self.wait(2.0)

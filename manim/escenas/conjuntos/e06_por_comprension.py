"""Unidad 1 · Conjuntos — e06: Notación por comprensión

Render: uv run manim render -qh escenas/conjuntos/e06_por_comprension.py PorComprension
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import DOWN, FadeIn, FadeOut, FadeTransform, Indicate, MathTex, ORIGIN, Text, UP, VGroup, Write

from comun.base import EscenaBase
from comun.colores import GRIS, MORADO, VERDE


class PorComprension(EscenaBase):
    def construct(self):
        titulo = Text("Por comprensión", font_size=38, color=MORADO).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.0)

        formula = MathTex(r"B = \{x : x \text{ es un digito par}\}", font_size=50).move_to(
            ORIGIN + UP * 0.7
        )
        self.play(Write(formula), run_time=1.5)
        etiqueta = Text('la regla dice qué elementos se aceptan', font_size=26, color=GRIS)
        etiqueta.next_to(formula, DOWN, buff=0.8)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.4)

        # destacar el "tal que"
        self.play(formula.animate.set_color_by_tex(r" : ", MORADO), run_time=1.0)
        nota = Text('":" se lee "tal que"', font_size=26, color=MORADO)
        nota.move_to(etiqueta)
        self.play(FadeOut(etiqueta), FadeIn(nota), run_time=0.9)
        self.wait(1.6)

        # la regla produce la lista
        resultado = MathTex(r"B = \{0, 2, 4, 6, 8\}", font_size=50, color=VERDE).move_to(
            ORIGIN + UP * 0.7
        )
        self.play(FadeTransform(formula, resultado), run_time=1.4)
        nota2 = Text("la regla filtra los elementos que la cumplen", font_size=26, color=GRIS)
        nota2.move_to(nota)
        self.play(FadeOut(nota), FadeIn(nota2), run_time=0.9)
        self.play(Indicate(resultado, color=VERDE, scale_factor=1.05), run_time=1.2)
        self.wait(1.6)

        # otro ejemplo: primos
        primos = VGroup(
            MathTex(r"P = \{x : x \text{ es primo menor que 10}\}", font_size=46),
            MathTex(r"P = \{2, 3, 5, 7\}", font_size=46, color=VERDE),
        ).arrange(DOWN, buff=0.7).move_to(ORIGIN + UP * 0.4)
        self.play(FadeOut(resultado), FadeOut(nota2))
        self.play(FadeIn(primos), run_time=1.2)
        self.wait(2.0)

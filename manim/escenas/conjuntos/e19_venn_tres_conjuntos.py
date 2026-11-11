"""Unidad 1 · Conjuntos — e19: Diagramas de Venn con 3 conjuntos

Render: uv run manim render -qh escenas/conjuntos/e19_venn_tres_conjuntos.py VennTresConjuntos
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import (
    Circle,
    Create,
    DOWN,
    FadeIn,
    Flash,
    LEFT,
    MathTex,
    ORIGIN,
    Rectangle,
    RIGHT,
    Text,
    UL,
    UP,
)
from manim.mobject.geometry.boolean_ops import Intersection

from comun.base import EscenaBase
from comun.colores import AMARILLO, AZUL, BLANCO, GRIS, MORADO, VERDE
from comun.venn import pintar


class VennTresConjuntos(EscenaBase):
    def construct(self):
        # 1) Los tres círculos y el universo
        ca = Circle(radius=1.5, color=AZUL, stroke_width=3).shift(LEFT * 1.0 + DOWN * 0.4)
        cb = Circle(radius=1.5, color=VERDE, stroke_width=3).shift(RIGHT * 1.0 + DOWN * 0.4)
        cc = Circle(radius=1.5, color=MORADO, stroke_width=3).shift(UP * 1.1)
        universo = Rectangle(width=7.6, height=6.2, color=GRIS, stroke_width=1).move_to(
            ORIGIN + DOWN * 0.2
        ).set_fill(opacity=0)

        etiqueta_a = Text("A", font_size=32, color=AZUL).move_to(ca.get_center() + LEFT * 0.65 + DOWN * 0.5)
        etiqueta_b = Text("B", font_size=32, color=VERDE).move_to(cb.get_center() + RIGHT * 0.65 + DOWN * 0.5)
        etiqueta_c = Text("C", font_size=32, color=MORADO).move_to(cc.get_center() + UP * 0.65)
        etiqueta_u = Text("U", font_size=26, color=GRIS).move_to(
            universo.get_corner(UL) + RIGHT * 0.35 + DOWN * 0.35
        )

        self.play(Create(universo), run_time=1.0)
        self.play(Create(ca), Create(cb), Create(cc), run_time=1.5)
        self.play(
            FadeIn(etiqueta_a),
            FadeIn(etiqueta_b),
            FadeIn(etiqueta_c),
            FadeIn(etiqueta_u),
            run_time=0.8,
        )

        # 2) Se alumbra el centro: A ∩ B ∩ C
        centro = Intersection(Intersection(ca, cb), cc)
        region_centro = pintar(centro, AMARILLO, 0.75)
        etiqueta_centro = MathTex(r"A \cap B \cap C", font_size=28, color=BLANCO).move_to(ORIGIN + UP * 0.05)
        self.play(FadeIn(region_centro), FadeIn(etiqueta_centro), run_time=1.0)
        self.play(
            Flash(region_centro, color=AMARILLO, flash_radius=0.5, line_length=0.28, num_lines=12),
            run_time=1.6,
        )
        nota = Text("la zona donde los tres coinciden", font_size=26, color=GRIS)
        nota.next_to(etiqueta_centro, DOWN, buff=0.6)
        self.play(FadeIn(nota), run_time=0.9)
        self.wait(2.0)

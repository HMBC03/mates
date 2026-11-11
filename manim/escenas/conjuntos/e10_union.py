"""Unidad 1 · Conjuntos — e10: Unión

Render: uv run manim render -qh escenas/conjuntos/e10_union.py Union
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import (
    Create,
    DOWN,
    FadeIn,
    FadeOut,
    Flash,
    Indicate,
    LEFT,
    MathTex,
    ORIGIN,
    RIGHT,
    Text,
    UP,
    Write,
)

from comun.base import EscenaBase
from comun.colores import AMARILLO, AZUL, GRIS, VERDE
from comun.venn import crear_venn, pintar


class Union(EscenaBase):
    def construct(self):
        titulo = MathTex(r"A \cup B", font_size=56, color=VERDE).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.2)
        etiqueta = Text("junta todo lo que está en A o en B, sin repetir", font_size=26, color=GRIS)
        etiqueta.next_to(titulo, DOWN, buff=0.5)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.4)

        # 1) Ejemplo con datos
        conjunto_a = MathTex(r"A = \{1, 2, ", r"3", r"\}", font_size=46).shift(LEFT * 2.7 + UP * 1.3)
        conjunto_b = MathTex(r"B = \{", r"3", r", 4, 5\}", font_size=46).shift(RIGHT * 2.7 + UP * 1.3)
        self.play(FadeOut(etiqueta))
        self.play(Write(conjunto_a), Write(conjunto_b), run_time=1.2)
        self.play(
            Indicate(conjunto_a[1], color=AMARILLO, scale_factor=1.5),
            Indicate(conjunto_b[1], color=AMARILLO, scale_factor=1.5),
            run_time=1.4,
        )
        self.wait(1.0)

        union = MathTex(r"A \cup B = \{1, 2, 3, 4, 5\}", font_size=46, color=VERDE).move_to(
            ORIGIN + DOWN * 1.0
        )
        self.play(Write(union), run_time=1.3)
        self.play(Indicate(union, color=VERDE, scale_factor=1.05), run_time=1.2)
        self.wait(1.4)
        self.play(FadeOut(conjunto_a), FadeOut(conjunto_b), FadeOut(union))

        # 2) El diagrama: se alumbra la unión
        venn = crear_venn(centro=ORIGIN + UP * 0.15)
        etiqueta_a = Text("A", font_size=32, color=AZUL).move_to(
            venn["circulo_a"].get_center() + LEFT * 0.75 + UP * 0.8
        )
        etiqueta_b = Text("B", font_size=32, color=VERDE).move_to(
            venn["circulo_b"].get_center() + RIGHT * 0.75 + UP * 0.8
        )
        self.play(
            Create(venn["universo"]),
            Create(venn["circulo_a"]),
            Create(venn["circulo_b"]),
            FadeIn(etiqueta_a),
            FadeIn(etiqueta_b),
            run_time=1.4,
        )
        region_union = pintar(venn["union"], VERDE, 0.45)
        self.play(FadeIn(region_union), run_time=1.0)
        self.play(
            Flash(region_union, color=VERDE, flash_radius=0.9, line_length=0.35, num_lines=16),
            run_time=1.6,
        )
        self.wait(1.8)

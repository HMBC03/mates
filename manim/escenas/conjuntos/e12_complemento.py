"""Unidad 1 · Conjuntos — e12: Complemento

Render: uv run manim render -qh escenas/conjuntos/e12_complemento.py Complemento
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
    MathTex,
    ORIGIN,
    RIGHT,
    Text,
    UL,
    UP,
    VGroup,
    Write,
)

from comun.base import EscenaBase
from comun.colores import AZUL, GRIS, MORADO
from comun.venn import crear_venn, pintar


class Complemento(EscenaBase):
    def construct(self):
        titulo = MathTex(r"A'", font_size=56, color=MORADO).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.2)
        etiqueta = Text("todo lo que está en U pero NO en A", font_size=26, color=GRIS)
        etiqueta.next_to(titulo, DOWN, buff=0.5)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.4)

        # 1) Diagrama: se alumbra el complemento
        venn = crear_venn(centro=ORIGIN + UP * 0.1)
        etiqueta_a = Text("A", font_size=32, color=AZUL).move_to(
            venn["circulo_a"].get_center() + UP * 0.9
        )
        etiqueta_u = Text("U", font_size=28, color=MORADO).move_to(
            venn["universo"].get_corner(UL) + RIGHT * 0.4 + DOWN * 0.4
        )
        self.play(FadeOut(etiqueta))
        self.play(
            Create(venn["universo"]),
            Create(venn["circulo_a"]),
            FadeIn(etiqueta_a),
            FadeIn(etiqueta_u),
            run_time=1.4,
        )
        region_comp = pintar(venn["complemento_a"], MORADO, 0.45)
        self.play(FadeIn(region_comp), run_time=1.0)
        self.play(
            Flash(region_comp, color=MORADO, flash_radius=0.9, line_length=0.35, num_lines=16),
            run_time=1.6,
        )
        self.wait(1.6)
        self.play(
            FadeOut(venn["universo"]),
            FadeOut(venn["circulo_a"]),
            FadeOut(etiqueta_a),
            FadeOut(etiqueta_u),
            FadeOut(region_comp),
        )

        # 2) Leyes de De Morgan (solo símbolos)
        de_morgan = VGroup(
            MathTex(r"(A \cup B)' = A' \cap B'", font_size=40),
            MathTex(r"(A \cap B)' = A' \cup B'", font_size=40),
        ).arrange(DOWN, buff=0.6).move_to(ORIGIN + UP * 0.3)
        self.play(FadeIn(de_morgan), run_time=1.2)
        nota = Text("leyes de De Morgan", font_size=26, color=GRIS)
        nota.next_to(de_morgan, DOWN, buff=0.7)
        self.play(FadeIn(nota), run_time=0.9)
        self.wait(2.0)

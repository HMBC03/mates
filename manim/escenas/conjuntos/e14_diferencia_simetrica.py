"""Unidad 1 · Conjuntos — e14: Diferencia simétrica

Render: uv run manim render -qh escenas/conjuntos/e14_diferencia_simetrica.py DiferenciaSimetrica
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
from comun.colores import AMARILLO, AZUL, GRIS, ROJO, VERDE
from comun.venn import crear_venn, pintar


class DiferenciaSimetrica(EscenaBase):
    def construct(self):
        titulo = MathTex(r"A \triangle B", font_size=56, color=AMARILLO).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.2)
        etiqueta = Text("los elementos que están en UNO y solo uno de los dos", font_size=26, color=GRIS)
        etiqueta.next_to(titulo, DOWN, buff=0.5)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.4)

        # 1) Ejemplo: el 3 compartido desaparece
        conjunto_a = MathTex(r"A = \{1, 2, ", r"3", r"\}", font_size=46).shift(LEFT * 2.7 + UP * 1.2)
        conjunto_b = MathTex(r"B = \{", r"3", r", 4, 5\}", font_size=46).shift(RIGHT * 2.7 + UP * 1.2)
        self.play(FadeOut(etiqueta))
        self.play(Write(conjunto_a), Write(conjunto_b), run_time=1.2)
        self.play(
            Indicate(conjunto_a[1], color=ROJO, scale_factor=1.5),
            Indicate(conjunto_b[1], color=ROJO, scale_factor=1.5),
            run_time=1.4,
        )
        self.wait(0.8)
        self.play(FadeOut(conjunto_a[1]), FadeOut(conjunto_b[1]), run_time=1.0)
        self.wait(0.8)

        resultado = MathTex(r"A \triangle B = \{1, 2, 4, 5\}", font_size=46, color=AMARILLO).move_to(
            ORIGIN + DOWN * 1.0
        )
        self.play(Write(resultado), run_time=1.3)
        self.play(Indicate(resultado, color=AMARILLO, scale_factor=1.06), run_time=1.2)
        self.wait(1.4)
        self.play(FadeOut(conjunto_a), FadeOut(conjunto_b), FadeOut(resultado))

        # 2) Las dos "lunas"
        venn = crear_venn(centro=ORIGIN + UP * 0.1)
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
        region_a = pintar(venn["solo_a"], ROJO, 0.55)
        region_b = pintar(venn["solo_b"], VERDE, 0.55)
        self.play(FadeIn(region_a), run_time=0.9)
        self.play(Flash(region_a, color=ROJO, flash_radius=0.6, line_length=0.3, num_lines=12), run_time=1.4)
        self.wait(0.8)
        self.play(FadeIn(region_b), run_time=0.9)
        self.play(Flash(region_b, color=VERDE, flash_radius=0.6, line_length=0.3, num_lines=12), run_time=1.4)
        self.wait(0.8)
        region_tri = pintar(venn["diferencia_simetrica"], AMARILLO, 0.35)
        self.play(FadeIn(region_tri), run_time=0.9)
        self.play(
            Flash(region_tri, color=AMARILLO, flash_radius=0.8, line_length=0.35, num_lines=16),
            run_time=1.6,
        )
        self.wait(1.8)

"""Unidad 1 · Conjuntos — e20: Cardinalidad (inclusión-exclusión)

Render: uv run manim render -qh escenas/conjuntos/e20_cardinalidad.py Cardinalidad
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
    UL,
    UP,
    VGroup,
    Write,
)

from comun.base import EscenaBase
from comun.colores import AMARILLO, AZUL, BLANCO, GRIS, MORADO, VERDE
from comun.venn import crear_venn, pintar


class Cardinalidad(EscenaBase):
    def construct(self):
        # 1) La fórmula de inclusión-exclusión
        formula = MathTex(r"|A \cup B| = |A| + |B| - |A \cap B|", font_size=40, color=VERDE)
        formula.to_edge(UP, buff=0.6)
        self.play(Write(formula), run_time=1.3)
        etiqueta = Text("al sumar |A|+|B|, lo común se cuenta dos veces: se resta una vez", font_size=24, color=GRIS)
        etiqueta.next_to(formula, DOWN, buff=0.5)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.6)

        # 2) Ejemplo con el mismo Venn del problema
        venn = crear_venn(centro=ORIGIN + DOWN * 0.1)
        etiqueta_a = Text("A", font_size=32, color=AZUL).move_to(
            venn["circulo_a"].get_center() + LEFT * 0.75 + UP * 0.8
        )
        etiqueta_b = Text("B", font_size=32, color=VERDE).move_to(
            venn["circulo_b"].get_center() + RIGHT * 0.75 + UP * 0.8
        )
        etiqueta_u = Text("U", font_size=26, color=MORADO).move_to(
            venn["universo"].get_corner(UL) + RIGHT * 0.35 + DOWN * 0.35
        )
        self.play(FadeOut(etiqueta))
        self.play(
            Create(venn["universo"]),
            Create(venn["circulo_a"]),
            Create(venn["circulo_b"]),
            FadeIn(etiqueta_a),
            FadeIn(etiqueta_b),
            FadeIn(etiqueta_u),
            run_time=1.4,
        )

        region_inter = pintar(venn["interseccion"], AMARILLO, 0.75)
        numero_8 = Text("8", font_size=34, color=BLANCO).move_to(venn["universo"].get_center())
        numero_10 = Text("10", font_size=30, color=BLANCO).move_to(venn["solo_a"].get_center())
        numero_7 = Text("7", font_size=30, color=BLANCO).move_to(venn["solo_b"].get_center())
        self.play(FadeIn(region_inter), FadeIn(numero_8), run_time=0.9)
        self.play(FadeIn(numero_10), FadeIn(numero_7), run_time=0.9)
        self.play(Indicate(region_inter, color=AMARILLO, scale_factor=1.06), run_time=1.0)
        self.play(Indicate(region_inter, color=AMARILLO, scale_factor=1.06), run_time=1.0)

        # 3) El cálculo final
        calculo = MathTex(r"18 + 15 - 8 = 25", font_size=44, color=VERDE).move_to(ORIGIN + DOWN * 2.4)
        self.play(Write(calculo), run_time=1.2)
        self.play(Flash(calculo, color=VERDE, flash_radius=0.7, line_length=0.3, num_lines=14), run_time=1.6)
        self.wait(1.8)

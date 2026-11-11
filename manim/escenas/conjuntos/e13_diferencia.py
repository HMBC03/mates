"""Unidad 1 · Conjuntos — e13: Diferencia

Render: uv run manim render -qh escenas/conjuntos/e13_diferencia.py Diferencia
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
from comun.colores import AZUL, GRIS, ROJO, VERDE
from comun.venn import crear_venn, pintar


class Diferencia(EscenaBase):
    def construct(self):
        titulo = MathTex(r"A - B", font_size=56, color=ROJO).to_edge(UP, buff=0.5)
        self.play(Write(titulo), run_time=1.2)
        etiqueta = Text("los elementos de A que NO están en B", font_size=26, color=GRIS)
        etiqueta.next_to(titulo, DOWN, buff=0.5)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.wait(1.4)

        # 1) Diagrama: se alumbra la parte de A que no toca a B
        venn = crear_venn(centro=ORIGIN + UP * 0.1)
        etiqueta_a = Text("A", font_size=32, color=AZUL).move_to(
            venn["circulo_a"].get_center() + LEFT * 0.75 + UP * 0.8
        )
        etiqueta_b = Text("B", font_size=32, color=VERDE).move_to(
            venn["circulo_b"].get_center() + RIGHT * 0.75 + UP * 0.8
        )
        self.play(FadeOut(etiqueta))
        self.play(
            Create(venn["universo"]),
            Create(venn["circulo_a"]),
            Create(venn["circulo_b"]),
            FadeIn(etiqueta_a),
            FadeIn(etiqueta_b),
            run_time=1.4,
        )
        region_dif = pintar(venn["solo_a"], ROJO, 0.55)
        self.play(FadeIn(region_dif), run_time=1.0)
        self.play(
            Flash(region_dif, color=ROJO, flash_radius=0.7, line_length=0.3, num_lines=12),
            run_time=1.6,
        )
        self.wait(1.6)
        self.play(
            FadeOut(venn["universo"]),
            FadeOut(venn["circulo_a"]),
            FadeOut(venn["circulo_b"]),
            FadeOut(etiqueta_a),
            FadeOut(etiqueta_b),
            FadeOut(region_dif),
        )

        # 2) Relación clave
        relacion = MathTex(r"A - B = A \cap B'", font_size=50, color=ROJO).move_to(
            ORIGIN + UP * 0.3
        )
        self.play(Write(relacion), run_time=1.3)
        self.play(Indicate(relacion, color=ROJO, scale_factor=1.05), run_time=1.2)
        self.wait(2.0)

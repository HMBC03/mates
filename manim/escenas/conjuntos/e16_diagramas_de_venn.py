"""Unidad 1 · Conjuntos — e16: Diagramas de Venn (las 4 zonas)

Render: uv run manim render -qh escenas/conjuntos/e16_diagramas_de_venn.py DiagramasDeVenn
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
    LEFT,
    MathTex,
    ORIGIN,
    RIGHT,
    Text,
    UL,
    UP,
    VGroup,
)

from comun.base import EscenaBase
from comun.colores import AMARILLO, AZUL, BLANCO, MORADO, VERDE
from comun.venn import crear_venn, pintar


class DiagramasDeVenn(EscenaBase):
    def dibujar_venn(self, venn):
        etiqueta_a = Text("A", font_size=32, color=AZUL).move_to(
            venn["circulo_a"].get_center() + LEFT * 0.75 + UP * 0.8
        )
        etiqueta_b = Text("B", font_size=32, color=VERDE).move_to(
            venn["circulo_b"].get_center() + RIGHT * 0.75 + UP * 0.8
        )
        etiqueta_u = Text("U", font_size=26, color=MORADO).move_to(
            venn["universo"].get_corner(UL) + RIGHT * 0.35 + DOWN * 0.35
        )
        self.play(
            Create(venn["universo"]),
            Create(venn["circulo_a"]),
            Create(venn["circulo_b"]),
            FadeIn(etiqueta_a),
            FadeIn(etiqueta_b),
            FadeIn(etiqueta_u),
            run_time=1.5,
        )
        return VGroup(etiqueta_a, etiqueta_b, etiqueta_u)

    def construct(self):
        venn = crear_venn(centro=ORIGIN + UP * 0.1)
        etiquetas = self.dibujar_venn(venn)

        # 1) La intersección
        region_inter = pintar(venn["interseccion"], AMARILLO, 0.75)
        zona_inter = MathTex(r"A \cap B", font_size=30, color=BLANCO).move_to(
            venn["universo"].get_center()
        )
        self.play(FadeIn(region_inter), FadeIn(zona_inter), run_time=1.0)
        self.play(
            Flash(region_inter, color=AMARILLO, flash_radius=0.55, line_length=0.28, num_lines=12),
            run_time=1.5,
        )
        self.wait(1.2)

        # 2) Solo A
        region_a = pintar(venn["solo_a"], AZUL, 0.45)
        zona_a = Text("solo A", font_size=24, color=BLANCO).move_to(venn["solo_a"].get_center())
        self.play(FadeIn(region_a), FadeIn(zona_a), run_time=1.0)
        self.play(Flash(region_a, color=AZUL, flash_radius=0.6, line_length=0.3, num_lines=10), run_time=1.4)
        self.wait(1.2)

        # 3) Solo B
        region_b = pintar(venn["solo_b"], VERDE, 0.45)
        zona_b = Text("solo B", font_size=24, color=BLANCO).move_to(venn["solo_b"].get_center())
        self.play(FadeIn(region_b), FadeIn(zona_b), run_time=1.0)
        self.play(Flash(region_b, color=VERDE, flash_radius=0.6, line_length=0.3, num_lines=10), run_time=1.4)
        self.wait(1.2)

        # 4) Ni A ni B
        region_fuera = pintar(venn["complemento"], MORADO, 0.4)
        zona_fuera = Text("ni A ni B", font_size=22, color=BLANCO).move_to(
            venn["universo"].get_center() + RIGHT * 2.55
        )
        self.play(FadeIn(region_fuera), FadeIn(zona_fuera), run_time=1.0)
        self.play(
            Flash(region_fuera, color=MORADO, flash_radius=0.8, line_length=0.35, num_lines=14),
            run_time=1.5,
        )
        self.wait(1.8)

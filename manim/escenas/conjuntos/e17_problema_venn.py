"""Unidad 1 · Conjuntos — e17: Problema resuelto con diagrama de Venn

30 personas · 18 toman café · 15 toman té · 8 toman ambos · ¿cuántos ninguno?

Render: uv run manim render -qh escenas/conjuntos/e17_problema_venn.py ProblemaVenn
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


class ProblemaVenn(EscenaBase):
    def construct(self):
        # Los datos del problema
        datos = VGroup(
            MathTex(r"30 \text{ personas}", font_size=40),
            MathTex(r"18 \text{ cafe} \qquad 15 \text{ te} \qquad 8 \text{ ambos}", font_size=38),
        ).arrange(DOWN, buff=0.45).to_edge(UP, buff=0.6)
        self.play(FadeIn(datos), run_time=1.2)
        self.wait(1.6)

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
        self.play(
            Create(venn["universo"]),
            Create(venn["circulo_a"]),
            Create(venn["circulo_b"]),
            FadeIn(etiqueta_a),
            FadeIn(etiqueta_b),
            FadeIn(etiqueta_u),
            run_time=1.5,
        )
        paso = Text("1) primero la intersección", font_size=26, color=GRIS)
        paso.to_edge(DOWN, buff=0.35)
        self.play(FadeIn(paso), run_time=0.8)

        # Paso 1: ambos = 8
        region_inter = pintar(venn["interseccion"], AMARILLO, 0.75)
        numero_8 = Text("8", font_size=36, color=BLANCO).move_to(venn["universo"].get_center())
        self.play(FadeIn(region_inter), FadeIn(numero_8), run_time=1.0)
        self.play(
            Flash(region_inter, color=AMARILLO, flash_radius=0.5, line_length=0.28, num_lines=10),
            run_time=1.4,
        )
        self.wait(1.0)

        # Paso 2: solo café = 18 - 8 = 10
        paso2 = Text("2) solo café: 18 − 8 = 10", font_size=26, color=GRIS)
        paso2.to_edge(DOWN, buff=0.35)
        region_a = pintar(venn["solo_a"], AZUL, 0.45)
        numero_10 = Text("10", font_size=32, color=BLANCO).move_to(venn["solo_a"].get_center())
        self.play(FadeOut(paso), FadeIn(paso2), FadeIn(region_a), FadeIn(numero_10), run_time=1.0)
        self.wait(1.4)

        # Paso 3: solo té = 15 - 8 = 7
        paso3 = Text("3) solo té: 15 − 8 = 7", font_size=26, color=GRIS)
        paso3.to_edge(DOWN, buff=0.35)
        region_b = pintar(venn["solo_b"], VERDE, 0.45)
        numero_7 = Text("7", font_size=32, color=BLANCO).move_to(venn["solo_b"].get_center())
        self.play(FadeOut(paso2), FadeIn(paso3), FadeIn(region_b), FadeIn(numero_7), run_time=1.0)
        self.wait(1.4)

        # Paso 4: ninguno = 30 - 25 = 5
        paso4 = Text("4) ninguno: 30 − (10 + 8 + 7) = 5", font_size=26, color=GRIS)
        paso4.to_edge(DOWN, buff=0.35)
        numero_5 = Text("5", font_size=30, color=MORADO).move_to(
            venn["universo"].get_center() + RIGHT * 2.55
        )
        self.play(FadeOut(paso3), FadeIn(paso4), FadeIn(numero_5), run_time=1.0)
        self.play(Flash(numero_5, color=MORADO, flash_radius=0.7, line_length=0.3, num_lines=12), run_time=1.5)
        self.wait(0.8)
        self.play(Indicate(numero_5, color=MORADO, scale_factor=1.4), run_time=1.4)

        respuesta = Text("5 personas no toman ninguno", font_size=30, color=VERDE)
        respuesta.to_edge(DOWN, buff=0.35)
        self.play(FadeOut(paso4), FadeIn(respuesta), run_time=0.9)
        self.wait(2.0)

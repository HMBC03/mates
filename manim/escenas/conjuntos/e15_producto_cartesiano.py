"""Unidad 1 · Conjuntos — e15: Producto cartesiano

Render: uv run manim render -qh escenas/conjuntos/e15_producto_cartesiano.py ProductoCartesiano
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from manim import (
    DOWN,
    FadeIn,
    FadeOut,
    FadeTransform,
    Indicate,
    LaggedStart,
    MathTex,
    ORIGIN,
    RIGHT,
    Text,
    UP,
    VGroup,
    Write,
)

from comun.base import EscenaBase
from comun.colores import AMARILLO, GRIS, MORADO, ROJO, VERDE


class ProductoCartesiano(EscenaBase):
    def construct(self):
        # 1) El par ordenado
        pares_desiguales = VGroup(
            MathTex(r"(1, 2)", font_size=54),
            MathTex(r"\neq", font_size=54, color=ROJO),
            MathTex(r"(2, 1)", font_size=54),
        ).arrange(RIGHT, buff=0.7).move_to(ORIGIN + UP * 1.2)
        self.play(FadeIn(pares_desiguales), run_time=1.0)
        etiqueta = Text("el orden dentro del par importa", font_size=26, color=GRIS)
        etiqueta.next_to(pares_desiguales, DOWN, buff=0.7)
        self.play(FadeIn(etiqueta), run_time=0.9)
        self.play(Indicate(pares_desiguales[1], color=ROJO, scale_factor=1.25), run_time=1.2)
        self.wait(1.6)

        # 2) La cuadrícula de pares
        encabezado = MathTex(
            r"A \times B \quad A = \{1, 2\} \quad B = \{x, y\}", font_size=36, color=MORADO
        ).move_to(ORIGIN + UP * 1.75)
        pares = VGroup(
            *[MathTex(f"({a}, {b})", font_size=44) for a in ("1", "2") for b in ("x", "y")]
        )
        pares.arrange_in_grid(rows=2, cols=2, buff=0.9).move_to(ORIGIN + DOWN * 0.15)
        self.play(FadeOut(etiqueta))
        self.play(FadeTransform(pares_desiguales, encabezado), run_time=1.2)
        self.play(LaggedStart(*[Write(p) for p in pares], lag_ratio=0.4), run_time=2.0)
        self.wait(1.0)
        self.play(Indicate(pares, color=MORADO, scale_factor=1.03), run_time=1.2)
        self.wait(1.2)

        # 3) El conteo
        conteo = MathTex(r"|A \times B| = |A| \cdot |B| = 2 \cdot 2 = 4", font_size=42, color=VERDE).move_to(
            ORIGIN + DOWN * 2.15
        )
        self.play(Write(conteo), run_time=1.2)
        self.play(Indicate(conteo, color=VERDE, scale_factor=1.04), run_time=1.2)
        self.wait(1.4)

        # 4) A × B no es B × A
        self.play(FadeOut(encabezado), FadeOut(pares), FadeOut(conteo))
        aviso = MathTex(r"A \times B \neq B \times A", font_size=50, color=AMARILLO).move_to(
            ORIGIN + UP * 0.3
        )
        self.play(FadeIn(aviso), run_time=1.0)
        nota = Text("en B × A los pares van al revés", font_size=26, color=GRIS)
        nota.next_to(aviso, DOWN, buff=0.7)
        self.play(FadeIn(nota), run_time=0.9)
        self.play(Indicate(aviso, color=AMARILLO, scale_factor=1.06), run_time=1.2)
        self.wait(1.8)

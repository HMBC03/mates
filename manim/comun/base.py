"""Clase base y utilidades de presentación para todas las escenas."""

from manim import DOWN, FadeIn, FadeOut, RoundedRectangle, Scene, Text, UP, VGroup

from comun.colores import BLANCO, FONDO, TARJETA


class EscenaBase(Scene):
    """Fondo oscuro común, pie de página reemplazable y método `borrar`.

    Filosofía de diseño: la escena muestra SOLO lo visual (diagramas, símbolos,
    conjuntos). La explicación en palabras vive en la web, al lado del video.
    """

    def setup(self):
        self.camera.background_color = FONDO
        self.pie_actual = None

    def mostrar_pie(self, texto, color=BLANCO):
        """Muestra una frase corta fija en la parte inferior (reemplaza la anterior)."""
        nuevo = Text(texto, font_size=26, color=color).to_edge(DOWN, buff=0.35)
        if self.pie_actual is not None:
            self.play(FadeOut(self.pie_actual), FadeIn(nuevo, shift=UP * 0.1))
        else:
            self.play(FadeIn(nuevo, shift=UP * 0.1))
        self.pie_actual = nuevo
        return nuevo

    def borrar_pie(self):
        if self.pie_actual is not None:
            self.play(FadeOut(self.pie_actual), run_time=0.35)
            self.pie_actual = None

    def borrar(self, *grupos):
        """Desvanece los grupos dados (ignora los que ya no están en escena)."""
        for grupo in grupos:
            if grupo is not None and grupo in self.mobjects:
                self.play(FadeOut(grupo), run_time=0.45)


def con_fondo(grupo, color=TARJETA, buff=0.4, radio=0.15):
    """Envuelve un grupo en una tarjeta redondeada con fondo semitransparente."""
    fondo = RoundedRectangle(
        corner_radius=radio,
        width=grupo.width + 2 * buff,
        height=grupo.height + 2 * buff,
        fill_color=color,
        fill_opacity=0.85,
        stroke_width=0,
    ).move_to(grupo)
    return VGroup(fondo, grupo)

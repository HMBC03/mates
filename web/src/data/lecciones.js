// Contenido de la Unidad 1 · Conjuntos.
// Generado a partir del temario y de las lecciones originales.

export const lecciones = [
  {
    "id": "u1-paso-1",
    "anchor": "#paso-1",
    "numero": 1,
    "titulo": "¿Qué es un conjunto?",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "¿Qué es un conjunto?",
    "subtitulo": "Una colección bien definida",
    "formulaHtml": "V = {a, e, i, o, u}",
    "duracion": "3 min",
    "bodyHtml": "<p>Un <strong>conjunto</strong> es una colección <em>bien definida</em> de objetos: ante cualquier objeto debe quedar claro, sin discusión, si está o no en la colección. Cada objeto se llama <strong>elemento</strong>.</p>\n        <p>Se escribe entre <strong>llaves</strong> <span class=\"simbolo\">{ }</span> y los elementos van separados por comas.</p>\n        <div class=\"ejemplo\">V = {a, e, i, o, u} — el conjunto de las vocales.<br>{1, 3, 5, 7} — los impares menores que 9.</div>\n        <div class=\"cuidado\">“Las personas altas” <strong>no</strong> es un conjunto: “altas” es ambiguo (¿altas cuánto?).</div>",
    "video": {
      "src": "/assets/videos/conjuntos/e01_que_es_un_conjunto.mp4",
      "aria": "Reproducir animación: ¿Qué es un conjunto?",
      "tiempo": "0:09",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-2",
    "anchor": "#paso-2",
    "numero": 2,
    "titulo": "Pertenencia: ∈ y ∉",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "Pertenencia",
    "subtitulo": "Estar o no estar en el conjunto",
    "formulaHtml": "a ∈ V",
    "duracion": "3 min",
    "bodyHtml": "<p>Decir que un objeto es elemento de un conjunto se escribe con <span class=\"simbolo\">∈</span> (pertenece) y <span class=\"simbolo\">∉</span> (no pertenece).</p>\n        <div class=\"ejemplo\">V = {a, e, i, o, u}:<br><strong>a ∈ V</strong> — “a pertenece a V”.<br><strong>b ∉ V</strong> — “b no pertenece a V”.</div>\n        <p>La rayita inclinada <span class=\"simbolo\">∉</span> significa “no”; funciona igual que en ≠ (no es igual).</p>",
    "video": {
      "src": "/assets/videos/conjuntos/e02_pertenencia.mp4",
      "aria": "Reproducir animación: Pertenencia: ∈ y ∉",
      "tiempo": "0:10",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-3",
    "anchor": "#paso-3",
    "numero": 3,
    "titulo": "El conjunto vacío ∅",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "Conjunto vacío",
    "subtitulo": "El conjunto sin elementos",
    "formulaHtml": "∅ = { }",
    "duracion": "3 min",
    "bodyHtml": "<p>El <strong>conjunto vacío</strong>, escrito <span class=\"simbolo\">∅</span> o <span class=\"simbolo\">{ }</span>, es el conjunto que <strong>no tiene ningún elemento</strong>.</p>\n        <div class=\"cuidado\"><strong>Cuidado:</strong> {∅} <strong>no</strong> es lo mismo que ∅. Las llaves crean un conjunto nuevo que contiene un solo elemento: el conjunto vacío. Es como la diferencia entre una bolsa vacía y una bolsa que contiene otra bolsa vacía.</div>",
    "video": {
      "src": "/assets/videos/conjuntos/e03_conjunto_vacio.mp4",
      "aria": "Reproducir animación: El conjunto vacío ∅",
      "tiempo": "0:10",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-4",
    "anchor": "#paso-4",
    "numero": 4,
    "titulo": "El conjunto universal U",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "Conjunto universal",
    "subtitulo": "La caja de todo",
    "formulaHtml": "A ⊆ U",
    "duracion": "3 min",
    "bodyHtml": "<p>En cada problema trabajamos dentro de un <strong>conjunto universal U</strong>: la “caja” que contiene a <em>todos</em> los elementos que nos interesan en ese problema. Todo lo demás se dibuja dentro de U.</p>\n        <div class=\"ejemplo\">Si hablamos de vocales, U puede ser el conjunto de <em>todas las letras</em>; las vocales serían un conjunto más pequeño dentro de U.</div>",
    "video": {
      "src": "/assets/videos/conjuntos/e04_conjunto_universal.mp4",
      "aria": "Reproducir animación: El conjunto universal U",
      "tiempo": "0:08",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-5",
    "anchor": "#paso-5",
    "numero": 5,
    "titulo": "Notación por extensión",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "Por extensión",
    "subtitulo": "Listar todos los elementos",
    "formulaHtml": "A = {1, 2, 3}",
    "duracion": "3 min",
    "bodyHtml": "<p><strong>Por extensión</strong> se escribe un conjunto listando <em>todos</em> sus elementos, uno a uno, entre llaves.</p>\n        <div class=\"ejemplo\">A = {1, 2, 3, 4, 5}<br>B = {a, e, i, o, u}</div>\n        <p>Funciona cuando hay pocos elementos o cuando son fáciles de listar.</p>",
    "video": {
      "src": "/assets/videos/conjuntos/e05_por_extension.mp4",
      "aria": "Reproducir animación: Notación por extensión",
      "tiempo": "0:09",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-6",
    "anchor": "#paso-6",
    "numero": 6,
    "titulo": "Notación por comprensión",
    "eyebrow": "Conjuntos · 4 min",
    "tituloRuta": "Por comprensión",
    "subtitulo": "Describir con una regla",
    "formulaHtml": "B = {x : x es par}",
    "duracion": "4 min",
    "bodyHtml": "<p><strong>Por comprensión</strong> se describe el conjunto con una <em>regla</em> que cumplen sus elementos:</p>\n        <div class=\"ejemplo\">B = {x : x es un dígito par} = {0, 2, 4, 6, 8}</div>\n        <p>La letra <span class=\"simbolo\">x</span> es la variable (representa al elemento) y los dos puntos <span class=\"simbolo\">:</span> se leen <strong>“tal que”</strong>. La regla actúa como un filtro: deja pasar solo los elementos que la cumplen.</p>\n        <div class=\"ejemplo\">P = {x : x es primo menor que 10} = {2, 3, 5, 7}</div>\n        <div class=\"dato\">💡 Un mismo conjunto puede escribirse de las dos formas: extensión y comprensión son dos caras de la misma moneda.</div>",
    "video": {
      "src": "/assets/videos/conjuntos/e06_por_comprension.mp4",
      "aria": "Reproducir animación: Notación por comprensión",
      "tiempo": "0:17",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-7",
    "anchor": "#paso-7",
    "numero": 7,
    "titulo": "Contenencia: A ⊆ B",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "Contenencia",
    "subtitulo": "Un conjunto dentro de otro",
    "formulaHtml": "A ⊆ B",
    "duracion": "3 min",
    "bodyHtml": "<p>Decimos que <strong>A está contenido en B</strong> (A es <strong>subconjunto</strong> de B) y escribimos <span class=\"simbolo\">A ⊆ B</span> cuando <em>todo elemento de A también está en B</em>.</p>\n        <div class=\"ejemplo\">A = {1, 2} y B = {1, 2, 3, 4} ⇒ A ⊆ B: todo elemento de A está en B.</div>\n        <p>En el dibujo, A queda como un círculo pequeño completamente dentro del círculo grande B.</p>",
    "video": {
      "src": "/assets/videos/conjuntos/e07_contenencia.mp4",
      "aria": "Reproducir animación: Contenencia: A ⊆ B",
      "tiempo": "0:13",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-8",
    "anchor": "#paso-8",
    "numero": 8,
    "titulo": "Igualdad de conjuntos",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "Igualdad",
    "subtitulo": "Los mismos elementos",
    "formulaHtml": "A = B",
    "duracion": "3 min",
    "bodyHtml": "<p>Dos conjuntos son <strong>iguales</strong> cuando tienen exactamente los mismos elementos:</p>\n        <div class=\"ejemplo\"><strong>A = B</strong> significa A ⊆ B y B ⊆ A al mismo tiempo.</div>\n        <p>Dos consecuencias que simplifican mucho:</p>\n        <ul>\n          <li>El <strong>orden no importa</strong>: {1, 2, 3} = {3, 1, 2}.</li>\n          <li>Los <strong>repetidos no cuentan</strong>: {1, 2, 3} = {1, 1, 2, 2, 3}.</li>\n        </ul>",
    "video": {
      "src": "/assets/videos/conjuntos/e08_igualdad.mp4",
      "aria": "Reproducir animación: Igualdad de conjuntos",
      "tiempo": "0:13",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-9",
    "anchor": "#paso-9",
    "numero": 9,
    "titulo": "El conjunto de partes P(A)",
    "eyebrow": "Conjuntos · 4 min",
    "tituloRuta": "Conjunto de partes",
    "subtitulo": "Todos los subconjuntos",
    "formulaHtml": "|P(A)| = 2<sup>|A|</sup>",
    "duracion": "4 min",
    "bodyHtml": "<p>El <strong>conjunto de partes</strong> de A, escrito <span class=\"simbolo\">P(A)</span>, reúne a <em>todos</em> los subconjuntos de A, incluidos ∅ y el propio A.</p>\n        <div class=\"ejemplo\">Si A = {a, b}: P(A) = {∅, {a}, {b}, {a, b}}.</div>\n        <p>Fórmula del tamaño: <strong>|P(A)| = 2<sup>|A|</sup></strong>. Aquí 2² = 4 subconjuntos. ✓</p>",
    "video": {
      "src": "/assets/videos/conjuntos/e09_conjunto_de_partes.mp4",
      "aria": "Reproducir animación: El conjunto de partes P(A)",
      "tiempo": "0:14",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-10",
    "anchor": "#paso-10",
    "numero": 10,
    "titulo": "Unión: A ∪ B",
    "eyebrow": "Conjuntos · 4 min",
    "tituloRuta": "Unión",
    "subtitulo": "Juntar sin repetir",
    "formulaHtml": "A ∪ B",
    "duracion": "4 min",
    "bodyHtml": "<p>La <strong>unión</strong> junta todo lo que está en A <em>o</em> en B (o en ambos), <strong>sin repetir</strong> elementos.</p>\n        <div class=\"ejemplo\">A = {1, 2, 3} y B = {3, 4, 5}:<br>A ∪ B = {1, 2, 3, 4, 5} — el 3 no se escribe dos veces.</div>\n        <p>En el diagrama de Venn, la unión es <strong>toda la zona sombreada</strong> que cubren los dos círculos.</p>\n        <div class=\"dato\">💡 “Unión = juntar”.</div>",
    "video": {
      "src": "/assets/videos/conjuntos/e10_union.mp4",
      "aria": "Reproducir animación: Unión: A ∪ B",
      "tiempo": "0:18",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-11",
    "anchor": "#paso-11",
    "numero": 11,
    "titulo": "Intersección: A ∩ B",
    "eyebrow": "Conjuntos · 4 min",
    "tituloRuta": "Intersección",
    "subtitulo": "Solo lo común",
    "formulaHtml": "A ∩ B",
    "duracion": "4 min",
    "bodyHtml": "<p>La <strong>intersección</strong> reúne <em>solo</em> los elementos que están en A <em>y</em> en B <strong>a la vez</strong>.</p>\n        <div class=\"ejemplo\">A = {1, 2, 3} y B = {3, 4, 5}:<br>A ∩ B = {3} — el único elemento compartido.</div>\n        <p>En el Venn, es la <strong>zona del centro</strong> donde los dos círculos se solapan.</p>\n        <div class=\"dato\">💡 “Intersección = lo común”.</div>",
    "video": {
      "src": "/assets/videos/conjuntos/e11_interseccion.mp4",
      "aria": "Reproducir animación: Intersección: A ∩ B",
      "tiempo": "0:18",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-12",
    "anchor": "#paso-12",
    "numero": 12,
    "titulo": "Complemento: A′",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "Complemento",
    "subtitulo": "Lo que queda fuera",
    "formulaHtml": "A′",
    "duracion": "3 min",
    "bodyHtml": "<p>El <strong>complemento</strong> de A, escrito <span class=\"simbolo\">A′</span>, es todo lo que está en el universo U pero <strong>no</strong> está en A.</p>\n        <div class=\"ejemplo\">A′ = {x ∈ U : x ∉ A}</div>\n        <p>En el Venn, es <strong>todo lo que queda fuera del círculo A</strong> (dentro del rectángulo U).</p>\n        <p>Las <strong>leyes de De Morgan</strong> (las comprobarás con Venn en la práctica):</p>\n        <ul>\n          <li>(A ∪ B)′ = A′ ∩ B′</li>\n          <li>(A ∩ B)′ = A′ ∪ B′</li>\n        </ul>",
    "video": {
      "src": "/assets/videos/conjuntos/e12_complemento.mp4",
      "aria": "Reproducir animación: Complemento: A′",
      "tiempo": "0:15",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-13",
    "anchor": "#paso-13",
    "numero": 13,
    "titulo": "Diferencia: A − B",
    "eyebrow": "Conjuntos · 3 min",
    "tituloRuta": "Diferencia",
    "subtitulo": "Quitar elementos",
    "formulaHtml": "A − B",
    "duracion": "3 min",
    "bodyHtml": "<p>La <strong>diferencia</strong> <span class=\"simbolo\">A − B</span> son los elementos de A que <strong>no</strong> están en B. Es “quitarle a A lo que tenga de B”.</p>\n        <div class=\"ejemplo\">A − B = {x : x ∈ A y x ∉ B}</div>\n        <p>En el Venn, es la <strong>luna izquierda</strong>: la parte de A que no toca a B.</p>\n        <div class=\"ejemplo\"><strong>A − B = A ∩ B′</strong> — quitar B es quedarse con lo que no es B.</div>",
    "video": {
      "src": "/assets/videos/conjuntos/e13_diferencia.mp4",
      "aria": "Reproducir animación: Diferencia: A − B",
      "tiempo": "0:15",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-14",
    "anchor": "#paso-14",
    "numero": 14,
    "titulo": "Diferencia simétrica: A △ B",
    "eyebrow": "Conjuntos · 5 min",
    "tituloRuta": "Diferencia simétrica",
    "subtitulo": "Uno y solo uno",
    "formulaHtml": "A △ B",
    "duracion": "5 min",
    "bodyHtml": "<p>La <strong>diferencia simétrica</strong> <span class=\"simbolo\">A △ B</span> reúne los elementos que están en <strong>uno y solo uno</strong> de los dos conjuntos: lo que comparten <em>desaparece</em>.</p>\n        <div class=\"ejemplo\">A = {1, 2, 3} y B = {3, 4, 5}:<br>A △ B = (A − B) ∪ (B − A) = {1, 2} ∪ {4, 5} = {1, 2, 4, 5}.<br>¡El 3 desaparece porque está en ambos!</div>\n        <p>Forma equivalente: <strong>A △ B = (A ∪ B) − (A ∩ B)</strong> — “todo menos lo común”.</p>",
    "video": {
      "src": "/assets/videos/conjuntos/e14_diferencia_simetrica.mp4",
      "aria": "Reproducir animación: Diferencia simétrica: A △ B",
      "tiempo": "0:26",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-15",
    "anchor": "#paso-15",
    "numero": 15,
    "titulo": "Producto cartesiano: A × B",
    "eyebrow": "Conjuntos · 4 min",
    "tituloRuta": "Producto cartesiano",
    "subtitulo": "Pares ordenados",
    "formulaHtml": "A × B",
    "duracion": "4 min",
    "bodyHtml": "<p>Un <strong>par ordenado</strong> (a, b) guarda dos datos en un orden fijo: el primer lugar y el segundo lugar son distintos.</p>\n        <div class=\"cuidado\"><strong>Cuidado:</strong> (1, 2) ≠ (2, 1). ¡El orden importa!</div>\n        <p>El <strong>producto cartesiano</strong> <span class=\"simbolo\">A × B</span> es el conjunto de <em>todos</em> los pares ordenados posibles, con la primera componente en A y la segunda en B.</p>\n        <div class=\"ejemplo\">A = {1, 2} y B = {x, y}:<br>A × B = {(1, x), (1, y), (2, x), (2, y)}<br>Total: |A × B| = |A| · |B| = 2 · 2 = 4. ✓</div>\n        <div class=\"dato\">💡 En general <strong>A × B ≠ B × A</strong>: los pares van “al revés”.</div>",
    "video": {
      "src": "/assets/videos/conjuntos/e15_producto_cartesiano.mp4",
      "aria": "Reproducir animación: Producto cartesiano: A × B",
      "tiempo": "0:22",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-16",
    "anchor": "#paso-16",
    "numero": 16,
    "titulo": "Diagramas de Venn",
    "eyebrow": "Conjuntos · 4 min",
    "tituloRuta": "Diagramas de Venn",
    "subtitulo": "Ver las operaciones",
    "formulaHtml": "A, B ⊆ U",
    "duracion": "4 min",
    "bodyHtml": "<p>Un <strong>diagrama de Venn</strong> dibuja cada conjunto como un círculo dentro del rectángulo U. Con dos conjuntos A y B quedan <strong>4 zonas</strong>:</p>\n        <ul>\n          <li><span class=\"simbolo\">A ∩ B</span>: el centro, donde se solapan.</li>\n          <li><strong>Solo A</strong>: la parte de A sin B.</li>\n          <li><strong>Solo B</strong>: la parte de B sin A.</li>\n          <li><strong>Ni A ni B</strong>: lo que queda fuera de ambos círculos.</li>\n        </ul>\n        <p>Sirve para <em>ver</em> las operaciones y para resolver problemas de conteo (siguiente paso).</p>",
    "video": {
      "src": "/assets/videos/conjuntos/e16_diagramas_de_venn.mp4",
      "aria": "Reproducir animación: Diagramas de Venn",
      "tiempo": "0:16",
      "pie": "Mira la idea clave de este paso."
    }
  },
  {
    "id": "u1-paso-17",
    "anchor": "#paso-17",
    "numero": 17,
    "titulo": "Resolver un problema con Venn",
    "eyebrow": "Conjuntos · 4 min",
    "tituloRuta": "Problema con Venn",
    "subtitulo": "Contar con zonas",
    "formulaHtml": "30 − (10 + 8 + 7) = 5",
    "duracion": "4 min",
    "bodyHtml": "<p><strong>Estrategia:</strong> llena <strong>primero la intersección</strong> y resta hacia afuera.</p>\n        <div class=\"ejemplo\">\n          <strong>Problema.</strong> En un grupo de 30 personas: 18 toman café, 15 toman té y 8 toman ambos. ¿Cuántas no toman ninguno?<br><br>\n          1) Intersección: 8. &nbsp;·&nbsp; 2) Solo café: 18 − 8 = 10. &nbsp;·&nbsp; 3) Solo té: 15 − 8 = 7.<br>\n          4) Ni café ni té: 30 − (10 + 8 + 7) = <strong>5 personas</strong>. ✓\n        </div>\n        <p>El video muestra los números apareciendo dentro de cada zona, en orden.</p>",
    "video": {
      "src": "/assets/videos/conjuntos/e17_problema_venn.mp4",
      "aria": "Reproducir animación: Resolver un problema con Venn",
      "tiempo": "0:20",
      "pie": "Mira la idea clave de este paso."
    }
  }
];

export const practica = {
  titulo: "Ejercicios del Taller 1",
  introHtml: "Intenta cada ejercicio <strong>antes</strong> de abrir la solución. El taller completo forma parte del material del curso.",
  ejercicios: [
  {
    "titulo": "Ejercicio IX — Describir conjuntos con palabras",
    "enunciadoHtml": "<p>Sea U el conjunto de pacientes de un hospital, con:</p>\n        <p>A: mayores de 20 años · B: mujeres · C: con enfermedades virales.</p>\n        <p>Describe con palabras: 1. A′ ∩ C · 2. A ∪ B · 3. B′ ∪ C′ · 4. (A ∩ C)′ · 5. A′ ∪ C′ ·\n           6. (A ∪ C)′ · 7. A′ ∩ C′ · 8. A ∩ B ∩ C · 9. A − B · 10. (A − B) ∩ C</p>",
    "solucionHtml": "<summary>Ver solución</summary>\n          <ol>\n            <li><strong>A′ ∩ C</strong>: pacientes de 20 años o menos con enfermedades virales.</li>\n            <li><strong>A ∪ B</strong>: pacientes mayores de 20 años o mujeres (o ambas cosas).</li>\n            <li><strong>B′ ∪ C′</strong> = (B ∩ C)′: pacientes que no son mujeres con enfermedad viral.</li>\n            <li><strong>(A ∩ C)′</strong>: pacientes que no son, a la vez, mayores de 20 y con enfermedad viral.</li>\n            <li><strong>A′ ∪ C′</strong> = (A ∩ C)′: coincide con el 4 (ley de De Morgan).</li>\n            <li><strong>(A ∪ C)′</strong>: pacientes que ni son mayores de 20 ni tienen enfermedades virales.</li>\n            <li><strong>A′ ∩ C′</strong> = (A ∪ C)′: coincide con el 6 (ley de De Morgan).</li>\n            <li><strong>A ∩ B ∩ C</strong>: mujeres mayores de 20 años con enfermedades virales.</li>\n            <li><strong>A − B</strong>: pacientes mayores de 20 años que no son mujeres.</li>\n            <li><strong>(A − B) ∩ C</strong>: pacientes mayores de 20, que no son mujeres, con enfermedades virales.</li>\n          </ol>"
  },
  {
    "titulo": "Ejercicio X — Completar con ⊂, = o “no comparables”",
    "enunciadoHtml": "<p>Completa (recuerda: X ⊆ Y significa que X está contenido en Y):</p>\n        <p>a. A ___ A ∩ B &nbsp; b. A ___ A ∪ B &nbsp; c. A′ ___ A − B &nbsp; d. A ___ A − B &nbsp; e. A ___ B − A &nbsp; f. A′ ___ B − A</p>",
    "solucionHtml": "<summary>Ver solución</summary>\n          <ul>\n            <li><strong>a.</strong> A ∩ B ⊂ A (es decir, A ⊇ A ∩ B; iguales solo si A ⊆ B).</li>\n            <li><strong>b.</strong> A ⊂ A ∪ B (iguales solo si B ⊆ A).</li>\n            <li><strong>c.</strong> A − B ⊂ A′ (todo elemento de A − B está en A′).</li>\n            <li><strong>d.</strong> A − B ⊂ A (iguales solo si A y B no comparten nada).</li>\n            <li><strong>e.</strong> No son comparables en general (nc): B − A no tiene por qué caber en A ni contenerlo.</li>\n            <li><strong>f.</strong> B − A ⊂ A′ (B − A nunca toca a A, así que está dentro de A′).</li>\n          </ul>"
  },
  {
    "titulo": "Ejercicio XII — ¿Verdadero o falso? (justifica)",
    "enunciadoHtml": "<p>\n          a. B − A ⊂ A′ · b. B − A′ = B ∩ A · c. (A ∩ B)′ = A′ ∩ B′ · d. A − B ⊂ A ∪ B ·\n          e. Si A ⊂ B entonces A′ ⊂ B′ · f. Si A ⊂ B entonces A − B = ∅ ·\n          g. Si A ⊂ B entonces A ∩ B = A · h. Si A ⊂ B entonces A ∪ B = B\n        </p>",
    "solucionHtml": "<summary>Ver solución</summary>\n          <ul>\n            <li><strong>a. Verdadera.</strong> Todo elemento de B − A está en B y no está en A; por tanto está en A′.</li>\n            <li><strong>b. Verdadera.</strong> B − A′ = B ∩ (A′)′ = B ∩ A.</li>\n            <li><strong>c. Falsa.</strong> Lo correcto es (A ∩ B)′ = A′ ∪ B′ (De Morgan). Contraejemplo: U = {1,2,3}, A = {1}, B = {2}: (A ∩ B)′ = {1,2,3} pero A′ ∩ B′ = {3}.</li>\n            <li><strong>d. Verdadera.</strong> Todo elemento de A − B está en A, y A ⊆ A ∪ B.</li>\n            <li><strong>e. Falsa.</strong> El complemento se invierte: si A ⊂ B entonces B′ ⊂ A′. Contraejemplo: U = {1,2,3}, A = {1}, B = {1,2}: A′ = {2,3} ⊄ B′ = {3}.</li>\n            <li><strong>f. Verdadera.</strong> Si todo elemento de A está en B, quitarle a A lo de B no deja nada.</li>\n            <li><strong>g. Verdadera.</strong> Lo común entre A y B es exactamente A.</li>\n            <li><strong>h. Verdadera.</strong> Juntar A con B no agrega nada nuevo a B.</li>\n          </ul>"
  },
  {
    "titulo": "Ejercicio XIII — El problema del curso con 105 estudiantes",
    "enunciadoHtml": "<p>\n          A un curso asistieron 105 estudiantes. Hay 53 mujeres, 30 de ellas de Odontología.\n          Hay 68 menores de 20 años; de estos, 25 son mujeres y solo 12 de ellas son de\n          Odontología. Hay 35 hombres menores de 20 que NO estudian Odontología. Entre los\n          mayores de 20 que NO estudian Odontología, las mujeres duplican a los hombres.\n          Halla: a. estudiantes de Odontología · b. mujeres menores de 20 que no estudian\n          Odontología · c. hombres mayores de 20 que estudian Odontología · d. hombres menores\n          de 20.\n        </p>",
    "solucionHtml": "<summary>Ver solución (paso a paso)</summary>\n          <p><strong>1) Armar las cifras base.</strong></p>\n          <ul>\n            <li>Hombres = 105 − 53 = 52.</li>\n            <li>Menores de 20: 68 → mujeres = 25, hombres = 43.</li>\n            <li>Mayores de 20 = 105 − 68 = 37 → mujeres = 53 − 25 = 28, hombres = 52 − 43 = 9.</li>\n          </ul>\n          <p><strong>2) Odontología.</strong></p>\n          <ul>\n            <li>Mujeres menores de 20 en Odontología: 12.</li>\n            <li>Hombres menores de 20 en Odontología = 43 − 35 = 8.</li>\n            <li>Mujeres mayores de 20 en Odontología = 30 − 12 = 18.</li>\n          </ul>\n          <p><strong>3) Los mayores de 20 que NO estudian Odontología.</strong></p>\n          <ul>\n            <li>Mujeres mayores de 20 que no estudian Odontología = 28 − 18 = 10.</li>\n            <li>Como las mujeres duplican a los hombres: hombres = 10 ÷ 2 = 5.</li>\n            <li>Entonces hombres mayores de 20 en Odontología = 9 − 5 = 4.</li>\n          </ul>\n          <p><strong>Respuestas:</strong></p>\n          <ul>\n            <li><strong>a.</strong> Odontología: 30 mujeres + 8 hombres menores + 4 hombres mayores = <strong>42</strong>.</li>\n            <li><strong>b.</strong> Mujeres menores de 20 sin Odontología: 25 − 12 = <strong>13</strong>.</li>\n            <li><strong>c.</strong> Hombres mayores de 20 con Odontología: <strong>4</strong>.</li>\n            <li><strong>d.</strong> Hombres menores de 20: <strong>43</strong>.</li>\n          </ul>"
  },
  {
    "titulo": "Ejercicio XIV — La encuesta a 604 personas",
    "enunciadoHtml": "<p>\n          En una empresa se encuesta a 604 personas: 372 son casadas; 212 nacieron en Bogotá;\n          200 son hombres casados; 110 son hombres nacidos en Bogotá; 90 son hombres casados y\n          nacidos en Bogotá; 70 son hombres solteros nacidos fuera de Bogotá; y las mujeres\n          casadas no bogotanas son 130. ¿Cuántas mujeres solteras nacieron fuera de Bogotá?\n        </p>",
    "solucionHtml": "<summary>Ver solución</summary>\n          <p><strong>Primero los hombres:</strong></p>\n          <ul>\n            <li>Hombres nacidos en Bogotá: 110 → casados: 90 y solteros: 20.</li>\n            <li>Total hombres = casados 200 + solteros (20 + 70) = <strong>290</strong>.</li>\n          </ul>\n          <p><strong>Ahora las mujeres:</strong></p>\n          <ul>\n            <li>Total mujeres = 604 − 290 = 314.</li>\n            <li>Mujeres casadas = 372 − 200 = 172.</li>\n            <li>Mujeres casadas bogotanas = 172 − 130 = 42.</li>\n            <li>Mujeres nacidas en Bogotá = 212 − 110 = 102 → solteras bogotanas = 102 − 42 = 60.</li>\n            <li>Mujeres solteras = 314 − 172 = 142 → solteras fuera de Bogotá = 142 − 60 = <strong>82</strong>.</li>\n          </ul>\n          <p><strong>Respuesta: opción b) son 82.</strong> ✓</p>"
  }
]
};

export const glosario = [
  {
    "simbolo": "{ }",
    "seLee": "llaves",
    "significado": "encierran los elementos del conjunto"
  },
  {
    "simbolo": "∈ / ∉",
    "seLee": "pertenece / no pertenece",
    "significado": "el elemento está (o no) en el conjunto"
  },
  {
    "simbolo": "∅",
    "seLee": "vacío",
    "significado": "el conjunto sin elementos"
  },
  {
    "simbolo": "U",
    "seLee": "universo",
    "significado": "el conjunto que contiene todo lo relevante"
  },
  {
    "simbolo": "⊆",
    "seLee": "está contenido en",
    "significado": "todo elemento del primero está en el segundo"
  },
  {
    "simbolo": "=",
    "seLee": "igual",
    "significado": "tienen exactamente los mismos elementos"
  },
  {
    "simbolo": "∪",
    "seLee": "unión",
    "significado": "elementos de uno o de otro (o de ambos)"
  },
  {
    "simbolo": "∩",
    "seLee": "intersección",
    "significado": "elementos comunes a ambos"
  },
  {
    "simbolo": "′",
    "seLee": "complemento",
    "significado": "lo que está en U pero no en el conjunto"
  },
  {
    "simbolo": "−",
    "seLee": "diferencia",
    "significado": "elementos del primero que no están en el segundo"
  },
  {
    "simbolo": "△",
    "seLee": "diferencia simétrica",
    "significado": "elementos en uno y solo uno de los dos"
  },
  {
    "simbolo": "×",
    "seLee": "producto cartesiano",
    "significado": "todos los pares ordenados posibles"
  },
  {
    "simbolo": "|A|",
    "seLee": "cardinal de A",
    "significado": "número de elementos de A"
  },
  {
    "simbolo": "P(A)",
    "seLee": "partes de A",
    "significado": "todos los subconjuntos de A"
  }
];

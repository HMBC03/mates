// Programa oficial de Matemáticas Básicas · Universidad Nacional de Colombia.

export const programa = {
  resumen: {
    unidades: 9,
    horas: 60,
    temas: 62,
    leccionesDisponibles: 17,
    texto: "60 horas · 62 temas",
    pill: "17 lecciones disponibles"
  },
  ctaUnidad1: "/conjuntos/#paso-1",
  unidades: [
  {
    "id": "unidad-1",
    "numero": 1,
    "nombre": "Conjuntos",
    "horas": 6,
    "meta": "· 6 horas · 5 temas",
    "estadoTexto": "Disponible",
    "estado": "disponible",
    "nota": "17 lecciones con texto y animación",
    "temas": [
      {
        "titulo": "Nociones elementales de conjuntos",
        "sub": "Lección 1",
        "chip": "Tema 01",
        "disponible": true,
        "href": "/conjuntos/#paso-1"
      },
      {
        "titulo": "Contenencia e igualdad",
        "sub": "Lección 7",
        "chip": "Tema 02",
        "disponible": true,
        "href": "/conjuntos/#paso-7"
      },
      {
        "titulo": "Conjunto de partes",
        "sub": "Lección 9",
        "chip": "Tema 03",
        "disponible": true,
        "href": "/conjuntos/#paso-9"
      },
      {
        "titulo": "Operaciones y propiedades: unión, intersección, complemento, diferencia, diferencia simétrica y producto cartesiano",
        "sub": "Lecciones 10 a 15",
        "chip": "Tema 04",
        "disponible": true,
        "href": "/conjuntos/#paso-10"
      },
      {
        "titulo": "Diagramas de Venn",
        "sub": "Lecciones 16 y 17",
        "chip": "Tema 05",
        "disponible": true,
        "href": "/conjuntos/#paso-16"
      }
    ]
  },
  {
    "id": "unidad-2",
    "numero": 2,
    "nombre": "Sistemas numéricos",
    "horas": 8,
    "meta": "· 8 horas · 9 temas",
    "estadoTexto": "Lecciones en preparación",
    "estado": "notas",
    "nota": "Las notas base de la unidad ya están disponibles",
    "temas": [
      {
        "titulo": "Naturales: operaciones y propiedades",
        "sub": "En preparación",
        "chip": "Tema 01",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Orden, divisibilidad, primos, m.c.m. y m.c.d.",
        "sub": "En preparación",
        "chip": "Tema 02",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Enteros: operaciones y propiedades",
        "sub": "En preparación",
        "chip": "Tema 03",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Racionales: operaciones, propiedades y desarrollo decimal",
        "sub": "En preparación",
        "chip": "Tema 04",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Reales: operaciones y propiedades",
        "sub": "En preparación",
        "chip": "Tema 05",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Orden, desigualdades y sus propiedades",
        "sub": "En preparación",
        "chip": "Tema 06",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Intervalos",
        "sub": "En preparación",
        "chip": "Tema 07",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Representación gráfica, valor absoluto y distancia",
        "sub": "En preparación",
        "chip": "Tema 08",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Potenciación, radicación y notación científica",
        "sub": "En preparación",
        "chip": "Tema 09",
        "disponible": false,
        "href": null
      }
    ]
  },
  {
    "id": "unidad-3",
    "numero": 3,
    "nombre": "Ecuaciones e inecuaciones lineales",
    "horas": 4,
    "meta": "· 4 horas · 6 temas",
    "estadoTexto": "Lecciones en preparación",
    "estado": "notas",
    "nota": "Las notas base de la unidad ya están disponibles",
    "temas": [
      {
        "titulo": "Ecuaciones lineales",
        "sub": "En preparación",
        "chip": "Tema 01",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Porcentajes",
        "sub": "En preparación",
        "chip": "Tema 02",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Razones y proporciones",
        "sub": "En preparación",
        "chip": "Tema 03",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Variación directa e inversa y regla de tres",
        "sub": "En preparación",
        "chip": "Tema 04",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Inecuaciones lineales",
        "sub": "En preparación",
        "chip": "Tema 05",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Ecuaciones y desigualdades con valor absoluto",
        "sub": "En preparación",
        "chip": "Tema 06",
        "disponible": false,
        "href": null
      }
    ]
  },
  {
    "id": "unidad-4",
    "numero": 4,
    "nombre": "Polinomios",
    "horas": 8,
    "meta": "· 8 horas · 9 temas",
    "estadoTexto": "Lecciones en preparación",
    "estado": "notas",
    "nota": "Las notas base de la unidad ya están disponibles",
    "temas": [
      {
        "titulo": "Álgebra de polinomios",
        "sub": "En preparación",
        "chip": "Tema 01",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Productos notables",
        "sub": "En preparación",
        "chip": "Tema 02",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Factorización",
        "sub": "En preparación",
        "chip": "Tema 03",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Ecuaciones cuadráticas",
        "sub": "En preparación",
        "chip": "Tema 04",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Inecuaciones cuadráticas",
        "sub": "En preparación",
        "chip": "Tema 05",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Desigualdades con fracciones algebraicas",
        "sub": "En preparación",
        "chip": "Tema 06",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Teorema del residuo y del factor",
        "sub": "En preparación",
        "chip": "Tema 07",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Teorema de las raíces racionales",
        "sub": "En preparación",
        "chip": "Tema 08",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Teorema del binomio",
        "sub": "En preparación",
        "chip": "Tema 09",
        "disponible": false,
        "href": null
      }
    ]
  },
  {
    "id": "unidad-5",
    "numero": 5,
    "nombre": "Geometría elemental",
    "horas": 6,
    "meta": "· 6 horas · 6 temas",
    "estadoTexto": "En preparación",
    "estado": "preparacion",
    "nota": "Contenido del programa oficial",
    "temas": [
      {
        "titulo": "Ángulos: clases y medidas",
        "sub": "En preparación",
        "chip": "Tema 01",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Triángulos: clasificación, congruencia y semejanza",
        "sub": "En preparación",
        "chip": "Tema 02",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Cuadriláteros y circunferencias",
        "sub": "En preparación",
        "chip": "Tema 03",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Áreas y perímetros de triángulos, cuadriláteros, círculos y sectores circulares",
        "sub": "En preparación",
        "chip": "Tema 04",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Teorema de Pitágoras",
        "sub": "En preparación",
        "chip": "Tema 05",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Poliedros, cilindros, conos y esferas: volumen y área superficial",
        "sub": "En preparación",
        "chip": "Tema 06",
        "disponible": false,
        "href": null
      }
    ]
  },
  {
    "id": "unidad-6",
    "numero": 6,
    "nombre": "Plano cartesiano y rectas",
    "horas": 4,
    "meta": "· 4 horas · 7 temas",
    "estadoTexto": "En preparación",
    "estado": "preparacion",
    "nota": "Contenido del programa oficial",
    "temas": [
      {
        "titulo": "Plano cartesiano",
        "sub": "En preparación",
        "chip": "Tema 01",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Distancia entre dos puntos",
        "sub": "En preparación",
        "chip": "Tema 02",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Punto medio",
        "sub": "En preparación",
        "chip": "Tema 03",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Circunferencia",
        "sub": "En preparación",
        "chip": "Tema 04",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Rectas, perpendicularidad y paralelismo",
        "sub": "En preparación",
        "chip": "Tema 05",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Sistemas de ecuaciones lineales en dos variables",
        "sub": "En preparación",
        "chip": "Tema 06",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Solución gráfica y algebraica",
        "sub": "En preparación",
        "chip": "Tema 07",
        "disponible": false,
        "href": null
      }
    ]
  },
  {
    "id": "unidad-7",
    "numero": 7,
    "nombre": "Relaciones y cónicas",
    "horas": 8,
    "meta": "· 8 horas · 5 temas",
    "estadoTexto": "En preparación",
    "estado": "preparacion",
    "nota": "Contenido del programa oficial",
    "temas": [
      {
        "titulo": "Ejemplos de relaciones en R² y sus gráficas",
        "sub": "En preparación",
        "chip": "Tema 01",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Expansión y compresión horizontal y vertical",
        "sub": "En preparación",
        "chip": "Tema 02",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Simetrías y desplazamientos horizontales y verticales",
        "sub": "En preparación",
        "chip": "Tema 03",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Parábolas, elipses e hipérbolas",
        "sub": "En preparación",
        "chip": "Tema 04",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Ecuaciones, gráficas y sus relaciones",
        "sub": "En preparación",
        "chip": "Tema 05",
        "disponible": false,
        "href": null
      }
    ]
  },
  {
    "id": "unidad-8",
    "numero": 8,
    "nombre": "Funciones reales",
    "horas": 8,
    "meta": "· 8 horas · 8 temas",
    "estadoTexto": "En preparación",
    "estado": "preparacion",
    "nota": "Contenido del programa oficial",
    "temas": [
      {
        "titulo": "Definición, dominio y rango",
        "sub": "En preparación",
        "chip": "Tema 01",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Gráficas de funciones",
        "sub": "En preparación",
        "chip": "Tema 02",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Funciones lineales, cuadráticas, valor absoluto, parte entera y definidas a trozos",
        "sub": "En preparación",
        "chip": "Tema 03",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Transformaciones de funciones: expansión, compresión, simetrías y desplazamientos",
        "sub": "En preparación",
        "chip": "Tema 04",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Funciones inyectivas, sobreyectivas, biyectivas, pares e impares",
        "sub": "En preparación",
        "chip": "Tema 05",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Suma, diferencia, producto, cociente y composición de funciones",
        "sub": "En preparación",
        "chip": "Tema 06",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Función inversa",
        "sub": "En preparación",
        "chip": "Tema 07",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Funciones exponenciales y logarítmicas",
        "sub": "En preparación",
        "chip": "Tema 08",
        "disponible": false,
        "href": null
      }
    ]
  },
  {
    "id": "unidad-9",
    "numero": 9,
    "nombre": "Trigonometría",
    "horas": 8,
    "meta": "· 8 horas · 7 temas",
    "estadoTexto": "En preparación",
    "estado": "preparacion",
    "nota": "Contenido del programa oficial",
    "temas": [
      {
        "titulo": "Razones trigonométricas",
        "sub": "En preparación",
        "chip": "Tema 01",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Resolución de triángulos",
        "sub": "En preparación",
        "chip": "Tema 02",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Ley del seno",
        "sub": "En preparación",
        "chip": "Tema 03",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Ley del coseno",
        "sub": "En preparación",
        "chip": "Tema 04",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Funciones trigonométricas: dominio, rango, gráficas y periodo",
        "sub": "En preparación",
        "chip": "Tema 05",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Identidades trigonométricas de uso frecuente",
        "sub": "En preparación",
        "chip": "Tema 06",
        "disponible": false,
        "href": null
      },
      {
        "titulo": "Solución de ecuaciones trigonométricas",
        "sub": "En preparación",
        "chip": "Tema 07",
        "disponible": false,
        "href": null
      }
    ]
  }
]
};

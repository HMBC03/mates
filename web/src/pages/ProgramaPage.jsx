import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDocumento } from '../hooks/useDocumento.js';
import { programa } from '../data/programa.js';
import {
  IconoCandado,
  IconoChevron,
  IconoFlecha,
  IconoLibroTema
} from '../components/Iconos.jsx';

function enlaceInterno(destino) {
  return destino ? destino.replace('/conjuntos/', '/conjuntos') : '/conjuntos';
}

export default function ProgramaPage() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const unidadesRef = useRef([]);

  useDocumento('programa', 'Contenidos del curso · Mates');

  useEffect(() => {
    const coincidencia = /^#unidad-(\d+)$/.exec(hash);
    if (!coincidencia) return undefined;

    const numero = Number(coincidencia[1]);
    const unidad = unidadesRef.current[numero - 1];
    if (!unidad) return undefined;

    unidad.open = true;
    const temporizador = window.setTimeout(() => {
      unidad.scrollIntoView({ block: 'start' });
    }, 60);

    return () => window.clearTimeout(temporizador);
  }, [hash]);

  function abrirTodas(abrir) {
    unidadesRef.current.forEach(unidad => {
      if (unidad) unidad.open = abrir;
    });
  }

  function irAUnidad(numero, evento) {
    evento.preventDefault();
    const unidad = unidadesRef.current[numero - 1];
    if (unidad) unidad.open = true;

    const destino = `#unidad-${numero}`;
    if (hash === destino) {
      unidad?.scrollIntoView({ block: 'start' });
    } else {
      navigate(`/programa${destino}`);
    }
  }

  return (
    <>
      <main className="contenido contenido-home contenido-programa">
        <header className="ruta-cabecera programa-hero">
          <div>
            <span className="etiqueta">
              Programa oficial · Universidad Nacional de Colombia
            </span>
            <h1>Contenidos del curso</h1>
            <p>
              Matemáticas Básicas en <strong>nueve unidades</strong>. Toca una
              unidad para desplegar todos sus temas, sus horas y el estado de
              las lecciones.
            </p>
          </div>
          <div className="progreso-cabecera programa-resumen">
            <div className="progreso-cabecera-linea">
              <span>Programa</span>
              <strong>{programa.resumen.unidades} unidades</strong>
            </div>
            <p className="programa-resumen-texto">{programa.resumen.texto}</p>
            <span className="pill-suave">{programa.resumen.pill}</span>
          </div>
        </header>

        <div className="programa-barra">
          <div>
            <span className="etiqueta">Temario</span>
            <h2>Las nueve unidades</h2>
          </div>
          <div className="programa-acciones">
            <button
              className="boton-programa"
              type="button"
              onClick={() => abrirTodas(true)}
            >
              Abrir todo
            </button>
            <button
              className="boton-programa boton-programa-suave"
              type="button"
              onClick={() => abrirTodas(false)}
            >
              Cerrar todo
            </button>
          </div>
        </div>

        <nav className="programa-indice" aria-label="Ir a una unidad">
          {programa.unidades.map(unidad => (
            <a
              key={unidad.id}
              href={`#unidad-${unidad.numero}`}
              onClick={evento => irAUnidad(unidad.numero, evento)}
            >
              <span>{String(unidad.numero).padStart(2, '0')}</span>{' '}
              {unidad.nombre}
            </a>
          ))}
        </nav>

        <section
          className="ruta-aprendizaje programa-unidades"
          aria-label="Unidades del programa"
        >
          {programa.unidades.map((unidad, indice) => (
            <details
              key={unidad.id}
              id={unidad.id}
              ref={nodo => {
                unidadesRef.current[indice] = nodo;
              }}
              className={
                unidad.estado === 'disponible'
                  ? 'unidad-ruta unidad-programa en-curso'
                  : 'unidad-ruta unidad-programa'
              }
              open={indice === 0}
            >
              <summary className="unidad-cabecera">
                <span className="unidad-numero" aria-hidden="true">
                  {unidad.numero}
                </span>
                <h2 className="unidad-titulo">
                  {unidad.nombre} <span>{unidad.meta}</span>
                </h2>
                <span className="unidad-flecha" aria-hidden="true">
                  <IconoChevron />
                </span>
              </summary>

              <div className="unidad-cuerpo">
                <ul className="lista-lecciones temas-unidad">
                  {unidad.temas.map(tema => (
                    <li
                      key={tema.chip}
                      className={
                        tema.disponible
                          ? 'leccion-ruta tema-ruta tema-disponible'
                          : 'leccion-ruta tema-ruta bloqueada'
                      }
                    >
                      {tema.disponible ? (
                        <Link
                          className="leccion-fila"
                          to={enlaceInterno(tema.href)}
                        >
                          <span className="leccion-estado" aria-hidden="true">
                            <span className="leccion-icono icono-libro">
                              <IconoLibroTema />
                            </span>
                          </span>
                          <span className="leccion-info">
                            <span className="leccion-titulo">
                              {tema.titulo}
                            </span>
                            <span className="leccion-subtitulo">
                              {tema.sub}
                            </span>
                          </span>
                          <span className="leccion-formula tema-chip">
                            {tema.chip}
                          </span>
                        </Link>
                      ) : (
                        <div className="leccion-fila">
                          <span className="leccion-estado" aria-hidden="true">
                            <span className="leccion-icono icono-lock">
                              <IconoCandado />
                            </span>
                          </span>
                          <span className="leccion-info">
                            <span className="leccion-titulo">
                              {tema.titulo}
                            </span>
                            <span className="leccion-subtitulo">
                              {tema.sub}
                            </span>
                          </span>
                          <span className="leccion-formula tema-chip">
                            {tema.chip}
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="unidad-programa-pie">
                  {unidad.estado === 'disponible' ? (
                    <>
                      <span className="unidad-pie-estado">
                        <span className="estado-unidad estado-disponible">
                          {unidad.estadoTexto}
                        </span>
                        <span>{unidad.nota}</span>
                      </span>
                      <Link
                        className="continuar-aqui programa-cta"
                        to={enlaceInterno(programa.ctaUnidad1)}
                      >
                        Empezar la unidad 1 <IconoFlecha />
                      </Link>
                    </>
                  ) : (
                    <>
                      <span>{unidad.nota}</span>
                      <span className="estado-unidad estado-preparacion">
                        {unidad.estadoTexto}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </details>
          ))}
        </section>
      </main>

      <footer className="pie pie-home">
        <p>
          Mates · Matemáticas Básicas · Universidad Nacional de Colombia ·
          Programa oficial de 60 horas
        </p>
      </footer>
    </>
  );
}

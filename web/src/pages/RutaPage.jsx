import { Link } from 'react-router-dom';
import { useProgreso } from '../context/ProgresoContext.jsx';
import { useDocumento } from '../hooks/useDocumento.js';
import { lecciones } from '../data/lecciones.js';
import { modulos, proximasUnidades } from '../data/curso.js';
import LeccionFila from '../components/LeccionFila.jsx';
import {
  IconoAlgebra,
  IconoCalculo,
  IconoCandado,
  IconoChevron,
  IconoFlecha,
  IconoGeometria,
  IconoSuma
} from '../components/Iconos.jsx';

const ICONOS_MODULO = {
  suma: IconoSuma,
  algebra: IconoAlgebra,
  geometria: IconoGeometria,
  calculo: IconoCalculo
};

export default function RutaPage() {
  const {
    hechas,
    total,
    todasCompletadas,
    indiceSiguiente,
    estaCompletada
  } = useProgreso();

  useDocumento('ruta', 'Mates · Matemáticas Básicas');

  function estadoDe(numero, id) {
    if (estaCompletada(id)) return 'completada';
    if (numero - 1 === indiceSiguiente) return 'actual';
    return 'bloqueada';
  }

  return (
    <>
      <main className="contenido contenido-home">
        <section className="modulos" aria-labelledby="modulos-titulo">
          <h2 className="etiqueta" id="modulos-titulo">
            Módulos
          </h2>
          <ul className="lista-modulos">
            {modulos.map(modulo => {
              const Icono = ICONOS_MODULO[modulo.icono] || IconoSuma;
              return (
                <li
                  className={
                    modulo.activo ? 'modulo activo' : 'modulo bloqueado'
                  }
                  key={modulo.id}
                >
                  {!modulo.activo && <span className="pill-pronto">Pronto</span>}
                  <span className="modulo-icono" aria-hidden="true">
                    <Icono />
                  </span>
                  {modulo.activo && (
                    <span className="sr-only">Módulo actual</span>
                  )}
                  <h3>{modulo.titulo}</h3>
                  <p>{modulo.descripcion}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <header className="ruta-cabecera">
          <div>
            <h1>Matemáticas básicas</h1>
            <p>
              Cada paso te dice <strong>qué vas a entender</strong> antes de
              empezar. La ruta es también tu resumen.
            </p>
          </div>
          <div className="progreso-cabecera">
            <div className="progreso-cabecera-linea">
              <span>Progreso</span>
              <strong>
                <span data-progreso-numero>{hechas}</span>/{total}
              </strong>
            </div>
            <progress
              className="barra-progreso"
              max={total}
              value={hechas}
              aria-label="Lecciones completadas"
              data-barra-progreso
            >
              {hechas} de {total}
            </progress>
          </div>
        </header>

        <section className="ruta-aprendizaje" aria-label="Ruta de aprendizaje">
          <details
            className={
              todasCompletadas
                ? 'unidad-ruta completada'
                : 'unidad-ruta en-curso'
            }
            data-unidad="1"
            open
          >
            <summary className="unidad-cabecera">
              <span className="unidad-numero" aria-hidden="true">
                1
              </span>
              <h2 className="unidad-titulo">
                Conjuntos <span>· La base de todo</span>
              </h2>
              <span className="unidad-flecha" aria-hidden="true">
                <IconoChevron />
              </span>
            </summary>
            <div className="unidad-cuerpo">
              <ol className="lista-lecciones">
                {lecciones.map(leccion => (
                  <LeccionFila
                    key={leccion.id}
                    leccion={leccion}
                    estado={estadoDe(leccion.numero, leccion.id)}
                  />
                ))}
              </ol>
            </div>
          </details>

          <details className="unidad-ruta bloqueada" data-unidad="2">
            <summary className="unidad-cabecera">
              <span className="unidad-numero" aria-hidden="true">
                2
              </span>
              <h2 className="unidad-titulo">
                Sistemas Numéricos <span>· El siguiente paso</span>
              </h2>
              <span className="unidad-flecha" aria-hidden="true">
                <IconoChevron />
              </span>
            </summary>
            <div className="unidad-vacia">
              <span className="unidad-vacia-icono" aria-hidden="true">
                <IconoCandado />
              </span>
              <div>
                <strong>Contenido en preparación</strong>
                <p>
                  Naturales, enteros, racionales, reales, orden, intervalos y
                  valor absoluto.
                </p>
                <Link className="enlace-unidad" to="/programa#unidad-2">
                  Ver los 9 temas <IconoFlecha />
                </Link>
              </div>
              <span className="pill-suave">Pronto</span>
            </div>
          </details>

          <section className="tarjeta-proximas" aria-label="Próximas unidades">
            <details className="proximas-plegable">
              <summary className="proximas-cabecera">
                <span className="etiqueta">Más adelante</span>
                <h2>Próximas unidades</h2>
                <span className="unidad-flecha" aria-hidden="true">
                  <IconoChevron />
                </span>
              </summary>
              <div className="proximas-cuerpo">
                <ul className="lista-unidades">
                  {proximasUnidades.map(unidad => (
                    <li key={unidad.numero}>
                      <span className="numero-unidad">
                        {String(unidad.numero).padStart(2, '0')}
                      </span>
                      <div>
                        <h3>{unidad.titulo}</h3>
                        <p>{unidad.descripcion}</p>
                      </div>
                      <IconoCandado />
                    </li>
                  ))}
                </ul>
                <p className="nota-talleres">
                  Cada unidad publicada incluye una selección de talleres
                  resueltos paso a paso.
                </p>
              </div>
            </details>
            <div className="proximas-pie">
              <Link className="enlace-programa" to="/programa">
                Ver programa completo <IconoFlecha />
              </Link>
            </div>
          </section>
        </section>
      </main>

      <footer className="pie pie-home">
        <p>
          Mates · Matemáticas Básicas · Universidad Nacional de Colombia ·
          Animaciones hechas con{' '}
          <a
            href="https://docs.manim.community/en/stable/installation/uv.html"
            target="_blank"
            rel="noopener"
          >
            Manim Community
          </a>
        </p>
      </footer>
    </>
  );
}

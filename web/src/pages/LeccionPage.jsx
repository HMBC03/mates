import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useProgreso } from '../context/ProgresoContext.jsx';
import { useToast } from '../components/Toast.jsx';
import { useDocumento } from '../hooks/useDocumento.js';
import { lecciones } from '../data/lecciones.js';
import VideoLeccion from '../components/VideoLeccion.jsx';
import Practica from '../components/Practica.jsx';
import Glosario from '../components/Glosario.jsx';
import BarraAccion from '../components/BarraAccion.jsx';
import { IconoCerrar } from '../components/Iconos.jsx';

function objetivoDesdeHash(hash) {
  if (hash === '#practica') {
    return { numero: lecciones.length, practica: true };
  }

  const coincidencia = /^#paso-(\d+)$/.exec(hash);
  if (coincidencia) {
    const numero = Number(coincidencia[1]);
    if (numero >= 1 && numero <= lecciones.length) {
      return { numero, practica: false };
    }
  }

  return null;
}

export default function LeccionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    total,
    siguiente,
    estaCompletada,
    marcarCompletada
  } = useProgreso();
  const { mostrarToast } = useToast();

  const [vista, setVista] = useState(
    () =>
      objetivoDesdeHash(location.hash) ?? {
        numero: siguiente ? siguiente.numero : 1,
        practica: false
      }
  );

  const leccion = lecciones[vista.numero - 1];

  const titulo = vista.practica
    ? 'Práctica de la unidad · Mates'
    : `${leccion.titulo} · Mates`;

  useDocumento('unidad', titulo);

  useEffect(() => {
    const objetivo = objetivoDesdeHash(location.hash);

    if (!objetivo) {
      const numero = siguiente ? siguiente.numero : 1;
      setVista({ numero, practica: false });
      navigate(`/conjuntos#paso-${numero}`, { replace: true });
      return;
    }

    setVista(objetivo);
  }, [location.hash, navigate, siguiente]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const temporizador = window.setTimeout(() => window.scrollTo(0, 0), 60);
    return () => window.clearTimeout(temporizador);
  }, [vista.numero, vista.practica]);

  const actual = vista.practica ? total : vista.numero;
  const completada = !vista.practica && estaCompletada(leccion.id);

  function alAccionar() {
    if (vista.practica) {
      navigate('/');
      return;
    }

    if (!completada) {
      marcarCompletada(leccion.id);
      mostrarToast('Lección completada. ¡Sigue así!');
    }

    if (vista.numero < total) {
      navigate(`/conjuntos#paso-${vista.numero + 1}`);
    } else {
      navigate('/conjuntos#practica');
    }
  }

  return (
    <>
      <main className="contenido-leccion">
        <h1 className="sr-only">Unidad 1 · Conjuntos</h1>

        <div className="leccion-barra">
          <Link className="leccion-cerrar" to="/" aria-label="Volver a la ruta">
            <IconoCerrar />
          </Link>
          <progress
            className="barra-progreso barra-leccion"
            max={total}
            value={actual}
            aria-label="Progreso de la unidad"
            data-barra-leccion
          >
            {actual} de {total}
          </progress>
          <span className="leccion-contador">
            <span data-leccion-numero>{actual}</span>/{total}
          </span>
        </div>

        {vista.practica ? (
          <section
            className="practica-vista activa"
            id="practica"
            aria-labelledby="practica-vista-titulo"
          >
            <span className="leccion-eyebrow">Ponte a prueba</span>
            <h2 className="practica-vista-titulo" id="practica-vista-titulo">
              Práctica de la unidad
            </h2>
            <p className="practica-vista-intro">
              Cierra la unidad repasando los símbolos y resolviendo los
              ejercicios del taller. Intenta cada uno antes de abrir la
              solución.
            </p>
            <Practica />
            <Glosario />
          </section>
        ) : (
          <div className="leccion-vista">
            <article
              className="leccion activa"
              id={`paso-${leccion.numero}`}
              data-leccion={leccion.id}
            >
              <header className="leccion-cabecera">
                <span className="leccion-eyebrow">{leccion.eyebrow}</span>
                <h2>{leccion.titulo}</h2>
              </header>
              <div className="leccion-cuerpo">
                <div
                  className="leccion-texto"
                  dangerouslySetInnerHTML={{ __html: leccion.bodyHtml }}
                />
                <VideoLeccion key={leccion.id} video={leccion.video} />
              </div>
            </article>
          </div>
        )}
      </main>

      <BarraAccion
        practica={vista.practica}
        numero={vista.numero}
        total={total}
        completada={completada}
        onAccion={alAccionar}
      />
    </>
  );
}

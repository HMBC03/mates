import { Link } from 'react-router-dom';
import {
  IconoCandado,
  IconoCheck,
  IconoFlecha,
  IconoReloj
} from './Iconos.jsx';

export default function LeccionFila({ leccion, estado }) {
  const bloqueada = estado === 'bloqueada';
  const actual = estado === 'actual';

  const contenido = (
    <>
      <span className="leccion-estado" aria-hidden="true">
        <span className="leccion-icono icono-check">
          <IconoCheck />
        </span>
        <span className="leccion-icono icono-arrow">
          <IconoFlecha />
        </span>
        <span className="leccion-icono icono-lock">
          <IconoCandado />
        </span>
      </span>
      <span className="leccion-info">
        <span className="leccion-titulo">{leccion.tituloRuta}</span>
        <span className="leccion-subtitulo">{leccion.subtitulo}</span>
      </span>
      <span
        className="leccion-formula"
        dangerouslySetInnerHTML={{ __html: leccion.formulaHtml }}
      />
      <span className="leccion-duracion">
        <IconoReloj />
        {leccion.duracion}
      </span>
    </>
  );

  const etiqueta =
    estado === 'completada'
      ? `${leccion.tituloRuta} — completada`
      : `${leccion.tituloRuta} — lección actual`;

  return (
    <li className={`leccion-ruta ${estado}`} data-leccion={leccion.id}>
      {bloqueada ? (
        <a
          className="leccion-fila"
          aria-disabled="true"
          tabIndex={-1}
          title="Completa las lecciones anteriores para desbloquearla"
        >
          {contenido}
        </a>
      ) : (
        <Link
          className="leccion-fila"
          to={`/conjuntos#paso-${leccion.numero}`}
          aria-label={etiqueta}
        >
          {contenido}
        </Link>
      )}

      {actual && (
        <Link
          className="continuar-aqui"
          to={`/conjuntos#paso-${leccion.numero}`}
        >
          Continuar aquí <IconoFlecha />
        </Link>
      )}
    </li>
  );
}

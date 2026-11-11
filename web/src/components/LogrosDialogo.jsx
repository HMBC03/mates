import Dialogo from './Dialogo.jsx';
import { useProgreso } from '../context/ProgresoContext.jsx';
import { IconoCandado, IconoCheck, IconoCerrar } from './Iconos.jsx';

export default function LogrosDialogo({ abierto, onCerrar }) {
  const { hechas, total } = useProgreso();

  const logros = [
    {
      titulo: 'Primer paso',
      detalle: 'Completa tu primera lección.',
      logrado: hechas >= 1
    },
    {
      titulo: 'A mitad de camino',
      detalle: 'Completa 9 de las 17 lecciones.',
      logrado: hechas >= 9
    },
    {
      titulo: 'Conjuntos dominados',
      detalle: 'Completa toda la unidad 1.',
      logrado: hechas >= total
    }
  ];

  const desbloqueados = logros.filter(logro => logro.logrado).length;

  return (
    <Dialogo abierto={abierto} onCerrar={onCerrar} tituloId="titulo-logros">
      <div className="dialogo-cabecera">
        <div>
          <h2 id="titulo-logros">Tus logros</h2>
          <p>
            {desbloqueados} de {logros.length} desbloqueados
          </p>
        </div>
        <button
          className="dialogo-cerrar"
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar"
        >
          <IconoCerrar />
        </button>
      </div>

      <div className="logros-lista">
        {logros.map(logro => (
          <div
            className={
              logro.logrado ? 'logro desbloqueado' : 'logro bloqueado'
            }
            key={logro.titulo}
          >
            <span className="logro-icono">
              {logro.logrado ? <IconoCheck /> : <IconoCandado />}
            </span>
            <div>
              <h3>{logro.titulo}</h3>
              <p>{logro.detalle}</p>
            </div>
          </div>
        ))}
      </div>
    </Dialogo>
  );
}

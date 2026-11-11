import { useEffect, useState } from 'react';
import Dialogo from './Dialogo.jsx';
import { useProgreso } from '../context/ProgresoContext.jsx';
import { useToast } from './Toast.jsx';
import { IconoCerrar } from './Iconos.jsx';

export default function AjustesDialogo({ abierto, onCerrar }) {
  const { hechas, total, reiniciarProgreso } = useProgreso();
  const { mostrarToast } = useToast();
  const [confirmar, setConfirmar] = useState(false);

  useEffect(() => {
    setConfirmar(false);
  }, [abierto]);

  function alReiniciar() {
    if (!confirmar) {
      setConfirmar(true);
      return;
    }

    reiniciarProgreso();
    setConfirmar(false);
    onCerrar();
    mostrarToast('Progreso reiniciado. La ruta vuelve a empezar.');
  }

  return (
    <Dialogo abierto={abierto} onCerrar={onCerrar} tituloId="titulo-ajustes">
      <div className="dialogo-cabecera">
        <div>
          <h2 id="titulo-ajustes">Ajustes</h2>
          <p>Tu espacio de estudio</p>
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

      <div className="ajustes-info">
        <p>
          <strong>Progreso:</strong> {hechas} de {total} lecciones
        </p>
        <p>
          El progreso se guarda únicamente en este navegador. Puedes
          reiniciarlo cuando quieras.
        </p>
      </div>

      <button
        className={confirmar ? 'boton-peligro confirmar' : 'boton-peligro'}
        type="button"
        onClick={alReiniciar}
      >
        {confirmar ? 'Toca otra vez para confirmar' : 'Reiniciar progreso'}
      </button>
    </Dialogo>
  );
}

import { useEffect, useRef } from 'react';

/**
 * Diálogo modal nativo. El CSS del curso ya define `.dialogo` y su backdrop.
 */
export default function Dialogo({
  abierto,
  onCerrar,
  tituloId,
  children
}) {
  const ref = useRef(null);

  useEffect(() => {
    const dialogo = ref.current;
    if (!dialogo) return;

    if (abierto) {
      if (!dialogo.open) dialogo.showModal();
    } else if (dialogo.open) {
      dialogo.close();
    }
  }, [abierto]);

  function alPulsar(evento) {
    if (evento.target === ref.current) onCerrar();
  }

  return (
    <dialog
      ref={ref}
      className="dialogo"
      aria-labelledby={tituloId}
      onClick={alPulsar}
      onClose={onCerrar}
    >
      <div className="dialogo-contenido">{children}</div>
    </dialog>
  );
}

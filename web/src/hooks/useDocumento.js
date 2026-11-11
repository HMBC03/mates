import { useEffect } from 'react';

/** Mantiene el atributo usado por el CSS y el título del documento. */
export function useDocumento(pagina, titulo) {
  useEffect(() => {
    document.body.dataset.pagina = pagina;
    document.title = titulo;
  }, [pagina, titulo]);
}

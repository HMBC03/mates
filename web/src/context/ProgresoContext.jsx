import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { lecciones } from '../data/lecciones.js';

const CLAVE_PROGRESO = 'mates.progreso.v1';
const CLAVE_PROGRESO_ANTERIOR = 'axioma.progreso.v1';
const IDS_VALIDOS = new Set(lecciones.map(leccion => leccion.id));

const ProgresoContext = createContext(null);

function leerProgreso() {
  try {
    let crudo = window.localStorage.getItem(CLAVE_PROGRESO);
    if (!crudo) {
      // Conserva el avance que ya tenía guardado la versión anterior.
      crudo = window.localStorage.getItem(CLAVE_PROGRESO_ANTERIOR);
      if (crudo) window.localStorage.setItem(CLAVE_PROGRESO, crudo);
    }
    return crudo ? JSON.parse(crudo) : { completadas: [] };
  } catch {
    return { completadas: [] };
  }
}

function normalizar(valor) {
  const lista = valor && Array.isArray(valor.completadas) ? valor.completadas : [];
  return [...new Set(lista.filter(id => IDS_VALIDOS.has(id)))];
}

function guardarProgreso(completadas) {
  try {
    window.localStorage.setItem(CLAVE_PROGRESO, JSON.stringify({ completadas }));
  } catch {
    // El curso sigue funcionando aunque el navegador bloquee el almacenamiento.
  }
}

export function ProgresoProvider({ children }) {
  const [completadas, setCompletadas] = useState(() => normalizar(leerProgreso()));

  useEffect(() => {
    guardarProgreso(completadas);
  }, [completadas]);

  useEffect(() => {
    function sincronizar(evento) {
      if (evento.key !== CLAVE_PROGRESO) return;
      try {
        const siguiente = evento.newValue
          ? JSON.parse(evento.newValue)
          : { completadas: [] };
        setCompletadas(normalizar(siguiente));
      } catch {
        setCompletadas([]);
      }
    }

    window.addEventListener('storage', sincronizar);
    return () => window.removeEventListener('storage', sincronizar);
  }, []);

  const conjunto = useMemo(() => new Set(completadas), [completadas]);
  const indiceSiguiente = useMemo(
    () => lecciones.findIndex(leccion => !conjunto.has(leccion.id)),
    [conjunto]
  );

  const estaCompletada = useCallback(
    id => conjunto.has(id),
    [conjunto]
  );

  const marcarCompletada = useCallback(id => {
    if (!IDS_VALIDOS.has(id)) return false;
    let agregada = false;
    setCompletadas(actuales => {
      if (actuales.includes(id)) return actuales;
      agregada = true;
      return [...actuales, id];
    });
    return agregada;
  }, []);

  const alternarCompletada = useCallback(id => {
    if (!IDS_VALIDOS.has(id)) return false;
    let quedaCompletada = false;
    setCompletadas(actuales => {
      if (actuales.includes(id)) {
        return actuales.filter(item => item !== id);
      }
      quedaCompletada = true;
      return [...actuales, id];
    });
    return quedaCompletada;
  }, []);

  const reiniciarProgreso = useCallback(() => {
    setCompletadas([]);
  }, []);

  const valor = {
    completadas,
    total: lecciones.length,
    hechas: completadas.length,
    todasCompletadas: completadas.length === lecciones.length,
    siguiente: indiceSiguiente === -1 ? null : lecciones[indiceSiguiente],
    indiceSiguiente,
    estaCompletada,
    marcarCompletada,
    alternarCompletada,
    reiniciarProgreso
  };

  return <ProgresoContext.Provider value={valor}>{children}</ProgresoContext.Provider>;
}

export function useProgreso() {
  const contexto = useContext(ProgresoContext);
  if (!contexto) throw new Error('useProgreso debe usarse dentro de ProgresoProvider');
  return contexto;
}

import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useProgreso } from '../context/ProgresoContext.jsx';
import { lecciones } from '../data/lecciones.js';
import Sidebar from './Sidebar.jsx';
import LogrosDialogo from './LogrosDialogo.jsx';
import AjustesDialogo from './AjustesDialogo.jsx';
import { IconoMenu } from './Iconos.jsx';

function leccionDelEnlace(pathname, hash, siguiente) {
  if (pathname === '/conjuntos' || pathname === '/conjuntos/') {
    const coincidencia = /^#paso-(\d+)$/.exec(hash);
    if (coincidencia) {
      const numero = Number(coincidencia[1]);
      if (numero >= 1 && numero <= lecciones.length) {
        return lecciones[numero - 1];
      }
    }
  }

  // Igual que el sitio anterior: la siguiente pendiente o, si el curso
  // está completo, la primera lección.
  return siguiente ?? lecciones[0];
}

export default function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [dialogo, setDialogo] = useState(null);
  const { siguiente } = useProgreso();
  const location = useLocation();

  const botonMenuRef = useRef(null);
  const botonCerrarRef = useRef(null);

  const leccionActual = leccionDelEnlace(
    location.pathname,
    location.hash,
    siguiente
  );

  const cerrarMenu = useCallback(devolverFoco => {
    setMenuAbierto(false);
    if (devolverFoco) {
      window.requestAnimationFrame(() => botonMenuRef.current?.focus());
    }
  }, []);

  function abrirDialogo(nombre) {
    setMenuAbierto(false);
    setDialogo(nombre);
  }

  useEffect(() => {
    setMenuAbierto(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-abierto', menuAbierto);
    return () => document.body.classList.remove('menu-abierto');
  }, [menuAbierto]);

  useEffect(() => {
    if (!menuAbierto) return undefined;

    botonCerrarRef.current?.focus();

    function alPulsarTecla(evento) {
      if (evento.key !== 'Escape') return;
      cerrarMenu(true);
    }

    document.addEventListener('keydown', alPulsarTecla);
    return () => document.removeEventListener('keydown', alPulsarTecla);
  }, [menuAbierto, cerrarMenu]);

  useEffect(() => {
    const escritorio = window.matchMedia('(min-width: 901px)');

    function alCambiar(evento) {
      if (evento.matches) setMenuAbierto(false);
    }

    escritorio.addEventListener?.('change', alCambiar);
    return () => escritorio.removeEventListener?.('change', alCambiar);
  }, []);

  const datosLeccion = {
    pagina: location.pathname.startsWith('/conjuntos') ? 'unidad' : 'otra',
    leccion: leccionActual
  };

  return (
    <>
      <div className="barra-movil">
        <Link className="marca" to="/" aria-label="Mates, inicio">
          <img src={`${import.meta.env.BASE_URL}assets/logo-mates.svg`} alt="" width="34" height="34" />
          <span>Mates</span>
        </Link>
        <button
          ref={botonMenuRef}
          className="boton-menu"
          type="button"
          aria-label="Abrir menú"
          aria-controls="barra-lateral"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(true)}
        >
          <IconoMenu />
        </button>
      </div>

      <div
        className={menuAbierto ? 'velo visible' : 'velo'}
        onClick={() => cerrarMenu(true)}
      />

      <Sidebar
        abierto={menuAbierto}
        botonCerrarRef={botonCerrarRef}
        leccionActual={datosLeccion}
        onNavegar={devolverFoco => cerrarMenu(Boolean(devolverFoco))}
        onAbrirDialogo={abrirDialogo}
      />

      <div className="app">
        <Outlet />
      </div>

      <LogrosDialogo
        abierto={dialogo === 'logros'}
        onCerrar={() => setDialogo(null)}
      />
      <AjustesDialogo
        abierto={dialogo === 'ajustes'}
        onCerrar={() => setDialogo(null)}
      />
    </>
  );
}

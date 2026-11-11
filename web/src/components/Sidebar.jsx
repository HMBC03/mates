import { Link, NavLink } from 'react-router-dom';
import {
  IconoAjustes,
  IconoCerrar,
  IconoContenidos,
  IconoLibro,
  IconoLogros,
  IconoRuta
} from './Iconos.jsx';

function claseEnlace({ isActive }) {
  return isActive ? 'menu-enlace activo' : 'menu-enlace';
}

export default function Sidebar({
  abierto,
  botonCerrarRef,
  leccionActual,
  onNavegar,
  onAbrirDialogo
}) {
  return (
    <aside
      className={abierto ? 'barra-lateral abierta' : 'barra-lateral'}
      id="barra-lateral"
      aria-label="Navegación principal"
    >
      <div className="barra-lateral-cabecera">
        <Link
          className="marca"
          to="/"
          aria-label="Mates, inicio"
          onClick={() => onNavegar(false)}
        >
          <img src={`${import.meta.env.BASE_URL}assets/logo-mates.svg`} alt="" width="38" height="38" />
          <span>Mates</span>
        </Link>
        <button
          ref={botonCerrarRef}
          className="boton-cerrar"
          type="button"
          aria-label="Cerrar menú"
          onClick={() => onNavegar(true)}
        >
          <IconoCerrar />
        </button>
      </div>

      <nav className="menu-principal" aria-label="Principal">
        <NavLink
          className={claseEnlace}
          to="/"
          end
          onClick={() => onNavegar(false)}
        >
          <IconoRuta />
          <span>Ruta</span>
        </NavLink>

        <Link
          className={
            leccionActual.pagina === 'unidad'
              ? 'menu-enlace activo'
              : 'menu-enlace'
          }
          id="enlace-leccion-actual"
          to={`/conjuntos#paso-${leccionActual.leccion.numero}`}
          aria-label={`Ir a la lección actual: ${leccionActual.leccion.titulo}`}
          aria-current={leccionActual.pagina === 'unidad' ? 'page' : undefined}
          onClick={() => onNavegar(false)}
        >
          <IconoLibro />
          <span>Lección actual</span>
        </Link>

        <NavLink
          className={claseEnlace}
          to="/programa"
          onClick={() => onNavegar(false)}
        >
          <IconoContenidos />
          <span>Contenidos</span>
        </NavLink>

        <button
          className="menu-enlace"
          type="button"
          onClick={() => onAbrirDialogo('logros')}
        >
          <IconoLogros />
          <span>Logros</span>
        </button>

        <button
          className="menu-enlace"
          type="button"
          onClick={() => onAbrirDialogo('ajustes')}
        >
          <IconoAjustes />
          <span>Ajustes</span>
        </button>
      </nav>
    </aside>
  );
}

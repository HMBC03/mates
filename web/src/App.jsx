import { useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import { ProgresoProvider } from './context/ProgresoContext.jsx';
import { ToastProvider } from './components/Toast.jsx';
import Layout from './components/Layout.jsx';
import RutaPage from './pages/RutaPage.jsx';
import LeccionPage from './pages/LeccionPage.jsx';
import ProgramaPage from './pages/ProgramaPage.jsx';

function ScrollAlInicio() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Redirigir({ destino }) {
  const { hash } = useLocation();
  return <Navigate to={{ pathname: destino, hash }} replace />;
}

export default function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <ProgresoProvider>
      <ToastProvider>
        <BrowserRouter basename={base}>
          <ScrollAlInicio />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<RutaPage />} />
              <Route path="/conjuntos" element={<LeccionPage />} />
              <Route path="/conjuntos/" element={<LeccionPage />} />
              <Route path="/programa" element={<ProgramaPage />} />
              <Route path="/programa/" element={<ProgramaPage />} />

              {/* Enlaces del sitio estático anterior. */}
              <Route path="/index.html" element={<Redirigir destino="/" />} />
              <Route
                path="/conjuntos/index.html"
                element={<Redirigir destino="/conjuntos" />}
              />
              <Route
                path="/programa/index.html"
                element={<Redirigir destino="/programa" />}
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </ProgresoProvider>
  );
}

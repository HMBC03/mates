import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { IconoCheck } from './Iconos.jsx';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [mensaje, setMensaje] = useState('');
  const [visible, setVisible] = useState(false);
  const temporizador = useRef(null);

  const mostrarToast = useCallback(texto => {
    setMensaje(texto);
    setVisible(true);
    window.clearTimeout(temporizador.current);
    temporizador.current = window.setTimeout(() => setVisible(false), 3000);
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(temporizador.current);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ mostrarToast }}>
      {children}
      <div
        className={visible ? 'toast visible' : 'toast'}
        role="status"
        aria-live="polite"
      >
        <IconoCheck />
        <span>{mensaje}</span>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const contexto = useContext(ToastContext);
  if (!contexto) throw new Error('useToast debe usarse dentro de ToastProvider');
  return contexto;
}

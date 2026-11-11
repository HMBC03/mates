import { useRef, useState } from 'react';
import { IconoPlay } from './Iconos.jsx';

export default function VideoLeccion({ video }) {
  const videoRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);
  const fuente = video.src.startsWith('/')
    ? `${import.meta.env.BASE_URL}${video.src.slice(1)}`
    : video.src;

  function reproducir() {
    const elemento = videoRef.current;
    if (!elemento) return;
    const reproduccion = elemento.play();
    if (reproduccion && reproduccion.catch) reproduccion.catch(() => {});
  }

  function alTerminar() {
    const elemento = videoRef.current;
    setReproduciendo(false);
    if (!elemento) return;
    elemento.controls = false;
    elemento.currentTime = 0;
  }

  return (
    <div className="leccion-video">
      <div className={reproduciendo ? 'video-caja reproduciendo' : 'video-caja'}>
        <video
          ref={videoRef}
          preload="metadata"
          playsInline
          controls={reproduciendo}
          onPlay={() => setReproduciendo(true)}
          onEnded={alTerminar}
        >
          <source src={fuente} type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
        <button
          className="video-play"
          type="button"
          aria-label={video.aria}
          onClick={reproducir}
        >
          <IconoPlay />
        </button>
        <span className="video-marca">Animación Manim</span>
        <span className="video-tiempo">{video.tiempo}</span>
      </div>
      <p className="video-pie">{video.pie}</p>
    </div>
  );
}

import { practica } from '../data/lecciones.js';

export default function Practica() {
  return (
    <section className="practica" aria-labelledby="practica-titulo">
      <h2 id="practica-titulo">{practica.titulo}</h2>
      <p dangerouslySetInnerHTML={{ __html: practica.introHtml }} />

      {practica.ejercicios.map(ejercicio => (
        <article className="ejercicio" key={ejercicio.titulo}>
          <h3>{ejercicio.titulo}</h3>
          <div dangerouslySetInnerHTML={{ __html: ejercicio.enunciadoHtml }} />
          <details
            className="solucion"
            dangerouslySetInnerHTML={{ __html: ejercicio.solucionHtml }}
          />
        </article>
      ))}
    </section>
  );
}

import { glosario } from '../data/lecciones.js';

export default function Glosario() {
  return (
    <section className="glosario" aria-labelledby="glosario-titulo">
      <h2 id="glosario-titulo">Glosario de símbolos</h2>
      <div className="tabla-scroll">
        <table>
          <thead>
            <tr>
              <th>Símbolo</th>
              <th>Se lee</th>
              <th>Significado</th>
            </tr>
          </thead>
          <tbody>
            {glosario.map(fila => (
              <tr key={fila.simbolo}>
                <td>{fila.simbolo}</td>
                <td>{fila.seLee}</td>
                <td>{fila.significado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

import { IconoFlecha } from './Iconos.jsx';

export default function BarraAccion({
  practica,
  numero,
  total,
  completada,
  onAccion
}) {
  let etiqueta;
  let subtitulo;
  let texto;

  if (practica) {
    etiqueta = 'Práctica de la unidad';
    subtitulo = 'Repasa y cierra la unidad';
    texto = 'Terminar';
  } else {
    const ultima = numero === total;
    etiqueta = `Lección ${numero} de ${total}`;
    subtitulo = completada
      ? 'Lección completada'
      : 'Completa la lección para continuar';

    if (!completada) {
      texto = ultima ? 'Completar y practicar' : 'Completar';
    } else {
      texto = ultima ? 'Ir a la práctica' : 'Siguiente';
    }
  }

  return (
    <div className="barra-accion">
      <div className="barra-accion-interior">
        <div className="barra-accion-texto">
          <strong>{etiqueta}</strong>
          <span>{subtitulo}</span>
        </div>
        <button className="boton-accion" type="button" onClick={onAccion}>
          <span>{texto}</span>
          <IconoFlecha />
        </button>
      </div>
    </div>
  );
}

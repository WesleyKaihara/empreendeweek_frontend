import "../../styles/areas.css";

const AreaAusencia = () => {
  return (
    <section className='area-content'>
      <h1 className='area-titulo'>Ausência</h1>
      <h3 className='area-subtitulo'>
        Aqui você justifica por que não pode ir ao evento da cooperativa. Explique sua situação com clareza. Anexe documentos que comprovem sua ausência, caso os tenha e aguarde a validação do analista.
      </h3>
      <button type="button" className='btn btn btn-primary mx-2' data-bs-toggle="modal" data-bs-target="#enviarAusenciaModal">
        Justificar Ausência
      </button>
    </section>
  );
}

export default AreaAusencia;
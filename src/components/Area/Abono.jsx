import { Link } from 'react-router-dom';
import "../../styles/areas.css";

const AreaAbono = () => {
  return (
    <section className='area-content'>
      <h1 className='area-titulo'>Abono</h1>
      <h3 className='area-subtitulo'>
        Aqui você envia a comprovação e pede os pontos que tem direito de ganhar. Anexe o certificado ou o comprovante de participação do evento. Informe quantos pontos espera receber. Envie sua solicitação.
      </h3>
      <Link className='btn btn-primary' to="/abonos">
        Solicitar Abono
      </Link>
    </section>
  );
}

export default AreaAbono;
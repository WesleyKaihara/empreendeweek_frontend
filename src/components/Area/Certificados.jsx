import { Link } from 'react-router-dom';
import "../../styles/areas.css";
import EnviarCertificadoModal from '../Modal/Certificado/EnviarCertificadoModal';

const AreaCertificados = () => {
  return (
    <section className='area-content'>
      <h1 className='area-titulo'>Certificados</h1>
      <h3 className='area-subtitulo'>
        Nesta página, veja os certificados e informações dos eventos que participou. Saiba data, horário, local e tema de cada um. Baixe e compartilhe os PDFs.
      </h3>
      <Link className='btn btn-primary' to="/certificados">
        Acompanhar Certificados
      </Link>
      <button type="button" className='btn btn-secundary mx-2' data-bs-toggle="modal" data-bs-target="#enviarCertificadoModal">
        Enviar Certificado
      </button>
      <EnviarCertificadoModal/>

    </section>
  );
}

export default AreaCertificados;
import axios from 'axios';
import "../../styles/cards.css";
import { useState } from 'react';

const CertificadoItem = ({ atividadeId, nome_arquivo, pontos, atividade, arquivo_valido, data_validacao, admin, statusAtividade }) => {
  const [pontosAvaliacao, setPontosAvaliacao] = useState(0)

  const avaliarCertificado = async(status = null) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/atividade-usuario/status/${atividadeId}`, {
      arquivo_valido: status || statusAtividade,
      pontos: Number(pontosAvaliacao)
    });

    window.location.reload(false);
  }

  const getValidacao = () => {
    if(data_validacao) {
      if(atividade.tipo_atividade.nome === "Eventos") {
        return "Presente"
      }
      if(arquivo_valido) {
        return "Aprovado"
      } else {
        return "Negado"
      }
    } else {
      if(atividade.tipo_atividade.nome === "Eventos") {
        return "Ausente"
      }
      return "Pendente"
    }
  }

  return (
    <div className='certificado-card mt-3'>
      <div className='row'>
        <div className="col-9">
          <h1>{atividade.nome}</h1>
          <h3 className='mt-2'>CATEGORIA: {atividade.tipo_atividade.nome}</h3>
          <h3 className='mt-2'>STATUS: <span className={getValidacao()}>{getValidacao()}
          </span></h3>
          {
            !data_validacao && admin &&
            <>
              <button 
                className='btn btn-success mt-2' 
                onClick={() => avaliarCertificado(1)}
              >
                Aprovar
              </button>
              <button 
                className='btn btn-danger mt-2 mx-2' 
                onClick={() => avaliarCertificado(0)}
              >
                Rejeitar
              </button>
            </>
          }

        </div>
          <div className="col-3">
            {
              atividade.tipo_atividade.nome !== "Eventos" &&
              <a 
                className='btn btn-secundary'
                href={`${process.env.REACT_APP_API_URL}/arquivo/${nome_arquivo}`} 
                target="_blank"
                rel="noreferrer"
              >
                Visualizar Certificado
              </a>  
            }
            
            {
              pontos && atividade.tipo_atividade.nome !== "Especialização"?
              <p className='pontos mt-4'>+{pontos} PONTOS</p>:
              !arquivo_valido || atividade.tipo_atividade.nome === "Especialização"? "" : 
              <form onSubmit={(e) => {
                e.preventDefault();
                avaliarCertificado();
              }}>
                <input type="number" onChange={v => setPontosAvaliacao(v.target.value)} className='form-control mt-2' placeholder='Qtd. Pontos'/> 
              </form>
            }
          </div>
        
      </div>
    </div>
  );
}

export default CertificadoItem;

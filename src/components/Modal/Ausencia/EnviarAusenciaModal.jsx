import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const EnviarCertificadoModal = () => {
  const [atividades, setAtividades] = useState();
  const [arquivo, setArquivo] = useState();
  const [atividadeId, setAtividadeId] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setArquivo(e.target.files[0]);
    }
  };

  const sendNovoCertificado = async() => {
    const novoCertificado = await axios.post(`${process.env.REACT_APP_API_URL}/atividade-usuario`, {
      atividade_arquivo: arquivo,
      atividade_id: atividadeId
    },
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    )
  }

  const fetchAtividades = useCallback(async() => {
    const { data }  = await axios.get(`${process.env.REACT_APP_API_URL}/atividades?usuario=1`);
    setAtividades(data);
  },[])

  useEffect(() => {
    fetchAtividades();
  }, [])


  const renderAtividadesOptions = () => {
    return (
      atividades.map(atividade => (
        <option key={atividade.id} value={atividade.id}>{atividade.nome}</option>
      ))
    ) 
  }

  return (
    <div className="modal fade" id="enviarAusenciaModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="enviarAusenciaModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="enviarAusenciaModalLabel">Envio de Certificados</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <input type="file" name="atividade_arquivo" id="atividade_arquivo" onChange={handleFileChange}/>
              <select className="form-select mt-3" aria-label="Default select example" defaultValue={""} onChange={v => setAtividadeId(v.target.value)}>
                <option selected value="">Selecione uma atividade</option>
                {atividades && renderAtividadesOptions()}
              </select>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={sendNovoCertificado}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnviarCertificadoModal;
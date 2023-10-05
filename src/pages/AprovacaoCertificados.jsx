import "../styles/admin.css";
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import CertificadoItem from '../components/Cards/CertificadoItem';

const AprovacaoCertificados = () => {
  const [atividades, setAtividades] = useState();

  const fetchAtividades = useCallback(async() => {
    const { data }  = await axios.get(`${process.env.REACT_APP_API_URL}/atividades/1`);
    setAtividades(data);
  },[])

  useEffect(() => {
    fetchAtividades();
  }, [])


  const renderCertificadoList = () => {
    return (
      atividades.map(atividade => (
        <CertificadoItem
          key={atividade.atividade_id}
          nome_arquivo={atividade.nome_arquivo}
          pontos={atividade.pontos}
          atividade={atividade.atividade}
          admin={true}
          atividadeId={atividade.id}
          data_validacao={atividade.data_validacao}
          arquivo_valido={atividade.arquivo_valido}
        />
      ))
    )
  }

  return (
    <section className='pb-4 mb-4'>
      <h1 className='admin-title mt-5 mb-3'>Análise de Atividades</h1>
      {atividades? renderCertificadoList() : ""}
    </section>
  );
}

export default AprovacaoCertificados;
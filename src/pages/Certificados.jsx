import "../styles/admin.css";
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import CertificadoItem from '../components/Cards/CertificadoItem';

const Certificados = () => {
  const [atividades, setAtividades] = useState();

  const fetchAtividades = useCallback(async() => {
    const { data }  = await axios.get(`${process.env.REACT_APP_API_URL}/atividades/1`);
    setAtividades(data);
    console.log(data);
  },[])

  useEffect(() => {
    fetchAtividades();
  }, [])


  const renderCertificadoList = () => {
    return (
      atividades.map(atividade => (
        <CertificadoItem
          atividadeId={atividade.id}
          key={atividade.nome_arquivo}
          nome_arquivo={atividade.nome_arquivo}
          pontos={atividade.pontos}
          atividade={atividade.atividade}
          data_validacao={atividade.data_validacao}
          arquivo_valido={atividade.arquivo_valido}
          statusAtividade={atividade.arquivo_valido}
        />
      ))
    )
  }

  return (
    <section className='pb-5'>
      <h1 className='admin-title mt-5 mb-5'>Minhas Atividades</h1>
      {atividades? renderCertificadoList() : ""}
    </section>
  );
}

export default Certificados;
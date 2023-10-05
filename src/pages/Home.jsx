import "../styles/home.css";
import AreaAbono from '../components/Area/Abono';
import AreaAusencia from '../components/Area/Ausencia';
import AreaCertificados from '../components/Area/Certificados';
import EstatisticasGeral from '../components/EstatisticasGeral';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [usuario, setUsuario] = useState("");
  const [pontos, setPontos] = useState(0);

  const fetchPontosUsuario = useCallback(async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/usuario/estatisticas/1`);
    let res = data[0].pontos || 0;
    setPontos(res);
  },[]);

  const fetchUsuario = useCallback(async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/usuario/1`);
    setUsuario(data);
  },[]);

  const StatusPVC = () => {
    return (
      <span className='statusPVC ativo'>
        Ativo no PVC
      </span>
    );
  };

  useEffect(() => {
    fetchUsuario();
    fetchPontosUsuario();
  },[]);

  return (
    <section className='container mt-5'>
      <h1 className='home-title'>Bem vindo, {usuario.nome} {StatusPVC()}</h1>
      <EstatisticasGeral usuario={usuario} pontos={pontos} />
      <AreaCertificados/>
      <AreaAusencia/>
      <AreaAbono/>
    </section>
  );
}

export default Home;

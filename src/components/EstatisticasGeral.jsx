import { useCallback, useEffect, useState } from 'react';
import "../styles/estatisticasGeral.css";
import axios from 'axios';

const EstatisticasGeral = ({ 
  usuario = {}, 
  pontos = "" 
}) => {
  return (
    <section className='estatisticas-geral-content mt-3'>
      { usuario && 
      <h3>ESPECIALIDADE: { usuario.especializacao.nome}</h3>
      }
      <h2 className='pontos mt-3'>GRUPO (PQA): 4</h2>
      <h2 className='pontos mt-3'>PONTOS (PVC): {pontos} </h2>
    </section>
  );
}

export default EstatisticasGeral;
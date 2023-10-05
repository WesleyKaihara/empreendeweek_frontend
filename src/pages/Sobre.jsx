import "../styles/sobre.css";

const Sobre = () => {

  return (
    <section className='container mt-5'>
      <h1 className='sobre-title'>Programa de Valorização do Cooperado (PVC)</h1>
      <h3 className='sobre-subtitle mt-3'>
        O Programa de Valirização do Cooperado Unimed tem como por objetivo estimular o cooperado a participar das atividades da cooperativa, assim como ampliar seu conhecimento sobre as rotinas administrativas da Unimed.
      </h3>
      <h3 className='sobre-subtitle mt-3'>
        O programa é dividido em etapas, sendo que <strong> para se enquadrar na segunda etapa é obrigatório o cumprimento de um dos itens da primeira etapa</strong> conforme segue:
      </h3>
      <h2 className='topic mt-4'>1º Etapa: Atualização Científica</h2>
      <ol style={{ listStyle: "lower-alpha" }} >
        <li className="mt-2">Participar de 01 (um) Congresso de âmbito Nacional no ano vigente ou no anterior. Observação: Congresso = 03 (três) dias;</li>
        <li className="mt-2">Participar de 01 (um) Congresso Internacional no ano vigente;</li>
        <li className="mt-2">Ter participado de 02 (duas) jornadas no ano vigente. Observação: Jornada = 02 (dois) dias;</li>
        <li className="mt-2">Ter participado de 03 três cursos no ano vigente. Observação: Curso = 01 (um) dias;</li>
        <li className="mt-2">Possuir 02 (dois) artigos publicados, em revista indexada, no ano vigente;</li>
        <li className="mt-2">Ter participado de 01 jornada e 02 cursos no ano vigente;</li>
        <li className="mt-2">Ter realizado Cursos on-line, com no mínimo de 20 horas de duração, com acreditação da AMB, Sociedade da Especialidadde ou do CME, no ano vigente;</li>
        <li className="mt-2">Estar cursando pós-graduação no ano vigente.</li>
      </ol>
      <h2 className='topic mt-4'>2º Etapa: Participação nas atividades proporcionadas pela Cooperativa</h2>
      <ol style={{ listStyle: "lower-alpha" }} >
        <li className="mt-2">Participação em Assembléia Geral Ordinária = 30 (trinta) pontos para cada Assembléia;</li>
        <li className="mt-2">Participação em Assembléia Geral Extraordinária = 20 (vinte) pontos para cada Assembléia;</li>
        <li className="mt-2">Participação em Palestras Científicas da Associação Médica = 05 (cinco) pontos para cada reunião sendo no máximo 02 (duas) reuniões por ano;</li>
        <li className="mt-2">Participação em Festas Comemorativas = 10 pontos para cada festa;</li>
        <li className="mt-2">Participação Evento Anual do CRM, convocado pela UNIMED (reuniões, palestras e oficinas) = 10 pontos por evento;</li>
        <li className="mt-2">Participação nos conselhos Administração, Fiscal e Técnico = 10 (dez) pontos;</li>
        <li className="mt-2">Publicação de arquivos Cientificos da área médica em revista indexada, sendo no máximo 03 (três) artigos por ano, devendo ser artigos originais = 10 (dez) pontos cada.</li>
      </ol>
      <h2 className='topic mt-4'>Possibilidade de justificativa de ausência</h2>
      <h3 className='sobre-subtitle mt-3'>
        A Diretoria Executiva poderá validar os pontos referente a cada atividade, desde que seja justificada a ausência pelos motivos e na forma abaixo descrita:
      </h3>
      <ol style={{ listStyle: "lower-alpha" }}>
        <li className="mt-2">Morte: Ascendentes/descendentes/conjuge/irmão/colaterais em 1. Grau-deverá ser informado a Unimed Campo Mourão com atestado de obito em até 30 (trinta) dias após a ausência;</li>
        <li className="mt-2">Plantão Presencial - deverá ser informado com antecedência, com cópia da escala e anuência do diretor clínico;</li>
        <li className="mt-2">Urgências/emergências médico ou hospitalares ocorridas no horário do evento proporcionado pela coperativa. Deverá ser informado em até 48 horas após, munido de documentação comprobatória (relatório cirurgico/ficha de atendimento de emergência);</li>
        <li className="mt-2">Participação em Congresso Brasileiro/Internacional deverá ser comunicado por escrito com antecedência e ser comprovada a efetiva participação com certificado, no prazo de até 30 dias;</li>
        <li className="mt-2">Acidentes ou ocorrências clínicas de urgência e/ou emergência do própio cooperado ou de ascendetes, descendentes, cônjugue, irmãos, que impossibilite a participação no evento (documento que comprove o ocorrido/alegado);</li>
        <li className="mt-2">Situações Excepcionais serão decididas pelo Conselho Administrativo.</li>
      </ol>
    </section>
  );
}

export default Sobre;

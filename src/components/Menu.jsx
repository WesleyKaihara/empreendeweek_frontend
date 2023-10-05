import "../styles/menu.css";
import Logo from "../arquivos/logo_nome.png"

const Menu = () => {
  return (
    <section className="menu-lateral" style={{width: "15em"}}>
      <img src={Logo} alt="Logo Unimed" className='menu-lateral-img'/>
      <div className='menu-items'>
        <a href="/" className='menu-item'>
          <p>Início</p>
        </a>
        <a href="/certificados" className='menu-item'>
          <p>Certificados</p>
        </a>
        <a href="sobre" className='menu-item'>
          <p>Como funciona</p>
        </a>
        <a href="https://www.whatsapp.com/?lang=pt_BR" target='_blank' rel='noreferrer' className='menu-item'>
          <p>Suporte</p>
        </a>
      </div>
    </section>
  );
}

export default Menu;
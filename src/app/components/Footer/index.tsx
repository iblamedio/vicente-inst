import './styles.css';

import vicenteLogoWhite from '../../../../public/assets/vicente-logo-white.svg';
import instagramLogo from '../../../../public/assets/instagram.svg';
import Image from 'next/image';

export default function Footer () {
    return (
        <section className="footer">
        <div className="content">
          <div className="primary-info">
            <div className="logo">
              <div className="img">
                <Image fill src={vicenteLogoWhite.src} alt="A. Vicente" />
              </div>
              <div className="logo-text">
                  <span>AVICENTE</span>
                  <span>EMPREENDIMENTOS</span>
              </div>
            </div>
            <div className="address">
              <span>Rua 262, 270</span>
              <span>Meia Praia - Itapema - SC</span>
            </div>
            
          </div>
          <div className="secondary-info">
            <div className="social">
              <h4>Redes Sociais</h4>
              <a href="https://www.instagram.com/avicenteempreendimentos/"><Image src={instagramLogo} alt="Instagram" /></a>
            </div>
            <div className="menu">
              <h4>Menu</h4>
              <div className="items">
                <a href="#inicio">Início</a>
                <a href="#nossa-historia">Nossa História</a>
                <a href="#empreendimentos">Empreendimentos</a>
                <a href="#contato">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
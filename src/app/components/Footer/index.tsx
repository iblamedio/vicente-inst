import './styles.css';

import vicenteLogoWhite from '../../../../public/assets/vicente-logo-white.svg';
import instagramLogo from '../../../../public/assets/instagram.svg';
import linkedinLogo from '../../../../public/assets/linkedin.svg';
import facebookLogo from '../../../../public/assets/facebook.svg';

import Image from 'next/image';
import MapComponent from '../MapComponent';

export default function Footer() {
  return (
    <section className="footer">
      <div className="content">
        <div className="primary-info">
          <a href="/">
            <div className="logo">
              <div className="img">
                <Image fill src={vicenteLogoWhite.src} alt="A. Vicente" />
              </div>
              <div className="logo-text">
                <span>AVICENTE</span>
                <span>EMPREENDIMENTOS</span>
              </div>
            </div>
          </a>
          <div className="address">
            <span>Rua 262, 270</span>
            <span>Meia Praia - Itapema - SC</span>
          </div>
          <div className="map">
            <MapComponent lat={-27.13258075286012} lng={-48.60235724628996}/>
          </div>

        </div>
        <div className="secondary-info">
          <div className="social">
            <h4>Redes Sociais</h4>
            <div className="socials">
              <a className="social-link" href="https://www.instagram.com/avicenteempreendimentos/">
                <Image src={instagramLogo} alt="Instagram" />
                <span>@avicenteempreendimentos</span>
              </a>

              <a className="social-link" href="https://www.linkedin.com/company/avemp">
                <div className="icon">
                  <Image fill src={linkedinLogo} alt="Linkedin" />
                </div>
                <span>AVicente Empreendimentos</span>
              </a>

              <a className="social-link" href="https://www.facebook.com/profile.php?id=61570011282723">
                <div className="icon">
                  <Image fill src={facebookLogo} alt="Facebook" />
                </div>
                <span>AVicente Empreendimentos</span>
              </a>
            </div>
          </div>
          <div className="menu">
            <h4>Menu</h4>
            <div className="items">
              <a href="/">Início</a>
              <a href="/blog">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
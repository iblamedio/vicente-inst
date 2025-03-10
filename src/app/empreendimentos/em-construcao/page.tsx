import Image from 'next/image';
import './styles.css';
import './mobile.css';

import arunaFoto from '../../../../public/assets/aruna-fachada-noturno.webp';
import arunaLogo from '../../../../public/assets/aruna-logo.svg';

import vicenteFoto from '../../../../public/assets/vicente.webp';
import vicenteLogo from '../../../../public/assets/vicente-logo.png';

import seloVendido from '../../../../public/assets/selo-vendido.svg';

export default function EmConstrucao() {
    return (
        <section className="emp-catalog">
            <h1 className="noselect">Em Construção</h1>

            <div className="catalog-container">
                <a href="https://aruna.avempreendimentos.com.br" className="catalog-card">
                    <Image src={arunaFoto} alt="Aruna Tower" width={285} height={355} />
                    <div className="cat-legend">
                        <div className="cat-text">
                            <h4>Aruna Tower</h4>
                            <span>50% concluído</span>
                        </div>
                        <Image src={arunaLogo} alt="Aruna Tower" width={55} height={55}/>
                    </div>
                </a>

                <a href="/empreendimentos/em-construcao/vicente" className="catalog-card">
                    <Image src={vicenteFoto} alt="Vicente Residencial" width={285} height={355} className="card-photo" />
                    <Image src={seloVendido} alt="100% Vendido" className="sold-stamp"/>
                    <div className="cat-legend">
                        <div className="cat-text">
                            <h4>Vicente Residencial</h4>
                            <span>85% concluído</span>
                        </div>
                        <Image src={vicenteLogo} alt="Vicente Residencial" width={55} height={55}/>
                    </div>
                </a>
            </div>
        </section>
    )
}
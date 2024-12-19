import Image from 'next/image';
import './styles.css';

import leoReis from '../../../../public/assets/equipe/leoreis.webp';
import andreVicente from '../../../../public/assets/equipe/andrevicente.webp';

export default function Equipe() {
    return (
        <section className="equipe">
            <h1>Conheça nossa equipe</h1>
            <div className="equipe-container">

                <div className="equipe-col">
                    <Image src={andreVicente} alt="André P. Vicente" width={220} height={300}/>
                    <div className="equipe-legend">
                        <h4>André P. Vicente</h4>
                        <span>Comercial</span>
                    </div>
                </div>

                <div className="equipe-col">
                    <Image src={leoReis} alt="Léo Reis" width={220} height={300}/>
                    <div className="equipe-legend">
                        <h4>Léo Reis</h4>
                        <span>Comercial</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
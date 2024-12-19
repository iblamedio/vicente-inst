import './styles.css';

import mariaDolores from '../../../../public/assets/mariadolores.webp';
import Image from 'next/image';

export default function Entregues() {
    return (
        <section className="emp-catalog">
            <h1 className="noselect">Entregues</h1>

            <div className="catalog-container">

                <div className="catalog-card">
                    <Image src={mariaDolores} alt="Maria Dolores" width={285} height={355} />
                    <div className="cat-legend">
                        <div className="cat-text">
                            <h4>Residencial Maria Dolores</h4>
                            <span>Entregue</span>
                        </div>
                        {/* <Image src={arunaLogo} alt="Aruna Tower" width={55} height={55}/> */}
                    </div>
                </div>
            
            </div>
        </section>
    )
}
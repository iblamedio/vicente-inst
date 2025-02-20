import './styles.css';
import './mobile.css';

import mariaDolores from '../../../../public/assets/mariadolores.webp';
import Image from 'next/image';

import seloVendido from '../../../../public/assets/selo-vendido.svg';

export default function Entregues() {
    return (
        <section className="emp-catalog">
            <h1 className="noselect">Entregues</h1>

            <div className="catalog-container">

                <div className="catalog-card">
                    <Image src={mariaDolores} alt="Maria Dolores" width={285} height={355} className="card-photo" />
                    <Image src={seloVendido} alt="100% Vendido" className="sold-stamp"/>
                    <div className="cat-legend">
                        <div className="cat-text">
                            <h4>Residencial Maria Dolores</h4>
                            <span>Entregue</span>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
    )
}
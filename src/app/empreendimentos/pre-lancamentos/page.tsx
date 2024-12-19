import './styles.css';

import placeholder from '../../../../public/assets/placeholder-building.webp';
import Image from 'next/image';

export default function PreLancamentos() {
    return (
        <section className="emp-catalog">
            <h1 className="noselect">Pré Lançamentos</h1>

            <div className="catalog-container">

                <div className="catalog-card">
                    <Image src={placeholder} alt="Maria Eva" width={285} height={355} />
                    <div className="cat-legend">
                        <div className="cat-text">
                            <h4>Maria Eva</h4>
                            <span>Em breve</span>
                        </div>
                        {/* <Image src={arunaLogo} alt="Aruna Tower" width={55} height={55}/> */}
                    </div>
                </div>
            
            </div>
        </section>
    )
}
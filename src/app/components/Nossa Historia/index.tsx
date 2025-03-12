import './styles.css';

import alencar from '../../../../public/assets/alencar.webp';
import Image from 'next/image';

export default function NossaHistoria () {
    return (
        <section id="nossa-historia" className="second">
        <div className="text-container">
          <div className="text-content">
            <h1>Nossa História</h1>
            <p>
              A <span>AVicente Empreendimentos</span> nasceu do sonho de <span>Alencar Maurício Vicente</span>,
              que desde jovem superou desafios para transformar sua vida e deixar um legado.
              <br/><br/>
              Natural de Indaial (SC), mudou-se para Itapema, onde trabalhou em diversas
              áreas até encontrar sua paixão no mercado imobiliário. <span>Em 2019, fundou a AVicente Empreendimentos.</span>
            </p>
          </div>
        </div>

        <div className="photo-container">
          <div className="photo-content">
            <div className="img">
              <Image fill src={alencar.src} alt="Alencar Vicente" />
            </div>
            <h1>Alencar Maurício Vicente</h1>
          </div>
        </div>
      </section>
    )
}
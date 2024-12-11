import './styles.css';

import alencar from '../../assets/alencar.webp';

export default function NossaHistoria () {
    return (
        <section id="nossa-historia" className="second">
        <div className="text-container">
          <div className="text-content">
            <h1>Nossa História</h1>
            <p>
              A <span>AVicente Empreendimentos</span> nasceu do sonho e da determinação de 
              <span> Alencar Maurício Vicente</span>, que desde muito jovem superou 
              os mais diversos desafios, tudo com o objetivo de transformar sua 
              vida e construir um legado em sua história.<br/><br/>
              
              Natural de Indaial, Santa Catarina, Alencar 
              mudou-se ainda criança para <span>Itapema</span>, onde trabalhou 
              em diversas áreas, indo da venda de picolé à aprender sobre desenho 
              e atuar em escritório de arquitetura. Sempre em busca de conhecimento 
              e oportunidades, Alencar entra para o dia a dia do mercado imobiliário 
              e aqui encontra sua paixão. <span>Em 2019, nasce a AVicente Empreendimentos.</span>
            </p>
          </div>
        </div>

        <div className="photo-container">
          <div className="photo-content">
            <img src={alencar} alt="Alencar Vicente" />
            <h1>Alencar Maurício Vicente</h1>
          </div>
        </div>
      </section>
    )
}
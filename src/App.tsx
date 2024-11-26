import './App.css';
import './mobile.css';

import Header from './components/Header';
import mariaDolores from './assets/mariadolores.png';
import aruna from './assets/aruna.png';
import vicente from './assets/vicente.png';
import alencar from './assets/alencar.png';

function App() {

  return (
    <>
      <Header/>
      <section className="first">
        <div className="content">
          <h1>Priorizamos a excelência em cada um de nossos empreendimentos.</h1>
          <button>Entrar em contato</button>
          <div className="hero-fotos">
            <img src={mariaDolores} alt="Maria Dolores" />
            <img src={aruna} alt="Aruna" />
            <img src={vicente} alt="Vicente" />
          </div>
        </div>
      </section>

      <section className="second">
        <div className="text-container">
          <div className="text-content">
            <h1>Nossa História</h1>
            <p>
              <span>A Vicente Empreendimentos</span> nasceu do sonho e da determinação de 
              <span> Alencar Maurício Vicente</span>, que desde jovem superou desafios para 
              transformar sua vida.<br/><br/> Natural de Indaial, Santa Catarina, Alencar 
              mudou-se ainda criança para <span>Itapema</span>, onde trabalhou em diversas 
              áreas, desde vendedor de picolé até a construção civil.<br/><br/> Determinado 
              a buscar novas oportunidades, Alencar ingressou em um escritório de 
              arquitetura, onde aprimorou suas habilidades. <span>Em 2019, ele fundou 
              A Vicente Empreendimentos.</span>
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
    </>
  )
}

export default App

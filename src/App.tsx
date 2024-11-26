import './App.css'

import Header from './components/Header';
import mariaDolores from './assets/mariadolores.png';
import aruna from './assets/aruna.png';
import vicente from './assets/vicente.png';

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
        
      </section>
    </>
  )
}

export default App

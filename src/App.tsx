import { motion } from 'motion/react';

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

      <section className="third">
        <motion.div  
          transition={{ duration: 0.8, ease: "circInOut" }} 
          initial={{opacity:0, x:-300}} 
          whileInView={{opacity:1, x:0}} 
          viewport={{once:true}} 
          className="card"
        >
          <img src={aruna} alt="Aruna" />
          <div className="text">
            <h1>Aruna Tower Residence</h1>
            <p>A fachada do Aruna Tower Residence é marcante e imponente, 
              com acabamento cerâmico que se estende até a garagem e iluminação 
              em LED que realça sua beleza.</p>
              <button>Saiba Mais</button>
          </div>
        </motion.div>

        <motion.div 
          transition={{ duration: 0.8, ease: "circInOut" }} 
          initial={{opacity:0, x:300}} 
          whileInView={{opacity:1, x:0}} 
          viewport={{once:true}} 
          className="card"
        >
          <img src={vicente} alt="Vicente" />
          <div className="text">
            <h1>Residencial Vicente</h1>
            <p>
              Vicente Residencial está localizado na Meia
              Praia, este empreendimento oferece uma
              posição estratégica e acesso conveniente às
              principais comodidades da região.<br/><br/>
              Sua fachada exibe uma combinação de pintura
              de alta qualidade, volumetria em material leve
              como EPS e sofisticados detalhes em pele de
              vidro, criando um design moderno e elegante.
            </p>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 0.8, ease: "circInOut" }} 
          initial={{opacity:0, x:-300}} 
          whileInView={{opacity:1, x:0}} 
          viewport={{once:true}} 
          className="card"
        >
          <img src={mariaDolores} alt="Maria Dolores" />
          <div className="text">
            <h1>Residencial Maria Dolores</h1>
            <p>
              O Residencial Maria Dolores, o primeiro projeto da Vicente 
              Empreendimentos, foi entregue no final de 2021/2022 e homenageia 
              a mãe de Alencar, marcando um grande sucesso.
            </p>
          </div>
        </motion.div>

      </section>

      <section className="fourth">
        <div className="content">
          <div className="text">
            <h1>Nos envie uma mensagem</h1>
            <p>Preencha o formulário e nossa equipe entrará em contato.</p>
          </div>

          <motion.div className="form-card"
            transition={{ duration: 0.8, ease: "circOut" }} 
            initial={{ rotateX:90 }} 
            whileInView={{ rotateX:0 }} 
            viewport={{once:true}}
          >
            <form action="#">
              <div className="inputs">
                <div className="input">
                  <label htmlFor="nome">Nome</label>
                  <input placeholder="João da Silva" name="nome" type="text" />
                </div>
                <div className="input">
                  <label htmlFor="email">E-mail</label>
                  <input placeholder="email@gmail.com" name="email" type="email" />
                </div>
                <div className="input">
                  <label htmlFor="telefone">Telefone</label>
                  <input placeholder="(00) 00000-0000" name="telefone" type="text" />
                </div>
                <div className="input">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea placeholder="Escreva aqui sua mensagem..." name="telefone" />
                </div>

                <input type="submit" value="Enviar" formAction='#' />

              </div>
            </form>
          </motion.div>
        </div>
      </section>

    </>
  )
}

export default App

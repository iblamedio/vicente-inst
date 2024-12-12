import './styles.css';

import Image from 'next/image';
import { motion } from 'motion/react';

import mariaDolores from '../../../../public/assets/mariadolores.webp';
import aruna from '../../../../public/assets/aruna.webp';
import vicente from '../../../../public/assets/vicente.webp';

export default function Empreendimentos() {
    return (
        <section id="empreendimentos" className="third">
        <motion.div  
          transition={{ duration: 0.8, ease: "circInOut" }} 
          initial={{opacity:0, x:-300}} 
          whileInView={{opacity:1, x:0}} 
          viewport={{once:true}} 
          className="card"
        >

          <div className="card-seal">
            3ª Obra | <span>Entrega prevista para 2027</span>
          </div>
          <div className="card-content">
            <div className="img">
              <Image fill src={aruna.src} alt="Aruna" />
            </div>
            <div className="text">
              <h1>Aruna Tower Residence</h1>
              <p>A fachada do Aruna Tower Residence é marcante e imponente, 
                com acabamento cerâmico que se estende até a garagem e iluminação 
                em LED que realça sua beleza.</p>
                <a href="https://aruna.avempreendimentos.com.br/"><button>Saiba Mais</button></a>
            </div>
          </div>
          
        </motion.div>

        <motion.div 
          transition={{ duration: 0.8, ease: "circInOut" }} 
          initial={{opacity:0, x:300}} 
          whileInView={{opacity:1, x:0}} 
          viewport={{once:true}} 
          className="card"
        >
          <div className="card-seal">
            2ª Obra | <span>Entrega prevista para o 1º semetre de 2025</span>
          </div>
          <div className="card-content">
            <div className="img">
              <Image fill src={vicente.src} alt="Vicente" />
            </div>
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
          </div>
          
        </motion.div>

        <motion.div
          transition={{ duration: 0.8, ease: "circInOut" }} 
          initial={{opacity:0, x:-300}} 
          whileInView={{opacity:1, x:0}} 
          viewport={{once:true}} 
          className="card"
        >
          <div className="card-seal">
            1ª Obra | <span>Entregue</span>
          </div>
          <div className="card-content">
            <div className="img">
              <Image fill src={mariaDolores.src} alt="Maria Dolores" />
            </div>
            <div className="text">
              <h1>Residencial Maria Dolores</h1>
              <p>
                O Residencial Maria Dolores, o primeiro projeto da Vicente 
                Empreendimentos, foi entregue no final de 2021/2022 e homenageia 
                a mãe de Alencar, marcando um grande sucesso.
              </p>
            </div>
          </div>          
        </motion.div>

      </section>
    )
}
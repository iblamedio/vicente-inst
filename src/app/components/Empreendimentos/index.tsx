import './styles.css';
import './mobile.css';

import Image from 'next/image';
import { motion } from 'motion/react';

import mariaDolores from '../../../../public/assets/mariadolores.webp';
import aruna from '../../../../public/assets/aruna-fachada.webp';

import open from '../../../../public/assets/open.svg';

export default function Empreendimentos() {
    return (
        <section className="empreendimentos">
          <h1>Empreendimentos</h1>

          <div className="empreendimentos-content">
            <motion.div                     
              transition={{ duration: 0.2 }} 
              initial={{ x:-200}} 
              whileInView={{x:0}} 
              viewport={{once:true}} 
              className="emp-card"
            >
              <div className="emp-overlay">
                <div className="emp-overlay-text">
                  <h2>Entregues</h2>
                  <div className="emp-open-icon">
                    <Image src={open} alt="Abrir" fill/>
                  </div>
                </div>
              </div>
              <Image src={mariaDolores} alt="Entregues" fill className="emp-image"/>
            </motion.div>

            <motion.div
              transition={{ duration: 0.2, delay:0.2 }}
              initial={{y:200}} 
              whileInView={{y:0}} 
              viewport={{once:true}} 
              className="emp-card"
            >
              <div className="emp-overlay">
                <div className="emp-overlay-text">
                  <h2>Em <br/>Construção</h2>
                  <div className="emp-open-icon">
                    <Image src={open} alt="Abrir" fill/>
                  </div>
                </div>
              </div>
              <Image src={aruna} alt="Em construção" fill className="emp-image"/>
            </motion.div>

            <motion.div                     
              transition={{ duration: 0.2, delay:0.4 }} 
              initial={{x:200}} 
              whileInView={{x:0}} 
              viewport={{once:true}} 
              className="emp-card"
            >
              <div className="emp-overlay">
                <div className="emp-overlay-text">
                  <h2>Pré <br/>Lançamentos</h2>
                  <div className="emp-open-icon">
                    <Image src={open} alt="Abrir" fill/>
                  </div>
                </div>
              </div>
              <Image src={aruna} alt="Pré Lançamentos" fill className="emp-image"/>
            </motion.div>
          </div>

        </section>
    )
}
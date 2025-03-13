import Image from "next/image";
import "./styles.css";
import { motion } from 'motion/react';

import downGif from '../../../../public/assets/down.gif';

export default function Inicio () {
    return (
        <div className="first-container">
            <section id="inicio" className="first">
                <motion.div 
                    transition={{ duration: 0.8 }} 
                    initial={{opacity:0, y:-55}} 
                    whileInView={{opacity:1, y:0}} 
                    viewport={{once:true}} 
                    className="content"
                >
                    <div className="headline">
                        <h1>Priorizamos a <span>excelência</span> em cada um de nossos empreendimentos.</h1>
                        <a href="#contato">
                            <button><span>Entrar em contato</span></button>
                        </a>
                    </div>
                </motion.div>
            </section>
            <div className="gif-container">
                <Image src={downGif} alt="Role para baixo para mais informações" width={80} height={80} unoptimized/>
            </div>
            <div className="first-bg"/>
        </div>
    )
}
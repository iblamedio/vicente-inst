import { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';

import './styles.css';
import './header-mobile.css'

import vicenteLogo from '../../assets/vicente-logo.svg';

export default function Header() {

    const [active, setActive] = useState("inicio");

    useEffect (()=>{

        const scrollNossaHistoria = document.getElementById("nossa-historia")?.offsetTop || 0;
        const scrollEmpreendimentos = document.getElementById("empreendimentos")?.offsetTop || 0;
        const scrollContato = document.getElementById("contato")?.offsetTop || 0;

        document.addEventListener("scroll", () => {
            let scrollPos = document.scrollingElement?.scrollTop || 0;

            if (scrollPos >= scrollContato) {
                setActive("contato");
                return;
            }

            if (scrollPos >= scrollEmpreendimentos) {
                setActive("empreendimentos");
                return;
            }

            if (scrollPos < scrollNossaHistoria) {
                setActive("inicio");
                return;
            }

            if (scrollPos >= scrollNossaHistoria) {
                setActive("nossa-historia");
                return;
            }
        });

    },[]);

    const { scrollYProgress } = useScroll();

    return (
        <div className="header-container">
            <header>
                <div className="content">
                    <a href="#inicio">
                        <div className="logo">
                            <img src={vicenteLogo} alt="A. Vicente" />
                            <div className="logo-text">
                                <span>AVICENTE</span>
                                <span>EMPREENDIMENTOS</span>
                            </div>
                        </div> 
                    </a>

                    <nav>
                        <a href="#inicio"><span className={ active === 'inicio' ? 'active' : '' }>Início</span></a>
                        <a href="#nossa-historia"><span className={ active === 'nossa-historia' ? 'active' : '' }>Nossa História</span></a>
                        <a href="#empreendimentos"><span className={ active === 'empreendimentos' ? 'active' : '' }>Empreendimentos</span></a>
                        <a href="#contato"><span className={ active === 'contato' ? 'active' : '' }>Contato</span></a>
                    </nav>
                </div>
            </header>
            <motion.div style={{ scaleX: scrollYProgress }}  className="progress-bar"/>
        </div>
    )
}
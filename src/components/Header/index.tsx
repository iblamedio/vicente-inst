import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

import './styles.css';
import './header-mobile.css'

import vicenteLogo from '../../assets/vicente-logo-white.svg';

export default function Header() {

    const { scrollYProgress } = useScroll();

    const [scrollPosState, setScrollPosState] = useState(0);

    useEffect (()=>{

        document.addEventListener("scroll", () => {
            let scrollPos = document.scrollingElement?.scrollTop || 0;

            setScrollPosState(scrollPos);
        });

    },[]);

    return (
        <div className={`header-container` + (scrollPosState === 0 ? ' scroll-zero' : '')}>
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
                        <a><span>Início</span></a>
                        <a><span>Nossa História</span></a>
                        <a><span >Empreendimentos</span></a>
                        <a><span>Contato</span></a>
                    </nav>
                </div>
            </header>
            <motion.div style={{ scaleX: scrollYProgress }}  className="progress-bar"/>
        </div>
    )
}
import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import Modal from 'react-modal';

import './styles.css';
import './header-mobile.css'

import vicenteLogo from '../../../../public/assets/vicente-logo-white.svg';
import Image from 'next/image';

export default function Header() {

    Modal.setAppElement('#app');

    const { scrollYProgress } = useScroll();

    const [scrollPosState, setScrollPosState] = useState(0);

    const [isOpen, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    useEffect (()=>{

        document.addEventListener("scroll", () => {
            const scrollPos = document.scrollingElement?.scrollTop ?? 0;

            setScrollPosState(scrollPos);
        });

    },[]);

    return (
        <div className={
            scrollPosState !== 0 || isOpen ? "header-container" : "header-container scroll-zero"
        }>
            <header>
                <div className="content">
                    <a href="#inicio">
                        <div className="logo">
                            <div className="img">
                                <Image fill src={vicenteLogo.src} alt="A. Vicente" />
                            </div>
                            <div className="logo-text">
                                <span>AVICENTE</span>
                                <span>EMPREENDIMENTOS</span>
                            </div>
                        </div> 
                    </a>

                    <div className="burger">
                        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen}/>
                    </div>

                    <nav className="desktop">
                        <a><span>Início</span></a>
                        <a><span>Nossa História</span></a>
                        <a><span>Empreendimentos</span></a>
                        <a><span>Contato</span></a>
                    </nav>

                    <Modal 
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        className="modal"
                        overlayClassName="overlay"
                        closeTimeoutMS={200}
                    >
                        <nav>
                            <a><span>Início</span></a>
                            <a><span>Nossa História</span></a>
                            <a><span>Empreendimentos</span></a>
                            <a><span>Contato</span></a>
                        </nav>
                    </Modal>

                </div>
            </header>
            <motion.div style={{ scaleX: scrollYProgress }}  className="progress-bar"/>
        </div>
    )
}
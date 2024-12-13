"use client"

import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import Modal from 'react-modal';

import './styles.css';
import './header-mobile.css'

import vicenteLogo from '../../../../public/assets/vicente-logo-white.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
            (scrollPosState !== 0 || isOpen) ? "header-container" : (usePathname() === "/" ? "header-container scroll-zero" : "header-container")
        }>
            <header>
                <div className="content">
                    <a href="/">
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
                        <a href="/" className="hover-underline-animation"><span>Início</span></a>
                        <a href="/blog" className="hover-underline-animation"><span>Blog</span></a>
                    </nav>

                    <Modal 
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        className="modal"
                        overlayClassName="overlay"
                        closeTimeoutMS={200}
                        ariaHideApp={false}
                    >
                        <nav>
                            <a href="/" className="hover-underline-animation"><span>Início</span></a>
                            <a href="/blog" className="hover-underline-animation"><span>Blog</span></a>
                        </nav>
                    </Modal>

                </div>
            </header>
            <motion.div style={{ scaleX: scrollYProgress }}  className="progress-bar"/>
        </div>
    )
}
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

import expand from '../../../../public/assets/expand.svg';
import EmpDropdown from './EmpDropdown';

export default function Header() {

    Modal.setAppElement('#app');

    const { scrollYProgress } = useScroll();
    const [scrollPosState, setScrollPosState] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const pathname = usePathname();
    const [showDropdown, setDropdown] = useState(false);

    const [mobIsOpen, setMobIsOpen] = useState(pathname.includes("empreendimentos"));

    const handleMobClick = () => {
        setMobIsOpen(!mobIsOpen);
    }

    const handleMouseEnter = () => {
        setDropdown(true);
    };

    const handleMouseLeave = () => {
        setDropdown(false);
    };

    useEffect(() => {

        document.addEventListener("scroll", () => {
            const scrollPos = document.scrollingElement?.scrollTop ?? 0;

            setScrollPosState(scrollPos);
        });

    }, []);

    return (
        <div className={
            (scrollPosState !== 0 || isOpen) ? "header-container" : (pathname === "/" ? "header-container scroll-zero" : "header-container")
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
                        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
                    </div>

                    <nav className="desktop" suppressHydrationWarning >
                        <a inert={pathname === "/"} href="/" className="hover-underline-animation">
                            <span className={pathname === "/" ? "active" : ""}>Início</span>
                        </a>

                        <div 
                            className="header-empreendimentos-container" 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="hover-underline-animation header-empreendimentos">
                                <span className={pathname.includes("empreendimentos") ? "active" : showDropdown ? "span-hover" : ""}>
                                    Empreendimentos
                                    <Image src={expand} alt="Expandir" width={12} height={12} />
                                </span>
                            </a>
                            { showDropdown && <EmpDropdown mobile={false} /> }
                        </div>


                        <a inert={pathname.includes("blog")} href="/blog" className="hover-underline-animation">
                            <span className={pathname.includes("blog") ? "active" : ""}>Blog</span>
                        </a>
                    </nav>

                    <Modal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        className="modal"
                        overlayClassName="overlay"
                        closeTimeoutMS={200}
                        ariaHideApp={false}
                    >
                        <nav suppressHydrationWarning >
                            <a inert={pathname === "/"} href="/" className="hover-underline-animation">
                                <span className={pathname === "/" ? "active" : ""}>Início</span>
                            </a>

                            <div className="header-empreendimentos-container">
                                <a className="hover-underline-animation header-empreendimentos" onClick={() => handleMobClick()}>
                                    <span className={mobIsOpen ? "active" : ""}>
                                        Empreendimentos
                                        <Image src={expand} alt="Expandir" width={12} height={12} />
                                    </span>
                                </a>
                                { mobIsOpen ? <EmpDropdown mobile/> : <></> }
                            </div>


                            <a inert={pathname.includes("blog")} href="/blog" className="hover-underline-animation">
                                <span className={pathname.includes("blog") ? "active" : ""}>Blog</span>
                            </a>
                        </nav>
                    </Modal>

                </div>
            </header>
            <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />
        </div>
    )
}
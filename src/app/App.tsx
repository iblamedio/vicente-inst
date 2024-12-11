'use client'

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import InputMask from '@mona-health/react-input-mask';
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';

import './App.css';
import './mobile.css';

import mariaDolores from '../../public/assets/mariadolores.webp';
import aruna from '../../public/assets/aruna.webp';
import vicente from '../../public/assets/vicente.webp';
import vicenteLogoWhite from '../../public/assets/vicente-logo-white.svg';
import instagramLogo from '../../public/assets/instagram.svg';

import Header from './components/Header';
import WppButton from './components/Wpp Button';
import Inicio from './components/Inicio';
import NossaHistoria from './components/Nossa Historia';


function App() {

  const envServiceId: string = process.env.EMAILJS_SERVICE_ID || '';
  const envTemplateId: string = process.env.EMAILJS_TEMPLATE_ID || '';
  const envPublicKey: string = process.env.EMAILJS_PUBLIC_KEY || '';

  const [isLoading, setLoading] = useState(false);

  const form: any = useRef();

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);

    const [nameValue, setNameValue] = useState('');
    const handleNameChange = (e: any) => {
      setNameValue(e.target.value);
    }

    const [emailValue, setEmailValue] = useState('');
    const handleEmailChange = (e: any) => {
      setEmailValue(e.target.value);
    }

    const [phoneValue, setPhoneValue] = useState('');
    const handlePhoneChange = (e: any) => {
      setPhoneValue(e.target.value);
    }

    const [messageValue, setMessageValue] = useState('');
    const handleMessageChange = (e: any) => {
      setMessageValue(e.target.value);
    }

    const clearInputs: () => void = () => {
      setNameValue('');
      setPhoneValue('');
      setEmailValue('');
      setMessageValue('');
    }

    const validateName: (input: string) => boolean = input => !!input;

    const validatePhone: (input: string) => boolean = input => {
      if (!input) return false;

      if ( input.length < 14 ) return false;

      return true;
    }

    const validateEmail: (input: string) => boolean = input => {
      if(!input) return false;
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    }

    const sendEmail = (e:  React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateName(nameValue)) setNameErr(true); else setNameErr(false);
      if (!validatePhone(phoneValue)) setPhoneErr(true); else setPhoneErr(false);
      if (!validateEmail(emailValue)) setEmailErr(true); else setEmailErr(false);

      if (!validateName(nameValue) || !validatePhone(phoneValue) || !validateEmail(emailValue)) return;

      setLoading(true);
    
      emailjs.sendForm(envServiceId,
        envTemplateId,
        form.current,
        { publicKey: envPublicKey }
      ).then(() => {
          toast.success('Enviado com sucesso!');
          clearInputs();
          setLoading(false);
        }, () => {
          toast.error('Houve um erro ao enviar sua mensagem :(');
          clearInputs();
          setLoading(false);
        }
      );
      };

  return (
    <>

      <Toaster/>

      <WppButton/>

      <Header/>

      <Inicio/>

      <NossaHistoria/>

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
            <img src={aruna.src} alt="Aruna" />
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
            <img src={vicente.src} alt="Vicente" />
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
            <img src={mariaDolores.src} alt="Maria Dolores" />
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

      <section id="contato" className="fourth">
        <div className="content">
          <div className="text">
            <h1 className="noselect">Nos envie uma mensagem</h1>
            <p>Preencha o formulário e nossa equipe entrará em contato.</p>
          </div>

          <motion.div className="form-card"
            transition={{ duration: 0.8, ease: "circOut" }} 
            initial={{ rotateX:90 }} 
            whileInView={{ rotateX:0 }} 
            viewport={{once:true}}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="inputs">
                <div className="input">
                  <label htmlFor="name">Nome</label>
                  <input disabled={isLoading} 
                    required 
                    autoComplete="off" 
                    className={ nameErr ? 'input-error' : '' } 
                    type="text" 
                    name="name" 
                    value={nameValue} 
                    onChange={handleNameChange}
                    placeholder="João da Silva"
                  />
                  <span style={ nameErr ? {} : {display:'none' }}>Insira um nome válido.</span>
                </div>
                <div className="input">
                  <label htmlFor="email">E-mail</label>
                  <input disabled={isLoading}
                    required
                    autoComplete="off"
                    className={ emailErr ? 'input-error' : '' }
                    type="text"
                    name="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                    placeholder="email@gmail.com"
                  />
                  <span style={ emailErr ? {} : {display:'none' }}>Insira um email válido.</span>
                </div>
                <div className="input">
                  <label htmlFor="phone">Telefone</label>
                  <InputMask
                    className={ phoneErr ? 'input-error' : '' }
                    mask="(99) 99999-9999"
                    maskPlaceholder={null}
                    alwaysShowMask={false}
                    type="text" 
                    name="phone" 
                    value={phoneValue} 
                    onChange={handlePhoneChange}
                    required
                    autoComplete="off"
                    disabled={isLoading}
                    placeholder="(00) 00000-0000"
                  />
                  <span style={ phoneErr ? {} : {display:'none' } }>Insira um telefone válido.</span>
                </div>
                <div className="input">
                  <label htmlFor="message">Mensagem</label>
                  <textarea 
                    placeholder="Escreva aqui sua mensagem..."
                    name="message" 
                    disabled={isLoading}
                    required
                    value={messageValue}
                    onChange={handleMessageChange}
                    autoComplete="off"
                  />
                </div>

                <input className={ isLoading ? 'disabled-button' : '' }  disabled={isLoading} type="submit" value="Enviar" />

              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="footer">
        <div className="content">
          <div className="primary-info">
            <div className="logo">
              <img src={vicenteLogoWhite.src} alt="A. Vicente" />
              <div className="logo-text">
                  <span>AVICENTE</span>
                  <span>EMPREENDIMENTOS</span>
              </div>
            </div>
            <div className="address">
              <span>Rua 262, 270</span>
              <span>Meia Praia - Itapema - SC</span>
            </div>
            
          </div>
          <div className="secondary-info">
            <div className="social">
              <h4>Redes Sociais</h4>
              <a href="https://www.instagram.com/avicenteempreendimentos/"><img src={instagramLogo} alt="Instagram" /></a>
            </div>
            <div className="menu">
              <h4>Menu</h4>
              <div className="items">
                <a href="#inicio">Início</a>
                <a href="#nossa-historia">Nossa História</a>
                <a href="#empreendimentos">Empreendimentos</a>
                <a href="#contato">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App

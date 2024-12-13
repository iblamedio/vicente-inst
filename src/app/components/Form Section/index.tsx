import './styles.css';
import './mobile.css'

import InputMask from '@mona-health/react-input-mask';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import MapComponent from '~/app/components/MapComponent';

export default function FormSection() {

  const envServiceId: string = process.env.EMAILJS_SERVICE_ID ?? '';
  const envTemplateId: string = process.env.EMAILJS_TEMPLATE_ID ?? '';
  const envPublicKey: string = process.env.EMAILJS_PUBLIC_KEY ?? '';

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

    if (input.length < 14) return false;

    return true;
  }

  const validateEmail: (input: string) => boolean = input => {
    if (!input) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
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
    <section id="contato" className="fourth">
      <div className="form">
        <div className="text">
          <h1 className="noselect">Nos envie uma mensagem</h1>
          <p>Preencha o formulário e nossa equipe entrará em contato.</p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="inputs">
            <div className="input">
              <label htmlFor="name">Nome</label>
              <input disabled={isLoading}
                required
                autoComplete="off"
                className={nameErr ? 'input-error' : ''}
                type="text"
                name="name"
                value={nameValue}
                onChange={handleNameChange}
                placeholder="João da Silva"
              />
              <span style={nameErr ? {} : { display: 'none' }}>Insira um nome válido.</span>
            </div>
            <div className="input">
              <label htmlFor="email">E-mail</label>
              <input disabled={isLoading}
                required
                autoComplete="off"
                className={emailErr ? 'input-error' : ''}
                type="text"
                name="email"
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="email@gmail.com"
              />
              <span style={emailErr ? {} : { display: 'none' }}>Insira um email válido.</span>
            </div>
            <div className="input">
              <label htmlFor="phone">Telefone</label>
              <InputMask
                className={phoneErr ? 'input-error' : ''}
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
              <span style={phoneErr ? {} : { display: 'none' }}>Insira um telefone válido.</span>
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

            <input className={isLoading ? 'disabled-button' : ''} disabled={isLoading} type="submit" value="Enviar" />

          </div>
        </form>

      </div>
      <div className="map">
        <MapComponent/>
        
      </div>

    </section>
  )
}
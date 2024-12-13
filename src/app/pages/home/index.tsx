"use client"

import { Toaster } from "react-hot-toast";

import './styles.css';
import './mobile.css';

import WppButton from '../../components/Wpp Button';
import Inicio from '../../components/Inicio';
import NossaHistoria from '../../components/Nossa Historia';
import FormSection from '../../components/Form Section';
import Empreendimentos from "../../components/Empreendimentos";


function App() {

  return (
    <div>

      <Toaster/>

      <WppButton/>

      <Inicio/>

      <NossaHistoria/>

      <Empreendimentos/>

      <FormSection/>

    </div>
  )
}

export default App

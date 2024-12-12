'use client'

import { Toaster } from "react-hot-toast";

import './App.css';
import './mobile.css';

import Header from './components/Header';
import WppButton from './components/Wpp Button';
import Inicio from './components/Inicio';
import NossaHistoria from './components/Nossa Historia';
import FormSection from './components/Form Section';
import Empreendimentos from "./components/Empreendimentos";
import Footer from "./components/Footer";


function App() {

  return (
    <>

      <Toaster/>

      <WppButton/>

      <Header/>

      <Inicio/>

      <NossaHistoria/>

      <Empreendimentos/>

      <FormSection/>

      <Footer/>

    </>
  )
}

export default App

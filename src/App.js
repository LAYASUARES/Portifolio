import React from 'react';
import "./App.css";
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testemunhos from './components/testemunhos/testemunhos';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testemunhos />
    </main>
    </>
  )
}

export default App
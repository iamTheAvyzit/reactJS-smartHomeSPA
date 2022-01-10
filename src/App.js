import React from 'react';
import { Header } from './components/Header/Header';
import { Client } from './components/Clients/Client';
import { About } from './components/About/About';
import { Testimonials } from './components/Testimonials/Testimonials';
import { FAQ } from './components/FAQ/FAQ';
import { Download } from './components/Download/Download';
import { CTA } from './components/CTA/CTA';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <About/>
      <Client/>
      <Testimonials/>
      <FAQ/>
      <Download/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;

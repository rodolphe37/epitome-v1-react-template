import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoSwapeBackground from './components/PhotoSwipeBackground';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import Cta from './components/Cta';
import Services from './components/Services';
import About from './components/About';
import Intro from './components/Intro';
import Header from './components/Header';
import Preloader from './components/Preloader';
import './assets/css/base.css';
import './assets/css/vendor.css';
import './assets/css/main.css';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Intro />
      <About />
      <Services />
      <Cta />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
      <PhotoSwapeBackground />
    </div>
  );
}

export default App;

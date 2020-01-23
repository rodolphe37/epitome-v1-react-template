import React from 'react';
import Logo from '../assets/images/logo.svg'

const Header = () => {
    return (
    <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src={Logo} alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav-wrap">
          <ul className="header-main-nav">
            <li className="current"><a className="smoothscroll" href="#intro" title="intro">Intro</a></li>
            <li><a className="smoothscroll" href="#about" title="about">About</a></li>
            <li><a className="smoothscroll" href="#services" title="services">Services</a></li>
            <li><a className="smoothscroll" href="#works" title="works">Works</a></li>
            <li><a className="smoothscroll" href="#contact" title="contact us">Say Hello</a></li>	
          </ul>
          <ul className="header-social">
            <li><a href="#0"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
            <li><a href="#0"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
            <li><a href="#0"><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
            <li><a href="#0"><i className="fab fa-behance" aria-hidden="true" /></a></li>
          </ul>
        </nav>
        <a className="header-menu-toggle" href="#"><span>Menu</span></a>
      </header>
      
    )
}

export default Header;
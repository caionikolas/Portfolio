import React from "react";
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, Eu sou</h5>
        <h1>Caio Nikolas</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" className="pic"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
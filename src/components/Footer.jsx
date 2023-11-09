import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import "../styles/Footer.css";

export const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer">
        <a
          href="mailto:jhonnier.hernandez@correounivalle.edu.co"
          className="footer__link"
        >
          <FaEnvelope className="footer__icon" />
        </a>
        <a
          href="https://wa.me/573153736189?text=Hola,%20me%20gustaría%20hacer%20una%20consulta"
          className="footer__link"
        >
          <FaWhatsapp className="footer__icon" />
        </a>
        <a href="https://github.com/Hazzard1912" className="footer__link">
          <FaGithub className="footer__icon" />
        </a>
        <a
          href="https://linkedin.com/in/jhonnier-hernandez-538442250"
          className="footer__link"
        >
          <FaLinkedin className="footer__icon" />
        </a>
      </footer>
    </section>
  );
};

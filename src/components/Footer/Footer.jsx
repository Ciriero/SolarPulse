import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">SolarPulse</span>
        <p className="footer-copy">
          © 2026 SolarPulse. Todos los derechos reservados.
        </p>
        <nav className="footer-nav">
          <a href="#">Privacidad</a>
          <a href="#">Aviso legal</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
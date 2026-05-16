import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-inner">

        <div className="logo">
          <span className="logo-dot" aria-hidden="true"></span>
          <span className="logo-solar">Solar</span>
          <span className="logo-pulse">Pulse</span>
        </div>

        <nav className={`nav ${isOpen ? "nav--open" : ""}`} aria-label="Navegación principal">
          <a href="#como-funciona" className="nav-link" onClick={closeMenu}>Cómo funciona</a>
          <a href="#calculadora" className="nav-link" onClick={closeMenu}>Calculadora</a>
          <a href="#casos" className="nav-link" onClick={closeMenu}>Casos de éxito</a>
          <a href="#calcular" className="nav-link nav-cta" onClick={closeMenu}>Calcular ahorro</a>
        </nav>

        <button
          className={`hamburger ${isOpen ? "hamburger--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Header;
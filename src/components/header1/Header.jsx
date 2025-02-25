import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) { // Solo se cierra en móviles
      setIsOpen(false);
    }
    console.log("click")
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">Mi portfolio</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)} // Cambia el estado cuando se haga clic en el toggle
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleLinkClick}>Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiencia" onClick={handleLinkClick}>Experiencia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trabajos" onClick={handleLinkClick}>Trabajos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contacto</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/volverAl90" onClick={handleLinkClick}>Volver al 90</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

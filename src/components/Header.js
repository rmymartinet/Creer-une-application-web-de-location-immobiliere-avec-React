import React from "react";
import kasaLogo from "../images/kasa-logo-header.webp";
import "../styles/components.scss/_header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <img src={kasaLogo} alt="Logo du site immobilier Kasa"></img>
        <div className="nav-links">
          <Link to="/" className="home-btn">
            Accueil
          </Link>
          <Link to="/about" className="about-btn">
            A propos
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

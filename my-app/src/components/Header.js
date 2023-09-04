import React, { useState } from "react";
import kasaLogo from "../images/kasa-logo-header.webp";
import { Link } from "react-router-dom";

function Header() {
  const [activeButton, setActiveButton] = useState([false, false]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={kasaLogo} alt="Logo du site immobilier Kasa"></img>
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={`home-btn ${activeButton === "Accueil" ? "active" : ""}`}
            onClick={() => handleButtonClick("Accueil")}
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={`about-btn ${
              activeButton === "A propos" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("A propos")}
          >
            A propos
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

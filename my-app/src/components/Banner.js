import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SeaBanner from "../images/sea-banner.webp";
import Mountains from "../images/mountains-banner.webp";

function Banner({ imagemountain }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  useEffect(() => {
    // Fonction pour mettre à jour isMobile lorsque la fenêtre est redimensionnée
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };

    // Ajoute un écouteur d'événement de redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoie l'écouteur d'événement lors de la suppression du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="banner">
      {imagemountain ? (
        <img src={Mountains} alt="paysage de montagnes" />
      ) : (
        <div className="banner banner-content">
          <img
            rel="preload"
            src={SeaBanner}
            alt="paysage de cote, montagne et mer"
          />
          <p>
            Chez vous,
            {isMobile ? <br /> : " "}{" "}
            {/* Espace supplémentaire pour la lisibilité */}
            partout et ailleurs
          </p>
        </div>
      )}
    </div>
  );
}

Banner.propTypes = {
  imagemountain: PropTypes.bool,
};

export default Banner;

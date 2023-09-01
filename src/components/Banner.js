import React from "react";
import PropTypes from "prop-types"; // Importez PropTypes pour définir les types de prop
import SeaBanner from "../images/sea-banner.webp";
import Mountains from "../images/mountains-banner.webp";
import "../styles/layouts.scss/_banner.scss";

function Banner({ imagemountain }) {
  const isMobile = window.innerWidth <= 400;
  return (
    <div className="banner">
      {imagemountain ? (
        <img src={Mountains} alt="paysage de montagnes"></img>
      ) : (
        <div className=" banner banner-content">
          {
            <img
              rel="preload"
              src={SeaBanner}
              alt="paysage de cote, montagne et mer"
            ></img>
          }
          <p>
            Chez vous,
            {isMobile ? <br /> : ""}partout et ailleurs
          </p>
        </div>
      )}
    </div>
  );
}

Banner.propTypes = {
  imagemountain: PropTypes.bool.isRequired,
};

export default Banner;

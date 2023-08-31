import React from "react";
import KasaLogoFooter from "../images/kasa-logo-footer.webp";
import "../styles/components.scss/_footer.scss";
import "../styles/index.css";

function Footer() {
  return (
    <div className="footer-container">
      <img src={KasaLogoFooter} alt="paysage de cote, montagne et mer"></img>
      <div className="footer-content">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;

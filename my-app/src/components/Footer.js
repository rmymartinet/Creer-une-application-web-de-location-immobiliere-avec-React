import React from "react";
import KasaLogoFooter from "../images/kasa-logo-footer.webp";

function Footer() {
  return (
    <div className="footer-container">
      <img
        src={KasaLogoFooter}
        alt="paysage de cote, montagne et mer"
        width="122px"
        height="39px"
      ></img>
      <div className="footer-content">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;

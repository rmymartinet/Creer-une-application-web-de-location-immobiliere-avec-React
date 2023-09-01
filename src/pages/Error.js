import React from "react";
import "../styles/pages.scss/_error.scss";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error-container ">
      <h1>404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="link-error" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
export default Error;

import React, { useState } from "react";
import Arrow from "../images/arrow.webp";
import Collapse from "../components/Collapse.js";
import Banner from "../components/Banner.js";

function About() {
  const [activeDropdowns, setActiveDropdowns] = useState([false, false]);

  const toggleDropdown = (index) => {
    const nouveauxDropdownsActifs = [...activeDropdowns];
    nouveauxDropdownsActifs[index] = !nouveauxDropdownsActifs[index];
    setActiveDropdowns(nouveauxDropdownsActifs);
  };

  const aboutSections = [
    {
      title: "Fiabilité",
      content: (
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      ),
      arrowImage: Arrow,
    },
    {
      title: "Respect",
      content: (
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      ),
      arrowImage: Arrow,
    },
    {
      title: "Service",
      content: (
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      ),
      arrowImage: Arrow,
    },
    {
      title: "Sécurité",
      content: (
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      ),
      arrowImage: Arrow,
      style: { marginBottom: "0" },
    },
  ];

  return (
    <section className="about-container">
      <Banner imagemountain />
      <Collapse
        sections={aboutSections}
        activeDropdowns={activeDropdowns}
        toggleDropdown={toggleDropdown}
        page="about"
      />
    </section>
  );
}

export default About;

import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import arrow from "../images/arrow.webp";
import Carousel from "./Carousel.js";
import Collapse from "./Collapse.js";

function getStarsIcons(starCount, rating) {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    const starClass =
      i < rating ? "fa-solid fa-star orange" : "fa-solid fa-star grey";
    stars.push(<i key={i} className={starClass}></i>);
  }
  return stars;
}

function Logements({ data }) {
  const { id } = useParams();
  const selectedLogement = data.find((logement) => logement.title === id);

  const [activeDropdowns, setActiveDropdowns] = useState([false, false]);

  const toggleDropdown = (index) => {
    const nouveauxDropdownsActifs = [...activeDropdowns];
    nouveauxDropdownsActifs[index] = !nouveauxDropdownsActifs[index];
    setActiveDropdowns(nouveauxDropdownsActifs);
  };

  const logementsSection = [
    {
      title: "Description",
      content: <p> {selectedLogement.description}</p>,
      arrowImage: arrow,
    },
    {
      title: "Equipements",
      content: (
        <ul className="equipments-content">
          {selectedLogement.equipments.map((equipment, index) => (
            <li key={index}>
              <p>{equipment}</p>
            </li>
          ))}
        </ul>
      ),
      arrowImage: arrow,
    },
  ];

  const fullName = selectedLogement.host.name;
  const lastSpaceIndex = fullName.lastIndexOf(" ");

  const lastName = fullName.slice(0, lastSpaceIndex);
  const firstName = fullName.slice(lastSpaceIndex + 1);

  return (
    <section className="logement-container">
      <Carousel data={selectedLogement.pictures} />
      <div className="logement-container-informations">
        <div className="logement-informations">
          <h1>{selectedLogement.title}</h1>
          <p>{selectedLogement.location}</p>

          <div className="tags-container">
            {selectedLogement.tags.map((tag, index) => (
              <ul key={index}>
                <li className="tags">
                  <p>{tag}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="host-user">
            <span>
              {firstName} <br /> {lastName}
            </span>
            <img
              alt={selectedLogement.title}
              src={selectedLogement.host.picture}
            ></img>
          </div>
          <div className="host-rating">
            <div className="rating">
              {getStarsIcons(5, selectedLogement.rating)}
            </div>
          </div>
        </div>
      </div>

      {/** Dropdown */}
      <Collapse
        sections={logementsSection}
        activeDropdowns={activeDropdowns}
        toggleDropdown={toggleDropdown}
        page="logements"
      />
    </section>
  );
}

export default Logements;

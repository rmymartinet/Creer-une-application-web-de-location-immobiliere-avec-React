import React from "react";
import "../styles/components.scss/_collapse.scss";

function Collapse({ sections, activeDropdowns, toggleDropdown, page }) {
  return (
    <div
      className={` ${
        page === "logements" ? "logements-containers" : "about-container"
      }`}
    >
      <div
        className={` ${
          page === "logements"
            ? "description-dropdwon-container equipments-dropdown-container"
            : "about-dropdown-container "
        }`}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${
              page === "logements" ? "description-box equipments-box" : "box "
            } ${
              activeDropdowns[index]
                ? page === "logements"
                  ? "box-expanded"
                  : page === "about"
                  ? "about-box-expanded "
                  : ""
                : ""
            }`}
            style={
              section.title === "Sécurité" && activeDropdowns[index]
                ? { ...sections.style, marginBottom: "40px" }
                : section.style
            }
          >
            <div
              className={` ${activeDropdowns[index] ? "active" : ""} ${
                page === "logements"
                  ? "description-dropdown equipments-dropdown"
                  : "reliability-dropdown "
              }`}
              onClick={() => toggleDropdown(index)}
            >
              <p>{section.title}</p>
              <img
                src={section.arrowImage}
                alt="flèche pour deployer le volet"
                className="arrow-dropdown"
              />
              <div
                className={` ${
                  page === "logements"
                    ? "description-dropdown-content equipements-dropdown-content"
                    : "about-dropdown-content "
                }`}
              >
                {section.content}
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collapse;

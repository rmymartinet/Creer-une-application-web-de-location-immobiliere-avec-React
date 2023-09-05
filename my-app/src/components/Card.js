import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, cover }) {
  const words = title.split(" ");
  const wordGroups = [];

  for (let i = 0; i < words.length; i += 3) {
    const group = words.slice(i, i + 3).join(" ");
    wordGroups.push(group);
  }

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/logements/${title}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-container">
        <div className="card-content">
          <p>
            {wordGroups.map((group, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <br />}
                {group}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      {<img className="cover-cards" src={cover} alt="" />}
    </div>
  );
}

export default Card;

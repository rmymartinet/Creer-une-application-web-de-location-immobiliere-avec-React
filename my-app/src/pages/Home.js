import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner.js";
import LogementsData from "../datas/Logements-datas.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-container">
      <Banner />
      <div className="home-content ">
        {LogementsData.map((logement, index) => (
          <Link key={index} to={`/logements/${logement.title}`}>
            <Card title={logement.title} cover={logement.cover} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error.js";
import Header from "./components/Header.js";
import LogementsData from "./datas/Logements-datas.json";
import Logements from "./components/Logements.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="content-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="logements/:id"
            element={<Logements data={LogementsData} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

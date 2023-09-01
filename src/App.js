import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error.js";
import Header from "./components/Header.js";
import LogementsData from "./datas/Logements-datas.json";
import Logements from "./components/Logements.js";
import Footer from "./components/Footer.js";
import "./styles/layouts.scss/_app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="content-container">
          <Header />
          <Routes>
            <Route path="Kasa-react/" element={<Home />} />
            <Route path="Kasa-react/about" element={<About />} />
            <Route
              path="logements/:id"
              element={<Logements data={LogementsData} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;

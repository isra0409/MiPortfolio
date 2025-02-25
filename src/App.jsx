import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderAnimated from "./components/header1/HeaderAnimated";
import BannerAnimated from "./components/banner1/BannerAnimated";
import SobreMi from "./components/sobreMi/sobreMi";
import Experiencia from "./components/experiencia/Experiencia";
import VolverAl99 from "./components/volverAl99/VolverAl99"
import Contacto from "./components/contacto/Contacto";
import Trabajos from "./components/Trabajos/Trabajos";
import BannerAnimated2 from "./components/banner1/BannerAnimated2";







function App() {
  return (
    <>
    <HeaderAnimated />
        <Routes>
          <Route path="/" element={<BannerAnimated />} />
          <Route path="/about" element={<SobreMi />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/trabajos" element={<Trabajos />} />
          {/* <Route path="/volverAl90" element={<VolverAl99 />} /> */}
        </Routes>
        {/* <BannerAnimated2 /> */}
    </>
  );
}

export default App;

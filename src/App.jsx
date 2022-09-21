import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import ModelS from "./Components/ModelS/ModelS";
import Model3 from "./Components/Model3/Model3";
import ModelX from "./Components/ModelX/ModelX";
import ModelY from "./Components/ModelY/ModelY";
import SolarPanel from "./Components/Solar/SolarPanel";
import SolarRoof from "./Components/Solar/SolarRoof";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/models" element={<ModelS />} />
        <Route path="/model3" element={<Model3 />} />
        <Route path="/modelx" element={<ModelX />} />
        <Route path="/modely" element={<ModelY />} />
        <Route path="/solarpanel" element={<SolarPanel />} />
        <Route path="/solarroof" element={<SolarRoof />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

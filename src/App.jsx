import React from "react";
import logo from "../assets/tesla.svg";
import LandingPage from "./Components/LandingPage.jsx";  
import ModelS from "./Components/ModelS.jsx";
import Model3 from "./Components/Model3.jsx";
import ModelX from "./Components/ModelX.jsx";
import ModelY from "./Components/ModelY.jsx";
import SolarPanel from "./Components/SolarPanel.jsx";
import SolarRoof from "./Components/SolarRoof.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={<LandingPage />}/>
            <Route path="/models" element={<ModelS />}/>
            <Route path="/model3" element={<Model3 />}/>
            <Route path="/modelx" element={<ModelX />}/>
            <Route path="/modely" element={<ModelY />}/>
            <Route path="/solarpanel" element={<SolarPanel />}/>
            <Route path="/solarroof" element={<SolarRoof />} />
        </Routes>
    </BrowserRouter>  
  );
}

export default App;

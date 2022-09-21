import "./LandingPage.css";
import blackLogo from "../../../assets/tesla.svg";
import whiteLogo from "../../../assets/teslaWhite.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../ReusableComponents/Nav";
import { useLocation } from "react-router-dom";
// import Nav from "../ReusableComponents/Nav";

function LandingPage() {
  const [car, setCarType] = useState("");
  const [txtColor, setTextColor] = useState("");
  const [logo, setLogo] = useState("");
  const [link, setLink] = useState("");
  useEffect(() => {
    onLoad();
  }, []);

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const pathname = usePathname();
  console.log(pathname);

  const onLoad = (event) => {
    let style = { color: "black" };
    let choice = blackLogo;
    let type;
    let img;

    switch (pathname) {
      case "/models":
        style = { color: "black" };
        type = "Model S";
        img = "/assets/ms-main-hero-desktop.jpg";
        break;
      case "/model3":
        style = { color: "black" };
        type = "model 3";
        img = "/assets/M3-Homepage-D.jpg";
        break;
      case "/modelx":
        style = { color: "black" };
        type = "model X";
        img = "/assets/MX-Hero-Desktop.jpg";
        break;
      case "/modely":
        style = { color: "black" };
        type = "model Y";
        img = "/assets/model-y_R1@2.jpg";
        break;
      case "/solarroof":
        style = { color: "black" };
        type = "Solar Roof";
        img = "/assets/solar-panel-desktop.jpg";
        break;
      case "/solarpanel":
        style = { color: "White" };
        type = "Solar Panel";
        img = "/assets/sr-storm-desktop.png";
        break;
    }
    return setCarType(type), setTextColor(style), setLogo(choice), setLink(img);
  };

  console.log(txtColor);
  return (
    <div className="App">
      <div className="scroll-container">
        <div className=" App-header" style={{ txtColor }}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="topnav">
              <Link to="/models" style={{ color: txtColor.color }}>
                <h5>Model S</h5>
              </Link>
              <Link to="/model3" style={{ color: txtColor.color }}>
                <h5>Model 3</h5>
              </Link>
              <Link to="/modelx" style={{ color: txtColor.color }}>
                <h5>Model X</h5>
              </Link>
              <Link to="/modely" style={{ color: txtColor.color }}>
                <h5>Model Y</h5>
              </Link>
              <Link to="/solarroof" style={{ color: txtColor.color }}>
                <h5>Solar Roof</h5>
              </Link>
              <Link to="/solarpanel" style={{ color: txtColor.color }}>
                <h5>Solar Panels</h5>
              </Link>
            </nav>
          </header>
          <br />
          <br />
          <br />
          <div className="secondaryHeader App-header">
            <h1 id="CarTitle">{car}</h1>

            <br />
          </div>
        </div>

        <div className="section" id="0">
          <img src={link} className="img" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

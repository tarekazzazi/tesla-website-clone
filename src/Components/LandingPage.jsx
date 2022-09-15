import "./LandingPage.css";
import logo from "../../assets/tesla.svg";
import { Link } from "react-router-dom";
function LandingPage() {
  let cars = [
    "M3-Homepage-D.jpg",
    "model-y_R1@2.jpg",
    "ms-main-hero-desktop.jpg",
    "MX-Hero-Desktop.jpg",
    "solar-panel-desktop.jpg",
    "sr-storm-desktop.png",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="topnav">
          <h5>Model S</h5>
          <h5>Model 3</h5>
          <h5>Model X</h5>
          <h5>Model Y</h5>
          <h5>Solar Roof</h5>
          <h5>Solar Panels</h5>
        </nav>
      </header>
      <br />
      <br />
      <br />
      <div className="secondaryHeader App-header">
        <h1 id="CarTitle">Place Car Name here</h1>

        <p>
          Order online for{" "}
          <a href="https://www.w3schools.com">Touchless Delivery</a>
        </p>

        <br />
        <div className="Btns">
          <button id="customOrder"> Custom Order </button>
          <button id="Inventory"> Existing Inventory</button>
          <br />

          <img src={"./assets/down-arrow.png"} id="downArrow" width="25px" />
        </div>
      </div>

      <div>
        <img src="/assets/M3-Homepage-D.jpg" className="img" />
      </div>

      <div>
        <img src="/assets/model-y_R1@2.jpg" className="img" />
      </div>

      <div>
        <img src="/assets/ms-main-hero-desktop.jpg" className="img" />
      </div>

      <div>
        <img src="/assets/MX-Hero-Desktop.jpg" className="img" />
      </div>
    </div>
  );
}

export default LandingPage;

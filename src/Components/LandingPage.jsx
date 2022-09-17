import "./LandingPage.css";
import logo from "../../assets/tesla.svg";
import { useState } from "react";

function LandingPage() {
  const [car, setCarType] = useState("");
  const [txtColor, setTextColor] = useState("");

  const handleScroll = (event) => {
    let style = { color: "black" };
    let type;
    let x = event.currentTarget.scrollTop;

    // Checks scrollTop if within the range it will set the local state to that type
    if (x > 0 && x < 1000) {
      type = "Model 3";
    } else if (x > 1000 && x < 2200) {
      type = "Model Y";
    } else if (x > 2200 && x < 3000) {
      type = "Model S";
    } else if (x > 3000 && x < 3900) {
      type = "Model X";
    } else if (x > 3900 && x < 4500) {
      type = "Solar Panels";
    } else if (x > 4500) {
      type = "Solar Roof";
      style = { color: "white" };
    }

    return setCarType(type), setTextColor(style);
  };
  console.log(car);
  console.log(txtColor);
  return (
    <div className="App">
      <div className="scroll-container" onScroll={handleScroll}>
        <div className=" App-header" style={{ color: txtColor.color }}>
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
            <h1 id="CarTitle">{car}</h1>

            <p>
              Order online for{" "}
              <a href="https://www.w3schools.com">Touchless Delivery</a>
            </p>

            <br />
            <div className="Btns">
              <button id="customOrder"> Custom Order </button>
              <button id="Inventory"> Existing Inventory</button>
              <br />

              <div className="main" id="section">
                <a href="#1">
                  <img
                    src={"./assets/down-arrow.png"}
                    id="downArrow"
                    width="25px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section" id="0">
          <img src="/assets/M3-Homepage-D.jpg" className="img" />
        </div>
        <div className="section" id="1">
          <img src="/assets/model-y_R1@2.jpg" className="img" />
        </div>
        <div className="section" id="2">
          <img src="/assets/ms-main-hero-desktop.jpg" className="img" />
        </div>
        <div className="section" id="3">
          <img src="/assets/MX-Hero-Desktop.jpg" className="img" />
        </div>
        <div className="section" id="4">
          <img src="/assets/solar-panel-desktop.jpg" className="img" />
        </div>
        <div className="section" id="5">
          <img src="/assets/sr-storm-desktop.png" className="img" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

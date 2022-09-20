import "./LandingPage.css";
import blackLogo from "../../../assets/tesla.svg";
import whiteLogo from "../../../assets/teslaWhite.svg";
import { useState } from "react";
import Nav from "../ReusableComponents/Nav";
function LandingPage() {
  const [car, setCarType] = useState("");
  const [txtColor, setTextColor] = useState("");
  const [logo, setLogo] = useState("one");

  const handleScroll = (event) => {
    // style sets all text in App-header to black
    // choice changes logo which is being used to one with a fill of black
    // type displays the title of the header
    let style = { color: "black" };
    let choice = blackLogo;
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
      choice = whiteLogo;
    }
    return setCarType(type), setTextColor(style), setLogo(choice);
  };

  return (
    <div className="App">
      <div className="scroll-container" onScroll={handleScroll}>
        <div className=" App-header" style={{ color: txtColor.color }}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Nav navColor={{ color: txtColor.color }} />
            {/*  */}
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

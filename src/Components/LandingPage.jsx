import "./LandingPage.css";
import logo from "../../assets/tesla.svg";

function LandingPage() {
  const model = [
    "Model 3",
    "Model Y",
    "Model S",
    "Model X",
    "Solar Panels",
    "Solar Roof",
  ];

  const handleScroll = (event) => {
    // console.log("scrollTop: ", event.currentTarget.scrollTop);
    let type;
    let x = event.currentTarget.scrollTop;
    console.log(x);
    // console.log("Window Scroll Y", window.scrollY);
    if (x < 1000) {
      type = "telsa model 3";
      console.log("hello");
    } else if (x < 1360) {
      console.log("WHOA");
    } else if (x < 2200) {
      console.log("No way");
    } else {
      console.log("NOPE");
    }
    // console.log("type is this", type);
    return;
  };

  // console.log("type is this", type);

  return (
    <div className="App">
      <div className="scroll-container" onScroll={handleScroll}>
        <div className=" App-header">
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
            <h1 id="CarTitle">{}</h1>

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

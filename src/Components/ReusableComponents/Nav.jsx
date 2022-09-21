import { Link } from "react-router-dom";
import { useState } from "react";
import blackLogo from "../../../assets/tesla.svg";
import whiteLogo from "../../../assets/teslaWhite.svg";

function navBar() {
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
      <div className="scroll-container" onLoad={handleScroll}>
        <div className=" App-header" style={{ color: txtColor.color }}>
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
      </div>
    </div>
  );
}
export default navBar;

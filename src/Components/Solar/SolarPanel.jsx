//
import Nav from "../Navbar/nav";
import { useState } from "react";

function solarPanel() {
  const [isHover, setIsHover] = useState();

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    height: "15px",
    paddingTop: "10px",
    marginTop: "-31px",
    backgroundColor: isHover ? "white" : undefined,
    border: isHover ? "3px solid white" : "3px solid white",
    color: isHover ? "black" : "white",
    borderRadius: "2px",
  };
  return (
    <>
      <div className="detail-scroll-container">
        <div className="Nav-header" seamless="seamless" scrolling="no">
          <Nav />
          <div className="App-footer">
            <div className="container">
              <h2
                className="bottom-animation"
                style={{
                  marginTop: "-20px",
                }}
              >
                <img
                  src="../../assets/Solar-Self-Consumption-icon.svg"
                  width={"25px%"}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h6
                  style={{
                    marginTop: "5px",
                  }}
                >
                  Convert Sunlight <br /> to Energy
                </h6>
              </h2>
              <h2
                className="bottom-animation"
                style={{
                  marginTop: "-30px",
                  textAlign: "center",
                }}
              >
                $
                <h6
                  style={{
                    marginTop: "5px",
                  }}
                >
                  Guaranteed Lowest <br />
                  Price for Solar
                </h6>
              </h2>
              <h2
                className="bottom-animation"
                style={{
                  marginTop: "-31px",
                }}
              >
                24/7
                <h6
                  style={{
                    marginTop: "5px",
                  }}
                >
                  Energy <br />
                  Monitoring
                </h6>
              </h2>
              <h2
                className="bottom-animation"
                style={boxStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Order Now
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default solarPanel;

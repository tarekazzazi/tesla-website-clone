import Nav from "../Navbar/nav";
import { useState } from "react";
function modelx() {
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
            <h2 className="bottom-animation">333 mi</h2>
            <h2 className="bottom-animation">2.5 s</h2>
            <h2 className="bottom-animation">9.9 s</h2>
            <h2 className="bottom-animation">1,020 hp</h2>
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
    </>
  );
}

export default modelx;

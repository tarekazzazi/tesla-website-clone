import { Link } from "react-router-dom";
function navBar({ navColor }) {
  console.log(navColor);

  return (
    <nav className="topnav">
      <Link to="/models" style={navColor}>
        <h5>Model S</h5>
      </Link>
      <Link to="/model3" style={navColor}>
        <h5>Model 3</h5>
      </Link>
      <Link to="/modelx" style={navColor}>
        <h5>Model X</h5>
      </Link>
      <Link to="/modely" style={navColor}>
        <h5>Model Y</h5>
      </Link>
      <Link to="/solarroof" style={navColor}>
        <h5>Solar Roof</h5>
      </Link>
      <Link to="/solarpanel" style={navColor}>
        <h5>Solar Panels</h5>
      </Link>
    </nav>
  );
}
export default navBar;

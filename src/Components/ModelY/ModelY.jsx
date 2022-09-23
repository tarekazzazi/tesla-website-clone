import Nav from "../Navbar/nav";
function modely() {
  return (
    <>
      <div className="detail-scroll-container">
        {/* change classname to a different one prevents link from working idk why */}
        <div className="Nav-header" seamless="seamless" scrolling="no">
          <Nav />
          <div className="App-footer">
            <h2 className="bottom-animation">76 cu ft</h2>
            <h2 className="bottom-animation">330 mi</h2>
            <h2 className="bottom-animation">AWD</h2>
            <h2 className="bottom-animation">Order Now</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default modely;

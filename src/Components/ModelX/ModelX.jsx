import Nav from "../Navbar/nav";
function modelx() {
  return (
    <>
      <div className="detail-scroll-container">
        {/* change classname to a different one prevents link from working idk why */}
        <div className="Nav-header" seamless="seamless" scrolling="no">
          <Nav />
          <div className="App-footer">
            <h2 className="bottom-animation">333 mi</h2>
            <h2 className="bottom-animation">2.5 s</h2>
            <h2 className="bottom-animation">9.9 s</h2>
            <h2 className="bottom-animation">1,020 hp</h2>
            <h2 className="bottom-animation">Order Now</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default modelx;

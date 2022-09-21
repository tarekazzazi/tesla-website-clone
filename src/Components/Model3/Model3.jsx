import Nav from "../Navbar/nav";
function model3() {
  return (
    <>
      <div className="detail-scroll-container">
        {/* change classname to a different one prevents link from working idk why */}
        <div className="Nav-header" seamless="seamless" scrolling="no">
          <Nav />
          <div className="App-footer">
            <h2 className="bottom-animation">396 mi</h2>
            <h2 className="bottom-animation">1.99 s</h2>
            <h2 className="bottom-animation">200 mph</h2>
            <h2 className="bottom-animation">1,020 hp</h2>
            <h2 className="bottom-animation">Order Now</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default model3;

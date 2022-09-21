import "./ModelS.css";
import LandingPage from "../LandingPageCopy/LandingPage";
function models() {
  return (
    <>
      {/* <LandingPage /> */}
      <div className="detail-scroll-container">
        {/* change classname to a different one prevents link from working idk why */}
        <div className="App-header" seamless="seamless" scrolling="no">
          <LandingPage />
        </div>

        <div className="App-header App-footer">
          <h2 className="bottom-animation">396 mi</h2>
          <h2 className="bottom-animation">1.99 s</h2>
          <h2 className="bottom-animation">200 mph</h2>
          <h2 className="bottom-animation">1,020 hp</h2>

          <h2 className="bottom-animation">Order Now</h2>
        </div>
        {/* <img
          className="detail-section"
          src="./assets/ms-main-hero-desktop.jpg"
          height={1000}
          width={1440}
        /> */}
      </div>
    </>
  );
}

export default models;

import React from "react";
import img from "./Assets/winter-clearance.svg";
import img2 from "./Assets/new-arrivals.svg";
const StartBannerSection = () => {
  return (
    <section className="start-banner">
      <div className="left">
        <img src={img} />
        <div className="bannerText">
          <h1>
            <strong>
              Winter Clearence <br />
              Up to 70% off!
            </strong>
          </h1>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit
          <br />
          voluptatem accusantium doloremque laudantium,
          <br />
          totam rem apriam eaque ipsa quae ab illo inventore
          </p>
          <button className="btn">
            <strong>SHOP NOW</strong>
          </button>
        </div>
      </div>
      <div className="right">
        <img src={img2} />
        <div className="bannerText2">
          <h1>
            <strong>
              New <br />
              Arrivals
            </strong>
          </h1>
          <button className="btn">
            <strong>SHOP NOW</strong>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartBannerSection;

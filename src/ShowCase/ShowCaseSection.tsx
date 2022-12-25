import React from "react";
import img from "./Assets/showcase-img-1.png";
import img2 from "./Assets/showcase-img-2.png";

const ShowCaseSection = () => {
  return (
    <section className="showcase_Part ">
      <div className="showcase_1">
        <img src={img} alt="woman in clothes" />
      </div>
      <div className="showcase_Text">
        <h1>
          <strong>
            SALE UP
            <br />
            TO 50% OFF
          </strong>
        </h1>
        <p>Online shopping free home delivery over $100</p>
        <button className="btn btn-theme">
          <strong>SHOP NOW</strong>
        </button>
      </div>
      <div className="showcase_2">
        <img src={img2} alt="woman in clothes" />
      </div>
    </section>
  );
};

export default ShowCaseSection;

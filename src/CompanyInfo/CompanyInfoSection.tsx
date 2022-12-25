import React from "react";
import img1 from "./Assets/customer-service.svg";
import img2 from "./Assets/credit-card.svg";
import img3 from "./Assets/delivery-truck.svg";
import img4 from "./Assets/delivery-truck.svg";


const CompanyInfoSection = () => {
  return (
    <div>
      <section className="info-logos">
        <div className="line">
          <hr />
        </div>
        <div className="container">
          {/* visste inte om dessa delar skulle vara klickbara så la till disabled */}
          <button className="info_button" disabled>
            <img src={img1} />
          </button>
          <button className="info_button" disabled>
            <img src={img2} />
          </button>
          <button className="info_button" disabled>
            <img src={img3} />
          </button>
          <button className="info_button" disabled>
            <img src={img4} />
          </button>
        </div>
      </section>
      <section className="info-text">
        <div className="container">
          <div className="support text">
            <h4>
              <strong>Customer Support </strong>
            </h4>
            <p>
              Village did removed enjoyed
              <br /> explain talking.
            </p>
          </div>
          <div className="payment text ">
            <h4>
              <strong>Secured Payment</strong>
            </h4>
            <p>
              Village did removed enjoyed
              <br /> explain talking.
            </p>
          </div>
          <div className="delivery text ">
            <h4>
              <strong>Free Delivery</strong>
            </h4>
            <p>
              Village did removed enjoyed
              <br /> explain talking.
            </p>
          </div>
          <div className="days text">
            <h4>
              <strong>30 Days Reuters</strong>
            </h4>
            <p>
              Village did removed enjoyed
              <br /> explain talking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfoSection;

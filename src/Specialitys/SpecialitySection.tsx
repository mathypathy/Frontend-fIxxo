import React from 'react'

const SpecialitySection = () => {
  return (
    <div>
      <div className ="title">
      <h2><strong>Our speciality</strong></h2>
      </div>
      <div className="speciality">
        <div className="spec_container">
          <div className="track">
            <h2><strong>Track your order</strong></h2>
            <a href="#" className="link_One">Get started</a>
          </div>
          <div className="return">
            <h2><strong>Make a Return</strong></h2>
            <a href="#" className="link_Two">Get Started</a>
          </div>
          <div className="request_price">
            <h2><strong>Request a price<br/>adjustment</strong></h2>
            <a href="#" className="link_Three">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialitySection
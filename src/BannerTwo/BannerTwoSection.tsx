import React from 'react'
import img from './Assets/pamela-riefs.svg'
import img2 from './Assets/concious.svg'
const BannerTwoSection = () => {
  return (
    <section className="banner_two">
    <div className="container"> 
        <div className="left">
            <img src={img} />
            <h1><strong>Pamela Rief's <br/>Top Picks</strong></h1>
            <button className="btn-theme">SHOP NOW </button>
        </div>
        <div className="right">
            <img src={img2} />
            <h1><strong>Let's Be <br/>Concious</strong></h1>
            <button className="btn-theme"><strong>FLASH SALE </strong></button>
        </div>
    </div>
</section>
  )
}

export default BannerTwoSection
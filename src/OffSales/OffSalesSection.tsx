import React, { useContext } from "react";
import {ProductCard} from "../Components/ProductCard";
import { ProductContext } from "../Context/contexts";
const OffSalesSection = () => {
  const products = useContext(ProductContext)

  return (
    <>
      <section className="off_Sales">
        <div className="off_box">
            <div className="off_Text">
                <h1>Up to 70% OFF</h1>
                <p> *Ends in 2 days</p>
            </div>
            <button className="btn-theme">SHOP NOW</button>
        </div>
      </section>
      <section className="off_Products">
        <div className="titles">
          <div className="off_Title_One">
            <h3>Latest Product</h3>
          </div>
          <div className="off_Title_Two">
            <h3>Best Selling Product</h3>
          </div>
          <div className="off_Title_Three">
            <h3>Top Reacted Product</h3>
          </div>
        </div>
        <div className="off_Grid">
          {
            products.slice(13).map(product => <ProductCard key={product.articleNumber} product={product}/>)
          }
        </div>
      </section>
    </>
  );
};

export default OffSalesSection;

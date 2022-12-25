import React, { useContext } from "react";
import {ProductCard} from "./../Components/ProductCard"
import { ProductContext } from "./../Context/contexts";
import { FC } from 'react';


interface FlashTitle{
  title: string;
}

const FlashSaleSection: FC<FlashTitle> = ({title}) => {


 const products= useContext(ProductContext)
  return (
    <div>
      <section className="flash_sale_first container">
      <h1><strong>{title}</strong></h1>
        <div className="flash_sale">
          <div className="flash-sale-box">
            <h3>
              <strong>2 for USD $29</strong>
            </h3>
            <button className="btn-theme">FLASH SALE</button>
          </div>
          
          <div className="flash_products" style={{width:"90%"}}>
            {
              products.slice(18).map(product => <ProductCard key={product.articleNumber} product={product}/>)
            }
          </div>
          +
        </div>
      </section>    
      <section className="flash_sale_second container">
        <div className="flash_sale">
          <div className="flash_products" style={{width:"90%"}}>
            {
              products.slice(18).map(product => <ProductCard key={product.articleNumber} product={product}/>)
            }
          </div>
          <div className="flash-sale-box">
            <h3>
              <strong>2 for USD $59</strong>
            </h3>
            <button className="btn-theme">FLASH SALE</button>
          </div>
        </div>
        
      </section>

    </div>
  );
};

export default FlashSaleSection;

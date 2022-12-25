import React from "react";
import { useContext } from "react";
import {ProductCard} from "./../Components/ProductCard";
import {ProductContext} from './../Context/contexts';
import { FC } from 'react'
 

interface IProdGridSec{
  title: string;
}

const ProductGridSection: React.FC <IProdGridSec> = ({title}) => {

  const items = useContext(ProductContext)

  return (
    <section className="product_grid">
      <div className="container">
        <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
         {
          items.slice(14).map(product => <ProductCard key={product.articleNumber} product={product}/>)
         }
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;

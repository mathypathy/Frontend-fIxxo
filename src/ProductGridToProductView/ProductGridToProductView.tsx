import React from 'react'
import {ProductCard} from './../Components/ProductCard';
import { ProductContext } from "./../Context/contexts";
import {useContext} from 'react'
import { IProductGridToProductView } from '../Interfaces/Product';



const ProductGridToProductView: React.FC<IProductGridToProductView>= ({title}) => {
  
  const products = useContext(ProductContext)


  return (
    


    <div>      
        <section className="product_grid">
            <div className="container">
                <h1>{title}</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                products.map((product) => <ProductCard key={product.articleNumber} product={product}/>)
                }
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductGridToProductView
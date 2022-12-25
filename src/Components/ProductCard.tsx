import { NavLink } from "react-router-dom";
import { IProduct } from "../Interfaces/Product";

interface props {
  product: IProduct
}

export const ProductCard : React.FC<props> = ({ product }) => {
  const addToWishList = (e: any) => {
    console.log("added to wishlist");
  };

  const addToCompare = (e: any) => {
    console.log("compare");
  };

  const addToCart = (e: any) => {
    console.log(`added to cart`);
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-img">
          <img src={product.imageName} alt={product.name} />
          <div className="card-menu">
            <button onClick={addToWishList} className="menu-link">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button onClick={addToCompare} className="menu-link">
              <i className="fa-solid fa-code-compare fa-flip-horizontal"></i>
            </button>
            <button onClick={addToCart} className="menu-link">
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
          <NavLink
            to={`/products/${product.name.toLowerCase().replace}`}
            className="btn-theme"
          >
            QUICK VIEW
          </NavLink>
        </div>
        <div className="card-body">
          <p className="category">{product.category}</p>
          <h5 className="title">{product.name}</h5>
          <p className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </p>
          <p className="price">${product.price}.00</p>
        </div>
      </div>
    </div>
  );
};

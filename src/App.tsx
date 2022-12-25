
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import HomeView from "./Views/HomeView";
import ContactsView from "./Views/ContactsView";
import ProductView from "./Views/ProductView";
import SearchView from "./Views/SearchView";
import CompareView from "./Views/CompareView";
import WishlistView from "./Views/WishlistView";
import ShoppingCartView from "./Views/ShoppingCartView";
import NotFoundView from "./Views/NotFoundView";
import ProductDetailView from "./Views/ProductDetailView";
import {ProductContext} from '../src/Context/contexts'



const App: React.FC = () => {

  const [products, setProducts,] = useState([])

  useEffect (() =>{
    const fetchData = async () => {
      let result = await fetch('http://localhost:5000/api/products')
      setProducts(await result.json())
    }
    fetchData();
  }, [])


  return (
    <>
      <BrowserRouter>
        <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/Products" element={<ProductView />} />
          <Route path="/Products/:id" element={<ProductDetailView />} />
          <Route path="/Search" element={<SearchView />} />
          <Route path="/Compare" element={<CompareView />} />
          <Route path="/Wishlist" element={<WishlistView />} />
          <Route path="/ShoppingCart" element={<ShoppingCartView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
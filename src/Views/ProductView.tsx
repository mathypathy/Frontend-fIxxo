import React from "react";
import ProductGridToProductView from "./../ProductGridToProductView/ProductGridToProductView";
import MainMenuSection from "./../MainMenu/MainMenuSection";
import DirectorySection from "./../Contact/Directory/DirectorySection";
const ProductView = () => {
  return (
    <>
      <MainMenuSection />
      <DirectorySection currentPage="Products" />
      <ProductGridToProductView title="Products" />
    </>
  );
};

export default ProductView;

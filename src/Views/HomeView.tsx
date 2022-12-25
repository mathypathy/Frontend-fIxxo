import React from "react";
import BannerTwoSection from "./../BannerTwo/BannerTwoSection";
import CompanyInfoSection from "./../CompanyInfo/CompanyInfoSection";
import ProductGridSection from "./../ProductGridToHomeView/ProductGridSection";
import FooterSection from "./../Footer/FooterSection";
import MainMenuSection from "./../MainMenu/MainMenuSection";
import ShowCaseSection from "./../ShowCase/ShowCaseSection";
import StartBannerSection from "./../StartBanner/StartBannerSection";
import FlashSaleSection from "./../FlashSale/FlashSaleSection";
import OffSalesSection from "./../OffSales/OffSalesSection";
import SpecialitySection from "./../Specialitys/SpecialitySection";

const HomeView = () => {
  return (
    <div>
      <MainMenuSection />
      <ShowCaseSection />
      <StartBannerSection />
      <ProductGridSection title="Featured Products" />
      <BannerTwoSection />
      <SpecialitySection />
      <FlashSaleSection title="Flash Sales"  />
      <OffSalesSection  />
      <CompanyInfoSection />
      <FooterSection />
    </div>
  );
};

export default HomeView;

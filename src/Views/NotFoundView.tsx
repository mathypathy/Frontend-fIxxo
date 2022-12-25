import React from "react";
import MainMenuSection from "./../MainMenu/MainMenuSection";
import FooterSection from "./../Footer/FooterSection";
const NotFoundView = () => {
  return (
    <>
      <MainMenuSection />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "800px" }}
      >
        <h1>404 Page Not Found</h1>
      </div>
      <FooterSection />
    </>
  );
};

export default NotFoundView;

import React from "react";
import MapSection from "./../Contact/Map/MapSection";
import ContactFormSection from "./../Contact/ContactForm/ContactFormSection";
import DirectorySection from "./../Contact/Directory/DirectorySection";
import MainMenuSection from "./../MainMenu/MainMenuSection";
import FooterSection from "./../Footer/FooterSection";
const ContactsView = () => {
  return (
    <>
      <MainMenuSection />
      <DirectorySection currentPage ="Contact"/>
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  );
};

export default ContactsView;

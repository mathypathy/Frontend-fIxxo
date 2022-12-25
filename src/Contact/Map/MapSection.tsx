import React from "react";
import img from "./Assets/map2.svg";

const MapSection = () => {
  return (
    <iframe
      className="google-map"
      title="google-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11053.065589646494!2d17.144113999933346!3d60.677316673454555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660c2ffbb3b088d%3A0x4034506de8c8360!2zR8Okdmxl!5e0!3m2!1sen!2sse!4v1666602185895!5m2!1sen!2sse"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapSection;

import React from "react";
import { whatsappImage } from "../../assets/images";

const LinkWhatsapp = () => {
  const phoneNumber = "9003255653";
  const message =
    "Hello, I came across your business and would love to learn more about your services. Can you please provide more details?";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <div className="w-12 h-12 md:w-16 md:h-16 fixed z-10 bg-transparent right-2 sm:right-4 md:right-5 bottom-10">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img
            src={whatsappImage}
            alt="whatsapp-image"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </>
  );
};

export default LinkWhatsapp;

import React from "react";
import { banner2 } from "../../assets/images";
import { Banner, ContactUsCard, ContactForm } from "../../components";

const bannerContent = {
  heading: "Contact Us",
  picture: banner2,
};

const Contact = () => {
  return (
    <>
      <Banner data={bannerContent} />
      <ContactUsCard />
      <ContactForm />
    </>
  );
};

export default Contact;

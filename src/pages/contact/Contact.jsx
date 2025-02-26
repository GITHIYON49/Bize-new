import React from "react";
import { contactImage } from "../../assets/images";
import { Banner, ContactUsCard, ContactForm,BannerTwo } from "../../components";

// const bannerContent = {
//   heading: "Contact Us",
//   picture: banner2,
// };

const Contact = () => {
  return (
    <>
     <section className="w-full h-[500px] flex items-center justify-center relative"
     style={{
               backgroundImage: `url(${contactImage})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
             }}
             >
              <div className="absolute inset-0 bg-blue-500/30"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold z-[999]">Contact us</h2>

     </section>

      <ContactUsCard />
      <ContactForm />
    </>
  );
};

export default Contact;

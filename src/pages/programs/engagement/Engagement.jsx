import React from "react";
import { Banner } from "../../../components";
import { banner4 } from "../../../assets/images";

const bannerContent = {
  heading: "Engagement with Ideas",
  description:
    "BIZ E connects businesses with thought leaders, industry experts, and like-minded professionals, creating opportunities to explore new concepts and strategies.",
  picture: banner4,
  color: "#FF206E",
};

const Engagement = () => {
  return (
    <>
      <Banner data={bannerContent} />
    </>
  );
};

export default Engagement;

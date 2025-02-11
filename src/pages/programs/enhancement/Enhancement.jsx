import React from "react";
import { Banner } from "../../../components";
import { banner5 } from "../../../assets/images";

const bannerContent = {
  heading: "Enhancement of Profiles",
  description:
    "We offer tailored solutions designed to enhance the visibility, reputation, and operational effectiveness of businesses.",
  picture: banner5,
  color: "#12CAD6",
};

const Enhancement = () => {
  return (
    <>
      <Banner data={bannerContent} />
    </>
  );
};

export default Enhancement;

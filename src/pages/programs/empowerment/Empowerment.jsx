import React from "react";
import Banner from "../../../components/banner/Banner";
import { banner3 } from "../../../assets/images";

const bannerContent = {
  heading: "Empowerment through Resources",
  description:
    "By providing access to critical resources and support, we empower businesses to achieve sustained success.",
  picture: banner3,
  color: "#064663",
};

const Empowerment = () => {
  return (
    <>
      <Banner data={bannerContent} />
    </>
  );
};

export default Empowerment;

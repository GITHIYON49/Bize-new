import React, { useState } from "react";
import {
  Banner,
  AboutServicesCard,
  CoreValueCard,
  OverViewCard,
} from "../../components";
import { banner1 } from "../../assets/images";
import { overViewData } from "../../data/OverViewCard";
import Sample from "../../components/sample/Sample";

const bannerContent = {
  heading: "What is BIZ E",
  description:
    "BIZ E is your partner in progress, offering a unique blend of engagement, enhancement, and empowerment. Whether you’re a startup looking to establish your presence or an established business aiming to innovate, BIZ E provides the platform and support needed to succeed. BIZ E stands apart as more than just another business network – its a strategic partner committed to your growth and success.",
  picture: banner1,
};

const About = () => {
  const data = overViewData[2];
  const data1 = overViewData[3];
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      <Banner data={bannerContent} />
      <AboutServicesCard />
      <OverViewCard data={data} className={isTrue} />
      {/* <CoreValueCard /> */}
      <Sample/>
      <OverViewCard data={data1} className={isTrue} />
    </>
  );
};

export default About;

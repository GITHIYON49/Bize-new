import React, { useState } from "react";
import {
  TitleCard,
  OverViewCard,
  ServicesOverview,
  Carousel,
} from "../../components";
import { overViewData } from "../../data/OverViewCard";
import Sample from "../../components/sample/Sample";

const Home = () => {
  const data = overViewData[0];
  const data1 = overViewData[1];
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      <Carousel />
      <TitleCard />
      <OverViewCard data={data} />
      {/* <Sample/> */}
      <OverViewCard data={data1} className={isTrue} />
      <ServicesOverview />
    </>
  );
};

export default Home;

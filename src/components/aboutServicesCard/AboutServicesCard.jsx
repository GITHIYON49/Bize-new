import React from "react";
import { aboutServiceData } from "../../data/AboutServiceCard";

const AboutServicesCard = () => {
  return (
    <>
      <section className="my-10 flex items-center justify-center px-3">
        <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {aboutServiceData.map((data, i) => (
            <div
              key={i}
              className="bg-white shadow-2xl rounded-lg py-10 px-5 md:p-7 md:pt-20 flex flex-col gap-5 justify-start items-start md:min-h-96"
            >
              <span className="p-3 bg-gray-50 rounded-full">
                <data.icon className="w-8 h-8" />
              </span>
              <h3 className={`text-xl lg:text-2xl ${data.textColor} font-bold`}>
                {data.titleName1}{" "}
                <span className="block my-0">{data.titleName2}</span>
              </h3>
              <p className="text-sm text-gray-600 leading-5">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutServicesCard;

import React from "react";
import { coreValueData } from "../../data/CoreValueCard";

const CoreValueCard = () => {
  return (
    <>
      <section className="w-full flex items-center justify-center">
        <div className="w-11/12 md:w-4/5 lg:w-11/12 flex flex-col lg:grid lg:grid-cols-3 items-center justify-center my-10 gap-10">
          {coreValueData.map((value, i) => {
            return (
              <div
                key={i}
                className="w-full p-7 shadow-2xl flex flex-col items-start justify-center gap-5 rounded-sm"
              >
                <h3 className="text-2xl font-bold">{value.heading}</h3>
                <p className="text-sm">{value.description}</p>
                <span className={`${value.iconColor}`}>
                  <value.icon className="w-16 h-16 md:w-20 md:h-20 lg:w-10 lg:h-10" />
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CoreValueCard;

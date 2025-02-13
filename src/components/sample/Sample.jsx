// import React from "react";
import { Handshake, Lightbulb, HandHelping } from "lucide-react";

// const coreValueData = [
//   {
//     heading: "Engagement",
//     description:
//       "We believe in actively involving businesses in exploring new trends, ideas, and concepts that can drive growth and innovation.",
//     icon: Handshake,
//     color: "#FF206E",
//     backgroundColor: "#FF206E",
//   },
//   {
//     heading: "Enhancement",
//     description:
//       "Our focus is on elevating the business profile of every organization we work with, ensuring they stand out in their industry.",
//     icon: Lightbulb,
//     color: "#12CAD6",
//     backgroundColor: "#12CAD6",
//   },
//   {
//     heading: "Empowerment",
//     description:
//       "Through our support system, we empower businesses to take charge of their growth, overcoming challenges and seizing opportunities.",
//     icon: HandHelping,
//     color: "#064663",
//     backgroundColor: "#064663",
//   },
// ];

export default function Sample() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-11/12 md:w-4/5 lg:w-11/12 flex flex-wrap lg:flex-nowrap lg:grid lg:grid-cols-3 items-center justify-center my-10 gap-14">
        <div className="w-11/12 sm:w-4/5 md:w-2/5 lg:w-auto shadow-2xl flex flex-col items-start justify-center gap-5 group/icon rounded-sm p-10 relative hover:bg-primary hover:text-white transform ease-in-out transition-all duration-300">
          <h3 className="text-2xl font-bold">Engagement</h3>
          <p className="text-sm">
            We believe in actively involving businesses in exploring new trends,
            ideas, and concepts that can drive growth and innovation.
          </p>
          <span className={`absolute -left-8 p-3 bg-primary group-hover/icon:text-primary group-hover/icon:bg-white text-white rounded-full transform ease-in-out transition-all duration-300`}>
            <Handshake className="w-10 h-10 lg:w-10 lg:h-10" />
          </span>
        </div>
        <div className="w-11/12 sm:w-4/5 md:w-2/5 lg:w-auto shadow-2xl flex flex-col items-start justify-center gap-5 group/icon rounded-sm p-10 relative hover:bg-secondary hover:text-white transform ease-in-out transition-all duration-300">
          <h3 className="text-2xl font-bold">Enhancement</h3>
          <p className="text-sm">
          Our focus is on elevating the business profile of every organization we work with, ensuring they stand out in their industry.
          </p>
          <span className={`absolute -left-8 p-3 bg-secondary group-hover/icon:text-secondary group-hover/icon:bg-white text-white rounded-full transform ease-in-out transition-all duration-300`}>
            <Lightbulb className="w-10 h-10 lg:w-10 lg:h-10" />
          </span>
        </div>
        <div className="w-11/12 sm:w-4/5 md:w-2/5 lg:w-auto shadow-2xl flex flex-col items-start justify-center gap-5 group/icon rounded-sm p-10 relative hover:bg-tertiary hover:text-white transform ease-in-out transition-all duration-300">
          <h3 className="text-2xl font-bold">Empowerment</h3>
          <p className="text-sm">
          Through our support system, we empower businesses to take charge of their growth, overcoming challenges and seizing opportunities.
          </p>
          <span className={`absolute -left-8 p-3 bg-tertiary group-hover/icon:text-tertiary group-hover/icon:bg-white text-white rounded-full transform ease-in-out transition-all duration-300`}>
            <HandHelping className="w-10 h-10 lg:w-10 lg:h-10" />
          </span>
        </div>
      </div>
    </section>
  );
}

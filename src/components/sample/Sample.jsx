import React,{useState} from "react";
import {
  Handshake,
  Lightbulb,
  HandHelping,
  MoveUpRight,
  ArrowUpRight,
} from "lucide-react";
import { resourceOne,resourceTwo,resourceThree } from "../../assets/images";
import { carouselImage1,carouselImage2,carouselImage3 } from "../../assets/images";
import { coreValueData } from "../../data/CoreValueCard";

const Sample = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
    <section className="w-full flex items-center justify-center">
            <div className="w-11/12 md:w-4/5 lg:w-11/12 flex flex-col lg:grid lg:grid-cols-3 items-center justify-center my-10 gap-14">
              {coreValueData.map((value, i) => {
                return (
                  <div
      key={i}
      className="w-full shadow-2xl flex flex-col items-start justify-center gap-5 group/icon rounded-sm p-10 relative hover:text-white transition-all duration-300"
      style={{
        backgroundColor: isHovered ?   value.backgroundColor : " "  ,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
  <h3 className="text-2xl font-bold">{value.heading}</h3>
  <p className="text-sm">{value.description}</p>
  <span
    className={`${value.backgroundColor} absolute -left-8 p-3 group-hover/icon:text-${value.color} text-white rounded-full`}
  >
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

export default Sample;

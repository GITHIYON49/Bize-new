import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  carouselImage1,
  carouselImage2,
  carouselImage3,
  carouselImage4,
  carouselImage5,
  carouselImage6,
  carouselImage7,
} from "../../assets/images";

const sliders = [
  carouselImage1,
  carouselImage2,
  carouselImage3,
  carouselImage4,
  carouselImage5,
  carouselImage6,
  carouselImage7,
];

const Carousel = () => {
  const [sliderCount, setSliderCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderCount((prevCount) =>
        prevCount < sliders.length - 1 ? prevCount + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function handleNext() {
    setSliderCount((prevCount) =>
      prevCount < sliders.length - 1 ? prevCount + 1 : 0
    );
  }

  function handlePrevious() {
    setSliderCount((prevCount) =>
      prevCount === 0 ? sliders.length - 1 : prevCount - 1
    );
  }

  function handleClick(index) {
    setSliderCount(index);
  }

  return (
    <section className="w-full flex items-center justify-center z-0">
      <div className="w-full md:w-[95%] h-[300px] md:h-[550px] overflow-hidden relative">
        <div
          className="h-full w-full flex transition-opacity duration-500 ease-in-out"
          style={{ transform: `translateX(-${sliderCount * 100}%)` }}
        >
          {sliders.map((slide, i) => (
            <div key={i} className="h-full w-full shrink-0">
              <img
                src={slide}
                alt="business-image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="absolute flex items-center justify-between top-1/2 left-0 w-full px-10 -translate-y-1/2">
          <button
            className="bg-black/60 text-white rounded-full flex items-center justify-center cursor-pointer p-1 outline-none"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </button>
          <button
            className="bg-black/60 text-white rounded-full flex items-center justify-center cursor-pointer p-1 outline-none"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </button>
        </div>
        <div className="absolute bottom-0 w-full flex items-center justify-center py-4 gap-3">
          {sliders.map((slide, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  handleClick(i);
                }}
                className={`h-2 w-2 md:w-3 md:h-3 rounded-full cursor-pointer ${
                  sliderCount === i ? "bg-white" : "bg-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

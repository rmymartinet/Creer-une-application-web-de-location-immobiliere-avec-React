import React, { useState } from "react";
import ArrowLeft from "../images/arrow-carousel-left.webp";
import ArrowRight from "../images/arrow-carousel-right.webp";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  if (data.length < 2) {
    return (
      <div className="carousel">
        {data.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className={slide === index ? "slide" : ""}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="carousel">
      <img
        src={ArrowLeft}
        className="arrow arrow-left"
        alt=""
        onClick={prevSlide}
      />
      {data.map((item, index) => {
        return (
          <img
            src={item}
            alt=""
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <img
        src={ArrowRight}
        className="arrow arrow-right"
        alt=""
        onClick={nextSlide}
      />

      <span className="indicators">
        {data.map((_, index) => {
          const indicatorText = `${index + 1}/${data.length}`;
          return (
            <p key={index} className="indicator">
              {slide === index ? indicatorText : ""}
            </p>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;

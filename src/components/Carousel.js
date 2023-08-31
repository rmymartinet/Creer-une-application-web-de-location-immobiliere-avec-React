import React, { useState } from "react";
import "../styles/components.scss/_carousel.scss";
// import LogementsData from "../datas/Logements-datas.js";
// import { useParams } from "react-router-dom";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ArrowLeft from "../images/arrow_carousel_left.png";
import ArrowRight from "../images/arrow_carousel_right.png";

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
            className={slide === index ? "slide" : "slide slide-hidden"}
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
            <buton
              key={index}
              onClick={() => setSlide(index)}
              className="indicator"
            >
              {slide === index ? indicatorText : ""}
            </buton>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;

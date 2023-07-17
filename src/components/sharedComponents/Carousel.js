import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import carouse1 from "../../lib/banner1.png";
import carouse2 from "../../lib/banner2.png";
import carouse3 from "../../lib/banner3.jpeg";
import carouse4 from "../../lib/banner4.png";

import "../../css/main.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [carouse1, carouse2, carouse3, carouse4];
  const numSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slide"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition:
            currentSlide === 0 || currentSlide === numSlides - 1
              ? "none"
              : "transform 0.3s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <div className="left-icon" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="right-icon" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;

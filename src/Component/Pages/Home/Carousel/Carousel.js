import React, { useState, useEffect } from "react";
import "./Carousel.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { carouselItems } from "./CarouselItems";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);


  // // useEffect(() => {
  // //   const handleResize = () => {
  // //     if (window.innerWidth <= 600) {
  // //       setItemsToShow(1);
  // //     } else if (window.innerWidth <= 900) {
  // //       setItemsToShow(2);
  // //     } else {
  // //       setItemsToShow(3);
  // //     }
  // //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(carouselItems.length ) - 1
        : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(carouselItems.length) - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div className="carousel_section container">
      <button
        className="wiper-button wiper-button__left"
        onClick={handlePrevClick}
      >
        <MdOutlineArrowBackIos />
      </button>
      <div className="carousel_container">
        <div className="carousel_wrapper">
          <div
            className="carousel_items"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item) => (
              <div key={item.id} className="carousel_item">
                <div className="carousel_image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="carousel_text">
                  <div className="carousel_text-title">
                    <h5>{item.title}</h5>
                  </div>
                  <div className="carousel_text-description">
                    <p>{item.description}</p>
                  </div>
                  <div className="carousel_text-button">
                    <button
                      onClick={() =>
                        (window.location.href = `/blog/${item.id}`)
                      }
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="wiper-button wiper-button__right"
        onClick={handleNextClick}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
}

export default Carousel;

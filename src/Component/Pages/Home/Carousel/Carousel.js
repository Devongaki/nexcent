import React, { useState } from "react";
import "./Carousel.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { carouselItems } from "./CarouselItems";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, carouselItems.length - itemsPerPage)
        : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= carouselItems.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="carousel_section container">
      <div className="carousel_title">
        <h3>Caring is the new marketing</h3>
        <p>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>
      <div className="carousel_content">
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
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `calc(100% * ${carouselItems.length / 3});`,
              }}
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
    </div>
  );
}

export default Carousel;

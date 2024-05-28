import React, { useState } from "react";
import "./Carousel.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const carouselItems = [
  {
    id: 1,
    title: "LOREM IPSUM 01",
    image:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ligula urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum malesuada pulvinar interdum.",
  },
  {
    id: 2,
    title: "LOREM IPSUM 02",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ligula urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum malesuada pulvinar interdum.",
  },
  {
    id: 3,
    title: "LOREM IPSUM 03",
    image:
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ligula urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum malesuada pulvinar interdum.",
  },
  {
    id: 6,
    title: "LOREM IPSUM 06",
    image:
      "https://images.unsplash.com/photo-1506878206813-92402b8ded23?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ligula urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum malesuada pulvinar interdum.",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(carouselItems.length / 3) - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(carouselItems.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel_section container">
      <div className="carousel_container">
        <button
          className="wiper-button wiper-button__left"
          onClick={handlePrevClick}
        >
          <MdOutlineArrowBackIos />
        </button>
        <div className="carousel_wrapper">
          <div
            className="carousel_items"
            style={{ transform: `translateX(-${currentIndex * 33.3333}%)` }}
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

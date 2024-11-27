import React, { useState } from "react";
import "./Carousel.scss";

const rooms = [
  {
    id: 1,
    image:
      "https://www.sundays-company.ca/cdn/shop/files/BED-RN-003-067-0_CL2.jpg?v=1730841648&width=4000",
    title: "Bedroom 1",
    bed: "1 queen bed",
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/I/81a-oJGw2-L._AC_UF894,1000_QL80_.jpg",
    title: "Bedroom 2",
    bed: "1 queen bed",
  },
  {
    id: 3,
    image:
      "https://www.sundays-company.ca/cdn/shop/products/BED-RN-026-067-0_1_CL1_PDP3.jpg?v=1700514994&width=4000",
    title: "Bedroom 3",
    bed: "2 twin beds",
  },
  {
    id: 4,
    image:
      "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202423/0065/mid-century-platform-bed-acorn-o.jpg",
    title: "Bedroom 4",
    bed: "1 king bed",
  },
];

const SleepSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= rooms.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  return (
    <div className="sleep-section">
      <h2>Where you'll sleep</h2>
      <div className="carousel">
        <button className="prev-button" onClick={prevSlide}>
          {"<"}
        </button>
        <div className="carousel-track">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`room-card ${
                index >= currentIndex &&
                index < currentIndex + itemsPerSlide
                  ? "visible"
                  : "hidden"
              }`}
            >
              <img src={room.image} alt={room.title} className="room-image" />
              <div className="room-info">
                <h3>{room.title}</h3>
                <p>{room.bed}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default SleepSection;

import React, { useState } from "react";
import "./Carousel.scss";

const rooms = [
  {
    id: 1,
    image:
      "https://images.squarespace-cdn.com/content/v1/6229b277f5018726c68737a5/a834cf14-1edc-4a58-977b-091c52eb2cf8/bytdoentdpw-min.jr3Qs.jpeg",
    title: "2 Hour Pottery Class",
    bed: "$45/CAD per person",
  },
  {
    id: 2,
    image:
      "https://images.squarespace-cdn.com/content/v1/5488f180e4b022ce8f96bf3e/1689834642622-82EBOZ0ANQR3B4AYBF3S/pottery-gefc93e6e9_1280.jpg?format=1500w",
    title: "Introduction to Pottery Wheel",
    bed: "23/CAD per person",
  },
  {
    id: 3,
    image:
      "https://display.blogto.com/articles/20231116-PotteryDream-12.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70",
    title: "Pottery Bonanza",
    bed: "30/CAD per person",
  },
  {
    id: 4,
    image:
      "https://potterybyeleni.com/cdn/shop/articles/handmade-ceramics-4360_1200x1200.jpg?v=1666822378",
    title: "Beginner's Pottery Class",
    bed: "20/CAD per person",
  },
];

const SleepSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= rooms.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="sleep-section">
      <h2>Add an Experience Nearby!</h2>
      <h3> Experiences are Suggested Based on your Travel Preferences and Location</h3>
      <div className="carousel">
        <button className="prev-button" onClick={prevSlide}>
          {"<"}
        </button>
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
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

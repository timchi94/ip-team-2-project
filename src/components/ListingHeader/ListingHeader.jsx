import React from 'react';
import './ListingHeader.scss';

const HeaderSection = () => (
  <div className="header-section">
    <h1 className="title">Entire home in Barrie, Canada</h1>
    <p className="details">7 guests · 3 bedrooms · 4 beds · 1 bath</p>
    <div className="ratings">
      <span className="badge">Guest favourite</span>
      <p className="rating-description">
        One of the most loved homes on Airbnb, according to guests
      </p>
      <div className="rating">
        <span>⭐ 4.87</span>
        <span className="reviews"> · <a href="#">75 reviews</a></span>
      </div>
    </div>
  </div>
);

const HostInfoSection = () => (
  <div className="host-info-section">
    <img src="host-profile.png" alt="Host" className="host-image" />
  </div>
);

const AmenitiesSection = () => (
  <div className="amenities-section">
    <div className="amenity">
      <span className="icon">⭐</span>
      <div>
        <p className="title">Dedicated workspace</p>
        <p className="description">A room with wifi that's well-suited for working.</p>
      </div>
    </div>
    <div className="amenity">
      <span className="icon">🔑</span>
      <div>
        <p className="title">Self check-in</p>
        <p className="description">Check yourself in with the lockbox.</p>
      </div>
    </div>
    <div className="amenity">
      <span className="icon">🏆</span>
      <div>
        <p className="title">Shiyu is a Superhost</p>
        <p className="description">Superhosts are experienced, highly rated hosts.</p>
      </div>
    </div>
  </div>
);

const AirbnbListing = () => (
  <div className="listing-container">
    <div className="left-section">
      <HeaderSection />
      <HostInfoSection />
      <AmenitiesSection />
    </div>
  </div>
);

export default AirbnbListing;

import React from "react";
import "./HouseCard.css";

const HouseCard = () => {
  return (
    <div className="house-card">
      <div className="card">
        <img
          className="cover"
          src={require("../../../testPhotoHouseListing.jpeg")}
          alt="A big expensive house"
        />
        <h3 className="rest-name">House Listing</h3>
        <p>Price: 3,000,000</p>
        <p>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam bibendum massa id metus convallis vestibulum. Nullam at faucibus
          turpis. Sed sed risus ut augue sodales condimentum.
        </p>
      </div>
    </div>
  );
};

export default HouseCard;

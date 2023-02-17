import React from "react";
import heroesImg from "../stuff/heroes.png";
import avengersImg from "../stuff/avengers.png";

export const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-img-l" src={heroesImg}></img>
      <p className="white-bold-banner">New comics every week! Stay tuned!</p>
      <img className="banner-img-r" src={avengersImg}></img>
    </div>
  );
};

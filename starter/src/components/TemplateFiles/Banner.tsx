import React from "react";
import "../../css/main.scss";

interface BannerType {
  title: string;
  heading: string;
}

const Banner = (props: BannerType) => {
  return (
    <header>
      <div className="imageContainer">
        <img src="https://picsum.photos/id/17/1500" alt="BannerImage" />
      </div>
      <div className="display">
        <h4 className="text">{props.title}</h4>
        <h1>{props.heading}</h1>
        <button className="text">Read more</button>
      </div>
    </header>
  );
};

export default Banner;

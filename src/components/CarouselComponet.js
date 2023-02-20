import React from "react";
import { Carousel } from "react-responsive-carousel";
import { images } from "../constants/data";

const CarouselComponet = () => {
  return (
    <Carousel infiniteLoop autoPlay showStatus={false}>
      {images.map((currImage) => (
        <div
          className="w-full h-[250px] sm:h-[350px] md:h-[410px]"
          key={currImage.id}
        >
          <img
            className="w-full h-full object-fill"
            key={currImage.id + "-pic"}
            src={currImage.pic}
            alt=""
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponet;

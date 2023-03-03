import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselComponet = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/carousel")
      .then((res) => res.json())
      .then((data) => {
        setCarouselImages(data);
      });
  }, []);
  return (
    <Carousel infiniteLoop autoPlay showStatus={false}>
      {carouselImages.map((currImage) => (
        <div
          className="w-full h-[250px] sm:h-[350px] md:h-[410px]"
          key={currImage.id}
        >
          <img
            className="w-full h-full object-cover"
            key={currImage.id + "-" + currImage.type}
            src={currImage.pic}
            alt=""
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponet;

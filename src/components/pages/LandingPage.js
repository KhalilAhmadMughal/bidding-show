import React from "react";
import CarouselComponet from "../landing/CarouselComponet";
import BidCardSection from "../landing/BidCardSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingPage = () => {
  return (
    <>
      <CarouselComponet />
      <BidCardSection />
    </>
  );
};

export default LandingPage;

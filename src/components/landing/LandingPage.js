import React from "react";
import NavBar from "./NavBar";
import CarouselComponet from "./CarouselComponet";
import BidCardSection from "./BidCardSection";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingPage = () => {
  return (
    <section>
      <header className="fixed w-full gray-gradient__bg px-6 z-10">
        <NavBar />
      </header>
      <section className="pt-20 px-6">
        <CarouselComponet />
        <BidCardSection />
      </section>
      <footer className="px-6">
        <Footer />
      </footer>
    </section>
  );
};

export default LandingPage;

import React from "react";
import CarouselComponet from "../landing/CarouselComponet";
import NavBar from "../landing/NavBar";
import BidCardSection from "../landing/BidCardSection";
import Footer from "../landing/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingPage = () => {
  return (
    <main className="bg-primary w-full min-h-screen h-full text-white font-poppins">
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
    </main>
  );
};

export default LandingPage;

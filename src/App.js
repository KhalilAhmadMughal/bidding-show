import React from "react";
import NavBar from "./components/NavBar";
import CarouselComponet from "./components/CarouselComponet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BidCardSection from "./components/BidCardSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-primary w-full min-h-screen h-full text-white font-poppins">
      <header className="fixed w-full gray-gradient__bg px-6 z-20">
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
}

export default App;

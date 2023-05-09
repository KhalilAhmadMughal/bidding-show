import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../landing/NavBar";
import Footer from "../landing/Footer";
const LandingLayout = () => {
  return (
    <main className="bg-primary w-full min-h-screen h-full text-white font-poppins">
      <header className="fixed w-full gray-gradient__bg px-6 z-10">
        <NavBar />
      </header>
      <section className="pt-20 px-6">
        <Outlet />
      </section>
      <footer className="px-6">
        <Footer />
      </footer>
    </main>
  );
};

export default LandingLayout;

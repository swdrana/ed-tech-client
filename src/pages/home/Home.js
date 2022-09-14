import React from "react";
import Banner from "./components/Banner";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Items from "./components/Items";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <HeroSection />
      <ContactSection/>
    </div>
  );
};

export default Home;

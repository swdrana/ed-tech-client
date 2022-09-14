import React from "react";
import Banner from "./home/Banner";
import ContactSection from "./home/ContactSection";
import HeroSection from "./home/HeroSection";
import Items from "./home/Items";

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

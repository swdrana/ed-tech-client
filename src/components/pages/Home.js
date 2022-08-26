import React from 'react';
import Banner from './home/Banner';
import HeroSection from './home/HeroSection';
import Navber from './home/Navber';

const Home = () => {
    return (
        <div>
            <Navber/>
            <Banner/>
            <HeroSection/>
            Home
        </div>
    );
};

export default Home;
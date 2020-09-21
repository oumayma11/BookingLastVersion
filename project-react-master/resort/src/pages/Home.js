import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Navbar from "../components/Navbar";

import Banner from "../components/Banner";
const home = () => {
    return (
        <>
            <Navbar/>
            <Hero>
                <Banner
                    title="Beach Resort Hotel"
                    subtitle="deluxe rooms starting at 50 Dt"
                >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
          </Link>
                </Banner>
                </Hero>
                
            <Services />
                <FeaturedRooms />

        </>
    );
};

export default home;
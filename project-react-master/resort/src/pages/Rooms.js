import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FeaturedRoomsAdmin from "../components/FeaturedRoomsAdmin";
import NavbarAdmin from "../components/NavbarAdmin";


const Rooms = () => {
    return (
        <>
            <NavbarAdmin/>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                   
                </Banner>
            </Hero>
            <FeaturedRoomsAdmin />

        </>
    );
};

export default Rooms;
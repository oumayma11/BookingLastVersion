import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import NavbarAdmin from "../components/NavbarAdmin";


import Banner from "../components/Banner";
var toke = localStorage.firstName

const home = () => {
    return (

        <>
            <NavbarAdmin/>
            <Hero>
                <Banner
                    title="Hello"
                    subtitle={toke}
                >
                   
                </Banner>
            </Hero>
            

        </>
    );
};

export default home;
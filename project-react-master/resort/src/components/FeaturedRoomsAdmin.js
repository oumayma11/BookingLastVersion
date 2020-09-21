import React, { Component } from "react";
import Title from "./Title";
import defaultImg from "../images/room-6.jpeg";
import defaultImg1 from "../images/room-4.jpeg";
import defaultImg2 from "../images/room-5.jpeg";
import defaultImg3 from "../images/room-10.jpeg";
import defaultImg4 from "../images/room-2.jpeg";




import { Link } from "react-router-dom";



export default class FeaturedRooms extends Component {

    render() {

        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    <article className="room">
                        <div className="img-container">
                            <img src={defaultImg} alt="single room" />
                            <div className="price-top">
                                <h6>400Dt</h6>
                                <p>per night</p>
                            </div>
                            <Link to={`/suiteAdmin`} className="btn-primary room-link">
                                See More
        </Link></div> <p className="room-info">Suite Rooms</p>



                    </article>
                    <article className="room">
                        <div className="img-container">
                            <img src={defaultImg1} alt="single room" />
                            <div className="price-top">
                                <h6>300Dt</h6>
                                <p>per night</p>
                            </div>
                            <Link to={`/vipAdmin`} className="btn-primary room-link">
                                See More
        </Link></div>
                        <p className="room-info">VIP Rooms</p></article>

                    <article className="room">
                        <div className="img-container">
                            <img src={defaultImg2} alt="single room" />
                            <div className="price-top">
                                <h6>100Dt</h6>
                                <p>per night</p>
                            </div>
                            <Link to={`/doubleAdmin`} className="btn-primary room-link">
                                See More
        </Link></div>
                        <p className="room-info">Double Rooms</p>
                    </article>

                    <article className="room">
                        <div className="img-container">
                            <img src={defaultImg4} alt="single room" />
                            <div className="price-top">
                                <h6>70Dt</h6>
                                <p>per night</p>
                            </div>
                            <Link to={`/singleAdmin`} className="btn-primary room-link">
                                See More
        </Link></div>
                        <p className="room-info">Single Rooms</p>
                    </article>

                    <article className="room">
                        <div className="img-container">
                            <img src={defaultImg3} alt="single room" />
                            <div className="price-top">
                                <h6>50Dt</h6>
                                <p>per night</p>
                            </div>
                            <Link to={`/normalAdmin`} className="btn-primary room-link">
                                See More
        </Link></div>
                        <p className="room-info">Normal Rooms</p>
                    </article>




                </div>

            </section>
        );
    }
}

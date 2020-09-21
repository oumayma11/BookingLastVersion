import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import Banner from "../components/Banner";
import {


    Col
} from "shards-react";
import Hero from "../components/Hero";
import emailjs from 'emailjs-com';
import Navbar from "../components/Navbar";



var tokenemail = localStorage.userEmail
class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }



    onSubmit(e) {
        var toke = localStorage.userId
        console.log(toke)
        console.log(tokenemail)
        e.preventDefault();
        fetch("/api/newreclamation", {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                comment: this.state.comment,
                ClientId: toke,


            })
        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });
        emailjs.sendForm('service_4wmdyaq', 'template_xf6jxta', e.target, 'user_9EnHBzFYfRHggpGUXlY0S')
            .then((result) => {
                //  window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    handleChange(changeObject) {
        this.setState(changeObject)
    }

    render() {
        const tokenemail = localStorage.userEmail
        return (
            <>
                <Navbar/>
                <Hero>
                    <Banner
                        title="Beach Resort Hotel"
                        subtitle="About Us"
                    >
                    </Banner>
                </Hero>

                <div class="single-room-info"><article class="desc"><h3>details</h3>
                    <p>Our Hotel offers the guests an unforgettable stay with his warm hospitality, unique service quality in the magical nature of mediterranean.  Our 5-star hotel with his 462 rooms capacity,  beachfront location and most importantly with his very friendly service was placed in the short time in hearts of many guests. Fine sand and shallow beach awarded with international prize 'Blue Flag' is waiting just for you.
          Unlimited hospitality and perfect service awaits you from the moment you step in the Beach Resort Hotel. Full 12 months `All Inclusive' accommodation at your service.
Our rooms which have great views have all the comforts that our guests may need. Due to the different expectations, different types of rooms were designed like suites, family rooms and standart rooms.</p></article></div>
                <article class="info"></article>

                <center>
                    <Link to="/rooms" className="btn btn-primary">Make your reservation</Link>
                </center>



                {/* Description */}





                <form className="contact-form" noValidate onSubmit={this.onSubmit} >
                    <Col md="12" className="form-group">
                        <label>Reclamation </label>
                        <  textarea type="comment" name="comment" className="form-control" placeholder="Enter your reclamation "
                            value={this.state.comment} rows="5"
                            onChange={(e) => this.handleChange({ comment: e.target.value })}
                            required /> </Col>


                    <Col md="6">
                        <label htmlFor="email">Your Email</label>
                        <input type="text" name="email" className="form-control" placeholder="Enter your email"
                            value={tokenemail}
                            onChange={(e) => this.handleChange({ tokenemail: e.target.value })}
                            required />
                    </Col>
                    <br></br>

                    <center>
                        <Col md="2" className="form-group">


                            <button type="submit" className="btn btn-primary btn-block"  >Submit</button>
                        </Col>        </center>
                </form>
            </>
        );
    };
}




export default AboutUs;
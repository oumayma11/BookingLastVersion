import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
class SuiteAfterBooking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            nbRoomAvailable:'',
        };

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    onChangeHandler = event => {

        console.log(event.target.files[0])

    }

    onSubmit(e, id) {
        e.preventDefault();
        fetch("/booking/findBooking/" + id, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                "Content-Type": "application/json",
            },

        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.props.history.push('/rooms/:slug')




            })
            .catch(err => {
                console.log(err);
            });

        //console.log(id)

    }


    componentDidMount() {
                var toke = localStorage.bookid

        fetch("/booking/findBooking/" + toke, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                "Content-Type": "application/json",
            },

        })            .then(res => res.json())
            .then(result => {
                this.setState({
                    items: result,

                });
            });
        this.update()   }

    update() {

        const token = localStorage.id

        var toke = localStorage.bookid

        fetch("/room/updateRoom/" + token, {
            "method": "PUT",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                BookingId: toke,
                //nbRoomAvailable: toke,

            })
        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
                console.log(this.state.nbRoomAvailable)



                //  localStorage.setItem('usertoken', response)
                // this.props.history.push('/profile')


            })
            .catch(err => {
                console.log(err);
            });
    
    }


    render() {
        const { items } = this.state;

        return (


            <>
                <Hero hero="roomsHero">
                    <Banner title="your bookings">

                    </Banner>
                </Hero>
                <Container fluid className="main-content-container px-4">
                    {/* Page Header */}


                    {/* Default Light Table */}
                    <Row>
                        <Col>
                            <Card small className="mb-4">

                                <CardBody className="p-0 pb-3">
                                   
                                    {items.map(item => (
                                        <section className="single-room">
                                            
                                            <div className="single-room-info">
                                                <article className="desc">
                                                    <h3>Your booking has been registred successfully</h3>

                                                </article>


                                                <article className="info">
                                                    <h3>Booking informations:</h3>
                                                    <h6>Children Number : {item.nbChildren}</h6>
                                                    <h6>Adults Number : {item.nbAdults}</h6>
                                                    <h6>
                                                        Start Date : {item.startDate}

                                                    </h6>
                                                    <h6>End Date : {item.endDate}</h6>
                                                    <h6>Price : {item.totlaPrice}</h6>
                                                    <br></br>
                                                    

                                                </article>

                                            </div>
                                        </section>))}

                                </CardBody>
                            </Card>
                            <center>

                                <Link to="/home" className="btn-primary" >
                                    return home
          </Link>                            </center>

                        </Col>
                    </Row>

                </Container>
            </>
        );
    }
}

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Suite Rooms">
                    <Link to="/home" className="btn-primary">
                        return home
          </Link>
                </Banner>
            </Hero>

        </>
    );
};

export default SuiteAfterBooking;
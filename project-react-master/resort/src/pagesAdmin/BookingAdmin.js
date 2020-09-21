import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";

import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
class BookingAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
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
        fetch("/booking/allBooking/" , {
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




            })
            .catch(err => {
                console.log(err);
            });

        //console.log(id)

    }


    componentDidMount() {
        fetch('/booking/allBooking/')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    items: result,

                });
            });


    }


    

    render() {
        const { items } = this.state;


        return (


            <>
                <NavbarAdmin/>
                <Hero hero="roomsHero">
                    <Banner title="All Bookings">

                    </Banner>
                </Hero>
                <Container fluid className="main-content-container px-4">
                    {/* Page Header */}


                    {/* Default Light Table */}
                    <Row>
                        <Col>
                            <Card small className="mb-4">

                                <CardBody className="p-0 pb-3">
                                    <table className="table mb-0">
                                        <thead className="bg-light">
                                            <tr>
                                                <th scope="col" className="border-0">
                                                    #
            </th>
                                                <th scope="col" className="border-0">
                                                    start date
            </th>
                                                <th scope="col" className="border-0">
                                                    end date
            </th>
                                                <th scope="col" className="border-0">
                                                    nb adults
            </th>
                                                <th scope="col" className="border-0">
                                                    nb children
            </th>
                                                <th scope="col" className="border-0">
                                                    price
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody>


                                            {items.map(item => (



                                                <tr key={item.id}>
                                                    <td>{item.id}
                                                    </td>
                                                    <td>{item.startDate}              {localStorage.setItem('roomtype', item.roomType)}

                                                    </td>
                                                    <td >
                                                       
                                                        {item.endDate} 
                                                    </td>



                                                    <td>{item.nbAdults}</td>
                                                    <td>{item.nbChildren}</td>
                                                    <td>   

                                                        {item.totlaPrice} 



                                                 </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>


                                </CardBody>
                            </Card>
                            <center>

                                                  </center>

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

export default BookingAdmin;
import React, { Component } from "react";
import { Link } from "react-router-dom";


import jwt_decode from 'jwt-decode'


export default class SingleRoom extends Component {


    constructor(props) {
        super(props)
        this.state = {
            items: [],



        }
    }

   


    componentDidMount() {
        const toke = localStorage.id


        fetch("/room/findRoom/" + toke, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                "Content-Type": "application/json",
            },

        })
            .then(response => response.json())
            .then(response => {
                console.log("helloooooooooooo" + response)
                this.setState({
                    items: response,

                });




            })
            .catch(err => {
                console.log(err);
            });
    }

    
















  
       



    render() {

        const { items } = this.state;
        
        return (
            <>
                {items.map(item => (
                <section className="single-room">
                        <div className="border-bottom text-center">
                            <img className="rounded-circle"
                                src={require(`../upload/${item.image}`)} alt={item.image} width="1000"height="200"/>

                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>pppppp</p>

                        </article>
                       
                            
                            <article className="info">
                                <h3>info</h3>
                                <h6>price : {item.price}</h6>
                                <h6>size : 444444</h6>
                                <h6>
                                    max capacity :{item.nbRoomAvailable}

                            </h6>
                                <h6>125</h6>
                               <h6>44444</h6>
                                <br></br>
                                <Link to="/booking" className="btn-primary"  >
                                    Book Now
          </Link>  

                            </article>

                    </div>
                    </section>))}
                <section className="room-extras">
                    <h6>extras </h6>
                    <ul className="extras">
                       
                    </ul>

                </section>
            </>
        );
    }

        
    
}

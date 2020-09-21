import React, { Component } from "react";



const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&�*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};


class Booking extends Component {



    constructor(props) {
        super(props);

        this.state = {
            nbChildren: null,
            nbAdults: null,
            startDate: null,
            endDate: null,
            totlaPrice: null,
            formErrors: {
                nbChildren: "",
                nbAdults: "",
                totlaPrice: ""
               
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--

        nb children: ${this.state.nbChildren}
        nb adults: ${this.state.nbChildren}
        start Date: ${this.state.startDate}
        end date: ${this.state.endDate}
        total price: ${this.state.totlaPrice}

      `);
            this.create(e);
           // localStorage.setItem("idBooking", id)

            // const secretToken = randomstring.generate();
            // console.log('secretToken', secretToken);
            this.props.history.push('/suiteafterbooking/')


        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "nbChildren":
                formErrors.nbChildren =
                    value.length < 1 ? "minimum 1 characaters required" : "";
                break;
            case "nbAdults":
                formErrors.nbAdults =
                    value.length < 1 ? "minimum 1 characaters required" : "";
                break;
           
            case "totalPrice":
                formErrors.totlaPrice =
                    value.length < 1 ? "minimum 1 characaters required" : "";
                break;

            
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    create(e) {
        // add entity - POST
        e.preventDefault();
        fetch("/booking/newBooking", {
            "method": "POST",
            "headers": {

                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                "Content-Type": "application/json",

            },

            "body": JSON.stringify({
                nbChildren: this.state.nbChildren,
                nbAdults: this.state.nbAdults,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                totlaPrice: this.state.totlaPrice,

            })


        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
                alert(this.state.email + "" + " booking has been added successfully ")


            })
            .catch(err => {
                console.log(err);
            });
    }

    countPrice(e) {
         const  pricee =  (this.nbAdults + this.nbChildren)
        console.log(pricee)
    }


    render() {
        const { formErrors } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h1 className="h3 mb-3 font-weight-normal">Booking</h1>

                        <form onSubmit={this.handleSubmit                        } noValidate>
                            <div className="form-group">
                                <label htmlFor="nbChildren">Number Children</label>
                                <input
                                    className={formErrors.nbChildren.length > 0 ? "error" : null}
                                    placeholder="number of children"
                                    type="number"
                                    name="nbChildren"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.nbChildren.length > 0 && (
                                    <span className="errorMessage">{formErrors.nbChildren}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="nbAdults">Number Adults</label>
                                <input
                                    className={formErrors.nbAdults.length > 0 ? "error" : null}
                                    placeholder="number of adults"
                                    type="number"
                                    name="nbAdults"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.nbAdults.length > 0 && (
                                    <span className="errorMessage">{formErrors.nbAdults}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="startDate">start date</label>
                                <input
                                    placeholder="Email"
                                    type="date"
                                    name="startDate"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">end date</label>
                                <input
                                    placeholder="Password"
                                    type="date"
                                    name="endDate"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                               
                            </div>

                            <div className="createAccount">
                                <button onClick={(e) => this.countPrice(e)} className="btn btn-primary btn-block"
                                >Count Price</button>
                            </div>
                            <div className="form-group">
                                <label htmlFor="totlaPrice">total price</label>
                                <input
                                    placeholder="your total price is..."
                                    type="float"
                                    name="totlaPrice"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.totlaPrice.length > 0 && (
                                    <span className="errorMessage">{formErrors.totlaPrice}</span>
                                )}

                            </div>
                           
                            <div className="createAccount">
                                <button type="submit" className="btn btn-primary btn-block"
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                </div></div>
        );
    }
}
export default Booking;
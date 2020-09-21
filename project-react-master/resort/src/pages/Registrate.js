import React, { Component } from "react";
import emailjs from 'emailjs-com';
import axios from 'axios';
var passwordHash = require('password-hash');

class Registrate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            address: "",
            birthDate: "",
            image: ""
        };
        this.create = this.create.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        // Initially, no file is selected 
        selectedFile: null
    };
    // On file select (from the pop up) 
    onFileChange = event => {
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] });
    };
    // On file upload (click the upload button) 
    onFileUpload = () => {
        // Create an object of formData 
        const formData = new FormData();
        // Update the formData object 
        formData.append(
            'file',
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        // Details of the uploaded file 
        console.log(this.state.selectedFile);
        // Request made to the backend api 
        // Send formData object 
        axios.post('/room/upload', formData);
        console.log(this.state.selectedFile.name);
    };
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );


        }
    };
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    create(e) {


        // add entity - POST
        e.preventDefault();
        fetch("/api/new",
            {
                "method": "POST",
                "headers": {
                    "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },

                "body": JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: passwordHash.generate(this.state.password),
                    address: this.state.address,
                    birthDate: this.state.birthDate,
                    image: this.state.selectedFile.name
                })
            })
            .then(response => response.text())
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });
        emailjs.sendForm('service_4wmdyaq', 'template_xdk1ed8', e.target, 'user_9EnHBzFYfRHggpGUXlY0S')
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

    sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form className="contact-form" noValidate onSubmit={this.create}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstname" className="form-control" placeholder="Enter your first name"
                                    value={this.state.firstName}
                                    onChange={(e) => this.handleChange({ firstName: e.target.value })}
                                    required />
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" name="lastname" className="form-control" placeholder="Enter your last name"
                                    value={this.state.lastName}
                                    onChange={(e) => this.handleChange({ lastName: e.target.value })}
                                    required />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="text" name="email" className="form-control" placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={(e) => this.handleChange({ email: e.target.value })}
                                    required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="message" className="form-control" placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={(e) => this.handleChange({ password: e.target.value })}
                                    required />
                            </div>
                            <div>
                                <label>Mot de pass Crypter</label>
                                <input type="password" name="message" value={passwordHash.generate(this.state.password)} />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" placeholder="Enter your address"
                                    value={this.state.address}
                                    onChange={(e) => this.handleChange({ address: e.target.value })}
                                    required />
                            </div>
                            <div className="form-group">
                                <label>Choose your file picture</label>
                                <input type="file" onChange={this.onFileChange} />
                            </div>
                            <div className="form-group">
                                <label>Birth Date</label>
                                <input type="date" className="form-control" placeholder="Enter your birth date"
                                    value={this.state.birthDate}
                                    onChange={(e) => this.handleChange({ birthDate: e.target.value })}
                                    required />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block"
                                onClick={this.onFileUpload}  >Submit</button></form>
                    </div>
                </div>
            </div>


        );
    };
}
export default Registrate;
import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";




class Login extends Component {


   

    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);

    }



    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }



    

 
    onSubmit(e) {


     
        e.preventDefault();
        fetch("/api/login",{
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                      "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then(response => response.text())
            .then(response => {
                console.log(response)


                
                localStorage.setItem('usertoken', response)
                if (this.state.email === "raya.hadhri@esprit.tn" || this.state.email === "oummmayma.homrani@esprit.tn") {
                    console.log(localStorage)
                    this.props.history.push('/homeAdmin')

                } else {
                    this.props.history.push('/home')
                }
               

                
            })
            .catch(err => {
                console.log(err);
            });
    }


    handleChange(changeObject) {
        this.setState(changeObject)
    }

    



    render () {
        return (
            <>
                <Hero>
                    <Banner
                        title="Login"
                    >
                        <form noValidate onSubmit={this.onSubmit}>
                            <table>
                                <tbody>
                            <tr><td>
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter your "
                                        value={this.state.email}
                                        onChange={(e) => this.handleChange({ email: e.target.value })}
                                    required />
                            </td></tr>
                            <tr><td>
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter your "
                                        value={this.state.password}
                                        onChange={(e) => this.handleChange({ password: e.target.value })}
                                    required />
                            </td></tr>
                            <tr><td>
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </td></tr>
                            <tr><td>
                                <button type="submit" className="btn btn-primary btn-block" >Submit</button></td></tr>

                           

                       


            </tbody>
                            </table>
                            <a href="http://localhost:3001/registrate"><p className="forgot-password text-right">create an account</p></a>
                        </form>
                    </Banner>
                </Hero>
            </>
        );
    };
}
export default Login;
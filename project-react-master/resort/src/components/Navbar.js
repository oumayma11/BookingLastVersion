import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    };
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/home');

    };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            
                    <li>
              <Link to="/profile">profile</Link>
                    </li>
                   
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={(e) => this.logOut(e)}>logOut</Link>
                    </li>

                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                  

          </ul>
        </div>
      </nav>
    );
  }
}
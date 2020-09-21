import React from "react";
import "./App.css";
//import { BrowserRouter as Router } from "react-router-dom";

//import routes from "./routes";
//import withTracker from "./WithTracker";
import FileUpload from './components/FileUpload';
import Registrate from "./pages/Registrate";
import AboutUs from "./views/AboutUs";

import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";
import HomeAdmin from "./pagesAdmin/HomeAdmin";
import BookingAdmin from "./pagesAdmin/BookingAdmin";


import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ComponentsOverview from "./views/ComponentsOverview";
import BlogOverview from "./views/BlogOverview";
import Normal from "./pages/Normal";
import Single from "./pages/Single";
import Suite from "./pages/Suite";
import FeedBack from "./pages/FeedBacks";

import Double from "./pages/Double";
import Vip from "./pages/Vip";
import Booking from "./pages/Booking";
import Clients from "./pagesAdmin/Clients";

import SuiteAfterBooking from "./pages/SuiteAfterBooking";

import SuiteAdmin from "./pagesAdmin/SuiteAdmin";
import NormalAdmin from "./pagesAdmin/NormalAdmin";
import VipAdmin from "./pagesAdmin/VipAdmin";
import SingleAdmin from "./pagesAdmin/SingleAdmin";
import DoubleAdmin from "./pagesAdmin/DoubleAdmin";




import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import AddNewPost from "./views/AddNewPost";
import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={ComponentsOverview} />
              <Route exact path="/registrate/" component={Registrate} />
              <Route exact path="/profile/" component={Profile} />
              <Route exact path="/login/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/feedBacks" component={FeedBack} />
              <Route exact path="/clients" component={Clients} />

              <Route exact path="/homeAdmin" component={HomeAdmin} />
              <Route exact path="/bookingAdmin" component={BookingAdmin} />

              <Route exact path="/BlogOverview/" component={BlogOverview} />
              <Route exact path="/FileUpload/" component={FileUpload} />
              <Route exact path="/rooms/" component={Rooms} />
              <Route exact path="/AddNewPost/" component={AddNewPost} />
              <Route exact path="/Tables/" component={Tables} />
              <Route exact path="/BlogPosts/" component={BlogPosts} />
              <Route exact path="/ComponentsOverview/" component={ComponentsOverview} />
              <Route exact path="/normal/" component={Normal} />
              <Route exact path="/double/" component={Double} />
              <Route exact path="/vip/" component={Vip} />
              <Route exact path="/suite/" component={Suite} />
              <Route exact path="/single/" component={Single} />
              <Route exact path="/aboutus/" component={AboutUs} />

              <Route exact path="/suiteafterbooking/" component={SuiteAfterBooking} />


              <Route exact path="/rooms/:slug" component={SingleRoom} />
              <Route exact path="/booking/" component={Booking} />
              <Route exact path="/suiteAdmin" component={SuiteAdmin} />
              <Route exact path="/normalAdmin" component={NormalAdmin} />
              <Route exact path="/vipAdmin" component={VipAdmin} />
              <Route exact path="/singleAdmin" component={SingleAdmin} />
              <Route exact path="/doubleAdmin" component={DoubleAdmin} />

        <Route component={Error} />


      </Switch>
    </>
  );
}

export default App



/*export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);*/

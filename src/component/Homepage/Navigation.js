import React from "react";
import "./Navigation.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Login from '../Login';
import About from "./About";
import ERROR from "./Error";
import SignUp from "./SignUp";
import Navbar from "react-bootstrap/Navbar";
import ReservationComponent from "../ReservationComponent";
import GuestComponent from "../GuestComponent";
import logo from '../Image/logohotel.jpg'


const Navigation = () => {
  const isAuthenticated = true ? localStorage.getItem("token") !== null : false;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (isAuthenticated) {
    return (
      <div>
        {/* <Router> */}

        <nav className="navbar fix-top navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container-fluid">
          <img src={logo} alt="" className={'d-block m-auto bg-light'} style={{width:"100px"}}/>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                   <h2 className="m-3 text-warning"  ><i className="fa fa-home fa-fw"></i> Home</h2>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/profile" className="nav-link active">
                   <h2 className="m-3 text-danger"><i className="fa fa-user fa-fw"></i>Profile</h2> 
                  </Link>
                </li>
              </ul>
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
                onClick={handleLogout}
              >
              <h2>Logout</h2>  
              </button>
            </div>
          </div>
        </nav>

        
      </div>
    );
  } else {
    return (
      <div>
        {/* <Router> */}

        <nav className="navbar fix-top navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Hotel Paradise{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/login" className="nav-link active">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" className="nav-link active">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact" className="nav-link active">
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  {/* <Link to="/signup" className="nav-link active">
                    Signup
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navigation;

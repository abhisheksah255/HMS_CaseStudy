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
    window.location.href = "/login";
  };

  if (isAuthenticated) {
    return (
      <div>
        {/* <Router> */}

        <nav class="navbar fix-top navbar-expand-lg navbar-dark bg-dark shadow">
          <div class="container-fluid">

            <a class="navbar-brand" img src={logo}>
              Hotel Paradise{" "}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active">
                    Home
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/profile" class="nav-link active">
                    Profile
                  </Link>
                </li>
              </ul>
              <button
                class="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
                onClick={handleLogout}
              >
                Logout
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

        <nav class="navbar fix-top navbar-expand-lg navbar-dark bg-dark shadow">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Hotel Paradise{" "}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/login" class="nav-link active">
                    Login
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/about" class="nav-link active">
                    About
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/contact" class="nav-link active">
                    Contact
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/signup" class="nav-link active">
                    Signup
                  </Link>
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

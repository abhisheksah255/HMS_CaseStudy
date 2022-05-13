import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  Navigate,
} from "react-router-dom";
import GuestComponent from "./component/GuestComponent";
import ReservationComponent from "./component/ReservationComponent";
import Home from "./component/Homepage/Home";
// import Login from './component/Homepage/Login';
import Login from "./component/Login";
import About from "./component/Homepage/About";
import Profile from "./component/Homepage/Profile";
import Contact from "./component/Homepage/Contact";
import Error from "./component/Homepage/Error";
import Navigation from "./component/Homepage/Navigation";
import SignUp from "./component/Homepage/SignUp";
import Rhome from "./component/Receptionist/Rhome";
import Mhome from "./component/Manager/Mhome";
import Ohome from "./component/Owner/Ohome";
import AddGuest from "./component/Receptionist/AddGuest";
import AllGuest from "./component/Receptionist/AllGuests";
import AddReservation from "./component/Receptionist/AddReservation";
import AllReservation from "./component/Receptionist/AllReservation";
import AddInventory from "./component/Manager/AddInventory";
import AllInventory from "./component/Manager/AllInventory";
import AddStaff from "./component/Manager/AddStaff";
import AllStaff from "./component/Manager/AllStaff";
import AddRoom from "./component/Manager/AddRoom";
import AllRooms from './component/Manager/AllRooms';
import SearchAvlRoom from "./component/Manager/SearchAvlRoom";
import axios from "axios";
import { Checkout } from "./component/Receptionist/Checkout";
import AddDepartment from "./component/Owner/AddDepartment";
import AllDepartment from "./component/Owner/AllDepartment";
import OurRooms from "./component/Homepage/OurRooms";

function App() {
  const isAuthenticated = true ? localStorage.getItem("token") !== null : false;

  if (isAuthenticated) {
    return (
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<ReservationComponent />} />
            <Route path="/guest" element={<GuestComponent />} />
            <Route path="*" element={<Error />} />
            <Route path="/receptionist" element={<Rhome />} />
            <Route path="/owner" element={<Ohome />} />
            <Route path="/manager" element={<Mhome />} />
            <Route path="/room" element={<OurRooms/>}/>

            <Route path="/receptionist/addGuest" element={<AddGuest />} />
            <Route path="/receptionist/AllGuest" element={<AllGuest />} />

            <Route path='/receptionist/addreservation' exact element={<AddReservation/>}/>
            <Route path='/receptionist/Allreservation' exact element={<AllReservation/>}/>
            <Route path='/checkout' exact element={<Checkout/>}/>
  
            <Route path='/manager/addInventory' exact element={<AddInventory/>}/>
            <Route path='/manager/AllInventory' exact element={<AllInventory/>}/>          
  
            <Route path='/manager/addRoom' exact element={<AddRoom/>}/>
            <Route path='/manager/AllRoom' exact element={<AllRooms/>}/>
            <Route path='/manager/getAvail' exact element={<SearchAvlRoom/>}/>
            
            <Route path='/manager/addstaff' exact element={<AddStaff/>} />
            <Route path='/manager/Allstaff' exact element={<AllStaff/>} />
         
            <Route path='/owner/adddepartment' exact element={<AddDepartment/>} />
            <Route path='/owner/Alldepartment' exact element={<AllDepartment/>} />
         
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="*" element={<Navigate to='/login' replace/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;

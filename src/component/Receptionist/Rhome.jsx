import React from "react";
import { Link } from "react-router-dom";
import profile1 from "../Image/h5.jpg";
import profile2 from "../Image/g1.jpg";
import profile3 from "../Image/i1.jpg";
import { Button } from "@material-ui/core";

const Rhome = () => {

  const textContainerStyle={
    height: '40px'
  }
  return (
    <div className="Rhome">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center"></div>
          <h1 className="text-center">Welcome to Receptionist Profile</h1>
          <div className="underline mx-auto"></div>

          <div className="col-md-4">
            <div className="card -shadow">
              <img src={profile1} className="border-bottom rhome-card-img" alt="profile" />

              <div className="card-body">
                <h3>Reservation Service</h3>
                <div className="underline"></div>

                <div style={textContainerStyle}>
                <p>
                  This is the Reservation Service here we can do reservation .
                </p>
                </div>
                <div class="d-grid gap-2  mx-auto">
                 
                    <Link
                      to="/receptionist/addreservation"
                      className="btn btn-link"
                    >
                      Add Reservation
                    </Link>
                    <Link
                      to="/receptionist/Allreservation"
                      className="btn btn-link"
                    >
                      All Reservation
                    </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ************************************************************* */}

          <div className="col-md-4">
            <div className="card -shadow" >
              <img src={profile2} className="border-bottom rhome-card-img" alt="profile" />

              <div className="card-body">
                <h3>Guest Service</h3>
                <div className="underline"></div>

                <div style={textContainerStyle}>
                <p>
                  This is the Reservation Service here we can do reservation .
                </p>
                </div>
                <div class="d-grid gap-2  mx-auto">
                  
                    <Link to="/receptionist/addGuest" className="btn btn-link">
                      add Guest
                    </Link>
                  
                    <Link to="/receptionist/AllGuest" className="btn btn-link">
                      All Guest
                    </Link>
             
                </div>
              </div>
            </div>
          </div>

          {/* ************************************************************** */}
          <div className="col-md-4">
            <div className="card -shadow">
              <img
                src={profile3}
                className="border-bottom rhome-card-img"
                alt="profile"
              />

              <div className="card-body">
              
                <h3>Room Service</h3>
                <div className="underline"></div>

                <div style={textContainerStyle}>
                <p>
                  This is the Reservation Service here we can do reservation .
                </p>
                </div>
                <div class="d-grid gap-2  mx-auto">
                  
                    <Link to="/manager/getAvail" className="btn btn-link">
                      Available Room
                    </Link>
                    <Link to="/manager/getAvail" className="btn btn-link">
                      Available Room
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rhome;

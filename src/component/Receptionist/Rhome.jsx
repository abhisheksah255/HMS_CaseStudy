import React from "react";
import { Link } from "react-router-dom";
import profile1 from "../Image/h5.jpg";
import profile2 from "../Image/g1.jpg";
import profile3 from "../Image/i1.jpg";
import { Button } from "@material-ui/core";

const Rhome = () => {
  return (
    <div className="Rhome">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4  text-center"></div>
          <h1 className="text-center">Welcome to Receptionist Profile</h1>
          <div className="underline mx-auto"></div>

          <div className="col-md-4">
            <div className="card -shadow">
              <img src={profile1} className="border-bottom" alt="profile" />

              <div className="card-body">
                <h3>Reservation Service</h3>
                <div className="underline"></div>

                <p>
                  This is the Reservation Service here we can do reservation .
                </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <Button variant="contained">
                    <Link
                      to="/receptionist/addreservation"
                      className="btn btn-link"
                    >
                      Add Reservation
                    </Link>
                  </Button>
                  <Button variant="contained">
                    <Link
                      to="/receptionist/Allreservation"
                      className="btn btn-link"
                    >
                      All Reservation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ************************************************************* */}

          <div className="col-md-4">
            <div className="card -shadow">
              <img src={profile2} className="border-bottom" alt="profile" />

              <div className="card-body">
                <h3>Guest Service</h3>
                <div className="underline"></div>

                <p>
                  This is the guest service here we can add our guest and see
                  all guest and delete guest.
                </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <Button variant="contained">
                    <Link to="/receptionist/addGuest" className="btn btn-link">
                      add Guest
                    </Link>
                  </Button>
                  <Button variant="contained">
                    <Link to="/receptionist/AllGuest" className="btn btn-link">
                      All Guest
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ************************************************************** */}
          <div className="col-md-4">
            <div className="card -shadow">
              <img
                src={profile3}
                className="w-100 border-bottom"
                alt="profile"
              />

              <div className="card-body">
              
                <h3>Room Service</h3>
                <div className="underline"></div>

                <p>
                  This is the Room Service here receptionst can only add guest
                  to the room and deleteguest and add rervations to the room.
                </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <Button variant="contained">
                    <Link to="/manager/getAvail" className="btn btn-link">
                      Available Room
                    </Link>
                  </Button>
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

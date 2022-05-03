import React from 'react'
import { Link } from "react-router-dom";
import profile1 from "../Image/h5.jpg";
import profile2 from "../Image/g1.jpg";
import profile3 from "../Image/pic5.jpg";

const Rhome = () => {
  return (

<div className="container">
            <div className="row">
              <div className="col-md-12 mb-4  text-center"></div>  
                    <h1>this is receptionist home page</h1>
                    <div className="underline mx-auto"></div>

                    <div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile1}
                    className="w-100 border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Reservation Service</h3>
                    <div className="underline"></div>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Necessitatibus alias numquam, nam quibusdam suscipit nobis
                      aliquid quidem quod, possimus libero similique neque
                      aperiam est quas iure fugiat optio repudiandae commodi.
                    </p>
                    <Link to="/reservation" className="btn btn-link">
                      reservation
                    </Link>
                    <Link to="/receptionist/addreservation" className="btn btn-link">
                      add Reservation
                    </Link>
                    <Link to="/receptionist/Allreservation" className="btn btn-link">
                      All Reservation
                    </Link>
                   
                  </div>
                </div>
              </div>

{/* ************************************************************* */}

<div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile2}
                    className="w-100 border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Guest Service</h3>
                    <div className="underline"></div>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Necessitatibus alias numquam, nam quibusdam suscipit nobis
                      aliquid quidem quod, possimus libero similique neque
                      aperiam est quas iure fugiat optio repudiandae commodi.
                    </p>
                    <Link to="/guest" className="btn btn-link">
                      Guest
                    </Link>
                    <Link to="/receptionist/addGuest" className="btn btn-link">
                      add Guest
                    </Link>
                    <Link to="/receptionist/AllGuest" className="btn btn-link">
                      All Guest
                    </Link>
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Necessitatibus alias numquam, nam quibusdam suscipit nobis
                      aliquid quidem quod, possimus libero similique neque
                      aperiam est quas iure fugiat optio repudiandae commodi.
                    </p>
                    <Link to="/room" className="btn btn-link">
                      Room
                    </Link>
                  </div>
                </div>
              </div>


        </div>      
    </div>
  )
}

export default Rhome;

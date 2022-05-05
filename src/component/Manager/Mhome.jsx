import React from 'react'
import { Link } from "react-router-dom";
import profile1 from "../Image/i1.jpg";
import profile2 from "../Image/g2.jpg";
import profile3 from "../Image/pic4.jpg";

const Mhome = () => {
  return (

<div className="container abhi-img">
            <div className="row">
              <div className="col-md-12 mb-4  text-center"></div>  
                    <h1 className="text-center">Welcome to Manager Profile</h1>
                    <div className="underline mx-auto"></div>

                    <div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile1}
                    className="w-100 border-bottom "
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Inventory Service</h3>
                    <div className="underline"></div>

                    <p>
                     This is Inventory Service 
                    </p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-success"><Link to='/manager/addInventory' className="btn btn-link">
                      Add Inventory</Link></button>
                         
                      <button className="btn btn-warning"><Link to='/manager/AllInventory' className="btn btn-link">
                      All Inventory</Link></button>
                      </div>
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
                    <h3>Staff Service</h3>
                    <div className="underline"></div>

                    <p>
                     This is Staff Service
                    </p>

                      <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-success" type="button"><Link to='/manager/addstaff' >
                      Add Staff</Link></button>
  <button class="btn btn-warning" type="button"><Link to='/manager/Allstaff' >
                      All Staff</Link></button>
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
                      This is room Service
                    </p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-success"><Link to='/manager/addRoom' className="btn btn-link">
                      Add Room</Link></button>
                        
                      <button className="btn btn-warning"><Link to='/manager/AllRoom' className="btn btn-link">
                      All Room</Link></button>

                      <button className="btn btn-dark"><Link to='/manager/getAvail' className="btn btn-link">
                      Available Room</Link></button>
                      </div>
                  </div>
                </div>
              </div>


        </div>      
    </div>
  )
}

export default Mhome;

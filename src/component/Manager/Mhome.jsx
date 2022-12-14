import React from 'react'
import { Link } from "react-router-dom";
import profile1 from "../Image/i1.jpg";
import profile2 from "../Image/g2.jpg";
import profile3 from "../Image/pic4.jpg";

const Mhome = () => {
  return (

<div className="container ">
            <div className="row manager ">
              <div className="col-md-12 mb-4  text-center"></div>  
                    <h1 className="text-center">Welcome to Manager Profile</h1>
                    <div className="underline mx-auto"></div>

                    <div className="col-md-4 ">
                <div className="card -shadow">
                  <img
                    src={profile1}
                    className="border-bottom mimage"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Inventory Service</h3>
                    <div className="underline"></div>

                    <p>
                     This is Inventory Service 
                    </p>
                    <div class="d-grid gap-2  mx-auto">
                    <Link to='/manager/addInventory' className="btn">
                      Add Inventory</Link>
                         
                  <Link to='/manager/AllInventory' className="btn">
                      All Inventory</Link>
                      </div>
                  </div>
                </div>
              </div>

{/* ************************************************************* */}

<div className="col-md-4 mbox">
                <div className="card -shadow">
                  <img
                    src={profile2}
                    className="border-bottom mimage"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Staff Service</h3>
                    <div className="underline"></div>

                    <p>
                     This is Staff Service
                    </p>

                      <div class="d-grid gap-2 mx-auto">
<Link to='/manager/addstaff'className="btn" >
                      Add Staff</Link>
  <Link to='/manager/Allstaff' className="btn">
                      All Staff</Link>
          </div>
                  </div>
                </div>
              </div>

{/* ************************************************************** */}
<div className="col-md-4 mbox">
                <div className="card -shadow">
                  <img
                    src={profile3}
                    className="border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Room Service</h3>
                    <div className="underline"></div>

                    <p>
                      This is room Service
                    </p>
                    <div class="d-grid gap-2 mx-auto">
                    <Link to='/manager/addRoom' className="btn btn-link">
                      Add Room</Link>
                        
                    <Link to='/manager/AllRoom' className="btn btn-link">
                      All Room</Link>

                      <Link to='/manager/getAvail' className="btn btn-link">
                      Available Room</Link>
                      </div>
                  </div>
                </div>
              </div>


        </div>      
    </div>
  )
}

export default Mhome;

import React from 'react'
import { Link } from "react-router-dom";
import profile1 from "../Image/d3.jpg";
import profile2 from "../Image/m1.jpg";
import profile3 from "../Image/re.jpg";
import { Button } from '@material-ui/core'


const Ohome = () => {
  return (

<div className="container">
            <div className="row">
              <div className="col-md-12 mb-4  text-center"></div>  
                    <h1 className="text-center">Welcome to Owner Home Page</h1>
                    <div className="underline mx-auto"></div>

                    <div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile1}
                    className="border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Department Service</h3>
                    <div className="underline"></div>

                    <p>
                      This is the department Service which will be managed by only owner. 
                    </p>
                   <Button variant='contained'> <Link to="/reservation" className="btn btn-link">
                      Reservation
                    </Link></Button>
                   
                  </div>
                </div>
              </div>

{/* ************************************************************* */}

<div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile2}
                    className="border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Manager Service</h3>
                    <div className="underline"></div>

                    <p>
                This is the manager profile here owner can access all the services of manager
                    </p>
                    <Button variant='contained'> <Link to="/manager" className="btn btn-link">
                      Manager services
                    </Link></Button>
                  </div>
                </div>
              </div>

{/* ************************************************************** */}
<div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile3}
                    className="border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Receptionist Service</h3>
                    <div className="underline"></div>

                    <p>
                   This is thr receptionist profile here owner can also have rights to access the receptionist profile  
                    </p>
                    <Button variant='contained'> <Link to="/receptionist" className="btn btn-link">
                      Receptionist services
                    </Link></Button>
                  </div>
                </div>
              </div>


        </div>      
    </div>
  )
}

export default Ohome;

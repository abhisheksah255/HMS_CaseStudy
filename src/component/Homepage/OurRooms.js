import React from "react";
import { Link } from "react-router-dom";
import roomData from "../data/rooms";

import {useLocation,useNavigate} from 'react-router-dom';


const OurRooms = () => {
  let navigate=useNavigate();
  
  const handlebook = (roomId) => {
    // navigate("/receptionist/addGuest")
    navigate('/receptionist/addreservation',{state:{id:roomId}})
  }
  return (
    <>
      <>
          <h1 className="display-4 text-center">Our Rooms</h1>
        <div className="row d-flex justify-content-center align-items-center flex-direction-column">
          {roomData.map((room, index) => (
            <div className="col-3 m-4" key={index}>
              <div className="card text-center" style={{ width: "20rem" }}>
                <img
                  className="card-img-top room-card-img"
                  src={room.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-id">{room.id}</h4>
                  <h5 className="card-title">{room.type}</h5>
                  <p className="card-text">Rs. {room.price}/Night</p>
                  {/* <button onclick={()=>handlebook(room.id)}>Book Now!</button> */}
                <Link to={`/receptionist/addreservation?id=${room.id}&price=${room.price}`} className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};
export default OurRooms;

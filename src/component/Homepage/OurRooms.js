import React from "react";
import { Link } from "react-router-dom";
import roomData from "../data/rooms";

const OurRooms = () => {
  return (
    <>
      <div className="container">
          <h1 className="display-4 text-center">Our Rooms</h1>
        <div className="row">
          {roomData.map((room, index) => (
            <div className="col-3 mt-5" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={room.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-id">{room.id}</h4>
                  <h5 className="card-title">{room.type}</h5>
                  <p className="card-text">Rs. {room.price}/Night</p>
                <Link to='/receptionist/addreservation' className="btn btn-primary">
                    Click
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default OurRooms;

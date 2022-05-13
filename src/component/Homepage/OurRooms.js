import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import roomData from "../data/rooms";
import { useLocation, useNavigate } from "react-router-dom";
import RoomService from "../../services/RoomService";

const OurRooms = () => {
  const [rooms, setRooms] = useState([]);

  let navigate = useNavigate();

  const handlebook = (roomId) => {
    // navigate("/receptionist/addGuest")
    navigate("/receptionist/addreservation", { state: { id: roomId } });
  };

  useEffect(() => {
    /* Fetching data from the backend and setting it to the state. */

    RoomService.getAllRooms()
      .then((response) => {
        setRooms(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="display-4 text-center">Our Rooms</h1>
      <div className="row d-flex justify-content-center align-items-center flex-direction-column">
        {rooms.map((room, index) => (
          <div className="col-3 m-4" key={index}>
            <div className="card text-center" style={{ width: "20rem" }}>
              <img
                className="card-img-top room-card-img"
                src={roomData[index]?.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-id">{room.roomId}</h4>
                <h5 className="card-title">{room.roomType}</h5>
                <p className="card-text">Rs. {room.roomRent}/Night</p>
                {/* <button onclick={()=>handlebook(room.id)}>Book Now!</button> */}
                {room.roomAvailable ? (
                  <Link
                    to={`/receptionist/addreservation?id=${room.roomId}&price=${room.roomRent}`}
                    className="btn btn-primary"
                  >
                    Book Now
                  </Link>
                ) : (
                  <Link to="" className="btn btn-disabled">
                    Not Available
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default OurRooms;

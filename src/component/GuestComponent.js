import React, { useState, useEffect } from "react";
import GuestService from '../services/GuestService';


function GuestComponent() {

    const [guest, setGuest] = useState([]);

  useEffect(() => {
    getGuest();
  }, []);

  const getGuest = () => {
    GuestService.getGuest().then((response) => {
      setGuest(response.data);
      console.log(response.data);
    });
  };

  return (
    <div>
        <h1 className="text-center">Guest Details</h1>
        <table  className="table table-striped">
            <thead>
                <tr>
                    <td>guestId</td>
                    <td>phoneNumber</td>
                    <td>company</td>
                    <td>name</td>
                    <td>email</td>
                    <td>gender</td>
                    <td>Address</td>
                </tr>
            </thead>

            <tbody>
            {guest.map((guests) => (
              <tr key={guests.guestId}> 
                <td> {guests.guestId}</td>
                <td> {guests.phoneNumber}</td>
                <td> {guests.company}</td>
                <td> {guests.name}</td>
                <td> {guests.email}</td>
                <td> {guests.gender}</td>
                <td> {guests.address}</td>
              </tr>
            ))}
            </tbody>

        </table>
    </div>
  );
}

export default GuestComponent


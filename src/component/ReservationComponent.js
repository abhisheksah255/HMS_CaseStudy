import React, { useState, useEffect } from "react";
import ReservationService from '../services/ReservationService';


function ReservationComponent() {

    const [reservation, setReservation] = useState([]);

  useEffect(() => {
    getReservation();
  }, []);

  const getReservation = () => {
    ReservationService.getReservation().then((response) => {
      setReservation(response.data);
      console.log(response.data);
    });
  };

  return (
    <div>
        <h1 className="text-center">Reservation Details</h1>
        <table  className="table table-striped">
            <thead>
                <tr>
                    <td>reservationCode</td>
                    <td>numberofchildren</td>
                    <td>numberofadults</td>
                    <td>checkinDate</td>
                    <td>checkoutDate</td>
                    <td>status</td>
                    <td>numberofnights</td>
                </tr>
            </thead>

            <tbody>
            {reservation.map((reservations) => (
              <tr key={reservations.code}> 
                <td> {reservations.code}</td>
                <td> {reservations.numberofchildren}</td>
                <td> {reservations.numberofadults}</td>
                <td> {reservations.checkinDate}</td>
                <td> {reservations.checkoutDate}</td>
                <td> {reservations.status}</td>
                <td> {reservations.numberofnights}</td>
              </tr>
            ))}
            </tbody>

        </table>
    </div>
  );
}

export default ReservationComponent


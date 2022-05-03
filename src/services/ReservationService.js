import axios from "axios";

// const RESERVATION_SERVICE_REST_API_URL = "http://localhost:8082/HMS/reservation/allreservation";

// class ReservationService{

//     getReservation(){
//        return axios.get(RESERVATION_SERVICE_REST_API_URL);
//     }

// }
// export default new ReservationService();

const RESERVATION_GET_ALL_URL='http://localhost:8082/HMS/reservation/allreservation';
const RESERVATION_ADD_URL='http://localhost:8082/HMS/reservation/addreservation';
const RESERVATION_DELETE_URL='http://localhost:8082/HMS/reservation/delete';

class ReservationService{

    getAllReservations(){
        return axios.get(RESERVATION_GET_ALL_URL);
    }

    addReservations(reservation){
        return axios.post(RESERVATION_ADD_URL,reservation);
    }

    deleteReservation(reservationId){
        return axios.delete(RESERVATION_DELETE_URL + '/' + reservationId);
    }
}
export default new ReservationService();
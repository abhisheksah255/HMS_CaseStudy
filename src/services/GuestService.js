import axios from "axios";

// const GUEST_SERVICE_REST_API_URL = "http://localhost:8081/HMS/guest/allguest";

// class GuestService{

//     getGuest(){
//        return axios.get(GUEST_SERVICE_REST_API_URL);
//     }

// }
// export default new GuestService();

const GUEST_GET_ALL_URL='http://localhost:8081/HMS/guest/allguest';
const GUEST_ADD_URL='http://localhost:8081/HMS/guest/addguest';
const GUEST_DELETE_URL='http://localhost:8081/HMS/guest/delete';

class GuestService{

    getAllGuests(){
        return axios.get(GUEST_GET_ALL_URL);
    }

    addGuests(guest){
        return axios.post(GUEST_ADD_URL,guest);
    }

    deleteGuest(guestId){
        return axios.delete(GUEST_DELETE_URL + '/' + guestId);
    }

    updateGuest(guestId){
        return
    }
}
export default new GuestService();
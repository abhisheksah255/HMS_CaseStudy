import axios from 'axios';
const ROOM_GET_ALL_URL='http://localhost:8084/HMS/room/allroom';
const ROOM_ADD_URL='http://localhost:8084/HMS/room/addroom';
const ROOM_DELETE_URL='http://localhost:8084/HMS/room/delete';
const ROOM_AVAILABLE='http://localhost:8084/HMS/room/search';

class RoomService{

    getAllRooms(){
        return axios.get(ROOM_GET_ALL_URL);
    }

    addRooms(room){
        return axios.post(ROOM_ADD_URL,room);
    }

    deleteRoom(roomId){
        return axios.delete(ROOM_DELETE_URL + '/' + roomId);
    }

    getAvailableRooms(roomAvailable){
        return axios.get(ROOM_AVAILABLE + '/' + roomAvailable);
    }
}
export default new RoomService();
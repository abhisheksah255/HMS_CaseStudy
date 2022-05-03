import axios from 'axios';
const STAFF_GET_ALL_URL='http://localhost:8083/HMS/staff/allstaff';
const STAFF_ADD_URL='http://localhost:8083/HMS/staff/addstaff';
const STAFF_DELETE_URL='http://localhost:8083/HMS/staff/delete';
const STAFF_GET_BY_ID_URL='http://localhost:8083/HMS/staff/get';

class StaffService{

    getAllStaff(){
        return axios.get(STAFF_GET_ALL_URL);
    }
    getById(staffId){
        return axios.get(STAFF_GET_BY_ID_URL+'/'+staffId);
    }

    addStaff(staff){
        return axios.post(STAFF_ADD_URL,staff);
    }

    deleteStaff(staffId){
        return axios.delete(STAFF_DELETE_URL + '/' + staffId);
    }
}
export default new StaffService();
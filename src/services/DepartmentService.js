import React from 'react'
import axios from "axios";

const DEPARTMENT_GET_ALL_URL='http://localhost:8086/HMS/department/alldepartment';
const DEPARTMENT_ADD_URL='http://localhost:8086/HMS/department/adddepartment';
const DEPARTMENT_DELETE_URL='http://localhost:8086/HMS/department/delete';


class DepartmentService{
 
    
       getAllDepartments(){
        return axios.get(DEPARTMENT_GET_ALL_URL);
    }

    addDepartment(department){
        return axios.post(DEPARTMENT_ADD_URL,department);
    }

    deleteDepartment(departmentId){
        return axios.delete(DEPARTMENT_DELETE_URL + '/' + departmentId);
    }

    updateDepartment(departmentId){
        return;
    }
  
}

export default new DepartmentService();

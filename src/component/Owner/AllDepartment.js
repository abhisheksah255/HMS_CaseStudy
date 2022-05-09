import { Button,Link } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import DepartmentService from '../../services/DepartmentService'
import './AllStyle.css'
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

toast.configure()


export default function AllDepartment() {
    const [department,setDepartment]= useState([]);
    let navigate=useNavigate();

    useEffect(() => {
        getAllDepartments()
    },[])

    const getAllDepartments=() =>{
        DepartmentService.getAllDepartments().then((response) =>{
            setDepartment(response.data)
            console.log(response.data)
        }).catch((error) =>{
            console.error(error);

        })
    };
    const deleteDepartment=(departmentId)=>{
DepartmentService.deleteDepartment(departmentId).then((response) =>{
    console.log(departmentId);
    toast('department data deleted successfully..................');
          getAllDepartments();
}).catch(error=>{
    console.log(error);
})
    }
    const back=()=>{
        navigate('/owner/adddepartment');
    }

  return (
    <div>
     <Button variant='outlined'onClick={()=>back()}>Back</Button>
            <div style={{ maxWidth: "100%", width: "80%" }} className='container'   >
            <br></br><br></br><br></br>
            <h1>Department List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Department No.of Employee</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        department.map(
                            departmentDetails=>
                                <tr key={departmentDetails.departmentID}>
                                    <td>{departmentDetails.departmentID}</td>
                                    <td>{departmentDetails.departmentName}</td>
                                    <td>{departmentDetails.desc}</td>
                                    <td>{departmentDetails.no_of_Emp}</td>
            
                             
                                    <td>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteDepartment(departmentDetails.departmentID)}>Delete</Button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
 
        </div>
    </div>
  )
}

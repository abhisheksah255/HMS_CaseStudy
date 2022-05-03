import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import StaffService from '../../services/StaffService';
import './AllStyle.css'


export default function AllInventory() {

    const [staff, setStaff] = useState([])
    // for Rest API call 
    useEffect(() => {
        getAllStaff()
    }, [])
    const getAllStaff=()=>{
        StaffService.getAllStaff().then((response)=>{
            setStaff(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    };
    const deleteStaff=(staffId)=>{
        StaffService.deleteStaff(staffId).then((response)=>{
            console.log(staffId);
            getAllStaff();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
        <div className="staff-container">
            
            <div style={{ maxWidth: "100%", width: "90%" }} className='container'>
            <br></br><br></br><br></br>
            <h1>Staff List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Address</th>
                        <th>Employee Email</th>
                        <th>Employee Gender</th>
                        <th>Employee Post</th>
                        <th>Employee Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staff.map(
                            staffDetails=>
                                <tr key={staffDetails.employeeId}>
                                    <td>{staffDetails.employeeId}</td>
                                    <td>{staffDetails.employeeName}</td>
                                    <td>{staffDetails.employeeAddress}</td>
                                    <td>{staffDetails.employeeEmail}</td>
                                    <td>{staffDetails.employeeGender}</td>
                                    <td>{staffDetails.employeePost}</td>   
                                    <td>{staffDetails.employeeSalary}</td>
                                    <td>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteStaff(staffDetails.employeeId)}>Delete</Button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}

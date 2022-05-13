import React,{ useState} from 'react'
import DepartmentService from '../../services/DepartmentService'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { Button,TextField } from '@material-ui/core'


toast.configure()
export default function AddDepartment() {

    let navigate=useNavigate();
   
    const [departmentId, setDepartmentId]= useState('');
    const [departmentName, setDepartmentName]= useState('');
    const [desc, setDesc]=useState('');
    const [no_of_Emp, setNo_of_Emp]=useState('');
  
    const saveDepartment=(e)=>{
        e.preventDefault();

        if(departmentId&&departmentName&&desc&&no_of_Emp){
            console.log(departmentId,departmentName,desc,no_of_Emp);
            toast('Department Added Successfully');
            navigate('/owner/Alldepartment');
        }

        const department={departmentId,departmentName,desc,no_of_Emp}
        DepartmentService.addDepartment(department).then((response)=>{
            console.log(response.data);
           

        }).catch((error)=>{
            console.log(error)
            toast('Please fill correct Information....');
        })
    }


    return (

    <>

        <div style={{ marginTop: 100, maxWidth: "100%", width: "80%" }} className="container">
            <h1>Enter Department Details</h1>

         <TextField variant="outlined" label="Department ID" placeholder=" Enter Department ID"
         style={{width:"100%"}}
         value={departmentId}
         onChange={(e)=>setDepartmentId(e.target.value)}
         error={departmentId === ""}
         helperText={departmentId === "" ? "Fill the Department Id like--501,502......" : " "}>
     </TextField>

     <TextField variant="outlined" label="Department Name" placeholder=" Enter Department Name"
          style={{width:"100%"}}
         value={departmentName}
         onChange={(e)=>setDepartmentName(e.target.value)}
         error={departmentId === ""}
         helperText={departmentId === "" ? "Fill the Department Name like--AccountDepaertment......" : " "}>
     </TextField>
     
     <TextField variant="outlined" label="Department Desc" placeholder=" Enter Department Descriptions.."
          style={{width:"100%"}}
         value={desc}
         onChange={(e)=>setDesc(e.target.value)}
         error={desc === ""}
         helperText={desc === "" ? "Fill the DepartmentDescription.........." : " "}>
     </TextField>
     
     <TextField variant="outlined" label="Number Of Employee" placeholder=" Fill the Number Of Employee"
          style={{width:"100%"}}
         value={no_of_Emp}
         onChange={(e)=>setNo_of_Emp(e.target.value)}
         error={no_of_Emp === ""}
         helperText={no_of_Emp === "" ? "Fill Numbers ......" : " "}>
     </TextField>

     <Button variant='contained' onClick={saveDepartment}>
                submit
            </Button>
           
                <Link to='/owner' className='btn btn-primary m-3'>Back</Link>
       
        </div>
    </>
  )
}


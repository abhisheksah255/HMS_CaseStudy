import React,{ useState} from 'react'
import DepartmentService from '../../services/DepartmentService'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { Button,TextField } from '@material-ui/core'


toast.configure()
export default function AddDepartment() {

    let navigate=useNavigate();
   
    const [departmentID, setDepartmentID]= useState('');
    const [departmentName, setDepartmentName]= useState('');
    const [desc, setDesc]=useState('');
    const [no_of_Emp, setNo_of_Emp]=useState('');
    const [submitClicked, setSubmitClicked] = useState(false)    

    const saveDepartment=(e)=>{
    setSubmitClicked(true)
        e.preventDefault();

        if(departmentID&&departmentName&&desc&&no_of_Emp){
            console.log(departmentID,departmentName,desc,no_of_Emp);
            
            navigate('/owner/Alldepartment');
        }

        const department={departmentID,departmentName,desc,no_of_Emp}
        DepartmentService.addDepartment(department).then((response)=>{
            console.log(response.data);
            toast('Department Added Successfully');

        }).catch((error)=>{
            console.log(error)
            toast('Please fill correct Information....');
        })
    }
    return (

    <>

        <div style={{ marginTop: 100, maxWidth: "100%", width: "80%" }} className="container">
            <h1>Enter Department Details</h1>

         <TextField variant="outlined" label="Department ID"
         type="number"
         placeholder=" Enter Department ID"
         style={{width:"100%"}}
         value={departmentID}
         onChange={(e)=>setDepartmentID(e.target.value)}
         error={submitClicked && departmentID === ""}
         helperText={submitClicked && departmentID === "" ? "Fill the Department Id like--3001,3002......" : " "}>
     </TextField>

     <TextField variant="outlined" label="Department Name"
     type="text"
     placeholder=" Enter Department Name"
          style={{width:"100%"}}
         value={departmentName}
         onChange={(e)=>setDepartmentName(e.target.value)}
         error={submitClicked && departmentName === ""}
         helperText={submitClicked && departmentName === "" ? "Fill the Department Name like--AccountDepartment......" : " "}>
     </TextField>
     
     <TextField variant="outlined" label="Department Desc" placeholder=" Enter Department Descriptions.."
          style={{width:"100%"}}
         value={desc}
         onChange={(e)=>setDesc(e.target.value)}
         error={submitClicked && desc === ""}
         helperText={submitClicked && desc === "" ? "Fill the DepartmentDescription.........." : " "}>
     </TextField>
     
     <TextField variant="outlined" label="Number Of Employee" 
     type="number"
     placeholder=" Fill the Number Of Employee"
          style={{width:"100%"}}
         value={no_of_Emp}
         onChange={(e)=>setNo_of_Emp(e.target.value)}
         error={submitClicked && no_of_Emp === ""}
         helperText={submitClicked && no_of_Emp === "" ? "Fill Numbers ......" : " "}>
     </TextField>

     <Button variant='contained' onClick={saveDepartment}>
                submit
            </Button>
           
                <Link to='/owner' className='btn btn-primary m-3'>Back</Link>
       
        </div>
    </>
  )
}


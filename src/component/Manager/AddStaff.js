import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import StaffService from '../../services/StaffService'
import { Link, useNavigate } from 'react-router-dom'


const useStyles=makeStyles({
    id:{
        width:1000,
    },
    address:{
        width:1000
    },
    name:{
        width:1000
    },
    email:{
        width:1000
    },
    gender:{
        width:1000
    },
    post:{
        width:1000
    },
    salary:{
        width:1000
    }
})
export default function AddStaff() {

    let navigate=useNavigate();

const [employeeId,setEmployeeId]=useState('')
const [employeeName,setEmployeeName]=useState('')
const [employeeAddress,setEmployeeAddress]=useState('')
const [employeeEmail,setEmployeeEmail]=useState('')
const [employeeGender,setEmployeeGender]=useState('')
const [employeePost,setEmployeePost]=useState('')
const [employeeSalary,setEmployeeSalary]=useState('')

   
   

    const saveStaff =(e)=>{
    e.preventDefault();

    const staff={employeeId,employeeName,employeeAddress,employeeEmail,employeeGender,employeePost,employeeSalary}
    StaffService.addStaff(staff).then((response)=>{
        console.log(response.data)
        navigate('/manager/Allstaff')
    }).catch(error=>{
        console.log(error)
    })
}
    const classes=useStyles()
    return (
        <>
   
            <div style={{ marginTop: 100, maxWidth: "100%", width: "80%" }} className='container'>
            <br></br><br></br>
            <h1>Enter Staff Details</h1>

{/* <form action="container">

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</form> */}



<TextField variant="outlined" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.id} value={employeeId} onChange={(e)=>setEmployeeId(e.target.value)}
                error={employeeId === ""}
                helperText={employeeId === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>
            
            <TextField variant="outlined" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.name} value={employeeName} onChange={(e)=>setEmployeeName(e.target.value)}
                error={employeeName === ""}
                helperText={employeeName === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>
            
            <TextField variant="outlined" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.address} value={employeeAddress} onChange={(e)=>setEmployeeAddress(e.target.value)}
                error={employeeAddress === ""}
                helperText={employeeAddress === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>

            <TextField variant="outlined" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.email} value={employeeEmail} onChange={(e)=>setEmployeeEmail(e.target.value)}
                error={employeeEmail === ""}
                helperText={employeeEmail === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>

            <TextField variant="outlined" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.gender} value={employeeGender} onChange={(e)=>setEmployeeGender(e.target.value)}
                error={employeeGender === ""}
                helperText={employeeGender === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>

            <TextField variant="outlined" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.post} value={employeePost} onChange={(e)=>setEmployeePost(e.target.value)}
                error={employeePost === ""}
                helperText={employeePost === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>

            <TextField variant="outlined" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.salary} value={employeeSalary} onChange={(e)=>setEmployeeSalary(e.target.value)}
                error={employeeSalary === ""}
                helperText={employeeSalary === "" ? "Empty!" : " "}>
            </TextField>

            <br></br><br></br>
            <Button variant='contained' onClick={saveStaff}>Submit</Button>;
            <Button variant='outlined'><Link to='/manager'>Back</Link></Button>
        </div>
      
        </>
    )
}
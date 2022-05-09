import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import GuestService from '../../services/GuestService'
import { Link, useNavigate } from 'react-router-dom'

// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const useStyles=makeStyles({
    id:{
        width:1000,
    },
    name:{
        width:1000
    },
    contact:{
        width:1000
    },
    email:{
        width:1000
    },
    gender:{
        width:1000
    },
    address:{
        width:1000
    }
})
export default function AddGuest() {

  let navigate=useNavigate();




    const [guestId, setGuestId] = useState('')
    const [name, setGuestName] = useState('')
    const [phoneNumber, setGuestPhoneNumber] = useState('')
    // const [guestAddress, setGuestAddress] = useState('')
    const [email, setGuestEmail] = useState('')
    const [gender, setGuestGender] = useState('')
    const [address, setGuestAddress] = useState('')
    

    const saveGuest =(e)=>{
      e.preventDefault();
  
      const guest={guestId,name,phoneNumber,email,gender,address}
      GuestService.addGuests(guest).then((response)=>{
          console.log(response.data)
          toast('Guest Added Successfully');
          navigate('/receptionist/AllGuest');
      }).catch(error=>{
          console.log(error)
      })
  }
    const classes=useStyles()
    return (
        <>
        <div style={{ marginTop: 100, maxWidth: "100%", width: "80%" }} className='container'>
            <br></br><br></br>
            <h1>Enter Guest Details</h1>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest ID" placeholder='Enter a Guest Id' 
                className={classes.id}
                value={guestId} onChange={(e)=>setGuestId(e.target.value)}
                error={guestId === ""}
                helperText={guestId === "" ? "Fill the Guest Id like--101,102......" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Name" placeholder='Enter the guest name'
                 className={classes.name}
                 value={name} onChange={(e)=>setGuestName(e.target.value)}
                 error={name === ""}
                helperText={name === "" ? "Enter the Guest Name..." : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Contact" placeholder='Enter the contact of guest'
                 className={classes.contact}
                 value={phoneNumber} onChange={(e)=>setGuestPhoneNumber(e.target.value)}
                 error={phoneNumber === ""}
                helperText={phoneNumber === "" ? "Fill 10 digit phone Number" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Email" placeholder='Enter the email of guest'
                className={classes.email}
                value={email} onChange={(e)=>setGuestEmail(e.target.value)}
                error={email === ""}
                helperText={email === "" ? "Fill the guestemail like abhi@gmail.com,deepak@gmail.com....." : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Gender" placeholder='Enter the gender of guest'
                className={classes.gender}
                value={gender} onChange={(e)=>setGuestGender(e.target.value)}
                error={gender === ""}
                helperText={gender === "" ? "fill here Male/Female" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Address" 
            placeholder='Enter the address of guest'
                className={classes.address} value={address} onChange={(e)=>setGuestAddress(e.target.value)}
                error={address === ""}
                helperText={address === "" ? "Fill the Guest address " : " "}>
            </TextField>
            <br></br><br></br>
            <Button variant='contained' onClick={saveGuest}>
                submit
            </Button>

            <Button variant='contained'>
                <Link to='/receptionist/addReservation'>Add Reservation</Link>
            </Button>
                <Button variant='outlined'><Link to='/receptionist' >Back</Link></Button>
        </div>
       

           
        </>
    )
}

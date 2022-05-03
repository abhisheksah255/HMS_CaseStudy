import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import GuestService from '../../services/GuestService'
import { Link, useNavigate } from 'react-router-dom'



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
          navigate('/receptionist/AllGuest')
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
                value={guestId} onChange={(e)=>setGuestId(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Name" placeholder='Enter the guest name'
                 value={name} onChange={(e)=>setGuestName(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Contact" placeholder='Enter the contact of guest'
                 value={phoneNumber} onChange={(e)=>setGuestPhoneNumber(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Email" placeholder='Enter the email of guest'
                value={email} onChange={(e)=>setGuestEmail(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Gender" placeholder='Enter the gender of guest'
                c value={gender} onChange={(e)=>setGuestGender(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest Address" 
            error
            id="outlined-error-helper-text"
            
            placeholder='Enter the address of guest'
                className={classes.address} value={address} onChange={(e)=>setGuestAddress(e.target.value)}>
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
       

            {/* <div style={{ marginTop: 100, maxWidth: "100%", width: "80%" }} className='container'>
            <br></br><br></br>
            <h1>Enter Guest Details</h1>
            
            <form>


            <div className="form-outline mb-1">
                <label className="form-label" for="form3Example1cg" style={{ fontFamily: "Monospace"}}><strong>GuestId</strong></label>
                  <input type="text" id="GuestId" className={classes.id} value={guestId} onChange={(e)=>setGuestId(e.target.value)}/>
                  
                </div>

                <div className="form-outline mb-1">
                <label className="form-label" for="form3Example1cg" style={{ fontFamily: "Monospace"}}><strong>GuestphoneNumber</strong></label>
                  <input type="text" id="phonenumber" className={classes.phoneNumber} value={guestPhoneNumber} onChange={(e)=>setGuestPhoneNumber(e.target.value)}/>
                  </div>
               
                <div className="form-outline mb-1">
                <label className="form-label" for="form3Example1cg" style={{ fontFamily: "Monospace"}}><strong>GuestName</strong></label>
                  <input type="text" id="Guestname" className={classes.name} value={guestName} onChange={(e)=>setGuestName(e.target.value)}/>
                  
                </div>
                <div className="form-outline mb-1">
                <label className="form-label" for="form3Example1cg" style={{ fontFamily: "Monospace"}}><strong>GuestId</strong></label>
                  <input type="text" id="GuestEmail" className={classes.email} value={guestEmail} onChange={(e)=>setGuestEmail(e.target.value)}/>
                  
                </div>
            

                <div className="form-outline mb-1">
                <label className="form-label" for="form3Example1cg" style={{ fontFamily: "Monospace"}}><strong>GuestGender</strong></label>
                  <input type="text" id="GuestGender" className={classes.gender} value={guestGender} onChange={(e)=>setGuestGender(e.target.value)}/>
                  
                </div>

                <div className="form-outline mb-1">
                <label className="form-label" for="form3Example1cg" style={{ fontFamily: "Monospace"}}><strong>GuestId</strong></label>
                  <input type="text" id="GuestAddress" className={classes.address} value={guestAddress} onChange={(e)=>setGuestAddress(e.target.value)}/>
                  
                </div>

            <button className='btn-btn-submit' onClick={(e)=>saveGuest(e)}>
                Add Guest
            </button>
            <button className='btn-btn-primary'>
                <Link to='/receptionist/addReservation'>Add Reservation</Link>
            </button>
                <button className='btn-btn-submit' ><Link to='/receptionist' >Back</Link></button>

            </form>
                    </div> */}
        
        </>
    )
}

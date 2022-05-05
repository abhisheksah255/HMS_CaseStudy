import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ReservationService from '../../services/ReservationService'
import { Link,useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


toast.configure()
const useStyles=makeStyles({
    resid:{
        width:1000,
    },
    rid:{
        width:1000
    },
    gid:{
        width:1000
    },
    checkin:{
        width:1000
    },
    checkout:{
        width:1000
    },
    numguest:{
        width:1000
    },
    price:{
        width:1000
    }
})
export default function AddReservation() {

    let navigate=useNavigate();

    const notify = ()=>{
 
        // Calling toast method by passing string
        
    }

    const [reservationId, setReservationId] = useState('')
    const [roomId, setRoomId] = useState('')
    const [guestId, setGuestId] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [numOfGuest, setNumOfGuest] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
   

    const saveReservation =(e)=>{
    e.preventDefault();

    const reservation={reservationId,roomId,guestId,checkInDate,checkOutDate,numOfGuest,totalPrice}
    ReservationService.addReservations(reservation).then((response)=>{
        console.log(response.data)
        toast('data Added successfully');
        navigate('/receptionist/Allreservation');
       
    }).catch(error=>{
        console.log(error)
    })
}
    const classes=useStyles()
    return (
        <>
        
            <div style={{ marginTop: 100, maxWidth: "100%", width: "80%" }} className='container'>
            <br></br><br></br>
            <h1>Enter Reservation Details</h1>
            <TextField variant="outlined" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.resid} value={reservationId} onChange={(e)=>setReservationId(e.target.value)}
                error={reservationId === ""}
                helperText={reservationId === "" ? "Enter reservation Id like 100001,100002....!" : " "}>
            </TextField>
            
            <br></br><br></br>
            <TextField variant="outlined" label="Room ID" placeholder='Enter the Room Id'
                className={classes.rid} value={roomId} onChange={(e)=>setRoomId(e.target.value)}
                error={roomId === ""}
                helperText={roomId === "" ? "enter valid room id  like 1001,1002....." : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Guest ID" placeholder='Enter the Guest Id'
                className={classes.gid} value={guestId} onChange={(e)=>setGuestId(e.target.value)}
                error={guestId === ""}
                helperText={guestId === "" ? "Enter valid guest id like 101,102,103,104....." : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" 
            label="CheckIn Date" 
                className={classes.checkin} value={checkInDate} 
                type="date"
                defaultValue="mm-dd-yyyy"
                InputLabelProps={{shrink: true}}
                onChange={(e)=>setCheckInDate(e.target.value)}
                error={checkInDate === ""}
                helperText={checkInDate === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="CheckOut Date" 
                className={classes.checkout} value={checkOutDate} 
                type="date"
                defaultValue="dd-mm-yyyy"
                 InputLabelProps={{shrink: true }}
                onChange={(e)=>setCheckOutDate(e.target.value)}
                error={checkOutDate === ""}
                helperText={checkOutDate === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" 
            label="Number of Guest" placeholder='Enter the number of guest'
                className={classes.numguest} value={numOfGuest} 
                onChange={(e)=>setNumOfGuest(e.target.value)}
                error={numOfGuest === ""}
                helperText={numOfGuest === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Total Price" placeholder='Enter the total price'
                className={classes.price} value={totalPrice*numOfGuest} onChange={(e)=>setTotalPrice(e.target.value)}
                error={totalPrice === ""}
                helperText={totalPrice === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>
            <Button variant='contained' onClick={saveReservation}>
                submit
            </Button>
{/* <Button variant='contained' onClick={()=>
{
    notify();
    saveReservation();
}} >
                submit
            </Button> */}

            <Button variant='outlined'><Link to='/receptionist'>Back</Link></Button>
        </div>
       
        </>
    )
}
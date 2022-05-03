import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import RoomService from '../../services/RoomService'
import { Link,useNavigate } from 'react-router-dom'


const useStyles=makeStyles({
    id:{
        width:1000,
    },
    type:{
        width:1000
    },
    rent:{
        width:1000
    },
    available:{
        width:1000
    }
})
export default function AddRoom() {

    let navigate=useNavigate();

    const [roomId, setRoomId] = useState('')
    const [roomType, setRoomType] = useState('')
    const [roomRent, setRoomRent] = useState('')
    const [roomAvailable, setRoomAvailable] = useState('')
    // const history=useHistory()

    const saveRoom =(e)=>{
    e.preventDefault();

    const room={roomId,roomType,roomRent,roomAvailable}
    RoomService.addRooms(room).then((response)=>{
        console.log(response.data)
        navigate('/manager/AllRoom')
    }).catch(error=>{
        console.log(error)
    })
}
    const classes=useStyles()
    return (
        <>
  
            <div style={{ maxWidth: "100%", width: "50%", marginTop: 100 }} className='container'>
            <br></br><br></br>
            <h1>Enter Room Details</h1>
            
            
            <TextField variant="outlined" label="Room ID" placeholder='Enter a Room Id' className={classes.id}
                value={roomId} onChange={(e)=>setRoomId(e.target.value)}
                error={roomId === "Room ID cannnot be null"}
                helperText={roomId === "" ? "Room ID should be minimum 4 digits" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Room Type" placeholder='Enter the type of room'
                className={classes.type} value={roomType} onChange={(e)=>setRoomType(e.target.value)}
                error={roomType === "Room type be null"}
                helperText={roomType === "" ? "Room type must be define " : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Room Rent" placeholder='Enter the rent of room'
                className={classes.rent} value={roomRent} onChange={(e)=>setRoomRent(e.target.value)}
                error={roomRent === ""}
                helperText={roomRent === "" ? "Room rent cannnot be null!" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Room Available" placeholder='Enter the availability of room (true/false)'
                className={classes.available} value={roomAvailable} onChange={(e)=>setRoomAvailable(e.target.value)}
                error={roomAvailable === ""}
                helperText={roomAvailable === "" ? "Room available should be minimum 4 digits and should be either 'True' or 'False'" : " "}>
            </TextField>
            <br></br><br></br>
            <Button variant='contained' onClick={saveRoom}>Submit</Button>
            <Button variant='outlined'><Link to='/manager'>Back</Link></Button>
        </div>
     
        </>
    )
}

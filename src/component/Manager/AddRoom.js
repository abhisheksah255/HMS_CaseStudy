import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import {
  Button,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import RoomService from "../../services/RoomService";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


toast.configure()
const useStyles = makeStyles({
  id: {
    width: 1000,
    marginTop:20,
    marginBottom:20,
  },
  type: {
    width: 1000,
    marginTop:20,
    marginBottom:20,
  },
  rent: {
    width: 1000,
    marginTop:20,
    marginBottom:20,
  },
  available: {
    width: 1000,
    marginTop:20,
    marginBottom:20,
  },
});
export default function AddRoom() {
 const classes = useStyles();
    let navigate=useNavigate();

    const [roomId, setRoomId] = useState('')
    const [roomType, setRoomType] = useState('')
    const [roomRent, setRoomRent] = useState('')
    const [roomAvailable, setRoomAvailable] = useState('')
    // const history=useHistory()

    const saveRoom=(e)=>{
        e.preventDefault();

        if (roomId && roomType && roomRent && roomAvailable)
        {
            console.log(roomId,roomType,roomRent,roomAvailable);
            navigate('/manager/AllRoom')
            toast('Room Added successfully');
           
        }
        const room={roomId,roomType,roomRent,roomAvailable}
        RoomService.addRooms(room).then((response)=>{
        console.log(response.data)
        // toast('Room not Added ');
       
       
    }).catch(error=>{
        console.log(error)
        toast('Room not Added ');
        
    })
    }

 
  return (
    <Container>
    
      <div style={{ maxWidth: "100%", width: "100%", marginTop: 20 }} className='container'>
            <br></br><br></br>
            <h1>Enter Room Details</h1>
      <form noValidate autoComplete="off" onSubmit={saveRoom}>
      
        <TextField
          required
          variant="outlined"
          label="Room ID"
          placeholder="Enter a Room Id"
          className={classes.id}
          value={roomId}
          color="primary"
          onChange={(e) => setRoomId(e.target.value)}
          // error={roomId === "Room ID cannnot be null"}
          // helperText={roomId === "" ? "Room ID should be minimum 4 digits" : " "}>
         error={roomId===" "}
         helperText={ roomId === "" ? "" : "Room ID should be minimum 4 digits "}
        />

<TextField required variant="outlined" label="Room Type" placeholder='Enter the type of room'
                className={classes.type} 
                value={roomType} 
                onChange={(e)=>setRoomType(e.target.value)}
                // error={roomType === "Room type be null"}
                // helperText={roomType === "" ? "Room type must be define " : " "}>
                multiline  
                row={4}
                error={roomType===""}
                helperText={roomType? " " : " Room type must be define"}>
            </TextField>

            <TextField required variant="outlined" label="Room Rent" placeholder='Enter the rent of room'
                className={classes.rent}
                 value={roomRent} 
                 onChange={(e)=>setRoomRent(e.target.value)}
                error={roomRent === ""}
                helperText={roomRent === "" ? "Room rent cannnot be null!" : " "}>
            </TextField>

            <TextField required variant="outlined" label="Room Available" placeholder='Enter the availability of room (true/false)'
                className={classes.available}
                 value={roomAvailable} 
                 onChange={(e)=>setRoomAvailable(e.target.value)}
                error={roomAvailable === ""}
                helperText={roomAvailable === "" ? "Room available should be minimum 4 digits and should be either 'True' or 'False'" : " "}>
            </TextField>
            <br></br>
            <Button variant='contained' className=" m-4" color="secondary" onClick={saveRoom}>Submit</Button>
            <Button variant='outlined' color="primary"><Link to='/manager'>Back</Link></Button>
      </form>
      </div>
    </Container>
    
  );
}

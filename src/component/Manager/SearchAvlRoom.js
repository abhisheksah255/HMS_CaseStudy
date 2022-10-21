import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import RoomService from '../../services/RoomService'
import { Link } from 'react-router-dom'


const useStyles=makeStyles({
    search:{
        width:1000,
    }
})


export default function SearchAvlRoom() {
    
    let navigate=useNavigate();

    const classes=useStyles()
    
    const [Rooms, setRooms] = useState([]);
    const [roomAvailable, setRoomAvailable] = useState('');
    const getAvailRooms=()=>{
        RoomService.getAvailableRooms(roomAvailable).then((response)=>{
            setRooms(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    };

    const back=()=>{
        navigate('/profile');
    }
    return (
        <>
       <Button variant='outlined'onClick={()=>back()}>Back</Button>
            <div style={{marginTop:100, maxWidth: "100%", width: "80%" }} className='container'>
           <br></br><br></br>
           <h1>Search for Rooms</h1> 
           <TextField variant="outlined" label="Search Rooms" placeholder='Enter true for searching available rooms'
                className={classes.search} value={roomAvailable} onChange={(e)=>setRoomAvailable(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <Button variant='contained' onClick={()=>getAvailRooms()}>Search Room</Button>
            {/* <Button variant='outlined'>Clear</Button> */}

            <div className="container">
        <br></br>
        <br></br>
        <h1>List Of Rooms Available</h1>

        <br></br>
        <br></br>
        <div>
          <div>
            <table>
              <thead>
                <tr>
                    <th>Room Number</th>
                        <th>Room Type</th>
                        <th>Room Rent</th>
                        <th>Room Available</th>
                        <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                        Rooms.map(
                            roomDetails=>
                                <tr key={roomDetails.roomId}>
                                    <td>{roomDetails.roomId}</td>
                                    <td>{roomDetails.roomType}</td>
                                    <td>{roomDetails.roomRent}</td>
                                    {/* <td>{roomDetails.roomAvailable}</td> */}
                                    <td>{String(roomDetails.roomAvailable)}</td>
                                    <td>
                                        <Button variant='outlined' color='secondary'>Delete</Button>
                                        
                                        {/* <Button variant='outlined' color='primary'>
                                            <Link to='/receptionist/addGuest'>Add Guest</Link>
                                        </Button> */}
                                    </td>
                                </tr>
                        )
                    }
              </tbody>
            </table>
          </div>
        </div>
        </div>
        </div>
      
        </>
    )
}

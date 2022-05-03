import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import GuestService from '../../services/GuestService'
import './AllStyle.css'


export default function AllGuests() {

    const [guest, setGuest] = useState([])
    // for Rest API call 
    useEffect(() => {
        getAllGuests()
    }, [])
    const getAllGuests=()=>{
        GuestService.getAllGuests().then((response)=>{
            setGuest(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    };
    const deleteGuest=(guestId)=>{
        GuestService.deleteGuest(guestId).then((response)=>{
            console.log(guestId);
            getAllGuests();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
        
            <div style={{ maxWidth: "100%", width: "80%" }} className='container'   >
            <br></br><br></br><br></br>
            <h1>Guests List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Guest ID</th>
                        <th>Guest Name</th>
                        <th>Guest Contact</th>
                        <th>Guest Email</th>
                        <th>Guest Gender</th>
                        <th>Guest Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        guest.map(
                            guestDetails=>
                                <tr key={guestDetails.guestId}>
                                    <td>{guestDetails.guestId}</td>
                                    <td>{guestDetails.name}</td>
                                    <td>{guestDetails.phoneNumber}</td>
                                    <td>{guestDetails.email}</td>
                                    <td>{guestDetails.gender}</td>
                                    <td>{guestDetails.address}</td>
                                    <td>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteGuest(guestDetails.guestId)}>Delete</Button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        {/* <Footer></Footer> */}
        </>
    )
}
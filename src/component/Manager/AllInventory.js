import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import InventoryService from '../../services/InventoryService'
import './AllStyle.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


toast.configure()
export default function AllInventory() {

    const [inventory, setInventory] = useState([])

    let navigate=useNavigate();
    // for Rest API call 
    useEffect(() => {
        getAllInventory()
    }, [])

    const getAllInventory=()=>{
        InventoryService.getAllInventory().then((response)=>{
            setInventory(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    };
    const deleteInventory=(inventoryId)=>{
        InventoryService.deleteInventory(inventoryId).then((response)=>{
            console.log(inventoryId);
            toast('Inventory data deleated successfully');
            getAllInventory();
        }).catch(error => {
            console.log(error);
        })
    };
    const back=()=>{
        navigate('/manager');
    }
    
    
    return (
        <>
        <Button variant='outlined'onClick={()=>back()}>Back</Button>
            <div style={{ maxWidth: "100%", width: "90%" }} className='container'>
            <br></br><br></br><br></br>
            <h1>Inventory List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Inventory ID</th>
                        <th>Inventory Name</th>
                        <th>Inventory Type</th>
                        <th>Inventory Stock</th>
                        <th>Works</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventory.map(
                            inventoryDetails=>
                                <tr key={inventoryDetails.inventoryId}>
                                    <td>{inventoryDetails.inventoryId}</td>
                                    <td>{inventoryDetails.inventoryName}</td>
                                    <td>{inventoryDetails.inventoryType}</td>
                                    <td>{inventoryDetails.inventoryStock}</td>
                                    <td>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteInventory(inventoryDetails.inventoryId)}>Delete</Button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
       
        </>
    )
}

import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import InventoryService from '../../services/InventoryService'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";



toast.configure()
const useStyles=makeStyles({
    id:{
        width:1000,
    },
    type:{
        width:1000
    },
    name:{
        width:1000
    },
    stock:{
        width:1000
    }
})
export default function AddInventory() {

    let navigate=useNavigate();

    const [inventoryId, setInventoryId] = useState('')
    const [inventoryType, setInventoryType] = useState('')
    const [inventoryName, setInventoryName] = useState('')
    const [inventoryStock, setInventoryStock] = useState('')
  
    const saveInventory =(e)=>{
    e.preventDefault();

    const inventory={inventoryId,inventoryType,inventoryName,inventoryStock}
    InventoryService.addInventory(inventory).then((response)=>{
        console.log(response.data)
        toast('Inventory Added successfully');
        navigate('/manager/AllInventory')
    }).catch(error=>{
        console.log(error)
    })
}
    const classes=useStyles()
    return (
        <>
        
            <div style={{ marginTop: 100, maxWidth: "100%", width: "80%" }} className='container'>
            <br></br><br></br>
            <h1>Enter Inventory Details</h1>
           
       
            <TextField variant="outlined" label="Inventory ID" placeholder='Enter a Inventory Id' 
                className={classes.id} value={inventoryId} onChange={(e)=>setInventoryId(e.target.value)}
                 error={inventoryId === ""}
                helperText={inventoryId === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Inventory Type" placeholder='Enter the type of inventory'
                className={classes.type} value={inventoryType} onChange={(e)=>setInventoryType(e.target.value)}
                 error={inventoryType === ""}
                helperText={inventoryType === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Inventory Name" placeholder='Enter the name of inventory'
                className={classes.name} value={inventoryName} onChange={(e)=>setInventoryName(e.target.value)}
                 error={inventoryName === ""}
                helperText={inventoryName === "" ? "Empty!" : " "}>
            </TextField>
            <br></br><br></br>

            
           <TextField variant="outlined" label="Inventory Stock" placeholder='Enter the stock of inventory'
                className={classes.stock} value={inventoryStock} onChange={(e)=>setInventoryStock(e.target.value)}
                error={inventoryStock === ""}
                helperText={inventoryStock === "" ? "Empty!" : " "}>
            </TextField>         
            <br></br><br></br>
            <Button variant='contained' onClick={saveInventory}>Submit</Button>
            <Button variant='outlined'><Link to='/manager'>Back</Link></Button>
        </div>
        
        </>
    )
}
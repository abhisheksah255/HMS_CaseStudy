import axios from 'axios';
const INVENTORY_GET_ALL_URL='http://localhost:8085/HMS/inventory/allinventory';
const INVENTORY_ADD_URL='http://localhost:8085/HMS/inventory/addinventory';
const INVENTORY_DELETE_URL='http://localhost:8085/HMS/inventory/delete';
// const INVENTORY_GET_BY_ID_URL='http://localhost:8085/HMS/inventory/get';

class InventoryService{

    getAllInventory(){
        return axios.get(INVENTORY_GET_ALL_URL);
    }
    // getById(inventoryId){
    //     return axios.get(INVENTORY_GET_BY_ID_URL+'/'+inventoryId);
    // }

    addInventory(inventory){
        return axios.post(INVENTORY_ADD_URL,inventory);
    }

    deleteInventory(inventoryId){
        return axios.delete(INVENTORY_DELETE_URL + '/' + inventoryId);
    }
}
export default new InventoryService();
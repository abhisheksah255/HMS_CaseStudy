import axios from 'axios';

class PaymentService{

    PostPayment(amount){
        return axios.post("http://localhost:9090/user/create_order/"+amount);
    }
}
    export default new PaymentService();
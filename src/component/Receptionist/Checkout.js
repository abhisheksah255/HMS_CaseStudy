import React from 'react'
import { Link,useNavigate, useSearchParams} from 'react-router-dom'
import $ from 'jquery';
import logo from '../Image/logohotel.jpg'
import PaymentService from '../../services/PaymentService'
import ReservationService from '../../services/ReservationService'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


toast.configure()
export const Checkout = () => {

  let navigate=useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();
  const totalPrice= searchParams.get("price");

  //to create order........
  const paymentStart=()=>{
    console.log(totalPrice)
  let amount=totalPrice
    // console.log(totalPrice)
    console.log(amount);
    if(amount=='' || amount==null){
      alert("Amount is Required.... first fill some amount...");
      
      return;
    }else{
      PaymentService.PostPayment(amount).then((response) => {
      console.log(response.data);

      if(response.data.status=="created"){
        let options={
          key:'rzp_test_f8TeLywdD5pYOg',
          amount:response.data.amount,
          currency:'INR',
          name:'Hotel Management System',
          description:'Checkout',
          image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F648518415085988700%2F&psig=AOvVaw0IslLepYKCnmLC8zxOWwdP&ust=1652813733206000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLiUu5bZ5PcCFQAAAAAdAAAAABAD",
          order_id:response.data.id,
          handler:function(response){
            // console.log(response.razorpay_payment_id)
            // console.log(response.razorpay_order_id)
            // console.log(response.razorpay_signature)
            console.log(response);
            console.log("payment Successfully received....")
            alert('payment Successfully received!!!!!.....')
            toast('payment Successfully received!!!!!.....');
       
//this is the delete method called to delete the data after checkout

            navigate('/');


        },
        prefill: {
          name: "",
          email: "",
          contact: ""
          },
          notes: {
            address: "Paradise Hotel",
            
            },
            theme: {
            color: "#3399cc",
            }



      };

      let rzp=new window.Razorpay(options);
      rzp.on('payment.failed', function (response){
        console.log(response);

        alert("Sorry payment failed......")
      });
      rzp.open();

      }
     } ).catch((error)=>{
       console.log(error);
       alert("Something went wrong......");
     });

    }

    }
    const cashpay=()=>{
console.log("You have successfully pay your bill..")
toast('payment Successfully received!!!!!.....');
navigate('/');

    }

  return (
    <div>
        <h1 >
        <i class="fa fa-solid fa-person-circle-check" /> Start payment Service...............
        </h1>
        <h1>price={totalPrice}</h1>
        <div className=" text-center">
        <button className="btn m-2" onClick={()=>paymentStart()}>Online Pay....</button>
        <button className="btn m-2" onClick={()=>cashpay()}>Cash Pay....</button>
  
        </div>
  
        </div>
 )
};


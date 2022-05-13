import React from 'react'
import { Link,useNavigate, useSearchParams} from 'react-router-dom'
import $ from 'jquery';
import PaymentService from '../../services/PaymentService'

export const Checkout = () => {

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
          image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmerchant.razer.com%2Fv3%2Fblog%2Fwhats-lacking-to-your-payment-system%2F&psig=AOvVaw1Oy24jKFCfFInROqmQFFXq&ust=1652471874462000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICD3dLf2vcCFQAAAAAdAAAAABAD',
          order_id:response.data.id,
          handler:function(response){
            // console.log(response.razorpay_payment_id)
            // console.log(response.razorpay_order_id)
            // console.log(response.razorpay_signature)
            console.log(response);
            console.log("payment Successfully received....")
            alert('payment Successfully received!!!!!.....')

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

    

//main code...
//we will use ajex to send request

/*
$.ajax(
  {
    url:'http://localhost:9090/user/create_order' ,
    data:JSON.stringify({amount:amount,info:'order_request'}),
    contentType: 'application/json',
    type: 'POST',
    dataType: 'json',
    success: function(response){
      //if correct then it call the success callback
      console.log(response)
      if(response.status=="created"){
        //open payment form..
        let options={
          key:'rzp_live_hRn7yDz2Fht2DS',
          amount:response.amount,
          currency:'INR',
          name:'Hotel Management System',
          description:'Checkout',
          image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmerchant.razer.com%2Fv3%2Fblog%2Fwhats-lacking-to-your-payment-system%2F&psig=AOvVaw1Oy24jKFCfFInROqmQFFXq&ust=1652471874462000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICD3dLf2vcCFQAAAAAdAAAAABAD',
          order_id:response.id,
          handler:function(response){
            console.log(response.razorpay_payment_id)
            console.log(response.razorpay_order_id)
            console.log(response.razorpay_signature)
            console.log("payment Successfully received....")
            alert('payment Successfully received!!!!!.....')

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
  console.log(response.error.code);
  console.log(response.error.description);
  console.log(response.error.source);
  console.log(response.error.step);
  console.log(response.error.reason);
  console.log(response.error.metadata.order_id);
  console.log(response.error.metadata.payment_id);
  alert("Sorry payment failed......")
  });

rzp.open();


      }
    },
    error: function(error){
      //call when error occured
      console.log(error)
      alert("something went wrong...")
    }
  }
)
*/
  // };


  return (
    <div>
        <h1 >
        <i class="fa fa-solid fa-person-circle-check" /> Start payment Service...............
        </h1>
        <h1>price={totalPrice}</h1>
        <div className=" text-center">
        <button className="btn m-2" onClick={()=>paymentStart()}>Start Pay....</button>
        <button className="btn m-2">Cash Pay....</button>
  
        </div>
  
        </div>
 )
};


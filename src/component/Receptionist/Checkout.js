import React from 'react'
import { Link,useNavigate, useSearchParams} from 'react-router-dom'



export const Checkout = () => {

  // let [searchParams, setSearchParams] = useSearchParams();
  // const roomPrice= searchParams.get("price");
  // const totalPrice= searchParams.get("totalPrice");

  // const paymentStarted=()=>{
  //   console.log("payment started.....");
   
  //  console.log(roomPrice)
  //  console.log(totalPrice)

  // };


  return (
    <div>
        <h1 >
        <i class="fa fa-solid fa-person-circle-check" /> You have successfully Checkout...............
        </h1>
        {/* <h1 value={totalPrice}>price="totalPrice"</h1> */}
        </div>
 )
};


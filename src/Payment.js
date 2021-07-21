import React,{useEffect, useState} from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import {Link,useHistory} from "react-router-dom";
import{useStripe,useElements, CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
function Payment(){
    const[{basket,user},dispatch]=useStateValue();
    const history=useHistory();
    const stripe=useStripe();
    const elements=useElements();
    const[error,setError]=useState(null);
    const[disabled,setDisabled]=useState(true);
    const[clientSecret,setClientSecret]=useState(true)
    const[processing,setProcessing]=useState("");
    const[succeded,setSucceeded]=useState(false);
    useEffect(()=>{
//here useeffect is used for basket when ever the no of product of changes
//in basket //generate a special stripe secret which allo us to charge for customer
const getClientSecret=async ()=>{
    const response=await axios({
        method:"POST",
        //stripe expects the total in currency subunits i.e if we wan to pass 10dollar 
        //then want to write 10000because 
        url:`/payments/create?total=${getBasketTotal(basket)*100}`
    })
    setClientSecret(response.data.clientSecret);
}
getClientSecret();
    },[basket])
    console.log("the client secret",clientSecret);
    const handleSubmit=async (event)=>{
      event.preventDefault();
      setProcessing(true);
      const payload=await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card:elements.getElement(CardElement)
          }
}).then(({paymentIntent})=>{
    setSucceeded(true);
    setError(null);
    setProcessing(false);
    history.replace("./orders")
})
    }
    
    const handleChange=(event)=>{
        //used to listen for changes inside card elements 
        //and display any error thatoccur in card details
        setDisabled(event.empty);//if the event is empty then do upcoming action
        setError(event.error?event.error.message:"");

    }
    return(
        < div className="payment">
            <div className="payment-container">
                <h1>
                Checkout{<Link to="/Checkout">({basket?.length})itemss</Link>}</h1>
                 {/*Payment address*/}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>DELIVERY ADDRESS</h3> </div>
                        <div>
                        <p>{user?.email }</p>
                        <p>murugeshpalaya</p>
                        <p>bangalore</p>
                    </div>
                    </div>
               
                {/*review items*/}
                <div className="payment-section">
                <div className="payment-title">
                    <h3>review items and deliverry</h3></div>
                    <div className="payment-item">
                       {basket.map(item=>(
                                <CheckoutProduct
                                title={item.title}
                                id={item.id}
                                image={item.image}
                                price={item.price}  
                                />
                       ))}
                    
                    </div>
                   <button disabled={processing || disabled || "success"}>
                   <span>{processing ? <p>processing</p>:"BUYNOW"}</span>
                   </button>
                    
                </div>
                 {/*type of payment*/}
                <div className="payment-section">
                    <div className="payment-title">
<h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
<form onSubmit={handleSubmit}>
    <CardElement onChange={handleChange}/>
    <div className="payment-priceContainer">
    <CurrencyFormat
      renderText=
    {(value)=>(
            <>
            <p>subtotal({basket.length} items):<strong>1000</strong></p>
            <small className="subtotal-gift">
                <input type="checkbox"/>This order contains a gift
            </small>
            </>
     )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
    prefix={"$"}/>
    <button onClick={(e)=>history.push("/payment")}>Buynow</button>
    </div>
    
</form>
                    </div>
                </div>
               

            </div>
        </div>
    )
}
export default Payment;

import userEvent from "@testing-library/user-event";
import React from "react";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";


function Checkout(){
    const[{basket,user},dispatch]=useStateValue();
    return(
        <div className="checkout">
           <div className="checkout-left">
               <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/I/41CZThHdlXL.jpg"alt=""/>
<div><h3>{!user ? null :user.email}</h3><h2 className="checkout-title">your shopping basket</h2>{basket.map(item=>( 
               <CheckoutProduct
              title={item.title}
              id={item.id}
               image={item.image}
               price={item.price}    
              /> ))}
              </div>


           </div>
           {/*how to remove items from addto basket*/}
           <div className="checkout-right">
               <Subtotal/>
               
             
              
           </div>
        </div>
    )
}
export default Checkout;
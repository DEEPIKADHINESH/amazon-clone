
import React from "react";
import CurrencyFormat from "react-currency-format";
//import CurrencyFormat from "react-currency-formatter";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import {useHistory} from "react-router-dom";
function Subtotal(){
    const history=useHistory();
    const[{basket},dispatch]=useStateValue();
    return(
<div className="subtotal">
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
  
   <button onClick={(e)=>history.push("/payment")}>Proceed to checkout</button>
</div>
    )
}
export default Subtotal;

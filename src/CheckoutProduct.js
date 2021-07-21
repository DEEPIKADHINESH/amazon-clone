import React from "react"
import "./Checkoutproduct.css";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id,title,image,price}){
    const [value, setValue] = React.useState(2);
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        //to remove the element from basket
        dispatch({
            type:"Remove-from-basket",
            id:id,
        })
    }

    return(
       
        <div className="checkoutProduct">
        <img className="checkoutProduct-image" src={image} alt="cart"/>
        <div className="checkoutProduct-info">
            <p className="checkoutProduct-title">{title}</p>
            <Box component="fieldset" mb={4} borderColor="transparent">
        
        <Rating
           name="simple-controlled"
           value={value}
           onChange={(event, newValue) => {
             setValue(newValue);
           }}
         />
       </Box>
            <p className="checkoutProduct-prize"><small>$</small>
            <strong>{price}</strong></p>
        
        <button className="checkoutProduct-basket" onClick={removeFromBasket}>Remove from basket</button>
        </div></div>
    )
}
export default CheckoutProduct;
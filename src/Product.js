import React from "react";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import "./Product.css";
import {useStateValue} from "./StateProvider";
function Product({id,title,image,price}){
  const [value, setValue] = React.useState(2);
  const [{basket},dispatch]=useStateValue();
  console.log("this is basket",basket)
  const addToBasket=()=>{
    dispatch({
      type:"ADD-TO-BASKET",
      item:{
            id:id,
            title:title,
            image:image,
            price:price
      }


    })
  }
 return(
        <div className="product">
            <div className="product-info">
              <p>{id}</p>
                <p>{title}</p>
                <div className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                    <Box component="fieldset" mb={4} borderColor="transparent">
        
       <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
              
              </div></div>
            <img src={image} alt="phone"></img>
                 <button onClick={addToBasket} type="button" >Add To Cart</button>
               
            </div>
            
        
    )
}
export default Product;

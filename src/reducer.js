export const initialState={
    basket:[],//at start the basket is empty
    user:null
}
//how to add amount when item is clicked(Selector)
export const getBasketTotal=(basket)=>{ basket?.reduce((amount,item) =>item.price+amount,0)
}

//reducer is used to push the information when add to basket is given it will push the information from
//addtobasket to data layer
const reducer=(state,action)=>{
    console.log(action);  
    switch(action.type){
        case "ADD-TO-BASKET":
            return{
            ...state,
            basket:[...state.basket,action.item]
            }
            case "Remove-from-basket":
                //it will find the 1st one and return it here
                const index=state.basket.findIndex((basketItem)=>basketItem.id === action.id)
let newBasket=[...state.basket];
if(index>=0){
newBasket.splice(index,1);
}else{
    console.warn(`can't remove the product (id:${action.id}) is not present`)
}
return{
    ...state,
    basket:newBasket
}
case "SET-USER":
    return{
        ...state,
        user:action.user //the user that we dispatched from authUser
    }


                
    default:
        return state
    }
   
}
export default reducer;


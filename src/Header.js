import "./Header.css"
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";



function Header() {
    const[{basket,user},dispatch]=useStateValue();
   const  handleAuth=()=>{
if(user){
    auth.signOut();
}
    }
    return (
         <div className="header">
            <Link to="/">
            <img className="header-logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWFN_mWerF1tA6k_uP4lfRWD1XaXeKeEulrGzXcz4t8ABbl18lcxfVK5701Ws6wM1-_M&usqp=CAU" alt="amazonlogo"/>
       
            </Link>
        
            <div className="header-search">
           <input type="text" className="header-search-input"></input>
           <SearchIcon className="header-search-icon"></SearchIcon>
       </div>
       <div className="header-nav">
           <Link to={!user &&"/Login"} >
<div  onClick={handleAuth}className="header-option">
    <span className="header-optionLineOne">hello{!user ? "Guest" : user.email}</span>
    <span className="header-optionLineTwo">{user ? "signout" : 'signin'}</span>
</div>
</Link>
<div className="header-option">
<span className="header-optionLineOne">Returns</span>
<span className="header-optionLineTwo">SignIn</span>
</div>
<div className="header-option">
<span className="header-optionLineOne">Your</span>
<span className="header-optionLineTwo">Prime</span>
</div>
<Link to="/checkout">
<div className="header-optionBasket"><ShoppingBasketIcon/>
<span className="header-basketCount">{basket?.length}</span></div></Link>
       </div>
       </div>
    )
}

export default Header

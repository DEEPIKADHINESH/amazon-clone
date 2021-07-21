import Home from "./Home";
import React,{useEffect} from "react";
import Header from "./Header";
import {BrowserRouter as Router,Switch ,Route} from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import{Elements} from "@stripe/react-stripe-js";
//going to create alistner using useEffect to see login and logout of user
const promise=loadStripe("pk_test_51JChdhSJvi8u57ulv59bGSW6HVKSuPpoiupFdSzxsSWWnYruhbs5SGu56UfUOmXg9h56ELdaIeGHals4gySDEE9j00PuYGA2ON")
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    //will run only once when app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log("the user is",authUser)
      if(authUser){
//the user is logged in
dispatch({
type:"SET-USER",
user:authUser
})

      }else{
        // the user is logged out
        dispatch({
          type:"SET-USER",
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="app">
    <Header/>
   <Switch>
  
        <Route path="/Login"><Login/></Route>
        <Route path="/Checkout"><Checkout/></Route>
        <Route path="/payment"><Elements stripe={promise}><Payment/></Elements></Route>
    <Route path="/"> <Home/></Route>
    </Switch>
    </div>
    </Router>
  )

  }
export default App;

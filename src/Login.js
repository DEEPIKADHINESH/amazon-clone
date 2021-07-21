import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import "./Login.css";
import {auth} from "./firebase";
function Login(){
    const history=useHistory();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState('');
    const signIn=(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
     .then(auth=>{
        // console.log(auth);
         history.push("/")
     })
        .catch(error=>alert(error.messgae))
    }
    const register=(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //it is used to create new user with emailid and password
            //here when history is used we can able to move the information from auth to where we want 
           console.log(auth);
           //here when user is authenticated then he want s to move to 1st page and for this history is useed
          if(auth){
          history.push('/')
          }
        })
        .catch(error=>alert(error.message))
    }
    return(
        <div className="Login">
            <Link to ="/">
            <img className="login-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWFN_mWerF1tA6k_uP4lfRWD1XaXeKeEulrGzXcz4t8ABbl18lcxfVK5701Ws6wM1-_M&usqp=CAU" alt="amazonlogo"/>
            </Link>
         <div className="login-container">
             <h1>SignIn</h1>
             <form>
                 <h5>Email</h5>
                 <input type="text" value={email}
                 onChange={(event)=>setEmail(event.target.value)}/>
                 
                 <h5>Password</h5>
                 <input type="text" value={password}
                 onChange={(event)=>setPassword(event.target.value)}/>
                 <button onClick={signIn} className="login-SigninButton">SignIn</button>
             </form>
             <p>
                 By signing you agree the terms and conditions of amazon
             </p>
             <button  onClick={register}className="login-registerButton">Create your amazon account</button>


        </div></div>
    )
}
export default Login;
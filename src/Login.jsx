import axios from 'axios';
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { loggedin,loggedout } from './features/auth/authSlice';
import { Link, NavLink, useNavigate } from 'react-router-dom';
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

function Login() {
        const [name,setName]=useState();
        const[email,setEmail]=useState();
        const dispatch=useDispatch();
        const navigate=useNavigate();

  let loginCheck =()=>{
    if(name==null || email==null)
    {
      console.log("invalid user details");
    }
    else
    {
      axios
      .post("http://localhost:5178/createstudent/",
       {
         name,
         email
        },
        {headers}
      )
     
     .then((res)=>{
       console.log((res.data));
       const { userEmail, userName}= res.data;
       dispatch(loggedin({ userEmail, userName}));
       
       if(res.data!="")
         {
           alert("User found");
           navigate("/Homepage");
         }
         else{
           alert("an error occured")
         }
      })
      .catch((err)=>console.log(err));
   }
 
    }
     
  return (
    <div>
      Login<br/>
      Name <input type='text' placeholder='Enter name' onChange={(name)=>{setName(name.target.value)}}></input><br/>
      Email <input type='mail' placeholder='Enter mail id' onChange={(mail)=>{setEmail(mail.target.value)}}></input><br/>
      <button onClick={loginCheck}>Login</button>
      <h6>dont have account  <Link to="/register">Register here</Link></h6>
    </div>

    
  )
}

export default Login

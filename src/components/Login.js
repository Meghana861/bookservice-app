import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const login_url="http://localhost:8080/users-process/login"
const Login=()=>{
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const[message,setMessage]=useState('')
   const navigate=useNavigate();
   const handleLogin=(e)=>{
    e.preventDefault();
    const loginuser={
        email:email,
        password:password
    }
    axios.post(login_url,loginuser)
    .then(response => {
        console.log("Server Response:", response);
        if (response.status === 200 && response.data && response.data.email) {
            setMessage("Login Successful");
            setEmail('');
            setPassword('');
            navigate('/placeorder',{state:{userName:response.data.name,id:response.data.id}});
        } else {
            setMessage("Invalid email or password");
        }
    })
    .catch(error => {
        console.error("Failed to Login", error);
        setMessage("Login Failed. Please check your email and password.");
    });
};
   return(
       <div>
        <h2> LOGIN </h2>
        <div>
        <form onSubmit={handleLogin}>
        <div>
        <label> Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
       </div>
       <div>
        <label> password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
       </div>
       <button type="submit" >Login</button>
        </form>
        </div>
        {message && <p>{message}</p>}
        </div>
   )
}
export default Login;
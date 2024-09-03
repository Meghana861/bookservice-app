import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const book_url="http://localhost:8082/users"
const Register=()=>{
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[phoneNumber,setPhoneNumber]=useState('')
  const[address,setAddress]=useState('')
  const[message,setMessage]=useState('')
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newuser={
      name:name,
      email:email,
      password:password,
      phoneNumber:phoneNumber,
      address:address
     }
    axios.post(book_url,newuser)
    .then(response=>{
      setMessage("Registered Successfully");
      setName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setAddress('');
      navigate('/books')
    }
    )
   
  .catch(error=>{
    console.error('There was an error adding the user!', error);
        setMessage('Failed to add user');
  })
    }
  return(
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
       <div>
        <label> Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
       </div>
       <div>
        <label> Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
       </div>
       <div>
        <label> password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
       </div>
       <div>
        <label>phoneNumber</label>
        <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input>
       </div>
       <div>
        <label> address</label>
        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></input>
       </div>
       <button type="submit" >Register</button>
       {message && <p>{message}</p>}
      </form>
    </div>
  )
}
export default Register;
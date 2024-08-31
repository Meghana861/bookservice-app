import React from "react";
import { useState } from "react";
import axios from "axios";
const book_url='http://localhost:8080/orders';
const PlaceOrder=()=>{
    const [userId,setUserId]=useState('');
    const[orderDate,setOrderDate]=useState('');
    const[bookId,setBookId]=useState('');
    const[message,setMessage]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const neworder={
            userId:userId,
            orderDate:orderDate,
            bookId:bookId
        };
        axios.post(book_url,neworder)
       .then(response=>{
        setMessage("Placed Order Successfully")
        setUserId('')
        setBookId('')
        setOrderDate('')
       })
       .catch(error=>{
        console.error('Couldnt place Order')
        setMessage('Failed to place order')
       })
        }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Place Order</h1>
            <label>User Id:</label>
            <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)}></input>
            <label>Order Date:</label>
            <input type="text" value={orderDate} onChange={(e)=>setOrderDate(e.target.value)}></input>
            <label>Book Id:</label>
            <input type="text" value={bookId} onChange={(e)=>setBookId(e.target.value)}></input>
            <button type="submit">Place Order</button>
            {message&&<p>{message}</p>}
            </form>
        </div>
    )
}
export default PlaceOrder;
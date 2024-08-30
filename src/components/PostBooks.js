import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const postbook_url='http://localhost:8080/books/save'
const PostBook=()=>{
    const[title,setTitle]=useState('')
    const[author,setAuthor]=useState('')
    const[price,setPrice]=useState('')
    const[pubDate,setPubDate]=useState('')
    const[message,setMessage]=useState('')
    const handleSubmit=()=>{
        const newbook={
            title:title,
            author:author,
            price:price,
            pubDate:pubDate
        };
        axios.post(postbook_url,newbook)
        .then(response=>{
            setMessage('Book added successfully');
        setTitle('');
        setAuthor('');
       setPrice('');
    setPubDate('');
  })
  .catch(error=>{
    console.error('There was an error adding the book!', error);
        setMessage('Failed to add book');
  })
    }
    return(
        <div>
        <h2> Add Your Book </h2>
        <form onSubmit={handleSubmit}>
        <div>
        <label>Title</label>
        <input type="text" value={title} onChange={e.target.value}/>
        </div>
        <div>
            <label>Author</label>
            <input typr="text" value={author} onChange={e.target.value}/>
        </div>
        <div>
            <label>Price</label>
            <input typr="text" value={price} onChange={e.target.value}/>
        </div>
        <div>
            <label>PubDate</label>
            <input typr="text" value={PubDate} onChange={e.target.value}/>
        </div>
       <button type="submit">Add Book</button>
        </form>
        </div>
    )
}
export default PostBook;
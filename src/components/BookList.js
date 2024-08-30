import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const book_url='http://localhost:8080/books';
const BookList=()=>{
  const[books,setBooks]=useState('');
  useEffect(()=>{
    axios.get(book_url)
  .then(
    response=>setBooks(response.data)
  )
  .catch(error=>console.error('Error Fetching books'))
},[]);


  let content;
   if(books.length===0){
    content=<p>No Books Available</p>;
}
else{
    content=(
    <ul>
      {books.map(book=>
        (<li key={book.id}><bold>{book.title} by {book.author}</bold>
        </li>
    ))}
    </ul>
    )
}
  return (
    <div>
       <h2> List of Books</h2>
        {content}
    </div>
  )

}
export default BookList;
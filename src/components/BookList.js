import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:9090/books';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(BOOK_API_BASE_URL)
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    return (
        <div>
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> by {book.author}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;

import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
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
                            <strong>{book.title}</strong> by {book.authorName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;

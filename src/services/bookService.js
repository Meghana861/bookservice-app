import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:9090/books'; // Update with your actual API URL

export const getBooks = () => {
    return axios.get(BOOK_API_BASE_URL);
};

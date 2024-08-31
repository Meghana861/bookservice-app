import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import BookList from './components/BookList';
// import Login from './Login.js';

import BookList from './components/BookList.js';
import PostBook from './components/PostBooks.js';
import PlaceOrder from './components/PlaceOrder.js';
function App() {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/login" element={<Login/>}></Route>
                
        // </Routes>
        // </Router>
        <div>
            <BookList/>
            <PostBook/>
            <PlaceOrder/>
        </div>
    );
}

export default App;

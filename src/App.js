import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import BookList from './components/BookList';
// import Login from './Login.js';

import BookList from './components/BookList.js';
import PostBook from './components/PostBooks.js';
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
        </div>
    );
}

export default App;

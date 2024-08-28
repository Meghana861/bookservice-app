import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/books" component={BookList} />
            </Switch>
        </Router>
    );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoteApp from './NoteApp';
import Page1 from './Page1';
import AddBook from './AddBook';

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={NoteApp} />
            <Route path="/add" component={AddBook} />
            {/* <Route path="/edit" component={} /> */}
        </Switch>
    );
};

export default App;
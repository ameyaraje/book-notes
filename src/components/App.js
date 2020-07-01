import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoteApp from './NoteApp';
import Page1 from './Page1';

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={NoteApp} />
            <Route path="/page1" component={Page1} />
        </Switch>
    );
};

export default App;
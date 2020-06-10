import React from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Notes from './Notes';

const NoteApp = () => {
    return (
        <div>
            < Header />
            <AddNote />
            <Notes />
        </div>
    );
};

export default NoteApp;
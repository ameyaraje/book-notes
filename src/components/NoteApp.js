import React from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Notes from './Notes';

export default class NoteApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookNotes: []
        };
    };

    handleAddNote = (note) => {
        this.setState((prevState) => {
            return {
                bookNotes: prevState.bookNotes.concat(note)
            };
        });
    };

    render() {
        return (
            <div>
                <Header />
                <AddNote props={this.handleAddNote} />
                <Notes />
            </div>
        );
    };
};
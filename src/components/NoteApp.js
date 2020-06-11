import React from 'react';
import Header from './Header';
import AddBook from './AddBook';
import Books from './Books';

export default class NoteApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookNotes: []
        };
    };

    handleAddBook = (bookNote) => {
        
        this.setState((prevState) => {
            return {
                bookNotes: prevState.bookNotes.concat(bookNote)
            };
        });
    };

    handleDeleteBook = (bookNoteToRemove) => {
        this.setState((prevState) => {
            return {
                bookNotes: prevState.bookNotes.filter((bookNote) => {
                    return bookNoteToRemove !== bookNote
                })
            };
        });
    };

    render() {
        const bookNotes = this.state.bookNotes;

        return (
            <div>
                <Header />
                <AddBook handleAddBook={this.handleAddBook} />
                <Books bookNotes={bookNotes} handleDeleteBook={this.handleDeleteBook} />
            </div>
        );
    };
};
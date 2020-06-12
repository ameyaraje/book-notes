import React from 'react';
import Header from './Header';
import AddBook from './AddBook';
import Books from './Books';
import BookModal from './BookModal';

export default class NoteApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookNotes: [],
            selectedBookNotes: {}
        };
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('bookNotes');
            const bookNotes = JSON.parse(json);

            if (bookNotes) {
                this.setState({
                    bookNotes: bookNotes
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.bookNotes.length !== this.state.bookNotes.length) {
            const json = JSON.stringify(this.state.bookNotes);
            localStorage.setItem('bookNotes', json)
        }
    };

    componentWillUnmount() {};

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
                <BookModal />
            </div>
        );
    };
};
import React from 'react';
import Header from './Header';
import AddBook from './AddBook';
import Books from './Books';
import BookModal from './BookModal';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            selectedBooks: {}
        };
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('books');
            const books = JSON.parse(json);

            if (books) {
                this.setState({
                    books: books
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

    handleDeleteBook = (bookToRemove) => {
        this.setState((prevState) => {
            return {
                books: prevState.books.filter((book) => {
                    return bookToRemove !== book
                })
            };
        });
    };

    render() {
        const books = this.state.books;

        return (
            <div>
                <Header />
                {/* <AddBook handleAddBook={this.handleAddBook} /> */}
                <Books books={books} handleDeleteBook={this.handleDeleteBook} />
                <BookModal />
            </div>
        );
    };
};
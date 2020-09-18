import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Book from './Book';

export default class Books extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {};
    };

    render() {
        return (
            <div className="container" id="notes-panel">
                <div id="notes-panel-header">
                    <h3>Your BookNotes</h3>
                </div>
                <div className="container" id="notes-panel-body">
                   {this.props.books.length === 0 && <p>Add some book to get started</p>} 
                   {this.props.books.map((book) => {
                       return (
                           <Book key={book.title} handleDeleteBook={this.props.handleDeleteBook} book={book} />
                       );
                   })}
                </div>  
            </div>
        );
    };
};
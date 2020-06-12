import React from 'react';

import '../styles/book.css';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
    };

    removeBookNote = (e) => {
        this.props.handleDeleteBook(this.props.bookNote);
    };

    render() {
        return (
            <div className="row justify-content-between" id="book-container">
                <p id="book-title">
                    {this.props.bookNote.title}
                </p>
                <button className="btn btn-primary">View Book</button>
                <button className="btn btn-danger" onClick={this.removeBookNote}>Remove Book</button>
                {/* <hr /> */}
            </div>
        );
    };
};
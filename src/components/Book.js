import React from 'react';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
    };

    removeBookNote = (e) => {
        this.props.handleDeleteBook(this.props.bookNote);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.bookNote.title}
                    <button>View Book</button>
                    <button onClick={this.removeBookNote}>Remove Book</button>
                </div>
            </div>
        );
    };
};
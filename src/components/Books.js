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
                <div className="container" id="notes-panel-header">
                    <h3>Your BookNotes</h3>
                </div>
                <div className="container" id="notes-panel-body">
                   {this.props.bookNotes.length === 0 && <p>Add some book to get started</p>} 
                   {this.props.bookNotes.map((bookNote) => {
                       return (
                           <Book key={bookNote.title} handleDeleteBook={this.props.handleDeleteBook} bookNote={bookNote} />
                       );
                   })}
                </div>  
            </div>
        );
    };
};
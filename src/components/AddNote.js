import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class AddNote extends React.Component {
    constructor(props) {
        super(props);

        // State needs to capture the note and title changes here 
        this.state = {};
    };

    // Pass note to parent component here
    submitNote = (e) => {
        e.preventDefault();
        this.props.handleAddNote();
    };

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Book Title</label>
                        <input type="text" className="form-control" id="book-title" placeholder="Enter Book Title Here" />
                    </div>
                    <div class="form-group">
                        <label>Book Notes</label>
                        <textarea className="form-control" id="book-note" rows="4" placeholder="Enter Book Notes Here"></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.submitNote}>Submit</button>
                </form>
                <hr />
            </div>
        );
    };
};
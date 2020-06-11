import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class AddBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            notes: ''
        };
    };

    submitNote = (e) => {
        e.preventDefault();

        this.props.handleAddBook({
            title: this.state.title,
            note: this.state.notes
        });
    };

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    onNotesChange = (e) => {
        this.setState({
            notes: e.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitNote}>
                    <div className="form-group">
                        <label>Book Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="book-title"
                            placeholder="Enter Book Title Here"
                            onChange={this.onTitleChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Book Notes</label>
                        <textarea
                            className="form-control"
                            id="book-note"
                            rows="4"
                            placeholder="Enter Book Notes Here"
                            onChange={this.onNotesChange}
                            value={this.state.notes}
                        >
                        </textarea>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                <hr />
            </div>
        );
    };
};
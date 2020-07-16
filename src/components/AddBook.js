import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header';

export default class AddBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            notes: '',
            author: '',
            isbn: ''
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

    onAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        });
    };

    onISBNChange = (e) => {
        this.setState({
            isbn: e.target.value
        });
    };

    render() {
        return (
            <div>
                <Header />
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
                        <div class="form-group">
                            <label>Author</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author"
                                placeholder="Enter Author Name Here"
                                onChange={this.onAuthorChange}
                                value={this.state.author}
                            />
                        </div>
                        <div class="form-group">
                            <label>ISBN</label>
                            <input
                                type="text"
                                className="form-control"
                                id="isbn"
                                placeholder="Enter ISBN-13 Here"
                                onChange={this.onISBNChange}
                                value={this.state.isbn}
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
                        <div className="form-group"></div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    };
};
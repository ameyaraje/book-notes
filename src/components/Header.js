import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <a className="navbar-brand" href="/page1">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <Link to="/" className="navbar-brand">NoteApp</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/page1" className="nav-link">Add</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/page1" className="nav-link">Remove</Link>
                        </li>                        
                    </ul>
                </div>
            </nav>
        );
    };
};

export default Header;
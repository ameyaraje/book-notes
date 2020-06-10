import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Header extends React.Component {
    
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Book Notes</h1>
            </div>
        );
    };
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';

import './header.css';

const Header = (props) => {
    return (
        <header className="site-header">
            <p className="site-title"><Link to="/">HOME</Link></p>
            <NavBar username={props.username} isAdmin={props.isAdmin} logout={props.logout}/>
        </header>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const NavBar = (props) => {
    return (
        <nav>
            <ul>
                {props.username
                    ?
                    (<span>
                        {props.isAdmin
                            ?
                            (<li>
                                <NavLink to="/books/create" activeClassName="selected">Create book</NavLink>
                            </li>)
                            : 
                            null
                        }
                        <li><NavLink to="/lists/myLists" activeClassName="selected">{props.username}'s lists</NavLink></li>
                        <li><NavLink to="/lists/create" activeClassName="selected">Create list</NavLink></li>
                        <li><NavLink to="#" onClick={props.logout}>Logout</NavLink></li>
                    </span>)
                    :
                    (<span>
                        <li><NavLink to="/users/register" activeClassName="selected">Register</NavLink></li>
                        <li><NavLink to="/users/login" activeClassName="selected">Login</NavLink></li>
                    </span>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
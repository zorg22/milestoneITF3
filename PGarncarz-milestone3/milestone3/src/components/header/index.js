import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink exact={true} to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/people" activeClassName="active">People</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

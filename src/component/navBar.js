import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                רשימת הרכיבים
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item ">
                        <Link to="/" className="nav-link" >כל הרשימה </Link>
                    </li>
                    <li className="navbar-item ">
                        <Link to="/create" className="nav-link" > הוסף פריט  </Link>
                    </li>
                    <li className="navbar-item ">
                        <Link to="/" className="nav-link" >הוצאות הכנסות</Link>
                    </li>
                    <li className="navbar-item ">
                        <Link to="/" className="nav-link" >looks we love</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
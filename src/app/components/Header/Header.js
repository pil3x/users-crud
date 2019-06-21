import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">

                <Link to="/" className="navbar-brand">BITcrud</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> <span className="sr-only">(current)</span>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users/create" className="nav-link"> Create Users</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Header;




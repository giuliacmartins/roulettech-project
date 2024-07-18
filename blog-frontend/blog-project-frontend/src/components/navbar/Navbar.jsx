import React from 'react'
import { useCookies } from 'react-cookie'
import './Navbar.css'

function Navbar() {
    const [, , removeToken] = useCookies(['mytoken']);

    const logoutBtn = () => {
        removeToken(['mytoken']);
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <a className="navbar-brand" href="/posts">Simple Blog</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" onClick={logoutBtn}>Log out</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
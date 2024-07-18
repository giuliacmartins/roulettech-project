import React from 'react'
import { useCookies } from 'react-cookie';


function Navbar() {
    const [token, SetToken, removeToken] = useCookies(['mytoken'])

    const logoutBtn = () => {
        removeToken(['mytoken'])
    
    }

    return (
        <div>
            <nav>
                <div className="container-fluid">
                    <a className="navbar-brad" href="#">Simple Blog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                    </button>
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={logoutBtn}>Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
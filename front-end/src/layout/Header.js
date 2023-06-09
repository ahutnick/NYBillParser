import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-info-subtle">
            <div className="container-fluid">
                <a className="navbar navbar-brand" href="/">NY Bill Parser</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Log In</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

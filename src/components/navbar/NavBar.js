import React from 'react';
import Logo from "../logo/Logo";

const NavBar = ({ children }) => {
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
        </nav>
    );
};

export default NavBar;
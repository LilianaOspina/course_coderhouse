import React from "react";
import "./Navbar.scss";

import Banner from './Components/Banner/Banner';
import Logo from './Components/Logo/Logo';
import Menu from './Components/Menu/Menu';
import Search from './Components/Search/Search';

function Navbar() {
    return (
        <nav className="nav__bar">
            <Banner text='ROPA COOL AL MEJOR PRECIO' />
            <Logo />
            <Menu />
            <div className="nav__tools">
                <Search />
                <div className="nav__icons">
                    <span class="material-icons nav__icon">search</span>
                    <span class="material-icons nav__icon">shopping_cart</span>
                    <span class="material-icons nav__icon nav__icon--menu">menu</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

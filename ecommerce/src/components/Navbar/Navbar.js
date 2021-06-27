import React from "react";
import "../../App.scss";

function Dropdown({ link, text1, text2, text3 }) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://www.google.com.ar" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {link}
            </a>
            <div className="nb-menu dropdown-menu" aria-labelledby="dropdown01">
                <a className="nb-list dropdown-item" href="http://www.google.com.ar">
                    {text1}
                </a>
                <a className="nb-list dropdown-item" href="http://www.google.com.ar">
                    {text2}
                </a>
                <a className="nb-list dropdown-item" href="http://www.google.com.ar">
                    {text3}
                </a>
            </div>
        </li>
    );
}

function Navbar() {
    return (
        <nav id="Navbar" className="navbar navbar-expand-lg fixed-top navbar-dark">
            <a className="nb-marca navbar-brand mr-auto mr-lg-0" href="http://www.google.com.ar">
                femCode
            </a>
            <div className="nb-links navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <Dropdown link="New In" text1="Bras" text2="Panties" text3="Linguerie" />
                    <Dropdown link="Collection" text1="SpringTime" text2="SummerTops" text3="LaceAge" />
                    <Dropdown link="Sale" text1="2019 Temp" text2="2018 Temp" text3="Past years..." />
                </ul>
                <ul className="navbar-nav">
                    <Dropdown link="Contact" text1="E-mail" text2="What's App"></Dropdown>
                    <li className="nav-item active">
                        <a className="nav-link" href="http://www.google.com.ar">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0 btn-style" type="submit">
                        buscar
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;

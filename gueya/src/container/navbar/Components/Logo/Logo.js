import React from "react";
import "./Logo.scss";
import logo_gueya from "./logo_gueya.svg";

function Logo () {
    return (
        <img className="nav__logo" src={logo_gueya} alt="logo Gueya" />
    );
}

export default Logo;

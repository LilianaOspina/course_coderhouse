import React from "react";
import "./Banner.scss";

function Banner({text}) {
    return (
        <div className="nav__banner">
            <span className="nav__bannertext">{text}</span>
        </div>
    );
}

export default Banner;

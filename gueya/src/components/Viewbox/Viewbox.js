import React from "react";
import "./Viewbox.scss";

import Counter from "../Counter/Counter";
import Color from "../Selects/Color";
import Size from "../Selects/Size";
import Close from "../Close/Close";

import foto from "./ejemplo.jpg";

function Viewbox() {
    return (
        <div className="viewbox col-6 col-s-6 col-m-6 col-l-6 col-xl-6">
            <Close />
            <div className="viewbox__item col-6 col-s-6 col-m-6 col-l-6 col-xl-6">
                <img className="item__photo" src={foto} alt="" />
                <Counter initial={1} max={5} min={1} />
            </div>
            <div className="viewbox__detail col-6 col-s-6 col-m-6 col-l-6 col-xl-6">
                <p className="viewbox__title">Casablanca</p>
                <p className="viewbox__price">$4.500</p>
                <Color />
                <Size />
                <i class="fas fa-check-circle viewbox__icon"></i>
            </div>
        </div>
    );
}

export default Viewbox;

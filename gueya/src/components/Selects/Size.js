import React from "react";
import "./Size.scss";

function Size() {
    return (
        <select className="select__box select__size" name="Talle" id="">
            <option value="Elige tu talle">Elige el talle</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
        </select>
    );
}

export default Size;

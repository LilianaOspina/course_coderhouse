import React from "react";
import "./Color.scss";

function Color() {
    return (
        <select className="select__box select__color" name="Color" id="">
            <option value="Elige el color">Elige el color</option>
            <option value="Blanco">Blanco</option>
            <option value="Negro">Negro</option>
            <option value="Rosa">Rosa</option>
        </select>
    );
}

export default Color;

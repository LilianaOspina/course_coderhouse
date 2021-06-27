import React from "react";
import "./Menu.scss";

function Menu() {
    return (
        <ul className="nav__menulist">
            <li className="nav__list">New in</li>
            <li className="nav__list">Abrigos</li>
            <li className="nav__list">Camisas/Blusas</li>
            <li className="nav__list">Accesorios</li>
        </ul>
    );
}

export default Menu;

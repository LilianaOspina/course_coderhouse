import React from "react";
import "../../assets/styles/bases.scss";

function Close() {
    function closeThis() {
        let viewbox = document.querySelector(".viewbox");
        viewbox.style.display = "none";
    }

    return (
        <button className="close" onClick={closeThis}>
            <i class="far fa-times-circle close"></i>
        </button>
    );
}

export default Close;

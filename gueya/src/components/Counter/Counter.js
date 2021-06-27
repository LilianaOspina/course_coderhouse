import React, { useState } from "react";
import "./Counter.scss";

function Counter({ initial, max, min }) {
    const [count, setCount] = useState(initial);

    function increases() {
        if (count < max) {
            setCount(count + 1);
        }
    }
    function decreases() {
        if (count > min) {
            setCount(count - 1);
        }
    }

    return (
        <div className="counter">
            <button className="counter__min item__bt bt-g1" disable={count === min} onClick={decreases}>
                <i class="fas fa-minus counter__icon"></i>
            </button>
            <span className="counter__num">{count}</span>
            <button className="counter__max item__bt bt-g1" disable={count === max} onClick={increases}>
                <i class="fas fa-plus counter__icon"></i>
            </button>
        </div>
    );
}

export default Counter;

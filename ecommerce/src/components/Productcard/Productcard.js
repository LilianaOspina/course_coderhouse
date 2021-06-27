import React from 'react';
import "../../App.scss";

function Productcard({ imageName, text }) {
    return (
        <div className="cont-products col-3">
            <img src={require(`../../assets/Products/${imageName}`)} alt="bra" className="img-product" />
            <p>{text}</p>

            <label className="size">
                size
                <select className="boxSizes">
                    <option value="">=</option> {/*poner icono */}
                    <option value="xs">xs</option>
                    <option value="s">s</option>
                    <option value="m">m</option>
                    <option value="l">l</option>
                    <option value="xl">xl</option>
                </select>
            </label>
            <div className="counter-shop">
                <button>
                    <i className="fas fa-minus"></i>
                </button>
                <p className="cant">1</p>
                <button>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <button className="addCart col-12">Add to cart</button>
        </div>
    );
}

export default Productcard;

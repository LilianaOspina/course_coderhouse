import "./Itembox.scss";
import foto from "../Viewbox/ejemplo.jpg";

//Dibujo productos como los quiero presentar en Home

const Itembox = ({ item }) => {
    return (
        <div className="itembox">
            <img className="itembox__photo" src={foto} alt="" />
            <p className="viewbox__title">{item.name}</p>
            <p className="viewbox__price">$ ${item.price}</p>
        </div>
    );
};

export default Itembox;

import Itembox from "../Itembox/Itembox";
import "./Itemlist.scss";

//debe contener e imprimir los items, recibe los items y hacemos un map
const Itemlist = ({ items }) => {
    return (
        <div id="itemlist" className="col-6 col-s-6 col-m-6 col-l-6 col-xl-6">
            {items.map((product, indexProduct) => {
                return <Itembox key={indexProduct.id} item={product} />;
            })}
        </div>
    );
};
export default Itemlist;

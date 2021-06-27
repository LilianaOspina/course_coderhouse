import { useEffect, useState } from "react";
import "./Home.scss";
import Navbar from "./navbar/Navbar";
import Viewbox from "../components/Viewbox/Viewbox";
import { Getproducts } from "../api/Getproducts";
import Itemlist from "../components/Itemlist/Itemlist";

const Home = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        //traigo la promise y guardo la respuesta en el setItems
        Getproducts()
            .then(
                (response) => {
                    //guardamos en en setItems los datos de la respuesta
                    setProducts(response);
                }
            )
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {});
    }, []);

    return (
        <>
            <Navbar />
            <div id="page">
                <Itemlist items={product} />
                <Viewbox />
            </div>
        </>
    );
};

export default Home;

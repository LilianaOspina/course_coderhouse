import React, { useEffect, useState } from "react";
import "../../App.scss";
import { GetProducts } from "../../api/Products";
import Productcard from "../../components/Productcard/Productcard";

function Products() {
    const [products, setProducts] = useState([]);

    // esto inicializa
    useEffect(() => {
        GetProducts().then((result) => {
            console.table(result);

            setProducts(result);
        });
    }, []);

    return (
        <>
            <div className="Products col-8">
                {products.map((product, idx) => {
                    return <Productcard key={idx} imageName={product.image} text={product.text} />;
                })};
            </div>
        </>
    );
}
export default Products;

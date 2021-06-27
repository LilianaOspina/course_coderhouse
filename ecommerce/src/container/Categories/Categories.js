import React, { useEffect, useState} from "react";
import "../../App.scss";
import { GetCategories } from "../../api/Categories";

function Category({ text }) {
    return (
        <button className="btn-cat">{text}</button>
    );
}

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        GetCategories().then((result) => {
            console.table(result);

            setCategories(result);
        });
    }, []);

    return (
        <div>
            <aside id="Categories">
                    {categories.map((category, idx) => {
                        return <Category key={idx} text={category.text} />;
                    })}
                    ;
            </aside>
        </div>
    );
}
export default Categories;

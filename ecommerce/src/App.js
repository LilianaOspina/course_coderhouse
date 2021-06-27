import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./container/Categories/Categories";
import Products from "./container/Products/Products";
import Banner from "./container/Banner/Banner";

function App() {
    return (
        <div className="App App-header">
            <Navbar />
            <Banner />
            <Categories />
            <Products />
        </div>
    );
}

export default App;
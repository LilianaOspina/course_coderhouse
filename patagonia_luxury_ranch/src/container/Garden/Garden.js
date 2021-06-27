import "../../App.scss";
import vaso_0 from "./vaso_0.png";
import vino_1 from "./vino_1.png";

function Garden() {
    return (
        <section id="garden">
            <h2 className="brand gar__brand">PATAGONIA LUXURY RANCH</h2>
            <h1 className="gar__title">BEER GARDEN</h1>
            <div className="gar__line"></div>
            <div className="gar__cont">
                <p className="gar__list">
                    <span className="gar__subtitle"> 24 hours at your service</span>
                    <br />
                    Water & soft drinks
                    <br />
                    Beer Local premium wine
                    <br />
                    Hot beverages: Tea-Coffee-Mate
                    <br />
                    <br />
                    <span className="gar__subtitle">Additional service - 4h every day</span>
                    <br />
                    Whisky – Negroni – Gin Tonic - Garibaldi - Fernet Cola – Aperol & Orange – Cynar & Grapefruit – Cuba Libre – Whisky & Cola - Screwdriver
                </p>
            </div>
            <div className="gar__contimg">
                <img className="col-6 gar__img" src={vaso_0} alt="bar1" />
                <img className="col-6 gar__img" src={vino_1} alt="bar2" />
            </div>
        </section>
    );
}

export default Garden;

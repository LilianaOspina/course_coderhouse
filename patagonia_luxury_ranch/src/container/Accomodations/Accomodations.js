import "../../App.scss";
import domo_0 from "./domo_0.jpg";

function Accomodations() {
    return (
        <section id="accomodations">
            <h2 className="brand acc__brand">PATAGONIA LUXURY RANCH</h2>
            <h1 className="acc__title">PREMIUM ACCOMODATIONS</h1>
            <div className="acc__line"></div>
            <div className="acc__boxes">
                <div className="col-2 acc__box">
                    <h3 className="box__title">INDIVIDUAL</h3>
                    <p className="box__text1">MAX HEIGHT</p>
                    <p className="box__text2">6.82 ft</p>
                    <p className="box__text1">DIAMETER</p>
                    <p className="box__text2">13.12 ft</p>
                </div>
                <div className="col-2 acc__box">
                    <h3 className="box__title">DOUBLE</h3>
                    <p className="box__text1">MAX HEIGHT</p>
                    <p className="box__text2">9.19 ft</p>
                    <p className="box__text1">DIAMETER</p>
                    <p className="box__text2">16.4 ft</p>
                </div>
            </div>
            <div className="acc__contlist">
                <h2 className="acc__subtitle">Luxury service includes:</h2>
                <ul className="acc__list">
                    <li>Real bed with pillow</li>
                    <li>Premium blankets and sheets</li>
                    <li>Individual towels</li>
                    <li>All Domes have a window</li>
                    <li>Individual table & chair in Dome</li>
                    <li>Indoor Dome lighting</li>
                    <li>1 security padlock per Dome</li>
                    <li>Personalized aromatic candles & interior decor</li>
                    <li>Flooring</li>
                </ul>
            </div>
            <div className="acc__contimg">
                <img className="acc__img" src={domo_0} alt="domo" />
                <p className="ad">*Illustrative images</p>
            </div>
        </section>
    );
}

export default Accomodations;

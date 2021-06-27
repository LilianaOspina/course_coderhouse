import "../../App.scss";
import food_0 from "./food_0.jpg";

function Cuisine() {
    return (
        <section id="cuisine">
            <h2 className="brand cui__brand">PATAGONIA LUXURY RANCH</h2>
            <h1 className="cui__title">SIGNATURE CUISINE</h1>
            <div className="cui__line"></div>
            <div className="cui__contlist">
                <h2 className="cui__subtitle">Full premium meal plan includes:</h2>
                <ul className="cui__list">
                    <li>Breakfast</li>
                    <li>Lunch (3 step course)</li>
                    <li>Dinner</li>
                    <li>Snacks</li>
                    <li>Silverware</li>
                    <li>Closed restaurant & open dining space w/ tables and chairs</li>
                    <li>COVID-19 protocol display</li>
                </ul>
            </div>
            <div className="cui__contimg">
                <img className="cui__img" src={food_0} alt="food" />
                <p className="ad">*Illustrative images</p>
            </div>
        </section>
    );
}

export default Cuisine;

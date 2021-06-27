import "../../App.scss";
import cata_0 from "./cata_0.png";
import cata_1 from "./cata_1.png";
import doublearrowwhite from "./doublearrowwhite.svg";

function Experiences() {
    return (
        <section id="experiences">
            <h2 className="brand exp__brand">PATAGONIA LUXURY RANCH</h2>
            <h1 className="exp__title">UNIQUE EXPERIENCES</h1>
            <div className="exp__line"></div>

            <div className="exp__cont">
                <p className="exp__list">
                    Table football "foosball"
                    <br />
                    Truco (Argentine card game)
                    <br />
                    Hot beverages: Tea-Coffee-Mate
                    <br />
                    Guitarr
                    <br />
                    Hot chocolate by the fire
                    <br />
                    <br />
                    <br />
                    <span className="exp__text">Additional service</span>
                    <br />
                    <span className="exp__text">Local wine & cheese tastings</span>
                </p>
            </div>

            <div className="exp__carousel">
                <div className="carousel_1__items col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="450">
                    <div className="carousel slide carousel_1__slide pointer-event" data-ride="carousel" id="carousel-2">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="carousel_1__img" src={cata_0} alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img className="carousel_1__img" src={cata_1} alt="Slide 2" />
                            </div>
                        </div>
                        <div>
                            <a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-2" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-2" data-slide-to="1"></li>
                        </ol>
                    </div>
                </div>
            </div>

            <a href="index.html">
                <button className="btn button__next" type="button">
                    <img className="next__icon flash animated infinite" src={doublearrowwhite} alt="next" />
                </button>
            </a>
        </section>
    );
}
export default Experiences;

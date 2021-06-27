import '../../App.scss';
import bar_2 from './bar_2.jpg';
import bar_3 from './bar_3.jpg';
import cheese_0 from './cheese_0.jpg';
import cheese_1 from './cheese_1.jpg';
import domo_0 from './domo_0.jpg';
import domo_1 from './domo_1.jpg';
import wine_0 from './wine_0.jpg';
import wine_1 from './wine_1.jpg';
import doublearrowwhite from './doublearrowwhite.svg';


function Carousel ({ title, img1, img2, text }) {
    return ( <div className="carousel__items col-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="450">
                <h3 className="carousel__title">
                    {title}
                </h3>
                <div className="carousel slide carousel__slide pointer-event" data-ride="carousel" id="carousel-2">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="carousel__img" src={img1} alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img className="carousel__img" src={img2} alt="Slide 2" />
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
                <p className="project__text">
                    {text}
                </p>
            </div>

    );
}

function Project () {
    return ( <section id="project">
                <div className="project__cont">
                    <Carousel title="ACCOMODATIONS" img1={domo_0} img2={domo_1} text="The very best accomodations atyour private Geodesic Dome.Quality service: your bestexperience is our obsession." />
                    <Carousel title="CUISINE" img1={cheese_0} img2={cheese_1} text="Combining organic produce, localheritage and with regional recipes asinspiration, the chef's touch appears,creating top quality signature cuisine.Premium dining for breakfast, lunch, & dinner" />
                    <Carousel title="BEER GARDEN" img1={bar_2} img2={bar_3} text="24h water, soft drinks, beer & wineincluded.Additional cocktails available atour Beer Garden" />
                    <Carousel title="ENTERTAIMENT" img1={wine_0} img2={wine_1} text="Learn traditional Argentine games.Local wine & cheese tastings.Learn music, dance, kitchen andother local traditions." />
                </div>
                <a href="#extras">
                    <button className="btn button__next" type="button">
                        <img className="next__icon flash animated infinite" src={doublearrowwhite} alt="next" />
                    </button>
                </a>
        </section>
    );
}

export default Project;
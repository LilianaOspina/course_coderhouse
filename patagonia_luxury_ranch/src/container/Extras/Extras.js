import '../../App.scss';
import treevotion from './treevotion.jpg';
import glasses from './glasses.jpg';
import travel from './travel.jpg';
import doublearrowwhite_top from './doublearrowwhite_top.svg';


function Extra ({ img }) {
    return (  <div className="col-3 extras__item">
                <img data-bs-hover-animate="pulse" className="extras__img" src={img} alt="img extra" />
            </div>
    );
}

function Extras () {
    return ( <div id="extras">
                <h2 className="extras__title">EXCLUSIVE SERVICES</h2>
                <div className="extras__cont row aos-init aos-animate" data-aos="fade-up" data-aos-duration="750">
                    <Extra img={treevotion} />
                    <Extra img={glasses} />
                    <Extra img={travel} />
                </div>
                <a href="#intro">
                    <button className="btn button__next" type="button">
                        <img className="next__icon flash animated infinite" src={doublearrowwhite_top} alt="next" />
                    </button>
                </a>
            </div>
    );
}

export default Extras;
import '../../App.scss';
import doublearrowwhite from './doublearrowwhite.svg';

function Intro () {
    return ( <section id="intro">
                <h1 className="intro__title">PATAGONIA LUXURY RANCH</h1>
                <div data-aos="zoom-in" className="intro__line aos-init aos-animate">
                </div>
                <h1 className="intro__subtitle">
                    LUXURY. ALL THE WAY
                </h1>
                <a href="#article">
                    <button className="btn button__next" type="button">
                        <img className="next__icon" src={doublearrowwhite} alt="next" />
                    </button>
                </a>
            </section>
    );
}

export default Intro;
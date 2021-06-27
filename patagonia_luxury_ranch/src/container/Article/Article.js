import '../../App.scss';
import doublearrowwhite from './doublearrowwhite.svg';

function Article () {
    return ( <section id="article">
                <p className="mx-auto article__text aos-init aos-animate" data-aos="fade-down"> With Patagonia’s customs at heart and the very best service inmind, Patagonia Luxury Ranch was created for those whodesire to disconnect from the troubles of the journey andsimply want to relax and enjoy this once in a life time experience
                with no worries.
                </p>
                <p className="text-center article__text2">
                    DEC 10 - 16
                </p>
                <a href="#project">
                    <button className="btn button__next" type="button">
                        <img className="next__icon flash animated infinite" src={doublearrowwhite} alt="next" />
                    </button>
                </a>
            </section>
    );
}

export default Article;
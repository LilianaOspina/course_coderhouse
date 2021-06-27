import "../../App.scss";

// function navItem ({item}){
//     <li className="nav-item navbar__item">
//         <a className="navbar__link" href="index.html">{item}</a>
//     </li>
// }

function Navbar() {
    return (
        <nav className="navbar navbar navbar-light navbar-expand-md sticky-top">
            <div className="container-fluid">
                <a className="brand" href="index.html">
                    PATAGONIA LUXURY RANCH
                </a>
                <button data-toggle="collapse" className="navbar-toggler" data-target=".Navbar__nav">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar__nav collapse navbar-collapse" id="home__nav">
                    <ul className="nav navbar-nav">
                        <li className="nav-item navbar__item">
                            <a className="navbar__link" href="#accomodations">
                                Accommodations
                            </a>
                        </li>
                        <li className="nav-item navbar__item">
                            <a className="navbar__link" href="#cuisine">
                                CUISINE
                            </a>
                        </li>
                        <li className="nav-item navbar__item">
                            <a className="navbar__link" href="#garden">
                                OPEN BAR
                            </a>
                        </li>
                        <li className="nav-item navbar__item">
                            <a className="navbar__link" href="#experiences">
                                EXPERIENCES
                            </a>
                        </li>
                        <li className="nav-item navbar__item">
                            <a className="navbar__link" href="index.html">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

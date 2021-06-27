import React, { useEffect, useState } from "react";
import "../../App.scss";
import { GetBanners } from "../../api/Banner";
import clsx from "clsx";

function Banner() {
    const [banners, setBanners] = useState([]);

    // esto inicializa
    useEffect(() => {
        GetBanners().then((result) => {
            console.table(result);

            setBanners(result);
        });
    }, []);

    return (
        <header className="banner">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {banners.map((banner, idx) => {
                        return (
                            <div key={idx} className={clsx("carousel-item", idx === 0 && "active")}>
                                <img className="banner__image d-block w-100" src={require(`../../assets/Banners/${banner.image}`)} alt={banner.text} />
                                <h1 className="banner__title">{banner.text}</h1>
                                <h2 className="banner__promo">{banner.promo}</h2>
                            </div>
                        );
                    })}
                    ;
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </header>
    );
}

export default Banner;

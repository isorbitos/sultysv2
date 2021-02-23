import React from 'react'

const TopCarousel = () => (
    <section className="page-section" id="apieMus">
        <div className="container">
            {/* TODO: mobile carousele reik patvarkyt */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner" style={{ width: "100%", height: "600px" }} >
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="./assets/img/carousel/kar1.jpg" alt="First slide" />
                        <div className="carousel-caption">
                            <h5>Sultis pristatome Vilniaus ribose NEMOKAMAI, perkant už 20 eur ir daugiau</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./assets/img/carousel/kar2.jpg" alt="Second slide" />
                        <div className="carousel-caption">
                            <h5>Perkant penkias pakuotes, vieną (savo nuožiūra) - dovanojame papildomai</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./assets/img/carousel/kar3.jpg" alt="Third slide" />
                        <div className="carousel-caption">
                            <h5>Vieną  kartoninę dėžutę dovanojame, jei reikia daugiau - dėžutės kaina 0,50 eur</h5>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img className="d-block w-100" src="./assets/img/carousel/kar4.jpg" alt="Third slide" />
                        <div className="carousel-caption">
                            <h5>testukas</h5>
                            <p>bla bla bla</p>
                        </div>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>
);

export default TopCarousel;
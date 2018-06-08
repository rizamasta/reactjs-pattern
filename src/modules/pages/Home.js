import React from 'react';
const Home = () => (
    <div className='main'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="first-slide" src="http://w3widgets.com/responsive-slider/img/slide-2.jpg" alt="First slide" />
                    <div className="container-carousel">
                        <div className="carousel-caption text-left">
                            <h1>Example headline.</h1>
                            <p className='description'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="" role="button">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="second-slide" src="http://w3widgets.com/responsive-slider/img/slide-1.jpg" alt="Second slide" />
                    <div className="container-carousel">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p className='description'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="" role="button">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="third-slide" src="http://w3widgets.com/responsive-slider/img/slide-3.jpg" alt="Third slide" />
                    <div className="container-carousel">
                        <div className="carousel-caption text-right">
                            <h1>One more for good measure.</h1>
                            <p className='description'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="" role="button">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
);
export default Home;
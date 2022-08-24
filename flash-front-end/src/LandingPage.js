import OldHeader from "./oldHeader";
import OldFooter from "./oldFooter";
import event from './Images/event.jpg';
import event2 from './Images/event2.jpg';
import event3 from './Images/event3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import FlashLogo from './Images/FlashLogo.png';


const LandingPage = () => {
    return (
        <div>
            <OldHeader />

            <div class="p-5">

                <h1 className="m-3 p-2" style={{textAlign: "Center"}}>Welcome to Studio Flash.</h1>
                <h5 className="m-3 p-2" style={{textAlign: "Center"}}>We are specialized in Wedding photography, Commercial
                    photography, Fashion photography and many more..</h5>

                {/*carousal*/}
                <div id="carouselExampleCaptions" className="carousel slide m-3" data-bs-ride="false">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>

                    <div className="container m-lg-5">
                    <div className="carousel-inner w-10 " >
                        <div className="carousel-item active" >
                            <img src={event} className="img-fluid d-block w-100 p-5"  alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h5>Wedding</h5>
                                    <p>We make your big day memorable</p>
                                </div>
                        </div>


                        <div className="carousel-item">
                            <img src={event2} className="img-fluid d-block w-100 p-5"  alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h5>Gatherings</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                        </div>

                        <div className="carousel-item">
                            <img src={event3} className="img-fluid d-block w-100 p-5"  alt="..." />
                                <div className="carousel-caption d-md-block ">
                                    <h5>Birthday Party</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                        </div>
                    </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/*End of carousal*/}

                {/*About Us*/}
                <div className="container">
                    <h3 className="text-justify m-2 p-2" style={{textAlign: "Center" }}>About Us</h3>
                    <h5 className="m-3 p-2 col-12" style={{textAlign: "Center"}}>Welcome to StudioFlash.
                        We believe Photography is an art, an art for which we are ever enthusiastic in making sure that the magical
                        memories of the most important day of your life, are not forgotten. Our professional photographers are dedicated to
                        imprinting the beautiful moments of your special day. Let’s capture CANDID, ARTISTIC & JOYFUL memories with StudioFlash on your
                        special day.</h5>
                </div>
            </div>

            <OldFooter />
        </div>

    )
}

export default LandingPage;
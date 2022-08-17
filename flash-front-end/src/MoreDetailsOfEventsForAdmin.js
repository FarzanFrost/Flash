import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Footer from "./Footer";

const MoreDetailsOfEventsForAdmin = () => {

    const style1 = {
        backgroundColor: 'rgba(255,212,181,0.91)',
    };

    const style2 = {
        width: '150px',
        height: '550px',
        backgroundColor: '#767676',
    };

    const style3 = {
        backgroundColor:'#4B2000',
        color:'white'
    };

    return (

        <div style={{...style1}}>
            <Header/>

            <div class="p-5">

                <h2 className="m-3 p-2" style={{textAlign: "Center"}}>More Details of Events</h2>

                <div className=" row">
                    <div className="col-md-6">
                        <div className="position-relative mx-5 m-2" style={{width: '48rem', left: '16rem'}}>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder="Example input"></input>
                        </div>
                    </div>


                    <div className="col-md-6">

                        <div className="dropdown position-relative mx-5 m-2" style={{left: '16rem'}}>

                            <select className="btn btn-secondary dropdown-toggle" type="button" id="Filter"
                                    data-bs-toggle="dropdown">
                                <option value="All">All</option>
                                <option value="eventname">Event Name</option>
                                <option value="Date">Date</option>

                            </select>
                        </div>

                    </div>

                </div>


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

                    <div className="carousel-inner w-10 " style={{}}>
                        <div className="carousel-item active">
                            <div className="col-md-4 mb-3">
                                <div className="card border-light border-5">
                                    <div className="card-body">

                                            <p className="card-text">
                                                <h5>Booking ID:23</h5>
                                                <h5>Event Name:Wedding</h5>
                                                <h5>Customer Name:Lavanesh</h5>
                                                <h5>Location:Kandy</h5>
                                                <h5>Package chose:Silver</h5>
                                                <h5>Total price: Rs.150 000</h5>
                                                <h5>Review: Best service</h5>
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End of item*/}


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

            </div>

            <Footer/>


        </div>

    )
}
export default MoreDetailsOfEventsForAdmin
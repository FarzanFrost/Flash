import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Footer from "./Footer";

const ViewEventsForCustomer = () => {

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

                <h2 className="m-3 p-2" style={{textAlign: "Center"}}>View All Booked Events</h2>

                {/*carousal*/}
                <div id="carouselExampleCaptions" className="carousel slide m-3" data-bs-ride="false">

                            <div className="col-md-4 mb-3">
                                <div className="card border-light border-5">
                                    <div className="card-body">

                                            <p className="card-text">
                                                <h5>Booking ID:14</h5>
                                                <h5>Event Date:2021-8-12</h5>
                                                <h5>Event Name:Wedding</h5>
                                                <h5>Package chose:Silver</h5>
                                                <h5>Total price: Rs.150 000</h5>

                                                <a href="#" className="btn" style={{...style3}}>Edit package</a>

                                                <div className="col-md-12 mb-3">
                                                    <div className="card border-light border-5">
                                                        <div className="card-body">
                                                            <h5>Review: Best service</h5>
                                                            <a href="#" className="btn" style={{...style3}} >Edit Review</a><br/><br/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </p>


                                    </div>
                                </div>
                            </div>

                        {/*End of item*/}

                </div>

            </div>

            <Footer/>

    </div>

    )
}

export default ViewEventsForCustomer
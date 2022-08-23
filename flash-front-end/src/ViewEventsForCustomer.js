import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import OldHeader from "./oldHeader";
import OldFooter from "./oldFooter";

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

            <div class="p-5">

                <h2 className="m-3 p-2" style={{textAlign: "Center"}}>View All Booked Events</h2>

                {/*carousal*/}
                <div id="carouselExampleCaptions" className="carousel slide m-3" data-bs-ride="false">

                            <div className="col-md-4 mb-3">
                                <div className="card border-light border-5">
                                    <div className="card-body">

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6 col-sm-4">Booking ID</div>
                                                <div className="col-6 col-sm-6">14</div>


                                                <div className="w-100 d-none d-md-block"></div>

                                                <div className="col-6 col-sm-4">Event Date</div>
                                                <div className="col-6 col-sm-6">2021-8-12</div>

                                                <div className="w-100 d-none d-md-block"></div>

                                                <div className="col-6 col-sm-4">Event Name</div>
                                                <div className="col-6 col-sm-6">Wedding</div>

                                                <div className="w-100 d-none d-md-block"></div>

                                                <div className="col-6 col-sm-4">Package choosed</div>
                                                <div className="col-6 col-sm-6">Silver</div>

                                                <div className="w-100 d-none d-md-block"></div>

                                                <div className="col-6 col-sm-4">Total Price</div>
                                                <div className="col-6 col-sm-6">Rs.150 000</div>

                                            </div>
                                            <a href="#" className="btn bg-dark text-light" >Edit Booking</a>
                                        </div>


                                            {/*<p className="card-text">*/}
                                                {/*<h5>Booking ID:14</h5>*/}
                                                {/*<h5>Event Date:2021-8-12</h5>*/}
                                                {/*<h5>Event Name:Wedding</h5>*/}
                                                {/*<h5>Package chose:Silver</h5>*/}
                                                {/*<h5>Total price: Rs.150 000</h5>*/}



                                        <br/>
                                                <div class="container">
                                                        <div className="row">
                                                            <div className="col-6 col-sm-4">Review</div>
                                                            <div className="col-6 col-sm-6">Best Service</div>
                                                        </div>
                                                            <a href="#" className="btn bg-dark text-light"  >Edit Review</a><br/><br/>

                                                </div>
                                            {/*</p>*/}


                                    </div>
                                </div>
                            </div>

                </div>

            </div>

    </div>

    )
}

export default ViewEventsForCustomer
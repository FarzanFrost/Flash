import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import OldHeader from "./oldHeader";
import OldFooter from "./oldFooter";

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

        <div>
            <OldHeader/>

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

                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <div className="card border-light border-5 shadow-lg">
                                <div className="card-body">

                                    <div className="container">
                                        <h2 style={{textAlign: "Center"}}>Birthday party</h2>
                                        <div className="row">
                                            <div className="col-6 col-sm-4">Booking ID</div>
                                            <div className="col-6 col-sm-5">47</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Event Date</div>
                                            <div className="col-6 col-sm-5">2022-09-01</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Customer</div>
                                            <div className="col-6 col-sm-5">Prasad</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Package</div>
                                            <div className="col-6 col-sm-5">Platinum</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Total Price</div>
                                            <div className="col-6 col-sm-5">Rs.170 000</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Location</div>
                                            <div className="col-6 col-sm-5">Kandy</div>

                                        </div>

                                    </div>

                                    <br/>
                                    {/*<div className="container shadow p-3  bg-white rounded ">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col-6 col-sm-4">Review</div>*/}
                                    {/*        <div className="col-6 col-sm-6">Best quality service in fair price</div>*/}
                                    {/*    </div>*/}

                                    {/*</div>*/}

                                </div>

                            </div>

                        </div>

                        <div className="col-md-4 mb-3 shadow-lg">
                            <div className="card border-light border-5">
                                <div className="card-body">

                                    <div className="container">
                                        <h2 style={{textAlign: "Center"}}>Wedding</h2>
                                        <div className="row">
                                            <div className="col-6 col-sm-4">Booking ID</div>
                                            <div className="col-6 col-sm-5">15</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Event Date</div>
                                            <div className="col-6 col-sm-5">2022-08-07</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Customer</div>
                                            <div className="col-6 col-sm-5">John</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Package</div>
                                            <div className="col-6 col-sm-5">Gold</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Total Price</div>
                                            <div className="col-6 col-sm-5">Rs.200 000</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Location</div>
                                            <div className="col-6 col-sm-5">Colombo</div>

                                        </div>

                                    </div>

                                    <br/>

                                    {/*<div className="container shadow p-3  bg-white rounded ">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col-6 col-sm-4">Review</div>*/}
                                    {/*        <div className="col-6 col-sm-6">Best quality service in fair price</div>*/}
                                    {/*    </div>*/}

                                    {/*</div>*/}

                                </div>

                                {/*<div className="container pt-3 pb-3 ps-5 pe-5 mx-lg-5">*/}
                                {/*    <a href="#" className="btn bg-dark text-light m-2 p-2">Edit Booking</a>*/}
                                {/*    <a href="#" className="btn bg-dark text-light m-2 p-2">Edit Review</a><br/><br/>*/}
                                {/*</div>*/}

                            </div>

                        </div>


                        <div className="col-md-4 mb-3 shadow-lg">
                            <div className="card border-light border-5">
                                <div className="card-body">

                                    <div className="container">
                                        <h2 style={{textAlign: "Center"}}>Birthday party</h2>
                                        <div className="row">
                                            <div className="col-6 col-sm-4">Booking ID</div>
                                            <div className="col-6 col-sm-5">7</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Event Date</div>
                                            <div className="col-6 col-sm-5">2020-07-01</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Customer</div>
                                            <div className="col-6 col-sm-5">Jane</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Package</div>
                                            <div className="col-6 col-sm-5">Platinum</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Total Price</div>
                                            <div className="col-6 col-sm-5">Rs.170 000</div>

                                            <div className="w-100 d-none d-md-block"></div>

                                            <div className="col-6 col-sm-4">Location</div>
                                            <div className="col-6 col-sm-5">Mathale</div>


                                        </div>

                                    </div>

                                    <br/>

                                </div>

                            </div>

                        </div>

                    </div>

            </div>

            <OldFooter/>

        </div>

    )
}
export default MoreDetailsOfEventsForAdmin
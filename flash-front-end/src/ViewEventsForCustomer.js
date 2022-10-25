import React,{useContext} from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import OldHeader from "./oldHeader";
import OldFooter from "./oldFooter";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";

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

    const { changeContentVisible } = useContext( AuthenticationContext )


    return (

        // <div style={{...style1}}>

            <div class="p-5">

                <h2 className="m-3 p-2" style={{textAlign: "Center"}}>View All Booked Events</h2>

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

                                        <div className="col-6 col-sm-4">Package</div>
                                        <div className="col-6 col-sm-5">Platinum</div>

                                        <div className="w-100 d-none d-md-block"></div>

                                        <div className="col-6 col-sm-4">Total Price</div>
                                        <div className="col-6 col-sm-5">Rs.170 000</div>

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

                            <div className="container pt-3 pb-3 ps-5 pe-5 mx-lg-5">
                                <a  className="btn bg-dark text-light m-2 p-2" style={{...style3}} onClick={ () => changeContentVisible( 6 ) }>View Gallery</a>
                                <a href="#" className="btn bg-dark text-light m-2 p-2" onClick={ () => changeContentVisible( 8 ) }>Edit Booking</a>
                                <a href="#" className="btn bg-dark text-light m-2 p-2" onClick={ () => changeContentVisible( 9 ) }>Add Review</a><br/><br/>
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

                                        <div className="col-6 col-sm-4">Package</div>
                                        <div className="col-6 col-sm-5">Gold</div>

                                        <div className="w-100 d-none d-md-block"></div>

                                        <div className="col-6 col-sm-4">Total Price</div>
                                        <div className="col-6 col-sm-5">Rs.250 000</div>

                                    </div>

                                </div>

                                <br/>
                                <div className="container shadow p-3  bg-white rounded ">
                                    <div className="row">
                                        <div className="col-6 col-sm-4">Review</div>
                                        <div className="col-6 col-sm-6">Best quality</div>
                                    </div>

                                </div>

                            </div>

                            <div className="container pt-3 pb-3 ps-5 pe-5 mx-lg-5">
                                <a  className="btn bg-dark text-light m-2 p-2" style={{...style3}} onClick={ () => changeContentVisible( 6 ) }>View Gallery</a>
                                <a href="#" className="btn bg-dark text-light m-2 p-2" >Edit Booking</a>
                                <a href="#" className="btn bg-dark text-light m-2 p-2">Edit Review</a><br/><br/>
                            </div>

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
                                        <div className="col-6 col-sm-5">2020-07-16</div>

                                        <div className="w-100 d-none d-md-block"></div>

                                        <div className="col-6 col-sm-4">Package</div>
                                        <div className="col-6 col-sm-5">Silver</div>

                                        <div className="w-100 d-none d-md-block"></div>

                                        <div className="col-6 col-sm-4">Total Price</div>
                                        <div className="col-6 col-sm-5">Rs.100 000</div>

                                    </div>

                                </div>

                                <br/>
                                <div className="container shadow p-3  bg-white rounded ">
                                    <div className="row">
                                        <div className="col-6 col-sm-4">Review</div>
                                        <div className="col-6 col-sm-6">Best quality service in fair price</div>
                                    </div>

                                </div>

                            </div>

                            <div className="container pt-3 pb-3 ps-5 pe-5 mx-lg-5">
                                <a  className="btn bg-dark text-light m-2 p-2" style={{...style3}} onClick={ () => changeContentVisible( 6 ) }>View Gallery</a>
                                <a href="#" className="btn bg-dark text-light m-2 p-2" >Edit Booking</a>
                                <a href="#" className="btn bg-dark text-light m-2 p-2">Edit Review</a><br/><br/>
                            </div>

                        </div>

                    </div>


            </div>
            </div>
    // </div>

    )
}

export default ViewEventsForCustomer
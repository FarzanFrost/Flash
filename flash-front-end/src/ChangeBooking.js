import React, {useState, useContext} from 'react';
import pic from './Images/booking.jpeg';
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";

const ChangeBooking = () => {
    const { changeContentVisible } = useContext( AuthenticationContext )

    return (
        <div className="h-100">

            <section className="h-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-xl-10 my-5 py-2 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="card rounded-3 text-black my-lg-1 my-xl-0 py-xl-0" style={ { backgroundColor : '#d7d7d7' } }>

                                <div className="row g-0 ">

                                    <div className="col-lg-5 d-lg-flex d-none ">

                                        <div className="d-lg-flex d-none text-center">
                                            <img src={ pic } className="img-fluid rounded-3 h-100" alt="Booking"/>
                                        </div>

                                    </div>

                                    <div className="col-lg-7 rounded-3" >
                                        <div className="d-grid d-md-flex justify-content-md-end mt-3 mx-3">
                                            <button className="btn btn-dark btn-block px-3" onClick={ () => changeContentVisible( 7 ) }>Packages</button>
                                        </div>

                                        <form className="container rounded-3 mb-0 bg-opacity-25 p-lg-3 mt-0" >

                                            <h1 className="text-center mt-3 pb-5">Event Details</h1>

                                            <div className="form-group row mt-3 mx-3">
                                                <span className="col-sm-4">Event Type </span>
                                                <span className="col-sm-8 fw-bold">Wedding</span>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Date</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value="09/09/2022"
                                                        className="form-control"
                                                        type="Date"
                                                        placeholder="Enter the Date"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Start Time</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value="07:30"
                                                        className="form-control"
                                                        type="Time"
                                                        placeholder="Enter the Start Time"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">End Time</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value="15:00"
                                                        className="form-control"
                                                        type="Time"
                                                        placeholder="Enter the End Time"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Address</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value="41, College Street, Trincomalee"
                                                        className="form-control"
                                                        type="Text"
                                                        placeholder="Enter the Address"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Package</label>
                                                <div className="col-sm-8">
                                                    <select className="form-select">
                                                        <option defaultChecked>Platinum</option>
                                                        <option>Diamond</option>
                                                        <option>Silver</option>
                                                        <option>Gold</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="d-flex gap-xxl-5 mb-2 align-items-center justify-content-center pt-5 pb-4">
                                                <button type="submit" variant="primary"
                                                        className="btn btn-dark btn-block" >
                                                    Change
                                                </button>

                                                <button type="submit" variant="secondary"
                                                        className="btn btn-danger btn-block">
                                                    Cancel
                                                </button>
                                            </div>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default ChangeBooking
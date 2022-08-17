import React, {useState} from 'react';
import pic from './Images/booking.jpeg';

const NewEventBooking = () => {
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
                                            <img src={ pic } className="img-fluid rounded-3 h-100" alt="Events"/>
                                        </div>

                                    </div>

                                    <div className="col-lg-7 rounded-3" >

                                        <form className="container rounded-3 mb-0 bg-opacity-25 p-lg-3 mt-0" >

                                            <h1 className="text-center mt-3 pb-5">Booking Events</h1>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Event Type</label>
                                                <div className="col-sm-8">
                                                    <select className="form-select">
                                                        <option>Wedding</option>
                                                        <option>Birthday</option>
                                                        <option>Puberty</option>
                                                        <option>Get together</option>
                                                        <option>House warming</option>
                                                        <option>Prize giving</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Additional</label>
                                                <div className="col-sm-8">
                                                    <select className="form-select">
                                                        <option>Wedding Only</option>
                                                        <option>Reception Only</option>
                                                        <option>Registration Only</option>
                                                        <option>Wedding with Reception</option>
                                                        <option>Wedding with Registration</option>
                                                        <option>Registration with Reception</option>
                                                        <option>Wedding with both ceremony</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Date</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        // value="70"
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
                                                        // value="70"
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
                                                        // value="70"
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
                                                        // value="70"
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
                                                        <option>Platinum</option>
                                                        <option>Diamond</option>
                                                        <option>Silver</option>
                                                        <option>Gold</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="d-flex gap-xxl-5 mb-2 align-items-center justify-content-center pt-5 pb-4">
                                                <button type="submit" variant="primary"
                                                        className="btn btn-dark btn-block px-3" >
                                                    Book
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

export default NewEventBooking
import React, {useState} from 'react';
import pic from './Images/credit.jpg';
import visa from './Images/visa.jpg';
import master from './Images/master.png';
import express from './Images/express.jpg';
import discover from './Images/discover.jpg';
import {Form} from "react-bootstrap";

const CardDetail = () => {
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

                                            <h1 className="text-center mt-3 pb-5">Credit Card Details</h1>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Card Number</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        // value="70"
                                                        className="form-control"
                                                        type="Number"
                                                        placeholder="Enter the Card Number"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">CVC Number</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        // value="70"
                                                        className="form-control"
                                                        type="Number"
                                                        placeholder="Enter the CVC Number"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Expiring Date</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        // value="70"
                                                        className="form-control"
                                                        type="Date"
                                                        placeholder="Enter the Expiring Date"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Type</label>
                                                <div className="row col-sm-8">
                                                    <div className="col-sm-6 mb-3">

                                                        <Form.Check
                                                            inline
                                                            label="Visa Card"
                                                            name="group1"
                                                            type="radio"
                                                        />
                                                        <div className="col-sm-5">
                                                            <img src={ visa } className="img-fluid rounded-3 h-100" alt="Events"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 mb-3">
                                                        <Form.Check
                                                            inline
                                                            label="Master Card"
                                                            name="group2"
                                                            type="radio"
                                                        />

                                                        <div className="col-sm-5">
                                                            <img src={ master } className="img-fluid rounded-3 h-100" alt="Events"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <Form.Check
                                                            inline
                                                            label="Express Card"
                                                            name="group3"
                                                            type="radio"
                                                        />

                                                        <div className="col-sm-5">
                                                            <img src={ express } className="img-fluid rounded-3 h-100" alt="Events"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <Form.Check
                                                            inline
                                                            label="Discover Card"
                                                            name="group4"
                                                            type="radio"
                                                        />

                                                        <div className="col-sm-5">
                                                            <img src={ discover } className="img-fluid rounded-3 h-100" alt="Events"/>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="d-flex gap-xxl-5 mb-2 align-items-center justify-content-center pt-5 pb-4">
                                                <button type="submit" variant="primary"
                                                        className="btn btn-dark btn-block px-3" >
                                                    Save
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

export default CardDetail
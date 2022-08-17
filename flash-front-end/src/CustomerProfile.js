import React, {useState} from 'react';
import camera from "./Images/camera.jpg";
import {Form} from "react-bootstrap";

const CustomerProfile = () =>{
    return(
        <div className="h-100">

            <section className="h-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-xl-10 my-5 py-2 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="card rounded-3 text-black my-lg-1 my-xl-0 py-xl-0" style={ { backgroundColor : '#d7d7d7' } }>

                                <div className="row g-0">

                                    <div className="col-lg-5 d-lg-flex d-none">

                                        <div className="d-lg-flex d-none text-center">
                                            <img src={ camera } className="img-fluid rounded-3 h-100" alt="Camera"/>
                                        </div>

                                    </div>

                                    <div className="col-lg-7 rounded-3" >

                                        <form className="container rounded-3 mb-0 bg-opacity-25 p-lg-3 mt-0">
                                            <h1 className="text-center mt-3 pb-5">Venuka's Profile</h1>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Fist Name</label>

                                                    <div className="col-sm-8">
                                                        <input
                                                            value="Venuka"
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter First Name"
                                                            // onChange={ (e) => setFirstName( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Last Name</label>

                                                <div className="col-sm-8">
                                                    <input
                                                        value="Selvanayakam"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter Last Name"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">NIC Number</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value="986007720V"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter NIC Number"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Contact Number</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value="0761145990"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter Contact Number"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">

                                                <label className="col-sm-4 col-form-label">Gender</label>
                                                <div className="col-sm-8">
                                                    <Form.Check
                                                        inline
                                                        label="Male"
                                                        name="group1"
                                                        type="radio"
                                                    />

                                                    <Form.Check
                                                        inline
                                                        label="Female"
                                                        name="group2"
                                                        type="radio"
                                                        checked
                                                    />
                                                </div>

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Email</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value="venuucsc@gmail.com"
                                                        className="form-control"
                                                        type="email"
                                                        placeholder="Enter Email"
                                                        //onChange={ (e) => setName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="d-flex gap-xxl-5 mb-2 align-items-center justify-content-center pt-5 pb-4">
                                                    <button type="submit" variant="primary"
                                                            className="btn btn-dark btn-block px-3" >
                                                        Save
                                                    </button>

                                                    <button type="submit" variant="secondary"
                                                            className="btn btn-danger btn-block">
                                                        Delete
                                                    </button>
                                                </div>

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

export default CustomerProfile
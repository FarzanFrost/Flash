import React, {useState, useContext, useEffect} from 'react';
import camera from "./Images/camera.jpg";
import {Form} from "react-bootstrap";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import {useLocation} from "react-router-dom";
import axios from "axios";

const CustomerProfile = () =>{

    const location = useLocation()

    const { changeContentVisible, logout} = useContext( AuthenticationContext )

    const serverLink = 'http://localhost:8080'

    const customerDetail = location.state.userDetailsAfterAuthentication

    const customerID = customerDetail.customer.customerID

    //const { userDetailsAfterAuthentication } = useContext( AuthenticationContext )

    const [firstName, setFirstName] = useState(customerDetail.customer.firstName)

    const [lastName, setLastName] = useState(customerDetail.customer.lastName)

    const [nic, setNic] = useState(customerDetail.customer.nic)

    const [contactNo, setContactNo] = useState(customerDetail.customer.contactNo)

    const [gender, setGender] = useState(customerDetail.customer.gender)

    const [email, setEmail] = useState(customerDetail.email)

    console.log("customerId:kdasljf;lkejafd;glkjs;d ", customerDetail)

    useEffect(
        () => {
            setFirstName(customerDetail.customer.firstName)
            setLastName(customerDetail.customer.lastName)
            setNic(customerDetail.customer.nic)
            setContactNo(customerDetail.customer.contactNo)
            setGender(customerDetail.customer.gender)
            setEmail(customerDetail.email)
        } , []
    )

    const editCustomer = () =>{

        const data = {

            customerID,
            firstName,
            lastName,
            nic,
            contactNo,
            gender,
            email

        }

        axios.post(serverLink + '/updateCustomer', data).then(
            (response) => {
                if ( response.data === "done"){

                    changeContentVisible( 0 )
                }
            }
        ).catch(

            () => {alert("Error!!! Customer Details")}
        )

    }

    const deleteCustomer = () => {

        axios.post( serverLink + '/deleteCustomer' , {customerID} ).then(

            ( response ) => {

                if ( response.data === "done" ){

                    location.state = null; logout()

                }

            }

        ).catch(

            () => { alert( "Error!!! delete customer") }

        )

    }

    return(
        <div className="h-100">

            <section className="h-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-xl-11 my-5 py-2 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="card rounded-3 text-black my-lg-0 my-xl-0 py-xl-0" style={ { backgroundColor : '#d7d7d7' } }>

                                <div className="row g-0">

                                                <div className="col-lg-5 d-lg-flex d-none">

                                                    <div className="d-lg-flex d-none text-center">
                                                        <img src={camera} className="img-fluid rounded-3 h-100"
                                                             alt="Camera"/>
                                                    </div>

                                                </div>

                                        <div className="col-lg-7 rounded-3" >

                                                    <form
                                                        className="container rounded-3 mb-0 bg-opacity-25 p-lg-3 mt-0">
                                                        <h1 className="text-center mt-3 pb-5">{customerDetail.customer.firstName}'s
                                                            Profile</h1>

                                                        <div className="form-group row mt-3 mx-3">
                                                            <label className="col-sm-4 col-form-label">Fist Name</label>

                                                            <div className="col-sm-8">
                                                                <input
                                                                    value={ firstName }
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Enter First Name"
                                                                    onChange={(e) => setFirstName(e.target.value)}
                                                                    autoFocus
                                                                    required
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className="form-group row mt-3 mx-3">
                                                            <label className="col-sm-4 col-form-label">Last Name</label>

                                                            <div className="col-sm-8">
                                                                <input
                                                                    value={ lastName }
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Enter Last Name"
                                                                    onChange={(e) => setLastName(e.target.value)}
                                                                    autoFocus
                                                                    required
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className="form-group row mt-3 mx-3">
                                                            <label className="col-sm-4 col-form-label">NIC
                                                                Number</label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    value={ nic }
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Enter NIC Number"
                                                                    onChange={(e) => setNic(e.target.value)}
                                                                    autoFocus
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row mt-3 mx-3">
                                                            <label className="col-sm-4 col-form-label">Contact
                                                                Number</label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    value={ contactNo }
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Enter Contact Number"
                                                                    onChange={(e) => setContactNo(e.target.value)}
                                                                    autoFocus
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row mt-3 mx-3">

                                                            <label className="col-sm-4 col-form-label">Gender</label>
                                                            <div className="col-sm-8">
                                                                <Form.Check
                                                                    value={true}
                                                                    inline
                                                                    label="Male"
                                                                    name="group1"
                                                                    type="radio"
                                                                    onChange={(e) => setGender(true)}
                                                                />

                                                                <Form.Check
                                                                    value={true}
                                                                    inline
                                                                    label="Female"
                                                                    name="group2"
                                                                    type="radio"
                                                                    checked
                                                                    onChange={(e) => setGender(true)}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className="form-group row mt-3 mx-3">
                                                            <label className="col-sm-4 col-form-label">Email</label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    value={ email }
                                                                    className="form-control"
                                                                    type="email"
                                                                    placeholder="Enter Email"
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    autoFocus
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div
                                                                className="d-flex gap-xxl-5 mb-2 align-items-center justify-content-center pt-5 pb-4">
                                                                <button type="submit" variant="primary"
                                                                        className="btn btn-dark btn-block px-3" onClick={editCustomer}>
                                                                    Save
                                                                </button>

                                                                <button type="submit" variant="secondary"
                                                                        className="btn btn-danger btn-block"
                                                                        onClick={deleteCustomer}>
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
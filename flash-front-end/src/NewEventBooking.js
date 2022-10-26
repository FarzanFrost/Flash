import React, {useState, useContext, useEffect} from 'react';
import pic from './Images/booking.jpeg';
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import axios from "axios";
import {useLocation} from "react-router-dom";

const NewEventBooking = () => {

    const serverLink = 'http://localhost:8080'

    const location = useLocation()

    const { changeContentVisible, userDetailsAfterAuthentication } = useContext( AuthenticationContext )

    const customerDetail = location.state.userDetailsAfterAuthentication

    const customerID = customerDetail.customer.customerID

    //const packageID = packagesDetail.packageID

    //console.log("id", packageID)

    const [ category , setCategory ] = useState( 'Wedding' )

    const [ eventDate , setEventDate ] = useState( '' )

    const [ startTime , setStartTime ] = useState( '' )

    const [ endTime , setEndTime ] = useState( '' )

    const [ address , setAddress ] = useState( '' )

    const [ packages , setPackages ] = useState( 'Gold' )

    const [allPackage, setAllPackage] = useState(null)

    useEffect( () => {

        axios.get(serverLink + '/AllPackages').then(
            (response) => {

                setAllPackage(response.data)
                console.log("data", response.data.packageID)
            }
        ).catch(
            () => {alert("Error!!! All Packages")}
        )

    }, [])

    const NewEvent = () => {

        const data = {

            category,
            eventDate,
            startTime,
            endTime,
            address,
            packages,
            customerID,
            packageID
        }

        axios.post( serverLink + '/bookings' , data).then(
            ( response ) => {

                if (response.data === "done" ){
                    changeContentVisible( 1 )
                }

            }

        ).catch(

            () => {alert("Error!!! Add new booking ")}
        )

    }



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
                                        <div className="d-grid d-md-flex justify-content-md-end mt-3 mx-3">
                                            <button className="btn btn-dark btn-block px-3" onClick={ () => changeContentVisible( 7 ) }>Packages</button>
                                        </div>

                                        <form className="container rounded-3 mb-0 bg-opacity-25 p-lg-3 mt-0" >

                                            <h1 className="text-center mt-3 pb-5">Booking Events</h1>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Event Type</label>
                                                <div className="col-sm-8">
                                                    <select className="form-select" onChange={ ( e ) => setCategory( e.target.value ) }>
                                                        <option>Wedding</option>
                                                        <option>Birthday</option>
                                                        <option>Puberty</option>
                                                        <option>Get together</option>
                                                        <option>House warming</option>
                                                        <option>Prize giving</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/*<div className="form-group row mt-3 mx-3">*/}
                                            {/*    <label className="col-sm-4 col-form-label">Additional</label>*/}
                                            {/*    <div className="col-sm-8">*/}
                                            {/*        <select className="form-select">*/}
                                            {/*            <option>Wedding Only</option>*/}
                                            {/*            <option>Reception Only</option>*/}
                                            {/*            <option>Registration Only</option>*/}
                                            {/*            <option>Wedding with Reception</option>*/}
                                            {/*            <option>Wedding with Registration</option>*/}
                                            {/*            <option>Registration with Reception</option>*/}
                                            {/*            <option>Wedding with both ceremony</option>*/}
                                            {/*        </select>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Date</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value= { eventDate }
                                                        className="form-control"
                                                        type="Date"
                                                        placeholder="Enter the Date"
                                                        onChange={ (e) => setEventDate( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Start Time</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value= {startTime}
                                                        className="form-control"
                                                        type="Time"
                                                        placeholder="Enter the Start Time"
                                                        onChange={ (e) => setStartTime( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">End Time</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value={ endTime }
                                                        className="form-control"
                                                        type="Time"
                                                        placeholder="Enter the End Time"
                                                        onChange={ (e) => setEndTime( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Address</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value= { address }
                                                        className="form-control"
                                                        type="Text"
                                                        placeholder="Enter the Address"
                                                        onChange={ (e) => setAddress( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {
                                                allPackage.map(
                                                    (packagesDetail) => (

                                                        <div className="form-group row mt-3 mx-3">
                                                            <label className="col-sm-4 col-form-label">Package</label>
                                                            <div className="col-sm-8">
                                                                <select className="form-select"
                                                                        onChange={(e) => setPackages(e.target.value)}>
                                                                    <option>{packagesDetail.name}</option>
                                                                    {/*<option>Diamond</option>*/}
                                                                    {/*<option>Silver</option>*/}
                                                                    {/*<option>Gold</option>*/}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            }

                                            <div className="d-flex gap-xxl-5 mb-2 align-items-center justify-content-center pt-5 pb-4">
                                                <button type="submit" variant="primary"
                                                        className="btn btn-dark btn-block px-3" onClick={NewEvent}>
                                                    Book
                                                </button>

                                                <button type="submit" variant="secondary"
                                                        className="btn btn-danger btn-block" onClick={ () => changeContentVisible( 1 ) }>
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
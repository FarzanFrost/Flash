import React, {useState, useContext, useEffect} from 'react';
import pic from './Images/booking.jpeg';
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import axios from "axios";

const ChangeBooking = () => {
    const { changeContentVisible, eventDetails, setEventDetails } = useContext( AuthenticationContext )

    const serverLink = 'http://localhost:8080'

    //const [eventDetail, setEventDetail] = useState(null)

    //const eventID = eventDetails.eventId

    console.log("bookings", eventDetails)

    const typeArray = [ 'Wedding' , 'Birthday' , 'Puberty' , 'Get together' , 'House warming' , 'Prize giving' ]

    //const [ eventType , setEventType ] = useState( 'Wedding' )

    const [ date , setDate ] = useState( eventDetails.date )

    const [ startTime , setStartTime ] = useState( '' )

    const [ endTime , setEndTime ] = useState( '' )

    const [ address , setAddress ] = useState( '' )

    const [ packages , setPackages ] = useState( 'Gold' )

    useEffect(
        () => {

            setDate(eventDetails.date)
            setStartTime(eventDetails.startTime)
            setEndTime(eventDetails.endTime)
            setAddress(eventDetails.address)
            setPackages(eventDetails.packages)
        }, []
    )

    //console.log("eventId", eventID)

    // useEffect( () => {
    //
    //     axios.get( serverLink + '/Allevent').then(
    //
    //         (response) => {
    //
    //             setEventDetail(response.data)
    //
    //             console.log(response.data)
    //         }
    //     ).catch(
    //         () => {alert("Error!!! All Events")}
    //     )
    // })

    const editEvent = () => {
        const data = {

            date,
            startTime,
            endTime,
            address,
            packages

        }

        axios.post( serverLink + '/updateEvent', data).then(
            (response) => {

                if (response.data === "done" ){

                    changeContentVisible( 1 )

                }

            }

        ).catch(

            () => {alert("Error!!! Change the Booking")}
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
                                                <span className="col-sm-8 fw-bold">{eventDetails.eventType}</span>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Date</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value= {date}
                                                        className="form-control"
                                                        type="Date"
                                                        placeholder="Enter the Date"
                                                        onChange={ (e) => setDate( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Start Time</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        value={ startTime }
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
                                                        value = { address}
                                                        className="form-control"
                                                        type="Text"
                                                        placeholder="Enter the Address"
                                                        onChange={ (e) => setAddress( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Package</label>
                                                <div className="col-sm-8">
                                                    <select className="form-select" onChange={ (e) => setPackages( e.target.value )}>
                                                        <option defaultChecked>Platinum</option>
                                                        <option>Diamond</option>
                                                        <option>Silver</option>
                                                        <option>Gold</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="d-flex gap-xxl-5 mb-2 align-items-center justify-content-center pt-5 pb-4">
                                                <button type="submit" variant="primary"
                                                        className="btn btn-dark btn-block" onClick={editEvent}>
                                                    Change
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

export default ChangeBooking
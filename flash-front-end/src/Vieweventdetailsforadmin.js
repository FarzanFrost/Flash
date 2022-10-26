import React, {useContext, useEffect} from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {ModalHeader} from "react-bootstrap";
// import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";




const Vieweventdetailsforadmin = () => {

    // const { changeContentVisible } = useContext( AuthenticationContext )

    const serverLink = 'http://localhost:8080';

    const [show, setShow] = useState(false);

    const [ adminEvent , setadminEvent ] = useState( null )

    // let eventCount  = 1

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        // const style3 = {
        //
        //     backgroundColor:'black',
        //     color:'white'
        // };

    useEffect( () => {

        axios.get( serverLink + '/AdminViewEvents' ).then(

            ( response ) => {

                setadminEvent( response.data )
                console.log( response.data )

            }

        ).catch(

            () => { alert( "Error!!! Admin display event details ") }

        )

    } ,[])

        return (
            <div className="h-100">

                <div className='container'>

                    <div className="pt-4" >

                        <div className="card border-dark border-0 rounded-5 shadow mt-3 mx-5 " style={{backgroundColor: '#d7d7d7'}}>

                            <h2 className="text-center mt-3" >Event Details</h2>

                            <div className="row">
                                <div className="col-xs-8 col-xs-offset-2">
                                    <div className="input-group ">
                                        <div className="input-group-btn search-panel">

                                            <select className="btn btn-dark dropdown-toggle  "   type="button" id="Filter"
                                                    data-bs-toggle="dropdown">
                                                <option value="All">All</option>
                                                <option value="Wedding">Event Id</option>
                                                <option value="EventId">Event</option>
                                                <option value="Date">Date</option>
                                                <option value="BookingDate">Booking Date</option>
                                                <option value="status">status</option>


                                            </select>
                                        </div>

                                        <input type="hidden" name="search_param" value="all" id="search_param"></input>
                                        <input type="text" className="form-control" name="x"
                                               placeholder="Search term..."></input>
                                        <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><span
                        className="glyphicon glyphicon-search"></span></button>
                </span>
                                    </div>
                                </div>
                            </div>



                            <div className="card-body pb-5">

                                <div className="table-responsive ">
                                    <table className="table table-dark table-striped align-middle">

                                        <thead className="align-middle">

                                        {/*<thead>*/}

                                        <tr>
                                            <th scope="col">Event Id</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Event Date</th>
                                            <th scope="col">Event ID</th>
                                            {/*<th scope="col">CustomerID</th>*/}
                                            <th scope="col">Address</th>
                                            <th scope="col-2">Category</th>
                                            <th scope="col-2">More</th>

                                        </tr>
                                        </thead>
                                        <tbody>

                                        { adminEvent !== null &&

                                            adminEvent.map(

                                                ( event ) => (

                                        <tr>
                                            <th scope="col">{event.eventID}</th>
                                            <th scope="col">{event.status}</th>
                                            <th scope="col">{event.eventDate}</th>
                                            <th scope="col">{event.eventID}</th>
                                            <th scope="col">{event.CustomerId}</th>
                                            <th scope="col">{event.address}</th>
                                            {/*<th scope="col">{event}</th>*/}

                                            <th scope="col">
                                                <Button variant="light" onClick={handleShow}>
                                                    Details
                                                </Button>

                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Event full Details</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body><Modal.Title>Start Time:</Modal.Title>{event.startTime}</Modal.Body>
                                                    <Modal.Body><Modal.Title>End Time:</Modal.Title>{event.endTime}</Modal.Body>
                                                    <Modal.Body><Modal.Title>Longitude:</Modal.Title>{event.longitude}</Modal.Body>
                                                    <Modal.Body><Modal.Title>Latitude:</Modal.Title>{event.latitude}</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="dark" onClick={handleClose}>
                                                            Delete Review
                                                        </Button>
                                                        <Button variant="dark" onClick={handleClose}>
                                                            close
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </th>

                                        </tr>

                                                )

                                            )

                                        }
                                        </tbody>
                                    </table>
                                </div>

                            </div> {/*end table*/}


                        </div>
                    </div>

                </div>

            </div>

        )

}

export default Vieweventdetailsforadmin

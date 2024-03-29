import React, {useEffect} from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {useContext} from "react";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";



const ManagerViewEventFullDetails = () => {

    const { changeContentVisible } = useContext( AuthenticationContext )
    const serverLink = 'http://localhost:8080'

    const style3 = {

        backgroundColor:'black',
        color:'white'
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ events , setEvents ] = useState( null )

    useEffect(

        () => {

            axios.get( serverLink + '/events' ).then(

                ( response ) => {

                    console.log( response.data )
                    setEvents( response.data )

                }

            ).catch(

                () => {

                    alert("employee view events")

                }

            )

        }

    )

    const deleteEvent = ( eventID ) => {
        console.log( eventID )
        axios.post( serverLink + '/AdminDeleteEvent' , {eventID} ).then(
            ( response ) => {
                if ( response.data === "done" ){
                    setShow(false);
                }
            }
        ).catch(
            () => { alert( "Error!!! delete event") }
        )
    }

    return (
        <div className="h-100">

            <div className='container'>

                <div className="pt-4" >

                    <div className="card border-dark border-0 rounded-5 shadow mt-3 mx-5 " style={{backgroundColor: '#d7d7d7'}}>

                        <h2 className="text-center mt-3" >Event Details</h2>

                {/*        <div className="row">*/}
                {/*            <div className="col-xs-8 col-xs-offset-2">*/}
                {/*                <div className="input-group ">*/}
                {/*                    <div className="input-group-btn search-panel">*/}

                {/*                        <select className="btn btn-dark dropdown-toggle  "   type="button" id="Filter"*/}
                {/*                                data-bs-toggle="dropdown">*/}
                {/*                            <option value="All">All</option>*/}
                {/*                            <option value="Wedding">Event Id</option>*/}
                {/*                            <option value="Birthday">Event</option>*/}
                {/*                            <option value="Puperty">Date</option>*/}
                {/*                            /!*<option value="Gettogether">Booking Date</option>*!/*/}
                {/*                            <option value="Housewarming">status</option>*/}


                {/*                        </select>*/}
                {/*                    </div>*/}

                {/*                    <input type="hidden" name="search_param" value="all" id="search_param"></input>*/}
                {/*                    <input type="text" className="form-control" name="x"*/}
                {/*                           placeholder="Search term..."></input>*/}
                {/*                    <span className="input-group-btn">*/}
                {/*    <button className="btn btn-default" type="button"><span*/}
                {/*        className="glyphicon glyphicon-search"></span></button>*/}
                {/*</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}



                        <div className="card-body pb-5">

                            <div className="table-responsive ">
                                <table className="table table-dark table-striped align-middle">

                                    <thead className="align-middle">

                                    {/*<thead>*/}

                                    <tr>
                                        <th scope="col">Event Id</th>
                                        <th scope="col">Event</th>
                                        <th scope="col">Date</th>
                                        {/*<th scope="col">Booking Date</th>*/}
                                        <th scope="col">status</th>
                                        <th scope="col-2">More</th>


                                    </tr>
                                    </thead>
                                    <tbody>

                                    {

                                        events !== null &&

                                        events.map(

                                            ( event ) => (

                                                <tr>
                                                    <th scope="col">{event.eventID}</th>
                                                    <th scope="col">{event.category}</th>
                                                    <th scope="col">{event.eventDate}</th>
                                                    {/*<th scope="col">2022-11-18</th>*/}
                                                    <th scope="col">{event.status}</th>

                                                    <th scope="col">
                                                        <Button variant="light" onClick={handleShow}>
                                                            Details
                                                        </Button>

                                                        <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Event full Details</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>

                                                                <div className="card-body pb-lg-5">

                                                                    <div className="table-responsive ">
                                                                        <table className="table table-dark table-striped align-middle">

                                                                            <thead className="align-middle">

                                                                            <tr>
                                                                                <th scope="col">Event Id</th>
                                                                                <th scope="col">Event</th>
                                                                                <th scope="col">Date</th>
                                                                                {/*<th scope="col">Booking Date</th>*/}
                                                                                <th scope="col">status</th>
                                                                                <th scope="col">Event Location</th>
                                                                                <th scope="col">Allocated Employees</th>


                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <th scope="col">{event.eventID}</th>
                                                                                <th scope="col">{event.category}</th>
                                                                                <th scope="col">{event.eventDate}</th>
                                                                                {/*<th scope="col">2022-11-18</th>*/}
                                                                                <th scope="col">{event.status}</th>
                                                                                <th scope="col">{event.address}</th>
                                                                                <th scope="col">{ event.employees.map(

                                                                                    ( oneEmployee ) => ( oneEmployee.firstName + " "  )

                                                                                ) }</th>




                                                                            </tr>

                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="dark" onClick={() => deleteEvent( event.eventID ) }>
                                                                    Delete Event
                                                                </Button>
                                                                <Button variant="dark" onClick={ () => changeContentVisible( 0 ) }>
                                                                    close
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    </th>


                                                </tr>

                                            )

                                        )

                                    }

                                    {/*<tr>
                                        <th scope="col">E01</th>
                                        <th scope="col">Birthday</th>
                                        <th scope="col">2022-10-26</th>
                                        <th scope="col">2022-11-18</th>
                                        <th scope="col">Pending</th>

                                        <th scope="col">
                                            <Button variant="light" onClick={handleShow}>
                                                Details
                                            </Button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Event full Details</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>It is a wonderfull studio system!</Modal.Body>
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
                                    <tr>
                                        <th scope="col">E01</th>
                                        <th scope="col">Birthday</th>
                                        <th scope="col">2022-10-26</th>
                                        <th scope="col">2022-11-18</th>
                                        <th scope="col">Pending</th>
                                        <th scope="col">
                                            <Button variant="light" onClick={handleShow}>
                                                Details
                                            </Button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Event Full Details</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>Details</Modal.Body>
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
                                    <tr>
                                        <th scope="col">E01</th>
                                        <th scope="col">Birthday</th>
                                        <th scope="col">2022-10-26</th>
                                        <th scope="col">2022-11-18</th>
                                        <th scope="col">Pending</th>
                                        <th scope="col">
                                            <Button variant="light" onClick={handleShow}>
                                                Details
                                            </Button>

                                            <Modal show={show} onHide={handleClose} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Event Full Details</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>

                                                    <div className="card-body pb-lg-5">

                                                        <div className="table-responsive ">
                                                            <table className="table table-dark table-striped align-middle">

                                                                <thead className="align-middle">

                                                                <thead>

                                                                <tr>
                                                                    <th scope="col">Event Id</th>
                                                                    <th scope="col">Event</th>
                                                                    <th scope="col">Date</th>
                                                                    <th scope="col">Booking Date</th>
                                                                    <th scope="col">status</th>
                                                                    <th scope="col">Event Location</th>
                                                                    <th scope="col">Allocated Employees</th>


                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="col">E01</th>
                                                                    <th scope="col">Birthday</th>
                                                                    <th scope="col">2022-10-26</th>
                                                                    <th scope="col">2022-11-18</th>
                                                                    <th scope="col">Pending</th>
                                                                    <th scope="col">Colombo</th>
                                                                    <th scope="col">raj,kamal</th>




                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">E01</th>
                                                                    <th scope="col">Birthday</th>
                                                                    <th scope="col">2022-10-26</th>
                                                                    <th scope="col">2022-11-18</th>
                                                                    <th scope="col">Pending</th>
                                                                    <th scope="col">Colombo</th>
                                                                    <th scope="col">raj,kamal</th>


                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">E01</th>
                                                                    <th scope="col">Birthday</th>
                                                                    <th scope="col">2022-10-26</th>
                                                                    <th scope="col">2022-11-18</th>
                                                                    <th scope="col">Pending</th>
                                                                    <th scope="col">Colombo</th>
                                                                    <th scope="col">raj,kamal</th>

                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="dark" onClick={handleClose}>
                                                        Delete Event
                                                    </Button>
                                                    <Button variant="dark" onClick={handleClose}>
                                                        close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </th>

                                    </tr>*/}
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

export default ManagerViewEventFullDetails